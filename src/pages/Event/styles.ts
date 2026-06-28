import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing[3]};
`;
