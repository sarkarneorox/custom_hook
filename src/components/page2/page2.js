import React from 'react'
import usePageSEO from '../../hoocks/usePageSEO/index.js'

const Page2 = () => {
  usePageSEO({
    title: "My Page 2 title",
    description: "page 2 description",
    keywords: ["keyword 2", "keyword 3"],
    ogTitle: "Page 2 og description",
    ogDescription: "this is page 2 og description",
    ogImage: "https://imgs.search.brave.com/kfaEePY4DQaswiLIUt8PifgeF4aayngnb1zf8Tztdqw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDEvQ3JlYXRl/LU9wZW4tR3JhcGgt/aW1hZ2UtZ2VuZXJh/dG9yLU5vZGUtanMu/cG5n",
    ogUrl: "https://unsplash.com/s/photos/demo",
  })
  return (
    
    <div>
      <h3>Hello page2</h3>
    </div>
  )
}

export default Page2
