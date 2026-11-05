// Pikerty Blog — 9 languages, theme, search, progress, share
// No external libraries: all of this file lives in the GitHub repo.
// Homepage UI text lives in I18N below; article pages are zh + en in the page itself.
(function () {
  var LANGS = [
    { code: 'zh', label: '中文（简体）', htmlLang: 'zh-CN' },
    { code: 'en', label: 'English', htmlLang: 'en' },
    { code: 'es', label: 'Español', htmlLang: 'es' },
    { code: 'ja', label: '日本語', htmlLang: 'ja' },
    { code: 'yue', label: '粵語', htmlLang: 'zh-HK' },
    { code: 'ko', label: '한국어', htmlLang: 'ko' },
    { code: 'fr', label: 'Français', htmlLang: 'fr' },
    { code: 'ru', label: 'Русский', htmlLang: 'ru' },
    { code: 'de', label: 'Deutsch', htmlLang: 'de' }
  ];
  var I18N = {
    zh: {
      'nav.latest': '最新文章', 'nav.archive': '归档', 'nav.guide': '外网指南', 'nav.ielts': '考试指南', 'nav.about': '关于我',
      'hero.eyebrow': '博客 · 日常记录', 'hero.title': '把学到的、做过的，慢慢记下来。',
      'hero.subtitle': 'Write it down, in Chinese and in English.',
      'hero.desc': '这里是 Pikerty 的个人博客：雅思备考、打工度假签、技术折腾、旅行视频，都是真实的进度，不是完美的成品。',
      'hero.cta1': '开始阅读', 'hero.cta2': '关于我',
      'filter.all': '全部', 'filter.learning': '学习', 'filter.tech': '技术', 'filter.travel': '旅行', 'filter.life': '生活',
      'featured.title': '雅思备考 Day 4：餐厅英语，先从点一顿饭开始',
      'featured.desc': '每天 20 分钟，第 4 天练餐厅词汇和预约对话。不是背单词表，是把一句一句读出来、跟读出来。',
      'latest.title': '最新文章', 'latest.sub': '按时间倒序，先看最新的。',
      'card.whv.title': '打工度假签怎么选：澳洲 462 vs 新西兰',
      'card.whv.desc': '语言、存款、报名方式完全不一样。澳洲是抽签，新西兰是抢号，2026 年两边都已经满了。',
      'card.ai.title': '把 AI 恋爱伴侣部署到 Render：免费路线走通了，也卡住了',
      'card.ai.desc': '从 Railway 到 Render，从 Gemini 到 Groq + OpenRouter。部署成功了，聊天还没通，卡在免费模型的密钥上。',
      'card.travel.title': '第一人称美国旅行视频：从办美签开始',
      'card.travel.desc': '已做了三个场景：办美签、纽约时代广场、洛杉矶机场。要的是真实手机拍摄的感觉，不是影棚精修。',
      'card.ielts.title': '为什么每天只练 20 分钟英语',
      'card.ielts.desc': '目标是雅思 5.5。好久没学英语，四六级也没过，所以先从每天能做完的小目标开始。',
      'card.guide.title': '外网导航与文化词典：从哪里看、词是什么意思',
      'card.guide.desc': 'X、Reddit、SpaceX、Hacker News……先知道去哪看，再看懂别人在说什么。',
      'card.ielts-hub.title': '语言考试指南：雅思、PTE、托福和日韩德西法',
      'card.ielts-hub.desc': '什么是雅思、怎么报名、不同目标要多少分，还有 PTE、托福、日语、韩语、德语、西班牙语、法语。',
      'archive.title': '归档', 'archive.sub': '按月份整理，方便回头找。',
      'about.title': '关于 Pikerty',
      'about.desc': '成都文理学院，大数据管理与应用，2026 年毕业。正在找数据分析 / 数据运营方向的工作，也在准备雅思 5.5。这个博客用来记录学习和折腾的过程，写给以后的自己看。',
      'search.placeholder': '搜索文章…  Search posts…', 'search.empty': '没有找到相关文章，换个关键词试试。', 'search.engines': '站外搜索：',
      'theme.dark': '夜间模式', 'theme.light': '浅色模式'
    },
    en: {
      'nav.latest': 'Latest', 'nav.archive': 'Archive', 'nav.guide': 'Internet Guide', 'nav.ielts': 'Exam Guide', 'nav.about': 'About',
      'hero.eyebrow': 'Blog · Everyday Notes', 'hero.title': 'Write down what I learn and what I make, slowly.',
      'hero.subtitle': '用中文，也用英文。',
      'hero.desc': "This is Pikerty's personal blog: IELTS prep, working holiday visas, tech experiments and travel videos — real progress, not perfect results.",
      'hero.cta1': 'Start Reading', 'hero.cta2': 'About Me',
      'filter.all': 'All', 'filter.learning': 'Learning', 'filter.tech': 'Tech', 'filter.travel': 'Travel', 'filter.life': 'Life',
      'featured.title': 'IELTS Day 4: Restaurant English — start by ordering a meal',
      'featured.desc': '20 minutes a day. Day 4 was restaurant vocabulary and a reservation dialogue — not memorizing a list, but reading and shadowing it aloud.',
      'latest.title': 'Latest Posts', 'latest.sub': 'Newest first.',
      'card.whv.title': 'Working Holiday Visa: Australia 462 vs New Zealand',
      'card.whv.desc': 'Language, savings and how to apply are all different. Australia is a ballot, New Zealand is first-come — and both 2026 rounds are already full.',
      'card.ai.title': 'Deploying AI Romance to Render: the free route worked — and got stuck',
      'card.ai.desc': "From Railway to Render, from Gemini to Groq + OpenRouter. Deployment succeeded, but chat still doesn't work — stuck on a free-model API key.",
      'card.travel.title': 'First-Person US Travel Videos: Starting with the Visa',
      'card.travel.desc': 'Three scenes so far: the US visa, Times Square, and LAX. The look I want is a real phone camera — not studio-polished footage.',
      'card.ielts.title': 'Why I only practise English for 20 minutes a day',
      'card.ielts.desc': "The goal is IELTS 5.5. I haven't studied English for a long time and didn't pass CET-4/6, so I started with a small daily goal I can actually finish.",
      'card.guide.title': 'A Guide to the Foreign Internet & Its Slang: Where to Look, What It Means',
      'card.guide.desc': 'X, Reddit, SpaceX, Hacker News… first know where to look, then understand what people are saying.',
      'card.ielts-hub.title': 'Language Exam Guide: IELTS, PTE, TOEFL, Japanese, Korean, German, Spanish & French',
      'card.ielts-hub.desc': 'What IELTS is, how to register, what score each goal needs — plus PTE, TOEFL, Japanese, Korean, German, Spanish and French.',
      'archive.title': 'Archive', 'archive.sub': 'Grouped by month, so older posts are easy to find.',
      'about.title': 'About Pikerty',
      'about.desc': 'Chengdu Wenli College, Big Data Management and Application, class of 2026. Looking for data analysis / data operations work, and preparing for IELTS 5.5. This blog records the learning and the experiments — mostly for my future self.',
      'search.placeholder': 'Search posts…', 'search.empty': 'No posts found — try another keyword.', 'search.engines': 'Search the web:',
      'theme.dark': 'Dark Mode', 'theme.light': 'Light Mode'
    },
    es: {
      'nav.latest': 'Últimos', 'nav.archive': 'Archivo', 'nav.guide': 'Guía de internet', 'nav.ielts': 'Guía de exámenes', 'nav.about': 'Sobre mí',
      'hero.eyebrow': 'Blog · Notas diarias', 'hero.title': 'Escribe lo que aprendes y lo que haces, poco a poco.',
      'hero.subtitle': 'Escríbelo en varios idiomas.',
      'hero.desc': 'Este es el blog personal de Pikerty: preparación del IELTS, visado Working Holiday, experimentos de tecnología y vídeos de viajes. Progreso real, no resultados perfectos.',
      'hero.cta1': 'Empezar a leer', 'hero.cta2': 'Sobre mí',
      'filter.all': 'Todo', 'filter.learning': 'Aprendizaje', 'filter.tech': 'Tecnología', 'filter.travel': 'Viajes', 'filter.life': 'Vida',
      'featured.title': 'IELTS Día 4: inglés de restaurante — empieza pidiendo una comida',
      'featured.desc': '20 minutos al día. El día 4 fue vocabulario de restaurante y un diálogo para reservar mesa: leerlo en voz alta y repetirlo, no memorizar una lista.',
      'latest.title': 'Últimas entradas', 'latest.sub': 'Las más recientes primero.',
      'card.whv.title': 'Working Holiday: Australia 462 o Nueva Zelanda',
      'card.whv.desc': 'Idioma, ahorros y forma de solicitarlo son totalmente distintos. Australia es un sorteo; Nueva Zelanda, por orden de llegada. Las plazas de 2026 ya están llenas.',
      'card.ai.title': 'Desplegar AI Romance en Render: la ruta gratuita funcionó, y se atascó',
      'card.ai.desc': 'De Railway a Render, de Gemini a Groq + OpenRouter. El despliegue funcionó, pero el chat aún no: falta una clave de modelo gratuita.',
      'card.travel.title': 'Vídeos de viaje por EE. UU. en primera persona: empezando por el visado',
      'card.travel.desc': 'Tres escenas hasta ahora: el visado, Times Square y LAX. Quiero el aspecto de una cámara de móvil real, no de estudio.',
      'card.ielts.title': 'Por qué solo practico inglés 20 minutos al día',
      'card.ielts.desc': 'El objetivo es IELTS 5.5. Hace mucho que no estudio inglés y no aprobé el CET-4/6, así que empecé con una meta diaria que sí puedo cumplir.',
      'card.guide.title': 'Guía de internet y su jerga: dónde mirar y qué significa',
      'card.guide.desc': 'X, Reddit, SpaceX, Hacker News… primero saber dónde mirar y luego entender lo que dice la gente.',
      'card.ielts-hub.title': 'Guía de exámenes de idiomas: IELTS, PTE, TOEFL, japonés, coreano, alemán, español y francés',
      'card.ielts-hub.desc': 'Qué es el IELTS, cómo inscribirse, qué nota necesita cada objetivo, y además PTE, TOEFL, japonés, coreano, alemán, español y francés.',
      'archive.title': 'Archivo', 'archive.sub': 'Por meses, para encontrar entradas antiguas.',
      'about.title': 'Sobre Pikerty',
      'about.desc': 'Universidad Chengdu Wenli, Gestión y Aplicación de Big Data, promoción de 2026. Busco trabajo en análisis de datos y preparo el IELTS 5.5. Este blog registra el aprendizaje y los experimentos, sobre todo para mi yo futuro.',
      'search.placeholder': 'Buscar entradas…', 'search.empty': 'No se encontraron entradas. Prueba otra palabra.', 'search.engines': 'Buscar en la web:',
      'theme.dark': 'Modo oscuro', 'theme.light': 'Modo claro'
    },
    ja: {
      'nav.latest': '最新記事', 'nav.archive': 'アーカイブ', 'nav.guide': '海外ネットガイド', 'nav.ielts': '試験ガイド', 'nav.about': '私について',
      'hero.eyebrow': 'ブログ・日常の記録', 'hero.title': '学んだこと、やったことを、少しずつ書き留める。',
      'hero.subtitle': 'いろんな言語で書き留める。',
      'hero.desc': 'Pikerty の個人ブログです。IELTS対策、ワーキングホリデー、技術の実験、旅行動画。完璧な成果ではなく、リアルな進み具合を記録します。',
      'hero.cta1': '読み始める', 'hero.cta2': '私について',
      'filter.all': 'すべて', 'filter.learning': '学習', 'filter.tech': '技術', 'filter.travel': '旅行', 'filter.life': '生活',
      'featured.title': 'IELTS Day 4：レストラン英語——まずは注文から',
      'featured.desc': '1日20分。4日目はレストラン単語と予約の会話。単語帳を覚えるのではなく、声に出して読んで、シャドーイングする。',
      'latest.title': '最新記事', 'latest.sub': '新しい順に表示します。',
      'card.whv.title': 'ワーキングホリデーはどっち？オーストラリア462 vs ニュージーランド',
      'card.whv.desc': '言語、貯金、申し込み方法がまったく違います。オーストラリアは抽選、ニュージーランドは先着順。2026年分はどちらも満員です。',
      'card.ai.title': 'AI恋愛パートナーをRenderにデプロイ：無料ルートは通った、でも止まった',
      'card.ai.desc': 'RailwayからRenderへ、GeminiからGroq + OpenRouterへ。デプロイは成功したが、チャットはまだ動かない。無料モデルのキーで止まっている。',
      'card.travel.title': '一人称アメリカ旅行動画：ビザ申請からスタート',
      'card.travel.desc': '3シーン完成：ビザ申請、タイムズスクエア、LAX。本物のスマホカメラの質感がほしい。スタジオ仕上げではない。',
      'card.ielts.title': 'なぜ1日20分だけ英語を練習するのか',
      'card.ielts.desc': '目標はIELTS 5.5。久しぶりの英語で、CET-4/6にも落ちた。だから毎日続けられる小さな目標から始めた。',
      'card.guide.title': '海外ネットとスラングのガイド：どこで見るか、何を意味するか',
      'card.guide.desc': 'X、Reddit、SpaceX、Hacker News……まずどこを見るかを知って、それから人々の言葉を理解する。',
      'card.ielts-hub.title': '語学試験ガイド：IELTS、PTE、TOEFLと日本語・韓国語・ドイツ語・スペイン語・フランス語',
      'card.ielts-hub.desc': 'IELTSとは何か、申し込み方法、目標別の必要スコア、そしてPTE、TOEFL、日本語、韓国語、ドイツ語、スペイン語、フランス語。',
      'archive.title': 'アーカイブ', 'archive.sub': '月ごとに整理して、過去の記事を探しやすく。',
      'about.title': 'Pikertyについて',
      'about.desc': '成都文理学院、ビッグデータ管理と応用、2026年卒業。データ分析の仕事を探しながら、IELTS 5.5を目指している。このブログは学びと実験の記録。未来の自分のために。',
      'search.placeholder': '記事を検索…', 'search.empty': '記事が見つかりませんでした。別の言葉で試してください。', 'search.engines': 'ウェブで検索：',
      'theme.dark': 'ダークモード', 'theme.light': 'ライトモード'
    },
    yue: {
      'nav.latest': '最新文章', 'nav.archive': '歸檔', 'nav.guide': '外網指南', 'nav.ielts': '考試指南', 'nav.about': '關於我',
      'hero.eyebrow': '博客 · 日常記錄', 'hero.title': '將學到嘅、做過嘅，慢慢記低。',
      'hero.subtitle': '用唔同語言寫低佢。',
      'hero.desc': '呢度係 Pikerty 嘅個人博客：考雅思、打工度假簽、技術折騰、旅行片，都係真實嘅進度，唔係完美成品。',
      'hero.cta1': '開始睇', 'hero.cta2': '關於我',
      'filter.all': '全部', 'filter.learning': '學習', 'filter.tech': '技術', 'filter.travel': '旅行', 'filter.life': '生活',
      'featured.title': '雅思備考 Day 4：餐廳英文，先由嗌一餐飯開始',
      'featured.desc': '每日 20 分鐘，第 4 日練餐廳生字同訂位對話。唔係背生字表，係一句一句讀出嚟、跟住讀。',
      'latest.title': '最新文章', 'latest.sub': '按時間倒序，最新嘅先。',
      'card.whv.title': '打工度假簽點揀：澳洲 462 vs 新西蘭',
      'card.whv.desc': '語言、存款、報名方法完全唔同。澳洲係抽籤，新西蘭係搶位，2026 年兩邊都滿晒。',
      'card.ai.title': '將 AI 戀愛伴侶部署去 Render：免費路線行得通，但卡住咗',
      'card.ai.desc': '由 Railway 去 Render，由 Gemini 去 Groq + OpenRouter。部署成功咗，但傾偈仲未得，卡喺免費模型嘅 key 度。',
      'card.travel.title': '第一身美國旅行片：由辦美簽開始',
      'card.travel.desc': '已經做咗三個場景：辦美簽、紐約時代廣場、洛杉磯機場。想要真實手機拍攝嘅感覺，唔係影棚精修。',
      'card.ielts.title': '點解每日只練 20 分鐘英文',
      'card.ielts.desc': '目標係雅思 5.5。好耐冇學英文，四六級都唔合格，所以先由每日做到嘅小目標開始。',
      'card.guide.title': '外網導航同文化詞典：去邊度睇、啲詞係咩意思',
      'card.guide.desc': 'X、Reddit、SpaceX、Hacker News……先知去邊度睇，再睇得明人哋講咩。',
      'card.ielts-hub.title': '語言考試指南：雅思、PTE、托福同日韓德西法',
      'card.ielts-hub.desc': '咩係雅思、點報名、唔同目標要幾多分，仲有 PTE、托福、日文、韓文、德文、西班牙文、法文。',
      'archive.title': '歸檔', 'archive.sub': '按月份整理，方便搵返。',
      'about.title': '關於 Pikerty',
      'about.desc': '成都文理學院，大數據管理與應用，2026 年畢業。搵緊數據分析 / 數據營運方向嘅工，同時準備緊雅思 5.5。呢個博客用嚟記錄學習同折騰嘅過程，寫畀以後嘅自己睇。',
      'search.placeholder': '搜尋文章…', 'search.empty': '搵唔到相關文章，試下另一個關鍵詞。', 'search.engines': '喺網上搜尋：',
      'theme.dark': '夜間模式', 'theme.light': '日間模式'
    },
    ko: {
      'nav.latest': '최신 글', 'nav.archive': '아카이브', 'nav.guide': '해외 인터넷 가이드', 'nav.ielts': '시험 가이드', 'nav.about': '소개',
      'hero.eyebrow': '블로그 · 일상 기록', 'hero.title': '배운 것, 해낸 것을 천천히 기록하기.',
      'hero.subtitle': '여러 언어로 기록하기.',
      'hero.desc': 'Pikerty의 개인 블로그입니다. IELTS 준비, 워킹홀리데이 비자, 기술 실험, 여행 영상 — 완벽한 결과가 아니라 진짜 진행 과정을 기록합니다.',
      'hero.cta1': '읽기 시작', 'hero.cta2': '소개',
      'filter.all': '전체', 'filter.learning': '학습', 'filter.tech': '기술', 'filter.travel': '여행', 'filter.life': '생활',
      'featured.title': 'IELTS Day 4: 레스토랑 영어 — 식사 주문부터 시작하기',
      'featured.desc': '하루 20분. 4일차는 레스토랑 단어와 예약 대화. 단어장을 외우는 게 아니라 소리 내어 읽고 따라 말하기.',
      'latest.title': '최신 글', 'latest.sub': '최신순으로 보기.',
      'card.whv.title': '워킹홀리데이 비자, 어느 쪽? 호주 462 vs 뉴질랜드',
      'card.whv.desc': '언어, 저축, 신청 방법이 완전히 다릅니다. 호주는 추첨, 뉴질랜드는 선착순. 2026년은 양쪽 다 마감됐습니다.',
      'card.ai.title': 'AI 연애 파트너를 Render에 배포하기: 무료 경로는 통했지만, 막혔습니다',
      'card.ai.desc': 'Railway에서 Render로, Gemini에서 Groq + OpenRouter로. 배포는 성공했지만 채팅은 아직 안 됩니다. 무료 모델 키에서 막혔습니다.',
      'card.travel.title': '1인칭 미국 여행 영상: 비자 신청부터 시작',
      'card.travel.desc': '세 장면 완료: 비자 신청, 타임스퀘어, LAX. 스튜디오가 아닌 진짜 휴대폰 카메라 느낌을 원합니다.',
      'card.ielts.title': '왜 하루 20분만 영어를 연습할까',
      'card.ielts.desc': '목표는 IELTS 5.5. 오랫동안 영어를 공부하지 않았고 CET-4/6에도 떨어졌습니다. 그래서 매일 끝낼 수 있는 작은 목표부터 시작했습니다.',
      'card.guide.title': '해외 인터넷과 속어 가이드: 어디서 보고, 무슨 뜻인지',
      'card.guide.desc': 'X, Reddit, SpaceX, Hacker News… 먼저 어디서 볼지 알고, 사람들이 무슨 말을 하는지 이해하기.',
      'card.ielts-hub.title': '언어 시험 가이드: IELTS, PTE, TOEFL, 일본어, 한국어, 독일어, 스페인어, 프랑스어',
      'card.ielts-hub.desc': 'IELTS가 무엇인지, 어떻게 접수하는지, 목표별 필요 점수, 그리고 PTE, TOEFL, 일본어, 한국어, 독일어, 스페인어, 프랑스어.',
      'archive.title': '아카이브', 'archive.sub': '월별로 정리해 예전 글을 찾기 쉽게.',
      'about.title': 'Pikerty 소개',
      'about.desc': '청두원리대학, 빅데이터 관리 및 응용, 2026년 졸업. 데이터 분석 일을 찾으면서 IELTS 5.5를 준비하고 있습니다. 이 블로그는 배우고 실험한 과정을 기록합니다. 미래의 저를 위해.',
      'search.placeholder': '글 검색…', 'search.empty': '글을 찾을 수 없습니다. 다른 키워드로 시도해 보세요.', 'search.engines': '웹에서 검색:',
      'theme.dark': '다크 모드', 'theme.light': '라이트 모드'
    },
    fr: {
      'nav.latest': 'Derniers articles', 'nav.archive': 'Archives', 'nav.guide': 'Guide du web', 'nav.ielts': 'Guide des examens', 'nav.about': 'À propos',
      'hero.eyebrow': 'Blog · Notes quotidiennes', 'hero.title': "Note, petit à petit, ce que j'apprends et ce que je fais.",
      'hero.subtitle': 'Écris-le en plusieurs langues.',
      'hero.desc': "Voici le blog personnel de Pikerty : préparation à l'IELTS, visa vacances-travail, expériences techniques et vidéos de voyage. Du progrès réel, pas des résultats parfaits.",
      'hero.cta1': 'Commencer à lire', 'hero.cta2': 'À propos',
      'filter.all': 'Tout', 'filter.learning': 'Apprentissage', 'filter.tech': 'Tech', 'filter.travel': 'Voyage', 'filter.life': 'Vie',
      'featured.title': "IELTS Jour 4 : l'anglais au restaurant — commence par commander un repas",
      'featured.desc': "20 minutes par jour. Jour 4 : vocabulaire du restaurant et dialogue de réservation. Le lire à voix haute et le répéter, pas apprendre une liste par cœur.",
      'latest.title': 'Derniers articles', 'latest.sub': "Les plus récents d'abord.",
      'card.whv.title': 'Visa vacances-travail : Australie 462 ou Nouvelle-Zélande ?',
      'card.whv.desc': "Langue, épargne et candidature sont très différentes. L'Australie, c'est un tirage au sort ; la Nouvelle-Zélande, premier arrivé, premier servi. Les places 2026 sont déjà pleines.",
      'card.ai.title': 'Déployer AI Romance sur Render : la voie gratuite a marché — et s’est bloquée',
      'card.ai.desc': "De Railway à Render, de Gemini à Groq + OpenRouter. Le déploiement a réussi, mais le chat ne marche pas encore : il bloque sur la clé du modèle gratuit.",
      'card.travel.title': 'Vidéos de voyage aux États-Unis à la première personne : on commence par le visa',
      'card.travel.desc': "Trois scènes pour l'instant : le visa, Times Square et LAX. Je veux l'aspect d'une vraie caméra de téléphone, pas un rendu studio.",
      'card.ielts.title': 'Pourquoi je ne pratique l’anglais que 20 minutes par jour',
      'card.ielts.desc': "L'objectif est IELTS 5.5. Je n'ai pas étudié l'anglais depuis longtemps et j'ai raté le CET-4/6, alors j'ai commencé par un petit objectif quotidien que je peux vraiment tenir.",
      'card.guide.title': 'Guide du web étranger et de son argot : où regarder, ce que ça veut dire',
      'card.guide.desc': 'X, Reddit, SpaceX, Hacker News… d’abord savoir où regarder, puis comprendre ce que les gens disent.',
      'card.ielts-hub.title': 'Guide des examens de langues : IELTS, PTE, TOEFL, japonais, coréen, allemand, espagnol et français',
      'card.ielts-hub.desc': 'Ce qu’est l’IELTS, comment s’inscrire, quelle note pour chaque objectif, plus PTE, TOEFL, japonais, coréen, allemand, espagnol et français.',
      'archive.title': 'Archives', 'archive.sub': 'Par mois, pour retrouver les anciens articles.',
      'about.title': 'À propos de Pikerty',
      'about.desc': 'Université Chengdu Wenli, gestion et application du Big Data, promotion 2026. Je cherche un poste en analyse de données et je prépare l’IELTS 5.5. Ce blog consigne l’apprentissage et les expériences, surtout pour mon moi futur.',
      'search.placeholder': 'Rechercher un article…', 'search.empty': 'Aucun article trouvé. Essaie un autre mot-clé.', 'search.engines': 'Rechercher sur le web :',
      'theme.dark': 'Mode sombre', 'theme.light': 'Mode clair'
    },
    ru: {
      'nav.latest': 'Последние записи', 'nav.archive': 'Архив', 'nav.guide': 'Гид по интернету', 'nav.ielts': 'Гид по экзаменам', 'nav.about': 'Обо мне',
      'hero.eyebrow': 'Блог · Ежедневные заметки', 'hero.title': 'Записывай понемногу то, что учишь и делаешь.',
      'hero.subtitle': 'Записывай на разных языках.',
      'hero.desc': 'Это личный блог Pikerty: подготовка к IELTS, виза Working Holiday, технические эксперименты и видео о путешествиях. Настоящий прогресс, а не идеальный результат.',
      'hero.cta1': 'Начать чтение', 'hero.cta2': 'Обо мне',
      'filter.all': 'Все', 'filter.learning': 'Учёба', 'filter.tech': 'Технологии', 'filter.travel': 'Путешествия', 'filter.life': 'Жизнь',
      'featured.title': 'IELTS, день 4: английский в ресторане — начни с заказа еды',
      'featured.desc': '20 минут в день. День 4 — слова по теме ресторана и диалог бронирования столика. Читать вслух и повторять, а не зубрить список слов.',
      'latest.title': 'Последние записи', 'latest.sub': 'Сначала новые.',
      'card.whv.title': 'Working Holiday: Австралия 462 или Новая Зеландия?',
      'card.whv.desc': 'Язык, сбережения и способ подачи совсем разные. Австралия — лотерея, Новая Зеландия — кто раньше, тот и успел. Места на 2026 год уже заняты.',
      'card.ai.title': 'Развёртывание AI Romance на Render: бесплатный путь сработал — и застрял',
      'card.ai.desc': 'От Railway к Render, от Gemini к Groq + OpenRouter. Развёртывание удалось, но чат пока не работает: всё упирается в ключ бесплатной модели.',
      'card.travel.title': 'Видео о США от первого лица: начнём с визы',
      'card.travel.desc': 'Три сцены готовы: виза, Таймс-сквер и LAX. Хочу вид настоящей камеры телефона, а не студийную обработку.',
      'card.ielts.title': 'Почему я занимаюсь английским только 20 минут в день',
      'card.ielts.desc': 'Цель — IELTS 5.5. Я давно не учил английский и не сдал CET-4/6, поэтому начал с маленькой ежедневной цели, которую реально выполнить.',
      'card.guide.title': 'Гид по зарубежному интернету и его сленгу: где смотреть и что это значит',
      'card.guide.desc': 'X, Reddit, SpaceX, Hacker News… сначала узнай, где смотреть, а потом пойми, о чём говорят люди.',
      'card.ielts-hub.title': 'Гид по языковым экзаменам: IELTS, PTE, TOEFL, японский, корейский, немецкий, испанский и французский',
      'card.ielts-hub.desc': 'Что такое IELTS, как записаться, какой балл нужен для каждой цели, а также PTE, TOEFL, японский, корейский, немецкий, испанский и французский.',
      'archive.title': 'Архив', 'archive.sub': 'По месяцам, чтобы было легко найти старые записи.',
      'about.title': 'О Pikerty',
      'about.desc': 'Чэндуский университет Вэньли, управление и применение больших данных, выпуск 2026 года. Ищу работу в анализе данных и готовлюсь к IELTS 5.5. Этот блог — запись учёбы и экспериментов, в первую очередь для себя будущего.',
      'search.placeholder': 'Поиск записей…', 'search.empty': 'Ничего не найдено. Попробуйте другое слово.', 'search.engines': 'Поиск в интернете:',
      'theme.dark': 'Тёмная тема', 'theme.light': 'Светлая тема'
    },
    de: {
      'nav.latest': 'Neueste Beiträge', 'nav.archive': 'Archiv', 'nav.guide': 'Internet-Guide', 'nav.ielts': 'Prüfungs-Guide', 'nav.about': 'Über mich',
      'hero.eyebrow': 'Blog · Tägliche Notizen', 'hero.title': 'Schreib langsam auf, was du lernst und was du machst.',
      'hero.subtitle': 'Schreib es in vielen Sprachen auf.',
      'hero.desc': 'Das ist Pikertys persönlicher Blog: IELTS-Vorbereitung, Working-Holiday-Visum, Technik-Experimente und Reisevideos. Echter Fortschritt, keine perfekten Ergebnisse.',
      'hero.cta1': 'Lesen beginnen', 'hero.cta2': 'Über mich',
      'filter.all': 'Alle', 'filter.learning': 'Lernen', 'filter.tech': 'Technik', 'filter.travel': 'Reisen', 'filter.life': 'Leben',
      'featured.title': 'IELTS Tag 4: Restaurant-Englisch — fang mit einer Bestellung an',
      'featured.desc': '20 Minuten am Tag. Tag 4 war Restaurant-Vokabular und ein Reservierungsdialog. Laut lesen und nachsprechen, statt eine Liste auswendig zu lernen.',
      'latest.title': 'Neueste Beiträge', 'latest.sub': 'Neueste zuerst.',
      'card.whv.title': 'Working-Holiday-Visum: Australien 462 oder Neuseeland?',
      'card.whv.desc': 'Sprache, Ersparnisse und Bewerbung sind ganz unterschiedlich. Australien ist eine Verlosung, Neuseeland gilt nach dem Prinzip „wer zuerst kommt". Die Plätze für 2026 sind schon voll.',
      'card.ai.title': 'AI Romance auf Render deployen: Der kostenlose Weg hat funktioniert — und ist stecken geblieben',
      'card.ai.desc': 'Von Railway zu Render, von Gemini zu Groq + OpenRouter. Das Deployment hat geklappt, aber der Chat läuft noch nicht: Es hängt am Schlüssel für das kostenlose Modell.',
      'card.travel.title': 'USA-Reisevideos aus der Ich-Perspektive: Los geht’s mit dem Visum',
      'card.travel.desc': 'Drei Szenen bisher: Visum, Times Square und LAX. Ich will den Look einer echten Handykamera, kein Studio-Finish.',
      'card.ielts.title': 'Warum ich nur 20 Minuten am Tag Englisch übe',
      'card.ielts.desc': 'Das Ziel ist IELTS 5.5. Ich habe lange kein Englisch gelernt und CET-4/6 nicht bestanden, also habe ich mit einem kleinen täglichen Ziel angefangen, das ich wirklich schaffen kann.',
      'card.guide.title': 'Guide zum ausländischen Internet und seinem Slang: Wo man hinschaut, was es bedeutet',
      'card.guide.desc': 'X, Reddit, SpaceX, Hacker News… erst wissen, wo man hinschaut, dann verstehen, was die Leute sagen.',
      'card.ielts-hub.title': 'Sprachprüfungs-Guide: IELTS, PTE, TOEFL, Japanisch, Koreanisch, Deutsch, Spanisch & Französisch',
      'card.ielts-hub.desc': 'Was IELTS ist, wie man sich anmeldet, welche Punktzahl jedes Ziel braucht — plus PTE, TOEFL, Japanisch, Koreanisch, Deutsch, Spanisch und Französisch.',
      'archive.title': 'Archiv', 'archive.sub': 'Nach Monaten geordnet, damit ältere Beiträge leicht zu finden sind.',
      'about.title': 'Über Pikerty',
      'about.desc': 'Chengdu Wenli College, Big-Data-Management und -Anwendung, Abschluss 2026. Ich suche eine Stelle in der Datenanalyse und bereite mich auf IELTS 5.5 vor. Dieser Blog hält Lernen und Experimente fest — vor allem für mein zukünftiges Ich.',
      'search.placeholder': 'Beiträge suchen…', 'search.empty': 'Keine Beiträge gefunden. Versuch ein anderes Stichwort.', 'search.engines': 'Im Web suchen:',
      'theme.dark': 'Dunkelmodus', 'theme.light': 'Hellmodus'
    }
  };
  var currentLang = 'zh';
  try { currentLang = localStorage.getItem('pikerty-lang') || 'zh'; } catch (e) {}
  if (!I18N[currentLang]) currentLang = 'zh';
  function langMeta(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i];
    return LANGS[0];
  }
  function t(key) {
    var d = I18N[currentLang] || I18N.zh;
    return d[key] || I18N.zh[key] || '';
  }
  function applyLang(lang) {
    currentLang = I18N[lang] ? lang : 'zh';
    document.documentElement.lang = langMeta(currentLang).htmlLang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    var inp = document.getElementById('searchInput');
    if (inp) inp.placeholder = t('search.placeholder');
    document.querySelectorAll('.lang-option').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
      var check = b.querySelector('.check');
      if (check) check.textContent = b.getAttribute('data-lang') === currentLang ? '✓' : '';
    });
    updateThemeBtn();
    try { localStorage.setItem('pikerty-lang', currentLang); } catch (e) {}
  }
  // Language dropdown (globe icon)
  var langBtn = document.getElementById('langBtn');
  var langDropdown = document.getElementById('langDropdown');
  function setLangMenu(open) {
    if (langDropdown) langDropdown.hidden = !open;
  }
  if (langBtn) langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    setLangMenu(!langDropdown || langDropdown.hidden);
  });
  document.querySelectorAll('.lang-option').forEach(function (b) {
    b.addEventListener('click', function () {
      applyLang(b.getAttribute('data-lang'));
      setLangMenu(false);
    });
  });
  document.addEventListener('click', function () { setLangMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setLangMenu(false);
  });

  // --- Dark mode: saved choice wins, otherwise follow the system ---
  var themeBtn = document.getElementById('themeBtn');
  function updateThemeBtn() {
    if (!themeBtn) return;
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeBtn.textContent = dark ? t('theme.light') : t('theme.dark');
  }
  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.classList.add('theme-anim');
    clearTimeout(setTheme._timer);
    setTheme._timer = setTimeout(function () {
      document.documentElement.classList.remove('theme-anim');
    }, 650);
    try { localStorage.setItem('pikerty-theme', mode); } catch (e) {}
    updateThemeBtn();
  }
  var savedTheme = null;
  try { savedTheme = localStorage.getItem('pikerty-theme'); } catch (e) {}
  if (!savedTheme) {
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  setTheme(savedTheme);
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
  applyLang(currentLang);

  // --- Top search: magnifier in the nav opens a panel under it ---
  var searchToggle = document.getElementById('searchToggle');
  var searchPanel = document.getElementById('searchPanel');
  var searchClose = document.getElementById('searchClose');
  function setSearch(open) {
    if (!searchPanel) return;
    searchPanel.hidden = !open;
    if (open) {
      var inp2 = document.getElementById('searchInput');
      if (inp2) inp2.focus();
    }
  }
  if (searchToggle) searchToggle.addEventListener('click', function () {
    setSearch(!searchPanel || searchPanel.hidden);
  });
  if (searchClose) searchClose.addEventListener('click', function () { setSearch(false); });
  // External search engines: type a keyword, tap an engine, open its results in a new tab
  var ENGINES = {
    google: 'https://www.google.com/search?q=',
    bing: 'https://www.bing.com/search?q=',
    baidu: 'https://www.baidu.com/s?wd=',
    sohu: 'https://search.sohu.com/?keyword='
  };
  document.querySelectorAll('.engine-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var q = searchInput ? searchInput.value.trim() : '';
      var base2 = ENGINES[b.getAttribute('data-engine')] || ENGINES.google;
      window.open(q ? base2 + encodeURIComponent(q) : base2.replace(/[^/]+$/, ''), '_blank', 'noopener');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setSearch(false);
  });

  // --- Search + category filter (homepage) ---
  var searchInput = document.getElementById('searchInput');
  var searchEmpty = document.getElementById('searchEmpty');
  var chips = document.querySelectorAll('#filters .chip');
  var cards = document.querySelectorAll('[data-cat]');
  var activeFilter = 'all';
  function applyFilters() {
    var q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var visible = 0;
    cards.forEach(function (card) {
      var catOk = activeFilter === 'all' || card.getAttribute('data-cat') === activeFilter;
      var textOk = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
      var show = catOk && textOk;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    var featured = document.querySelector('.featured');
    if (featured) {
      var fOk = (activeFilter === 'all' || featured.getAttribute('data-cat') === activeFilter) &&
        (!q || featured.textContent.toLowerCase().indexOf(q) !== -1);
      featured.style.display = fOk ? '' : 'none';
      if (fOk) visible++;
    }
    if (searchEmpty) searchEmpty.hidden = visible !== 0;
  }
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter');
      applyFilters();
    });
  });

  // --- Scroll reveal (Apple style): 1s slow ease-out, systematic stagger ---
  var revealEls = document.querySelectorAll('.featured, .card, .about, .archive, .section-title, .section-sub, .article h2, .article p, .article ul, .article .note');
  revealEls.forEach(function (el) {
    el.classList.add('reveal');
    var siblings = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('reveal') || c === el; }) : [];
    var idx = siblings.indexOf(el);
    el.setAttribute('data-delay', String(Math.max(0, Math.min(3, idx))));
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // --- Reading progress + hero parallax, smoothed with requestAnimationFrame ---
  var bar = document.getElementById('progressBar');
  var toTop = document.getElementById('toTop');
  var hero = document.querySelector('.hero');
  var targetY = window.scrollY || 0, smoothY = targetY, rafId = null;
  function tick() {
    rafId = null;
    smoothY += (targetY - smoothY) * 0.14;
    if (Math.abs(targetY - smoothY) < 0.1) smoothY = targetY;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.max(0, Math.min(1, smoothY / max)) : 0) + ')';
    if (toTop) toTop.classList.toggle('show', smoothY > 600);
    if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var prog = Math.max(0, Math.min(1, smoothY / Math.max(1, hero.offsetHeight)));
      hero.style.transform = 'translate3d(0,' + (prog * 48).toFixed(1) + 'px,0) scale(' + (1 - prog * 0.05).toFixed(3) + ')';
      hero.style.opacity = String((1 - prog * 0.55).toFixed(3));
    }
    if (smoothY !== targetY) rafId = requestAnimationFrame(tick);
  }
  function onScroll() {
    targetY = window.scrollY || 0;
    if (!rafId) rafId = requestAnimationFrame(tick);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Share / copy link (article pages) ---
  document.querySelectorAll('[data-copy-link]').forEach(function (b) {
    b.addEventListener('click', function () {
      var done = function () { b.textContent = '已复制 ✓'; setTimeout(function () { b.textContent = '复制链接'; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(location.href).then(done, done);
      } else { done(); }
    });
  });
  document.querySelectorAll('.share-row a').forEach(function (a) {
    var u = encodeURIComponent(location.href);
    var ti = encodeURIComponent(document.title);
    if (a.href.indexOf('x.com/intent/tweet') !== -1) a.href = 'https://x.com/intent/tweet?text=' + ti + '&url=' + u;
    if (a.href.indexOf('t.me/share/url') !== -1) a.href = 'https://t.me/share/url?url=' + u + '&text=' + ti;
  });

  // --- Page transition: fade out gently, then navigate (internal links only) ---
  document.querySelectorAll('a[href]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || a.target === '_blank') return;
      if (a.hostname && a.hostname !== location.hostname) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(function () { location.href = href; }, 450);
    });
  });
})();
