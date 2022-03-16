import React from "react";
import Link from "next/link";

import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <aside>
      <div className={styles.toggler}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className={styles.items}>
          {props.menus.map((item, index) => (
            <Link key={index} href={item.path}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
