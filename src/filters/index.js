//index.js
export function dateSplit(dateStr,index) {
    if(!(index&&index<=1)){
        index = 0
    }
    var dateStrArray = dateStr.split(" ");
    return dateStrArray[index];
}