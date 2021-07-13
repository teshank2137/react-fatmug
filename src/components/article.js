import styled from "styled-components";
import React, { useCallback } from "react";
import { MotionScene, SharedElement, useMotion } from "react-motion-layout";
import { useHistory, useRouteMatch } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const StyledArticle = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 3px 1px 3px 3px rgba(232, 232, 232, 1);
  box-shadow: 3px 1px 3px 3px rgba(232, 232, 232, 1);
  margin: 12px 6px;
  .article {
    display: flex;
    padding: 12px;
    justify-content: space-between;
  }
  .description {
    display: none;
  }
  .img {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
    order: 2;
    padding-left: 12px;
    @media (min-width: 768px) {
      width: 12vw;
      height: 12vw;
    }
  }
  section {
    order: 1;
  }
  h5,
  h2,
  p {
    padding-top: 8px;
  }
  span {
    margin-left: 8px;
  }
  a {
    text-decoration: none;
    color: grey;
    padding: 8px 0;
  }
  b {
    color: grey;
    cursor: pointer;
  }
`;

export const Article = (props) => {
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const withTransition = useMotion(`article-${props.id}`);
  const callback = useCallback(
    () => history.push(`/view/${props.id}`),
    [history, props.id]
  );
  return (
    <StyledArticle>
      <MotionScene name={`article-${props.id}`}>
        <div className="article">
          <SharedElement.Image
            className="img"
            src={props.image_url}
            alt="Thumbnail"
            animationKey="image"
          />
          <section>
            <h4>{props.username}</h4>
            <h2 className="title">{props.title}</h2>
            <p className="description">{props.description}</p>
            <p>
              <b onClick={withTransition(callback)}>Read more</b>
              <span>{props.description.length % 20} min read</span>
            </p>
          </section>
        </div>
      </MotionScene>
    </StyledArticle>
  );
};

const StyledLatestArticle = styled(StyledArticle)`
  @media (min-width: 768px) {
    margin: 2%;
    padding: 3%;
    .description {
      display: inline-block;
    }

    .img {
      order: -1;
      width: 100%;
      height: 100%;
      padding-left: 0;
    }

    .article {
      display: initial;
      padding: 0;
    }
    .footer-text {
      text-align: end;
    }
  }
`;

export const LatestArticle = (props) => {
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const withTransition = useMotion(`article-${props.id}`);
  const callback = useCallback(
    () => history.push(`/view/${props.id}`),
    [history, props.id]
  );
  return (
    <MotionScene name={`article-${props.id}`}>
      <StyledLatestArticle>
        <div className="article">
          <SharedElement.Image
            animationKey="image"
            className="img"
            src={props.image_url}
            alt="Thumbnail"
          />
          <section>
            <h4>
              <i className="fas fa-info-circle"></i>
              {props.username}
            </h4>
            <h2 className="title">{props.title}</h2>
            <p className="description">{props.description}</p>
            <p className="footer-text">
              <b onClick={withTransition(callback)}>Read more</b>
              <span>{props.description.length % 20} min read</span>
            </p>
          </section>
        </div>
      </StyledLatestArticle>
    </MotionScene>
  );
};

const StyledMyArticle = styled(StyledArticle)`
  display: flex;
  padding: 1%;
  margin: 2%;
  .img {
    order: -1;
    margin-right: 2%;
  }
  .icons {
    margin-left: auto;
    align-self: center;
    display: flex;
    li {
      list-style: none;
      padding: 12px;
    }
  }
  .description {
    @media (min-width: 768px) {
      display: initial;
    }
  }
`;

export const MyArticleTile = (props) => {
  return (
    <StyledMyArticle>
      <img
        className="img"
        src={props.image_url}
        alt="Thumbnail"
        animationKey="image"
      />
      <section>
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description.slice(0, 500)}...</p>
        <p>
          <span>Read more</span>
          <span>{props.description.length % 20} min read</span>
        </p>
      </section>
      <section className="icons">
        <li>
          <EditIcon fontSize="large" />
        </li>
        <li>
          <DeleteIcon fontSize="large" />
        </li>
      </section>
    </StyledMyArticle>
  );
};
