import './Card.css'
import {FaStar,FaDownload} from 'react-icons/fa'

const Card = ({image,title,category,rate,dowmload}) => {
  return (
    <div className="most-popular-item">
    <div className="card-wrapper">
        <img className='most-popular-item-image' src={image} alt="" />
    <div className="most-popular-item-content">
        <h4 className="most-popular-item-title">
            {title} <br />
            <span>{category}</span>
        </h4>
        <ul>
            <li><span style={{'color':"yellow"}}><FaStar /></span> <span>{rate}</span></li>
            <li><span style={{'color':"var(--color-primary)"}}><FaDownload /></span> <span>{dowmload}</span></li>
        </ul>
    </div>
    </div>
</div>
  )
}

export default Card