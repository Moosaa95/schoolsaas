import { MoreHorizontalIcon } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Events = [
    {
      id: 1,
      title: "Science Fair",
      time: "10:00 AM - 12:00 PM",
      description: "An exhibition of students' science projects and experiments. Parents and students are encouraged to attend and explore innovative ideas."
    },
    {
      id: 2,
      title: "Math Competition",
      time: "1:00 PM - 2:30 PM",
      description: "A competitive math quiz where students can test their problem-solving skills and compete for prizes."
    },
    {
      id: 3,
      title: "Art Exhibition",
      time: "3:00 PM - 5:00 PM",
      description: "Showcasing the creative artworks of students from various grades. Visitors can view paintings, sculptures, and crafts."
    },
    {
      id: 4,
      title: "Career Day",
      time: "9:00 AM - 11:00 AM",
      description: "Professionals from different fields will visit to speak to students about career paths and opportunities. Great networking and learning opportunity."
    },
    {
      id: 5,
      title: "Sports Day",
      time: "8:00 AM - 4:00 PM",
      description: "A full day of sports activities including track events, football, and basketball matches. A fun day for students and staff alike."
    },
    {
      id: 6,
      title: "Music Concert",
      time: "6:00 PM - 8:00 PM",
      description: "A showcase of the school's choir and band performances. Students will perform a variety of musical pieces."
    },
    {
      id: 7,
      title: "Drama Club Play",
      time: "2:00 PM - 4:00 PM",
      description: "The drama club will present a classic play. Students have been preparing for months, and it's sure to be a fantastic performance."
    },
    {
      id: 8,
      title: "Coding Workshop",
      time: "11:00 AM - 1:00 PM",
      description: "A hands-on workshop for students interested in learning programming basics and building their first mini project."
    },
    {
      id: 9,
      title: "Environmental Awareness Day",
      time: "1:00 PM - 3:00 PM",
      description: "An educational event focused on promoting sustainability and environmental conservation. Students will participate in planting trees and recycling activities."
    },
    {
      id: 10,
      title: "Graduation Ceremony",
      time: "5:00 PM - 7:00 PM",
      description: "A formal event to celebrate the graduation of the senior class. Families and friends are invited to attend and support the graduating students."
    }
  ];
  

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="my-4 text-xl font-semibold">Event</h1>
                <MoreHorizontalIcon />
            </div>
            <div className="flex flex-col h-[330px] gap-4 overflow-y-scroll scrollbar-thin">
                {Events.map(event => (
                    <div className="p-5 border-2 border-t-4 border-gray-100 rounded-md odd:border-t-sky even:border-t-purple" key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-xs text-gray-300">{event.time}</span>
                        </div>
                        <p className="mt-2 text-xs text-gray-400">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}