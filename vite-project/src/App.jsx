import Header from "./component/Header";
import Props from "./component/Props";

// const item = {
//   "id":1,
//   "Name": "Product",
//   "description": "This is the description",
//   "Price":19.30,
//   "Catagories": "Catagories 1"
// }  

const person = {
  'id':1,
  "name" : "Shakil",
  "age":"24",
  "phone":"01780783657"
}
const App = () => {
  return (
    <div>
        <Header/>
        <Props name="Shakil Hossain" Roll="2" age="25"/>

    </div>
  );
};

export default App;