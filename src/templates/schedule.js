import React, { useState,useEffect} from 'react';
import { graphql } from 'gatsby'

import Race from '../components/race'
import Layout from "../components/layout"
import Seo from '../components/seo'
import * as styles from '../pages/index.module.scss'
import * as com_styles from '../styles/common.module.scss'

import { FormatDate,FormatTime,ToRaceTime } from "../functions/DateFunctions"
import ToggleButton from "../components/toggleButton/toggleButton";


export const query = graphql`
    query(
        $type: StringQueryOperatorInput!
    ) {
            allJson(filter: {Type: $type}) {
            edges {
                node {
                    RaceName
                    CircuitName
                    Country
                    TimeZoneAdd
                    Date
                    Type
                    ExtraDrives{
                        Name
                        Date
                    }
                }
            }
        }
    }
    
`
const Schedule = (props) => {
    let [isYourTime,setIsYourTime] = useState(true);
    let [races,setRaces] = useState([]);
    useEffect(() => {
        setRaces(props.data.allJson.edges.map(({node})=>{
            const raceDate = new Date(node.Date*1);
            node.DateFormatted = FormatDate(raceDate);
            node.TimeFormatted = FormatTime(raceDate);
            const raceTime = ToRaceTime(raceDate,node.TimeZoneAdd);
            node.RaceDateFormatted = FormatDate(raceTime);
            node.RaceTimeFormatted = FormatTime(raceTime);
            if(node.ExtraDrives){
                node.ExtraDrives = node.ExtraDrives.map(ex=>{
                    const date = new Date(ex.Date*1);
          
                    ex.DateFormatted = FormatDate(date);
                    ex.TimeFormatted = FormatTime(date);
                    const raceTime = ToRaceTime(date,node.TimeZoneAdd);
                    ex.RaceDateFormatted = FormatDate(raceTime);
                    ex.RaceTimeFormatted = FormatTime(raceTime);
                    return ex;
                  })
            }
            return node;
        }));
    },[]);
    return <Layout>
        
        <Seo title={`MotorsSportCalendar.net - ${props.pageContext.type.in.toUpperCase()} Race Times and Dates`}/>
        <div className={com_styles.actionBar}>
          <div className={com_styles.actionBarTimeWrapper}>
          <ToggleButton 
            firstButtonName="Local Time" 
            secondButtonName="Your Time"
            firstBtnSelected={!isYourTime}
            onToggleButtonChange={(isYourTimeChecked)=>setIsYourTime(!isYourTimeChecked)}
            />
        </div>
        </div>
        <div className={styles.races}>
            {
                races.map((node,i)=>{
                    return <Race race={node} key={i} isYourTime={!isYourTime} />
                })
            }
        </div>
    </Layout>
}

export default Schedule;