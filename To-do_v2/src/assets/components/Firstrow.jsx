function Firstrow() {
  return (
    <>
      <div className="w-auto font-mono text-3xl font-semibold flex items-end justify-evenly">
        <form action="">
          <input
            type="text"
            placeholder="Enter To-do"
            className="border-4 border-black px-1 py-1"
          />
        </form>
        <form action="">
          <input
            type="date"
            name="date"
            id="date"
            className="border-4 border-black px-1 py-1"
          />
        </form>
        <button
          inputMode="button"
          className="text-white bg-blue-700 px-10 py-3 rounded-lg  text-center my-1  "
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Firstrow;
