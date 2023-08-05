import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditTodo, ToggleCompleted } from '../redux/state/todo/todoSlice';
import { TodoRemove } from './TodoRemove';
import { TodoEdit } from './TodoEdit';
import { Complete } from './Complete';

const TodoList = () => {
     const todoItems = useSelector((state) => state.todo.value );
   
    return ( 
        <div className='container my-3'>
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Completed</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoItems.map((item, index) =>{
                                    return(
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td style={{textDecoration:item.completed ? "line-through": "none"}}>{item}</td>
                                            <td><input  type="checkbox" checked={item.completed} onChange={() =>{Complete(index)}} /></td>
                                         {console.log(item)}
                            
                                            <td><button onClick={() =>{TodoEdit(index,item)}}  className="btn btn-sm btn-success">Edit</button></td>
                                            <td><button onClick={() => TodoRemove(index)} className="btn btn-sm btn-danger">Remove</button></td>
                                         </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;

