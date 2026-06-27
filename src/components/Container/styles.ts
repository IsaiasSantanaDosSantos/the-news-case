import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};

  margin: 0 auto;

  padding-inline: ${({ theme }) => theme.spacing[4]};
`;
