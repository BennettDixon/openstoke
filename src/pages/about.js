import { SEO, Header } from 'components'
import { containers } from 'ui-kit'

const About = () => {
  return (
    <containers.PrimaryWrap>
      <SEO />
      <Header />
      <h1>About Us</h1>
      <p>work in progress</p>
      <p>
        We are dedicated to creating reliable & easily accessible information
        regarding open-source, one-wheeled, balance-vehicle devices. This
        project is an ongoing open-source website. If you'd like to contribute
        to the wiki (coming soon), create a guide (coming soon), or anything
        else. Please check out our discord section (coming soon).
      </p>
    </containers.PrimaryWrap>
  )
}

export default About
