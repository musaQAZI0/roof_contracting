import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
 return [
  {url:'https://ybroofing.com',lastModified:new Date()},
  {url:'https://ybroofing.com/about',lastModified:new Date()},
  {url:'https://ybroofing.com/services',lastModified:new Date()},
  {url:'https://ybroofing.com/contact',lastModified:new Date()},
  {url:'https://ybroofing.com/faq',lastModified:new Date()}
 ];
}
