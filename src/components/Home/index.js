import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme === false ? (
            <>
              <Navbar />
              <div className="home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home-image"
                />
                <h1 className="home-heading">Home</h1>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="home-container1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home-image1"
                />
                <h1 className="home-heading1">Home</h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
