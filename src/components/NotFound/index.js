import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme === false ? (
            <>
              <Navbar />
              <div className="not-found-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className="not-found-heading">Lost Your Way?</h1>
                <p className="not-found-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="not-found-container1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image1"
                />
                <h1 className="not-found-heading1">Lost Your Way?</h1>
                <p className="not-found-para1">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
