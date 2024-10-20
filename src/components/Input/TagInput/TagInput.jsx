import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TagInput.scss';
function TagInput() {
  const [inputValue, setInputValue] = useState(""); 
  const [tags, setTags] = useState([]); // Масив тегів

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const addNewTag = () => {
    if (inputValue.trim()) {
      setTags([...tags, inputValue.trim()]); // Додаємо тег у масив
      setInputValue(""); // Очищаємо інпут
    }
  };

  return (
    <div className="tag-input">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter tag" 
      />
      <button onClick={addNewTag}>
        <MdAdd />
      </button>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            # {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
