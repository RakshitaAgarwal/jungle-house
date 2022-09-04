import {useState} from 'react'
import '../styles/Footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('')

    function handleBlur(){
        if(!inputValue.includes('@'))
           alert('Error: no @ has been entered. This is not a valid email address.')
    }

    return(
        <footer className='jh-footer'>
            <div className='jh-footer-elem'>
                For Plant Enthusiasts🌿
            </div>
            <div className='jh-footer-elem'>
                Subscribe to our newsletter :
            </div>
            <input 
                type='text' 
                className='jh-footer-email'
                placeHolder='Enter your email'
                value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer