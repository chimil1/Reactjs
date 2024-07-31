import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function AddProduct() {
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
                      <strong>Form</strong> thêm sản phẩm
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
                             Tên sản phẩm
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="text-input"
                              name="text-input"
                              placeholder="Nhập tên sản phẩm..."
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
                            for="text-input"
                            className=" form-control-label"
                          >
                           Giá
                          </label>
                        </div>
                        <div className="col-12 col-md-9">
                          <input
                            type="number"
                            id="text-input"
                            name="text-input"
                            placeholder="Nhập giá sản phẩm..."
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
                          for="text-input"
                          className=" form-control-label"
                        >
                        Giá khuyến mãi
                        </label>
                      </div>
                      <div className="col-12 col-md-9">
                        <input
                          type="number"
                          id="text-input"
                          name="text-input"
                          placeholder="Nhập giá khuyến mãi sản phẩm..."
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
                              for="disabled-input"
                              className=" form-control-label"
                            >
                              Số lượng
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <input
                              type="text"
                              id="disabled-input"
                              name=""
                              placeholder="Nhập số lượng..."
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
                              Mô tả
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <textarea
                              name="textarea-input"
                              id="textarea-input"
                              rows="9"
                              placeholder="Nhập mô tả..."
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
                              Danh mục
                            </label>
                          </div>
                          <div className="col-12 col-md-9">
                            <select
                              name="disabledSelect"
                              id="disabledSelect"
                              disabled=""
                              className="form-control"
                            >
                              <option value="0">Áo thun</option>
                              <option value="1">Áo khoác</option>
                              <option value="2">Quần jean</option>
                              <option value="3">Quần kaki</option>
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

export default AddProduct;
