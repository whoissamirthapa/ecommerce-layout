import React from 'react';

import Union from '../../assests/Union.png';
import BiggestSaleWatch from '../../assests/biggestSaleWatch.png';

const BiggestSale = () => {
  return (
    <section className='biggestSale_container'>
        <div className='desc_sale'>
            <div>
                <div className='desc_union'>
                    <img src={Union} alt="union" />
                </div>
                <div className='biggest_text'>
                    Biggest
                </div>
                <div className='sale_text'>
                    Sale
                </div>
                <div>
                    <span className='vertical_text'>Upto</span> <span className='diff_color'>50%</span> off
                </div>
                
            </div>
            
        </div>
        <div className='img_sale'>
            <img src={BiggestSaleWatch} alt="sale" />
        </div>
    </section>
  )
}

export default BiggestSale;
