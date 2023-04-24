import { useState } from "react";

function Count() {
    // const [count,setCount] = useState(0);
    const [image,setImage] = useState("");
    const [car,setCar] = useState({
        brand:"ford",
        model:"mustang",
        year:"1999",
        color:"red"
    });

    const updateColor=()=>{
        setCar(a=>{
            return{...a,color:"bule"}
        })
    }
    return (
    <div>
        {/* <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Click here</button> */}
        <p  style={{display:"flex"}}>My image <img src={image} width={300} height={300}/></p>
        <button type="button" onClick={()=>setImage("https://tse4.mm.bing.net/th?id=OIP.pjXYe6_ccZrOYuDbS6AChQHaKm&pid=Api&P=0")}>Image1</button>
        <button type="button" onClick={()=>setImage("https://tse2.mm.bing.net/th?id=OIP.urvyv89Wj3ATjimYGtHZLQHaLG&pid=Api&P=0")}>Image2</button>
        <button type="button" onClick={()=>setImage("https://tse1.mm.bing.net/th?id=OIP.hpvpjOFJp-OiKavFfxAvTgHaJQ&pid=Api&P=0")}>Image3</button>


        <p>my {car.brand}</p>
        <p>{car.color}</p>
        <button type="button" onClick={updateColor}>blue</button>

    </div>)
}

export default Count;