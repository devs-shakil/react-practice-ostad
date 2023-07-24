import { useState } from "react";

    const ObjectInuseState = () => {
        const [person,setPerson] = useState({
            name:"Shakil Hossain",
            age:24,
            phone:"01780783657",
            district:"Lakshmipur"
        });

    const renderPerson = () =>{
       return Object.keys(person).map( key => (
        <div key={key}>
            <h3>{key} : {person[key]} </h3>
        </div>
       ))
    }



    const changeInfo = () =>{
        setPerson(previousObj => ({
            ...previousObj,
                name:"Tanzina akter"
        }))
    }

    return (
        <div>
           <div>{renderPerson()}</div>
            <button onClick={changeInfo}>Change</button>            
        </div>
    );
};

export default ObjectInuseState;