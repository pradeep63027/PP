import Profile from "./Components/Profile"

import { useState } from "react"
const userDetailsList = [
  {
    id:1,
    name:"pradeep",
    role:"Full Stack Developer",
    contact:"6302552064",
    imageUrl:"https://ibb.co/YpRbY0g",
    
  },
  {
    id:2,
    name:"uday",
    role:"Student",
    imageUrl:"",
  },
  {
    id:3,
    name:"Vishwa",
    role:"MBA",
    imageUrl:"",
  },
  {
    id:4,
    name:"Kiran",
    role:"Developer",
    imageUrl:"",
  },
  {
    id:5,
    name:"Sneha",
    role:"software",
    imageUrl:"",
  },
  {
    id:6,
    name:"Swathi",
    role:"Full Stack Developer",
    imageUrl:"",
  },
  {
    id:7,
    name:"Tejashwini",
    role:"software",
    imageUrl:"",
  },

]



function App() {

  const [searchInput,setSearch] = useState("")


  const onChangeName = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)

  }

  const searchResults = userDetailsList.filter((eachI)=>(
    eachI.name.includes(searchInput)
  ))

  return (
    <div className="App">
      <input type="search" placeholder="search" onChange={onChangeName} value={searchInput}/>
      {searchResults.map((each)=>(
        <Profile userDetails={each} key={each.id}/>
      ))}
    </div>
  );
}

export default App;
