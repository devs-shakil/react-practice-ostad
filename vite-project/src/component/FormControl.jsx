import { useState, useRef } from "react";

const FormControl = () => {
    let [formObj, setFormObj] = useState({fName: "", lName:"", city:"", gender:"",emailOrNum:"",password:"" })
    
    
    const inputOnChange = (property, value) =>{
        setFormObj(prevObj => ({
            ...prevObj ,
            [property] : value
            
        }))
     }

     const FormOnSubmit = (e) =>{
        e.preventDefault();
        console.log(formObj)
        setFormObj({fName:"", lName:"", city:"", gender:"", emailOrNum:"", password:""});
     }
    return (
        <div>
            <div className="container">
                <form  action=""  onSubmit={FormOnSubmit}>
                    <input onChange={(e) =>{inputOnChange("fName", e.target.value)}} value={formObj.fName} type="text" placeholder="First Name" />
                    
                     <br/>   
                    <input onChange={(e) =>{inputOnChange("lName", e.target.value)}} value={formObj.lName} type="text" placeholder="Last Name" />
                    <select onChange={(e) =>{inputOnChange("city", e.target.value)}} value={formObj.city}>
                        <option value="">Choose City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Lakshmipur">Lakshmipur</option>
                        <option value="Chattagram">Chattagram</option>
                    </select>
                    <br/>
                    
                    <input type="text" onChange={(e) => {inputOnChange("emailOrNum",e.target.value)}} value={formObj.emailOrNum} placeholder="Enter Email Or Number"/>
                    <input type="password" onChange={(e) => {inputOnChange("password",e.target.value)}} value={formObj.password} placeholder="New password" />
                    <input onChange={(e) =>{inputOnChange("gender", 'Male')}} checked={formObj.gender === "Male"} type="radio" name="gender"  />Male 
                    <input onChange={(e) =>{inputOnChange("gender", 'Female')}} checked={formObj.gender === "Female"} type="radio" name="gender" />Female
                    <br/>
                    <button type="submit">Submit</button>
                </form>    
            </div>            
        </div>
    );
};

export default FormControl;