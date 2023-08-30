import Image from 'next/image'
import "./appNavbar.css"
import Link from 'next/link'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
  })

export default function AppNavbar() {
    return (
        <div className='flex'>
            <h3 className={mulish.className}>Lanfty</h3>

            <div className="container">
                <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Search items,collections, and more" />
                </form>
            </div>

            <div>
            <Link href="/dashboard">Artwork</Link>
            <Link href="/dashboard">Discover</Link>
            <Link href="/dashboard">Articles</Link>
            <Link href="/dashboard">Create</Link>
            </div>



        </div>
    )
}
