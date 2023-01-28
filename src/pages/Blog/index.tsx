import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { BlogContainer, PostsList, ProfileCard, SeachForm } from './styles'
import { BlogContext } from '../../contexts/BlogContext'

const seachFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof seachFormSchema>

export function Blog() {
  const { githubUser, totalPostsCount, blogPosts, fetchGithubUserIssues } =
    useContext(BlogContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(seachFormSchema),
  })

  function handleSeachIssue(data: SearchFormInputs) {
    fetchGithubUserIssues(data.query)
  }

  return (
    <>
      <Header />
      <BlogContainer>
        <ProfileCard>
          <div className="image">
            <img src={githubUser.avatar_url} alt="" />
          </div>
          <div className="infos">
            <header>
              <strong>{githubUser.name}</strong>
              <a href={githubUser.html_url} target="_blank" rel="noreferrer">
                <span>Github</span>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </header>
            <main>
              <p>{githubUser.bio}</p>
            </main>
            <footer>
              <div className="item">
                <FontAwesomeIcon icon={faGithub} />
                <span>{githubUser.login}</span>
              </div>
              {githubUser.company && (
                <div className="item">
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{githubUser.company}</span>
                </div>
              )}
              <div className="item">
                <FontAwesomeIcon icon={faUserGroup} />
                <span>
                  {githubUser.followers} seguidor
                  {githubUser.followers > 1 && 'es'}
                </span>
              </div>
            </footer>
          </div>
        </ProfileCard>
        <SeachForm onSubmit={handleSubmit(handleSeachIssue)}>
          <header>
            <strong>Publicações</strong>
            <span>
              {totalPostsCount} publicaç{totalPostsCount > 1 ? 'ões' : 'ão'}
            </span>
          </header>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </SeachForm>
        <PostsList>
          {blogPosts.map((post) => (
            <PostCard
              key={post.id}
              postTitle={post.title}
              summary={post.body}
              createdAt={post.created_at}
              issueNumber={post.number}
            />
          ))}
        </PostsList>
      </BlogContainer>
    </>
  )
}
