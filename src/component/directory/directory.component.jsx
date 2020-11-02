import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections:[{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              
            }]
        }
    }

   render (){
      return (

        // displays the menulist in the homepage
        <div className='directory-menu'>
            {   
                    // this displays the objects in our state map function
                    // meaning for ...othersectionprops is pass all the other properties accordingly. base on the id given
                this.state.sections.map(({id, ...otherSectionProps }) => (


                    // this is from the menu component we import
                    // key title imageurl size are the props in MenuItem
                    // ... othersectionprops was called in line 57 in order to display the other properties accordingly
                    <MenuItem key = {id} {...otherSectionProps} />
                ))
            }
            
        </div>  
      ) 
   }
}

export default Directory;