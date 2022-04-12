import React from 'react';
import ListProduct from './listProduct';

const newYearStock = [
    {
        id: 1,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/yellowCamera.png")
    },
    {
        id: 2,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/manyphone.png")
    },
    {
        id: 3,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/mytv.png")
    },
    {
        id: 4,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/keyboard.png")
    },
    {
        id: 5,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/blackcamera.png")
    },
    {
        id: 6,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/digitalwatch1.png")
    },
    {
        id: 7,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/digitalwatch2.png")
    },
    {
        id: 8,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/manyphone1.png")
    },
    {
        id: 9,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/blackcamera.png")
    },
    {
        id: 10,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/digitalwatch1.png")
    },
    {
        id: 11,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/digitalwatch2.png")
    },
    {
        id: 12,
        title: "LED Smart Watch",
        actual_price: 120,
        marginal_price: 150,
        discount: 10,
        image: require("../../assests/manyphone1.png")
    },
]

const NewYearStock = () => {
  return (
    <div className='new_year_stock_container'>
        <div>
            <h1>
                New year Stock Clearance
            </h1>
        </div>

        <div className='new_year_stock_here'>
            { newYearStock.map((product)=>{
                return (
                <ListProduct product={product} key={product.id}/>
            )
            })}
        </div>
    </div>
  )
}

export default NewYearStock