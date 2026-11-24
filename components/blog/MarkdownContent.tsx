import Link from "next/link";

function inline(value: string) {
  const tokens=value.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g);
  return tokens.map((token,index)=>{
    const bold=token.match(/^\*\*([^*]+)\*\*$/); if(bold) return <strong key={index}>{bold[1]}</strong>;
    const link=token.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/); if(link) return <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer nofollow" className="underline">{link[1]}</a>;
    return token;
  });
}

export default function MarkdownContent({markdown}:{markdown:string}) {
  const lines=markdown.replace(/\r/g,"").split("\n"); const nodes:React.ReactNode[]=[];
  for(let i=0;i<lines.length;i++){
    const line=lines[i].trim(); if(!line) continue;
    const image=line.match(/^!\[([^\]]*)\]\((https:\/\/[^\s)]+|\/images\/[^\s)]+)(?:\s+"([^"]*)")?\)$/); if(image){nodes.push(<figure key={i} className="my-8"><img src={image[2]} alt={image[1]} className="w-full rounded-3xl" />{image[3]?<figcaption className="mt-3 text-sm text-[#76685d]">{image[3]}</figcaption>:null}</figure>);continue;}
    const yt=line.match(/^https:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})$/); if(yt){nodes.push(<div key={i} className="my-8 aspect-video overflow-hidden rounded-3xl"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${yt[1]}`} title="YouTube video" allowFullScreen /></div>);continue;}
    if(line.startsWith("## ")){nodes.push(<h2 key={i} className="mt-10 text-3xl font-black">{inline(line.slice(3))}</h2>);continue;}
    if(line.startsWith("### ")){nodes.push(<h3 key={i} className="mt-8 text-2xl font-black">{inline(line.slice(4))}</h3>);continue;}
    if(/^[-*+]\s+/.test(line)){const items=[]; while(i<lines.length&&/^[-*+]\s+/.test(lines[i].trim())){items.push(<li key={i}>{inline(lines[i].trim().replace(/^[-*+]\s+/,""))}</li>);i++;} i--;nodes.push(<ul key={`u${i}`} className="my-5 list-disc space-y-2 pl-6">{items}</ul>);continue;}
    const numbered=line.match(/^\d+\.\s+(.+)/); if(numbered){const items=[];while(i<lines.length){const m=lines[i].trim().match(/^\d+\.\s+(.+)/);if(!m)break;items.push(<li key={i}>{inline(m[1])}</li>);i++;}i--;nodes.push(<ol key={`o${i}`} className="my-5 list-decimal space-y-2 pl-6">{items}</ol>);continue;}
    nodes.push(<p key={i} className="my-5 leading-8">{inline(line)}</p>);
  }
  return <div className="text-lg text-[#3d3027]">{nodes}<p className="sr-only"><Link href="/ko/insights">인사이트로 돌아가기</Link></p></div>;
}
