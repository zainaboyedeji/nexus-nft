import AppNavbar from './components/appNavbar/appNavbar';
import AppHero from './components/appHero/appHero';
import TrendingNFT from './components/trendingNFT/trendingNFT';
import TopListArtist from './components/topListArtist/index';
import LiveAuction from './components/liveAuction';
import Articles from './components/articles';
import Banner from './components/banner';
import Footer from './components/footer';
import AppTab from './components/tabComponent/tabs';
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})


export default function Home() {
  return (
    <main className={`${manrope.variable} font-sans`}>
      <AppNavbar />
      <AppHero />
      <TrendingNFT />
      <TopListArtist />
      <LiveAuction/>
      <AppTab/>
      <Articles/>
      <Banner/>
      <Footer/>
    </main>
  )
}
