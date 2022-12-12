import "./navbar.css"
import {useNavigate} from 'react-router-dom'

const Navbar = ({user}) => {
  const navigate = useNavigate()
  const handleClicKLogOut =() => {
    localStorage.removeItem('user')
    navigate('/')
  }
  const item = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate('/')}>Booking Website</span>
        {!item ? (<div className="navItems">
          <button className="navButton" onClick={() => navigate('/register')}>Register</button>
          <button className="navButton" onClick={() => navigate('/login')}>Login</button>
        </div>) : 
        <div className="navItems">
        <span className="logo" >{item.email}</span>
        <button className="navButton" onClick={() => navigate('/register')}>Transaction</button>
        <button className="navButton" onClick={handleClicKLogOut}>Logout</button>
      </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
