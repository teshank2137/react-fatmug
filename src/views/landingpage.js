import styled from "styled-components";
import { useEffect } from "react";
import { MotionLayoutProvider } from "react-motion-layout";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import ArticleDetails from "./articleDetail";
import ArticleListPage from "./articleList";
import CreateArticle from "./articleCreate";
import MyArticles from "./myArticles";

import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, loginUser } from "../actioncreator/setToken";
import setGlobalUsername from "../actioncreator/setUsername";

const StyledLandingPage = styled.div`
  h1 {
    font-size: 20px;
    margin: 12px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
      margin: 0 2%;
    }
    a {
      text-decoration: none;
      color: black;
    }
    & h1 {
      width: 45%;
      margin-left: 0;
    }
    button {
      padding: 5px 6px;
      margin: 4px;
      background: none;
      border: none;
      cursor: pointer;
      @media (min-width: 786px) {
        padding: 8px 12px;
        margin-left: 16px;
      }
    }

    & .btn-write {
      background-color: #ff6600;
      border-radius: 5px;
    }
    & .btn-articles {
      border: 1px solid #ff6600;
      border-radius: 5px;
    }
    & button:hover {
      transform: translateX(2px) translateY(-2px);
      -webkit-box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);
      box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);
    }
  }
`;

export default function LandingPage() {
  const history = useHistory();
  const username =
    useSelector((state) => state.user) || window.sessionStorage.getItem("user");
  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();
  useEffect(() => {
    if (!username) {
      const token = window.sessionStorage.getItem("token");
      const user = window.sessionStorage.getItem("user");
      dispatch(setGlobalUsername(user));
      console.log(token);
      if (token) {
        dispatch(loginUser(token));
        history.push("/");
      } else {
        history.push("/auth");
      }
    }
  }, []);
  return (
    <StyledLandingPage>
      <nav>
        <h1>
          <Link to="/">
            FATMUG | <span>Greetings! {username}</span>
          </Link>
        </h1>

        <section>
          <Link to={`/create`}>
            <button className="btn-write">Write</button>
          </Link>
          <Link to={`/my-articles`}>
            <button className="btn-articles">Your Articles</button>
          </Link>
          <Link to={`/auth`}>
            <button
              className="btn-logout"
              onClick={(e) => {
                dispatch(logoutUser());
                window.sessionStorage.removeItem("token");
              }}
            >
              {username !== "You Are Logged Out" ? "Logout" : "Login"}
            </button>
          </Link>
        </section>
      </nav>
      <AnimatePresence>
        <Switch>
          <MotionLayoutProvider>
            <Route exact path="/">
              <ArticleListPage />
            </Route>
            <Route path={`/view/:articleId`}>
              <ArticleDetails />
            </Route>
            <Route path={`/create`}>
              <CreateArticle />
            </Route>
            <Route path={`/my-articles`}>
              <MyArticles />
            </Route>
          </MotionLayoutProvider>
        </Switch>
      </AnimatePresence>
    </StyledLandingPage>
  );
}
