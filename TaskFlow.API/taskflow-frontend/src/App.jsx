import { useEffect, useState } from "react";
import { getBooks, addBook } from "./api";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  // Fetch books when the app loads
  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  // Add a new book
  async function handleAddBook(e) {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;

    const added = await addBook(newBook);
    setBooks([...books, added]);
    setNewBook({ title: "", author: "" });
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📚 TaskFlow Library</h1>

      <form onSubmit={handleAddBook} style={{ marginBottom: "1.5rem" }}>
        <input
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button type="submit">Add Book</button>
      </form>

      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books yet — add one!</p>
      ) : (
        <ul>
          {books.map((b) => (
            <li key={b.id}>
              <strong>{b.title}</strong> — <em>{b.author}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
