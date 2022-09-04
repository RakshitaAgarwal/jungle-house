import {useState} from 'react'

function handleSubmit(e){
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function checkValue(value, setInputValue){
    if(!value.includes('f')){
        setInputValue(value)
    }
}

function QuestionForm(){
    const [inputValue, setInputValue] = useState('Ask your question here')
    const isInputError = inputValue.includes('f')
    return(
        <div>
            <textarea 
                value={inputValue}
                onChange = {(e) => checkValue(e.target.value, setInputValue)}
            />
            {/* {isInputError && <div>You are not allowed to use letter'f'</div>} */}
            <button onClick={() => alert(inputValue)}> 
                Alert me
            </button> 
        </div>  
    )
}

export default QuestionForm
