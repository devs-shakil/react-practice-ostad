import Swal from "sweetalert2"
import store from "../redux/store/store"
import { EditTodo } from "../redux/state/todo/todoSlice"

export const TodoEdit = (index, item) =>{
    Swal.fire({
        title: 'Edit Task Name',
        input:'text',
        inputValue:item,
        inputValidator:(value) =>{
            if(value){
                store.dispatch(EditTodo({index:index,task:value}))
            }
        }
      })
}