import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
    setNewTodo("");
  };

  const handleTodoChange = (e) => setNewTodo(e.target.value);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="mx-auto max-w-xl">
        <div className="mb-6">
          <h1 className="text-xl font-medium text-gray-900">Todo List</h1>
          <p className="mt-1 text-sm text-gray-600">Keep track of your tasks</p>
        </div>

        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex gap-3">
              <Input
                value={newTodo}
                onChange={handleTodoChange}
                placeholder="What needs to be done?"
                className="flex-1 border-gray-200 bg-white transition-colors focus-visible:ring-0 focus-visible:border-gray-300"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <Button
                type="submit"
                className="bg-gray-900 text-white hover:bg-gray-800"
                disabled={!newTodo.trim()}
              >
                Add Task
              </Button>
            </div>
          </form>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="group flex items-center justify-between rounded-md border border-gray-100 bg-white p-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleCheck(todo.id)}
                    className="h-5 w-5 rounded border-gray-300 transition-colors checked:border-blue-600 checked:bg-blue-600"
                  />
                  <span
                    className={`text-sm ${
                      todo.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="opacity-0 text-gray-400 transition-opacity hover:text-red-500 group-hover:opacity-100"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            ))}

            {todos.length === 0 && (
              <div className="py-8 text-center text-gray-500">
                <p className="text-sm">Your todo list is empty</p>
                <p className="text-xs text-gray-400">
                  Add a task to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
