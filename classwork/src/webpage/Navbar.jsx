import { useState } from 'react'

export default function Navbar() {

  return (
    <>
    <div id="nav">
       <div id="logo">
        <img src="src/11.svg" alt="" />
       </div>
       <div id="mid">
         <a href="">SHOP</a>
        <a href="">OCCASIONS</a>
        <a href="">GIFTING</a>
        <a href="">CORPORATE</a>
        <a href="">BUILD YOUR OWNN HAMPER</a>
       </div>
       <div id="last">
        <img src="src/user.png" alt="" />
        <img src="src/search-interface-symbol.png" alt="" />
        <img src="src/market.png" alt="" />
       </div>
    </div>
    <div id="bg">
       <div id="text">
        <h1>India's Own Artisanal <br/>Chocolate House</h1>
       <h3>Where fine chocolate meets the art of intentional gifting</h3>
       <button>VIEW COLLECTION</button>
       </div>
    </div>
    </>
  )
}
