import { useEffect, useState } from "react"
import { CustomerDetails } from "./CustomerDetails"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const Customer = ( {userObj} ) => {
  const navigate = useNavigate()

  return <section className="customer" key={`customer--${userObj.id}`}>
          <div>
          <Link to={`/customers/${userObj.id}`}>Name: {userObj.fullName} </Link>
          </div>
        </section>
}