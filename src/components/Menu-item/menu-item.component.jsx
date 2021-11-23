import React from 'react' 
import './menu-item.style.scss'

const MenuItem = ({title, imageURL, size}) => {
    return(
        <div  className= {`${size} menu-item`}>
            <div
            className='background-image'
            style={{
            backgroundImage:`url(${imageURL})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='sub-title'>Shop Now</span>
        </div>
        </div>
    )
}

export default MenuItem