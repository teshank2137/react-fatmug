import React from "react";
import { useParams } from "react-router-dom";
import { MotionScene, MotionScreen, SharedElement } from "react-motion-layout";
import styled from "styled-components";
import useArticle from "../customeHooks/useArticles";

const StyledDetails = styled.div`
  margin: 2% 10%;
  .image {
    width: 100%;
    object-fit: contain;
  }
  .content-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 3% 0;

    border-bottom: 1px solid grey;
    & h2 {
      font-size: 18px;
    }
    & p {
      font-size: 12px;
    }
    @media (min-width: 768px) {
      & h2 {
        font-size: 28px;
      }
      & p {
        font-size: initial;
      }
    }
  }
  .content-body {
    margin: 3% 0;
    font-size: 15px;
    @media (min-width: 786px) {
      font-size: 20px;
    }
  }
  footer {
    margin-bottom: 5%;
  }
`;

export default function ArticleDetails() {
  const { articleId } = useParams();
  const _articles = useArticle("DETAILS");
  const article = _articles[articleId];
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://teshank.pythonanywhere.com/api/view/", {
      method: "POST",
      body: {
        id: articleId,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.article));
  }, []);
  return (
    <MotionScreen>
      <MotionScene name={`article-${articleId}`}>
        <StyledDetails>
          <div className="image-wrapper">
            <SharedElement.Image
              className="image"
              src={
                "https://teshank.pythonanywhere.com" + article.image_url ||
                "//via.placeholder.com/350x150"
              }
              animationKey="image"
            />
          </div>
          <div className="content-header">
            <h2>{article.title}</h2>
            <p>
              {Date(article.time)}
              <b>{article.description.length % 20} min read</b>
            </p>
          </div>

          <p className="content-body">{article.description}</p>
          <footer>
            by <b>{article.username}</b>
          </footer>
        </StyledDetails>
      </MotionScene>
    </MotionScreen>
  );
}
