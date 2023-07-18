
import { useRef } from 'react';

const UseRef = () => {
    // let helloUseRef = useRef();
    let helloImg = useRef();
    const changImg = () =>{
        helloImg.current.src = 'https://placehold.co/600x400/000000/FFF'
    }
    




    // const change = () =>{
    //     helloUseRef.innerText = "Hello Bangladesh"
    // }
    

    return (
        <div>
            {/* <h2 ref={(h2) =>helloUseRef = h2}></h2> */}
            {/* <button onClick={change}>Click Here</button> */}

            <img ref={helloImg} src="https://placehold.co/600x400" alt="" />        
            <button onClick={changImg}>  Change Img</button>
        </div>
    );
};

export default UseRef;