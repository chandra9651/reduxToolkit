import { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice"

export default function App() {
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(name));
        setName("");
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Todo App
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3"
                >
                    <input
                        type="text"
                        placeholder="Add a new todo..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                    >
                        Add Todo
                    </button>
                </form>
            </div>
        </div>
    );
}