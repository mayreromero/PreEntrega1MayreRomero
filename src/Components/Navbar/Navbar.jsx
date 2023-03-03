import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <img
        src="https://res.cloudinary.com/dyt4eknl1/image/upload/v1677884404/web_logo_z6njru.png"
        alt=""
      />
      <h1>Nombre del Gym</h1>
      <CartWidget />
    </div>
  );
};

export default Navbar;
