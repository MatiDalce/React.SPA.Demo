import React from 'react';
import Header from "./Encabezado.js";
import Banner from "./Banner.js";
import Product from "./Product.js";
import Footer from "./Footer.js";
function Web(){
  return (
    <div className="container">
  
     <Header/>
      <Banner/>
      <Product/>
      <Footer/>
    </div>
  )

}
export default Web;