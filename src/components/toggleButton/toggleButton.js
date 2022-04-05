import React from "react";

import * as styles from './toggleButton.module.scss'


const ToggleButton = ({firstButtonName,secondButtonName,firstBtnSelected,onToggleButtonChange}) => {
    return <div className={styles.toggleButtonWrapper}>
        <button className={firstBtnSelected?styles.selected:undefined} onClick={()=>onToggleButtonChange(true)}> 
            {firstButtonName}
        </button>
        <button className={!firstBtnSelected?styles.selected:undefined} onClick={()=>onToggleButtonChange(false)}>
            {secondButtonName}
        </button>
        <div className={`${styles.toggleButtonSelection} ${firstBtnSelected?styles.selectedFirst:styles.selectedSecond}`}></div>
    </div>
}

export default ToggleButton;