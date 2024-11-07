import { useState, useEffect } from "react";
import { fetchData } from "../services/api";

const useFetchData = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await fetchData();
                console.log("Fetched data:", data);
                setTickets(data.tickets);
                setUsers(data.users);
            }catch(error){
                console.error("Error fetching data:", err);
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        getData();
    }, []);

    return { tickets, users, loading, error };
}

export default useFetchData;