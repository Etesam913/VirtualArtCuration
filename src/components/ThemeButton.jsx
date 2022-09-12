import { motion } from "framer-motion";
import styled from "styled-components";

export default function ThemeButton({ isLightThemeOn, setIsLightThemeOn }) {
  return (
    <StyledButton
      initial={{ backgroundColor: "none" }}
      animate={{
        backgroundColor: isLightThemeOn
          ? "rgba(247, 240, 223, 0)"
          : "rgba(53, 53, 53, 0)",
        scale: 1,
      }}
      whileHover={{
        scale: 1.15,
        backgroundColor: isLightThemeOn
          ? "rgba(247, 240, 223, 1)"
          : "rgba(70, 70, 70, 1)",
      }}
      whileTap={{ scale: 1 }}
      onClick={() => setIsLightThemeOn(!isLightThemeOn)}
      // transition={{
      //   backgroundColor: { duration: 0.3 },
      // }}
    >
      {isLightThemeOn ? (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.66,8.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,6.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,8.34ZM12,6a1,1,0,0,0,1-1V4a1,1,0,0,0-2,0V5A1,1,0,0,0,12,6ZM4,12H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2ZM5.64,8.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,7.34ZM21,12H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,19H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm7-4h-.88a5.39,5.39,0,0,0,.38-2,5.5,5.5,0,0,0-11,0,5.39,5.39,0,0,0,.38,2H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2Zm-3.15,0H9.15a3.44,3.44,0,0,1-.65-2,3.5,3.5,0,0,1,7,0A3.44,3.44,0,0,1,14.85,15ZM16,19H15a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z" />
        </svg>
      ) : (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11,19H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm9-4H18.84A8.18,8.18,0,0,0,20,12.05a1,1,0,0,0-.34-.93,1,1,0,0,0-1-.19,6,6,0,0,1-1.92.32,6.06,6.06,0,0,1-6.06-6,6.93,6.93,0,0,1,.1-1,1,1,0,0,0-.35-.92,1,1,0,0,0-1-.18A8.06,8.06,0,0,0,4,10.68,8,8,0,0,0,5.27,15H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Zm-3.72,0H7.83a6,6,0,0,1,.88-9.36,8.06,8.06,0,0,0,8.05,7.61,7,7,0,0,0,.79,0A6.08,6.08,0,0,1,16.28,15ZM16,19H15a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z" />
        </svg>
      )}
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  border: 0;
  background: none;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  color: inherit;

  cursor: pointer;
  border-radius: 5rem;
  padding: 0.25rem;
`;
