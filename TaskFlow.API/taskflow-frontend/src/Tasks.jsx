import { useEffect, useState } from "react";
import { getTasks, addTask } from "./api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    async function fetchTasks() {
      const data = await getTasks();
      setTasks(data);
    }
    fetchTasks();
  }, []);

  async function handleAddTask(e) {
    e.preventDefault();
    if (!newTask.title) return;
    const added = await addTask(newTask);
    setTasks([...tasks, added]);
    setNewTask({ title: "", description: "" });
  }

  return (
    <div>
      <h2>📝 Task List</h2>
      <form onSubmit={handleAddTask}>
        <input
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet - Add one!</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <strong>{t.title}</strong> — {t.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
