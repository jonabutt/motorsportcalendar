import { format } from 'date-fns'

export const AddDays = (date,days) =>{
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

export const WithoutTime = (date) =>{
    var result = new Date(date);
    result.setHours(0,0,0)
    return result;
}

export const FormatDate = (date) =>{   
    return format(date,"dd MMM");
}

export const FormatTime = (date) =>{   
    return format(date,"HH:mm");
}


export const ToRaceTime = (date,timeZoneAdd) =>{   
    const localOffSetMillis = date.getTimezoneOffset() * 60 * 1000;
    const addRaceSetMillis = timeZoneAdd * 60 * 60 * 1000;
    return  new Date(date.getTime() + localOffSetMillis + addRaceSetMillis);
}

