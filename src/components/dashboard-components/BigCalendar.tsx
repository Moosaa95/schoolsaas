// import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
// import moment from 'moment'
// import { calendarEvents } from '../../lib/data'
// import "react-big-calendar/lib/css/react-big-calendar.css"
// import { useState } from 'react'

// const localizer = momentLocalizer(moment)

// const BigCalendar = () => {
//     const [view, setView] = useState<View>(Views.WORK_WEEK)

//     const today = new Date();
//     const month = today.getMonth();
    

//     const handleOnChangeView = (selectedView: View) => {
//         setView(selectedView)
//     }
//   return (
//     <div>
//         <Calendar
//         localizer={localizer}
//         events={calendarEvents}
//         startAccessor="start"
//         endAccessor="end"
//         views={["work_week", "day"]}
//         view={view}
//         style={{ height: 1200 }}
//         onView={handleOnChangeView}
//         min={new Date(2025, month, 30, 8, 0, 0)}
//         max={new Date(2025, month, 30, 17, 0, 0)}
//         />
//   </div>
//   )
// }

// export default BigCalendar

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '../../lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState, useEffect } from 'react';
// import './BigCalendar.css'; // Import custom styles for responsive design

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [calendarHeight, setCalendarHeight] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);

  const today = new Date();
  const month = today.getMonth();

  // Check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setView(Views.DAY); // Use day view for mobile devices
        setCalendarHeight(600); // Adjust height for smaller screens
      } else {
        setIsMobile(false);
        setView(Views.WORK_WEEK);
        setCalendarHeight(1200);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Run on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className={`calendar-container ${isMobile ? 'mobile-view' : ''}`}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={isMobile ? [Views.DAY] : ["work_week", "day"]} // Set views based on device size
        view={view}
        style={{ height: calendarHeight, width: '100%' }} // Use state-based height and full width
        onView={handleOnChangeView}
        min={new Date(2025, month, 30, 8, 0, 0)}
        max={new Date(2025, month, 30, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;
