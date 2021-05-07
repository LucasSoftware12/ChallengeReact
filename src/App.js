import React, { useState } from "react";
import Table from "./tables/Table";
import Add from "./forms/Add";
import Edit from "./forms/Edit";

const App = () => {
  const List = []
  const [results, setResults] = useState(List);

  const addResult = (result) => {
    setResults([...results, ...result]);
  };

  const deleted = (id) => {
    setResults(results.filter((result) => result.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialResult = { id: null, texto: "" };

  const [currentResult, setCurrentResult] = useState(initialResult);

  const edited = (id, result) => {
    setEditing(true);
    setCurrentResult(result);
  };

  const updated = (newResult) => {
    setResults(
      results.map((result) => (result.id === currentResult.id ? newResult : result))
    );
    setCurrentResult(initialResult);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>Challenge</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit</h2>
              <Edit
                currentResult={currentResult}
                setEditing={setEditing}
                updated={updated}
              />
            </div>
          ) : (
            <div>
              <h2>Add</h2>
              <Add addResult={addResult} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View</h2>
          <Table
            results={results}
            deleted={deleted}
            edited={edited}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
