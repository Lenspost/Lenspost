import problem from "../../Assets/Problem1.png"
import space from "../../Assets/Space1.png"
import Image from "next/image"
import Line from "../../Assets/Line.png"

function Creator() {
  return (
    <div>
        <div className="flex mt-40 gap-80 pl-40">
            <p className="text-white text-4xl">Built for Creators of all kinds</p>
            <p className="text-white text-3xl"><span className="pl-60">Literally <span className=" text-[#0af7ef]">for </span></span><span className="text-8xl text-[#0af7ef]">Every<span className="underline decoration-[#0af7ef]">body</span></span> </p>
        </div>
        <div className="flex  text-white gap-24 pl-40">
            <button className="btn-bl"><span className="btn-bl-span">Free tier</span></button>
            <button className="btn-bl"><span className="btn-bl-span">Pro</span></button>
            <button className="btn-bl"><span className="btn-bl-span">Teams</span></button>
        </div>
        <div className="pt-20  relative pl-20">
            <div className="px-20  flex  ">
            {/* <Image className="mt-20" src={Line} alt="" /> */}
            <Image className="" src={problem} alt="" />
            <Image src={space} className="pl-10 pr-10 bottom-40 absolute left-[860px]" alt="" />
            </div>
           
        </div>
       
    </div>
  )
}

export default Creator