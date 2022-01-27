import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

interface RouteState {
  name: string;
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { name } = useLocation().state as RouteState;
  return (
    <Container>
      <Header>
        <Title>{name}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
