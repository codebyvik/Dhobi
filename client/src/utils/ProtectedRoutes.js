import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const AdminRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { isAuthenticated, loading, user, gettingUser } = useSelector((state) => state.auth);
  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <>
      {!loading && !gettingUser ? (
        <Route
          {...rest}
          render={(props) => {
            if (!loggedIn && !isAuthenticated) {
              return <Redirect to="/admin/signin" />;
            }

            if (user) {
              if (isAdmin === true && user.role !== "admin") {
                return <Redirect to="/" />;
              }
            }

            return <Component {...props} />;
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export const ProtectedRoute = ({ seller, component: Component, ...rest }) => {
  const { isAuthenticated, loading, user, gettingUser } = useSelector((state) => state.auth);
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <>
      {!loading && !gettingUser ? (
        <Route
          {...rest}
          render={(props) => {
            if (!loggedIn && !isAuthenticated) {
              return <Redirect to="/signin" />;
            }

            if (user) {
              if (seller === true && user.role !== "seller") {
                return <Redirect to="/" />;
              }
            }

            return <Component {...props} />;
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};
