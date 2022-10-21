import { Link, useNavigate } from "react-router-dom"
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
	
  const localHoneyUser = localStorage.getItem("honey_user")
  const honeyUserObject = JSON.parse(localHoneyUser)

	if(honeyUserObject.staff) {
		//return employee view
		return <EmployeeNav />
	}
	else {
		//return customer views
		return <CustomerNav />
	}
}

