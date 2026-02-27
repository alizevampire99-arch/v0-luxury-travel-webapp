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
    era: "Belle Epoque",
    shortDescription: "Witness the unveiling of the Eiffel Tower at the World's Fair. An era of elegance, innovation, and artistic revolution.",
    fullDescription: "Step into the grandeur of the Universal Exposition. The Eiffel Tower rises against a Parisian sky painted with the golden light of gas lamps. Artists, inventors, and dreamers fill the boulevards. The air buzzes with the promise of a new century. From Montmartre cafes to the banks of the Seine, experience the heartbeat of the Belle Epoque at its most magnificent moment.",
    atmosphere: "Elegant boulevards, gaslit romance, artistic revolution",
    dangerLevel: 2,
    experienceType: "Cultural Immersion",
    duration: "3-5 days",
    image: "/images/paris-1889.jpg",
    highlights: [
      {
        title: "Eiffel Tower Inauguration",
        description: "Stand at the base as Gustave Eiffel himself unfurls the French flag at the summit.",
        image: "/images/paris-eiffel.jpg",
      },
      {
        title: "Montmartre by Night",
        description: "Share absinthe with Toulouse-Lautrec at the Moulin Rouge in its inaugural year.",
        image: "/images/paris-montmartre.jpg",
      },
      {
        title: "The Universal Exposition",
        description: "Marvel at the Gallery of Machines and inventions that will reshape the world.",
        image: "/images/paris-expo.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Mild spring weather, 12-18C. Pack elegant layered clothing appropriate to the era.",
      language: "French. Our neural translator handles period-appropriate Parisian dialect.",
      customs: "Formal greetings essential. Tipping at cafes is expected. Evening attire required for salons.",
      risks: "Low. Avoid political debates about the Dreyfus Affair. Stay clear of industrial machinery demonstrations.",
    },
  },
  {
    id: "cretaceous-65m",
    title: "Cretaceous, -65M",
    era: "Late Cretaceous Period",
    shortDescription: "Walk among the last dinosaurs before the great extinction. Raw, primal, and utterly breathtaking.",
    fullDescription: "The world before humanity. Towering ferns cast shadows over a landscape where Tyrannosaurus Rex rules supreme. Volcanic ash tinges the sunset crimson. Pteranodons soar above shallow seas teeming with life. This is Earth at its most raw and magnificent -- a world of terrifying beauty that existed 65 million years before your first breath. Our bio-shielded observation domes let you witness the majesty in complete safety.",
    atmosphere: "Primal wilderness, volcanic sunsets, untamed wonder",
    dangerLevel: 5,
    experienceType: "Extreme Adventure",
    duration: "1-2 days",
    image: "/images/cretaceous.jpg",
    highlights: [
      {
        title: "T-Rex Territory",
        description: "Observe the apex predator in its natural habitat from our cloaked observation platform.",
        image: "/images/cretaceous-trex.jpg",
      },
      {
        title: "Pteranodon Coast",
        description: "Watch flying reptiles with 7-meter wingspans dive into the Western Interior Seaway.",
        image: "/images/cretaceous-pteranodon.jpg",
      },
      {
        title: "Volcanic Twilight",
        description: "Witness the Deccan Traps painting the sky in impossible shades of crimson and gold.",
        image: "/images/cretaceous-volcano.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Hot and humid, 25-35C. Oxygen levels higher than modern era. Provided suits regulate atmosphere.",
      language: "N/A. Communication via team radio only.",
      customs: "Strict observation protocols. No biological contact. Stay within designated zones at all times.",
      risks: "Extreme. Multiple apex predators. Volcanic activity. Mandatory bio-shield at all times. Emergency extraction guaranteed within 30 seconds.",
    },
  },
  {
    id: "florence-1504",
    title: "Florence, 1504",
    era: "High Renaissance",
    shortDescription: "Stand before Michelangelo's David on its first day. The Renaissance at its absolute peak.",
    fullDescription: "The golden age of human creativity unfolds before you. Walk the cobblestone streets where Leonardo da Vinci and Michelangelo compete for commissions. The scent of marble dust and oil paint fills the workshops. The Medici court buzzes with intrigue and patronage. This is Florence at the pinnacle of the Renaissance -- where art, science, and ambition converge to redefine what it means to be human.",
    atmosphere: "Artistic genius, marble workshops, Medici grandeur",
    dangerLevel: 3,
    experienceType: "Cultural & Artistic",
    duration: "4-7 days",
    image: "/images/florence-1504.jpg",
    highlights: [
      {
        title: "David Unveiled",
        description: "Be present as Michelangelo's masterpiece is revealed in the Piazza della Signoria.",
        image: "/images/florence-david.jpg",
      },
      {
        title: "Leonardo's Workshop",
        description: "Observe the master at work on his flying machine sketches in his private studio.",
        image: "/images/florence-leonardo.jpg",
      },
      {
        title: "Medici Court Dinner",
        description: "Dine as a guest of the powerful Medici family in the Palazzo Vecchio.",
        image: "/images/florence-medici.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Mediterranean warmth, 20-28C. Period-appropriate clothing provided in our preparation chamber.",
      language: "Florentine Italian. Neural translator calibrated to Tuscan dialect and Renaissance idioms.",
      customs: "Bow to nobility. Art patronage conversations are social currency. Avoid religious controversy.",
      risks: "Moderate. Political rivalries between families can be volatile. Plague outbreaks possible in surrounding areas. Our medical nano-shield provides full protection.",
    },
  },
  {
    id: "egypt-2560bc",
    title: "Egypt, 2560 BC",
    era: "Old Kingdom",
    shortDescription: "Watch the Great Pyramid of Giza reach completion. Witness one of humanity's greatest achievements.",
    fullDescription: "The desert sun blazes over Giza as thousands of workers put the finishing touches on the Great Pyramid. The limestone casing stones gleam white against an impossibly blue sky. Pharaoh Khufu's monument is not the weathered ruin you know -- it is a pristine, gleaming wonder that dominates the horizon. The Nile floods bring prosperity, and the air resonates with the chants of the world's most sophisticated civilization at its zenith.",
    atmosphere: "Monumental scale, desert mystique, sacred grandeur",
    dangerLevel: 3,
    experienceType: "Historical Wonder",
    duration: "3-5 days",
    image: "/images/egypt-2560.jpg",
    highlights: [
      {
        title: "Pyramid Completion Ceremony",
        description: "Watch as the golden capstone is placed atop the Great Pyramid in a sacred ceremony.",
        image: "/images/egypt-pyramid.jpg",
      },
      {
        title: "Nile Sunset Cruise",
        description: "Sail the ancient Nile on a royal barge as the pyramids glow amber in the distance.",
        image: "/images/egypt-nile.jpg",
      },
      {
        title: "Temple of the Sphinx",
        description: "Witness the Sphinx in its original painted glory -- a sight no modern human has ever seen.",
        image: "/images/egypt-sphinx.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Extremely hot and arid, 35-45C. Hydration suits mandatory. UV protection provided.",
      language: "Old Egyptian. Neural translator supports hieratic speech patterns.",
      customs: "Reverence for Pharaoh is absolute. Remove sandals in sacred spaces. Offerings expected at temples.",
      risks: "Moderate. Heat exposure is primary danger. Construction zones restricted. Respect sacred areas to avoid confrontation with temple guards.",
    },
  },
  {
    id: "tokyo-2099",
    title: "Tokyo, 2099",
    era: "Neo-Future",
    shortDescription: "Experience the neon-lit megacity of tomorrow. A glimpse into humanity's dazzling future.",
    fullDescription: "The skyline defies gravity. Vertical gardens cascade down kilometer-high towers. Holographic koi swim through the air above ancient Shinto shrines preserved in amber stasis fields. Maglev pods weave silently between buildings as the city pulses with a harmony of tradition and hyper-technology. Tokyo 2099 is not dystopia -- it is humanity's greatest achievement, a city where nature and technology have finally learned to dance together.",
    atmosphere: "Neon-lit wonder, harmonic futurism, sacred technology",
    dangerLevel: 1,
    experienceType: "Future Tourism",
    duration: "2-4 days",
    image: "/images/tokyo-2099.jpg",
    highlights: [
      {
        title: "Sky Garden District",
        description: "Walk through floating botanical gardens 500 meters above the ancient Shibuya crossing.",
        image: "/images/tokyo-garden.jpg",
      },
      {
        title: "Neural Onsen Experience",
        description: "Immerse in traditional hot springs enhanced with consciousness-expanding nanomist.",
        image: "/images/tokyo-onsen.jpg",
      },
      {
        title: "Holographic Kabuki",
        description: "Witness a performance where AI and human actors create art beyond imagination.",
        image: "/images/tokyo-kabuki.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Climate-controlled city dome, perpetual 22C. Light clothing sufficient.",
      language: "Universal translator standard in 2099. Japanese cultural phrases appreciated.",
      customs: "Bowing still customary. Neural etiquette protocols will guide you. Respect meditation zones.",
      risks: "Very Low. Safest destination in our catalog. Minor temporal disorientation possible from future-shock. Counseling available.",
    },
  },
  {
    id: "viking-793",
    title: "Scandinavia, 793 AD",
    era: "Viking Age Dawn",
    shortDescription: "Sail with Norse warriors on the eve of the Viking Age. Fire, ice, and saga made real.",
    fullDescription: "Longships cut through icy fjords under the ethereal glow of the Northern Lights. The great hall of Jarl Sigurd rings with songs of Odin and Thor. Warriors sharpen their axes not for war, but for the great journey west -- the first Viking expedition that will reshape Europe forever. Experience the raw beauty of Norse culture before the world learns to fear and admire it in equal measure.",
    atmosphere: "Fjord mists, aurora borealis, warrior honor",
    dangerLevel: 4,
    experienceType: "Adventure & Culture",
    duration: "3-5 days",
    image: "/images/viking-793.jpg",
    highlights: [
      {
        title: "Longship Launch",
        description: "Help push a newly-built dragon ship into the fjord waters for its maiden voyage.",
        image: "/images/viking-longship.jpg",
      },
      {
        title: "Great Hall Feast",
        description: "Join a Viking feast with mead, storytelling, and ancient Norse rituals.",
        image: "/images/viking-feast.jpg",
      },
      {
        title: "Aurora Ceremony",
        description: "Witness a sacred ceremony beneath the Northern Lights at a clifftop shrine.",
        image: "/images/viking-aurora.jpg",
      },
    ],
    practicalAdvice: {
      climate: "Cold and harsh, -5 to 10C. Thermal-adaptive clothing provided. Prepare for rain and sea spray.",
      language: "Old Norse. Neural translator calibrated for regional dialects and kenning poetic forms.",
      customs: "Hospitality is sacred. Accept all food offered. Prove your worth through stories, not combat.",
      risks: "High. Maritime conditions dangerous. Wildlife encounters possible. Inter-clan tensions require diplomatic awareness. Armed escort provided.",
    },
  },
]
