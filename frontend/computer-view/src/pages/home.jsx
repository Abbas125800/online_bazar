import {useEffect,useState} from "react"
import api from "../services/api"

function Home(){

const [message,setMessage]=useState("")

useEffect(()=>{
api.get("/test").then(res=>{
setMessage(res.data.message)
})
},[])

return(

<div>

<h1>Online Bazar</h1>

<p>{message}</p>

</div>

)

}

export default Home