
import React from 'react'

const Footer = () => {
  return (
    <div className = "flex flex-row justify-between h-[200px] bg-[#11012C] text-white">
        <div className = 'p-12 pl-[300px] text-center '>
            <p className = "font-bold text-lg ">Address</p>
            <p>No 3 Unknown Road</p>
            <p>Uyo, Akwa Ibom</p>
            <p>Nigeria</p>
        </div>
        <div className = 'p-12 pr-[300px] text-center ' >
            <p className = "font-bold text-lg ">Contact Us</p>
            <p >phone</p>
            <p>+234123456789</p>
            <p>+234123456789</p>
        </div>
    </div>
  )
}

export default Footer
