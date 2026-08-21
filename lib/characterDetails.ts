export type CharacterDetail = {
  slug: string;
  name: string;
  species: string;
  tagline: string;
  story: string;
  personality: string[];
  role: string;
  appearance: string;
  colors: string[];
  favorites: string[];
  abilities: string[];
  productionNotes: string;
  promptNotes: string;
  futureStories: string;
  gallery: CharacterStudy[];
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  publishStatus?: "published" | "draft";
  hasOfficialImages?: boolean;
  imageSet?: "full" | "portrait";
  imageAlt?: string;
};

export type CharacterStudy = {
  label: "Hero portrait" | "Expression reference" | "Color and silhouette study";
  image: string;
  fit: "contain" | "cover";
  imageAlt?: string;
  koreanImageAlt?: string;
};

const characterBase: Omit<CharacterDetail, "gallery">[] = [
  { slug: "haru", name: "HARU", species: "Jindo Puppy", tagline: "Gentle, curious, and brave.", story: "HARU begins as a rescue puppy discovering that unfamiliar roads can lead to belonging. His stories observe the world at a patient pace, turning small encounters into lasting memories.", personality: ["Gentle", "Curious", "Brave", "Loyal", "Friendly"], role: "The first original FourFeetz character and the emotional lead of HARU - First Journey.", appearance: "Soft cream-white fur, warm brown eyes, upright ears, and a small brown scarf create a silhouette that remains readable in wide shots and close-ups.", colors: ["#F4E9D8", "#D8B892", "#6F4E37", "#2A211C"], favorites: ["Country roads", "Golden-hour walks", "Quiet car rides", "Meeting kind people"], abilities: ["Noticing hidden details", "Finding calm in new places", "Encouraging nervous friends", "Leading gentle adventures"], productionNotes: "HARU scenes prioritize natural fur motion, grounded body mechanics, warm light, and eye-level camera work.", promptNotes: "Repeat the cream-white Jindo puppy, brown scarf, warm brown eyes, compact puppy proportions, and consistent 35mm cinematic treatment in every prompt.", futureStories: "Future films follow HARU into forests, coastal villages, and new friendships across the FourFeetz universe." },
  { slug: "pori", name: "PORI", species: "Poodle", tagline: "Happy, playful, and full of energy.", story: "PORI turns every ordinary afternoon into a game. Fast, expressive, and endlessly social, PORI brings comic timing and bright momentum to the FourFeetz ensemble.", personality: ["Joyful", "Playful", "Expressive", "Social", "Energetic"], role: "The lively catalyst who pulls quieter characters into shared adventures.", appearance: "Warm apricot curls, bright eyes, compact proportions, and a cheerful green neckerchief support an energetic silhouette.", colors: ["#E8C49E", "#F7E7CF", "#71805A", "#513526"], favorites: ["Chasing leaves", "Music", "Picnic blankets", "Making new friends"], abilities: ["Instant mood lifting", "Rhythmic movement", "Finding games anywhere", "Quick improvisation"], productionNotes: "PORI animation uses buoyant steps, clear ear movement, and short reaction beats that remain readable in vertical edits.", promptNotes: "Lock apricot curls, green neckerchief, bright round eyes, and compact poodle proportions before changing action or environment.", futureStories: "PORI's first story explores music, friendship, and a town festival built from unexpected sounds." },
  { slug: "luna", name: "LUNA", species: "Norwegian Forest Cat", tagline: "Calm, elegant, and a little mysterious.", story: "LUNA watches before she acts. She is drawn to moonlit windows, old maps, and quiet places where a patient observer can discover what everyone else missed.", personality: ["Calm", "Elegant", "Observant", "Independent", "Mysterious"], role: "The thoughtful guide who brings atmosphere, intuition, and quiet intelligence to the universe.", appearance: "Long silver-gray fur, a pale chest, green eyes, and a slim midnight-blue ribbon create a refined profile.", colors: ["#C8C4BE", "#77736F", "#405049", "#252A31"], favorites: ["Window seats", "Old books", "Rain", "Night photography"], abilities: ["Reading subtle clues", "Moving silently", "Seeing in low light", "Remembering routes"], productionNotes: "LUNA scenes use controlled motion, soft rim light, and longer holds to preserve her composed personality.", promptNotes: "Maintain long silver-gray fur, green eyes, pale chest, blue ribbon, and elegant adult-cat proportions across models.", futureStories: "LUNA will lead a nocturnal mystery through a mountain library and its forgotten observatory." },
  { slug: "hugo", name: "HUGO", species: "Highland Cattle", tagline: "Gentle, warm-hearted, and always relaxed.", story: "HUGO lives at the edge of a wide meadow where visitors naturally slow down. He offers practical wisdom, patient humor, and a reassuring place to rest.", personality: ["Warm", "Patient", "Relaxed", "Dependable", "Kind"], role: "The grounded mentor and dependable host of countryside stories.", appearance: "A long copper coat, soft fringe, broad horns, and a moss-green field tag give HUGO a memorable, balanced silhouette.", colors: ["#A85F32", "#D99A62", "#738060", "#3A2B22"], favorites: ["Open meadows", "Fresh hay", "Slow mornings", "Listening to stories"], abilities: ["Calming a group", "Reading weather", "Carrying supplies", "Offering practical advice"], productionNotes: "HUGO requires stable horn geometry, believable coat weight, and slow secondary fur movement.", promptNotes: "Keep copper Highland coat, symmetrical horns, fringe over forehead, broad body, and green tag fixed in every scene.", futureStories: "HUGO will welcome the cast to a countryside workshop where they build a shelter before the rain." },
  { slug: "ruru", name: "RURU", species: "Red Panda", tagline: "Curious, shy, and irresistibly playful.", story: "RURU peeks out from behind trees whenever something new catches his eye. His gentle courage and bright curiosity turn small woodland surprises into playful discoveries.", personality: ["Curious", "Shy", "Playful", "Gentle", "Observant"], role: "The curious woodland explorer who brings playful surprises and tender courage to the FourFeetz universe.", appearance: "Warm russet fur, a dark chest and paws, cream facial markings, bright dark eyes, and a striped fluffy tail define RURU's compact red panda look. He always wears a brown collar with a gold RURU name tag.", colors: ["#A9572B", "#E7C9A4", "#33251F", "#C99A3D"], favorites: ["Peeking around trees", "Crisp autumn leaves", "Quiet forest paths", "Tiny surprises"], abilities: ["Spotting hidden details", "Climbing carefully", "Making friends through gentle curiosity", "Turning shy moments into playful adventures"], productionNotes: "RURU shots preserve his compact red panda proportions, russet-and-dark fur pattern, striped tail, brown collar, and readable gold RURU name tag.", promptNotes: "Repeat the curious red panda, warm russet fur, dark chest and paws, cream face markings, striped fluffy tail, brown collar, and gold RURU name tag in every prompt.", futureStories: "RURU's first woodland stories follow him as he practices being brave, investigates rustling leaves, and discovers that curiosity can be its own kind of courage." },
  { slug: "oli", name: "OLI", species: "Otter", tagline: "Curious, clever, and loves adventure.", story: "OLI follows rivers because every bend promises a new problem to solve. Clever paws and fearless curiosity make OLI the natural explorer of water, coast, and hidden passages.", personality: ["Curious", "Clever", "Adventurous", "Resourceful", "Quick"], role: "The inventive explorer who opens aquatic and environmental stories.", appearance: "Rich brown waterproof fur, a cream muzzle, bright dark eyes, and a small orange utility pouch define OLI's practical look.", colors: ["#76503A", "#D2B08B", "#D98745", "#263331"], favorites: ["River stones", "Maps", "Floating objects", "Secret routes"], abilities: ["Strong swimming", "Tool improvisation", "Route finding", "Solving mechanical puzzles"], productionNotes: "OLI shots balance wet-fur detail with clear paw action and physically plausible water interaction.", promptNotes: "Repeat brown otter fur, cream muzzle, orange pouch, compact body, visible whiskers, and consistent wetness level.", futureStories: "OLI's first expedition follows a drifting message from a city canal to the open coast." },
  { slug: "milo", name: "MILO", species: "Piglet", tagline: "Playful, optimistic, and always hungry.", story: "MILO believes every journey should include a snack and every setback can become a celebration. His optimism makes him a generous companion and an accidental source of good ideas.", personality: ["Optimistic", "Playful", "Generous", "Funny", "Determined"], role: "The warm comic heart whose enthusiasm keeps the group moving.", appearance: "Soft pink skin, rounded ears, a small curled tail, and a mustard-yellow bandana create a friendly graphic shape.", colors: ["#EAB8AE", "#F7D8CF", "#D5A43A", "#5B3B32"], favorites: ["Warm bread", "Farm markets", "Sunny kitchens", "Sharing snacks"], abilities: ["Finding food", "Lifting morale", "Remembering recipes", "Turning mistakes into plans"], productionNotes: "MILO animation emphasizes grounded weight, readable ear poses, and restrained facial exaggeration.", promptNotes: "Maintain pink piglet proportions, curled tail, yellow bandana, rounded snout, and warm editorial lighting.", futureStories: "MILO will star in a harvest story about building a community table from ingredients gathered along the road.", imageAlt: "Front-facing white mini pig MILO wearing a brown collar and gold MILO name tag" },
  { slug: "feni", name: "FENI", species: "Fennec Fox", tagline: "Clever, curious, and gently cautious.", story: "FENI is a clever and curious baby fennec fox who approaches every new discovery with gentle caution. Her oversized ears and warm eyes make even her smallest adventures feel special.", personality: ["Clever", "Curious", "Cautious"], role: "A newly introduced FourFeetz character whose public profile centers on careful curiosity.", appearance: "A very young fennec fox with oversized ears, soft cream-colored fur, a small rounded face, and large warm brown eyes.", colors: ["#F4E6CE", "#E5C99F", "#8A5E42", "#3B2B24"], favorites: [], abilities: [], productionNotes: "Public-facing artwork should preserve FENI's very young proportions, oversized ears, cream fur, rounded face, and warm brown eyes.", promptNotes: "FourFeetz does not publish FENI's private production prompts or internal character bible.", futureStories: "No dedicated FENI film, short, or music release has been announced yet.", imageSet: "portrait" },
  { slug: "hori", name: "HORI", species: "Tiger", tagline: "Playful, affectionate, and braver than he feels.", story: "HORI is a playful baby tiger who looks brave at first but has a gentle and affectionate heart. He brings cheerful energy and a little mischief wherever he goes.", personality: ["Playful", "Gentle", "Affectionate"], role: "A newly introduced FourFeetz character whose public profile combines cheerful courage with a gentle nature.", appearance: "A very young tiger with soft orange fur, clear but natural black stripes, a rounded face, small ears, and large warm eyes.", colors: ["#D98643", "#F0B36E", "#332720", "#F4DFC4"], favorites: [], abilities: [], productionNotes: "Public-facing artwork should preserve HORI's very young proportions, natural stripe pattern, rounded face, small ears, and warm eyes.", promptNotes: "FourFeetz does not publish HORI's private production prompts or internal character bible.", futureStories: "No dedicated HORI film, short, or music release has been announced yet.", imageSet: "portrait" },
];

