
import mysql from 'mysql';
import {useEffect} from "react";

function App() {
  const connection = mysql.createConnection({
    host: '<hostname>',
    user: '<username>',
    password: '<password>',
    database: '<database>'
  });

  useEffect(()=>{ connection.connect();},[])

  const sql = 'SELECT * FROM users';

  connection.query(sql, (error, results) => {
    if (error) throw error;
    console.log(results);
  });

  return (
    <div className="App">

    </div>
  );
}

export default App;
