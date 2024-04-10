import { StyledMessage, StyledLogo, StyledWrapper } from "./styled";

export const MainSection = () => {
  return (
    <>
      <StyledWrapper>
        <StyledMessage>NOT FOUND</StyledMessage>
        <StyledLogo src="/src/assets/404.png" />
      </StyledWrapper>
    </>
  );
};
