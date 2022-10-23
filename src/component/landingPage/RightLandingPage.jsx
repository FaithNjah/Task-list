import React from 'react'
import bicycleride from "../../Images/BicycleRide1.png"
import ellispe from "../../Images/Ellipse 3.png"

const rightLandingPage = () => {
  return (
    <div>

      <div className = "mt-[53px] ml-[450px] text-white ">
      <button className = " bg-indigo-600 w-40 h-10 text-xs">
          Get started now
        </button>
      </div>

      <div>
        <img src={ellispe} alt="" className = 'ml-[250px] h-20 mt-[20px] ml-48 absolute' />
      </div>

      <div >
       <img src={bicycleride} alt="" className = 'h-[500px] w-[550px] mt-[50px] mr-[100px]' />
      </div>

    </div>
  )
}

export default rightLandingPage
