import React, { Fragment } from 'react'
import BiggestSale from '../../component/biggestSale/biggestSale'
import BottomExplore from '../../component/bottomExplore/bottomExplore'
import Featured from '../../component/featured/featured'
import Footer from '../../component/footer/footer'
import Hashtagshop from '../../component/hashTagShop/hashtagshop'
import Navbar from '../../component/navbar/navbar'
import NewYearStock from '../../component/newYearStock/newYearStock'
import Subscribe from '../../component/subscribe/subscribe'

const Home = () => {
  return (
    <Fragment>
        <Navbar />
        <Featured />
        <Hashtagshop />
        <BiggestSale />
        <NewYearStock />
        <BottomExplore />
        <Subscribe />
        <Footer />
    </Fragment>
  )
}

export default Home