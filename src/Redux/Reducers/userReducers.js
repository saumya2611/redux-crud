import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  FILTER_VALUE,
  SHORTING_ID,
  SEARCHING_VALUE,
  RESET_FILTER,
} from "../Action";

const initialState = {
  userList: [],
  filterData: [],
  idCnt: 1,
  searchedValue: "",
  selectCity: "",
  selectJob: "",
};

export const userReducer = (state = initialState, action) => {
  console.log("action===========>", action);

  const { type, payload } = action;
  console.log("payload==========>", payload);

  switch (type) {
    case CREATE_USER:
      const userObj = {
        ...payload,
        id: state.idCnt,
      };

      return {
        ...state,
        userList: [...state.userList, userObj],
        filterData: [...state.filterData, userObj],
        idCnt: state.idCnt + 1,
      };

    case DELETE_USER:
      const newUserList = state.userList.filter((item) => {
        return item.id != payload;
      });
      // console.log("newUserList==============>", newUserList);
      return {
        ...state,
        userList: newUserList,
        filterData: newUserList,
      };

    case UPDATE_USER:
      const changeData = state.userList.map((item) => {
        if (item.id === action.id) {
          return payload;
        }
        return item;
      });

      // console.log("changeData-->", changeData);

      return {
        ...state,
        userList: changeData,
      };

    case SEARCHING_VALUE:
      const newSearchValue = state.userList.filter((item) => {
        return (
          item.name.toLowerCase().includes(payload.toLowerCase()) ||
          item.phone.includes(payload)
        );
      });

      // console.log("newSearchValue===========>", newSearchValue);
      return {
        ...state,
        filterData: newSearchValue,
        searchedValue: payload,
      };

    case FILTER_VALUE:
      const searchItem = state.userList.filter((item) => {
        return item.city === payload;
      });

      console.log("searchItem==============>", searchItem);
      return {
        ...state,
        filterData: searchItem,
        selectCity: payload,
      };

    case RESET_FILTER:
      return {
        ...state,
        filterData: state.userList,
        selectCity: "",
      };
    default:
      return state;
  }
};
