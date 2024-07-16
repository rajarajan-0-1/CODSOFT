import React from 'react'
import styles from './HeroStyles.module.css';
import heroImage from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';


const Hero = () => {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <div>
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img src={heroImage} alt="Profile Picture" className={styles.hero}/>
                <img onClick={toggleTheme} src={themeIcon} alt="Bright and Dark Mode" className={styles.colorMode}/>
            </div>
            <div className={styles.info} data-aos="fade-right"     data-aos-duration="1000">
                <h1>Hi, I'm
                    <br />
                    Rajarajan
                </h1>
                <h2>
                    ReactJS Developer
                </h2>
                <span>
                    <a href="https://x.com/?lang=en" target='_blank'>
                        <img src={twitterIcon} alt="" />
                    </a>
                    <a href="https://github.com/rajarajan-0-1" target='_blank'>
                        <img src={githubIcon} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/rajarajan-k-r/" target='_blank'>
                        <img src={linkedinIcon} alt="" />
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for developing modern React web apps for commercial and businesses.
                </p>
                <a href={CV} download>
                    <button className='hover' >Resume</button>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Hero