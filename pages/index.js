import Head from 'next/head'
import Image from 'next/image'

import { Navbar, HeroBanner, Product } from '../components'


const Home= ()=> {
  return (
    <>
   
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
     {
       ['Speakers', ' Headphones'].map((product)=>product)
     }
    </div>
    </>
  )
}
export default Home;
