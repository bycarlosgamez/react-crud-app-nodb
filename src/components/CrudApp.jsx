import { useState } from 'react';
import { db } from '../db/db';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const Crud = () => {
  const [dataBase, setDataBase] = useState(db);
  return (
    <>
      <h1>CRUD</h1>
      <CrudForm />
      <CrudTable db={dataBase} />
    </>
  );
};

export default Crud;
