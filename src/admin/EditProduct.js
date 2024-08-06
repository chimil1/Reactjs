import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUnitDetails, updateProduct } from "../actions/unitActions"; // Cập nhật action
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
function EditProduct() {
  let { MaSanPham } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const unitState = useSelector((state) => state.unit);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    dispatch(fetchUnitDetails(MaSanPham)); // Sử dụng action lấy chi tiết sản phẩm
  }, [dispatch, MaSanPham]);

  useEffect(() => {
    console.log("Unit State:", unitState.selectedUnit);
    if (unitState.selectedUnit) {
      // Sử dụng selectedUnit
      setValue("TenSanPham", unitState.selectedUnit.TenSanPham);
      setValue("Gia", unitState.selectedUnit.Gia);
      setValue("GiaKhuyenMai", unitState.selectedUnit.GiaKhuyenMai);
      setValue("SoLuong", unitState.selectedUnit.SoLuong);
      setValue("MoTa", unitState.selectedUnit.MoTa);
      setValue("MaDanhMuc", unitState.selectedUnit.MaDanhMuc);
      setValue("TrangThai", unitState.selectedUnit.TrangThai);
    }
  }, [unitState.selectedUnit, setValue]);

  if (unitState.loading) {
    return <p>Loading...</p>;
  }

  if (unitState.error) {
    return <p>Error: {unitState.error}</p>;
  }

  const submit = (data) => {
    dispatch(updateProduct(MaSanPham, data)); // Sử dụng action cập nhật sản phẩm
    console.log(data);
    Swal.fire({
      text: "Cập nhật sản phẩm thành công!",
      icon: "success",
    });
    navigate("/qlproduct");
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
                      <strong>Form</strong> chỉnh sửa sản phẩm
                    </div>
                    <div className="card-body card-block">
                      <form onSubmit={handleSubmit(submit)}>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="TenSanPham"
                              className="form-control-label"
                            >
                              Tên sản phẩm
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("TenSanPham", { required: true })}
                              type="text"
                              id="TenSanPham"
                              name="TenSanPham"
                              placeholder="Nhập tên sản phẩm..."
                              className="form-control"
                            />
                            {errors.TenSanPham && (
                              <span className="text-danger">
                                Tên sản phẩm không được bỏ trống!
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label htmlFor="Gia" className="form-control-label">
                              Giá
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("Gia", { required: true })}
                              type="number"
                              id="Gia"
                              name="Gia"
                              placeholder="Nhập giá sản phẩm..."
                              className="form-control"
                            />
                            {errors.Gia && (
                              <span className="text-danger">
                                Giá sản phẩm không được bỏ trống!
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="GiaKhuyenMai"
                              className="form-control-label"
                            >
                              Giá khuyến mãi
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("GiaKhuyenMai")}
                              type="number"
                              id="GiaKhuyenMai"
                              name="GiaKhuyenMai"
                              placeholder="Nhập giá khuyến mãi sản phẩm..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="SoLuong"
                              className="form-control-label"
                            >
                              Số lượng
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              {...register("SoLuong", { required: true })}
                              type="number"
                              id="SoLuong"
                              name="SoLuong"
                              placeholder="Nhập số lượng..."
                              className="form-control"
                            />
                            {errors.SoLuong && (
                              <span className="text-danger">
                                Số lượng sản phẩm không được bỏ trống!
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="MoTa"
                              className="form-control-label"
                            >
                              Mô tả
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <textarea
                              {...register("MoTa", { required: true })}
                              name="MoTa"
                              id="MoTa"
                              rows="9"
                              placeholder="Nhập mô tả..."
                              className="form-control"
                            ></textarea>
                            {errors.MoTa && (
                              <span className="text-danger">
                                Mô tả sản phẩm không được bỏ trống!
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              htmlFor="MaDanhMuc"
                              className="form-control-label"
                            >
                              Danh mục
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <select
                              {...register("MaDanhMuc", { required: true })}
                              name="MaDanhMuc"
                              id="MaDanhMuc"
                              className="form-control"
                            >
                              <option value="">Chọn danh mục</option>
                              <option value="1">Áo thun</option>
                              <option value="2">Áo khoác</option>
                              <option value="3">Quần jean</option>
                            </select>
                            {errors.MaDanhMuc && (
                              <span className="text-danger">
                                Danh mục sản phẩm không được bỏ trống!
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
                              <option value="">Chọn trạng thái</option>
                              <option value="Đang hoạt động">
                                Đang hoạt động
                              </option>
                              <option value="Không hoạt động">
                                Không hoạt động
                              </option>
                            </select>
                            {errors.TrangThai && (
                              <span className="text-danger">
                                Trạng thái sản phẩm không được bỏ trống!
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

export default EditProduct;
