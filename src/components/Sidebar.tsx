import React from "react";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/theusH7X5.png"
          alt="profile image"
        />
        <strong>Matheus Borges</strong>
        <span>Web Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
