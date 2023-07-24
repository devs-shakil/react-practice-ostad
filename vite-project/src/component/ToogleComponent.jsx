import React, { useState } from "react";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle</button>
      {isVisible ? ( 
        <p>This paragraph is visible.</p>
      ) : null}
    </div>
  );
};

export default ToggleComponent;