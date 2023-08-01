import { useEffect, useState } from "react";

const UseEffectCallapi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchDataFromApi();
    }, [])

    const fetchDataFromApi = async () =>{
        try {
                const res = await fetch('https://dummyjson.com/users');
                const jsonData = await res.json();
                setData(jsonData)
        } catch (error) {
            console.log("data fetch is failed: ",error)
        }
    }

    return (
        <div>
            {
              console.log(data)
            }      
                
        </div>
    );
};

export default UseEffectCallapi;