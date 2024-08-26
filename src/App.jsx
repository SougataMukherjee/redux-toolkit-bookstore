import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CreateBook from "./components/booksComp/CreateBook";
import { Toaster } from "react-hot-toast";
import AllBooks from "./components/booksComp/AllBooks";
import UpdateBook from "./components/booksComp/UpdateBook";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={"home"} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/update/:id" element={<UpdateBook />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
