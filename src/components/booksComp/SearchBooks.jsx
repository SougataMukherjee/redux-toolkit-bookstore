import { MdOutlineSearch } from "react-icons/md";
import "./SearchBooks.css";
export const SearchBooks = ({ handleSearch }) => {
  return (
    <div className="searchBlock">
      <span>
        <input
          type="text"
          placeholder="search courses..."
          onInput={(e) => handleSearch(e.target.value)}
        />
      </span>
      <span className="searchIcon">
        <MdOutlineSearch />
      </span>
    </div>
  );
};
