// Sidebar component to implement the side bar on the card

//import useState hook to create menu collapse state
import React, { useState } from "react";
import Logo from '../../Images/Avatar.png';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BsFillPeopleFill, BsFillFileBarGraphFill } from "react-icons/bs";
import {MdOutlineContactMail} from "react-icons/md";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import './Sidebar.css';


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? 
                "Logo" : 
                <div className="card__image-txt-container"> 
                            
                    <div className="card_image"><img src={Logo} alt="Profile Pic"/></div>
                    <div className="card__body">
                        <div className="card__header">Jessica Smith</div>
                        <div className="card__body_text">Superadmin</div>
                    </div>
               
            </div>   
               
              }</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<BsFillFileBarGraphFill />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<BsFillPeopleFill />}>About Us</MenuItem>
              <MenuItem icon={<MdOutlineContactMail />}>Contact Us</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;