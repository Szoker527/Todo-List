import format from 'date-fns/format'

function currentDate() {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, MMMM do, yyyy');
    return formattedDate;
}

export default currentDate 
