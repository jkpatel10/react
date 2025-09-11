import React from 'react'

export default function Footer() {
  return (
    <div>
        <hr />
        <div id="footer">
      <div className='logof'>
        <img src="src/11.svg" alt="" />
      </div>
      
       <div>
            <div className='contact'>
                <img src="src/18.svg" alt="" />
                <p>+91 81818 65865</p>
            </div>
            <div className='contact'>
                <img src="src/19.svg" alt="" />
                <p>order@lepure.in</p>
            </div>
        </div>

      <div>
        <h4>Quick Links</h4>
        <p>About Us</p>
        <p>Blogs</p>
        <p>FAQs</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h4>Legal</h4>
        <p>Refund Policy</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Shipping Policy</p>
      </div>
    </div>
      <hr />
      <h4 className='pvt'>© 2025 - Lepure Chocolatier. Foodictive Private Limited</h4>
    </div>
  )
}
