import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 0.625rem;
  border: 2px solid transparent;

  transition: border-color 0.2s;

  a {
    text-decoration: none;
    color: inherit;
    padding: 2rem;
    display: block;
  }

  header {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    h2 {
      width: calc(80% - 0.5rem);
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      line-height: 160%;
    }

    span {
      width: 20%;

      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      line-height: 160%;
    }
  }

  P {
    width: 100%;
    max-width: 300px;
    height: 6.25rem;

    line-height: 160%;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`
