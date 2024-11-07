import axios from 'axios';

export const  fetchData = async () => {
    try{
        const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
        // console.log(response.data);
        return response.data;
    }catch(error){
        console.log("Error fetching data", error);
        return {tickets: [], users: []};
    }
}