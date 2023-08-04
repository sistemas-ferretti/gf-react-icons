import React, { useState } from 'react'
import 'gf-react-icons/dist/index.css'
// import LogoAmbiensa from './assets/images/isotipoAmbiensa.png'
import Customizer from './components/Customizer';
import Buscador from './components/Buscador';
import IconList from './components/IconList';
import { ToastContainer } from 'react-toastify';

export default function App() {

  const [Theme, setTheme] = useState("dark");
  const [SearchWord, setSearchWord] = useState("");

  const changeTheme = () => {
    Theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  const handleSearch = (e) => {
    setSearchWord(e);
  }

  return (
    <div id='main' theme={Theme}>
      <ToastContainer
        autoClose={2000}
        pauseOnHover
        hideProgressBar={true}
        theme={Theme === "dark" ? "dark" : "light"}
      />
      <div
        className='container-fluid'
        style={{
          color: Theme === "dark" ? "#fff" : "#000",
        }}
      >
        <div className='row mt-4 mt-lg-5'>
          <div className='col-12'>
            <div className='text-center d-flex justify-content-center align-items-center'>
              {/* <img loading='lazy' src={LogoAmbiensa} alt="LogoAmbiensa" width={"73px"} /> */}
              <i
                style={{
                  background:
                    'linear-gradient(0deg, rgba(191,168,107,1) 0%, rgba(121,101,47,1) 72%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'flex',
                  fontSize: '55px'
                }}
                aria-hidden='true'
                className='icon-ferrettioutlined'
              />
              <h1 style={{ fontSize: '45px' }} className='px-3 m-0'> {/* <span style={{ color: '#b29548' }}>Gf</span> */} <span /* style={{ color: "#007bff" }} */>React Icons</span>  </h1>
            </div>
          </div>
          <div className='col-12 d-flex my-4 my-lg-5 justify-content-center' >
            <Buscador handleSearch={handleSearch} theme={Theme} />
          </div>
        </div>
        <IconList searchWord={SearchWord} />
        <Customizer changeTheme={changeTheme} theme={Theme} />
      </div>
    </div>
  )
}
