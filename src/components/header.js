import React from 'react'
import { Link } from 'gatsby'
import * as headerStyles from './header.module.scss'

const Header = () => {
    return <header className={headerStyles.header}>
        <div className={headerStyles.websiteTitleWrapper}>
            <Link className={headerStyles.websiteTitle} to="/">MotorsSportCalendar.net</Link>
        </div>
        <div className={headerStyles.websiteDesc}>
            Races, Qualifying & Practice
        </div>
    </header>
}

export default Header;