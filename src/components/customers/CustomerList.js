import { useEffect, useState } from "react"
import { Customer } from "./Customer";

export const CustomerList = () => {
  const [users, setUsers] = useState([]);
  const [customers, setCustomers] = useState([])
  useEffect (
    () => {
       fetch(`http://localhost:8088/users?isStaff=false`)
        .then(response => response.json())
        .then((usersArray) => {
          setUsers(usersArray)
        })
    },
    []
  )

  useEffect (
    () => {
       fetch(`http://localhost:8088/customers`)
        .then(response => response.json())
        .then((customersArray) => {
          setCustomers(customersArray)
        })
    },
    []
  )

  return <article className="customers">
    {
      users.map(user => {
        return <Customer userObj={user}/>
      })
    }
  </article>
}