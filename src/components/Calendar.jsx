import { useEffect, useState, useCallback  } from "react";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import {format, parse, startOfWeek, getDay} from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales,
});

export default function CalendarSection() {
    const [events, setEvents] = useState([]);
    const [range, setRange] = useState(null);

    const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
    const CALENDAR_ID = "turtlerobotics@gmail.com";
    
    const fetchEvents = useCallback(async (start, end) => {
        if (!start || !end) return;

        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
        )}/events?key=${API_KEY}&timeMin=${start.toISOString()}&timeMax=${end.toISOString()}&singleEvents=true&orderBy=startTime`;

        const res = await fetch(url);
        const data = await res.json();

        const formatted = (data.items || []).map((event) => ({
        title: event.summary,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
        allDay: !event.start.dateTime,
        }));

        setEvents(formatted);
    }, [API_KEY, CALENDAR_ID]);

    useEffect(() => {
        if (range?.start && range?.end) {
        fetchEvents(range.start, range.end);
        }
    }, [range, fetchEvents]);


    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-10 text-gray-200">
                Calendar
            </h2>

            <div className="flex justify-center">
                <div className="rounded-2xl border-4 border-gray-700 shadow-xl bg-gray-900/60 p-4 w-full max-w-[1300px]">
                    <div className="h-[900px] w-full text-gray-200">
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            views={["month", "agenda"]}
                            defaultView="month"
                            onRangeChange={(newRange) => {
                            if (Array.isArray(newRange)) {
                                setRange({
                                start: newRange[0],
                                end: newRange[newRange.length - 1],
                                });
                            } else {
                                setRange(newRange);
                            }
                            }}
                            style={{ height: "100%" }}
                            className="text-gray-200 rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
