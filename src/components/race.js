import React,{useState} from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


import ExtraDrive from './extraDrive'

import * as styles from './race.module.scss'

import F1Icon from "../assets/f1.svg";
import IndyCarIcon from "../assets/indycar.svg";
import WecIcon from "../assets/wec.svg";
import MotoGpIcon  from "../assets/motogp.svg";
import SbkIcon from "../assets/sbk.svg";

const Race = ({race,isYourTime}) => {
   const [raceIsExpanded, setRaceIsExpanded] = useState(false);
  
    return <div className={styles.raceWrapper}>
      <div className={styles.race}>
          {race.ExtraDrives && race.ExtraDrives.length > 0 &&
            <div className={raceIsExpanded ? styles.expanderExpanded:styles.expander} onClick={()=>setRaceIsExpanded(!raceIsExpanded)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          }   
          {
            race.ExtraDrives && race.ExtraDrives.length== 0  && 
            <div className={styles.expander}>
            </div>
          }       
        <div className={styles.date}>
            <div className={styles.date_text}>
              {isYourTime?race.RaceDateFormatted:race.DateFormatted}
            </div>
            <div className={styles.time_text}>
              {isYourTime?race.RaceTimeFormatted:race.TimeFormatted}
            </div>
        </div>
        <Link to={`/schedule/${race.Type}`}>
          <div className={styles.icon}>
            {
              race.Type && race.Type === "f1"  &&
                <F1Icon />
            }
            {
              race.Type && race.Type === "motogp" &&
                <MotoGpIcon />
            }
            {
              race.Type && race.Type === "sbk" &&
                <SbkIcon />
            }
            {
              race.Type && race.Type === "indycar" &&
                <IndyCarIcon />
            }
            {
              race.Type && race.Type === "wec" &&
                <WecIcon />
            }
          </div>
        </Link>
        <div className={styles.raceDetail}>
          
          <div className={styles.raceName}>
            {race.RaceName}
          </div>
          <div className={styles.raceSubDetails}>
            <span className={styles.raceCircuit}>
              {race.CircuitName}
            </span>
            <span className={styles.raceLocation}>
              {race.Country}
            </span>
          </div>
        </div>
      
      </div>
      {
        raceIsExpanded &&
        <div className={styles.expandedRaceWrapper}>
          {
            race.ExtraDrives.map((extraDrive,index)=>(
              <ExtraDrive 
                extraDrive={extraDrive} 
                key={index}
                isYourTime={isYourTime}
                />
            ))
          } 
        </div>
      }
    </div>
}

export default Race