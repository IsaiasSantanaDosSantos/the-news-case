import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  height: ${({ theme }) => theme.layout.headerHeight};

  padding-inline: ${({ theme }) => theme.spacing[4]};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.background};
`;
