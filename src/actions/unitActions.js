import axios from 'axios';

export const FETCH_UNITS_REQUEST = 'FETCH_UNITS_REQUEST';
export const FETCH_UNITS_SUCCESS = 'FETCH_UNITS_SUCCESS';
export const FETCH_UNITS_FAILURE = 'FETCH_UNITS_FAILURE';

export const fetchUnitsRequest = () => {
  return {
    type: FETCH_UNITS_REQUEST
  };
};

export const fetchUnitsSuccess = (units) => {
  return {
    type: FETCH_UNITS_SUCCESS,
    payload: units
  };
};

export const fetchUnitsFailure = (error) => {
  return {
    type: FETCH_UNITS_FAILURE,
    payload: error
  };
};


export const fetchUnits = () => {
    return (dispatch) => {
      dispatch(fetchUnitsRequest());
      axios
        .get('http://localhost:3001/api/units')
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

// export const fetchDelete = (id) => {
//   return (dispatch) => {
//     dispatch(fetchUnitsRequest());
//     axios
//       .delete(`https://knowledgehub.demopolyct.online/api/unit/${id}`)
//       .then((response) => {
//         const users = response.data.data;
//         dispatch(fetchUnitsSuccess(users));
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUnitsFailure(errorMsg));
//       });
//   };
// };



// export const fetchAddUnit = (unit) => {
//   return (dispatch) => {
//     dispatch(fetchUnitsRequest());
//     axios
//       .post("https://knowledgehub.demopolyct.online/api/unit", unit)
//       .then(() => {
//         dispatch(fetchUnits()); // Tải lại danh sách sau khi thêm thành công
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUnitsFailure(errorMsg));
//       });
//   };
// };


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