import "../styles/Navbar.scss";
const Navbar = ({}) => {
  return (
    <nav className="nav">
      <a
        target="_blank"
        className="logo"
        rel="noreferrer"
        href="https://www.chess.com/member/chessking2580"
      >
        AJ.
      </a>
      <div className="links">
        <a href="#skills" className="link">
          Skills
        </a>
        <a href="#hobbies" className="link">
          Hobbies
        </a>
        <a href="#projects" className="link">
          Projects
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
