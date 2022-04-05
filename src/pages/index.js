import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"


import Race from '../components/race'
import Seo from '../components/seo'
import Layout from "../components/layout"
import * as styles from './index.module.scss'
import * as com_styles from '../styles/common.module.scss'

import { WithoutTime, AddDays,FormatDate,FormatTime,ToRaceTime } from "../functions/DateFunctions"
import ToggleButton from "../components/toggleButton/toggleButton";

 
export const indexQuery = graphql`
  query calendars {
    allJson{

      edges{
        node{
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

const IndexPage = ({ data }) => {
  let [filteredData,setFilteredData] = useState([]);
  let [isYourTime,setIsYourTime] = useState(true);
  useEffect(() => {
    // on load of the data filter the list of races that are past
    var today = WithoutTime(new Date());
    var next30Days = AddDays(new Date(),30);

    var filteredRaces = data.allJson.edges.filter(({node})=>{
     
      const date = new Date(node.Date*1);
      node.DateFormatted = FormatDate(date);
      node.TimeFormatted = FormatTime(date);
      const raceTime = ToRaceTime(date,node.TimeZoneAdd);
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
      return date > today && date < next30Days;
    })
    filteredRaces.sort((a,b)=>
    {
      if (a.node.Date < b.node.Date) {
        return -1;
      }
      if (a.node.Date > b.node.Date) {
        return 1;
      }
    
      // must be equal
      return 0;
    })
    setFilteredData(filteredRaces)
  },[])
  return (
    <main>
      <Seo title={"MotorsSportCalendar.net - Race Times and Dates"}/>
      <Layout>
        <div className={styles.title}>Races in the next 30 days.</div>
        {/* <div>
          <button className={isYourTime?styles.inactiveButton:styles.activeButton}
            onClick={() => setIsYourTime(isYourTime?false:false )}>
            Local Time
          </button>
          <button className={isYourTime?styles.activeButton:styles.inactiveButton} 
            onClick={() => setIsYourTime(isYourTime?true:true)}>
            Your Time
          </button>
        </div> */}
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
            filteredData.map(({ node }, index) => {
              return <Race race={node} key={index} isYourTime={!isYourTime}/>
            })
          }
        </div>
    
      </Layout>
      
    </main>
  )
}

export default IndexPage
