import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface GithubUserProps {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: null | string
  bio: string
  followers: number
}

export interface CardPostProps {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

interface BlogContextType {
  githubUser: GithubUserProps
  userName: string
  repo: string
  totalPostsCount: number
  blogPosts: CardPostProps[]
  fetchGithubUserIssues: (query?: string) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [githubUser, setGitHubUser] = useState<GithubUserProps>(
    {} as GithubUserProps,
  )
  const [totalPostsCount, setTotalPostsCount] = useState<number>(0)
  const [blogPosts, setBlogPosts] = useState<CardPostProps[]>([])

  const userName = 'danilolopess'
  const repo = 'github-blog-challenge'

  async function fetchGithubUser() {
    const response = await api.get(`/users/${userName}`)
    setGitHubUser(response.data)
  }

  async function fetchGithubUserIssues(query?: string) {
    const response = await api.get(
      `/search/issues?q=${query || ''}%20repo:${userName}/${repo}`,
    )
    setTotalPostsCount(response.data.total_count)
    setBlogPosts(response.data.items)
  }

  useEffect(() => {
    fetchGithubUser()
    fetchGithubUserIssues()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        githubUser,
        userName,
        repo,
        totalPostsCount,
        blogPosts,
        fetchGithubUserIssues,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
