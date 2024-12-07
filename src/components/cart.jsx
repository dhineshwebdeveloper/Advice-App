import { useState } from "react";

const Carts = () => {
const [noitem, setNoitem] = useState(0);
const hanldefun = () => setNoitem(noitem + 1)
const clear = () => setNoitem(0)

    return (
        <>
        <h1>number of item in the cart :{noitem}</h1>
        <button onClick={hanldefun}>add to card</button>
        <button onClick={clear}>clear all</button>
        </>
    )
}

export default Carts;