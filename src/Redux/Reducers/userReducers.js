import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  JOB_TITLE,
  FILTER_CITY,
  SHORTING_ID,
  SEARCHING_VALUE,
} from "../Action";

const initialState = {
  userList: [],
  filterData: [],
  idCnt: 1,
};

export const userReducer = (state = initialState, action) => {
  console.log("action===========>", action);

  const { type, payload } = action;
  // console.log("payload==========>", payload);

  switch (type) {
    case CREATE_USER:
      const userObj = {
        ...payload,
        id: state.idCnt,
      };

      return {
        ...state,
        userList: [...state.userList, userObj],
        idCnt: state.idCnt + 1,
      };

    case DELETE_USER:
      const newUserList = state.userList.filter((item) => {
        return item.id != payload;
      });
      console.log("newUserList==============>", newUserList);
      return {
        userList: newUserList,
      };

    case UPDATE_USER:
      const changeData = state.userList.map((item) => {
        if (item.id === action.id) {
          return payload;
        }
        return item;
      });

      console.log("changeData-->", changeData);

      return {
        ...state,
        userList: changeData,
      };

    default:
      return state;
  }
};
