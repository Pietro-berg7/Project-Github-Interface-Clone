import React from "react";

import { Container, GithubLogo, SearchForm } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Enter Username or Repo..." type="text" />
      </SearchForm>
    </Container>
  );
};
