import EventCard from "./EventCard";
import EventSkeleton from "./EventSkeleton";
import {Event} from "../../types/event";


interface Props{
 events:Event[];
 loading:boolean;
}


export default function EventGrid({
 events,
 loading
}:Props){


return(

<div className="
max-w-7xl
mx-auto
px-6
py-12
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
">


{
loading
?
Array.from({length:8}).map((_,i)=>
<EventSkeleton key={i}/>
)

:

events.map(event=>

<EventCard
key={event.id}
event={event}
/>

)

}



</div>

)

}