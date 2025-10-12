const API_BASE = "http://localhost:5104/api";

export async function getBooks() {
  const res = await fetch(`${API_BASE}/books`);
  return res.json();
}

export async function addBook(book) {
  const res = await fetch(`${API_BASE}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
}