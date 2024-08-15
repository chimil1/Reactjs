const express = require("express");
const mysql = require("mysql");
const multer = require('multer');
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

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

app.use(express.static('public'));

// Định nghĩa nơi lưu trữ file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/images'); // Đường dẫn lưu tệp
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file với timestamp
  }
});

const upload = multer({ storage: storage });

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


app.post("/api/units", upload.single('HinhAnh'), (req, res) => {
  const { TenSanPham, Gia, GiaKhuyenMai, MoTa, TrangThai, MaDanhMuc, SoLuong } = req.body;
  const HinhAnh = req.file.filename; // Lấy tên file từ `req.file`

  const sql = "INSERT INTO sanpham (TenSanPham, Gia, GiaKhuyenMai, MoTa, TrangThai, MaDanhMuc, SoLuong, HinhAnh) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(sql, [TenSanPham, Gia, GiaKhuyenMai, MoTa, TrangThai, MaDanhMuc, SoLuong, HinhAnh], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send(err);
    }
    return res.status(201).json({ message: "Thêm sản phẩm thành công!", data: result });
  });
});


app.get('/api/units/:MaSanPham', (req, res) => {
  const MaSanPham = req.params.MaSanPham;
  const sql = 'SELECT * FROM sanpham WHERE MaSanPham = ?';

  db.query(sql, [MaSanPham], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(results[0]); // Trả về sản phẩm đầu tiên trong kết quả
  });
});

app.put('/api/units/:MaSanPham', upload.single('HinhAnh'), (req, res) => {
  const MaSanPham = req.params.MaSanPham;
  const { TenSanPham, Gia, GiaKhuyenMai, SoLuong, MoTa, MaDanhMuc, TrangThai } = req.body;
  // Xử lý hình ảnh
  const HinhAnh = req.file ? req.file.filename : null; // Nếu không có file, `HinhAnh` là null
  // Câu lệnh SQL để cập nhật sản phẩm
  const sql = `
    UPDATE sanpham
    SET TenSanPham = ?, Gia = ?, GiaKhuyenMai = ?, SoLuong = ?, MoTa = ?, MaDanhMuc = ?, TrangThai = ?${HinhAnh ? ', HinhAnh = ?' : ''}
    WHERE MaSanPham = ?
  `;
  // Xây dựng mảng dữ liệu để truyền vào câu lệnh SQL
  const values = [TenSanPham, Gia, GiaKhuyenMai, SoLuong, MoTa, MaDanhMuc, TrangThai];
  if (HinhAnh) values.push(HinhAnh); // Nếu có hình ảnh mới, thêm vào mảng
  values.push(MaSanPham);
  
  db.query(sql, values, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json({ message: 'Product updated successfully' });
  });
});



//nhân viên
// hiển thị nhân viên
app.get("/api/employees", (req, res) => {
  const sql = "SELECT * FROM nhanvien";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(results);
  });
});
//xóa nhân viên
app.delete("/api/employees/:MaNhanVien", (req, res) => {
  const MaNhanVien = req.params.MaNhanVien;
  const sql = "DELETE FROM nhanvien WHERE MaNhanVien = ?";
  db.query(sql, [MaNhanVien], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ message: "Deleted successfully" });
  });
});
//thêm nhân viên
app.post("/api/employees", (req, res) => {
  const {
    Email,
    MatKhau,
    HoTen,
    DiaChi,
    SDT,
    Admin,
    Anh,
    ChucVu,
    LyLich
  } = req.body;
  const sql =
    "INSERT INTO nhanvien (Email,MatKhau,HoTen,DiaChi,SDT,Admin,Anh,ChucVu,LyLich) VALUES (?, ?, ?, ?, ?, ?,?,?,?)";
  db.query(
    sql,
    [
      Email,
      MatKhau,
      HoTen,
      DiaChi,
      SDT,
      Admin,
      Anh,
      ChucVu,
      LyLich
    ],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res
        .status(201)
        .json({ message: "Thêm Nhân Viên thành công!", data: result });
    }
  );
});
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
})
app.get('/api/employees/:MaNhanVien', (req, res) => {
  const MaNhanVien = req.params.MaNhanVien;
  const sql = 'SELECT * FROM nhanvien WHERE MaNhanVien = ?';

  db.query(sql, [MaNhanVien], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(results[0]); // Trả về sản phẩm đầu tiên trong kết quả
  });
});

app.put('/api/employees/:MaNhanVien', (req, res) => {
  const MaNhanVien = req.params.MaNhanVien;
  const { Email, MatKhau, HoTen, DiaChi, SDT, Admin, ChucVu, LyLich } = req.body;

  const sql = `
      UPDATE nhanvien
      SET Email = ?, MatKhau = ?, HoTen = ?, DiaChi = ?, SDT = ?, Admin = ?, ChucVu = ?, LyLich = ?
      WHERE MaNhanVien = ?
  `;
  db.query(sql, [Email, MatKhau, HoTen, DiaChi, SDT, Admin, ChucVu, LyLich, MaNhanVien], (err, results) => {
      if (err) {
          return res.status(500).send(err.message); // Send the error message instead of the entire error object
      }
      if (results.affectedRows === 0) {
          return res.status(404).json({ message: 'Employee not found' });
      }
      return res.json({ message: 'Employee updated successfully' });
  });
});




app.get("/api/Cates", (req, res) => {
  const sql = "SELECT * FROM danhmuc";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(results);
  });
});
//xóa nhân viên
app.delete("/api/Cates/:MaDanhMuc", (req, res) => {
  const MaDanhMuc = req.params.MaDanhMuc;
  const sql = "DELETE FROM danhmuc WHERE MaDanhMuc = ?";
  db.query(sql, [MaDanhMuc], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ message: "Deleted successfully" });
  });
});
//thêm nhân viên
app.post("/api/Cates", (req, res) => {
  const { TenDanhMuc, TrangThai } = req.body;
  console.log('Received data for new category:', req.body);

  const sql = "INSERT INTO danhmuc (TenDanhMuc, TrangThai) VALUES ( ?,?)";
  
  db.query(sql, [TenDanhMuc, TrangThai], (err, result) => {
    if (err) {
      console.error('Database error during category insertion:', err);
      return res.status(500).send(err);
    }
    console.log('Category added successfully:', result);
    return res.status(201).json({ message: "Thêm sản phẩm thành công!", data: result });
  });
});

app.get('/api/Cates/:MaDanhMuc', (req, res) => {
  const MaDanhMuc = req.params.MaDanhMuc;
  const sql = 'SELECT * FROM danhmuc WHERE MaDanhMuc = ?';

  db.query(sql, [MaDanhMuc], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(results[0]); // Trả về sản phẩm đầu tiên trong kết quả
  });
});

app.put('/api/Cates/:MaDanhMuc', (req, res) => {
  const MaDanhMuc = req.params.MaDanhMuc;
  const { TenDanhMuc, TrangThai} = req.body;

  const sql = `
      UPDATE danhmuc
      SET TenDanhMuc = ?, TrangThai = ?
      WHERE MaDanhMuc = ?
  `;
  db.query(sql, [TenDanhMuc, TrangThai, MaDanhMuc], (err, results) => {
    if (err) {
      return res.status(500).send(err.message); // Send the error message instead of the entire error object
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.json({ message: 'Employee updated successfully' });
  });
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
