import styled from "styled-components";
import Card from "./Card";
import { motion, LazyMotion, domAnimation } from "framer-motion";

export default function MainSection() {
  return (
    <MainContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
      }}
    >
      <Card index={0} />
      <Card index={1} />
      <Card index={2} />
    </MainContainer>
  );
}

const MainContainer = styled(motion.main)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin: 2rem 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
