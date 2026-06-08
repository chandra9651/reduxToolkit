import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
    // Get todos array from Redux store
    const todos = useSelector((state) => state.UserTodos);

    const dispatch = useDispatch();

    return (
        <div className="max-w-3xl mx-auto mt-6 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    My Todos ({todos.length})
                </h2>

                {todos.length > 0 ? (
                    <div className="space-y-3">
                        {todos.map((todo) => (
                            <div
                                key={todo.id}
                                className="flex items-center justify-between gap-4 border border-gray-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-md transition"
                            >
                                <div className="flex-1">
                                    <p className="text-lg font-medium text-gray-800">
                                        {todo.text}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        dispatch(removeTodo(todo.id))
                                    }
                                    className="px-5 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        No todos available
                    </div>
                )}
            </div>
        </div>
    );
};

export default Todos;