import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const data = ["React", "Angular", "Vue", "Node"];

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}