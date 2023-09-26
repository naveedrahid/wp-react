import React, { useState, useEffect } from 'react';

const useProgressBars = () => {
    const progressValues = [
        { variant: "success", targetValue: 40 },
        { variant: "info", targetValue: 20 },
        { variant: "warning", targetValue: 60 },
        { variant: "danger", targetValue: 80 }
    ];

    const [progressBars, setProgressBars] = useState(progressValues.map(() => ({ progress: 0 })));

    const labelNames = ["Developer", "Website", "Client", "Project"];

    useEffect(() => {
        const intervals = progressValues.map((_, index) => {
            return setInterval(() => {
                setProgressBars(prevProgressBars => {
                    return prevProgressBars.map((bar, i) => {
                        if (i === index && bar.progress < progressValues[index].targetValue) {
                            return { ...bar, progress: bar.progress + 1 };
                        }
                        return bar;
                    });
                });
            }, 20);
        });

        return () => {
            intervals.forEach(clearInterval);
        };
    }, [progressValues]);

    return progressBars.map((bar, index) => {
        const label = (
            <div className='progressBarContent'>
                <span>{labelNames[index]}</span>
                <span>{bar.progress}%</span>
            </div>
        );
        return { ...bar, label, variant: progressValues[index].variant };
    });
};

export default useProgressBars;
