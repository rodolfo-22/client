import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns/'
import { localizer } from './helpers/CalendarLocalize';
import { getMessagesES } from './helpers/getMessages';



//creo un evento para que no me tire error
const events =[{
  title: 'cumpleaños',
  notes: 'comprar wl pastel',
  start: new Date(),
  end: addHours( new Date(),2 ),
}]


const CalendarPage = () => {
    return (
    <>
        <h2>aqui aparecera tu calendario</h2>
    </>
    
    )
}

export default CalendarPage;