import './index.css';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import React, { useState, useEffect, useRef } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { CSSTransition } from 'react-transition-group'; 
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function Dropdown(props) {
  let [isOpen, setIsOpen] = useState(false);
  function NavItem(props) {
    return (
      <li className="nav-item">
        <Link to="/" className="icon-button-like" onClick={() => setIsOpen((isOpen) => !isOpen )} >
          {props.icon}
        </Link>
  
        {isOpen && props.children}
      </li>
    );
  }
  return (
    <li style={{display: "flex", alignItems: "center"}}>
      {props.children}
      <OutsideClickHandler onOutsideClick={() => {
        setIsOpen(false)
      }}>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu type={props.type} signOut={props.signOut}></DropdownMenu>
        </NavItem>
      </OutsideClickHandler>
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
      <Link to="/" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  

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
          <DropdownItem><button style={{width: "100%", height: "100%", background: "none", border: "none", outline: "none", textAlign: "left", color: "#dadce1", fontSize: "16px", fontFamily: "Roboto, sans-serif"}} onClick={() => props.signOut()}>Logout</button></DropdownItem></div> 
          </CSSTransition>}
        
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: (out) => dispatch(signOut(out))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
