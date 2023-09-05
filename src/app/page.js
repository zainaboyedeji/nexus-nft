import AppNavbar from './components/appNavbar/appNavbar';
import AppHero from './components/appHero/appHero';
import TrendingNFT from './components/trendingNFT/trendingNFT';
import TopListArtist from './components/topListArtist/index';
import LiveAuction from './components/liveAuction';
import Articles from './components/articles';
import Banner from './components/banner';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='px-20 py-10'>
      <AppNavbar />
      <AppHero />
      <TrendingNFT />
      <TopListArtist />
      <LiveAuction/>
      <Articles/>
      <Banner/>
      <Footer/>
    </main>
  )
}
