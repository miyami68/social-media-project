import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../context/authlog";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);

  const router = useRouter();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, [state && state.token]);

  const getCurrentUser = async () => {
    try {
    
      let { data } = await axios.get(`/current_user`);
      console.log("DATA getCurrent_user", data);
      if (data) setOk(true);
    } catch (err) {
      router.push("/login");
    }
  };

  process.browser &&
    (!state || !state.token) &&
    setTimeout(() => {
      getCurrentUser();
    }, 1000);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <>{children}</>
  );
};

export default UserRoute;