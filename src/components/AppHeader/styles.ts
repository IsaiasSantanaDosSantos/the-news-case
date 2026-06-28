import styled from 'styled-components';

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.layout.headerHeight};

  padding-inline: ${({ theme }) => theme.spacing[4]};

  background: ${({ theme }) => theme.colors.background};
  z-index: 99;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.text.primary};
    width: ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[4]};
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  padding-left: ${({ theme }) => theme.spacing[1]};
  width: auto;
  height: 100%;

  svg {
    width: ${({ theme }) => theme.typography.size.lg};
    fill: ${({ theme }) => theme.colors.primary};
    height: auto;
    aspect-ratio: 323/262;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: 'Helvetica';
  text-transform: lowercase;
  text-transform: lowercase;
  letter-spacing: -0.4px;
`;

export const EditionButton = styled.button`
  border: none;

  border-radius: ${({ theme }) => theme.radius.full};

  background: #fbc02d;

  color: ${({ theme }) => theme.colors.secondary};

  padding: 6px 14px;

  cursor: pointer;

  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2px;

  svg {
    fill: ${({ theme }) => theme.colors.secondary};
    width: 14px;
    height: 11px;
  }
`;
