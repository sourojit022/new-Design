import axios from "axios";
import { ActionConst } from "./ActionConst";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { useHistory } from "react-router-dom";
toast.configure();

export const signup = (user) => {
  return async (dispatch) => {
    //action Request send to the server
    dispatch({ type: `${ActionConst.USER_REGISTER}_REQUEST` });
    axios
      .post(`https://nodeprojectapi.herokuapp.com/register`, user)
      .then((res) => {
        const msg = res.data.message;
        console.log(res.data);

        
        toast.success(msg, {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Success action generated
        // dispatch(actionType,paylode(opt))
        dispatch({
          type: `${ActionConst.USER_REGISTER}_SUCCESS`,
          payload: { message: msg },
        });
      })
      .catch((res) => {
        toast.warn("Already Registered", {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        //Failure action generated
        dispatch({
          type: `${ActionConst.USER_REGISTER}_FAILURE`,
          payload: { error: "Data not registered" },
        });
      });
  };
};

export const signin = (user) => {
  return async (dispatch) => {
    //action Request send to the server
    dispatch({ type: `${ActionConst.USER_LOGIN}_REQUEST` });
    axios
      .post(`https://nodeprojectapi.herokuapp.com/login`, user)
      .then((res) => {
        const msg = res.data.message;
        console.log(res);
        let storeData = res.data.data.token;
        let storeData1 = res.data.data.firstname;
        let storeData2 = res.data.data.email;
        console.log(storeData);
        window.localStorage.setItem("token", storeData);
        window.localStorage.setItem("full_name", storeData1);
        window.localStorage.setItem("email", storeData2);
        //  alert(msg)
        toast.success(msg, {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        toast.success(" Go to Shop", {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        toast.success("Happy Shopping", {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Success action generated
        // dispatch(actionType,paylode(opt))
        dispatch({
          type: `${ActionConst.USER_LOGIN}_SUCCESS`,
          payload: { message: msg },
        });
      })
      .catch((err) => {
        toast.error("Email/Password does not match", {
          position: "top-center",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        //Failure action generated
        dispatch({
          type: `${ActionConst.USER_LOGIN}_FAILURE`,
          payload: { error: "Login Failed" },
        });
      });
  };
};

