import Image from "next/image"
import Hero from "../../Assets/Hero.png"
import To from "../../Assets/TO.png"
import Everywhere from "../../Assets/Everywhere.png"
export default function HeroSec() {
  return (
    <div className="bgMask pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 flex overflow-hidden sm:pt-12 ">
        <div className="mx-auto max-w-md sm:max-w-3xl  lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-2">
          <div>
            <div className="mt-20">
              <div className="mt-6  sm:max-w-xl">
                <h1 className="text-white font-[Cirka] sm:text-6xl">
                  Now Create Your Social For <span className="underline decoration-[#0af7ef]"> The Whole </span> of Web3 From 
                </h1>
                <p className="text-white text-8xl px-8 py-8 font-[Cirka]">
                One-Stop...
                </p>
              </div>
              <form action="#" className="mt-2 sm:max-w-md sm:w-full sm:flex">
                <div className="min-w-0 pl-10 flex-1">
                  <Image src={To}  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                <a href="#" className="btn">Join the waitist NOW</a>	
                </div>
              </form>
              <div className="">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                <Image src={Everywhere} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative lg:absolute lg:inset-y-0 lg:right-0 ">
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
             <Image src={Hero} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}