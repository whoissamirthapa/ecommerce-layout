import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookSquare,FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaCopyright } from 'react-icons/fa';
import { BsFillGeoAltFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
        <section className='footer_container'>
            <section className='upper'>
                <article className='footer_company_desc'>
                    <h2>Gadget <span className='diff_color'>Mart</span></h2>
                    <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sit leo
                    consequat tincidunt tortor risus,
                    mattis enim varius. Pulvinar molestie
                    </p>
                </article>
                <article className='quick_link'>
                    <h2>Quick Links</h2>
                    <ol>
                        <li>About Us</li>
                        <li>Terms and condition</li>
                        <li>Privacy Policy</li>
                        <li>Return and refund policy</li>
                    </ol>
                </article>
                <article className='customer_link'>
                    <h2>Customer Links</h2>
                    <ol>
                        <li>
                            <FaPhoneAlt className="footer_icon" /> 9812345678
                        </li>
                        <li>
                            <FaEnvelope className="footer_icon" /> <a href = "mailto: supportgadget@gmail.com">supportgadget@gmail.com</a>
                        </li>
                        <li>
                            <BsFillGeoAltFill className='footer_icon' />Yogikuti-3 Rupandehi, Nepal
                        </li>
                    </ol>
                </article>
                <article className='follow_us'>
                    <h2>Follow us on</h2>
                    <div>
                        <a href='#' target={"_blank"}>
                            <FaFacebookSquare className="footer_icon_social" />
                        </a>
                        <a href='#' target={"_blank"}>
                            <FaTwitterSquare className="footer_icon_social" />
                        </a>
                        <a href='#' target={"_blank"}>
                            <FaInstagramSquare className="footer_icon_social" />
                        </a>
                        <a href='#' target={"_blank"}>
                            <FaLinkedin className="footer_icon_social" />
                        </a>
                    </div>
                    
                </article>
            </section>
            <section className='bottom'>
                <p>
                    <FaCopyright /> Gadget mart. All Right Reserved
                </p>
            </section>
        </section>
    </footer>
  )
}

export default Footer