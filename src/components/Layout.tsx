import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    // Use the class from the module object
    <div className={styles.container}>
      
      <nav className={styles.sidebar}>
        <h2>My App</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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