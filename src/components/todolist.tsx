import { useEffect, useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState<{ title: string; priority: number }[]>([]);
    const [count, setCount] = useState(0);
    const [task, setTask] = useState<{ title: string; priority: number }>({
        title: "",
        priority: 0,
    });
    const addTask = () => {
        if (task.title.trim()) {
            setTasks([...tasks, task]);
            setTask({ title: "", priority: 0 });
        }
    };
    useEffect(() => {
        console.log("Hello  this is  y point");
    }, [count]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <form className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Task Manager
                </h2>

                <input
                    type="text"
                    value={task.title}
                    onChange={(e) => setTask({ ...task, title: e.target.value })}
                    placeholder="Enter task title"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 mb-3"
                />

                <input
                    type="number"
                    value={task.priority}
                    onChange={(e) =>
                        setTask({ ...task, priority: Number(e.target.value) })
                    }
                    placeholder="Priority"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="button"
                    onClick={addTask}
                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                    Submit Task
                </button>
            </form>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <h1>{count}</h1>

            <ul className="mt-6 bg-white shadow-lg rounded-lg p-4 w-96">
                {tasks.map((val, index) => (
                    <>
                        <h3 className="text-xl font-semibold text-gray-700">
                            Task {count} Details
                        </h3>
                        <li className="text-gray-600 mt-2">
                            <strong>{val.title}</strong> {val.title || "No task added"}
                        </li>
                        <li className="text-gray-600">
                            <strong>{val.priority}</strong> {val.priority}
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
