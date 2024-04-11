import { MetadataRoute } from 'next'
import { AppName, baseURL } from "./constants";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    //   disallow: '/private/',
    },
    sitemap: `${baseURL}/sitemap.xml`,
  }
}