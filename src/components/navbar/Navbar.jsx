import NavbarStyle from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={NavbarStyle.navbar}>
      <a href="#About">About Us</a>
      <a href="#For">For You</a>
      <a href="#Services">Services</a>
      <a href="#Blog">Blog</a>
      <a href="#Vlog">Vlog</a>
      <a href="#Contact">Contact</a>
    </div>
  );
};

export default Navbar;
