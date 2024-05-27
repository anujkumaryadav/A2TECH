import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        We are passionate about revolutionizing the online education and shape you as a<HighlightText text={"Ranchoddas Shamaldas Chanchad"}/>,{" "}
        <span className="bg-gradient-to-b from-[#fbfafa] to-[#fefdfc] text-transparent bg-clip-text font-bold">
            {" "}
            not the
        </span>
        
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            Chatur
        </span> 
    </div>
  )
}

export default Quote