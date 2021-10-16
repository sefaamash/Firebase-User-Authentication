import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
      //if thereis  a currentuser then we want to render our private route which is our props inside component otherwise go to login page
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}