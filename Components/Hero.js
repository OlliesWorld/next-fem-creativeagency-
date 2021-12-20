import  Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="flex flex-col-reverse lg:flex-row">
            <div className=" w-4/5 my-12  ml-4 lg:w-3/4 lg:ml-24 ">
                <h2 className="font-extrabold text-4xl lg:text-7xl mb-10">Branding & website design agency</h2>
                <p className="text-lg mb-8">We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
                <Link href="/" className="bg-red font-extrabold text-white p-6">Learn More</Link>
            </div>
            <div>
                <Image src="/images/assets/desktop/image-hero.jpg" alt="hero img" width={895}
                    height={800} className="hidden lg:block lg:h-full " placeholder="blurred" layout="fixed"/>
                <Image src="/images/assets/tablet/image-hero.jpg" alt="hero img" width={435}
                    height={600} className="hidden md:block lg:hidden " placeholder="blurred" layout="fixed"/>
                <Image src="/images/assets/mobile/image-hero.jpg" alt="hero img" width={375}
                    height={200} className="md:hidden block" placeholder="blurred" layout="fixed"/>
            </div>
        </section>
    )
}