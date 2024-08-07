import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAddCate } from "../actions/unitActions";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const unitState = useSelector((state) => state.unit);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (unitState.loading) {
    return <p>Loading...</p>;
  }

  if (unitState.error) {
    return <p>Error: {unitState.error}</p>;
  }

  const submit = (data) => {
    dispatch(fetchAddCate(data));
    console.log(data);
    Swal.fire({
      text: "Thêm sản phẩm thành công!",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/qllist");
      }
    });
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
                      <strong>Form</strong> thêm danh mục
                    </div>
                    <div className="card-body card-block">
                      <form onSubmit={handleSubmit(submit)}>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="TenDanhMuc"
                              className="form-control-label"
                            >
                              Tên danh mục
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("TenDanhMuc", { required: true })}
                              type="text"
                              id="TenDanhMuc"
                              name="TenDanhMuc"
                              placeholder="Nhập tên sản phẩm..."
                              className="form-control"
                            />
                            {errors.TenDanhMuc && (
                              <span className="text-danger">
                                Tên danh mục không được bỏ trống!
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="file-input"
                              className="form-control-label"
                            >
                              Hình ảnh
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("HinhAnh")}
                              type="file"
                              id="file-input"
                              name="HinhAnh"
                              className="form-control-file"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="TrangThai"
                              className="form-control-label"
                            >
                              Trạng thái
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <select
                              {...register("TrangThai", { required: true })}
                              name="TrangThai"
                              id="TrangThai"
                              className="form-control"
                            >
                              <option value="">Chọn danh mục</option>
                              <option value="Đang hoạt động">
                                Đang hoạt động
                              </option>
                              <option value="Không hoạt động">
                                Không hoạt động
                              </option>
                            </select>
                            {errors.TrangThai && (
                              <span className="text-danger">
                                Trạng thái danh mục không được bỏ trống!
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="card-footer">
                          <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                          >
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

export default AddList;
