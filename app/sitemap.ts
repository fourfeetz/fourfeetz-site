import type { MetadataRoute } from "next";
import { shorts } from "@/data/shorts";
import { films } from "@/lib/films";
import { musicTracks } from "@/lib/music";
import { characterDetails } from "@/lib/characterDetails";
import { getPublishedInsightArticles, hasKoreanInsightGroupContent } from "@/lib/insights";
import { resourceDetails } from "@/lib/resourceDetails";
import { practicalResources } from "@/lib/practicalResources";
import { petServiceSlugs } from "@/lib/petBusinessServices";
import { isKoreanInsightRedirect } from "@/lib/koreanInsightAvailability";
const baseUrl="https://fourfeetz.com";
const routes=["/en","/about","/characters",...characterDetails.map(c=>`/characters/${c.slug}`),"/contact","/videos","/insights","/insights/guides","/insights/news","/music","/privacy","/resources","/social","/services","/terms","/tools",...resourceDetails.map(r=>`/resources/${r.slug}`),...practicalResources.map(r=>`/resources/${r.slug}`)];
export default function sitemap():MetadataRoute.Sitemap{
 const publishedInsights=getPublishedInsightArticles();
 const pairedPaths=new Map<string,string>([["/en","/ko"],["/contact","/ko/contact"],["/privacy","/ko/privacy"],["/terms","/ko/terms"],["/services","/ko/services"],["/about","/ko/about"],["/videos","/ko/videos"],["/characters","/ko/characters"],["/music","/ko/music"],["/insights","/ko/insights"],["/insights/guides","/ko/insights/guides"],...(hasKoreanInsightGroupContent("news")?[["/insights/news","/ko/insights/news"]] as const:[]),["/resources","/ko/resources"],["/tools","/ko/tools"],...films.map(i=>[`/works/${i.slug}`,`/ko/films/${i.slug}`] as const),...shorts.map(i=>[`/shorts/${i.slug}`,`/ko/shorts/${i.slug}`] as const),...characterDetails.map(i=>[`/characters/${i.slug}`,`/ko/characters/${i.slug}`] as const),...musicTracks.map(i=>[`/music/${i.slug}`,`/ko/music/${i.slug}`] as const),...publishedInsights.filter(i=>!isKoreanInsightRedirect(i.slug)).map(i=>[i.href,`/ko/insights/${i.slug}`] as const),...resourceDetails.map(i=>[`/resources/${i.slug}`,`/ko/resources/${i.slug}`] as const),...practicalResources.map(i=>[`/resources/${i.slug}`,`/ko/resources/${i.slug}`] as const)]);
 const al=(en:string,ko:string)=>({en:`${baseUrl}${en}`,ko:`${baseUrl}${ko}`,"x-default":`${baseUrl}${ko}`});
 const staticPages=routes.map(route=>({url:`${baseUrl}${route}`,changeFrequency:route==="/en"?("weekly" as const):("monthly" as const),priority:route==="/en"?0.9:route.split("/").filter(Boolean).length===1?0.8:0.7,...(pairedPaths.has(route)?{alternates:{languages:al(route,pairedPaths.get(route)!)}}:{})}));
 const insightPages=publishedInsights.map(a=>({url:`${baseUrl}${a.href}`,lastModified:a.updatedAt??a.publishedAt,changeFrequency:"monthly" as const,priority:0.8,...(!isKoreanInsightRedirect(a.slug)?{alternates:{languages:al(a.href,`/ko/insights/${a.slug}`)}}:{})}));
 const musicPages=musicTracks.map(t=>({url:`${baseUrl}/music/${t.slug}`,changeFrequency:"monthly" as const,priority:0.7,alternates:{languages:al(`/music/${t.slug}`,`/ko/music/${t.slug}`)}}));
 const filmPages=films.map(f=>({url:`${baseUrl}/works/${f.slug}`,changeFrequency:"monthly" as const,priority:0.7,alternates:{languages:al(`/works/${f.slug}`,`/ko/films/${f.slug}`)}}));
 const shortPages=shorts.map(s=>({url:`${baseUrl}/shorts/${s.slug}`,changeFrequency:"monthly" as const,priority:0.7,alternates:{languages:al(`/shorts/${s.slug}`,`/ko/shorts/${s.slug}`)}}));
 const koreanPages=[...new Set(pairedPaths.values())].map(k=>{const e=[...pairedPaths.entries()].find(([,v])=>v===k)?.[0]??"";const i=k.startsWith("/ko/insights/")?publishedInsights.find(x=>`/ko/insights/${x.slug}`===k):undefined;return{url:`${baseUrl}${k}`,...(i?.updatedAt||i?.publishedAt?{lastModified:i.updatedAt??i.publishedAt}:{}),changeFrequency:k==="/ko"?("weekly" as const):("monthly" as const),priority:k==="/ko"?1:k.startsWith("/ko/insights/")?0.8:k.split("/").filter(Boolean).length===2?0.8:0.7,alternates:{languages:al(e,k)}}});
 const koreanOnlyServicePages=[...petServiceSlugs.map(slug=>({url:`${baseUrl}/ko/services/${slug}`,lastModified:"2026-08-17",changeFrequency:"monthly" as const,priority:slug==="pet-video"?0.8:0.7})),{url:`${baseUrl}/ko/services/pet-memorial-video`,lastModified:"2026-09-14",changeFrequency:"monthly" as const,priority:0.8}];
 return[...staticPages,...insightPages,...filmPages,...shortPages,...musicPages,...koreanPages,...koreanOnlyServicePages];
}
