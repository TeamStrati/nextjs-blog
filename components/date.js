import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
if(dateString == undefined){
    return;
}
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'do LLLL yyyy')}</time>;
}