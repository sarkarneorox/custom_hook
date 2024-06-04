import React from 'react'
import usePageSEO from '../../hoocks/usePageSEO/index.js'

const Page2 = () => {
  usePageSEO({
    title: "My Page 2 title",
    description: "page 2 description",
    keywords: ["keyword 2", "keyword 3"],
    ogTitle: "Page 2 og description",
    ogDescription: "this is page 2 og description",
    ogImage: "https://imgs.search.brave.com/EGY_qMVCnXIb2BbSo5WLzh1cxrK2-ROMAgtY5bJVH7I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2JpbGUtcGF5/bWVudC1waGFybWFj/eS1jb25jZXB0LWhp/Z2gtcmVzb2x1dGlv/bi1pbWFnZS1kZW1v/bnN0cmF0aW5nLXNw/ZWVkLXNlY3VyaXR5/LWRpZ2l0YV85ODA3/MTYtMTk5NDQ5Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
    ogUrl: "https://unsplash.com/s/photos/demo",
  })
  return (
    
    <div>
      <h3>Hello page2</h3>
    </div>
  )
}

export default Page2
