import './pt.css'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import image from "../asset/images/icon/avatar-01.jpg";
import { fetchEmployee, fetchDelete1 } from "../actions/unitActions";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function QlPersonnel() {
  const dispatch = useDispatch();
  const unitState = useSelector(state => state.unit);

  // phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  const handleDelete = (MaNhanVien) => {
    Swal.fire({
      text: "Bạn muốn xóa nhân viên này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Tiếp tục"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Xóa thành công!",
          icon: "success"
        });
        dispatch(fetchDelete1(MaNhanVien));
      }
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (unitState.loading) {
    return <p>Loading...</p>
  }
  if (unitState.error) {
    return <p>Err: {unitState.error}</p>;
  }

  // Calculate items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = unitState.units.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(unitState.units.length / itemsPerPage);

  return (
    <div className="page-wrapper">
      <Menu />
      <div className="page-container">
        <Header />
        <div className="main-content">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="overview-wrap">
                        <h2 className="title-1">Quản lý nhân viên</h2>
                        <a className="au-btn au-btn-icon au-btn--blue" href="/addpersonnel">
                          <i className="zmdi zmdi-plus"></i>Thêm nhân viên
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row m-t-30">
                    <div className="col-md-12">
                      <div className="table-data__tool"></div>
                      <div className="table-responsive table-responsive-data2">
                        <table className="table table-data2">
                          <thead>
                            <tr className="tr-shadow">
                              <th>STT</th>
                              <th>Họ Tên</th>
                              <th>Email</th>
                              <th>Hình ảnh</th>
                              <th>SDT</th>
                              <th>Mật Khẩu</th>
                              <th>Chức Vụ</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(currentItems) && currentItems.map((item, index) => (
                              <tr key={item.MaNhanVien}>
                                <td>{indexOfFirstItem + index + 1}</td>
                                <td>{item.HoTen}</td>
                                <td>
                                  <span className="block-email">
                                    {item.Email}
                                  </span>
                                </td>
                                <td><img src={`${image}`} alt="" /></td>
                                <td>{item.SDT}</td>
                                <td>
                                  <span className="status--process">
                                    {item.ChucVu}
                                  </span>
                                </td>
                                <td>
                                  <div className="table-data-feature">
                                    <button
                                      className="item"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Send"
                                    >
                                      <i className="zmdi zmdi-mail-send"></i>
                                    </button>
                                    <Link to={`/editpersonnel/${item.MaNhanVien}`}>
                                      <button
                                        className="item"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Edit"
                                      >
                                        <i className="zmdi zmdi-edit"></i>
                                      </button>
                                    </Link>
                                    <button onClick={() => handleDelete(item.MaNhanVien)}
                                      className="item"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Delete"
                                    >
                                      <i className="zmdi zmdi-delete"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="pagination">
                        {[...Array(totalPages)].map((_, pageIndex) => (
                          <button
                            key={pageIndex}
                            onClick={() => handlePageChange(pageIndex + 1)}
                            className={pageIndex + 1 === currentPage ? "active" : ""}
                          >
                            {pageIndex + 1}
                          </button>
                        ))}
                      </div>
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
export default QlPersonnel;
