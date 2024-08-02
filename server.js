const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json()); // Middleware để phân tích dữ liệu JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware để phân tích dữ liệu URL-encoded

// Thiết lập kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Thay đổi nếu cần
  password: "mysql", // Thay đổi nếu cần
  database: "asm_nodejs",
});

app.get("/api/units", (req, res) => {
  const sql = "SELECT * FROM sanpham";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(results);
  });
});

app.delete("/api/units/:MaSanPham", (req, res) => {
  const MaSanPham = req.params.MaSanPham;
  const sql = "DELETE FROM sanpham WHERE MaSanPham = ?";
  db.query(sql, [MaSanPham], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ message: "Deleted successfully" });
  });
});

app.post("/api/units", (req, res) => {
  const {
    TenSanPham,
    Gia,
    GiaKhuyenMai,
    SoLuong,
    MoTa,
    MaDanhMuc,
    HinhAnh,
    TrangThai,
    Hot
  } = req.body;
  const sql =
    "INSERT INTO sanpham (TenSanPham, Gia, GiaKhuyenMai,SoLuong, MoTa, MaDanhMuc,HinhAnh, TrangThai,Hot) VALUES (?, ?, ?, ?, ?, ?,?,?,?)";
  db.query(
    sql,
    [
      TenSanPham,
      Gia,
      GiaKhuyenMai,
      SoLuong,
      MoTa,
      MaDanhMuc,
      HinhAnh,
      TrangThai,
      Hot
    ],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res
        .status(201)
        .json({ message: "Thêm sản phẩm thành công!", data: result });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
