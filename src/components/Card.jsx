import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
export default function Card({ index }) {
  const [isCardOpened, setIsCardOpened] = useState(false);

  return (
    <Fragment>
      <CardLink
        isCardOpened={isCardOpened}
        layout
        onClick={() => setIsCardOpened(true)}
      >
        <CardImage
          layout="scale"
          src="https://3.bp.blogspot.com/-zQ3ggObYPTE/WKgvinPtTuI/AAAAAAABous/-tbobfCQgK4fnB_FQAdCJoN6DlGhdryaACLcB/s1600/Oosten-Izaak-van-Landscape-with-Boats-1650s-oil-on-copper-Prado.jpg"
        />
        <CardHeader layout="position">Landscape with boats</CardHeader>
        <CardSubtitle layout="position">Izaak van Oosten</CardSubtitle>

        {isCardOpened && (
          <CardDescription initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardDescription>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div style={{ width: "100%", height: "15rem" }}></div>
          <CardBackground onClick={() => setIsCardOpened(false)} />
        </Fragment>
      )}
    </Fragment>
  );
}

const CardLink = styled(motion.div)`
  height: 100%;
  width: 100%;

  ${(props) =>
    props.isCardOpened &&
    css`
      width: min(40rem, 95%);
      height: fit-content;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      justify-content: center;

      flex-direction: column;
    `}
`;

const CardHeader = styled(motion.h2)`
  margin: 0.5rem 0;
  font-size: 3em;
  font-weight: 400;
`;

const CardSubtitle = styled(motion.p)`
  font-weight: 100;
  font-size: 2em;
  margin: 0 0 1rem;
  color: ${(props) => props.theme.subtitle};
  transition: color 200ms ease-in-out;
`;

const CardDescription = styled(motion.p)`
  font-weight: 100;
  font-size: 1.5em;
`;

const CardImage = styled(motion.img)`
  width: 100%;
  height: auto;
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

const AbsoluteCardContainer = styled.div`
  width: min(50rem, 90vw);
  padding: 1rem;
  position: relative;
`;
