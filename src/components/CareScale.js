function message(scaleValue, careType){
    alert(`this plant requires a ${scaleValue==1 && 'small' || scaleValue==2 && 'moderate' || scaleValue==3 && 'large'} amount of ${careType}`)
}

function CareScale({scaleValue, careType})
{
    const range = [1,2,3]
    const scaleType = careType==='light' ? '☀️' : '💧'
    return(
        <div onClick={() => message(scaleValue, careType)}>
            {range.map(
                (rangeElem) => scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()}>
                        {scaleType}
                    </span> :
                    null
            )}
        </div>
    ) 
}

export default CareScale