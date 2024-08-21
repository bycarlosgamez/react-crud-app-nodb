import { useState } from 'react';
import { db } from '../db/db';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const Crud = () => {
  const [dataBase, setDataBase] = useState(db);
  const [dataEdit, setDataEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDataBase((prevData) => {
      return [...prevData, data];
    });
  };

  const updateData = (data) => {};
  const deleteData = (id) => {};

  return (
    <>
      <h1>CRUD</h1>
      <CrudForm
        dataEdit={dataEdit}
        handleCreate={createData}
        handleUpdate={updateData}
        setDataEdit={setDataEdit}
      />
      <CrudTable
        db={dataBase}
        setDataEdit={setDataEdit}
        handleDelete={deleteData}
      />
    </>
  );
};

export default Crud;
