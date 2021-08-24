import React, { useState, useCallback } from 'react';
import Input from './form/Input';

function StaticForm({}) {
  const [fields, setFields] = useState({
    firstname: 'Jhon',
    lastname: 'Doe'
  });

  function changeField({ name, value }) {
    console.log(name, value);
    setFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function formSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(fields));
  }

  return (
    <form onSubmit={formSubmit}>
      <div class="field-row">
        <label>Firstname</label>
        <Input
          type="text"
          name="firstname"
          defaultValue={'Jhon'}
          onChange={changeField}
        />
      </div>
      <div class="field-row">
        <label>Lastname</label>
        <Input
          type="text"
          name="lastname"
          defaultValue={'Doe'}
          onChange={changeField}
        />
      </div>
      <div class="field-row">
        <label>Email</label>
        <Input type="email" name="email" onChange={changeField} />
      </div>
      <div class="field-row">
        <label>Count</label>
        <Input
          type="number"
          name="count"
          defaultValue={'1'}
          onChange={changeField}
          min={1}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StaticForm;
