import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import { UserContext } from "./UserContext";
import UserDashboard from "./UserDashboard";
import Quiz from "./Quiz";
import Result from "./Result";
import NotFound from "./NotFound";
import LayoutUser from "./LayoutUser";

import LayoutAdmin from "./admin/LayoutAdmin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminSignin from "./admin/AdminSignin";
import { userRoles } from "./mockData";
import AddNewQuestion from "./admin/AddNewQuestion";
import Results from "./admin/Results";
import ResultDetails from "./admin/ResultDetails";
import EditQuestion from "./admin/EditQuestion";
import QuestionsNotFound from "./QuestionsNotFound";

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user && localStorage.getItem("userId"))
      setUser({ id: localStorage.getItem("userId") });
  }, []);

  useEffect(() => {
    if (user) {
      const userRole = userRoles.find((userRole) => userRole.userId == user.id)
        .role;
      if (userRole == "admin") setIsAdmin(true);
      else setIsAdmin(false);
    }
  }, [user]);

  const AdminLayout = (props) => {
    return (
      <LayoutAdmin {...props} isAdmin={isAdmin} setIsAdmin={setIsAdmin}>
        {props.children}
      </LayoutAdmin>
    );
  };
  return (
    <div className="min-h-screen">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) =>
                !user ? (
                  <LayoutUser {...props}>
                    <Home />
                  </LayoutUser>
                ) : (
                  <Redirect to="/user" />
                )
              }
            />
            <Route
              path="/signin"
              exact
              render={(props) =>
                !user ? (
                  <LayoutUser {...props}>
                    <Signin {...props} />
                  </LayoutUser>
                ) : (
                  <Redirect to="/user" />
                )
              }
            />
            <Route
              path="/user"
              exact
              render={(props) =>
                user ? (
                  <LayoutUser {...props}>
                    <UserDashboard />
                  </LayoutUser>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/user/result/:id"
              exact
              render={(props) =>
                user ? (
                  <LayoutUser {...props}>
                    <Result {...props} />
                  </LayoutUser>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/quiz"
              exact
              render={(props) =>
                user ? (
                  localStorage.getItem("questions") ? (
                    <LayoutUser {...props}>
                      <Quiz {...props} />
                    </LayoutUser>
                  ) : (
                    <LayoutUser {...props}>
                      <QuestionsNotFound />
                    </LayoutUser>
                  )
                ) : (
                  <Redirect to="/" />
                )
              }
            />

            <Route
              path="/admin"
              exact
              render={(props) =>
                !user || !isAdmin ? (
                  <AdminLayout {...props}>
                    <AdminSignin {...props} />
                  </AdminLayout>
                ) : (
                  <Redirect to="/admin/dashboard" />
                )
              }
            />
            <Route
              path="/admin/dashboard"
              exact
              render={(props) =>
                user && isAdmin ? (
                  <AdminLayout {...props}>
                    <AdminDashboard {...props} />
                  </AdminLayout>
                ) : (
                  <Redirect to="/admin" />
                )
              }
            />
            <Route
              path="/admin/results"
              exact
              render={(props) =>
                user && isAdmin ? (
                  <AdminLayout {...props}>
                    <Results />
                  </AdminLayout>
                ) : (
                  <Redirect to="/admin" />
                )
              }
            />
            <Route
              path="/admin/add"
              exact
              render={(props) =>
                user && isAdmin ? (
                  <AdminLayout {...props}>
                    <AddNewQuestion {...props} />
                  </AdminLayout>
                ) : (
                  <Redirect to="/admin" />
                )
              }
            />
            <Route
              path="/admin/edit/:id"
              exact
              render={(props) =>
                user && isAdmin ? (
                  <LayoutAdmin {...props}>
                    <EditQuestion {...props} />
                  </LayoutAdmin>
                ) : (
                  <Redirect to="/admin" />
                )
              }
            />
            <Route
              path="/admin/result/:id"
              exact
              render={(props) =>
                user && isAdmin ? (
                  <AdminLayout {...props}>
                    <ResultDetails {...props} />
                  </AdminLayout>
                ) : (
                  <Redirect to="/admin" />
                )
              }
            />

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
