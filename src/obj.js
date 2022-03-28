import { useState } from "react";
function Obj() {
  let data = { name: "harsh", age: 21 };
  let [dat, newName] = useState(data);

  let Click = () => {
    // name = "j";
    if (dat.name === "harsh") newName({ ...data, age: 20, name: 50 });
    else newName({ ...data, name: "harsh" });
  };
  return (
    <>
      <span>{dat.name} </span>
      <span>{dat.age}</span> <button onClick={Click}>Click</button>
    </>
  );
}
export default Obj;
