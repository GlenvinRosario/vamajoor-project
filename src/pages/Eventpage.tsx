import {useEffect,useState} from "react";
import {getEvents} from "../services/eventService";
import {Event} from "../types/event";

import EventGrid from "../components/events/EventGrid";
import EventHero from "../components/events/EventHero";


export default function EventPage(){

 const [events,setEvents]=useState<Event[]>([]);
 const [loading,setLoading]=useState(true);


 useEffect(()=>{

   getEvents()
   .then(data=>{
      setEvents(data);
   })
   .finally(()=>{
      setLoading(false);
   })

 },[])



 return (

 <div className="bg-[#fafafa] min-h-screen">

    <EventHero/>

    <EventGrid
       events={events}
       loading={loading}
    />

 </div>

 )

}