import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);
  function addItem(note) {
    setList(oldList => {
      return [...oldList, note];
    });
  }
  function delItem(id) {
    setList(old => {
      return old.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea add={addItem} />
      {list.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={delItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
