import styled from "styled-components";

export const GitHubBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 4rem;
  border: none;
  border-radius: 5px;
  background-color: var(--main-color);
  cursor: pointer;
  padding: 0.5rem;
  color: var(--white-color);
  font-size: 1rem;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const SubmitButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 4rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? "var(--sub-one-color)" : "var(--main-color)"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0.5rem;
  color: ${(props) =>
    props.disabled ? "var(--sub-two-color)" : "var(--white-color)"};
  font-size: 1rem;
`;
