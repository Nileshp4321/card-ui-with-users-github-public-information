import React, { useEffect, useState } from "react";
import fetchUser from './User';
const Fetchdata=()=>
{
   <>
    {/* <Fetchdata /> */}
   </>
    const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch("https://api.github.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
   `${alert("hello")}`
    );
}

export default Fetchdata;