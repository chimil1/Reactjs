import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEmployeeDetails, updatePersonnel } from "../actions/unitActions";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

function EditPersonnel() {
    let { MaNhanVien } = useParams();
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
        dispatch(fetchEmployeeDetails(MaNhanVien));
    }, [dispatch, MaNhanVien]);

    useEffect(() => {
        if (unitState.selectedUnit && unitState.selectedUnit.MaNhanVien === parseInt(MaNhanVien)) {
            const selectedEmployee = unitState.selectedUnit;
            setValue("HoTen", selectedEmployee.HoTen || '');
            setValue("Email", selectedEmployee.Email || '');
            setValue("MatKhau", selectedEmployee.MatKhau || '');
            setValue("SDT", selectedEmployee.SDT || '');
            setValue("DiaChi", selectedEmployee.DiaChi || '');
            setValue("LyLich", selectedEmployee.LyLich || '');
            setValue("ChucVu", selectedEmployee.ChucVu || '');
            setValue("Anh", selectedEmployee.Anh || '');
            setValue("Admin", selectedEmployee.Admin || '');
        }
    }, [unitState.selectedUnit, setValue, MaNhanVien]);

    const submit = (data) => {
        dispatch(updatePersonnel(MaNhanVien, data)); // Sử dụng action cập nhật sản phẩm
        console.log(data);
        Swal.fire({
            text: "Cập nhật thành công!",
            icon: "success"
          });
        navigate("/qlpersonnel");
    };

    if (unitState.loading) {
        return <p>Loading...</p>;
    }

    if (unitState.error) {
        return <p>Error: {unitState.error}</p>;
    }

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
                                            <strong>Form</strong> chỉnh sửa nhân viên
                                        </div>
                                        <div className="card-body card-block">
                                            <form onSubmit={handleSubmit(submit)} className="form-horizontal">
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
                                                            placeholder="Nhập tên..."
                                                            className="form-control"
                                                        />
                                                        {errors.HoTen && (
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
                                                            placeholder="Nhập email..."
                                                            className="form-control"
                                                        />
                                                        {errors.Email && (
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
                                                            placeholder="Nhập Mật Khẩu..."
                                                            className="form-control"
                                                        />
                                                        {errors.MatKhau && (
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
                                                            placeholder="Nhập SDT..."
                                                            className="form-control"
                                                        />
                                                        {errors.SDT && (
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
                                                            placeholder="Địa chỉ..."
                                                            className="form-control"
                                                        />
                                                        {errors.DiaChi && (
                                                            <span className="text-danger">
                                                                Địa chỉ Không được bỏ trống!
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
                                                            {...register("ChucVu", { required: true })}
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
                                                                Chức vụ Không được bỏ trống!
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
                                                            {...register("Admin", { required: true })}
                                                            name="Admin"
                                                            id="Admin"
                                                            className="form-control"
                                                        >
                                                            <option value="">Chọn chức vụ</option>
                                                            <option value="1">Nhân viên</option>
                                                            <option value="0">Quản lí</option>
                                                        </select>
                                                        {errors.Admin && (
                                                            <span className="text-danger">
                                                                Admin Không được bỏ trống!
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

export default EditPersonnel;
