import { useEffect } from "react"

const Services = () => {
    useEffect(()=>{
        console.log("Services component is created")
        return ()=>{
            console.log("Services component is deleted")
        }
    })
  return (
    <div>Services</div>
  )
}
export default Services