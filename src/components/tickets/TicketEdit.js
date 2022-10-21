import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const TicketEdit = () => {
  // TODO: This state object should not be blank
  const [ticket, assignTicket] = useState({})
  // TODO: What is the variable in which you stored the route parameter?
  const {ticketId} = useParams()
  const navigate = useNavigate()
  useEffect (
    () => {
       fetch(`http://localhost:8088/serviceTickets/${ticketId}`)
        .then(response => response.json())
        .then((userArray) => {
          assignTicket(userArray)
        })
    },
    []
  )



  const handleSaveButtonClick = (event) => {
      event.preventDefault()


      return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ticket)
      })
        .then(response => response.json())
        .then(() => {
          navigate("/tickets")
        })

  }


  return <form className="ticketForm">
      <h2 className="ticketForm__title">Service Ticket</h2>
      <fieldset>
          <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                  required autoFocus
                  type="text"
                  style={{
                      height: "10rem"
                  }}
                  className="form-control"
                  value={ticket.description}
                  onChange={
                      (evt) => {
                          // TODO: Update state with a modified copy
                          const copy = {...ticket}
                          copy.description = evt.target.value
                          assignTicket(copy)
                      }
                  }>{ticket.description}</textarea>
          </div>
      </fieldset>
      <fieldset>
          <div className="form-group">
              <label htmlFor="name">Emergency:</label>
              <input type="checkbox"
                  value={ticket.emergency}
                  onChange={
                      (evt) => {
                          // TODO: Update state with a modified copy
                          const copy = {...ticket}
                          copy.emergency = evt.target.value
                          assignTicket(copy)
                      }
                  } />
          </div>
      </fieldset>
      <button
          onClick={(event) => handleSaveButtonClick(event)}
          className="btn btn-primary">
          Save Edits
      </button>
  </form>
}