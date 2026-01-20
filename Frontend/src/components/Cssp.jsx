export default function Cssp( {todo}) {
    return (
        <div className="m-8 h-40 w-1/4 border-2 rounded-2xl border-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-300 duration-300 hover:bg-black hover:text-white ">
            <p className="px-4 pt-3 font-bold text-xl text-blue-700">{todo.title}</p>
            <p className="px-4 pt-2 font-semibold text-blue-500">{todo.description}</p>

            <div className="flex justify-between p-4">
                <p>{todo.completed ? "done"  : "not done"}</p>
                <p>Due Date - {todo.dueDate}</p>
            </div>
        </div>
    );
}