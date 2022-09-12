import FadeUpContainer from "./FadeUpContainer";
import { m, LazyMotion, domAnimation } from "framer-motion";
import styled from "styled-components";

export default function HeaderSection() {
  return (
    <MainHeader>
      <AppHeader>
        <FadeUpContainer> My </FadeUpContainer>{" "}
        <FadeUpContainer delay={0.2}> Art </FadeUpContainer>{" "}
        <FadeUpContainer delay={0.4}> Gallery </FadeUpContainer>
      </AppHeader>
      <LazyMotion features={domAnimation}>
        <AppSubtitle
          role="doc-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          Etesam Ansari
        </AppSubtitle>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          Click on the paintings to see my analysis
        </m.p>
      </LazyMotion>
    </MainHeader>
  );
}

const MainHeader = styled.header``;

const AppHeader = styled.h1`
  margin: 0 0 0.35rem;
  font-weight: 400;
  font-size: 3.5em;
`;

const AppSubtitle = styled(m.p)`
  font-weight: 100;
  font-size: 2em;
  margin: 0 0 1rem;
  color: ${(props) => props.theme.subtitle};
  transition: color 200ms ease-in-out;
`;
