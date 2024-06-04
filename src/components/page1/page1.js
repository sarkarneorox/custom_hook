import React from 'react'
import usePageSEO from '../../hoocks/usePageSEO/index.js'
const Page1 = () => {
  usePageSEO({
    title: "My Page 1 title",
    description: "page 1 description",
    keywords: ["keyword 1", "keyword 2"],
    ogTitle: "Page 1 og description",
    ogDescription: "this is page 1 og description",
    ogImage: "https://imgs.search.brave.com/zgPF8V4DhX7UWUXmCGr0GFBd8h5nBubadd3xjnBNnXk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/ZW1vLWRpZ2l0YWwt/ZGV2aWNlXzIzLTIx/NDkyNDM5NTcuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
    ogUrl: "https://unsplash.com/s/photos/demo",
  })
  return (
    <div>
      <h3>Hello page1</h3>
    </div>
  )
}

export default Page1
