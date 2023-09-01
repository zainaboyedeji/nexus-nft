import Image from 'next/image'
import "./appNavbar.css"
import Link from 'next/link'
import { Mulish } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function AppNavbar() {
    return (
        <div className='flex'>
            <p>Lanfty</p>
            <h3>Lanfty</h3>

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
