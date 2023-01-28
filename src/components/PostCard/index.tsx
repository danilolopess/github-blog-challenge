import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PostCardContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface CardPostProps {
  postTitle: string
  summary: string
  createdAt: string
  issueNumber: number
}

export function PostCard({
  postTitle,
  summary,
  createdAt,
  issueNumber,
}: CardPostProps) {
  const createdAtFormmated = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostCardContainer>
      <NavLink to={`post/${issueNumber}`}>
        <header>
          <h2>{postTitle}</h2>
          <span>{createdAtFormmated}</span>
        </header>
        <ReactMarkdown>{`${summary.substring(0, 100)}...`}</ReactMarkdown>
      </NavLink>
    </PostCardContainer>
  )
}
