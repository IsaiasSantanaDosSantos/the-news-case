import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing[3]};
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
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  article.newsFirstItem {
    padding-inline: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: ${({ theme }) => theme.radius.md};
    background-color: ${({ theme }) => theme.colors.foreground};

    img {
      max-height: 180px;
      width: 100%;
      object-fit: cover;
    }

    div {
      width: 100%;
      padding-block: ${({ theme }) => theme.spacing[2]};
      padding-inline: ${({ theme }) => theme.spacing[4]};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  article.newsItem {
    padding-inline: ${({ theme }) => theme.spacing[4]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: ${({ theme }) => theme.radius.md};
    padding-block: ${({ theme }) => theme.spacing[3]};
    background-color: ${({ theme }) => theme.colors.foreground};

    img {
      width: 96px;
      height: 96px;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.radius.lg};
    }
  }
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
`;
