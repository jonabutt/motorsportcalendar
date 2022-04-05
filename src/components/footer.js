import React from 'react'

import * as styles from './footer.module.scss'

const Footer = () => {
    return <footer className={styles.footerWrapper}>
        <p>© <a href="https://mt.linkedin.com/in/jonathan-buttigieg-8523ab156" target="_blank" rel="noopener">Jonathan Buttigieg</a> {new Date().getFullYear()}</p>
    </footer>
}

export default Footer;