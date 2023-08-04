import React from 'react'
import { IconMoonOtlined, IconSunOtlined } from 'gf-react-icons'

const Customizer = ({ changeTheme, theme }) => {



    return (
        <div
            style={{
                backgroundColor: theme === 'light' ? "#2b2a33" :"#b29548",
                position: "fixed",
                bottom: "50px",
                right: "0px",
                fontSize: "2vw",
                padding: "1vh 1vw",
                borderTopLeftRadius: " 10vw",
                borderBottomLeftRadius: "10vw",
                cursor: "pointer",
            }}
            onClick={() => changeTheme()}>
            {
                theme === 'light' ? <IconMoonOtlined /> : <IconSunOtlined />
            }
        </div>
    )
}

export default Customizer