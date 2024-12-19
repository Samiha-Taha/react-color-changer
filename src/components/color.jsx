import { useState } from "react";


function Colors(){
    const [color,setcolor]=useState('grey')

const handlebrown=()=>{setcolor('brown')}
const handlepink=()=>{setcolor('pink')}
return(
    <>
    <div className="color_set" style={{backgroundColor:color}}>
        <button onClick={handlebrown}>Brown</button>
        <button onClick={handlepink}>Pink</button>

    </div>
    </>
)




}
export default Colors
