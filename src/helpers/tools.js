export const DateDiff = (date1, date2) => {
    // date1.setHours(0);
    // date1.setMinutes(0, 0, 0);
    // date2.setHours(0);
    // date2.setMinutes(0, 0, 0);
    var datediff = Math.abs(date1.getTime() - date2.getTime()); // difference 
    return parseInt(datediff / ( 60 * 60 * 1000), 10); //Convert values days and return value      
}