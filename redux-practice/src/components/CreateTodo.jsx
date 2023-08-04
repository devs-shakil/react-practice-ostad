import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../redux/state/todo/todoSlice';
import Swal from 'sweetalert2';

const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef("");
    

    const addTodo = () =>{
        if(taskInput.current.value.length !== 0){
            dispatch(AddTodo(taskInput.current.value));
        }else{
            const {} = Swal.fire({
                title:"Please Type Anything"
              })
              
        }
       
        taskInput.current.value = "";
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} type="text" placeholder='Task Name' className='form-control' />
                </div>    
                <div className="col-md-2">
                    <button onClick={addTodo} className='btn btn-primary'>Add To do</button>
                </div>
            </div>            
        </div>
    );
};

export default CreateTodo;