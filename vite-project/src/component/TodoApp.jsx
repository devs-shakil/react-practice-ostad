import { useState } from "react";

const TodoApp = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

   const AddToList = () =>{
    list.push(item);
    setList([...list]);

   }

    return (
        <div>
            <input onChange={(e) => setItem(e.target.value) } placeholder="Enter Item"/>
            <button onClick={AddToList}>Add</button>
            
            <ul>
                {list.length !== 0 ? (
                    list.map((element, index) =>{
                       
                        return(
                            <li key={index}>  {element} <button>Remove</button></li>
                            
                        )
                       
                    })
                ):(console.log("nawshad er matha"))}
            </ul>
        </div>
    );
};

export default TodoApp;