import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddUnit } from '../actions/unitActions';

function AddProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    TenSanPham: '',
    Gia: '',
    GiaKhuyenMai: '',
    MoTa: '',
    TrangThai: '',
    MaDanhMuc: '',
    SoLuong: '' 
  });


  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAddUnit(product));
  };

  return (
    <div className="page-wrapper">
      <Menu />
      <div className="page-container">
        <Header />
        <div className="main-content">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>Form</strong> thêm sản phẩm
                    </div>
                    <div className="card-body card-block">
                      <form onSubmit={handleSubmit}>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="text-input" className="form-control-label">
                              Tên sản phẩm
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="TenSanPham"
                              name="TenSanPham"
                              value={product.TenSanPham}
                              onChange={handleChange}
                              placeholder="Nhập tên sản phẩm..."
                              className="form-control"
                              />
                            
                        
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="text-input" className="form-control-label">
                              Giá
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="number"
                              id="Gia"
                              name="Gia"
                              value={product.Gia}
                              onChange={handleChange}
                              placeholder="Nhập giá sản phẩm..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="text-input" className="form-control-label">
                              Giá khuyến mãi
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="number"
                              id="GiaKhuyenMai"
                              name="GiaKhuyenMai"
                              value={product.GiaKhuyenMai}
                              onChange={handleChange}
                              placeholder="Nhập giá khuyến mãi sản phẩm..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="text-input" className="form-control-label">
                              Số lượng
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="number"
                              id="SoLuong"
                              name="SoLuong"
                              value={product.SoLuong}
                              onChange={handleChange}
                              placeholder="Nhập số lượng..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="textarea-input" className="form-control-label">
                              Mô tả
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <textarea
                              name="MoTa"
                              id="MoTa"
                              value={product.MoTa}
                              onChange={handleChange}
                              rows="9"
                              placeholder="Nhập mô tả..."
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="disabledSelect" className="form-control-label">
                              Danh mục
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <select
                              name="MaDanhMuc"
                              id="MaDanhMuc"
                              value={product.MaDanhMuc}
                              onChange={handleChange}
                              className="form-control"
                            >
                              <option value="">Chọn danh mục</option> {/* Giá trị mặc định trống */}
                              <option value="1">Áo thun</option>
                              <option value="2">Áo khoác</option>
                              <option value="3">Quần jean</option>
                            </select>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="file-input" className="form-control-label">
                              Hình ảnh
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="file"
                              id="file-input"
                              name="file-input"
                              className="form-control-file"
                            />
                          </div>
                        </div>
                        <div className="card-footer">
                          <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
