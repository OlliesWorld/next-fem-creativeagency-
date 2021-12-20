import Image from 'next/image'
import Link from 'next/link'

const Header = ({ siteTitle }) => (
  <header className="ml-24 ">
    
    <div className="flex justify-between items-center ">
    
      <Image src="/images/assets/desktop/logo.svg" alt="A dinosaur" width={100} height={100}/>
    
          <div className="flex justify-evenly items-center w-2/4 h-24 pr-40 bg-red text-white">
           
          <Link href="/">About</Link>
          <Link href="/">Service</Link>
          <Link href="/">Projects</Link>
            
          <Link href="/" className="bg-black p-4 text-white">Schedule a Call</Link>
          </div>

    </div>
  </header>
)



export default Header
