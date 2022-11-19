/* eslint-disable @next/next/no-img-element */
import General from '../components/general/general'
import Image from 'next/image'
import Academy from '../components/Home/academy'
import Acad from '../components/Home/acad'
import StartLearn from '../components/Home/startLearn'
import Courses from '../components/Home/courses'
import AreYou from '../components/Home/areYou'
import LearnWithUs from '../components/Home/learnWithUs'
import HowItWorks from '../components/Home/howItWorks'
import Testimonials from '../components/Home/testimonials'
import Community from '../components/Home/community'

export default function Home () {
  return (
    <General>
      {' '}
      <Academy />
      <Acad />
      <StartLearn />
      <Courses />
      <AreYou />
      <LearnWithUs />
      <HowItWorks />
      <Testimonials />
      <Community />
    </General>
  )
}
