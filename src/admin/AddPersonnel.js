import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";

function AddPersonnel() {
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
                      <strong>Form</strong> thêm nhân viên
                    </div>
                    <div className="card-body card-block">
                      <form
                        action=""
                        method="post"
                        enctype="multipart/form-data"
                        className="form-horizontal"
                      >
                        <div className="row form-group">
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label for="text-input" className=" form-control-label">
                              Tên nhân viên
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="text-input"
                              name="text-input"
                              placeholder="Nhập tên..."
                              className="form-control"
                            />
                            <small className="form-text text-muted">
                              This is a help text
                            </small>
                          </div>
                        </div>



                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label  for="email-input" className=" form-control-label">
                              Email 
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="email"
                              id="email-input"
                              name="email-input"
                              placeholder="Nhập email..."
                              className="form-control"
                            />
                            <small className="help-block form-text">
                              Please enter your email
                            </small>
                          </div>
                        </div>



                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label  for="password-input" className=" form-control-label">
                              SDT
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="password-input"
                              name="password-input"
                              placeholder="Nhận sdt..."
                              className="form-control"
                            />
                            <small className="help-block form-text">
                              Please enter a complex password
                            </small>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              for="disabled-input"
                              className=" form-control-label"
                            >
                              Địa chỉ
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="disabled-input"
                              name="disabled-input"
                              placeholder="Địa chỉ..."
                              disabled=""
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              for="textarea-input"
                              className=" form-control-label"
                            >
                              Lý lịch
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <textarea
                              name="textarea-input"
                              id="textarea-input"
                              rows="9"
                              placeholder="Lý lịch..."
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              for="disabledSelect"
                              className=" form-control-label"
                            >
                             Chức vụ
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <select
                              name="disabledSelect"
                              id="disabledSelect"
                              disabled=""
                              className="form-control"
                            >
                              <option value="0">Nhân viên</option>
                              <option value="1">Quản lí</option>
                           
                            </select>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col col-md-3">
                            <label
                              for="file-input"
                              className=" form-control-label"
                            >
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

export default AddPersonnel;
