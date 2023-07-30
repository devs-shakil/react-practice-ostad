import { useRef } from "react";
import { useState } from "react";

const TodoApp = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    const Input = useRef();

   const AddToList = () =>{
    list.push(item);
    setList([...list]);
    Input.current.value = "";
   };

   const deleteList = (index) =>{
        list.splice(index, 1);
        setList([...list]);
        
        
   }

    return (
        <div>
            <input ref={Input} onChange={(e) => setItem(e.target.value) } placeholder="Enter Item"/>
            <button onClick={AddToList}>Add</button>
            
            <ul>
                {list.length !== 0 ? (
                    list.map((element, index) =>{
                       
                        return(
                            <li key={index}> 
                             {element}
                            <button type="delete"  onClick={() =>{deleteList(index)}}> Remove</button>

                            </li>
                            
                        )
                       
                    })
                ):(console.log("nawshad er matha"))}
            </ul>
        </div>
    );
};

export default TodoApp;