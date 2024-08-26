import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooksApi, getBooksApi } from "../../redux/books/bookSlice";
import { Link } from "react-router-dom";
import { SearchBooks } from "./SearchBooks";
import Highlighter from "react-highlight-words";

const AllBooks = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.book);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getBooksApi());
  }, [dispatch]);

  const filteredBooks = Array.isArray(data)
    ? data.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const deleteBook = (id) => {
    dispatch(deleteBooksApi(id));
  };
  return (
    <section className="container">
      <article>
        <div className="main">
          <h1>All Books</h1>
          <SearchBooks handleSearch={(e) => setSearch(e)} />
          <aside>
            {status === true ? (
              "loading..."
            ) : (
              <ul>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((val) => (
                    <Fragment key={val.id}>
                      <li>
                        <span>
                          <h2>
                            <Highlighter
                              searchWords={[search]}
                              autoEscape={true}
                              textToHighlight={val.title}
                            />
                          </h2>
                          <p>
                            <Highlighter
                              searchWords={[search]}
                              autoEscape={true}
                              textToHighlight={val.author}
                            />
                          </p>
                        </span>
                        <span>
                          <button onClick={() => deleteBook(val.id)}>
                            delete
                          </button>
                          <Link to={`/update/${val.id}`} className="nav-link">
                            update
                          </Link>
                        </span>
                      </li>
                    </Fragment>
                  ))
                ) : (
                  <Fragment>No book found</Fragment>
                )}
              </ul>
            )}
          </aside>
        </div>
      </article>
    </section>
  );
};

export default AllBooks;
