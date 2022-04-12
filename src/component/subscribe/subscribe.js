import React from 'react'
import { FaRegEnvelopeOpen } from 'react-icons/fa';

const Subscribe = () => {
  return (
    <section className='subscribe_container'>
        <article>
            <section className='subscribe_title'>
                    <div className='subscribe_icon_here'>
                        <FaRegEnvelopeOpen className="subscribe_icon" />
                    </div>
                    <div className='subscribe_desc'>
                        <p>Subscribe to our Newslatter</p>
                        <span>Get email updated about our special offers</span>
                    </div>
                
            </section>
            <section className='subscribe_form'>
                <form>
                    <input type={"email"} placeholder="Enter your Email" id='email' name='email' />
                    <button>Subscribe</button>
                </form>
            </section>
        </article>
        
    </section>
  )
}

export default Subscribe