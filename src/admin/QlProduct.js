import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import img from "../asset/images/icon/thun1.webp"



function QlProduct() {
  return (
    <div className="page-wrapper">
      <Menu></Menu>
      <div className="page-container">
        <Header></Header>
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
                              <th>Mô tả</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Áo thun nam unisex</td>
                              <td><img src={`${img}`} alt="" style={{width:'150px',height:'100px'}} /></td>
                              <td>10.000.000đ</td>
                              <td className="process">400.000đ</td>
                              <td>
                                Áo thun vải coton gắn kết cặp đôi nè trời ơi.
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
                                  <button
                                    className="item"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  >
                                    <i className="zmdi zmdi-edit"></i>
                                  </button>
                                  <button
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

                            <tr>
                            <td>2</td>
                            <td>Áo thun nam unisex</td>
                            <td><img src={`${img}`} alt="" style={{width:'150px',height:'100px'}} /></td>
                            <td>10.000.000đ</td>
                            <td className="process">400.000đ</td>
                            <td>
                              Áo thun vải coton gắn kết cặp đôi nè trời ơi.
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
                                <button
                                  className="item"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  <i className="zmdi zmdi-edit"></i>
                                </button>
                                <button
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

                          <tr>
                          <td>3</td>
                          <td>Áo thun nam unisex</td>
                          <td><img src={`${img}`} alt="" style={{width:'150px',height:'100px'}} /></td>
                          <td>10.000.000đ</td>
                          <td className="process">400.000đ</td>
                          <td>
                            Áo thun vải coton gắn kết cặp đôi nè trời ơi.
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
                              <button
                                className="item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                              >
                                <i className="zmdi zmdi-edit"></i>
                              </button>
                              <button
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
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QlProduct;
