import React from 'react';
import './SideBar.css';

const SideBar = ({categories, selectCategory}) => {

    return ( 
        <div className="sidebar-container">
            {
                categories.map(category=>{
                    return <div key={category.id} className='sidebar-item' 
                            onClick={()=>selectCategory(category.id)}>
                                {category.data.name}
                           </div>
                })
            }
        </div>
     );
}
 
export default SideBar;