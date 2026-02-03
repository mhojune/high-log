import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.labelColor['00']};
  ${props => props.theme.typography.body['L0']}
`;