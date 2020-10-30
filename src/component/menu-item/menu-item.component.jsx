import React from 'react';
import './menu-item.styles.scss'

const MenuItem =({ title, imageUrl,size }) => (

// react has this style property where we can put in any html element
//  it is in a object structure
<div className = {`${size} menu-item`}>
    <div 
        className = 'background-image' 
        style={{
            backgroundImage: `url(${imageUrl})` 
        }} 
    />


    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>

)

export default MenuItem;