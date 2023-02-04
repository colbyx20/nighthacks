import {useState} from 'react';

function Button(){

    const [count,setCount] = useState(0);
    const [paragraph, setParagraph] = useState('coding is fun');

    function updateCount(){
       setCount(a => a+1);
       console.log(count);
    }


    return (
        <button onClick={() => updateCount()}>
            Sign up/Login
            {count}
            <h1 style ={{backgroundColor:'green'}}>
            {paragraph}
            </h1>
        </button>
    )
}

export default Button;