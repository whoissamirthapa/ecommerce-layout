import React from 'react';

import { BsCart } from "react-icons/bs";
import { IoHeartOutline } from 'react-icons/io5';

const ListProduct = (props) => {
    const product = props.product;

    return (
        <div className='tag_indv_product' >
            <div className='indv_featured_img'>
                <img src={product.image} alt="laptopfirst" />
            </div>
            <div className='indv_product_title'>
                <div className='indv_pdt_title'>
                    {product.title}
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
                Rs {product.actual_price}
            </div>
            <div className='discount_price'>
                <span>Rs. {product.marginal_price}</span>&nbsp; <span>-{product.discount}%</span>
            </div>
            <div className='hashtag_rating'>
                <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
                <img src='https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png' alt='star' />
            </div>
        </div>
    )
}

export default ListProduct