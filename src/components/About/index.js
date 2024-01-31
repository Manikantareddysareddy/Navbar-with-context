import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme === false ? (
            <>
              <Navbar />
              <div className="about-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1 className="about-heading">About</h1>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="about-container1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about-image1"
                />
                <h1 className="about-heading1">About</h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
