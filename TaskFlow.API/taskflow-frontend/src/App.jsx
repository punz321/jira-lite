import { useEffect, useState } from "react";
import { getBooks, addBook } from "./api";
import "./App.css";

import Tasks from "./Tasks";

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const [view, setView] = useState("books");
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
      <h1>📚 TaskFlow Dashboard</h1>

      {/* Add simple buttons to toggle between Books and Tasks */}
      <div style={{ marginBottom: "1.5rem" }}>
        <button onClick={() => setView("books")}
          style={{
            marginRight: "0.5rem",
            background: view === "books" ? "#007bff" : "#eee",
            color: view === "books" ? "white" : "black",
          }}
          >Books</button>
        <button onClick={() => setView("tasks")}
        style={{
            background: view === "tasks" ? "#007bff" : "#eee",
            color: view === "tasks" ? "white" : "black",
          }}
        >Tasks</button>
      </div>
      {/* 🆕 Manage which section is visible */}
      {view === "books" ? (
        <>
          <h2>📖 Books</h2>
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

      {books.length === 0 ? (
          <p>No books yet - add one!</p>
          ) : (
            <ul>
              {books.map((b) => (
                <li key={b.id}>
                  <strong>{b.title}</strong> — <em>{b.author}</em>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        // 🆕 Show Tasks component when "Tasks" view is selected
        <Tasks />
      )}
    </div>
  );
}

export default App;
