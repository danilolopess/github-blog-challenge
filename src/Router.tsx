import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Blog />} />
        <Route path="/post/:issueNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}
