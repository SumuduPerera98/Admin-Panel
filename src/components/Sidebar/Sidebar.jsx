import React from "react"
import Logo from '../../imgs/logo.png'
import './Sidebar.css'

const Sidebar=()=>{
    return(
        <div className="Sidebar">
            <div className="logo">
                <img src={Logo} alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
        </div>
    )
}

export default Sidebar