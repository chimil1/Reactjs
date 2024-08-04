import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAdd } from "../actions/unitActions";

function AddPersonnel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [personnel, setPersonnel] = useState({
    HoTen: '',
    Email: '',
    MatKhau: '',
    SDT: '',
    DiaChi: '',
    LyLich: '',
    ChucVu: '',
    Anh: '',
    Admin: '1',
  });

  const handleChange = (e) => {
    setPersonnel({
      ...personnel,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(fetchAdd(personnel));
      alert("Thêm nhân viên thành công!");
      navigate('/qlpersonnel');
    } catch (error) {
      alert("Có lỗi xảy ra khi thêm nhân viên.");
      console.error("Error adding personnel:", error.message);
    }
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
                      <strong>Form</strong> thêm nhân viên
                    </div>
                    <div className="card-body card-block">
                      <form onSubmit={handleSubmit} className="form-horizontal">
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="HoTen" className="form-control-label">
                              Tên nhân viên
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="HoTen"
                              name="HoTen"
                              value={personnel.HoTen}
                              onChange={handleChange}
                              placeholder="Nhập tên..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="Email" className="form-control-label">
                              Email
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="email"
                              id="Email"
                              name="Email"
                              value={personnel.Email}
                              onChange={handleChange}
                              placeholder="Nhập email..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="MatKhau" className="form-control-label">
                              Mật Khẩu
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="password"
                              id="MatKhau"
                              name="MatKhau"
                              value={personnel.MatKhau}
                              onChange={handleChange}
                              placeholder="Nhập Mật Khẩu..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="SDT" className="form-control-label">
                              SDT
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="SDT"
                              name="SDT"
                              value={personnel.SDT}
                              onChange={handleChange}
                              placeholder="Nhập SDT..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="DiaChi" className="form-control-label">
                              Địa chỉ
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="DiaChi"
                              name="DiaChi"
                              value={personnel.DiaChi}
                              onChange={handleChange}
                              placeholder="Địa chỉ..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="LyLich" className="form-control-label">
                              Lý lịch
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <textarea
                              name="LyLich"
                              id="LyLich"
                              rows="9"
                              value={personnel.LyLich}
                              onChange={handleChange}
                              placeholder="Lý lịch..."
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="ChucVu" className="form-control-label">
                              Chức vụ
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <select
                              name="ChucVu"
                              id="ChucVu"
                              value={personnel.ChucVu}
                              onChange={handleChange}
                              className="form-control"
                            >
                              <option value="Nhân viên">Nhân viên</option>
                              <option value="Quản lí">Quản lí</option>
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

export default AddPersonnel;
