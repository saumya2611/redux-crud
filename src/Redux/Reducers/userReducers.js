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
  userList: [
    {
      id: 1,
      name: "Saumya",
      email: "saumya0439@gmail.com",
      phone: "9919234566",
      job: "React developer",
      city: "Pune",
      country: "Usa",
      date: "22/3/2000",
    },
    {
      id: 2,
      name: "Anjli",
      email: "Anjli0439@gmail.com",
      phone: "9919234566",
      job: "Java developer",
      city: "Mumbai",
      country: "Dubai",
      date: "22/3/2003",
    },
    {
      id: 3,
      name: "John",
      email: "john233@gmail.com",
      phone: "9919234566",
      job: "React developer",
      city: "Delhi",
      country: "London",
      date: "22/3/2001",
    },
    {
      id: 4,
      name: "Rishi",
      email: "rishi233@gmail.com",
      phone: "9919234566",
      job: "frontend developer",
      city: "kolkata",
      country: "America",
      date: "22/3/2001",
    },
    {
      id: 5,
      name: "Riva",
      email: "riva233@gmail.com",
      phone: "9919234566",
      job: "Fullstack developer",
      city: "kolkata",
      country: "America",
      date: "22/3/2009",
    },
  ],
  filterData: [
    {
      id: 1,
      name: "Saumya",
      email: "saumya0439@gmail.com",
      phone: "9919234566",
      job: "React developer",
      city: "Pune",
      country: "Usa",
      date: "22/3/2005",
    },
    {
      id: 2,
      name: "Anjli",
      email: "Anjli0439@gmail.com",
      phone: "9919234566",
      job: "Java developer",
      city: "Mumbai",
      country: "Dubai",
      date: "22/3/2003",
    },
    {
      id: 3,
      name: "John",
      email: "john233@gmail.com",
      phone: "9919234566",
      job: "React developer",
      city: "Delhi",
      country: "London",
      date: "22/3/2001",
    },

    {
      id: 4,
      name: "Rishi",
      email: "rishi233@gmail.com",
      phone: "9919234566",
      job: "frontend developer",
      city: "kolkata",
      country: "America",
      date: "22/3/2005",
    },
    {
      id: 5,
      name: "Riva",
      email: "riva233@gmail.com",
      phone: "9919234566",
      job: "Fullstack developer",
      city: "kolkata",
      country: "America",
      date: "22/3/2009",
    },
  ],
  idCnt: 6,
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
