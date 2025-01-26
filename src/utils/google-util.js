import {fetchFilesFromServer} from "./api.js";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const GOOGLE_API_URL = `https://www.googleapis.com/drive/v3/files`;


export const fetchFilesInFolder = async (folderId) => {
    try {
        const response = await fetch(
            `${GOOGLE_API_URL}?q='${folderId}'+in+parents&key=${GOOGLE_API_KEY}&fields=files(id,name,mimeType)&pageSize=1000`
        );

        if (!response.ok) {
            throw new Error(`Error fetching files: ${response.statusText}`);
        }

        const data = await response.json();
        return data.files;
    } catch (error) {
        console.error("Error fetching files:", error);
        return [];
    }
};

export const fetchImageFromDrive = async (fileId) => {
    const IMAGE_API_URL = `${GOOGLE_API_URL}/${fileId}?alt=media&key=${GOOGLE_API_KEY}`;

    try {
        const response = await fetch(IMAGE_API_URL);

        if (!response.ok) {
            throw new Error(`Error fetching file: ${response.statusText}`);
        }

        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
};

export const fetchImagesFromDrive = async (files) => {
    fetchFilesFromServer(files).then((data) => {
        console.log(data);
    });
};