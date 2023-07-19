
import { useRef } from 'react';

const UseRef = () => {
    // let helloUseRef = useRef();
    // let helloImg = useRef();
    // const changImg = () =>{
    //     helloImg.current.src = 'https://placehold.co/600x400/000000/FFF';
    //     helloImg.current.setAttribute('width', '150px');
    //     helloImg.current.setAttribute('height', '50px');
        
    // }
    




    // const change = () =>{
    //     helloUseRef.innerText = "Hello Bangladesh"
    // }
    


    //useRef using annonymouse function
    // let firstName, lastName = useRef();
    // const change = () =>{
    //     const fName = firstName.value;
    //     const lName = lastName.value;

    //     alert(fName + " " + lName)
    // }


    
    //pursist value using useRef();
    let demoNum = useRef(0);
    const change = () =>{
        demoNum.current++
        console.log(demoNum.current)
    }


    return (
        <div>
            {/* <h2 ref={(h2) =>helloUseRef = h2}></h2> */}
            {/* <button onClick={change}>Click Here</button> */}

            {/* <img ref={helloImg} src="https://placehold.co/600x400" alt="" />        
            <button onClick={changImg}>  Change Img</button> */}

            {/* Annonymouse Function */}
            {/* <input ref={(t)=> firstName = t} type="text" placeholder='First Name' />
            <input ref={(t)=>lastName = t} type="text" placeholder='Last Name' />
            <button onClick={change}>Change</button> */}


            {/* pursist value using useRef() */}
            <button onClick={change}>Change</button>

            
        </div>
    );
};

export default UseRef;