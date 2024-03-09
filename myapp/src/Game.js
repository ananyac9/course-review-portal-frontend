import { useState } from "react";

function Game(){
    const [count,setcount] = useState();

    function handlecount(){
        setcount(count >= count +1);
    }
return(
    <>
<button onClick={handlecount}> add </button>
    </>
)
}

export default Game ;
