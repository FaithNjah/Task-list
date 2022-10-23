import React from 'react'
import LeftLandingPage from "./LeftLandingPage"
import RightLandingPage from  "./RightLandingPage"



const LandingPage = () => {
  return (
    <div className = "h-screen bg-[#11012C] flex flex-row justify-between p-2">
      <LeftLandingPage />
      <RightLandingPage />
    </div>
  )
}

export default LandingPage
