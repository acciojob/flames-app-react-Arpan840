import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  let [name, setName] = useState({ firstName: "", secondName: "" });
  let [relationshipStatus, setRelationshipStatus] = useState("");
  
  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setName((values) => ({ ...values, [inputName]: inputValue }));
  };

  const calculateRelationship = () => {
    const { firstName, secondName } = name;

    // Check for blank inputs
    if (!firstName || !secondName) {
      setRelationshipStatus("Please Enter valid input");
      return;
    }

    // Remove common letters
    const remainingString1 = removeCommonLetters(firstName, secondName);
    const remainingString2 = removeCommonLetters(secondName, firstName);

    // Calculate status
    const remainingStringLength = (remainingString1.length + remainingString2.length) % 6;

    switch (remainingStringLength) {
      case 1:
        setRelationshipStatus("Friends");
        break;
      case 2:
        setRelationshipStatus("Love");
        break;
      case 3:
        setRelationshipStatus("Affection");
        break;
      case 4:
        setRelationshipStatus("Marriage");
        break;
      case 5:
        setRelationshipStatus("Enemy");
        break;
      case 0:
        setRelationshipStatus("Siblings");
        break;
      default:
        setRelationshipStatus("Please Enter valid input");
    }
  };

  const removeCommonLetters = (str1, str2) => {
    let result = str1;

    for (let i = 0; i < str2.length; i++) {
      const index = result.indexOf(str2[i]);
      if (index !== -1) {
        result = result.slice(0, index) + result.slice(index + 1);
      }
    }

    return result;
  };

  const clearData = () => {
    setName({ firstName: "", secondName: "" });
    setRelationshipStatus("");
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={handleChange}
        data-testid="input1"
      />
      <input
        type="text"
        name="secondName"
        value={name.secondName}
        onChange={handleChange}
        data-testid="input2"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={clearData} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationshipStatus}</h3>
    </div>
  );
};

export default App;
