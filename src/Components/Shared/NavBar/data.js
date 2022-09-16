import { FormattedMessage } from 'react-intl'
import icon1 from '../../../assets/Home/Categories/icon1.svg'
import icon2 from '../../../assets/Home/Categories/icon2.svg'
import icon3 from '../../../assets/Home/Categories/icon3.svg'
import icon4 from '../../../assets/Home/Categories/icon4.svg'
import icon5 from '../../../assets/Home/Categories/icon5.svg'
import icon6 from '../../../assets/Home/Categories/icon6.svg'
import icon7 from '../../../assets/Home/Categories/icon7.svg'
import icon8 from '../../../assets/Home/Categories/icon8.svg'
import icon9 from '../../../assets/Home/Categories/icon9.svg'
import Desing from '../../../assets/Home/Categories/Desing.svg'

import Game from '../../../assets/Home/Categories/Game.svg'
import {FiVideo} from 'react-icons/fi'
import {BiSupport} from 'react-icons/bi'
import{GrDocument} from 'react-icons/gr'
import {IoHelpCircleSharp} from 'react-icons/io5'


export const Courses=  [
    {
        to: '/',
        icon: icon1,
        title: <FormattedMessage  id = 'Bussines' defaultMessage = 'Bussiness'/>,
        text:  <FormattedMessage id = 'Course'  defaultMessage = '383 Courses'/>,
        bg: '#6C5CE7',
        color: '#6C5CE7'
},
{
    to: '/',
    icon: icon2,
    title: <FormattedMessage  id = 'Photo' defaultMessage = 'Photograpy'/>,
    text:  <FormattedMessage id = 'Course1'  defaultMessage = '203 Courses'/>,
    bg: '#34B4B3',
    color: '#34B4B3'
},
{
    to: '/',
    icon: icon3,
    title: <FormattedMessage  id = 'It ' defaultMessage = 'It & Sofware'/>,
    text:  <FormattedMessage id = 'Course2'  defaultMessage = '152 Courses'/>,
    bg: '#B43AD8',
    color: '#B43AD8'
},
{
    
        to: '/',
        icon:icon4,
        title: <FormattedMessage  id = 'Art'  defaultMessage = 'Design' />,
        text:  <FormattedMessage id = 'Course3'  defaultMessage = '537 Courses'/>,
        bg: '#E0474E',
        color: '#E0474E'
    
},
{
        to: '/',
        icon:icon5,
        title: <FormattedMessage  id = 'Gamge' defaultMessage = 'Gaming'/>,
        text:  <FormattedMessage id = 'Course4'  defaultMessage = '173 Courses'/>,
        bg: '#E0474E' ,
        color: '#E0474E' 
},
{
        to: '/',
        icon:icon6,
        title: <FormattedMessage  id = 'Market' defaultMessage = 'Marketing'/>,
        text:  <FormattedMessage id = 'Course5'  defaultMessage = '145 Courses'/>,
        bg: '#DC451E' ,
        color: '#DC451E' 
},
{
    to: '/',
    icon:icon7,
    title: <FormattedMessage  id = 'Dev' defaultMessage = 'Develpoment'/>,
    text:  <FormattedMessage id = 'Course6'  defaultMessage = '506 Courses'/>,
    bg: '#EE9812' ,
    color: '#EE9812'
},
{
    to: '/',
    icon:icon8,
    title: <FormattedMessage  id = 'Finance' defaultMessage = 'Finance & Accounting'/>,
    text:  <FormattedMessage id = 'Course7'  defaultMessage = '168 Courses'/>,
    bg: '#4BBF4F' ,
    color: '#4BBF4F'
},
{
    to: '/',
    icon:icon9,
    title: <FormattedMessage  id = 'Office' defaultMessage = 'Office Productivity'/>,
    text:  <FormattedMessage id = 'Course8'  defaultMessage = '87 Courses'/>,
    bg: '#3597C2' ,
    color: '#3597C2' 
},

]
export  const PopularCourse = [{
    to: '/',
    icon:Desing,
    title: <FormattedMessage id= 'Desing' defaultMessage = 'Graphic Desing'/>,
    text: <FormattedMessage id='Content' defaultMessage = 'Desng & make Infographic'/>
},
{
    to: '/',
    icon: Game,
    title: <FormattedMessage id = 'Game' defaultMessage = 'Game Desing'/>,
    text: <FormattedMessage id = 'content1' defaultMessage = 'Game Desing: Art and Concept'/>
}
]
export const Resource = [{
    to: '/',
    icon: <FiVideo/>,
    title: <FormattedMessage id ='Video' defaultMessage = 'GuideVideo'/>
},
{
    to: '/',
    icon: <BiSupport/>,
    title: <FormattedMessage id ='sup' defaultMessage = 'Support'/>

},
{
    to: '/',
    icon: <GrDocument/>,
    title: <FormattedMessage id ='Doc' defaultMessage = 'Blog'/>
},
{
    to: '/',
    icon: <IoHelpCircleSharp/>,
    title: <FormattedMessage id ='Help' defaultMessage = 'Help Center'/>
},
]
