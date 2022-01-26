import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

// Container가 받는 props를 Typescript에게 설명
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// Typescript에게 object의 형태를 설명
interface CircleProps {
  bgColor: string;
}

const Circle = ({ bgColor }: CircleProps) => {
  return <Container bgColor={bgColor} />;
};

export default Circle;
