import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 64px;
  z-index: 20;

  background: ${({ theme }) => theme.colors.background};
`;

export const Switcher = styled.div<{ $visible: boolean }>`
  position: relative;

  height: ${({ $visible }) => ($visible ? '58px' : '2px')};

  overflow: hidden;

  transition: height 300ms ease;

  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.header`
  position: sticky;
  padding: 14px 0 10px;
`;

export const DateText = styled.span`
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CategoryBar = styled.div<{ $visible: boolean }>`
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  gap: ${({ theme }) => theme.spacing[3]};

  padding: ${({ theme }) => theme.spacing[3]};

  overflow-x: auto;

  overflow-y: hidden;

  flex-wrap: nowrap;

  background: ${({ theme }) => theme.colors.background};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: translateY(${({ $visible }) => ($visible ? '0' : '-16px')});

  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};

  transition:
    opacity 0.28s ease,
    transform 0.28s ease;

  scrollbar-width: none;

  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Divider = styled.div<{ $visible: boolean }>`
  position: absolute;

  left: 0;

  right: 0;

  bottom: 0;

  height: 2px;

  background: ${({ theme }) => theme.colors.border};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transition: opacity 0.28s ease;
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  padding-block: ${({ theme }) => theme.spacing[1]};
  padding-inline: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.text.inverse};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.text.primary : theme.colors.foreground};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.background : theme.colors.text.primary};

  transition: 0.2s;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};

  .content {
    border-radius: ${({ theme }) => theme.radius.lg};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    row-gap: 2px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: ${({ theme }) => theme.typography.size.lg};
    text-align: start;
    text-transform: uppercase;
  }

  article {
    padding-inline: ${({ theme }) => theme.spacing[4]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: ${({ theme }) => theme.radius.md};
    padding-block: ${({ theme }) => theme.spacing[3]};
    background-color: ${({ theme }) => theme.colors.foreground};

    span {
      font-size: ${({ theme }) => theme.typography.size.xs};
      color: ${({ theme }) => theme.colors.text.secondary};
    }
    p {
      font-size: ${({ theme }) => theme.typography.size.lg};
      line-height: ${({ theme }) => theme.typography.lineHeight.tight};
      color: ${({ theme }) => theme.colors.text.inverse};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
    }
    img {
      width: 96px;
      height: 96px;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.radius.lg};
    }
  }
`;
