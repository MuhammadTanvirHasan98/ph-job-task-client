import { useEffect } from "react"

function App() {

   useEffect(()=>{
       fetch("http://localhost:3000/allFoods")
       .then(res=> res.json())
       .then(data=> console.log(data))
   },[])
  return (
    <>
        <h1 className="">Hello Tanvir Sir!</h1>
    </>
  )
}

export default App
