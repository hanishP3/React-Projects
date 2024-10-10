function Secound({ task, date }) {
  return (
    <>
      <div className="w-auto font-mono text-3xl font-semibold flex items-end justify-evenly">
        <h2 className="my-2">{task}</h2>
        <h2 className="my-2">{date}</h2>
        <button
          inputMode="button"
         className="text-white bg-red-700 px-4 py-3 rounded-lg my-1 text-center "
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Secound;
