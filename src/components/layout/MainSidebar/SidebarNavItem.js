import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteNavLink, Link } from 'react-router-dom';
import {
  NavItem,
  NavLink,
  DropdownToggle,
  Collapse,
  DropdownItem,
  DropdownMenu,
  Dropdown
} from 'shards-react';

const SidebarNavItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {item.submenu ? (
        <>
          <NavItem>
            <NavItem tag={Dropdown} caret toggle={handleOpen} className={open ? 'active':''}>
            <DropdownToggle caret tag={NavLink} to={item.to}>
            {item.htmlBefore && (
                <div
                  className="d-inline-block item-icon-wrapper"
                  style={{fontSize:'24px'}}
                  dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                />
              )}
              {item.title && <span>{item.title}</span>}
            </DropdownToggle>
            <Collapse tag={DropdownMenu} open={open}>
              {item.submenu.map((elm, indx) => {
                return (
                  <DropdownItem tag={Link} index={indx} to={elm.to} key={indx} className="dropdown-item">
                    {elm.title}
                  </DropdownItem>
                );
              })}
            </Collapse>
            </NavItem>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <NavLink tag={RouteNavLink} to={item.to}>
              {item.htmlBefore && (
                <div
                  className="d-inline-block item-icon-wrapper"
                   style={{fontSize:'24px'}}
                  dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                />
              )}
              {item.title && <span>{item.title}</span>}
            </NavLink>
          </NavItem>
        </>
      )}
    </>
  );
};

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
