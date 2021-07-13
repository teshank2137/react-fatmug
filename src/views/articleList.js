import { MotionScreen } from "react-motion-layout";
import { useState } from "react";
import styled from "styled-components";
import { LatestArticle, Article } from "../components/article";
import Pagination from "@material-ui/lab/Pagination";
import { motion } from "framer-motion";
import useArticle from "../customeHooks/useArticles";
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledListPage = styled.div`
  .contents {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    @media (min-width: 768px) {
      flex-wrap: nowrap;
    }
  }
  .progress {
    position: absolute;
    top: 45vh;
    right: 50vw;
    z-index: 10;
  }

  .latest-articles {
    border-top: 2px solid grey;
    @media (min-width: 768px) {
      flex: 3;
      border: none;
    }
  }
  aside {
    margin-bottom: 12px;
    border-bottom: 2px solid grey;
    & .top-article-headline {
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
      padding: 8px;
    }
    @media (min-width: 768px) {
      padding: 0 2%;
      flex: 2;
      margin-top: 1%;
      border: none;
    }
  }
  footer {
    display: flex;
    padding: 16px;
    justify-content: center;
    .Footer {
      text-align: center;
    }
  }
`;

export default function ArticleListPage() {
  const [page, setPage] = useState(1);
  const [latestArticle, isLoading1] = useArticle("LATEST", page);
  const [topArticle, isLoading2] = useArticle("TOP");
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "20%" }}
      transition={{ transition: "easeOut" }}
    >
      <StyledListPage>
        {isLoading1 || isLoading2 ? (
          <div className="progress">
            <CircularProgress />
          </div>
        ) : null}
        <MotionScreen>
          <div className="contents">
            <section className="latest-articles">
              {latestArticle.map((article) => (
                <LatestArticle
                  id={article.id}
                  key={article.id}
                  title={article.title}
                  username={article.username}
                  description={article.description.slice(500)}
                  image_url={
                    "https://teshank.pythonanywhere.com" + article.image_url ||
                    "//via.placeholder.com/350x150"
                  }
                />
              ))}
            </section>
            <aside>
              <div className="top-article-headline">TOP ARTICLES</div>
              <div className="top-articles">
                {topArticle.map((article) => (
                  <Article
                    id={article.id}
                    key={article.id}
                    title={article.title}
                    username={article.username}
                    description={article.description}
                    image_url={
                      "https://teshank.pythonanywhere.com" +
                        article.image_url || "//via.placeholder.com/350x150"
                    }
                  />
                ))}
              </div>
            </aside>
          </div>
          <footer>
            <Pagination
              className="Footer"
              count={2}
              page={page}
              onChange={handleChange}
            />
          </footer>
        </MotionScreen>
      </StyledListPage>
    </motion.div>
  );
}
