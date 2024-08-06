import axios from "axios";

export const FETCH_UNITS_REQUEST = "FETCH_UNITS_REQUEST";
export const FETCH_UNITS_SUCCESS = "FETCH_UNITS_SUCCESS";
export const FETCH_UNITS_FAILURE = "FETCH_UNITS_FAILURE";

export const fetchUnitsRequest = () => {
  return {
    type: FETCH_UNITS_REQUEST,
  };
};

export const fetchUnitsSuccess = (units) => {
  return {
    type: FETCH_UNITS_SUCCESS,
    payload: units,
  };
};

export const fetchUnitsFailure = (error) => {
  return {
    type: FETCH_UNITS_FAILURE,
    payload: error,
  };
};

export const fetchUnits = () => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .get("http://localhost:3001/api/units")
      .then((response) => {
        const units = response.data;
        dispatch(fetchUnitsSuccess(units));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};

export const fetchDelete = (MaSanPham) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .delete(`http://localhost:3001/api/units/${MaSanPham}`)
      .then((response) => {
        const units = response.data;
        dispatch(fetchUnitsSuccess(units));
        dispatch(fetchUnits());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};

export const fetchUnitDetails = (MaSanPham) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .get(`http://localhost:3001/api/units/${MaSanPham}`)
      .then((response) => {
        const unit = response.data;
        dispatch(fetchUnitsSuccess(unit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};





export const updateProduct = (MaSanPham, data) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .put(`http://localhost:3001/api/units/${MaSanPham}`, data)
      .then((response) => {
        const unit = response.data;
        dispatch(fetchUnitsSuccess(unit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};
// export const fetchAddUnit = (unit) => {
//   return (dispatch) => {
//     dispatch(fetchUnitsRequest());
//     axios
//       .post("http://localhost:3001/api/units", unit)
//       .then(() => {
//         dispatch(fetchUnits());
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUnitsFailure(errorMsg));
//       });
//   };
// };
export const fetchAddUnit = (unit) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios.post("http://localhost:3001/api/units", unit)
      .then(response => {
        dispatch(fetchUnitsSuccess(response.data));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};
// Nhân Viên
export const fetchEmployee = () => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .get("http://localhost:3001/api/employees")
      .then((response) => {
        const units = response.data;
        dispatch(fetchUnitsSuccess(units));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};
//xóa
export const fetchDelete1 = (MaNhanVien) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .delete(`http://localhost:3001/api/employees/${MaNhanVien}`)
      .then((response) => {
        const units = response.data;
        dispatch(fetchUnitsSuccess(units));
        dispatch(fetchEmployee());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};
//thêm

export const fetchAdd = (unit) => {
  return async (dispatch) => {
    dispatch(fetchUnitsRequest());
    try {
      const response = await axios.post('http://localhost:3001/api/employees', unit);
      dispatch(fetchEmployee());
      return response.data;
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchUnitsFailure(errorMsg));
      throw error;
    }
  };
};


export const fetchEmployeeDetails = (MaNhanVien) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .get(`http://localhost:3001/api/employees/${MaNhanVien}`)
      .then((response) => {
        const unit = response.data;
        dispatch(fetchUnitsSuccess(unit));
        dispatch(fetchEmployee());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};




// sửa nhân viên
export const updatePersonnel = (MaNhanVien, data) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .put(`http://localhost:3001/api/employees/${MaNhanVien}`, data)
      .then((response) => {
        const unit = response.data;
        dispatch(fetchUnitsSuccess(unit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};


// danh muc
export const fetchCate = () => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .get("http://localhost:3001/api/Cates")
      .then((response) => {
        const units = response.data;
        dispatch(fetchUnitsSuccess(units));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};
//xóa
export const fetchDeleteCate = (MaDanhMuc) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .delete(`http://localhost:3001/api/Cates/${MaDanhMuc}`)
      .then((response) => {
        const units = response.data;
        dispatch(fetchUnitsSuccess(units));
        dispatch(fetchCate());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};
//thêm

export const fetchAddCate = (unit) => {
  return async (dispatch) => {
    dispatch(fetchUnitsRequest());
    try {
      const response = await axios.post('http://localhost:3001/api/Cates', unit);
      dispatch(fetchCate());
      return response.data;
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchUnitsFailure(errorMsg));
      throw error;
    }
  };
};


export const fetchCateDetails = (MaDanhMuc) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .get(`http://localhost:3001/api/Cates/${MaDanhMuc}`)
      .then((response) => {
        const unit = response.data;
        dispatch(fetchUnitsSuccess(unit));
        dispatch(fetchCate());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};




// sửa nhân viên
export const updateCate = (MaDanhMuc, data) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .put(`http://localhost:3001/api/Cates/${MaDanhMuc}`, data)
      .then((response) => {
        const unit = response.data;
        dispatch(fetchUnitsSuccess(unit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUnitsFailure(errorMsg));
      });
  };
};




