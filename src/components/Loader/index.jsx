import { ring2 } from 'ldrs'

ring2.register()
export const Loader = ({color})=>{
   return <l-ring-2
     size="30"
     stroke="5"
     stroke-length="0.25"
     bg-opacity="0.1"
     speed="0.8" 
     color={color} 
   ></l-ring-2>
}
