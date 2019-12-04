import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setItem(oldValue => {
      return {
        ...oldValue,
        [name]: value
      };
    });
  }
  function submit(event) {
    props.add(item);
    event.preventDefault();
    setItem(() => {
      return { title: "", content: "" };
    });
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={item.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={item.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
