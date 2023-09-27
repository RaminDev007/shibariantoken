// 'use client';

// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-scroll/modules';
// // import { usePathname } from 'next/navigation';
// import { useTheme } from 'next-themes';
// // import { RiMoonFill, RiSunLine } from 'react-icons/ri';
// import { IoMdMenu, IoMdClose } from 'react-icons/io';

// // import { motion } from 'framer-motion';
// // import styles from '../styles';
// // import { navVariants } from '../utils/motion';

// const NAV_ITEMS = [
//   {
//     label: 'Home',
//     page: 'home',
//   },
//   {
//     label: 'About',
//     page: 'about',
//   },
//   {
//     label: 'Tokenomics',
//     page: 'tokenomics',
//   },
//   {
//     label: 'How to Buy',
//     page: 'buy',
//   },
//   {
//     label: 'Roadmap',
//     page: 'roadmap',
//   },
// ];

// export default function Navbar() {
//   const { systemTheme, theme, setTheme } = useTheme();
//   // const currentTheme = theme === 'system' ? systemTheme : theme;
//   // const pathname = usePathname();
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-gradient-to-r  from-cyan-500 to-blue-500 dark:bg-stone-900 dark:border-b dark:border-stone-600 overflow-hidden">
//       <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl justify-between md:items-center md:flex">
//         <div>
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             <Link to="home">
//               <div className="container flex items-center space-x-2 hover:scale-125 duration-200:hover duration-500 cursor-pointer">
//                 <img
//                   src="logo.png"
//                   className="w-[60px] h-[60px] object-cover rounded-full"
//                 />
//                 <h2 className="text-2xl color font-bold text-white">
//                   Shibarian
//                 </h2>
//               </div>
//             </Link>
//             <div className="md:hidden">
//               <button
//                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div
//             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               navbar ? 'block' : 'hidden'
//             }`}
//           >
//             <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
//               {NAV_ITEMS.map((item, idx) => {
//                 return (
//                   <Link
//                     key={idx}
//                     to={item.page}
//                     className={
//                       'block lg:inline-block text-white hover:scale-125 duration-200:hover duration-500 dark:text-neutral-100'
//                     }
//                     activeClass="active"
//                     spy={true}
//                     smooth={true}
//                     offset={-100}
//                     duration={500}
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll/modules';
// import { useTheme } from 'next-themes';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const NAV_ITEMS = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Tokenomics',
    page: 'tokenomics',
  },
  {
    label: 'How to Buy',
    page: 'buy',
  },
  {
    label: 'Roadmap',
    page: 'roadmap',
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-gradient-to-r  from-cyan-500 to-blue-500 dark:bg-stone-900 dark:border-b dark:border-stone-600 overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2 hover:scale-125 duration-200:hover duration-500 cursor-pointer">
                <img
                  src="logo.png"
                  className="w-[60px] h-[60px] object-cover rounded-full"
                />
                <h2 className="text-2xl color font-bold text-white">
                  Shibarian
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                type="button"
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block lg:inline-block text-white hover:scale-125 duration-200:hover duration-500 dark:text-neutral-100"
                  activeClass="active"
                  spy
                  smooth
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;