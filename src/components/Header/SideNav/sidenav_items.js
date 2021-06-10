import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSignInAlt, faSignOutAlt, faFile  } from '@fortawesome/free-solid-svg-icons'

function SidenavItems() {
    
    const items =[
        {
            type: 'navItem',
            icon:faHome,
            text:'Home',
            link:'/',
            restricted: false
        },
        {
            type: 'navItem',
            icon:faUser,
            text:'My Profile',
            link:'/user',
            restricted: false
        },
        {
            type: 'navItem',
            icon: faFile,
            text:'Add Admins',
            link:'/user/register',
            restricted: false
        },
        {
            type: 'navItem',
            icon:faSignInAlt,
            text:'Login',
            link:'/login',
            restricted: false
        },
        {
            type: 'navItem',
            icon:faFile,
            text:'My Reviews',
            link:'/user/user-reviews',
            restricted: false
        },
        {
            type: 'navItem',
            icon:faFile,
            text:'Add Reviews',
            link:'/user/add',
            restricted: false
        },
        {
            type: 'navItem',
            icon:faSignOutAlt,
            text:'Logout',
            link:'/user/logout',
            restricted: false
        }

    ]

    const element = (item,i)=>(
        <div key={i} className={item.type}>
            <Link to={item.link}>
            <FontAwesomeIcon icon={item.icon} />
                {item.text}
            </Link>
            
        </div>
    )
    
    const showItems = ()=>{
        return items.map((item,i)=>{
            return element(item,i)
        })
    }

    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SidenavItems
