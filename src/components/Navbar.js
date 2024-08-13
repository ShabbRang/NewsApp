// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const Navbar = (props) => {
//   return (
//     <nav className="bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <Link to="/home" className="text-white text-lg font-bold">
//               {props.title}
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 to="/home"
//                 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 About
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// export default Navbar;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/home" className="text-white text-lg font-bold">
              {props.title}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/home"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium bg-slate-600"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
