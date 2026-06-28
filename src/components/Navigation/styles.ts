import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;

  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};

  height: ${({ theme }) => theme.layout.bottomNavigationHeight};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.background};

  border-top: 2px solid rgb(251 192 45 / 17%);
`;

export const Item = styled.button`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.spacing[1]};

  background: transparent;
  border: none;

  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  color: ${({ theme }) => theme.colors.text.secondary};
`;
