import React, { useEffect, useState } from 'react'

import './App.css';
import formElement from './formElement.json'
import Element from './component/Element';
import { FormContext } from './FormContext';

function App() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    setFields(formElement)
  }, [])

  const handleChange = (fieldID, event) => {
    console.log("field name", fieldID, event.target.value)
    const newElements = [...fields]
    newElements.forEach(field => {
      const { questionName, questionType } = field;
      if (fieldID === questionName) {
        switch (questionType) {
          case 'CHECKBOX':
            field['responseData'] = event.target.checked;
            break;
          default:
            field['responseData'] = event.target.value;
            break;
        }
      }
      setFields(newElements)
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("elements")
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h3>Job Application Form</h3>
        <form>
          {fields.length ? fields.map((item, i) => {
            return <Element key={i}{...item} />
          }) : null}
          <button type="submit" className="btn btn-primary"
           onClick={handleSubmit}
          >Submit</button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
