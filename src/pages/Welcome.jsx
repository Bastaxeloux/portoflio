import React, { useEffect, useState } from "react";
import "./Welcome.css";

const DynamicWelcome = ({ onAnimationEnd }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onAnimationEnd, 1000);
        }, 1400);
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className={`welcome-container ${fadeOut ? "fade-out" : ""}`}>
        <h1 className="animated-text">Welcome to my portfolio</h1>
        <p className="name-text">Maël Le Guillouzic</p>
        </div>
    );
};

export default DynamicWelcome;
