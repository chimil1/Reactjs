import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAdd } from "../actions/unitActions";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

function AddPersonnel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(fetchAdd(data));
      Swal.fire({
        text: "Thêm nhân viên thành công!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/qlpersonnel');
        }
      });

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
                      <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="HoTen" className="form-control-label">
                              Tên nhân viên
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("HoTen", { required: "Họ Tên Không được bỏ trống!" })}
                              type="text"
                              id="HoTen"
                              name="HoTen"
                              placeholder="Nhập tên..."
                              className="form-control"
                            />
                            {errors.HoTen && (
                              <span className="text-danger">
                                {errors.HoTen.message}
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
                              {...register("Email", { required: "Email Không được bỏ trống!",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Email không đúng định dạng!",
                                },
                               })}
                              type="email"
                              id="Email"
                              name="Email"
                              placeholder="Nhập email..."
                              className="form-control"
                            />
                            {errors.Email && (
                              <span className="text-danger">
                                {errors.Email.message}
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
                              {...register("MatKhau", { required: "Mật Khẩu Không được bỏ trống!",
                                minLength: {
                                  value: 8,
                                  message: "Mật Khẩu phải có ít nhất 8 kí tự!",
                                },
                                pattern: {
                                  value:
                                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                  message:
                                    "Mật Khẩu phải bao gồm chữ, số và ký tự đặc biệt!",
                                },
                               })}
                              type="password"
                              id="MatKhau"
                              name="MatKhau"
                              placeholder="Nhập Mật Khẩu..."
                              className="form-control"
                            />
                            {errors.MatKhau && (
                              <span className="text-danger">
                                {errors.MatKhau.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="SDT" className="form-control-label">
                              Số Điện Thoại
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("SDT", { required: "Số Điện Thoại Không được bỏ trống!",
                                maxLength: {
                                  value: 10,
                                  message:
                                    "Số Điện Thoại không được quá 10 số!",
                                },
                                pattern: {
                                  value: /^[0-9]+$/,
                                  message:
                                    "Số Điện Thoại chỉ được chứa chữ số!",
                                },
                               })}
                              type="text"
                              id="SDT"
                              name="SDT"
                              placeholder="Nhập SDT..."
                              className="form-control"
                            />
                            {errors.SDT && (
                              <span className="text-danger">
                                {errors.SDT.message}
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
                              {...register("DiaChi", { required: "Địa chỉ Không được bỏ trống!" })}
                              type="text"
                              id="DiaChi"
                              name="DiaChi"
                              placeholder="Địa chỉ..."
                              className="form-control"
                            />
                            {errors.DiaChi && (
                              <span className="text-danger">
                                {errors.DiaChi.message}
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
                              {...register("LyLich")}
                              name="LyLich"
                              id="LyLich"
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
                              {...register("ChucVu", { required: "Chức vụ Không được bỏ trống!" })}
                              name="ChucVu"
                              id="ChucVu"
                              className="form-control"
                            >
                              <option value="">Chọn chức vụ</option>
                              <option value="Nhân viên">Nhân viên</option>
                              <option value="Quản lí">Quản lí</option>
                            </select>
                            {errors.ChucVu && (
                              <span className="text-danger">
                                {errors.ChucVu.message}
                              </span>
                            )}
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
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="Admin" className="form-control-label">
                              Admin
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <select
                              {...register("Admin", { required: "Admin Không được bỏ trống!" })}
                              name="Admin"
                              id="Admin"
                              className="form-control"
                            >
                              <option value="1">Nhân viên</option>
                              <option value="0">Quản lí</option>
                            </select>
                            {errors.Admin && (
                              <span className="text-danger">
                                {errors.Admin.message}
                              </span>
                            )}
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
