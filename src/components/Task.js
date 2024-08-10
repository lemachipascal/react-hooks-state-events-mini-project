import React from "react";

function Task({text,category}) {
  
  const handleDelete = () => { 
    const button = document.querySelector(".delete")
    button.parentElement.remove()
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;