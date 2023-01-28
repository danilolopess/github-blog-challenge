import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faCalendarDay,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Header } from '../../components/Header'
import { BlogContainer, ContentContainer, PostTitle } from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../../contexts/BlogContext'
import { api } from '../../lib/axios'

interface AuthorUser {
  login: string
}

interface IssuePostProps {
  html_url: string
  title: string
  user: AuthorUser
  created_at: string
  body: string
  comments: number
}

export function Post() {
  const { issueNumber } = useParams()
  const { userName, repo } = useContext(BlogContext)

  const [issuePostInfo, setIssuePostInfo] = useState<IssuePostProps>(
    {} as IssuePostProps,
  )
  const [createdAtFormmated, setCreatedAtFormmated] = useState<string>('')

  async function fetchGithubIssuePost() {
    const response = await api.get(
      `repos/${userName}/${repo}/issues/${issueNumber}`,
    )

    const createdAt = new Date(response.data.created_at)
    const createdAtFormmated = formatDistanceToNow(createdAt, {
      addSuffix: true,
      locale: ptBR,
    })

    setCreatedAtFormmated(createdAtFormmated)
    setIssuePostInfo(response.data)
  }

  useEffect(() => {
    fetchGithubIssuePost()
  }, [])

  return (
    <>
      <Header />
      <BlogContainer>
        <PostTitle>
          <header>
            <NavLink to="/">
              <FontAwesomeIcon icon={faAngleLeft} />
              <span>Voltar</span>
            </NavLink>
            <a href={issuePostInfo.html_url} target="_blank" rel="noreferrer">
              <span>Ver no Github</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </header>
          <main>
            <h1>{issuePostInfo.title}</h1>
          </main>
          <footer>
            <div className="item">
              <FontAwesomeIcon icon={faGithub} />
              <span>{userName}</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{createdAtFormmated}</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faComment} />
              <span>
                {issuePostInfo.comments} Comentário
                {issuePostInfo.comments > 1 && 's'}
              </span>
            </div>
          </footer>
        </PostTitle>
        <ContentContainer>
          <ReactMarkdown>{issuePostInfo.body}</ReactMarkdown>
        </ContentContainer>
      </BlogContainer>
    </>
  )
}
