import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <article className="container">
        <aside className="logoBlock">
          <a href="#">TEST</a>
        </aside>
        <aside className="menuBlock">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-book">Create Book</Link>
            </li>
            <li>
              <Link to="/all-books">Get books</Link>
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
};

export default Navbar;
