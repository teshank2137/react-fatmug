import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loginUser } from "../actioncreator/setToken";

const localCache = {};

const useArticle = (type, page) => {
  function getAndSetToken() {
    var t = window.sessionStorage.getItem("token");
    loginUser(t);
    return t;
  }
  const token = useSelector((state) => state.token) || getAndSetToken();
  const [latestArticle, setLatestArticle] = useState([]);
  const [myArticle, setMyArticle] = useState([]);
  const [topArticle, setTopArticle] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  let baseUri = "https://teshank.pythonanywhere.com/api/";
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };

  useEffect(() => {
    setisLoading(true);
    if (type === "MY") {
      fetch(baseUri + `myarticles/?page=${page}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setMyArticle(data.results);
          data.results.map((e) => (localCache[e.id] = e));
        })
        .catch((err) => setMyArticle([]));
    } else if (type === "LATEST") {
      fetch(baseUri + `articles/?page=${page}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.results) {
            setLatestArticle(data.results);
            data.results.map((e) => (localCache[e.id] = e));
          } else if (data.details) {
            setLatestArticle([]);
          }
        })
        .catch((err) => setLatestArticle([]));
    } else if (type === "TOP") {
      fetch(baseUri + "toparticles/", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.results) {
            setTopArticle(data.results);
            data.results.map((e) => (localCache[e.id] = e));
          } else if (data.details) {
            setTopArticle([]);
          }
        })
        .catch((err) => setTopArticle([]));
    }
    setisLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, page, token]);

  switch (type) {
    case "LATEST":
      return [latestArticle, isLoading];
    case "MY":
      return [myArticle, isLoading];
    case "TOP":
      return [topArticle, isLoading];
    case "DETAILS":
      return localCache;
    default:
      return null;
  }
};

export default useArticle;
