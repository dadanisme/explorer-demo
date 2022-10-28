import data from "./structure";
import Folder from "./Folder";
import { createContext, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const mainContext = createContext();
export { mainContext };

function App() {
  const [hierarcy, setHierarcy] = useState([]);

  const ctxValues = {
    hierarcy,
    setHierarcy,
  };
  return (
    <mainContext.Provider value={ctxValues}>
      <div className="p-20 flex gap-4 bg-gray-50">
        <aside className="w-full border p-4 rounded-lg bg-white">
          <header>
            <h1 className="text-lg font-semibold">Layer Swticher</h1>
          </header>
          {data.map((item, index) => (
            <Folder data={item} key={index} />
          ))}
        </aside>

        <main className="w-full h-[30rem] overflow-y-auto border bg-[#282C34] rounded-lg">
          <h4 className="p-3 font-semibold text-gray-300 underline">
            Active Layer (s)
          </h4>
          <SyntaxHighlighter language="json" style={atomOneDark}>
            {JSON.stringify(hierarcy, null, 2)}
          </SyntaxHighlighter>
        </main>
      </div>
    </mainContext.Provider>
  );
}

export default App;
