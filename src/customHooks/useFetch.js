import React,{useState,useEffect} from "react";


const useFetch = (URL)=>{
    const [data,setData] = useState(null); // sets data state 
    const [error,setError] = useState(false); // sets error state
    const [loading,setLoading] = useState(true); // sets loading state


    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let res = await fetch(URL);
                if(!res.ok) throw new Error("fetch error")
                res = await res.json();

                setData(res);
                setError(false);
                setLoading(false);
            }catch(error){
                setData(null);
                setError(false);
                setLoading(true)
            }
        }
        fetchData();
    },[URL]) // side effect triggered on initial render (on mount) and on dependency array change

    return {data,error,loading};

}


export default useFetch;