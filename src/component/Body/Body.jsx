
import React from 'react'
import bicycle from "../../Images/image 1.jpg"
import arrow1 from "../../Images/forwardarrow.jpg"
import arrow2 from "../../Images/backwardarrow.jpg"

const Body = () => {
  return (
    <div class = "h-screen  flex flex-col justify-between ">
        <div class = " flex flex-col justify-between  h-[50px]">
            
            <img src={arrow1} alt="" className = 'h-4 absolute mt-[200px] ml-[990px]' />
            <img src={arrow2} alt="" className = 'h-4  absolute mt[60px]' />
            <img src={bicycle} alt="" className = 'h-[250px] absolute mt-20 ml-[30%]' />
           
        </div>

        <div class = " bg-[#11012C] text-white flex flex-row " >

            <div class = " bg-[#2A0072] w-[337px] text-center ">
                <p  className = "font-bold text-lg m-2 pl-5">Road Bikes</p>
                <p  className = "font-bold text-sm m-2 pl-5">$800-$3,000</p>
                <p  className = " text-sm m-2 pl-5">Cheap</p>
                <p  className = " text-sm m-2 pl-5">Speed</p>
                <p  className = " text-sm m-2 pl-5">Ergonomical</p>
            </div>
            <div  class = " bg-[#670DFF] w-[337px] text-center ">
                <p  className = "font-bold text-lg">Mountain Bikes</p>
                <p  className = "font-bold text-sm m-2 pl-5">$1000-$4,000</p>
                <p  className = " text-sm m-2 pl-5">Affordable</p>
                <p  className = " text-sm m-2 pl-5">Slow</p>
                <p  className = " text-sm m-2 pl-5">Non-Ergonomical</p>
            </div>
            <div  class = " bg-[#111778] w-[337px] text-center ">
            <p className = "font-bold text-lg m-2 pl-5">Sport Bikes</p>
                <p  className = "font-bold text-sm m-2 pl-5">$2000-$6,000</p>
                <p  className = " text-sm m-2 pl-5">Expensive</p>
                <p  className = " text-sm m-2 pl-5">High-speed</p>
                <p  className = " text-sm m-2 pl-5"> Very-Ergonomical</p>
            </div>
            <div class = " bg-[#2A0072] w-[337px]  text-center">
                <p className = "font-bold text-lg m-2 pl-5">Kid Bikes</p>
                <p  className = "font-bold text-sm m-2 pl-5">$1000-$3,000</p>
                <p  className = " text-sm m-2 pl-5">Affordable</p>
                <p  className = " text-sm m-2 pl-5">Speed</p>
                <p  className = " text-sm m-2 pl-5">Ergonomical</p>
            </div>
        </div>
    </div>
  )
}

export default Body
