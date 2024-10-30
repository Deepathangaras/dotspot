// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';
// import Logo from "./dot.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <nav className="navbar">
      // <div className="footer-logo-brand">
      //   <NavLink to="/">
      //     <img
      //       alt="Dotsito Logo"
      //       src={"https://dotsito.s3.ap-south-1.amazonaws.com/dotspot_v2__white_new-removebg-preview.png"}
      //       width="170"
      //       height="50"
      //       className="d-inline-block align-top"
      //     />
      //   </NavLink>
      // </div>
//       <div className={`nav-links ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li>
//             <NavLink to="/about" activeClassName="active">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/product" activeClassName="active">Product</NavLink>
//           </li>

//           {/* Solutions Dropdown */}
//           <li
//             className="dropdown"
//             onClick={toggleDropdown}
//           >
//             <span className="dropdown-trigger">Solutions</span>
//             {dropdownOpen && (
//               <div className="dropdown-menu">
//                 <NavLink to="/solutions/object-detection" onClick={() => setDropdownOpen(false)}>Object Detection and Classification</NavLink>
//                 <NavLink to="/solutions/security" onClick={() => setDropdownOpen(false)}>Security and Surveillance</NavLink>
//                 <NavLink to="/solutions/workforce" onClick={() => setDropdownOpen(false)}>Works Monitoring and Attendance</NavLink>
//                 <NavLink to="/solutions/vehicle" onClick={() => setDropdownOpen(false)}>Vehicle Detection</NavLink>
//               </div>
//             )}
//           </li>

//           <li>
//             <NavLink to="/contact" activeClassName="active">Contact</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from "./dot.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar">
     <div className="footer-logo-brand">
        <NavLink to="/">
          <img
            alt="Dotsito Logo"
            src={"https://dotsito.s3.ap-south-1.amazonaws.com/dotspot_v2__white_new-removebg-preview.png"}
            width="170"
            height="50"
            className="d-inline-block align-top"
          />
        </NavLink>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/product" activeClassName="active">Product</NavLink>
          </li>

          {/* Solutions Dropdown */}
          <li className="dropdown" onClick={toggleDropdown}>
            <span className="dropdown-trigger">Solutions</span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/solutions/object-detection" onClick={() => setDropdownOpen(false)}>
                  Object Detection and Classification
                </NavLink>
                <NavLink to="/solutions/security" onClick={() => setDropdownOpen(false)}>
                  Security and Surveillance
                </NavLink>
                <NavLink to="/solutions/workforce" onClick={() => setDropdownOpen(false)}>
                  Works Monitoring and Attendance
                </NavLink>
                <NavLink to="/solutions/vehicle" onClick={() => setDropdownOpen(false)}>
                  Vehicle Detection
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
