import { useState } from "react";


function Colors(){
    const [color,setcolor]=useState('black')

const handlegrey=()=>{setcolor('grey')}
const handlepink=()=>{setcolor('pink')}
return(
    <>
    <div className="color_set" style={{backgroundColor:color}}>
        <button  onClick={handlegrey}style={{ backgroundColor: 'grey', color: 'white' }}>grey</button>
        <button onClick={handlepink}style={{ backgroundColor: 'pink', color: 'white' }}>Pink</button>

    </div>
    </>
)




}
export default Colors
