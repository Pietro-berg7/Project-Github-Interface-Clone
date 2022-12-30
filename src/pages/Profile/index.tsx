import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";

import { ProfileData } from "../../components/ProfileData";
import { RepoCard } from "../../components/RepoCard";
import { RandomCalendar } from "../../components/RandomCalendar";

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

        <RightSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"Pietro-berg7"}
                  reponame={"Project-Github-Interface-Clone"}
                  description={
                    "Interface do GitHub com React.js e TypeScript, incluindo navegação por rotas, responsividade e dark theme."
                  }
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={1}
                  forks={0}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};
