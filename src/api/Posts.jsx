export default async function fetchPosts() {
  const response = await fetch('https://api.oluwasetemi.dev/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  const result = await response.json()
  return result.data
}

export async function fetchPostById({ queryKey }) {
  const [, id] = queryKey
  const response = await fetch(`https://api.oluwasetemi.dev/posts/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch post')
  } 
  const result = await response.json()
  return result
} 