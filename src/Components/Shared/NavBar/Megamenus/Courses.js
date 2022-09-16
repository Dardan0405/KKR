import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './Megamenus.scss'
import { PopularCourse,Courses } from "../data";
import {IoIosArrowDroprightCircle} from 'react-icons/io' 

const Course = () =>{
return(
    <div className="nav-megamenu Categorise-megamenu" >
        <div className="menu-links">
            <h5><FormattedMessage id = 'Cat' defaultMessage = 'Categories' /></h5>
            <div className="inner-links">
                {Courses.map((props) => {
                    return(
                        <Link  to= {props.to} className='menu-main-link'>
                            <div className="bg" style={{background: `${props.bg}`}}></div>
                            <div className="main">
                                <div className="icon-contnier">
                                    <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                </div>
                                <div className="border" style={{borderColor:`${props.color}`}}>
                                </div>
                                <div className="block">
                                    <h4>{props.title}</h4>
                                    <p>{props.text}</p>
                                </div>
                           </div>
                        </Link> 
               
                    )
                   
                
                
                    })}
                    
            </div>
            <div className="Categorie">
                   <h4><FormattedMessage id='course' defaultMessage='View all Catregories'/><IoIosArrowDroprightCircle/></h4>
                 </div>
        </div> 



     





    </div>
)

     

}




export default Course