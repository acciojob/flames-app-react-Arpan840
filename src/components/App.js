import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  let [name, setName] = useState({ firstName: "", secondName: "" });
  
  let [relationShipStatus, setRelationShipStatus] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setName((values) => ({ ...values, [name]: value }));
  };

  

  function showNames() {
    let count = 0;
    let firstName = name.firstName.split("");
    let secondName = name.secondName.split("");
    for (let i = 0; i < firstName.length; i++) {
      for (let j = 0; j < secondName.length; j++) {
        if (firstName[i] === secondName[j]) {
          count++;
        }
      }
    }

    if(!name.firstName || !name.secondName)
    {
      setRelationShipStatus('Please Enter valid input')
      return
    }
    let remainingStrings = firstName.length + secondName.length - count;
    let relationShip = remainingStrings % 6;
    switch (relationShip) {
      case 1:
        setRelationShipStatus("Friends");
        break;
      case 2:
        setRelationShipStatus("Love");
        break;
      case 3:
        setRelationShipStatus("Affection");
        break;
      case 4:
        setRelationShipStatus("Marriage");
        break;
      case 5:
        setRelationShipStatus("Enemy");
        break;
      case 0:
        setRelationShipStatus("Siblings");
        break;
      default:
        setRelationShipStatus("Please Enter valid input");
    }
  };

  function clearData(){
    setName({
        firstName:"",
        secondName:""
    })
    setRelationShipStatus("")
  }

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="secondName"
        value={name.secondName}
        onChange={handleChange}
      />     
      <button onClick={showNames}>Calculate Relationship Future</button>
      <button onClick={clearData}>Clear</button>
      <h3>{relationShipStatus}</h3>
    </div>
  );
};

export default App;
