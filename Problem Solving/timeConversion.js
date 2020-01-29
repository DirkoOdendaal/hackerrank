function timeConversion(s) {
    const PM = s.match('PM');
    const AM = s.match('AM');
    const timeArray = s.split(':');
    let hr = timeArray[0];
    const min = timeArray[1];
    let sec;

    if (PM && hr == 12) {
        // Keep as is and just replace PM
        sec = timeArray[2].replace('PM', '');
    } else if (PM) {
        hr = 12 + parseInt(timeArray[0], 10);
        sec = timeArray[2].replace('PM', '');
    } else if (AM && hr == 12) {
        hr = 12 - parseInt(timeArray[0], 10) + '0';
        sec = timeArray[2].replace('AM', '');
    } else {
        sec = timeArray[2].replace('AM', '');
    }

    return hr + ':' + min + ':' + sec;

}