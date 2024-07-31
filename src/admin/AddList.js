import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function AddList() {
  return (
    <div className="page-wrapper">
      <Menu></Menu>
      <div className="page-container">
        <Header></Header>
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
                      <form
                        action=""
                        method="post"
                        enctype="multipart/form-data"
                        className="form-horizontal"
                      >
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              for="text-input"
                              className=" form-control-label"
                            >
                              Tên danh mục
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="text-input"
                              name="text-input"
                              placeholder="Nhập tên danh mục..."
                              className="form-control"
                            />
                            <small className="form-text text-muted">
                              This is a help text
                            </small>
                          </div>
                        </div>

                        <div className="row form-group">
                        <div className="col col-md-3">
                          <label
                            for="disabledSelect"
                            className=" form-control-label"
                          >
                           Trạng thái
                          </label>
                        </div>
                        <div className="col-12 col-md-9">
                          <select
                            name="disabledSelect"
                            id="disabledSelect"
                            disabled=""
                            className="form-control"
                          >
                            <option value="0">Hoạt động</option>
                            <option value="1">Không hoạt động</option>
                         
                          </select>
                        </div>
                      </div>
                        

                          
                      </form>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary btn-sm">
                        <i className="fa fa-dot-circle-o"></i> Submit
                      </button>
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

export default AddList;
