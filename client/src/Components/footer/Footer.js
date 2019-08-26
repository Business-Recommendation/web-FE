import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'white',backgroundColor:'#423ABA'}}>
            <h1>ALL RIGHTS RESERVED ©</h1>

            <div style={{display:'flex',justifyContent:'space-between'}}>
                <NavLink to='disclaimer'>DISCLAIMER</NavLink>
                <NavLink to='terms-and-conditions'>TERMS & CONDITIONS</NavLink>
            </div>
        </div>
    )
}

export default Footer