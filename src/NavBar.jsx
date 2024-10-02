// import React from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './Navbar.css';

// const Navbar = ({ cartInfo = [] }) => {
//   console.log('cartInfo:', cartInfo); 

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">MyLogo</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li>
//           <Link to="/cart">
//             <i className="fa-solid fa-cart-shopping">
            
//               <Link className="nav-link" to="/cart">{cartInfo}</Link>
//             </i>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = ({ cartInfo = [] }) => { // Default to 0 for cart count
  console.log('cartInfo:', cartInfo); 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyLogo</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="cart-icon-container"> {/* Wrap icon and info together */}
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {cartInfo > 0 && ( // Only show cartInfo if it's greater than 0
              <span className="cart-info">{cartInfo}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

