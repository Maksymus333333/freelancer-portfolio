import "./style.css";
import ResumePDF from "./ResumePDF.pdf";
import { useSpring, animated } from 'react-spring';
import React from 'react';

 
  console.log("ResumePDF path:", ResumePDF);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'ResumePDF.pdf';
    link.click();
  }
  

  const Header = () => {
    const titleAnimation = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 500, // adjust the delay as needed
    });
  
    const textAnimation = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 1500, // adjust the delay as needed
    });
  
    const buttonAnimation = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 2000, // adjust the delay as needed
    });
  

   return (
    <header className="header">
      <div className="header__wrapper">
        <animated.h1 className="header__title" style={titleAnimation}>
          <strong>Hi, my name is <em>Maks</em></strong><br />
          a frontend developer
        </animated.h1>
        <animated.div className="header__text" style={textAnimation}>
          <p>with a passion for learning and creating.</p>
        </animated.div>
        <animated.button className="btn" style={buttonAnimation} onClick={handleDownload}>
          Download CV
        </animated.button>
      </div>
    </header>
  );
};
 

export default Header;