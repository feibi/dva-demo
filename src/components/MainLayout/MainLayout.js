import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';
import TreeMenu from './TreeMenu'
function MainLayout({ children, location }) {
  let height=window.innerHeight;
  return (
    <div className={styles.normal}>
      <div className="nav-container">
        <Header location={location} />
      </div>
      <div className={styles.content}>
        <div className="menu-container ant-col-xs-24">
          <TreeMenu/>
        </div>
        <div className="main-container">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
