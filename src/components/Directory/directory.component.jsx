import React from 'react' 
import MenuItem from '../Menu-item/menu-item.component'
import './directory.style.scss'


class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: [{
                title: 'Art and Craft',
                imageURL:'/images/homepage/aart.jpg',
                id:1
            }, 
            {
            title:'Watches',
            imageURL:'/images/homepage/awatches.png',
            id:2
            }, {
                title: 'Perfumes',
                imageURL:'/images/homepage/abperfumes.jpg',
                id:3
            }, {
                title: 'Decorations',
                imageURL:'/images/homepage/adecor.jpeg',
                id:4,
                size:'large'
            }, {
                title: 'Special Gifts',
                imageURL:'/images/homepage/argift.jpg',
                id:5,
                size:'large'
            }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, id, imageURL, size} )=> {
                        return(
                            <MenuItem  key={id} title={title} imageURL={imageURL} size={size}/>
                        )
                        
                    })
                } 
            </div>
           
        )
    }
  

}


export default Directory