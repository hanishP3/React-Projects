import React from "react";
import Firstrow from "e:/react/To-do_v2/src/assets/components/Firstrow";
// import Secound from "e:/react/To-do_v2/src/assets/components/Secound";
// import Third from "e:/react/To-do_v2/src/assets/components/Third";
import Todoitemslist from "e:/react/To-do_v2/src/assets/components/TodoItemslist";

function App() {
  const Todoitems = [
    {
      dueDate : "7-7-2007",
      name : "complete homework"
    },
    {
      dueDate : "8-8-2008",
      name: "Watch tv"
    }
  ]
  return (
    <>
      <div>
        <h1 className="font-extrabold font-mono bg-red-700 text-5xl te text-center py-3">
          To-do-V2
        </h1>
        <Firstrow />
        <Todoitemslist Todoitems={Todoitems}/>
      </div>
    </>
  );
}

export default App;
