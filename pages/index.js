import Head from 'next/head'
import Header from '../components/header/header'
import favicon from '../assets/favicon-32x32.png'
import './sass/styles.css'
import Welcome from '../components/welcome/welcome'
import OurAdvantages from '../components/ourAdvantages/ourAdvantages'
import Discount from '../components/discount/discount'
import CertificationsAndPermits from '../components/certificationsAndPermits/certificationsAndPermits'
import About from '../components/about/about'
import Testimonials from '../components/testimonials/testimonials'
import Contact from '../components/contact/contact'
import FacialAesthetics from '../components/facialAesthetics/facialAesthetics'
import BodyAesthetics from '../components/bodyAesthetics/bodyAesthetics'
import MaleAesthetics from '../components/maleAesthetics/maleAesthetics'
import OtherSpecialties from '../components/otherSpecialties/otherSpecialties'

const IndexPage = () => (
  <>
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <title>Luvania | Innovación estética</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Welcome />
    <FacialAesthetics />
    <BodyAesthetics />
    <MaleAesthetics />
    <OtherSpecialties />
    <OurAdvantages />
    <Discount />
    <CertificationsAndPermits />
    <About />
    <Testimonials />
    <Contact />
  </>
)

export default IndexPage
