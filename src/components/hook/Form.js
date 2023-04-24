import { useState } from "react";

function Form(){
    const [info,setInfo] = useState({
        isGoing:true,
        guestName:'Khánh',
        course:'react.js',
        message:'your message'
    });

    const handleInputChange=(event)=>{
        const target= event.target;
        const value=target.type==="checkbox"?target.checked:target.value;
        const name= target.name;
        setInfo({
            ...info,
            [name]:value
        })
    };

    const handleSubmit=()=>{
        alert('tham gia: '+info.isGoing+" , họ tên: "
            +info.guestName+", "
            +info.course+ " và message: "
            +info.message
        )
    }
    return(
        <form>
            <label>tham gia
                <input name="isGoing" type="checkbox" checked={info.isGoing} onChange={handleInputChange}/>
            </label>
            <br></br>

            <label>ghi rõ họ tên:
                <input name="guestName" type="text" value={info.guestName} onChange={handleInputChange}/>
            </label>
            <br></br>
            
            <label>khóa học
                <select 
                    name="course"
                    value={info.course}
                    onChange={handleInputChange}
                >
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="js">js</option>
                <option value="reactjs">reactjs</option>
                </select>    
            </label>
            <br></br>

            <label>message
                <textarea
                    name="message"
                    type="text"
                    value={info.message}
                    onChange={handleInputChange}
                >
                </textarea>    
            </label>
            <br></br>
            <input type="submit" value="submit" onClick={handleSubmit}></input>
        </form>
    )
}

export default Form;