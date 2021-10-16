import React,{useState} from 'react'
import {Card,Button,Alert} from 'react-bootstrap'
import { useAuth } from "./context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export  function Dashboard() {
    const [error,seterror]=useState('')
    const {currentUser,logout}=useAuth()
    const history = useHistory() //whenever we logout we want to push to login page for taht we want PrivateRoute
    async function handleLogout(e){
        e.preventDefault()
    
        seterror("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          seterror("Failed to log out")
        }
      }
    
    
    return (
        <>
           <Card>
               <Card.Body>
               <h2 className="text-center mb-4">Profile</h2>
               {error && <Alert variant="danger">{error}</Alert>}
               <strong>Email:</strong>{currentUser.email}
               <Link to='/update-profile' className='btn btn-primary w-100 mt-2'>Update Profile</Link>
               </Card.Body>
           </Card>
           <div className="w-100 text-center mt-2">
       <Button variant="link" onClick={handleLogout}>LogOut</Button>
      </div>
        </>
    )}


export default Dashboard
