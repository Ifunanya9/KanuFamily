import './index.css';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function Dropdown(props) {
  return (
    <li style={{display: "flex"}}>
      {props.children}<NavItem icon={<CaretIcon />}>
        <DropdownMenu type={props.type}></DropdownMenu>
      </NavItem>
      </li>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        className="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        
          {props.type === "support" ?
          <div className="menu">
          <DropdownItem>Education Fund</DropdownItem> 
          <DropdownItem>Technical Training</DropdownItem> 
          <DropdownItem>Welfare</DropdownItem> 
          </div>
          : 
          <div className="menu"><DropdownItem>Account</DropdownItem> 
          <DropdownItem>Settings</DropdownItem> 
          <DropdownItem>Logout</DropdownItem></div> }
        
      </CSSTransition>
    </div>
  );
}

export default Dropdown;
