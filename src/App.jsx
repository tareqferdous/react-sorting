import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      title: "Apple",
      count: 2,
      invented: 1990,
    },
    {
      title: "Banana",
      count: 3,
      invented: 1992,
    },
    {
      title: "mango",
      count: 4,
      invented: 1994,
    },
    {
      title: "orange",
      count: 5,
      invented: 1999,
    },
  ];
  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a.title > b.title ? -1 : 1) },
    ascendingYear: { method: (a, b) => a.invented - b.invented },
    descendingYear: { method: (a, b) => b.invented - a.invented },
  };

  return (
    <div className="main">
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
        <option value="ascendingYear">Ascending Year</option>
        <option value="descendingYear">descending Year</option>
      </select>
      <ul>
        {data.sort(sortMethods[sortState].method).map((el, i) => (
          <li key={i}>
            {el.title}
            {el.invented}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
