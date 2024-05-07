import Link from 'next/link';
import styles from './styles.module.css';

// Define the menu items data structure
const menuItems = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className={`bg-gray-900 text-white py-8 ` + styles.footerContainer}>
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* First column with icons */}
        <div className="flex items-center mb-4">
          {/* Icons go here */}
          {/* For example: */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span>Icon 1</span>
          {/* Add more icons as needed */}
        </div>
        {/* Second to fourth columns with menu items */}
        {menuItems.map((item, index) => (
          <div key={index} className="w-full sm:w-auto mb-4 sm:mb-0">
            <h4 className="text-lg font-bold mb-2">{item.name}</h4>
            <ul>
              <li>
                <Link href={item.href}>
                  <span className="text-gray-300 hover:text-white">Link 1</span>
                </Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
