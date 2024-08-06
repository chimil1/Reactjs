// src/components/QlProduct.js

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import img from "../asset/images/icon/thun1.webp";
import { fetchUnits, fetchDelete } from "../actions/unitActions";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './pt.css';

function QlProduct() {
  const dispatch = useDispatch();
  const unitState = useSelector(state => state.unit);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);

  const handleDelete = (MaSanPham) => {
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
        dispatch(fetchDelete(MaSanPham));
      }
    });
  };

  if (unitState.loading) {
    return <p>Loading...</p>;
  }

  if (unitState.error) {
    return <p>Err: {unitState.error}</p>;
  }

  // Calculate items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Ensure units is an array
  const currentItems = Array.isArray(unitState.units) 
    ? unitState.units.slice(indexOfFirstItem, indexOfLastItem) 
    : [];

  const totalPages = Math.ceil((Array.isArray(unitState.units) ? unitState.units.length : 0) / itemsPerPage);

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
                        <h2 className="title-1">Quản lý sản phẩm</h2>
                        <a className="au-btn au-btn-icon au-btn--blue" href="/addproduct">
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
                              <th>Tên sản phẩm</th>
                              <th>Hình ảnh</th>
                              <th>Giá</th>
                              <th>Giá khuyến mãi</th>
                              <th>Số lượng</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(currentItems) && currentItems.map((item, index) => (
                              <tr key={item.MaSanPham}>
                                <td>{indexOfFirstItem + index + 1}</td>
                                <td>{item.TenSanPham}</td>
                                <td><img src={img} alt="" style={{ width: '100px', height: '100px' }} /></td>
                                <td>{item.Gia}</td>
                                <td>{item.GiaKhuyenMai}</td>
                                <td className="process">{item.SoLuong}</td>
                                <td>
                                  <div className="table-data-feature">
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                      <i className="zmdi zmdi-mail-send"></i>
                                    </button>
                                    <Link to={`/editproduct/${item.MaSanPham}`}>
                                      <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                        <i className="zmdi zmdi-edit"></i>
                                      </button>
                                    </Link>{' '}
                                    <button onClick={() => handleDelete(item.MaSanPham)} className="item" data-toggle="tooltip" data-placement="top" title="Delete">
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

export default QlProduct;
