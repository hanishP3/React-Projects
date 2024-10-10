import Secound from "e:/react/To-do_v2/src/assets/components/Secound";
import Third from "e:/react/To-do_v2/src/assets/components/Third";

const Todoitemslist = ({ Todoitems }) => {
  return (
    <>
      <Secound task={"Todoitems.name"} date={"07-07-2007"} />
      <Third task={"complete class work"} date={"07-07-2007"} />
    </>
  );
};
export default Todoitemslist;
