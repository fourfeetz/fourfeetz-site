import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ai-studio", destination: "/about", statusCode: 301 },
      { source: "/animals", destination: "/characters", statusCode: 301 },
      { source: "/animals/haru", destination: "/characters/haru", statusCode: 301 },
      { source: "/blog", destination: "/insights", statusCode: 301 },
      { source: "/camping", destination: "/videos?type=long-form", statusCode: 301 },
      { source: "/en", destination: "/", statusCode: 301 },
      { source: "/films", destination: "/videos?type=long-form", statusCode: 301 },
      { source: "/notes", destination: "/insights", statusCode: 301 },
      { source: "/shorts", destination: "/videos?type=shorts", statusCode: 301 },
      { source: "/studio", destination: "/about", statusCode: 301 },
      { source: "/works", destination: "/videos?type=long-form", statusCode: 301 },
      { source: "/youtube", destination: "/social", statusCode: 301 },
      { source: "/ko/films", destination: "/ko/videos?type=long-form", statusCode: 301 },
      { source: "/ko/shorts", destination: "/ko/videos?type=shorts", statusCode: 301 },
      { source: "/insights/ai-video-workflow", destination: "/insights/repeatable-ai-video-workflow", statusCode: 301 },
      { source: "/insights/vertical-video-reframing", destination: "/insights/reframing-16-9-guide", statusCode: 301 },
      { source: "/resources/ai-video-workflow", destination: "/resources/ai-short-film-workflow", statusCode: 301 },
      { source: "/resources/character-consistency-guide", destination: "/resources/character-consistency-prompt-pack", statusCode: 301 },
      { source: "/resources/prompt-library", destination: "/resources/image-to-video-prompt-framework", statusCode: 301 },
      { source: "/resources/tool-comparisons", destination: "/insights/kling-vs-veo", statusCode: 301 },
    ];
  },
};

export default nextConfig;
