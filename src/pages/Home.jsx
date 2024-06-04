// Icons Import

import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"

// images
import bghome from "../assets/Images/bghome.png"
import enrollnow from "../assets/Images/enrollnow.png"
import home1 from "../assets/Images/home1.png"
import home2 from "../assets/Images/home2.png"
import home3 from "../assets/Images/home3.png"
import home4 from "../assets/Images/home4.png"
import home5 from "../assets/Images/home5.png"
import home6 from "../assets/Images/home6.png"
import home from "../assets/Images/home.png"
import section2 from "../assets/Images/section2.png"
// Component Imports
import Footer from "../components/Common/Footer"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col  gap-8 font-manrope text-black">
        <div className="mb-0 mt-10 flex flex-row pb-0">
          <div className="mr-16 mt-10 w-[60%] items-center justify-center p-10 pb-0 text-center">
            <h1 className="text-[50px]">
              Online <span className="font-bold">Learning you can access</span>{" "}
              anywhere easily!
            </h1>
            <p className="">Every success journey we’ve encountered.</p>
            <Link to={"/signup"}>
              <div className="group mx-auto mt-10 w-fit rounded-full bg-[#FFCF59] p-1  font-bold text-black drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:bg-black hover:text-white">
                <div className="flex flex-row items-center gap-2 rounded-full px-14 py-[10px] ">
                  <p>Enroll Now</p>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative">
            <img
              src={bghome}
              alt=""
              className="absolute inset-0 h-auto object-cover"
            />
            <img
              src={home}
              alt=""
              className="relative z-10  mt-14 h-[450px] w-[350px]"
            />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="relative">
        <img src={section2} alt="" className="h-auto w-full" />
      </div>
      {/* section 3 */}
      <div className="mx-auto flex w-11/12  max-w-maxContent flex-col items-center justify-center text-center font-manrope text-black">
        <div className="m-4 mb-5">
          <h1 className="text-[25px]">
            Why we are <span className="font-bold">best from others</span>?
          </h1>
          <p className="">
            Empowering Your Learning Journey with Innovation and Excellence.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div class="m-8 w-full max-w-sm rounded-lg border-2 border-richblack-200 hover:border-[#9848FF] hover:bg-[#9848FF] hover:text-white">
            <div class="flex flex-col items-center pb-10">
              <img
                src={home1}
                alt=""
                className="mt-10 h-24 w-24 rounded-full"
              />
              <h5 class="text-gray-900 mb-1 text-xl font-medium">
                Digital Platform
              </h5>
              <span class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </span>
            </div>
          </div>
          <div class="m-8 w-full max-w-sm rounded-lg border-2 border-richblack-200 hover:border-[#A7CE4A] hover:bg-[#A7CE4A] hover:text-white">
            <div class="flex flex-col items-center pb-10">
              <img
                src={home2}
                alt=""
                className="mt-10 h-24 w-24 rounded-full"
              />
              <h5 class="text-gray-900 mb-1 text-xl font-medium">
                Optimal Ideation
              </h5>
              <span class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </span>
            </div>
          </div>
          <div class="m-8 w-full max-w-sm rounded-lg border-2 border-richblack-200 hover:border-[#4D93DF] hover:bg-[#4D93DF] hover:text-white">
            <div class="flex flex-col items-center pb-10">
              <img
                src={home3}
                alt=""
                className="mt-10 h-24 w-24 rounded-full"
              />
              <h5 class="text-gray-900 mb-1 text-xl font-medium">
                Favorable Setting
              </h5>
              <span class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </span>
            </div>
          </div>
          <div class="m-8 w-full max-w-sm rounded-lg border-2 border-richblack-200 hover:border-[#FF60A8] hover:bg-[#FF60A8] hover:text-white">
            <div class="flex flex-col items-center pb-10">
              <img
                src={home4}
                alt=""
                className="mt-10 h-24 w-24 rounded-full"
              />
              <h5 class="text-gray-900 mb-1 text-xl font-medium">
                Effective Interaction
              </h5>
              <span class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </span>
            </div>
          </div>
          <div class="m-8 w-full max-w-sm rounded-lg border-2 border-richblack-200 hover:border-[#F66742] hover:bg-[#F66742] hover:text-white">
            <div class="flex flex-col items-center pb-10">
              <img
                src={home5}
                alt=""
                className="mt-10 h-24 w-24 rounded-full"
              />
              <h5 class="text-gray-900 mb-1 text-xl font-medium">
                Flexible Time
              </h5>
              <span class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </span>
            </div>
          </div>
          <div class="m-8 w-full max-w-sm rounded-lg border-2 border-richblack-200 hover:border-[#FFCF59] hover:bg-[#FFCF59] hover:text-white">
            <div class="flex flex-col items-center pb-10">
              <img
                src={home6}
                alt=""
                className="mt-10 h-24 w-24 rounded-full"
              />
              <h5 class="text-gray-900 mb-1 text-xl font-medium">Reliable</h5>
              <span class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="relative">
        <img src={enrollnow} alt="" className="h-[700px] w-full" />
        <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform pl-8 text-center">
          <div className="pl-60 flex flex-col items-end gap-4 text-black">
            <div className="text-4xl font-semibold">
              Become an <span className="font-bold">Instructor</span>
            </div>

            <p className="w-[100%] text-[16px] font-medium ml-20">
              Instructors from around the world teach millions of students on
              A2Tech. We provide the tools and skills to teach what you love.
            </p>

            <div className="w-fit">
              <Link to={"/signup"}>
                <div className="group mx-auto w-fit rounded-full bg-black p-1 font-bold text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:bg-black hover:text-white">
                  <div className="flex flex-row items-center gap-2 rounded-full px-14 py-[10px] ">
                    <p>Start Teaching Today</p>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
