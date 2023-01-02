import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

export const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/Pietro-berg7"}>
          Pietro-berg7
        </Link>
        <span>/</span>
        <Link
          className={"reponame"}
          to={"/Pietro-berg7/Project-Github-Interface-Clone"}
        >
          Project-Github-Interface-Clone
        </Link>
      </Breadcrumb>

      <p>Contains all of my Youtube lessons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        href={"https://github.com/Pietro-berg7/Project-Github-Interface-Clone"}
      >
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};
