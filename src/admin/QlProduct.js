import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import img from "../asset/images/icon/thun1.webp";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnits,fetchDelete} from "../actions/unitActions";

function QlProduct() {
  const dispatch = useDispatch();
  const unitState = useSelector(state => state.unit);

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);

  const handleDelete = (MaSanPham) => {
    dispatch(fetchDelete(MaSanPham));
    alert('Xóa sản phẩm thành công!')
  };

  if (unitState.loading) {
    return <p>Loading...</p>;
  }

  if (unitState.error) {
    return <p>Err: {unitState.error}</p>;
  }

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
                              <th>Trạng thái</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                          {unitState.units.map((item,index) => (
                              <tr key={item.MaSanPham}>
                                <td>{index+1}</td>
                                <td>{item.TenSanPham}</td>
                                <td><img src={img} alt="" style={{ width: '100px', height: '50px' }} /></td>
                                <td>{item.Gia}</td>
                                <td>{item.GiaKhuyenMai}</td>
                                <td className="process">{item.TrangThai}</td>
                                <td>
                                  <div className="table-data-feature">
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                      <i className="zmdi zmdi-mail-send"></i>
                                    </button>
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                      <i className="zmdi zmdi-edit"></i>
                                    </button>
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
