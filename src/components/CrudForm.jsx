import { useState } from 'react';

const initialFormState = {
  name: '',
  brand: '',
  id: null,
};

const CrudForm = () => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const handleReset = (e) => {};
  return (
    <div>
      <h3>Add</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor='brand'>Brand</label>
        <input
          type='text'
          name='brand'
          id='brand'
          onChange={handleChange}
          value={formState.brand}
        />
        <input type='submit' value='Send' />
        <input type='reset' value='Reset' onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
