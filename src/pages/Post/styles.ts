import styled from 'styled-components'

export const BlogContainer = styled.div`
  padding: 0 1rem;

  width: calc(100% - 2rem);
  max-width: 56rem;

  margin: auto;
  margin-top: -5.5rem;
`

export const PostTitle = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem 2.5rem;

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    strong {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-title']};
    }

    a {
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      text-decoration: none;
      text-transform: uppercase;

      span {
        font-weight: 700;
        margin: 0 0.5rem;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  main {
    padding: 1.25rem 0;
    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    .item {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }

      span {
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`

export const ContentContainer = styled.article`
  padding: 2.5rem;

  h2,
  h3 {
    margin-top: 1.5rem;
  }

  p {
    font-size: 16px;
    line-height: 160%;
  }

  pre {
    margin: 1.5rem 0;
    padding: 1rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 6px;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  img {
    max-width: 100%;
    margin: 1rem 0;
  }
`
