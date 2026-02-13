import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1440px;
  height: 100%;
  ${props => props.theme.typography.body['L0']}
`;