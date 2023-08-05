
import  {ToggleCompleted}  from "../redux/state/todo/todoSlice";
import store from "../redux/store/store";



export const Complete = (index) => {
   
    store.dispatch(ToggleCompleted(index));
  };