import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link}  from 'react-router-dom'
import Nav from './SideNav/sidenav'

export default class Header extends Component {
    state ={
        showNav : false
    }

    onHideNav=()=>{
        this.setState({showNav: false})
    }
    render() {
        return (
            <header>
                <div className="open_nav">
                     <FontAwesomeIcon 
                     icon={faBars}
                     style={{
                         color: '#ffffff',
                         padding: '10px',
                         cursor: 'pointer'
                     }}
                     onClick={()=>{this.setState({showNav:true})}}
                     />
                </div>
                     <Nav 
                     showNav={this.state.showNav}
                     onHideNav = {()=>{this.onHideNav()}}
                     />
                     <Link to="/" className="logo"> The Book Shelf</Link>
                
            </header>
        )
    }
}
