import Carrito from "./common/Carrito";

export const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <h1>LibrosLichu</h1>
        <ul className="nav-lista">
          <li>
            <a href="#">Ficción y Literatura</a>
          </li>
          <li>
            <a href="#">Ingeniería, Técnica y Ciencias Exactas</a>
          </li>
          <li>
            <a href="#">Infantil y Juvenil</a>
          </li>
          <li>
            <a href="#">Humanidades</a>
          </li>
        </ul>
        <Carrito />
      </nav>
    </header>
  );
};
