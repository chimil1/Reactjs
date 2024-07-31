import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


function QlList() {
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
                      <h2 className="title-1">Quản lý danh mục</h2>
                      <a className="au-btn au-btn-icon au-btn--blue" href="/addlist">
                        <i className="zmdi zmdi-plus"></i>Thêm danh mục
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
                            <th>Tên danh mục</th>
                            <th>Trạng thái</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td>1</td>
                            <td>Áo thu thun</td>
                            <td className="process">Đang hoạt động</td>
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
                            <td>Áo Khoác</td>
                            <td className="denied">Không hoạt động</td>
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

export default QlList;
