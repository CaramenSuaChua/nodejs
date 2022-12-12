import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from "react";
import { useDispatch } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from 'shards-react';
const UserActions = () => {
  const history = useHistory()

  const [open,setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }
  const logout = () => {
    localStorage.removeItem('adminUser')
    history.push('/login')
  };

  return (
    <NavItem tag={Dropdown} caret toggle={handleOpen}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3" style={{
          display:'flex',
          alignItems:'center'
        }}>
          <img
            className="user-avatar rounded-circle mr-2"
            src={require('./../../../../images/avatars/0.jpg')}
            alt="User Avatar"
          />{' '}
          <span className="d-none d-md-inline-block">{localStorage.getItem('adminUser')}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={open}>
          <DropdownItem tag={Link} to="/" className="text-danger" onClick={logout}>
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
  )
}

export default UserActions