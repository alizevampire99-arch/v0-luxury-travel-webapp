export interface Destination {
  id: string
  title: string
  era: string
  shortDescription: string
  fullDescription: string
  atmosphere: string
  dangerLevel: 1 | 2 | 3 | 4 | 5
  experienceType: string
  duration: string
  image: string
  highlights: {
    title: string
    description: string
    image: string
  }[]
  practicalAdvice: {
    climate: string
    language: string
    customs: string
    risks: string
  }
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris, 1889",
    era: "Belle \u00c9poque",
    shortDescription: "Assistez au d\u00e9voilement de la Tour Eiffel lors de l\u2019Exposition universelle. Une \u00e8re d\u2019\u00e9l\u00e9gance, d\u2019innovation et de r\u00e9volution artistique.",
    fullDescription: "Plongez dans la splendeur de l\u2019Exposition universelle. La Tour Eiffel s\u2019\u00e9l\u00e8ve dans un ciel parisien baign\u00e9 par la lumi\u00e8re dor\u00e9e des r\u00e9verb\u00e8res \u00e0 gaz. Artistes, inventeurs et r\u00eaveurs emplissent les boulevards. L\u2019air vibre de la promesse d\u2019un nouveau si\u00e8cle. Des caf\u00e9s de Montmartre aux berges de la Seine, vivez le battement de c\u0153ur de la Belle \u00c9poque \u00e0 son apog\u00e9e.",
    atmosphere: "Boulevards \u00e9l\u00e9gants, romance aux lumi\u00e8res \u00e0 gaz, r\u00e9volution artistique",
    dangerLevel: 2,
    experienceType: "Immersion culturelle",
    duration: "3-5 jours",
    image: "/images/paris-1889.jpg",
    highlights: [
      {
        title: "Inauguration de la Tour Eiffel",
        description: "Tenez-vous au pied de la Tour tandis que Gustave Eiffel lui-m\u00eame d\u00e9ploie le drapeau fran\u00e7ais au sommet.",
        image: "/images/paris-eiffel.jpg",
      },
      {
        title: "Montmartre de nuit",
        description: "Partagez une absinthe avec Toulouse-Lautrec au Moulin Rouge, l\u2019ann\u00e9e de son inauguration.",
        image: "/images/paris-montmartre.jpg",
      },
      {
        title: "L\u2019Exposition universelle",
        description: "\u00c9merveillez-vous devant la Galerie des Machines et les inventions qui transformeront le monde.",
        image: "/images/paris-expo.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Temps printanier doux, 12-18\u00b0C. Pr\u00e9voyez des v\u00eatements \u00e9l\u00e9gants et superpos\u00e9s adapt\u00e9s \u00e0 l\u2019\u00e9poque.",
      language: "Fran\u00e7ais. Notre traducteur neuronal g\u00e8re le dialecte parisien de l\u2019\u00e9poque.",
      customs: "Salutations formelles indispensables. Le pourboire dans les caf\u00e9s est de rigueur. Tenue de soir\u00e9e requise pour les salons.",
      risks: "Faible. \u00c9vitez les d\u00e9bats politiques sur l\u2019Affaire Dreyfus. Restez \u00e0 l\u2019\u00e9cart des d\u00e9monstrations de machines industrielles.",
    },
  },
  {
    id: "cretaceous-65m",
    title: "Cr\u00e9tac\u00e9, -65M",
    era: "Cr\u00e9tac\u00e9 sup\u00e9rieur",
    shortDescription: "Marchez parmi les derniers dinosaures avant la grande extinction. Brut, primitif et absolument \u00e0 couper le souffle.",
    fullDescription: "Le monde avant l\u2019humanit\u00e9. D\u2019immenses foug\u00e8res projettent leurs ombres sur un paysage o\u00f9 le Tyrannosaurus Rex r\u00e8gne en ma\u00eetre. La cendre volcanique teinte le coucher de soleil de pourpre. Des Pt\u00e9ranodons planent au-dessus de mers peu profondes grouillantes de vie. C\u2019est la Terre \u00e0 son \u00e9tat le plus brut et le plus magnifique \u2014 un monde d\u2019une beaut\u00e9 terrifiante qui existait 65 millions d\u2019ann\u00e9es avant votre premier souffle. Nos d\u00f4mes d\u2019observation bio-prot\u00e9g\u00e9s vous permettent de contempler cette majest\u00e9 en toute s\u00e9curit\u00e9.",
    atmosphere: "Nature sauvage primordiale, couchers de soleil volcaniques, \u00e9merveillement indompt\u00e9",
    dangerLevel: 5,
    experienceType: "Aventure extr\u00eame",
    duration: "1-2 jours",
    image: "/images/cretaceous.jpg",
    highlights: [
      {
        title: "Territoire du T-Rex",
        description: "Observez le pr\u00e9dateur supr\u00eame dans son habitat naturel depuis notre plateforme d\u2019observation camoufl\u00e9e.",
        image: "/images/cretaceous-trex.jpg",
      },
      {
        title: "C\u00f4te des Pt\u00e9ranodons",
        description: "Admirez des reptiles volants d\u2019une envergure de 7 m\u00e8tres plonger dans la mer int\u00e9rieure de l\u2019Ouest.",
        image: "/images/cretaceous-pteranodon.jpg",
      },
      {
        title: "Cr\u00e9puscule volcanique",
        description: "Contemplez les Trapps du Deccan peignant le ciel de nuances impossibles de pourpre et d\u2019or.",
        image: "/images/cretaceous-volcano.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Chaud et humide, 25-35\u00b0C. Taux d\u2019oxyg\u00e8ne sup\u00e9rieur \u00e0 l\u2019\u00e8re moderne. Les combinaisons fournies r\u00e9gulent l\u2019atmosph\u00e8re.",
      language: "N/A. Communication par radio d\u2019\u00e9quipe uniquement.",
      customs: "Protocoles d\u2019observation stricts. Aucun contact biologique. Restez dans les zones d\u00e9sign\u00e9es en permanence.",
      risks: "Extr\u00eame. Multiples pr\u00e9dateurs. Activit\u00e9 volcanique. Bouclier biologique obligatoire en permanence. Extraction d\u2019urgence garantie en 30 secondes.",
    },
  },
  {
    id: "florence-1504",
    title: "Florence, 1504",
    era: "Haute Renaissance",
    shortDescription: "Tenez-vous devant le David de Michel-Ange le jour de son d\u00e9voilement. La Renaissance \u00e0 son apog\u00e9e absolue.",
    fullDescription: "L\u2019\u00e2ge d\u2019or de la cr\u00e9ativit\u00e9 humaine se d\u00e9ploie sous vos yeux. Arpentez les rues pav\u00e9es o\u00f9 L\u00e9onard de Vinci et Michel-Ange rivalisent pour des commandes. L\u2019odeur de la poussi\u00e8re de marbre et de la peinture \u00e0 l\u2019huile emplit les ateliers. La cour des M\u00e9dicis bouillonne d\u2019intrigues et de m\u00e9c\u00e9nat. C\u2019est Florence au sommet de la Renaissance \u2014 l\u00e0 o\u00f9 l\u2019art, la science et l\u2019ambition convergent pour red\u00e9finir ce que signifie \u00eatre humain.",
    atmosphere: "G\u00e9nie artistique, ateliers de marbre, grandeur des M\u00e9dicis",
    dangerLevel: 3,
    experienceType: "Culturel & Artistique",
    duration: "4-7 jours",
    image: "/images/florence-1504.jpg",
    highlights: [
      {
        title: "D\u00e9voilement du David",
        description: "Soyez pr\u00e9sent lorsque le chef-d\u2019\u0153uvre de Michel-Ange est r\u00e9v\u00e9l\u00e9 sur la Piazza della Signoria.",
        image: "/images/florence-david.jpg",
      },
      {
        title: "Atelier de L\u00e9onard",
        description: "Observez le ma\u00eetre travailler sur ses croquis de machine volante dans son atelier priv\u00e9.",
        image: "/images/florence-leonardo.jpg",
      },
      {
        title: "D\u00eener \u00e0 la Cour des M\u00e9dicis",
        description: "D\u00eenez en tant qu\u2019invit\u00e9 de la puissante famille M\u00e9dicis au Palazzo Vecchio.",
        image: "/images/florence-medici.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Chaleur m\u00e9diterran\u00e9enne, 20-28\u00b0C. V\u00eatements d\u2019\u00e9poque fournis dans notre chambre de pr\u00e9paration.",
      language: "Italien florentin. Traducteur neuronal calibr\u00e9 sur le dialecte toscan et les expressions de la Renaissance.",
      customs: "Inclinez-vous devant la noblesse. Les conversations sur le m\u00e9c\u00e9nat artistique sont une monnaie sociale. \u00c9vitez les controverses religieuses.",
      risks: "Mod\u00e9r\u00e9. Les rivalit\u00e9s politiques entre familles peuvent \u00eatre volatiles. \u00c9pid\u00e9mies de peste possibles dans les environs. Notre nano-bouclier m\u00e9dical offre une protection compl\u00e8te.",
    },
  },
  {
    id: "egypt-2560bc",
    title: "Egypt, 2560 av. J.-C.",
    era: "Ancien Empire",
    shortDescription: "Assistez \u00e0 l\u2019ach\u00e8vement de la Grande Pyramide de Gizeh. Soyez t\u00e9moin de l\u2019une des plus grandes r\u00e9alisations de l\u2019humanit\u00e9.",
    fullDescription: "Le soleil du d\u00e9sert flamboie sur Gizeh tandis que des milliers d\u2019ouvriers ach\u00e8vent la Grande Pyramide. Les pierres de rev\u00eatement en calcaire resplendissent de blancheur sous un ciel d\u2019un bleu impossiblement pur. Le monument du Pharaon Kh\u00e9ops n\u2019est pas la ruine \u00e9rod\u00e9e que vous connaissez \u2014 c\u2019est une merveille immacul\u00e9e et \u00e9tincelante qui domine l\u2019horizon. Les crues du Nil apportent la prosp\u00e9rit\u00e9, et l\u2019air r\u00e9sonne des chants de la civilisation la plus sophistiqu\u00e9e du monde \u00e0 son apog\u00e9e.",
    atmosphere: "\u00c9chelle monumentale, mystique d\u00e9sertique, grandeur sacr\u00e9e",
    dangerLevel: 3,
    experienceType: "Merveille historique",
    duration: "3-5 jours",
    image: "/images/egypt-2560.jpg",
    highlights: [
      {
        title: "C\u00e9r\u00e9monie d\u2019ach\u00e8vement de la Pyramide",
        description: "Assistez \u00e0 la pose du pyramidion dor\u00e9 au sommet de la Grande Pyramide lors d\u2019une c\u00e9r\u00e9monie sacr\u00e9e.",
        image: "/images/egypt-pyramid.jpg",
      },
      {
        title: "Croisi\u00e8re au coucher de soleil sur le Nil",
        description: "Naviguez sur le Nil antique \u00e0 bord d\u2019une barque royale tandis que les pyramides brillent d\u2019ambre au loin.",
        image: "/images/egypt-nile.jpg",
      },
      {
        title: "Temple du Sphinx",
        description: "Contemplez le Sphinx dans sa gloire originelle peinte \u2014 un spectacle qu\u2019aucun humain moderne n\u2019a jamais vu.",
        image: "/images/egypt-sphinx.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Extr\u00eamement chaud et aride, 35-45\u00b0C. Combinaisons d\u2019hydratation obligatoires. Protection UV fournie.",
      language: "\u00c9gyptien ancien. Le traducteur neuronal prend en charge les formes de discours hi\u00e9ratique.",
      customs: "La r\u00e9v\u00e9rence envers le Pharaon est absolue. Retirez vos sandales dans les espaces sacr\u00e9s. Les offrandes sont attendues dans les temples.",
      risks: "Mod\u00e9r\u00e9. L\u2019exposition \u00e0 la chaleur est le danger principal. Zones de construction restreintes. Respectez les zones sacr\u00e9es pour \u00e9viter toute confrontation avec les gardes du temple.",
    },
  },
  {
    id: "tokyo-2099",
    title: "Tokyo, 2099",
    era: "N\u00e9o-Futur",
    shortDescription: "D\u00e9couvrez la m\u00e9gapole n\u00e9on de demain. Un aper\u00e7u de l\u2019\u00e9blouissant avenir de l\u2019humanit\u00e9.",
    fullDescription: "La ligne d\u2019horizon d\u00e9fie la gravit\u00e9. Des jardins verticaux cascadent le long de tours hautes d\u2019un kilom\u00e8tre. Des ko\u00ef holographiques nagent dans les airs au-dessus d\u2019anciens sanctuaires shinto\u00efstes pr\u00e9serv\u00e9s dans des champs de stase d\u2019ambre. Des capsules maglev se faufilent silencieusement entre les b\u00e2timents tandis que la ville pulse en harmonie entre tradition et hyper-technologie. Tokyo 2099 n\u2019est pas une dystopie \u2014 c\u2019est la plus grande r\u00e9ussite de l\u2019humanit\u00e9, une ville o\u00f9 la nature et la technologie ont enfin appris \u00e0 danser ensemble.",
    atmosphere: "\u00c9merveillement n\u00e9on, futurisme harmonieux, technologie sacr\u00e9e",
    dangerLevel: 1,
    experienceType: "Tourisme du futur",
    duration: "2-4 jours",
    image: "/images/tokyo-2099.jpg",
    highlights: [
      {
        title: "Quartier des Jardins C\u00e9lestes",
        description: "Promenez-vous dans des jardins botaniques flottants \u00e0 500 m\u00e8tres au-dessus de l\u2019ancien carrefour de Shibuya.",
        image: "/images/tokyo-garden.jpg",
      },
      {
        title: "Exp\u00e9rience Onsen Neuronal",
        description: "Immergez-vous dans des sources chaudes traditionnelles enrichies de nanobrume \u00e9largissant la conscience.",
        image: "/images/tokyo-onsen.jpg",
      },
      {
        title: "Kabuki Holographique",
        description: "Assistez \u00e0 un spectacle o\u00f9 IA et acteurs humains cr\u00e9ent un art au-del\u00e0 de l\u2019imagination.",
        image: "/images/tokyo-kabuki.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Ville sous d\u00f4me climatis\u00e9, 22\u00b0C en permanence. V\u00eatements l\u00e9gers suffisants.",
      language: "Traducteur universel standard en 2099. Les expressions culturelles japonaises sont appr\u00e9ci\u00e9es.",
      customs: "La r\u00e9v\u00e9rence reste de rigueur. Les protocoles d\u2019\u00e9tiquette neuronale vous guideront. Respectez les zones de m\u00e9ditation.",
      risks: "Tr\u00e8s faible. Destination la plus s\u00fbre de notre catalogue. L\u00e9g\u00e8re d\u00e9sorientation temporelle possible due au choc du futur. Accompagnement disponible.",
    },
  },
  {
    id: "viking-793",
    title: "Scandinavia, 793 ap. J.-C.",
    era: "Aube de l\u2019\u00c8re Viking",
    shortDescription: "Naviguez aux c\u00f4t\u00e9s des guerriers nordiques \u00e0 l\u2019aube de l\u2019\u00e8re Viking. Feu, glace et saga devenus r\u00e9alit\u00e9.",
    fullDescription: "Des drakkars fendent les fjords glac\u00e9s sous la lueur \u00e9th\u00e9r\u00e9e des aurores bor\u00e9ales. La grande salle du Jarl Sigurd r\u00e9sonne de chants d\u00e9di\u00e9s \u00e0 Odin et Thor. Les guerriers aiguisent leurs haches non pour la guerre, mais pour le grand voyage vers l\u2019ouest \u2014 la premi\u00e8re exp\u00e9dition viking qui remodelera l\u2019Europe \u00e0 jamais. Vivez la beaut\u00e9 brute de la culture nordique avant que le monde n\u2019apprenne \u00e0 la craindre et \u00e0 l\u2019admirer en \u00e9gale mesure.",
    atmosphere: "Brumes des fjords, aurores bor\u00e9ales, honneur guerrier",
    dangerLevel: 4,
    experienceType: "Aventure & Culture",
    duration: "3-5 jours",
    image: "/images/viking-793.jpg",
    highlights: [
      {
        title: "Mise \u00e0 l\u2019eau du Drakkar",
        description: "Aidez \u00e0 pousser un drakkar fra\u00eechement construit dans les eaux du fjord pour son voyage inaugural.",
        image: "/images/viking-longship.jpg",
      },
      {
        title: "Festin de la Grande Salle",
        description: "Participez \u00e0 un festin viking avec hydromel, r\u00e9cits et rituels nordiques ancestraux.",
        image: "/images/viking-feast.jpg",
      },
      {
        title: "C\u00e9r\u00e9monie des Aurores",
        description: "Assistez \u00e0 une c\u00e9r\u00e9monie sacr\u00e9e sous les aurores bor\u00e9ales au sommet d\u2019une falaise.",
        image: "/images/viking-aurora.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Froid et rude, -5 \u00e0 10\u00b0C. V\u00eatements thermo-adaptatifs fournis. Pr\u00e9parez-vous \u00e0 la pluie et aux embruns.",
      language: "Vieux norrois. Traducteur neuronal calibr\u00e9 pour les dialectes r\u00e9gionaux et les formes po\u00e9tiques kenning.",
      customs: "L\u2019hospitalit\u00e9 est sacr\u00e9e. Acceptez toute nourriture offerte. Prouvez votre valeur par les r\u00e9cits, non par le combat.",
      risks: "\u00c9lev\u00e9. Conditions maritimes dangereuses. Rencontres avec la faune possibles. Les tensions inter-clans n\u00e9cessitent une conscience diplomatique. Escorte arm\u00e9e fournie.",
    },
  },
]
