import React from 'react';
import { withRouter } from 'react-router-dom';


import './menu-item.styles.scss'

const MenuItem =({ title, imageUrl,size, history,linkUrl, match }) => (

// react has this style property where we can put in any html element
//  it is in a object structure
<div 
className = {`${size} menu-item`} 
//code for the the route
onClick={() => history.push(`${match.url}${linkUrl}`)}
>

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

export default withRouter(MenuItem);