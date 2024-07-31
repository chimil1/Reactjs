const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
// Thiết lập kết nối MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Thay đổi nếu cần
  password: 'mysql', // Thay đổi nếu cần
  database: 'asm_nodejs'
});



app.get('/api/units', (req, res) => {
  const sql = 'SELECT * FROM sanpham';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(results);
  });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});