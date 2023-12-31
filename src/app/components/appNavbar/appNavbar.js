import Image from 'next/image'
import "./appNavbar.css"
import Link from 'next/link'
import lanfty from "../../../../public/lanfty.png"

export default function AppNavbar() {
    return (
        <div className='w-full flex justify-between'>
            <div><Image src={lanfty} alt="Lanfty Logo" className='w-16'/></div>
            <div className="w-2/5">
                <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Search items,collections, and more" />
                </form>
            </div>
            <div className='w-2/5 flex justify-between'>
            <Link href="/dashboard" className='navbarLink text-gray-500'>Artwork</Link>
            <Link href="/dashboard" className='navbarLink text-gray-500'>Discover</Link>
            <Link href="/dashboard" className='navbarLink text-gray-500'>Articles</Link>
            <Link href="/dashboard" className='navbarLink text-gray-500'>Create</Link>
            </div>



        </div>
    )
}
