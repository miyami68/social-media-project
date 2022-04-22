import { useContext, useEffect } from "react";
import { UserContext } from "../context/authlog";
import UserRoute from '../privacy/user_dashboard';
import { useRouter } from "next/router";

const Dashboard = () => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <UserRoute>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>User Dashboard</h1>
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Dashboard;

