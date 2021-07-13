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
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

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
            <motion.section
              className="latest-articles"
              variants={variants}
              initial="hidden"
              animate="show"
            >
              {latestArticle.map((article) => (
                <motion.div variants={item}>
                  <LatestArticle
                    id={article.id}
                    key={article.id}
                    title={article.title}
                    username={article.username}
                    description={article.description.slice(500)}
                    image_url={
                      "https://teshank.pythonanywhere.com" +
                        article.image_url || "//via.placeholder.com/350x150"
                    }
                  />
                </motion.div>
              ))}
            </motion.section>
            <aside>
              <div className="top-article-headline">TOP ARTICLES</div>
              <motion.div
                className="top-articles"
                variants={variants}
                initial="hidden"
                animate="show"
              >
                {topArticle.map((article) => (
                  <motion.div variants={item}>
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
                  </motion.div>
                ))}
              </motion.div>
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
