import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CheckIfUserPreRegister = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  const getUserByEmail = async () => {
    try {
      const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/CheckIfUserPreRegister`);
   data.elements.map(element => element['fieldValues'].map(element => {
       if(element['id'] === "36661" && element['value'] === email) {
           navigate(`/qrcode/${email}`);
       } else {
           navigate("/signin");
       }
   }));
    } catch (error) {
    console.error(error);
    }
  };

  useEffect(() => {
      getUserByEmail();
  }, [email]);



  // if (user?.Account_Number) {
  //   navigate(`/qrcode/${email}`);
  // } else {
  //   navigate("/signin");
  // }

  return <div></div>;
};
export default CheckIfUserPreRegister;
