import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../src/assets/frontend_assets/assets.js'

function ExploreMenu() {
  return (
    <div className="explore-menu" id="explore-menu ">
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Discover a variety of delicious dishes crafted with the freshest ingredients.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )

            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu