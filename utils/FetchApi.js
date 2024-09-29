import { store } from "@/redux/store";
import axios from "axios";
import toast from "react-hot-toast";
export const FetchApi = async ({
    method = 'get',
    url = '',
    body = {},
    callback = () => { },
    isToast = false
}) => {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_API,
        // headers: {
        //     'Authorization': `Bearer ${store.getState().auth?.user?.token}`,
        // }
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODExOTEzLCJpYXQiOjE3MjczNzk5MTMsImp0aSI6IjEyZjE5YzA0ZDJhNjRhMmRiYmQ2YjNkMTgyNzhjMDhjIiwidXNlcl9pZCI6NX0.AHHrKl3ha0a3ekDWkgY0hRWrMgxJtAPyRzdEKc5UPG8`,
        }
    });

    let responsePromise;

    // Construct the appropriate request promise based on the HTTP method
    if (method === 'get') {
        responsePromise = instance.get(url);
    } else if (method === 'post') {
        responsePromise = instance.post(url, body);
    } else if (method === 'put') {
        responsePromise = instance.put(url, body);
    } else if (method === 'patch') {
        responsePromise = instance.patch(url, body);
    } else if (method === 'delete') {
        responsePromise = instance.delete(url);
    } else {
        throw new Error('Invalid HTTP method');
    }

    if (isToast) {
        try {
            const response = await toast.promise(
                responsePromise,
                {
                    loading: 'Loading...',
                    success: (res) => res.data.message || 'Operation successful',
                    error: (err) => {
                        return (
                            err.response?.data?.message ||
                            err.response?.data?.error ||
                            'Something went wrong'
                        );
                    }
                }
            );

            callback();
            return { data: response.data, status: response.status };

        } catch (error) {
            console.error('Request failed:', error);
            throw error;
        }
    } else {
        try {
            const response = await responsePromise;
            callback();
            return { data: response.data, status: response.status };
        } catch (error) {
            console.error('Request failed:', error);
            throw error;
        }
    }
};
