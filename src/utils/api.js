import {SERVER_API_URL} from "./constants.js";

export const fetchFilesFromServer = async (files) => {
    try {
        const queryString = new URLSearchParams({ files: JSON.stringify(files) }).toString();

        const response = await fetch(`${SERVER_API_URL}?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching files from backend');
        }

        const data = await response.json();
        console.log('service data:', data);
        return data;

    } catch (error) {
        console.error("Error:", error);
        return [];
    }
};