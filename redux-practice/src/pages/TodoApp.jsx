import React from 'react';
import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';

const TodoApp = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className='text-center fs-4'>Todo App</h5>
                            <div className="card-body">
                                <CreateTodo/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default TodoApp;