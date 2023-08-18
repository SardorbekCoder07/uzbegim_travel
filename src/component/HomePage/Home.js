import React from 'react'
import Main from "../Page1/Page1"
import Page2 from "./Page2"
import Footer from "../footer/Footer"
// import Loading from '../Loading/Loading'



const Home = () => {

  return (
    <div>
      {/* <Loading/> */}
      <Main />
      <Page2 />
      <Footer />
    </div>
  );

}

export default Home;