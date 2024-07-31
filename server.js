const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

// Thiết lập kết nối MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Thay đổi nếu cần
  password: 'mysql', // Thay đổi nếu cần
  database: 'asm_nodejs'
});



app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM sanpham';
    db.query(sql, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          data: results
        });
      }
    });
  });
  


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});