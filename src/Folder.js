import { useEffect, useState, useContext } from "react";
import { mainContext } from "./App";

export default function Folder({ data, parentChecked = false, depth = 1 }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const { hierarcy, setHierarcy } = useContext(mainContext);

  const isFolder = data.children.length > 0;

  const handleCollapse = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    console.log(data.name);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (parentChecked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [parentChecked]);

  useEffect(() => {
    if (checked && !hierarcy.includes(data.name)) {
      setHierarcy((prev) => [...prev, data.name]);
    } else if (!checked && hierarcy.includes(data.name)) {
      setHierarcy((prev) => prev.filter((item) => item !== data.name));
    }
  }, [checked, data.name, hierarcy, setHierarcy]);

  return (
    <div className="flex items-start overflow-hidden">
      <input
        type="checkbox"
        id={data.name}
        onChange={handleCheck}
        onClick={(e) => e.stopPropagation()}
        className="relative top-1.5"
        checked={checked}
      />
      <div className="ml-4 cursor-pointer select-none">
        <header onClick={isFolder ? handleCollapse : handleOpen}>
          {isFolder ? (open ? "📂" : "📁") : "📄"}
          {isFolder ? data.name : data.name + ".txt"}
        </header>

        <div
          className="ml-4 transition-all duration-300 relative"
          style={{
            height: open ? "max-content" : 0,
          }}
        >
          {data.children.map((item, index) => (
            <Folder
              data={item}
              key={index}
              parentChecked={checked}
              depth={depth + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
