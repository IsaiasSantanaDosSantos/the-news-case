import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  height: ${({ theme }) => theme.layout.bottomNavigationHeight};

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.background};

  padding-inline: ${({ theme }) => theme.spacing[4]};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  list-style: none;
`;

export const Item = styled.li``;
