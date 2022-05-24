import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setData(response);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    return { data, error, loading };
}

export default useFetch;
