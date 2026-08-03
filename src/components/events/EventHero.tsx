import {motion} from "framer-motion";


export default function EventHero(){

return(

<section className="
h-[420px]
flex
items-center
justify-center
bg-gradient-to-r
from-black
via-gray-900
to-black
text-white
">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="text-center"
>

<h1 className="
text-5xl
font-bold
tracking-tight
">
Upcoming Events
</h1>


<p className="
mt-5
text-gray-300
text-lg
">
Discover experiences, celebrations and memories
</p>


</motion.div>


</section>

)

}