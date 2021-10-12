/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/UserActions";

const Counter4 = function ({ users, fetchUser, errorMessage, loading }) {
  //   const users = useSelector((state) => state.user.data);
  //   const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
  }, []);

  return loading ? (
    <div>Loading....</div>
  ) : errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    <div>
      Users:
      <ol>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    users: state.user.data,
    loading: state.user.loading,
    errorMessage: state.user.errorMessage,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter4);
