import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import img from "../asset/images/icon/thun1.webp";
import { fetchCate, fetchDeleteCate } from "../actions/unitActions";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './pt.css'

function QlList() {
  const dispatch = useDispatch();
  const unitState = useSelector(state => state.unit);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchCate());
  }, [dispatch]);

  const handleDelete = (MaDanhMuc) => {
    Swal.fire({
      text: "Bạn có muốn xóa sản phẩm này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Tiếp tục"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Xóa sản phẩm thành công!",
          icon: "success"
        });
        dispatch(fetchDeleteCate(MaDanhMuc));
      }
    });
  };

  if (unitState.loading) {
    return <p>Loading...</p>;
  }

  if (unitState.error) {
    return <p>Err: {unitState.error}</p>;
  }

  // Log unitState.units to check its value
  console.log("unitState.units:", unitState.units);

  // Check if unitState.units is an array before using slice
  if (!Array.isArray(unitState.units)) {
    return <p>Error: Data format is incorrect, expected an array.</p>;
  }

  // Calculate items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = unitState.units.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(unitState.units.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="page-wrapper">
      <Menu />
      <div className="page-container">
        <Header />
        <div className="main-content">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="overview-wrap">
                        <h2 className="title-1">Quản lý danh mục</h2>
                        <a className="au-btn au-btn-icon au-btn--blue" href="/addlist">
                          <i className="zmdi zmdi-plus"></i>Thêm sản phẩm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row m-t-30">
                    <div className="col-md-12">
                      <div className="table-responsive table--no-card m-b-30">
                        <table className="table table-borderless table-data3">
                          <thead>
                            <tr>
                              <th>STT</th>
                              <th>Tên Danh Mục</th>
                              <th>Hình ảnh</th>
                              <th>Trạng thái</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentItems.map((item, index) => (
                              <tr key={item.MaDanhMuc}>
                                <td>{indexOfFirstItem + index + 1}</td>
                                <td>{item.TenDanhMuc}</td>
                                <td><img src={img} alt="" style={{ width: '100px', height: '100px' }} /></td>
                                <td>{item.TrangThai}</td>
                                <td>
                                  <div className="table-data-feature">
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                      <i className="zmdi zmdi-mail-send"></i>
                                    </button>
                                    <Link to={`/editlist/${item.MaDanhMuc}`}>
                                      <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                        <i className="zmdi zmdi-edit"></i>
                                      </button>
                                    </Link>{' '}
                                    <button onClick={() => handleDelete(item.MaDanhMuc)} className="item" data-toggle="tooltip" data-placement="top" title="Delete">
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

export default QlList;
