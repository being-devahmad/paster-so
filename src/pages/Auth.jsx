// import { Margin } from '@mui/icons-material'
// import React from 'react'
// import { TextField } from "@mui/material";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGoogle,
    faFacebook,
    faApple,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons"

const Auth = () => {
    const location = useLocation()
    const excludePaths = ["/auth", "/login", "/register"] // Add more if needed

    // Check if the current path matches any of the excluded paths
    const isAuthPage = excludePaths.includes(location.pathname)
    console.log("kaamamamamammaam", isAuthPage)

    // Button styles (you can customize these)
    const buttonStyle = {
        width: "320px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        padding: "16px 20px",
        borderRadius: "5px",
        border: "none",
        // cursor: "pointer",
        color: "white",
        fontSize: "14.3px",
        fontStyle: "normal",
    }

    const googleButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#2b2c44", // Google blue
    }

    const facebookButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#2b2c44", // Facebook blue
    }

    const appleButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#2b2c44", // Facebook blue
    }

    const discordButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#2b2c44", // Facebook blue
    }
    const emailButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#575bc7", // Facebook blue
    }

    const handleGoogleSignIn = () => {
        console.log("Continue with Google")
        // Add your Google sign-in logic here
    }

    const handleFacebookSignIn = () => {
        console.log("Continue with Facebook")
        // Add your Facebook sign-in logic here}
    }
    const handleAppleSignIn = () => {
        console.log("Continue with Google")
        // Add your Google sign-in logic here
    }

    const handleDiscordSignIn = () => {
        console.log("Continue with Facebook")
        // Add your Facebook sign-in logic here}
    }

    const containerStyle = {
        padding: "19px 0px 0px 0px",
        display: "flex",
        // flexdirection:'column',
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        //   height: '100vh', // Full viewport height
        //   backgroundColor: '#f0f0f0', // Background color
    }

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                background: "#1A1A24",
                color: "#1A1A24",
            }}
        >
            <div style={containerStyle}>
                <div>
                    <div
                        style={{
                            display: "flex",
                            flexdirection: 'column',
                            justifyContent: "center", // Center horizontally
                            alignItems: "center",
                            marginTop: "7vh"// Center vertically
                        }}
                    >
                        <img
                            src="/assets/fff.png"
                            alt="null"
                            width="41px"
                            height="41px"
                        ></img>
                    </div>

                    <h1
                        style={{
                            color: "#fff",
                            fontSize: "1.5rem",
                            fontStyle: "normal",
                            fontWeight: 500,
                            marginLeft: "60px",
                            marginBottom: "37px",
                            marginTop: "20px",
                        }}
                    >
                        Your Paster Account
                    </h1>

                    <button style={googleButtonStyle} onClick={handleGoogleSignIn}>
                        <FontAwesomeIcon
                            icon={faGoogle}
                            style={{ marginRight: "8px", color: "red" }}
                        />
                        Continue with Google
                    </button>
                    <button style={facebookButtonStyle} onClick={handleFacebookSignIn}>
                        <FontAwesomeIcon
                            icon={faFacebook}
                            style={{ marginRight: "8px", color: "blue" }}
                        />
                        Continue with Facebook
                    </button>

                    <button style={appleButtonStyle} onClick={handleAppleSignIn}>
                        <FontAwesomeIcon icon={faApple} style={{ marginRight: "13px" }} />
                        Continue with Apple
                    </button>
                    <button style={discordButtonStyle} onClick={handleDiscordSignIn}>
                        <FontAwesomeIcon
                            icon={faDiscord}
                            style={{ marginRight: "8px", color: "#3944bc" }}
                        />
                        Continue with Discord
                    </button>

                    <button style={emailButtonStyle} onClick={handleDiscordSignIn}>
                        Continue with Email
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth
