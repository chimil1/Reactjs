import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAdd } from "../actions/unitActions";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
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
  const {
    register,
    formState: {errors},
  } = useForm ();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(fetchAdd(personnel));
      Swal.fire({
        text: "Thêm nhân viên thành công!",
        icon: "success"
      }).then((result)=>{
        if(result.isConfirmed){
          navigate('/qlpersonnel');
        }
      })

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
                             {...register("HoTen", { required: true })}
                              type="text"
                              id="HoTen"
                              name="HoTen" 
                              onChange={handleChange}
                              placeholder="Nhập tên..."
                              className="form-control"
                            />
                            {errors.HoTen &&(
                              <span className="text-danger">
                                Họ Tên Không được bỏ trống!
                              </span>
                            )}
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
                              {...register("Email", { required: true })}
                              type="email"
                              id="Email"
                              name="Email"
                              onChange={handleChange}
                              placeholder="Nhập email..."
                              className="form-control"
                            />
                            {errors.Email &&(
                              <span className="text-danger">
                                Email Không được bỏ trống!
                              </span>
                            )}
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
                              {...register("MatKhau", { required: true })}
                              type="password"
                              id="MatKhau"
                              name="MatKhau"
                              onChange={handleChange}
                              placeholder="Nhập Mật Khẩu..."
                              className="form-control"
                            />
                            {errors.MatKhau &&(
                              <span className="text-danger">
                                Mật Khẩu Không được bỏ trống!
                              </span>
                            )}
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
                            {...register("SDT", { required: true })}
                              type="text"
                              id="SDT"
                              name="SDT"
                              onChange={handleChange}
                              placeholder="Nhập SDT..."
                              className="form-control"
                            />
                            {errors.SDT &&(
                              <span className="text-danger">
                                Số Điện Thoại Không được bỏ trống!
                              </span>
                            )}
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
                            {...register("DiaChi", { required: true })}
                              type="text"
                              id="DiaChi"
                              name="DiaChi"
                              onChange={handleChange}
                              placeholder="Địa chỉ..."
                              className="form-control"
                            />
                            {errors.DiaChi &&(
                              <span className="text-danger">
                                địa chỉ Không được bỏ trống!
                              </span>
                            )}
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
                              onChange={handleChange}
                              rows="9"
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
                              onChange={handleChange}
                              className="form-control"
                            >
                            <option>Danh mục</option>
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
