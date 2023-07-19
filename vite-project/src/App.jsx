// import Header from "./component/Header";
// import Props from "./component/Props";
import DarkLightMode from "./component/DarkLightMode";
import UseRef from "./component/UseRef";

//passing function
// const helloFunction = () =>{
//   alert("Hi, Mr. Shakil");
// }


// const item = {
//   "id":1,4444
//   "Name": "Product",
//   "description": "This is the description",
//   "Price":19.30,
//   "Catagories": "Catagories 1"
// }  

// const person = {
//   'id':1,
//   "name" : "Shakil",
//   "age":"24",
//   "phone":"01780783657"
// }
const App = () => {
  return (
    <div>
        
        {/* <Props name="Shakil Hossain" Roll="2" age="25"/> */}
        {/* <Header person={person}/> */}
        {/* <PassFunction helloFunction={helloFunction} /> */}
        <UseRef/>
        <DarkLightMode/>
    </div>
  );
};

export default App;