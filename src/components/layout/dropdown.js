import './index.css';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';


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

  // function DropdownItemRight(props) {
  //   return (
  //     <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        
  //       {props.children}
  //       {/* <span className="icon-right">{props.rightIcon}</span> */}
  //       <span className="icon-button">{props.leftIcon}</span>
  //     </a>
  //   );
  // }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      
        
          {props.type === "support" ?
          <div>
          <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
          <DropdownItem goToMenu="fund"><h2>Education Fund</h2></DropdownItem> 
          <DropdownItem goToMenu="training"><h2>Technical Training</h2></DropdownItem> 
          {/* <DropdownItemRight goToMenu="training" leftIcon={<ArrowIcon />}><h2>Technical Training</h2></DropdownItemRight>  */}
          <DropdownItem goToMenu="welfare"><h2>Welfare</h2></DropdownItem> 
          </div>
          </CSSTransition>

          <CSSTransition
          in={activeMenu === 'fund'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Education Fund</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Donations</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Request Funding</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Application Status</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Approved Funding</DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'training'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Technical Training</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Donations</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Request support</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Status</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Closed requests</DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'welfare'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Welfare</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Donations</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Request Funding</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Application Status</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Approved Funding</DropdownItem>
          </div>
        </CSSTransition>
        </div>
          : 
          <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        className="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
          <div className="menu"><DropdownItem>Account</DropdownItem> 
          <DropdownItem>Settings</DropdownItem> 
          <DropdownItem>Logout</DropdownItem></div> 
          </CSSTransition>}
        
      
    </div>
  );
}

export default Dropdown;