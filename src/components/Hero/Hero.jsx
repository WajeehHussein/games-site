import './Hero.css'
import {PrimaryButton} from '../../components'

function Hero() {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <div className="hero-subtitle">Welcome To Cyborg</div>
            <h4 className="hero-title"><em>Browse</em> Our Popular Games Here</h4>
          <PrimaryButton>Browse Now</PrimaryButton>
        </div>
    </div>
  )
}

export default Hero