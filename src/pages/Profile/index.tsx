import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";

import { ProfileData } from "../../components/ProfileData";

export const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"Pietro-berg7"}
            name={"Pietro Bergamaschi"}
            avatarUrl={"https://avatars.githubusercontent.com/u/105403460?v=4"}
            followers={7}
            following={12}
            company={"Trybe - Turma 25"}
            location={"Santos Dumont - Minas Gerais"}
            email={"pietrovb25@gmail.com"}
            blog={"https://www.linkedin.com/in/pietroberg7/"}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
};
