import React, {useState} from 'react';
import './style.css';

const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)

function Buttons () {
    return(
        <div className='buttons'>
            <input value="7" onClick={}/>
            <input value="8" onClick={}/>
            <input value="9" onClick={}/>
            <input value="C" onClick={}/>
            <input value="<" onClick={}/>

            <input value="4" onClick={}/>
            <input value="5" onClick={}/>
            <input value="6" onClick={}/>
            <input value="/" onClick={}/>
            <input value="*" onClick={}/>

            <input value="1" onClick={}/>
            <input value="2" onClick={}/>
            <input value="3" onClick={}/>
            <input value="-" onClick={}/>
            <input value="+" onClick={}/>

            <input value="0" onClick={} className='input-double'/>
            <input value="," onClick={} />
            <input value="+/-" onClick={} />
            <input value="=" onClick={} />

        </div>
    )
}

export default Buttons;
