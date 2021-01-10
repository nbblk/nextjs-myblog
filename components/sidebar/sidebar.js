import React from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.css';

const sidebar = (props) => {
    return (
    <aside>
      <div className={styles.toggler}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className={styles.items}>
              <li className={styles.item}>
              <Link href="/about">
                <a>About me</a>
              </Link>
              </li>
              <li className={styles.item}>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
              </li>
              <li className={styles.item}>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
              </li>
            </ul>
        </div>      
      </aside>
    );
};

export default sidebar;