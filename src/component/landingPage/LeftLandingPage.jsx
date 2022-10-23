import React from 'react'
import emojione from "../../Images/emojione1.png"
import ellipse2 from "../../Images/Ellipse 2.png"
import arrow from "../../Images/forwardarrow1.jpg"

const leftLandingPage = () => {
  return (
    <div className = "flex flex-col justify-around text-white">

      <div className = "flex flex-row pl-5">
      <img src={emojione} alt="" className = 'h-8 ' />
        <p className = "font-bold text-lg mt-2 pl-5">Cycle Band</p>
      </div>

      <div className = "ml-16">
        <p className = "font-bold ">Welcome to Cycle Band</p>
        <p className = "pt-2"> Buy, Sell, Repair and talk to other bicycle owners</p>
      </div>

      <div className = "ml-16">
        <button className = " bg-indigo-600 w-40 h-10 text-xs">
          Get started now
        </button>
        <img src={ellipse2} alt="" className = 'ml-24 h-20 mt-8' />
      </div>

    </div>
  )
}

export default leftLandingPage
