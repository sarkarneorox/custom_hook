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
    ogImage: "https://imgs.search.brave.com/Gnxo3i-rFVILEikb15aZgQYGGLiEg_OcJlvloquXBQs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waWN3/aXNoLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMi9j/b252ZXJ0LWpwZy10/by1wbmcuanBn",
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
