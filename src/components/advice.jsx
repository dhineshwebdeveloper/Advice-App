
import { useEffect, useState } from "react";
import "./AdviceApp.css";
               

const AdviceApp = () => {
 const[advice, setAdvice] = useState("Please click the button get a Advice");
 const [count, setCount] = useState(0);
 const [loading, setloading] = useState(false)
 async function GetAdvice () {
    setloading(true);
   const value = await fetch ("https://api.adviceslip.com/advice")
   const advice = await value.json();
   setAdvice(advice.slip.advice)
   setCount(count + 1)
   setloading(false)
 }

 useEffect(function(){
    GetAdvice();
 },[])

    return (
        <>
        <div>
            <h3>
                {loading ? "" : advice}
            </h3>
            <p>{loading ? "please waiting" : ""}</p>
            <button onClick={GetAdvice}>Get Advice</button>
            <Counter count={count} />
        </div>
        </>
    )
}

const Counter = (props) => {
    return(
        <>
        <p>You read the <b>{props.count}</b> number of Advice </p>

        </>
    )
}
export default AdviceApp;
