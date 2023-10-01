import axios from 'axios';

export const apiUrl = 'https://stage.projects-delivery.com/wp/river_oaks/wp-json/custom/v1';

const ApiService = axios.create({
    baseURL: apiUrl,
});

const getHomeData = async (url) => {
    try {
        const response = await ApiService.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const postHomeData = async (url, payload) => {
    try {
        const response = await ApiService.post(url, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const putHomeData = async (url, payload) => {
    try {
        const response = await ApiService.put(url, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteRequestHomeData = async (url) => {
    try {
        const response = await ApiService.delete(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {
    getHomeData,
    postHomeData,
    putHomeData,
    deleteRequestHomeData
};
