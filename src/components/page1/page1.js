import React from 'react'
import usePageSEO from '../../hoocks/usePageSEO/index.js'
const Page1 = () => {
  usePageSEO({
    title: "My Page 1 title",
    description: "page 1 description",
    keywords: ["keyword 1", "keyword 2"],
    ogTitle: "Page 1 og description",
    ogDescription: "this is page 1 og description",
    ogImage: "https://imgs.search.brave.com/TsWvQkys0OAkTxcgCOijNpACwYU40lNDKVRSe2a-M4s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGFj/aWQuYXBwL3N0b3Jh/Z2UvbWFya2V0aW5n/X2NhY2hlL3dlYnAv/YWRlODhhZWU1NDU1/NGFiOGQzZjdlMjg3/YmU4MDQ1Y2QvYXBp/LWltYWdlLndlYnA",
    ogUrl: "https://unsplash.com/s/photos/demo",
  })
  return (
    <div>
      <h3>Hello page1</h3>
    </div>
  )
}

export default Page1
