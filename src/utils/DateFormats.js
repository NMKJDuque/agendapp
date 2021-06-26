import moment from "moment";

export const timeLeftFromNow = (isoDate) => {
    const momentDate = moment(isoDate);
    //console.log('monet date', momentDate);
    //console.log('from now', momentDate.fromNow());
    return momentDate.fromNow();
}
