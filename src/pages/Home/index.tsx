import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.labelColor['00']};
`;

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
};
