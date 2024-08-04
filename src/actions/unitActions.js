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

export const fetchAddUnit = (unit) => {
  return (dispatch) => {
    dispatch(fetchUnitsRequest());
    axios
      .post("http://localhost:3001/api/units", unit)
      .then(() => {
        dispatch(fetchUnits());
      })
      .catch((error) => {
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




// export const fetchUpdateUnit = (id, unit) => {
//   return (dispatch) => {
//     dispatch(fetchUnitsRequest());
//     axios
//       .put(`https://knowledgehub.demopolyct.online/api/unit/${id}`, unit)
//       .then(() => {
//         dispatch(fetchUnits()); // Tải lại danh sách sau khi cập nhật thành công
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUnitsFailure(errorMsg));
//       });
//   };
// };
