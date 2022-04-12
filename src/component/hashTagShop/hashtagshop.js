import React from 'react';

import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { BsCart } from "react-icons/bs";
import { IoHeartOutline } from 'react-icons/io5';

import LaptopFirst from '../../assests/laptopfirst.png';
import HeadPhone from '../../assests/headphone.png';
import SinglePhone from '../../assests/singlephone.png';
import DigitalWatch from '../../assests/digitalwatch.png';
import Game from '../../assests/game.png';
import laptop from '../../assests/laptop.png';
import Tablet from '../../assests/tablet.png';
import Accessories from '../../assests/accessories.png';


const Hashtagshop = () => {
    return (
        <section className='hashtag_container'>
            <div className='tags_here'>
                <GoChevronLeft className='tag_arrow_icon'/>
                <ol>
                    <li className='active_tag'>Hostdeals</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Top Picks</li>
                    <li>Best of Brands</li>
                    <li>Top Trending</li>
                    <li>Smart Wearables</li>
                    <li>Game Accessories</li>
                </ol>
                <GoChevronRight className='tag_arrow_icon'/>
            </div>

            <div className='tag_product_container'>
                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={LaptopFirst} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>


                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={HeadPhone} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>


                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={SinglePhone} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>


                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={DigitalWatch} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>



                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={Game} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>



                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={laptop} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>




                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={Tablet} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>



                <div className='tag_indv_product'>
                    <div className='indv_featured_img'>
                        <img src={Accessories} alt="laptopfirst" />
                    </div>
                    <div className='indv_product_title'>
                        <div className='indv_pdt_title'>
                            LED Smart Watch
                        </div>
                        <div className='indv_pdt_action'>
                            <div>
                                <BsCart className='pdt_action_icon' />
                            </div>
                            <div>
                                <IoHeartOutline className='pdt_action_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='actual_price'>
                        Rs 120
                    </div>
                    <div className='discount_price'>
                        <span>Rs. 150</span>&nbsp; <span>-10%</span>
                    </div>
                    <div className='hashtag_rating'>
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                        <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hashtagshop