import {HomeHeader} from '../components/home/HomeHeader'
import {HomeService} from '../components/home/HomeService'
import {HomeStats} from '../components/home/HomeStats'

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeStats />
      <HomeService />
    </>
  )
}
