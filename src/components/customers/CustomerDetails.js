import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
  const [userCurrent, setUser] = useState({});
  const {customerId} = useParams()

  useEffect (
    () => {
       fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
        .then(response => response.json())
        .then((userArray) => {
          setUser(userArray[0])
        })
    },
    []
  )

    return <>
      <div>{userCurrent.user?.fullName}</div>
    </>

}