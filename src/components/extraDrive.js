import React from 'react'

import * as styles from './extraDrive.module.scss'

const ExtraDrive = ({extraDrive,isYourTime}) => {
return <div className={styles.extraDrive}>
        <div className={styles.date}>
            <div className={styles.date_text}>
                {isYourTime?extraDrive.RaceDateFormatted:extraDrive.DateFormatted}                
            </div>
            <div className={styles.time_text}>
                {isYourTime?extraDrive.RaceTimeFormatted:extraDrive.TimeFormatted}
            </div>
        </div>
        <div className={styles.name}>
            {extraDrive.Name}
        </div>
    </div>
}

export default ExtraDrive;
