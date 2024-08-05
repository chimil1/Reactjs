import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEmployeeDetails, updatePersonnel } from "../actions/unitActions";
import { useForm } from "react-hook-form";

function EditPersonnel() {
    const { MaNhanVien } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const unitState = useSelector((state) => state.unit);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    useEffect(() => {
        if (MaNhanVien) {
            console.log("Fetching employee details for ID:", MaNhanVien);
            dispatch(fetchEmployeeDetails(MaNhanVien));
        } else {
            console.error("No MaNhanVien found in URL parameters");
        }
    }, [dispatch, MaNhanVien]);

    useEffect(() => {
        if (unitState.selectedUnit) {
            console.log("Selected unit details:", unitState.selectedUnit);
            const fields = [
                "Email",
                "MatKhau",
                "HoTen",
                "DiaChi",
                "SDT",
                "Admin",
                "Anh",
                "ChucVu",
                "LyLich"
            ];
            fields.forEach((field) => setValue(field, unitState.selectedUnit[field]));
        }
    }, [unitState.selectedUnit, setValue]);

    if (unitState.loading) {
        return <p>Loading...</p>;
    }

    if (unitState.error) {
        return <p>Error: {unitState.error}</p>;
    }

    const submit = (data) => {
        console.log("Submitting data:", data);
        dispatch(updatePersonnel(MaNhanVien, data));
        alert("Cập nhật nhân viên thành công!");
        navigate("/qlpersonnel");
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
                                            <strong>Form</strong> chỉnh sửa Nhân Viên
                                        </div>
                                        <div className="card-body card-block">
                                            <form onSubmit={handleSubmit(submit)}>
                                                <div className="row form-group">
                                                    <div className="col col-md-3">
                                                        <label htmlFor="HoTen" className="form-control-label">
                                                            Họ Tên
                                                        </label>
                                                    </div>
                                                    <div className="col-12 col-md-9">
                                                        <input
                                                            {...register("HoTen", { required: true })}
                                                            type="text"
                                                            id="HoTen"
                                                            name="HoTen"
                                                            placeholder="Nhập tên nhân viên..."
                                                            className="form-control"
                                                        />
                                                        {errors.HoTen && (
                                                            <span className="text-danger">
                                                                Họ Tên không được bỏ trống!
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
                                                            type="text"
                                                            id="Email"
                                                            name="Email"
                                                            placeholder="Nhập Email..."
                                                            className="form-control"
                                                        />
                                                        {errors.Email && (
                                                            <span className="text-danger">
                                                                Email không được bỏ trống!
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
                                                            {...register("SDT")}
                                                            type="number"
                                                            id="SDT"
                                                            name="SDT"
                                                            placeholder="Nhập SDT..."
                                                            className="form-control"
                                                        />
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
                                                            {...register("Anh")}
                                                            type="file"
                                                            id="file-input"
                                                            name="Anh"
                                                            className="form-control-file"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row form-group">
                                                    <div className="col col-md-3">
                                                        <label htmlFor="ChucVu" className="form-control-label">
                                                            ChucVu
                                                        </label>
                                                    </div>
                                                    <div className="col-12 col-md-9">
                                                        <select
                                                            {...register("ChucVu", { required: true })}
                                                            name="ChucVu"
                                                            id="ChucVu"
                                                            className="form-control"
                                                        >
                                                            <option value="">Chọn Chức Vụ</option>
                                                            <option value="Nhân Viên">Nhân Viên</option>
                                                            <option value="Quản Lý">Quản Lý</option>
                                                        </select>
                                                        {errors.ChucVu && (
                                                            <span className="text-danger">
                                                                Chức Vụ không được bỏ trống!
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

export default EditPersonnel;
