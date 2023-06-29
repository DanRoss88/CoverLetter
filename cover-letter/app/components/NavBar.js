import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
     <ul> 
      <li>
      <h1>Daniel Ross</h1>
      </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/whyyou">Why Your Company?</a>
        </li>
        <li>
          <a href="/whyme">Why Hire Me?</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/reference">Reference</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
