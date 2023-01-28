import styled from 'styled-components'

export const BlogContainer = styled.div`
  padding: 0 1rem;

  width: calc(100% - 2rem);
  max-width: 56rem;

  margin: auto;
  margin-top: -5.5rem;
`

export const ProfileCard = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-bottom: 4.5rem;

  padding: 2rem 2.5rem;

  display: flex;
  flex-wrap: wrap;

  .image {
    width: 7.5rem;
    height: 7.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .infos {
    width: calc(100% - 7.5rem);
    padding-left: 2rem;

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
          margin-right: 0.5rem;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }

    main {
      margin-top: 0.5rem;
      p {
        line-height: 160%;
      }
    }

    footer {
      margin-top: 1.5rem;

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
  }
`

export const SeachForm = styled.form`
  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    margin-bottom: 0.5rem;

    strong {
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input[type='text'] {
    background-color: ${(props) => props.theme['base-input']};

    width: 100%;
    padding: 0.75rem 1rem;

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PostsList = styled.div`
  padding: 3rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
