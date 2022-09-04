import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function handleClick(plantName){
    alert(`You Chooseto buy 1 ${plantName}? Geart Choice!!`)
}

function PlantItem(props){
    return(
        <li key={props.id} className='jh-plant-item' onClick={() => handleClick}>
            <img src={props.cover} alt={`${props.name} cover`} className='jh-plant-item-cover' /> 
            {props.name}
            <div>
                <CareScale scaleValue={props.light} careType='light'/>
                <CareScale scaleValue={props.water} careType='water'/>
            </div>
        </li>
    )
}


export default PlantItem