import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faPlus,
  faUser,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import css from "./Sidebar.module.css";
import nodpImg from "../../images/nodp.jpg";
// import logo from "../../images/logo2.svg";
// import { UserContext } from "../../App";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux";
// import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const feed = <FontAwesomeIcon icon={faTh} />;
const addPostIcon = <FontAwesomeIcon icon={faPlus} />;
const profileIcon = <FontAwesomeIcon icon={faUser} />;
const logout = <FontAwesomeIcon icon={faSignOutAlt} />;
const editProfileIcon = <FontAwesomeIcon icon={faCog} />;

const Sidebar = () => {
  const dispatch = useDispatch();
  const {profile} = useSelector(state=> state.userReducer,shallowEqual);
  // const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  // const { getProfile, profile } = useForm();

  const onLogout = () => {
    dispatch(actionCreators.logout());
    history.push("/login");
  };

  // useEffect(()=> {
  //   dispatch(actionCreators.getProfile());
  // },[dispatch]);

  // console.log(isLoading);
  // if(isLoading) {
  //   return <LoadingSpinner />
  // }

  return (
    <>
      <div className={css.sidebar}>
        <div className={css.logo}>
          {/* <img src={logo} alt="logo" /> */}
        </div>
        {/* profile details */}
        {/* {console.log(profile)} */}
      {profile.length !== {} && (
        <div className={css.sideProf}>
            {/* profile img */}
            <div className={css.profile}>
              <div className={css.profile_img}>
                {profile.about.profilepic !== null ? (
                  <img src={profile.about.profilepic} alt={profile.username} />
                ) : (
                  <img src={nodpImg} alt={profile.username} />
                )}
                {/* <img src={nodpImg} alt={profile.username} /> */}
              </div>
              <div className={css.name}>
                <h1>{profile.name}</h1>
              </div>
              <div className={css.pro_username}>
                <span>@{profile.username}</span>
              </div>
            </div>
            {/* about */}
            <div className={css.about}>
              <div className={css.box}>
                <h3>{profile.posts.length}</h3>
                <span>Posts</span>
              </div>
              <div className={css.box}>
                <h3>{profile.followers.length}</h3>
                <span>Followers</span>
              </div>
              <div className={css.box}>
                <h3>{profile.following.length}</h3>
                <span>Following</span>
              </div>
            </div>
          </div>
        )}
        {/* menu */}
        <div className={css.menu}>
          <Link to="/" className={location.pathname === "/" ? css.active : ""}>
            <span className={css.icon}>{feed}</span>
            <div className={css.icon_func}>Feed</div>
          </Link>
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? css.active : ""}
          >
            <span className={css.icon}>{profileIcon}</span>
            <div className={css.icon_func}>Profile</div>
          </Link>
          <Link
            to="/editProfile"
            className={location.pathname === "/editProfile" ? css.active : ""}
          >
            <span className={css.icon}>{editProfileIcon}</span>
            <div className={css.icon_func}>Edit Profile</div>
          </Link>
          {profile && (
            <Link to={location.pathname}>
              <span className={css.icon}>{addPostIcon}</span>
              <div className={css.icon_func}>Add Post</div>
            </Link>
          )}
          <Link to="/login" onClick={onLogout}>
            <span className={css.icon}>{logout}</span>
            <div className={css.icon_func}>Log Out</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
