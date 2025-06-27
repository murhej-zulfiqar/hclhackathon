import axios from "axios";


const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_API_HOST;
instance.interceptors.request.use((request) => request);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error.response?.data?.message ||
            error.message ||
            'Unexpected error occurred';
        console.error('API Error:', message);
        return Promise.reject(message);
    }
);

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.Accept = 'application/json, text/plain, */*';
instance.defaults.headers.common['Accept-Language'] ='en-US,en;q=0.9,ar;q=0.8,en-GB;q=0.7,it;q=0.6';


export const setTokenHeader = (token: string): void => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeTokenHeader = (): void => {
    delete instance.defaults.headers.common.Authorization;
};


console.log(axios.defaults)

export default instance;