import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }
      return (
        <>
          {isDarkTheme === false ? (
            <div className="navbar-container">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              </div>
              <ul className="routes-container ">
                <Link to="/" className="link-item">
                  <li className="list-item">Home</li>
                </Link>

                <Link to="/about" className="link-item">
                  <li className="list-item">About</li>
                </Link>
              </ul>
              <div>
                <button
                  data-testid="theme"
                  onClick={changeTheme}
                  className="button-El"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="theme-image"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar-container1">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="website-logo1"
                />
              </div>
              <div className="routes-container1 ">
                <Link to="/" className="link-item1">
                  <li className="list-item1">Home</li>
                </Link>

                <Link to="/about" className="link-item1">
                  <li className="list-item1">About</li>
                </Link>
              </div>
              <div>
                <button
                  data-testid="theme"
                  onClick={changeTheme}
                  className="button-El1"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="theme-image1"
                  />
                </button>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
