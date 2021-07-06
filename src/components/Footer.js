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
                            <li><Link to="/">Beats</Link></li>
                            <li><Link to="/">Cart</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Licensing Information</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social text-center col-6">
                        <h6 className="footer-title">Socials</h6>
                        <ul style={{ listStyle:"none",display:"contents"}}>
                            <li>
                                <Link to="https://youtube.com/c/AkMarv" target="_blank">Youtube &nbsp;
                                    <i className="fa fa-youtube"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com/armvellous/" target="_blank">Instagram &nbsp;
                                    <i className="fa fa-instagram"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.twitter.com/Armvellous" target="_blank">Twitter &nbsp;
                                    <i className="fa fa-twitter"/>
                                </Link>
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