import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: calc(
    100vh - ${({ theme }) => theme.layout.headerHeight} -
      ${({ theme }) => theme.layout.bottomNavigationHeight}
  );

  background: ${({ theme }) => theme.colors.background};

  padding-bottom: 72px;
`;
