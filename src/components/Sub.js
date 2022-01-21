import { useState } from "react";

function Sub(props){

    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ result, setResult ] = useState(0);

    function subfun(){
        setResult(num1-num2);
    }


    return (
        <>
            <h1>Sub Componnent</h1>
            Value of x : {props.x}
            <br></br>
            Value of y : {props.y}
            <br></br>
            {props.x - props.y}
            <br></br>
            <input type="text" onChange={ e => setNum1(parseInt(e.target.value)) }/>
            <input type="text" onChange={ e => setNum2(parseInt(e.target.value)) } />
            <button onClick={subfun}>Get Subtraction</button>
            <div>{result}</div>
        </>
    );
}

export default Sub;