import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    0deg,
    rgba(0, 151, 156) 0%,
    rgba(73, 182, 117) 75%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