export const characterDetails: CharacterDetail[] = characterBase.map((character) => ({
  ...character,
  publishedAt: character.publishedAt ?? "2026-07-13",
  featured: character.featured ?? character.slug === "haru",
  publishStatus: character.publishStatus ?? "published",
  gallery: character.hasOfficialImages === false ? [] : [
    {
      label: "Hero portrait",
      image: `/images/characters/${character.slug}/portrait.png`,
      fit: "contain",
    },
    ...(character.imageSet === "portrait" ? [] : [
      {
        label: "Expression reference",
        image: `/images/characters/${character.slug}/expression.png`,
        fit: "cover",
        ...(character.slug === "milo" ? {
          imageAlt: "Close-up of white mini pig MILO looking slightly to the side with a brown collar and gold name tag",
          koreanImageAlt: "살짝 옆을 바라보며 갈색 목걸이와 금색 이름표를 한 흰색 미니피그 MILO의 얼굴 클로즈업",
        } : {}),
      },
      {
        label: "Color and silhouette study",
        image: `/images/characters/${character.slug}/silhouette.png`,
        fit: "contain",
        ...(character.slug === "milo" ? {
          imageAlt: "Seated side view of white mini pig MILO showing a curled tail, brown collar, and gold name tag",
          koreanImageAlt: "말린 꼬리와 갈색 목걸이, 금색 이름표가 보이는 흰색 미니피그 MILO의 앉은 옆모습",
        } : {}),
      },
    ]),
  ] as CharacterStudy[],
}));

export function getCharacter(slug: string) {
  return characterDetails.find((character) => character.slug === slug);
}
