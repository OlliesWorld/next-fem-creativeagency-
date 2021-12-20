import * as React from "react"

import Link from "next/link"
import Image from "next/image"

export default function Strategy() {
    return (
        <div>
        <div className="flex flex-col lg:flex-row w-full h-full mb-4">
            
                <Image src="/images/assets/desktop/image-strategic.jpg" alt="hero img" width={735}
                    height={900} className="hidden md:block lg:h-full lg:w-full "  placeholder="blurred" />
                <Image src="/images/assets/mobile/image-strategic.jpg" alt="hero img" width={375}
                    height={200} className="md:hidden block"  placeholder="blurred" />

                    <div className="sm:hidden md:block lg:absolute left-32 pt-36 pl-72 ml-72 ">

                        <Image src="/images/assets/desktop/bg-pattern-wave-red.svg" alt="A dinosaur" className="sm:hidden lg:block inline-flex w-18  ml-60 mt-20 " width={50} height={60}/>
                    </div>
            
            <div className=" w-3/4 h-full bg-black text-white ">
                <div className="w-5/6 ml-10 my-20 lg:w-2/3 lg:ml-40 lg:my-52">
                <h2 className="font-extrabold text-6xl mb-11"><span className="text-red">Design</span> is strategic.</h2>
                <p className="text-lg mb-11">“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”</p>
                <Link href="/" className="text-red font-extrabold border-b-2 pb-4 ">Schedule a call</Link>
                </div>
            </div>
            </div>
            {/* second section */}
           <div className="flex flex-col lg:flex-row w-full h-full" >
               <div className="bg-red text-white pl-6 pt-20 -mt-4 lg:bg-white lg:text-black lg:inline-flex lg:w-1/2  lg:-mr-36 lg:ml-36 ">
                   <h2 className="text-4xl lg:text-6xl z-30 mt-20 ml-20">Our approach for creating a winning brand</h2>
               </div>
               <div className="bg-red w-full pb-36 lg:w-5/6 h-full lg:-mt-48 z-20  ">
               <div className=" text-white ml-6 mt-10 lg:mt-40 lg:w-2/4 lg:ml-72">
                    <span className="text-7xl font-extrabold mix-blend-normal opacity-25">01</span>
                   <p className="-mt-8 ml-2 lg:ml-14 font-extrabold">Brand Strategy</p>
                   <p className="ml-2 pr-6 w-full lg:ml-14 ">Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
                   <span className="text-7xl font-extrabold mix-blend-normal opacity-25">02</span>
                   <p className="-mt-8 ml-2 lg:ml-14  font-extrabold">Brand Design</p>
                   <p className="ml-2 pr-6 w-full lg:ml-14  ">Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.</p>
                   <span className="text-7xl font-extrabold mix-blend-normal opacity-25">03</span>
                   <p className="-mt-8 ml-2 lg:ml-14  font-extrabold">Web Design</p>
                   <p className="ml-2 pr-6 w-full lg:ml-14 ">A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
               </div>
               </div>
           </div>
        </div>
    )
}