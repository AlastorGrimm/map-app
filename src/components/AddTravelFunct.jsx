import React, { useState } from 'react';
import   './travellingTable';



  function handleAddRow () {
    const newRow = {
      country: document.getElementById("input-country").value,
      dateBegin: document.getElementById("input-dateBegin").value,
      dateEnd: document.getElementById("input-dateEnd").value,
      isfinished: document.getElementById("input-isfinished").checked
    };

  return (
     
      <div>
        <input type="text" id="input-country" />
        <input type="text" id="input-dateBegin" />
        <input type="text" id="input-dateEnd" />
        <input type="checkbox" id="input-isfinished" />
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    
  )
};

export default handleAddRow;