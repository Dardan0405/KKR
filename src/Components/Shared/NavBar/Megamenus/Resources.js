import React from 'react'

import { Link } from 'react-router-dom'
import { Resource } from "../data";

const Resources =() =>{
    
        <div className='nav-megamenu Resources-megamenu'>
            <div className='inner-links Resources'>
                {Resource.map((props) => {
                    return(
                        <Link to={props.to} className='menu-main-link Resource'>
                            <div className='Container'>
                                <div className='icon-r' style={{conten: `url(${props.icon})`}}></div>
                            </div>
                            <div className='block'>
                                <h5>{props.title}</h5>
                            </div>
                            
                        </Link>
 
                    )
                })
            }
            </div>
        </div>
    
}
export default Resources