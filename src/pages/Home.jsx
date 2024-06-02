// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Component Imports
import Footer from "../components/Common/Footer"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import TimelineSection from "../components/core/HomePage/Timeline"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"


function Home() {
  // const navigate = useNavigate()
  // const [roomId, setRoomId] = useState();
  // const handleJoin = () => {
  //   navigate(`/live/${roomId}`)
  // }


  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black font-manrope">
        <div className="w-full h-screen flex flex-col items-center pt-20">
          <div className="flex flex-col mt-14 pt-5 text-4xl font-major-mono font-normal">
            Welcome to A2Tech
          </div>
          
          <div className="flex flex-col mt-10 text-4xl font-normal font-major-mono">
            Every success journey we’ve encountered.
          </div>

          {/* <input type="text" placeholder="Enter RoomID" value={roomId} onChange={e=>setRoomId(e.target.value)} className="blackButton mt-2 "/>
          <button onClick={handleJoin} className="yellowButton mt-4">Join Now</button> */}

          <Link to={"/signup"}>
            <div className="group mx-auto mt-10 w-fit rounded-full bg-[#27282C] hover:bg-black p-1 font-normal text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 ">
              <div className="flex flex-row items-center gap-2 rounded-full px-14 py-[10px] ">
                <p>Become an Instructor</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>

    {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row font-manrope"}
            heading={
              <div className="text-4xl font-semibold font-major-mono ">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={ 
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-caribbeangreen-900"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold font-major-mono lg:w-[70%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-black"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 mb-20">

          {/* Timeline Section - Section 2*/}
          <TimelineSection className="mt-10 mb-10"/>

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />

          {/* Instruction Section - Section 4 */}
          <InstructorSection/>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home