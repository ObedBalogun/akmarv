import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section>
            <footer>
                <div style={{fontSize: "20px"}}>
                <div className={'d-flex'}>
                    <div className="text-center footer-links col-6">
                        <h6 className="footer-title">Quick Links</h6>
                        <ul style={{ listStyle:"none",display:"contents"}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/beats">Beats</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social text-center col-6">
                        <h6 className="footer-title">Socials</h6>
                        <ul style={{ listStyle:"none",display:"contents"}}>
                            <li>
                                <a href="https://youtube.com/c/AkMarv" target="_blank" rel="noreferrer">
                                    Youtube &nbsp;
                                    <i className="fa fa-youtube"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/armvellous/" target="_blank" rel="noreferrer">
                                    Instagram &nbsp;
                                    <i className="fa fa-instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/Armvellous" target="_blank" rel="noreferrer">
                                    Twitter &nbsp;
                                    <i className="fa fa-twitter"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </footer>
        </section>
    );
}

export default Footer;