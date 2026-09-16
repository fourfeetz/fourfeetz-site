import type { ProductionInsight } from "@/lib/productionInsights";

export const petMemoryProductionExperienceSlugs = [
  "seedance-2-pet-human-reference-test",
  "ai-pet-memorial-memory-film",
  "protoface-seedance-2-real-production-test"
] as const;

export type PetMemoryProductionExperienceSlug = (typeof petMemoryProductionExperienceSlugs)[number];

// Bodies supplied by FourFeetz; section headings and summaries organize the original experience.
export const petMemoryProductionExperiences = {
  "seedance-2-pet-human-reference-test": {
    "en": {
      "slug": "seedance-2-pet-human-reference-test",
      "title": "Testing Seedance 2.0 with Pets and People — Reference Images vs Text-to-Video",
      "shortTitle": "Seedance 2.0: Pet and Human References vs Text-to-Video",
      "description": "Our Protoface Studio test of Seedance 2.0: realistic-person reference restrictions, convincing pet-human contact in Text-to-Video, and unexpected dog placement.",
      "eyebrow": "FourFeetz Production Experience",
      "hero": "/images/tools-hero-v2.png",
      "heroAlt": "FourFeetz editorial illustration of AI video production and editing tools",
      "heroCaption": "An existing editorial illustration of production tools, not a result from the cafe test or a screenshot of Protoface Studio.",
      "heroFit": "contain",
      "published": "2026-09-16",
      "updated": "2026-09-16",
      "readTime": "3 min read",
      "verdict": "Our production environment restricted photorealistic human references. Text-to-Video produced convincing interaction, but the dog appeared in the wrong position. Input availability and scene control needed separate checks.",
      "category": "Production Record",
      "tags": [
        "Seedance 2.0",
        "Protoface Studio",
        "Reference Image",
        "Text-to-Video",
        "반려동물 영상"
      ],
      "keywords": [
        "Seedance 2.0",
        "Seedance 2.0 reference image",
        "Seedance 2.0 text to video",
        "AI pet video",
        "AI human pet video",
        "Protoface Seedance"
      ],
      "tools": [
        "Protoface Studio",
        "Seedance 2.0"
      ],
      "characters": [],
      "recordBasis": "Based on the production experience documented by FourFeetz Studios. Observations from this test are distinct from general claims about model performance.",
      "serviceCta": {
        "href": "/services",
        "protofaceAffiliate": true
      },
      "sections": [
        {
          "id": "test-context",
          "title": "Testing pet-human interaction through Protoface",
          "paragraphs": [
            "Recently, FourFeetz Studios tested Seedance 2.0 through Protoface Studio to explore how naturally AI video can portray interactions between people and pets.",
            "One of the most interesting findings was the practical difference between using reference images and generating a scene entirely from text."
          ]
        },
        {
          "id": "reference-limits",
          "title": "What happened with starting images and Reference Image",
          "paragraphs": [
            "We first created a photorealistic image of a woman with a Golden Retriever in a café and attempted to use it as the visual starting point.",
            "In the production environment we tested, however, photorealistic human references could trigger a realistic-person reference restriction, preventing the render from proceeding.",
            "We also tested the Reference Image workflow and encountered a similar limitation."
          ],
          "note": "This restriction was observed in the platform environment used for this test. It is not a universal statement about every Seedance 2.0 provider; check the input rules of the platform you use."
        },
        {
          "id": "text-to-video",
          "title": "Removing the image and trying Text-to-Video",
          "paragraphs": [
            "Instead, we removed the image and generated the scene using only a text prompt.",
            "The result was surprisingly convincing in several areas.",
            "Physical contact between the woman's hand and the dog looked natural, the dog's movement around the person was believable, and the overall photorealistic appearance was strong."
          ]
        },
        {
          "id": "blocking",
          "title": "Natural contact did not mean exact blocking",
          "paragraphs": [
            "Prompt adherence, however, was not perfect.",
            "For example, the dog was intended to approach from the floor, but the generated scene placed the dog on the café table."
          ]
        },
        {
          "id": "takeaways",
          "title": "Separate model possibilities from platform input rules",
          "paragraphs": [
            "This test gave us an important production lesson.",
            "For natural emotional interaction between a person and a pet, Seedance 2.0's Text-to-Video workflow can be a useful option.",
            "However, when exact blocking, position, or action order matters, shorter and more clearly defined scenes are generally easier to control than trying to describe everything in one generation.",
            "It is also important to distinguish between a model's general capabilities and the input workflows currently available through the platform being used.",
            "At FourFeetz Studios, we will continue documenting both successful results and practical limitations discovered during real AI pet-video production."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Does Seedance 2.0 restrict every realistic-person reference?",
          "answer": "This record describes the Protoface Studio environment we used at the time. It does not establish a rule for every platform, account or future model version."
        },
        {
          "question": "Did Text-to-Video follow the intended position?",
          "answer": "No. The dog was intended to approach from the floor, but the result placed it on the table. We evaluated natural interaction separately from exact position and action order."
        }
      ],
      "related": [
        {
          "label": "Related Production Experience",
          "title": "An AI Pet Memorial Film Built Around Happy Memories",
          "href": "/insights/ai-pet-memorial-memory-film"
        },
        {
          "label": "Related Production Experience",
          "title": "Protoface + Seedance 2.0: A 15-Second Multi-Scene Test",
          "href": "/insights/protoface-seedance-2-real-production-test"
        }
      ]
    },
    "ko": {
      "slug": "seedance-2-pet-human-reference-test",
      "title": "Seedance 2.0으로 반려동물과 사람을 함께 만들어보니 — 이미지 참조와 Text-to-Video의 차이",
      "shortTitle": "Seedance 2.0: 사람·반려동물 이미지 참조와 Text-to-Video",
      "description": "Protoface Studio에서 Seedance 2.0으로 사람과 반려동물 영상을 제작하며 겪은 실사 인물 참조 제한, Text-to-Video의 자연스러운 접촉과 동선 오류를 기록합니다.",
      "eyebrow": "FourFeetz 실제 제작 경험",
      "hero": "/images/tools-hero-v2.png",
      "heroAlt": "AI 영상 제작 도구와 편집 작업을 표현한 FourFeetz 대표 일러스트",
      "heroCaption": "제작 도구를 표현한 기존 대표 일러스트입니다. 본문의 카페 테스트 결과나 Protoface 화면 캡처가 아닙니다.",
      "heroFit": "contain",
      "published": "2026-09-16",
      "updated": "2026-09-16",
      "readTime": "약 3분",
      "verdict": "이번 제작 환경에서는 실사 인물 이미지 참조에 제한을 겪었습니다. Text-to-Video의 교감 표현은 자연스러웠지만 강아지의 위치는 의도와 달랐습니다. 입력 허용 범위와 장면 제어는 따로 검토해야 했습니다.",
      "category": "실제 제작 기록",
      "tags": [
        "Seedance 2.0",
        "Protoface Studio",
        "Reference Image",
        "Text-to-Video",
        "반려동물 영상"
      ],
      "keywords": [
        "Seedance 2.0",
        "Seedance 2.0 reference image",
        "Seedance 2.0 text to video",
        "AI pet video",
        "AI human pet video",
        "Protoface Seedance"
      ],
      "tools": [
        "Protoface Studio",
        "Seedance 2.0"
      ],
      "characters": [],
      "recordBasis": "FourFeetz Studios가 제공한 실제 제작 경험을 바탕으로 정리했습니다. 테스트에서 관찰한 결과와 일반적인 모델 성능은 구분해서 읽어주세요.",
      "serviceCta": {
        "href": "/ko/services/personal-pet-video",
        "protofaceAffiliate": true
      },
      "sections": [
        {
          "id": "test-context",
          "title": "Protoface에서 사람과 반려동물의 교감을 테스트하다",
          "paragraphs": [
            "최근 FourFeetz Studios에서는 Protoface Studio의 Seedance 2.0을 이용해 사람과 반려동물이 자연스럽게 상호작용하는 영상을 테스트했습니다.",
            "이번 테스트에서 가장 흥미로웠던 부분은 Text-to-Video와 이미지 참조 방식에서 실제 제작 경험에 차이가 있었다는 점입니다."
          ]
        },
        {
          "id": "reference-limits",
          "title": "시작 이미지와 Reference Image에서 겪은 제한",
          "paragraphs": [
            "처음에는 카페에 앉아 있는 여성과 골든리트리버 이미지를 제작한 뒤, 이 이미지를 Seedance 2.0의 시작 이미지로 사용하려고 했습니다.",
            "하지만 실사에 가까운 사람이 포함된 이미지를 사용했을 때 현재 사용한 제작 환경에서는 realistic people reference 관련 제한으로 렌더링을 진행할 수 없는 경우가 있었습니다.",
            "Reference Image 방식도 테스트했지만 같은 제한을 경험했습니다."
          ],
          "note": "이 제한은 테스트 당시 사용한 플랫폼 환경에서 경험한 내용입니다. 모든 Seedance 2.0 제공처에 동일하게 적용된다는 뜻은 아니며, 현재 허용되는 입력은 사용하는 플랫폼에서 확인해야 합니다."
        },
        {
          "id": "text-to-video",
          "title": "이미지를 빼고 Text-to-Video로 바꾼 결과",
          "paragraphs": [
            "그래서 이미지를 제거하고 순수한 Text-to-Video 방식으로 여성과 골든리트리버가 카페에서 교감하는 장면을 다시 생성했습니다.",
            "결과는 예상보다 흥미로웠습니다.",
            "사람의 손과 강아지가 접촉하는 장면, 강아지가 사람에게 가까이 다가가는 움직임, 얼굴과 털의 실사 표현은 상당히 자연스럽게 생성되었습니다."
          ]
        },
        {
          "id": "blocking",
          "title": "자연스러운 접촉과 정확한 동선은 다른 문제였다",
          "paragraphs": [
            "반면 프롬프트에서 의도했던 정확한 위치나 행동이 완벽하게 지켜지지는 않았습니다.",
            "예를 들어 강아지가 바닥에서 접근하도록 의도했지만 생성 결과에서는 테이블 위에 위치하는 등 구도와 동선에서 예상하지 못한 변화가 발생했습니다."
          ]
        },
        {
          "id": "takeaways",
          "title": "모델의 가능성과 플랫폼의 입력 조건을 구분하기",
          "paragraphs": [
            "이번 테스트에서 얻은 가장 큰 경험은 다음과 같습니다.",
            "Seedance 2.0에서 사람과 반려동물의 자연스러운 교감 자체는 Text-to-Video만으로도 충분히 시도할 가치가 있었습니다.",
            "하지만 캐릭터의 정확한 위치와 행동 순서가 중요한 영상이라면 한 번의 생성으로 완벽한 결과를 기대하기보다는 장면을 짧고 명확하게 설계하는 것이 중요했습니다.",
            "또한 모델 자체가 지원하는 기능과 실제로 사용하는 플랫폼에서 허용되는 입력 방식에는 차이가 있을 수 있다는 점도 제작 전에 확인할 필요가 있습니다.",
            "FourFeetz Studios는 앞으로도 AI 영상 모델을 실제 반려동물 콘텐츠 제작에 적용하면서 성공한 결과뿐 아니라 제작 과정에서 확인한 한계와 해결 방법도 공유할 예정입니다."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Seedance 2.0은 모든 실사 인물 참조를 제한하나요?",
          "answer": "이 글은 당시 사용한 Protoface Studio 제작 환경에서 겪은 제한을 기록한 것입니다. 모든 플랫폼이나 계정, 모든 시점의 모델 동작에 적용되는 결론은 아닙니다."
        },
        {
          "question": "Text-to-Video에서 의도한 위치까지 지켜졌나요?",
          "answer": "아니요. 바닥에서 접근하도록 의도한 강아지가 테이블 위에 배치되었습니다. 자연스러운 교감 표현과 정확한 위치·행동 순서를 구분해서 검토했습니다."
        }
      ],
      "related": [
        {
          "label": "관련 제작 경험",
          "title": "반려동물 추모영상: 이별보다 행복했던 기억",
          "href": "/ko/insights/ai-pet-memorial-memory-film"
        },
        {
          "label": "관련 제작 경험",
          "title": "Protoface + Seedance 2.0: 15초 다중 장면 제작기",
          "href": "/ko/insights/protoface-seedance-2-real-production-test"
        }
      ]
    }
  },
  "ai-pet-memorial-memory-film": {
    "en": {
      "slug": "ai-pet-memorial-memory-film",
      "title": "Creating an AI Pet Memorial Film — Why We Focused on Memories, Not Goodbye",
      "shortTitle": "An AI Pet Memorial Film Built Around Happy Memories",
      "description": "How FourFeetz shaped an AI pet memorial film around home, outdoor memories and a shared sunset, preserving companionship instead of depicting a goodbye.",
      "eyebrow": "FourFeetz Production Experience",
      "hero": "/images/services/pet-memorial-0914-cover.jpg",
      "heroAlt": "FourFeetz pet memorial film cover showing a person and dog watching the sunset together",
      "heroCaption": "The cover published with the FourFeetz pet memorial service, including the closing message about shared memories.",
      "heroFit": "contain",
      "published": "2026-09-16",
      "updated": "2026-09-16",
      "readTime": "3 min read",
      "verdict": "We chose not to recreate a departure. An ordinary peaceful moment, happy outdoor memories and a final shot together gave this memorial film its emotional direction.",
      "category": "Production Record",
      "tags": [
        "Pet Memorial",
        "Pet Memory Film",
        "AI Pet Video",
        "반려동물 추모영상",
        "추억영상"
      ],
      "keywords": [
        "반려동물 추모영상",
        "반려동물 추억영상",
        "강아지 추모영상",
        "pet memorial video",
        "AI pet memorial",
        "pet memory film"
      ],
      "tools": [],
      "characters": [],
      "recordBasis": "Based on the production experience documented by FourFeetz Studios. Observations from this test are distinct from general claims about model performance.",
      "serviceCta": {
        "href": "/services"
      },
      "sections": [
        {
          "id": "creative-direction",
          "title": "Start with a creative choice: do not show the pet leaving",
          "paragraphs": [
            "FourFeetz Studios recently explored a different approach to creating an AI-assisted pet memorial film.",
            "From the beginning, one creative decision was especially important:",
            "We did not want to portray the pet leaving.",
            "Pet memorial imagery can often rely on familiar symbols such as a pet walking into the distance, a rainbow bridge, angel wings, or a gradual disappearance.",
            "For this film, we deliberately avoided those ideas."
          ]
        },
        {
          "id": "memory-selection",
          "title": "Choose the moments worth holding onto",
          "paragraphs": [
            "Instead, we focused on the memories people may actually want to hold onto.",
            "Resting beside a favorite toy at home.",
            "Running happily through the grass.",
            "Walking together.",
            "And finally, sitting close to a loved one while watching a warm sunset."
          ]
        },
        {
          "id": "emotional-arc",
          "title": "Move from an ordinary day to a shared sunset",
          "paragraphs": [
            "The emotional structure of the film was also designed around remembrance rather than loss.",
            "It begins with an ordinary peaceful moment, moves through happy outdoor memories, and ends with the person and the dog still together.",
            "The dog does not walk away.",
            "The dog does not disappear.",
            "They remain side by side through the final shot."
          ]
        },
        {
          "id": "relationship",
          "title": "Preserve a relationship, not just movement in a photograph",
          "paragraphs": [
            "This production taught us that the most important part of an AI pet memorial film may not be the most technically impressive animation.",
            "It is choosing the right memories and preserving the emotional relationship behind them.",
            "The goal is not simply to make a photograph move.",
            "The goal is to create a film that reflects how someone wants to remember their companion."
          ]
        },
        {
          "id": "final-message",
          "title": "End with a memory rather than a goodbye",
          "paragraphs": [
            "That is why the final message of the film became:",
            "“The moments we shared stay with us forever.”",
            "“함께했던 순간은 언제나 우리 곁에 있습니다.”",
            "For FourFeetz Studios, a pet memorial film should not be about recreating a departure.",
            "It should be about remembering a beautiful life together."
          ],
          "videos": [
            {
              "src": "/videos/services/pet-memorial-0914.mp4",
              "poster": "/images/services/pet-memorial-0914-cover.jpg",
              "title": "FourFeetz pet memory and memorial film",
              "caption": "The film published with the FourFeetz memorial service, showing the memory-focused direction and closing message.",
              "presentation": "portrait"
            }
          ]
        }
      ],
      "faqs": [
        {
          "question": "Did the film use a rainbow bridge or disappearance?",
          "answer": "Not in this production. The pet does not walk away or disappear; the person and pet remain together through the final shot."
        },
        {
          "question": "What mattered most in making this film?",
          "answer": "Choosing the memories and preserving the relationship mattered more than impressive animation. We focused on ordinary peace at home, happy outdoor moments and a shared sunset."
        }
      ],
      "related": [
        {
          "label": "Related Production Experience",
          "title": "Seedance 2.0: Pet and Human References vs Text-to-Video",
          "href": "/insights/seedance-2-pet-human-reference-test"
        },
        {
          "label": "Related Production Experience",
          "title": "Protoface + Seedance 2.0: A 15-Second Multi-Scene Test",
          "href": "/insights/protoface-seedance-2-real-production-test"
        }
      ]
    },
    "ko": {
      "slug": "ai-pet-memorial-memory-film",
      "title": "AI 반려동물 추모영상을 만들어보니 — ‘이별’보다 ‘행복했던 기억’에 집중한 이유",
      "shortTitle": "반려동물 추모영상: 이별보다 행복했던 기억",
      "description": "FourFeetz의 AI 반려동물 추모영상 제작 경험. 떠나는 장면 대신 집, 산책, 잔디밭과 함께 보는 석양을 선택하고 추억 중심으로 감정을 구성한 이유를 설명합니다.",
      "eyebrow": "FourFeetz 실제 제작 경험",
      "hero": "/images/services/pet-memorial-0914-cover.jpg",
      "heroAlt": "반려동물과 보호자가 나란히 석양을 보는 FourFeetz 추모영상 표지",
      "heroCaption": "FourFeetz 반려동물 추모영상 서비스에 공개된 표지입니다. 함께했던 순간을 기억하는 마무리 문구를 담았습니다.",
      "heroFit": "contain",
      "published": "2026-09-16",
      "updated": "2026-09-16",
      "readTime": "약 3분",
      "verdict": "이번 추모영상에서는 떠나는 모습을 재현하지 않았습니다. 평온한 일상, 행복했던 야외 기억, 마지막까지 함께 있는 장면으로 보호자와 반려동물의 관계를 표현했습니다.",
      "category": "실제 제작 기록",
      "tags": [
        "Pet Memorial",
        "Pet Memory Film",
        "AI Pet Video",
        "반려동물 추모영상",
        "추억영상"
      ],
      "keywords": [
        "반려동물 추모영상",
        "반려동물 추억영상",
        "강아지 추모영상",
        "pet memorial video",
        "AI pet memorial",
        "pet memory film"
      ],
      "tools": [],
      "characters": [],
      "recordBasis": "FourFeetz Studios가 제공한 실제 제작 경험을 바탕으로 정리했습니다. 테스트에서 관찰한 결과와 일반적인 모델 성능은 구분해서 읽어주세요.",
      "serviceCta": {
        "href": "/ko/services/pet-memorial-video"
      },
      "sections": [
        {
          "id": "creative-direction",
          "title": "추모영상의 시작점: 떠나는 모습을 표현하지 않기",
          "paragraphs": [
            "FourFeetz Studios에서는 최근 AI를 활용한 반려동물 추억·추모영상 제작을 테스트했습니다.",
            "처음 기획하면서 가장 중요하게 생각했던 것은 반려동물이 떠나는 모습을 표현하지 않는 것이었습니다.",
            "추모영상이라고 하면 흔히 멀리 걸어가는 반려동물, 무지개다리, 천사 날개, 사라지는 모습과 같은 장면을 떠올릴 수 있습니다.",
            "하지만 이번 영상에서는 이러한 표현을 사용하지 않았습니다."
          ]
        },
        {
          "id": "memory-selection",
          "title": "기억하고 싶은 네 가지 순간 고르기",
          "paragraphs": [
            "대신 우리가 실제로 기억하고 싶은 순간에 집중했습니다.",
            "집에서 장난감 옆에 편안하게 쉬던 모습, 햇빛 아래 잔디밭을 신나게 뛰어다니던 모습, 함께 산책했던 순간, 그리고 보호자와 나란히 앉아 따뜻한 석양을 바라보는 장면입니다."
          ]
        },
        {
          "id": "emotional-arc",
          "title": "평온한 일상에서 함께 보는 석양까지",
          "paragraphs": [
            "영상의 감정도 슬픔에서 시작하지 않았습니다.",
            "따뜻한 일상에서 시작해 행복했던 야외의 기억으로 이어지고, 마지막에는 보호자와 반려동물이 서로 가까이 기대어 석양을 바라보는 장면으로 마무리했습니다.",
            "반려동물이 멀리 걸어가거나 사라지지 않습니다.",
            "마지막 순간까지 함께 있습니다."
          ]
        },
        {
          "id": "relationship",
          "title": "사진을 움직이는 것보다 관계를 표현하기",
          "paragraphs": [
            "이번 제작을 통해 느낀 것은 AI 반려동물 추모영상에서 기술적인 화려함보다 어떤 기억을 선택해서 보여주는지가 훨씬 중요하다는 점이었습니다.",
            "사진 속 반려동물의 모습을 단순히 움직이게 만드는 것이 목적이 아니라, 보호자가 기억하고 싶은 분위기와 관계를 영상으로 표현해야 했습니다."
          ]
        },
        {
          "id": "final-message",
          "title": "작별 인사 대신 남긴 마지막 문구",
          "paragraphs": [
            "그래서 최종 문구 역시 작별 인사 대신 다음과 같이 정했습니다.",
            "“The moments we shared stay with us forever.”",
            "“함께했던 순간은 언제나 우리 곁에 있습니다.”",
            "FourFeetz Studios가 만들고 싶은 반려동물 추모영상은 떠나는 순간을 재현하는 영상이 아니라, 함께했던 행복한 시간을 다시 떠올릴 수 있는 영상입니다."
          ],
          "videos": [
            {
              "src": "/videos/services/pet-memorial-0914.mp4",
              "poster": "/images/services/pet-memorial-0914-cover.jpg",
              "title": "FourFeetz 반려동물 추억·추모영상",
              "caption": "기존 FourFeetz 추모영상 서비스에 공개된 영상입니다. 따뜻한 기억과 마지막 문구를 함께 확인할 수 있습니다.",
              "presentation": "portrait"
            }
          ]
        }
      ],
      "faqs": [
        {
          "question": "무지개다리나 사라지는 장면을 사용했나요?",
          "answer": "이번 영상에서는 사용하지 않았습니다. 반려동물이 멀리 걸어가거나 사라지지 않고 마지막까지 보호자 곁에 있도록 구성했습니다."
        },
        {
          "question": "이번 제작에서 가장 중요하게 본 것은 무엇인가요?",
          "answer": "기술적으로 화려한 움직임보다 어떤 기억과 관계를 보여줄지였습니다. 집에서 쉬는 모습, 행복한 야외 기억, 함께 바라보는 석양을 선택했습니다."
        }
      ],
      "related": [
        {
          "label": "관련 제작 경험",
          "title": "Seedance 2.0: 사람·반려동물 이미지 참조와 Text-to-Video",
          "href": "/ko/insights/seedance-2-pet-human-reference-test"
        },
        {
          "label": "관련 제작 경험",
          "title": "Protoface + Seedance 2.0: 15초 다중 장면 제작기",
          "href": "/ko/insights/protoface-seedance-2-real-production-test"
        }
      ]
    }
  },
  "protoface-seedance-2-real-production-test": {
    "en": {
      "slug": "protoface-seedance-2-real-production-test",
      "title": "Protoface + Seedance 2.0 Production Test — What We Learned from a 15-Second Multi-Scene Video",
      "shortTitle": "Protoface + Seedance 2.0: A 15-Second Multi-Scene Test",
      "description": "What FourFeetz learned from a roughly 15-second pet-memory sequence in Protoface and Seedance 2.0: one action per scene, emotional boundaries and edited titles.",
      "eyebrow": "FourFeetz Production Experience",
      "hero": "/images/resources/ai-short-film-workflow-detail.png",
      "heroAlt": "Editorial illustration of a storyboard, film strip and editing timeline",
      "heroCaption": "An existing workflow illustration showing scene planning and editing, not an output frame from this 15-second test.",
      "heroFit": "contain",
      "published": "2026-09-16",
      "updated": "2026-09-16",
      "readTime": "3 min read",
      "verdict": "For this 15-second test, one main action per scene was easier to manage than a longer prompt. We excluded imagery that conflicted with the emotional purpose and added important wording during final editing.",
      "category": "Production Record",
      "tags": [
        "Protoface Studio",
        "Seedance 2.0",
        "AI Video Workflow",
        "Pet Memory Film",
        "반려동물 영상"
      ],
      "keywords": [
        "Protoface Studio",
        "Seedance 2.0",
        "Seedance 2.0 review",
        "Protoface review",
        "AI video workflow",
        "AI pet video production"
      ],
      "tools": [
        "Protoface Studio",
        "Seedance 2.0"
      ],
      "characters": [],
      "recordBasis": "Based on the production experience documented by FourFeetz Studios. Observations from this test are distinct from general claims about model performance.",
      "serviceCta": {
        "href": "/services",
        "protofaceAffiliate": true
      },
      "sections": [
        {
          "id": "sequence-test",
          "title": "Connect several memories in roughly 15 seconds",
          "paragraphs": [
            "FourFeetz Studios has recently been using Protoface Studio and Seedance 2.0 as part of our practical AI pet-video production workflow.",
            "For this test, we moved beyond generating a single action and explored how several short memories could be connected within an approximately 15-second sequence.",
            "The pet-memory film begins with a peaceful moment at home, transitions into the dog running happily outdoors, and ends in a warm golden-hour meadow.",
            "One of the most interesting results was how multiple environments could still feel connected when they shared the same emotional direction."
          ]
        },
        {
          "id": "one-action",
          "title": "Give each scene one primary action",
          "paragraphs": [
            "However, we also learned that a longer prompt does not automatically produce better control.",
            "What mattered more was simplifying the main action in each scene.",
            "At home: rest comfortably beside a favorite toy.",
            "Outside: run happily through the grass.",
            "In the final meadow: remain peaceful, look toward the camera, and gently wag the tail.",
            "Giving each section one clear primary action made the overall sequence easier to manage."
          ]
        },
        {
          "id": "negative-direction",
          "title": "Define what would break the emotional direction",
          "paragraphs": [
            "Negative direction was also important.",
            "For this memorial project, we explicitly asked the model not to have the dog walk away, disappear, or create imagery associated with death or farewell.",
            "When a film depends on a specific emotional tone, defining what should not happen can be almost as important as describing what should happen."
          ]
        },
        {
          "id": "workflow",
          "title": "Four principles to carry into the next production",
          "paragraphs": [
            "Our practical takeaway from this production was simple:",
            "Give each scene one primary action.",
            "Use only the camera movement you actually need.",
            "Describe the pet's behavior clearly.",
            "Explicitly exclude unwanted emotional or visual outcomes."
          ]
        },
        {
          "id": "typography",
          "title": "Add important typography during final editing",
          "paragraphs": [
            "And for important titles or memorial messages, adding typography during final editing can be more reliable than asking the video model to generate the text itself.",
            "Through these experiments, FourFeetz Studios is focusing not only on AI generation quality, but on building a production workflow that can be used for real creative services."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Is 15 seconds a fixed Seedance 2.0 limit?",
          "answer": "Approximately 15 seconds describes this test sequence. It is not a claim about maximum model duration or a specification that applies to every platform or account."
        },
        {
          "question": "Did a longer prompt produce more accurate control?",
          "answer": "In this production, simplifying the action in each scene helped more than adding length. We also added important wording during editing instead of relying on generated text."
        }
      ],
      "related": [
        {
          "label": "Related Production Experience",
          "title": "Seedance 2.0: Pet and Human References vs Text-to-Video",
          "href": "/insights/seedance-2-pet-human-reference-test"
        },
        {
          "label": "Related Production Experience",
          "title": "An AI Pet Memorial Film Built Around Happy Memories",
          "href": "/insights/ai-pet-memorial-memory-film"
        }
      ]
    },
    "ko": {
      "slug": "protoface-seedance-2-real-production-test",
      "title": "Protoface + Seedance 2.0 실제 제작기 — 15초 안에 여러 장면을 연결할 때 배운 것",
      "shortTitle": "Protoface + Seedance 2.0: 15초 다중 장면 제작기",
      "description": "Protoface Studio와 Seedance 2.0으로 약 15초 안에 반려동물의 여러 기억을 연결하며 배운 한 장면·한 행동, 감정 연출 제한과 후편집 텍스트 처리 경험입니다.",
      "eyebrow": "FourFeetz 실제 제작 경험",
      "hero": "/images/resources/ai-short-film-workflow-detail.png",
      "heroAlt": "장면 보드, 필름과 편집 타임라인으로 영상 제작 흐름을 표현한 일러스트",
      "heroCaption": "여러 장면의 구성과 편집 흐름을 표현한 기존 리소스 일러스트입니다. 이번 15초 테스트의 실제 출력 프레임은 아닙니다.",
      "heroFit": "contain",
      "published": "2026-09-16",
      "updated": "2026-09-16",
      "readTime": "약 3분",
      "verdict": "이번 15초 테스트에서는 긴 프롬프트보다 장면마다 한 가지 행동을 정하는 방식이 흐름을 관리하기 쉬웠습니다. 감정과 맞지 않는 연출을 제외하고 중요한 문구는 최종 편집에서 추가했습니다.",
      "category": "실제 제작 기록",
      "tags": [
        "Protoface Studio",
        "Seedance 2.0",
        "AI Video Workflow",
        "Pet Memory Film",
        "반려동물 영상"
      ],
      "keywords": [
        "Protoface Studio",
        "Seedance 2.0",
        "Seedance 2.0 review",
        "Protoface review",
        "AI video workflow",
        "AI pet video production"
      ],
      "tools": [
        "Protoface Studio",
        "Seedance 2.0"
      ],
      "characters": [],
      "recordBasis": "FourFeetz Studios가 제공한 실제 제작 경험을 바탕으로 정리했습니다. 테스트에서 관찰한 결과와 일반적인 모델 성능은 구분해서 읽어주세요.",
      "serviceCta": {
        "href": "/ko/services/personal-pet-video",
        "protofaceAffiliate": true
      },
      "sections": [
        {
          "id": "sequence-test",
          "title": "약 15초 안에 여러 기억을 연결한 테스트",
          "paragraphs": [
            "FourFeetz Studios에서는 최근 Protoface Studio와 Seedance 2.0을 실제 반려동물 영상 제작 과정에 사용해보고 있습니다.",
            "이번 테스트에서는 단순한 한 장면 생성이 아니라 약 15초 안에서 여러 개의 기억을 하나의 영상처럼 연결하는 방식을 시도했습니다.",
            "반려동물 추억영상에서는 집 안에서 편안하게 쉬는 장면으로 시작해 야외에서 신나게 뛰는 장면, 그리고 골든아워의 들판에서 평화롭게 있는 모습까지 연결했습니다.",
            "실제 결과에서 가장 인상적이었던 부분은 짧은 시간 안에서도 공간과 분위기가 바뀌는 장면을 하나의 감정 흐름으로 연결할 수 있었다는 점입니다."
          ]
        },
        {
          "id": "one-action",
          "title": "장면마다 한 가지 핵심 행동만 남기기",
          "paragraphs": [
            "하지만 프롬프트를 길게 작성한다고 해서 항상 더 정확한 결과가 나오는 것은 아니었습니다.",
            "중요했던 것은 각 장면마다 행동을 단순하게 만드는 것이었습니다.",
            "예를 들어,",
            "집에서는 장난감 옆에서 편안하게 쉬기.",
            "야외에서는 잔디 위를 즐겁게 달리기.",
            "마지막 들판에서는 카메라를 바라보며 편안하게 꼬리를 흔들기.",
            "이처럼 한 장면에 하나의 핵심 행동을 부여했을 때 전체 영상의 흐름을 관리하기가 훨씬 쉬웠습니다."
          ]
        },
        {
          "id": "negative-direction",
          "title": "감정과 맞지 않는 행동을 미리 제외하기",
          "paragraphs": [
            "또 하나 중요했던 것은 원하지 않는 행동을 명확하게 제외하는 것이었습니다.",
            "이번 추모영상에서는 반려동물이 멀리 걸어가지 않도록 하고, 사라지거나 슬픈 표정을 짓는 연출을 피하도록 프롬프트에 명확하게 지정했습니다.",
            "영상의 목적과 반대되는 행동을 미리 정의해두는 것이 감정적인 영상에서는 특히 중요했습니다."
          ]
        },
        {
          "id": "workflow",
          "title": "다음 제작에 적용할 네 가지 원칙",
          "paragraphs": [
            "이번 작업에서 얻은 실전 원칙은 간단했습니다.",
            "한 장면에는 하나의 핵심 행동.",
            "카메라 움직임은 필요한 것만.",
            "반려동물의 감정과 행동은 구체적으로.",
            "원하지 않는 연출은 명확하게 제외."
          ]
        },
        {
          "id": "typography",
          "title": "중요한 문구는 최종 편집에서 추가하기",
          "paragraphs": [
            "그리고 AI가 생성한 영상 안에 중요한 문구를 직접 만들게 하기보다는 최종 편집 과정에서 텍스트를 추가하는 방식이 더 안정적이었습니다.",
            "FourFeetz Studios는 이러한 테스트를 통해 AI 영상 생성 자체보다 실제 서비스에 사용할 수 있는 제작 워크플로우를 만들어가고 있습니다."
          ]
        }
      ],
      "faqs": [
        {
          "question": "15초는 Seedance 2.0의 고정 제한인가요?",
          "answer": "이 글의 약 15초는 이번 제작 테스트의 길이입니다. 모델이나 플랫폼의 최대 길이 또는 모든 계정에 적용되는 규격을 의미하지 않습니다."
        },
        {
          "question": "길게 작성한 프롬프트가 더 정확했나요?",
          "answer": "이번 제작에서는 길이보다 각 장면의 행동을 단순하게 정하는 것이 관리에 도움이 되었습니다. 중요한 문구는 생성 영상 안에 만들기보다 편집 과정에서 추가했습니다."
        }
      ],
      "related": [
        {
          "label": "관련 제작 경험",
          "title": "Seedance 2.0: 사람·반려동물 이미지 참조와 Text-to-Video",
          "href": "/ko/insights/seedance-2-pet-human-reference-test"
        },
        {
          "label": "관련 제작 경험",
          "title": "반려동물 추모영상: 이별보다 행복했던 기억",
          "href": "/ko/insights/ai-pet-memorial-memory-film"
        }
      ]
    }
  }
} satisfies Record<PetMemoryProductionExperienceSlug, Record<"en" | "ko", ProductionInsight & { heroAlt: string }>>;
