import React from 'react';
import Link from 'next/link'; // For internal navigation
import styles from './styles.module.css';

interface HeaderProps {
  logo: string; // Path to your logo image
  menuItems: { name: string; href: string }[]; // Menu items with name and links
}
const menuItems: HeaderProps["menuItems"] = [{
  name: 'Home',
  href: '/'
},
{
  name: 'about',
  href: '/about'
}]
const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className="container mx-auto">
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <img src="./next.svg" alt="Your Logo" />
          </div>
          <nav className={styles.navigation}>
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
