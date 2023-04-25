import { useState } from "react";

function Menu(){
    const [data,setData]=useState({
        cps:12,
        cpd:10,
        std:8,
        td:2
    });
    const [item,setItem]= useState(0);
    const [price,setPrice]=useState(0);
    const [money,setMoney]=useState(0);


    const handleChange=(e)=>{
        const target = e.target.value;
        if (target=="cps") {
            setItem(12);
            setPrice(12);
        }
        else if(target=="cpd"){
            setItem(10);
            setPrice(10);

        }
        else if(target=="std"){
            setItem(8);
            setPrice(8);

        }
        else if(target=="td"){
            setItem(2);
            setPrice(2);

        }
    }
    const handlePrice = (e)=>{
        const target = e.target.value;
        setPrice(target*item);
    }
    const handleMoney = (e)=>{
        const target = e.target.value
        setMoney(target);
    }
    const handleSubmit=()=>{
        if ((money-price)<0) {
            alert("hey you thiếu tiền kìa");
        }
        else{
            if ((money-price)==0) {
                alert("cảm ơn nhìu và bạn còn 0 đồng");
            }
            else{
                if ((money-price)==0) {
                    alert("cảm ơn nhìu và bạn còn ",(money-price)," đồng");
                }
            }
        }
    }
    return(
        <div>
            <h1>Menu</h1>
            <p>Cà phê sữa {data.cps}</p>
            <p>Cà phê đá {data.cpd}</p>
            <p>Sting dâu {data.std}</p>
            <p>Trà đá {data.td}</p>
            <form>
                <select onChange={handleChange}>
                    <option value={"null"} selected disabled>Vui lòng chọn</option>
                    <option value={"cps"} >Cà phê sữa</option>
                    <option value={"cpd"} >Cà phê đá</option>
                    <option value={"std"} >Sting dâu</option>
                    <option value={"td"} >Trà đá</option>
                </select>
                <p>Giá tiền {price}</p>
                {item!==0 &&
                    <div>
                        <label>
                            Số lượng<input min={0} onChange={handlePrice} type="number"></input>
                        </label>
                        <label>
                            Tiền của bạn:<input type="number" onChange={handleMoney}></input>
                        </label>
                        <button type="button" onClick={handleSubmit}>Múc</button>
                    </div>
                }
                
            </form>
        </div>
    )
}

export default Menu;