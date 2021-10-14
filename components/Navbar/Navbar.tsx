import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaUmbrellaBeach } from 'react-icons/fa';

import { StyledNavbar } from './Navbar.style';

export const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <StyledNavbar>
      <div>
        <FaUmbrellaBeach />
        <h1>Hello Holiday</h1>
      </div>

      <ul>
        <li className={pathname == '/' ? 'active' : ''}>
          <Link href='/'>Home</Link>
        </li>
        <li className={pathname == '/about' ? 'active' : ''}>
          <Link href='/about'>About</Link>
        </li>
        <li className={pathname == '/projects' ? 'active' : ''}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={pathname == '/team' ? 'active' : ''}>
          <Link href='/team'>Team</Link>
        </li>
        <li className={pathname == '/contact' ? 'active' : ''}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};
