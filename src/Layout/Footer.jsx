import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { Link } from 'react-router'

const Footer = () => {
  const Links = [
    "About us",
    "Contact us",
    "Products",
    "Login",
    "Sign Up"
  ] 

  const Customer =[
    "My Account",
    "Orders",
    "Terms",
    "Privacy Policy",
    "Shipping Information"
  ]
  return (
   <footer className='py-6 sm:py-8'>
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
      <div className='space-y-7 order-4 md:order-1'>
         <Link>
       <img src="/nirvoya.png" alt="" className='max-w-full'/>
       </Link>
       <p className='font-normal text-xs sm:text-sm mt-8  text-secondary/90 leading-relaxed whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <div className='flex gap-3 sm:gap-5 items-center'>
      <Link>
      <img src="/facebook.png" alt="" className='w-8 sm:w-10 hover:scale-110 transition'/>
      </Link>
     
      <Link>
      <img src="/twitter.png" alt="" className='w-8 sm:w-10 hover:scale-110 transition'/>
      </Link>
     
     <Link>
     <img src="/linkedin.png" alt="" className='w-8 sm:w-10 hover:scale-110 transition'/>
     </Link>
    
       <Link>
      <img src="/instagram.png" alt="" className='w-8 sm:w-10 hover:scale-110 transition'/>
      </Link>
      </div>
      </div>

      <div className='space-y-5 order-2 ml-0 sm:ml-10'>
        <h2 className='text-base sm:text-lg font-semibold text-primary'>QUICK LINKS</h2>
         <ul className='space-y-2 sm:space-y-3'>
           {
            Links.map((item)=>(
               <li key={item}>
            <Link className='text-primary/90 text-xs sm:text-sm mt-6 hover:text-brand transition block'>{item}</Link>
            </li>
            ))
           }
         </ul>
        
      </div>

      <div className='space-y-3 order-3 ml-0 sm:ml-10'>
        <h2 className='text-base sm:text-lg font-semibold text-primary'>CUSTOMER AREA</h2>
        <ul className='space-y-2 sm:space-y-3'>
            {
              Customer.map((item)=>(
              <li key={item}>
               <Link className='text-primary/90 text-xs sm:text-sm mt-6 hover:text-brand transition block'>{item}</Link>
         </li>
            ))
           }
        </ul>

      </div>

      <div className='space-y-3 order-1 md:order-4'>
        <h2 className='text-base sm:text-lg font-semibold text-primary'>CONTACT</h2>
        <p className='text-xs sm:text-sm text-primary/90 mt-6 leading-relaxed whitespace-normal w-[340px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>

        <div className='flex gap-2 sm:gap-4 items-start mt-6'>
          <RiCustomerServiceFill className='text-3xl sm:text-4xl lg:text-5xl text-gray-400 flex-shrink-0'/>
           <div className='min-w-0 flex-1'>
            <p className='text-xs sm:text-sm text-primary'>Have any question?</p>
            <p className='text-base sm:text-xl text-brand font-semibold whitespace-normal break-all'>099 456 789</p>
           </div>
        </div>
      </div>
      </div>
     </div>
   </footer>
  )
}

export default Footer
