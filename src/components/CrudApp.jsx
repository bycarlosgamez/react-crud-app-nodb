import { db } from '../db/db';

const Crud = () => {
  console.log(db);
  return (
    <>
      <h1>CRUD</h1>
      <form>
        <table></table>
      </form>
    </>
  );
};

export default Crud;
