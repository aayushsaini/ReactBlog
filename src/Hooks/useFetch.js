import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
        .then((response) => {
            if(!response.ok) {
                throw Error("Cannot fetch the data");
            }
            return response.json();
        }).then((data) => {
            setIsPending(false);
            setData(data);
            setError(null);
        }).catch((err) => {
            if (err.name === "AbortError") {
                console.log("Fetch aborted upon unloaded component mounting");
            }
            else {
                setError(err.message);
                setIsPending(false);
            }
        })    
        return () => abortController.abort();
    }, [url]);
    return {data, isPending, error};
}
 
export default useFetch;