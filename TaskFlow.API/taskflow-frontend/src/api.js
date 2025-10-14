const API_BASE = "http://localhost:5104/api";

//component for fetching and adding books
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

//component for fetching and adding tasks
export async function getTasks() {
  const res = await fetch(`${API_BASE}/tasks`);
  return res.json();
}

export async function addTask(task) {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
}