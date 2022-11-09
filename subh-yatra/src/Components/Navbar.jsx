import React from 'react'
import "./Nav.module.css"
// import {Link} from "react-router-dom"



const Nav = () => {
    return (
        <div>
            <div className="styles.na" >
                <div className="styles.navdiv"  >
                    <div style={{ marginTop: "5%", width: "0%" }} onclick="window.location.href='#'">
                        <img style={{ width: "110px" }} src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt="" />

                    </div>


                    <div style={{ color: "black", marginTop: "-10px" }} className="dropdown">
                        <button style={{ color: "black", backgroundColor: "white", marginLeft: "15px" }} className="drop">More Travel  <span style={{ marginTop: "-2%" }} className="material-icons">
                            expand_more
                        </span></button>
                        <div className="dropdownB" style={{ backgroundColor: "white" }}>
                            <div className="dropone">
                                <div className="spandiv"><span className="material-icons">
                                    apartment</span></div>
                                <div><a onclick="window.location.href='#'"> Stay </a></div>
                            </div>



                            <div className="droptwo" >
                                <div className="spandiv"><span className="material-icons">
                                    flight
                                </span></div>
                                <div><a onclick="window.location.href='#'"> Flight </a></div>
                            </div>


                            <div className="dropthree">
                                <div className="spandiv"> <span className="material-icons">
                                    directions_car
                                </span></div>
                                <div><a onclick="window.location.href='#'"> Cars </a></div>
                            </div>



                            <div className="styles.dropfour">
                                <div className="styles.spandiv"><span className="material-icons">
                                    inventory_2
                                </span></div>
                                <div><a onclick="window.location.href='#'"> Packages </a></div>
                            </div>


                            <div className="dropfive">
                                <div className="spandiv"> <span className="material-icons">
                                    local_activity
                                </span></div>
                                <div><a onclick="window.location.href='#'">Holiday activities</a></div>
                            </div>


                            <div className="belowicon">
                                <div>
                                    <a onclick="window.location.href='#'">Deals</a>
                                </div>
                                <div>
                                    <a >Meetings </a>
                                </div>
                                <div>
                                    <a >Mobile</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="navdiv2">

                    {/* <!-- <img src="globe.png" alt=""> --> */}
                    <span style={{ fontSize: "18px", marginTop: "-10px" }} className="material-icons">

                        language
                    </span>
                    <a style={{ fontSize: "14px", fontWeight: "500" }}>English</a>
                    <a style={{ fontSize: "14px", fontWeight: "500" }}>Support
                    </a>
                    <a style={{ fontSize: "14px", fontWeight: "500" }}>Trips</a>

                    <a style={{ fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>Sign In</a>
                </div>


            </div>
            <hr style={{ width: "100%", marginTop: "-30px" }} />
        </div>
    )
}
export default Nav