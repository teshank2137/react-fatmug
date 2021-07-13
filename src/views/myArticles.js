import { MyArticleTile } from "../components/article";
import { motion } from "framer-motion";
import useArticle from "../customeHooks/useArticles";
import { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const StyledMyArticles = styled.div`
  .progress {
    position: absolute;
    top: 45vh;
    right: 50vw;
    z-index: 10;
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
  }
`;

export default function MyArticles() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [myArticles, isLoading] = useArticle("MY", page);
  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "20%" }}
      transition={{ transition: "easeOut" }}
    >
      <StyledMyArticles>
        {isLoading ? (
          <div className="progress">
            <CircularProgress />
          </div>
        ) : null}

        {myArticles.map((article) => (
          <MyArticleTile
            title={article.title}
            username={article.username}
            description={article.description}
            image_url={
              "https://teshank.pythonanywhere.com" + article.image_url ||
              "//via.placeholder.com/350x150"
            }
          />
        ))}

        <footer>
          <Pagination
            className="Footer"
            count={3}
            page={page}
            onChange={handleChange}
          />
        </footer>
      </StyledMyArticles>
    </motion.div>
  );
}
