import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';

import { FaHome } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { FaCircleInfo } from "react-icons/fa6";
import { ImLab } from "react-icons/im";





const Layout = () => {
  return (
    // Use the class from the module object
    <div className={styles.container}>
      
      <nav className={styles.sidebar}>
        <h2>My App</h2>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}> 
              <FaHome /> 
                <span>Home</span>            
              </Link>
          </li>
          <li>
            <Link to="/jira" className={styles.navLink}>
              <SiJira />
              <span>Jira</span>
            </Link>
          </li>
          <li>
            <Link to="/testlab" className={styles.navLink}>
              <ImLab />
              <span>Test Lab</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              <FaCircleInfo />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;