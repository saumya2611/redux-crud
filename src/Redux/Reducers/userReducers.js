import { toast } from "react-toastify";
import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  FILTER_VALUE,
  SHORTING,
  SEARCHING_VALUE,
  RESET_FILTER,
  STRING_SHORTING,
} from "../Action";

const initialState = {
  userList: [],
  filterData: [],
  idCnt: 1,
  searchedValue: "",
  selectCity: "",
  selectJob: "",
  order: "",
  orderName: "",
};

export const userReducer = (state = initialState, action) => {
  console.log("action===========>", action);

  const { type, payload, order, orderName } = action;
  console.log("payload==========>", payload);
  console.log("orderName payload==========>", orderName);
  // console.log("order==========>", order);

  switch (type) {
    case CREATE_USER:
      const userObj = {
        ...payload,
        id: state.idCnt,
      };
      toast.success("successfull created !");

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
      toast.success("successfull deleted !");

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
      toast.success("successfull updated !");

      return {
        ...state,
        userList: changeData,
        filterData: changeData,
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

    case SHORTING:
      console.log("action::", action);
      const shortData = state.filterData.sort((a, b) => {
        // console.log("typeof payload==========>", typeof a[payload], a[payload]);

        if (typeof a[payload] === "number") {
          if (order === "asc") {
            return a[payload] - b[payload];
          } else {
            return b[payload] - a[payload];
          }
        }
        if (order === "asc") {
          return a[payload] - b[payload];
        } else {
          return b[payload] - a[payload];
        }
      });

      console.log("shortData=========>", shortData);
      return {
        ...state,
        order: action.order === "asc" ? "dsc" : "asc",
        filterData: shortData,
      };

    case STRING_SHORTING:
      const shortName = state.filterData.sort((a, b) => {
        console.log("a =========> b", a[payload], b[payload]);

        if (orderName === "asc") {
          return a[payload].localeCompare(b[payload]);
        } else {
          return b[payload].localeCompare(a[payload]);
        }
      });
      console.log("shortName=============>", shortName);

      return {
        ...state,
        orderName: orderName === "asc" ? "dsc" : "asc",
        filterData: shortName,
      };

    default:
      return state;
  }
};
// orderName: orderName === "asc" ? "dsc" : "asc",
