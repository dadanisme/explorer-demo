import { useEffect, useState } from "react";
// import { mainContext } from "./App";

export default function Folder({ data, parentChecked = false, depth = 1 }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  // const { setHierarcy } = useContext(mainContext);

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

  // function handleParentCheck(children) {}

  // useEffect(() => {
  //   //
  // }, [checked, setHierarcy]);

  return (
    <div className="flex items-start">
      <input
        type="checkbox"
        id={data.name}
        onChange={handleCheck}
        onClick={(e) => e.stopPropagation()}
        className="relative top-1.5"
        checked={checked}
      />
      <div
        className="ml-4 cursor-pointer select-none"
        onClick={isFolder ? handleCollapse : handleOpen}
      >
        <header>
          {isFolder ? (open ? "📂" : "📁") : "📄"}
          {isFolder ? data.name : data.name + ".txt"}
        </header>

        {open && (
          <div className="ml-4">
            {data.children.map((item, index) => (
              <Folder
                data={item}
                key={index}
                parentChecked={checked}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
