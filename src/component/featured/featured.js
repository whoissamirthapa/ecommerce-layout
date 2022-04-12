import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { BsGrid } from 'react-icons/bs'
import { 
    IoPhonePortraitOutline, 
    IoLaptopOutline, 
    IoTabletPortraitOutline,
    IoTvOutline, 
    IoGameControllerOutline, 
    IoWatchOutline, 
    IoCameraOutline 
} from 'react-icons/io5'

const Featured = () => {
    return (
        <section className='featured_cotainer'>
            <div className='categories_container'>
                <ol className='categories_list'>
                    <li className='active_category'>
                        <BsGrid className='categories_icon' /> All Categories
                    </li>
                    <li>
                        <div>
                            <IoPhonePortraitOutline className='categories_icon' /> Smart Phones
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                    <li> 
                        <div>
                            <IoTabletPortraitOutline className='categories_icon' /> Tablets
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                    <li> 
                        <div>
                            <IoLaptopOutline className='categories_icon' /> Laptops
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                    <li> 
                        <div>
                            <IoTvOutline className="categories_icon" /> Desktops
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                    <li>
                        <div>
                            <IoGameControllerOutline className='categories_icon' /> Gaming Consoles
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                    <li>
                        <div>
                            <IoWatchOutline className="categories_icon" /> Smart Wearables
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                    <li>
                        <div>
                            <IoCameraOutline className="categories_icon" />Cameras
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                    <li>
                        <div>
                            <IoWatchOutline className='categories_icon' /> Electronic Accessories
                        </div>
                        <div> <GoChevronRight /></div>
                    </li>
                </ol>
            </div>
            <div className='featured_image'>
                <div className='featured_text'>
                    <div>
                        <h1>
                            Bright , <span className='diff_color'>Colorful </span><br /> & Sharp 
                        </h1>
                        <p>Better Price , better quality</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className='featured_image_here'>
                </div>
            </div>
        </section>
    )
}

export default Featured