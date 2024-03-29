import axios from 'axios';

const fetchEuriborData = async () => {
    const euriborConfig = {
        method: 'GET',
        url: 'https://euribor.p.rapidapi.com/all',
        headers: {
          'X-RapidAPI-Key': '3681f95efamsha14f3d48fd9b6afp1b35b5jsnb129096e0376',
          'X-RapidAPI-Host': 'euribor.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(euriborConfig);
        return response.data;
    } catch (error) {
        console.error('Error fetching Euribor data:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};

export default fetchEuriborData;
