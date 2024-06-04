import React from 'react'
import usePageSEO from '../../hoocks/usePageSEO/index.js'
import logo1 from "../../images/logo1.webp";
const Page1 = () => {
  usePageSEO({
    title: "My Page 1 title",
    description: "page 1 description",
    keywords: ["keyword 1", "keyword 2"],
    ogTitle: "Page 1 og description",
    ogDescription: "this is page 1 og description",
    ogImage: logo1,
    ogUrl: "https://unsplash.com/s/photos/demo",
  })
  return (
    <div>
      <h3>Hello page1</h3>
      <img src={logo1}/>
    </div>
  )
}

export default Page1
