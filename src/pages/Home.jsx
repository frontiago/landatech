import {HomeHero} from '../components/home/HomeHero'
import {HomeService} from '../components/home/HomeService'
import {HomeTestimonial} from '../components/home/HomeTestimonial'

export const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeTestimonial />
      <HomeService />
    </>
  )
}
