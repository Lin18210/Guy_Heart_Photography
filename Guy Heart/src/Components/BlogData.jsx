const blogImages = import.meta.glob('/src/assets/Images/Compressed GH/blog/**/*.{jpg,jpeg,png,webp}', { eager: true });

const getBlogImage = (id, suffix = "0") => {
  const folderName = `blog${id}`;
  const fileNameBase = `blog${id}.${suffix}`;
  
  // Construct the search path prefix that matches our import.meta.glob keys
  const partialPath = `/assets/Images/Compressed GH/blog/${folderName}/${fileNameBase}.`;

  // Find the matching key in blogImages object
  const matchingKey = Object.keys(blogImages).find(path => path.includes(partialPath));

  if (matchingKey) {
    return blogImages[matchingKey].default;
  }

  // Fallback placeholder if not found
  console.warn(`Image not found for Blog ${id} suffix ${suffix}`);
  return "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
};

export const blogData = [
  // --- POST 1 ---
  {
    id: 1,
    title: "Why Chinese Couples Choose Thailand for Their Destination Wedding",
    category: "Destination Guide",
    date: "December 10, 2025",
    coverImage: getBlogImage(1, "0"),
    excerpt: "From cultural proximity to world-class hospitality, discover why Thailand is the top choice for Chinese couples tying the knot abroad.",
    tags: ["Thailand", "Chinese Wedding", "Destination"],
    contentSections: [
      {
        subtitle: "Cultural Proximity & Convenience",
        text: "Thailand offers a perfect blend of exotic allure and cultural familiarity. With short flight times from major Chinese cities and a deep understanding of Chinese traditions among local vendors, couples can plan elaborate celebrations without the logistical nightmares of long-haul travel.",
        image: getBlogImage(1, "1")
      },
      {
        subtitle: "World-Class Hospitality",
        text: "Thai hospitality, or 'Thainess', is legendary. For a wedding, this translates to impeccable service where every guest feels like royalty. Luxury resorts in Phuket and Koh Samui are adept at hosting large-scale banquets that meet the high standards of Chinese families.",
        image: getBlogImage(1, "2")
      },
      {
        subtitle: "Stunning Visuals for Pre-Wedding Shoots",
        text: "Beyond the ceremony, Thailand is a paradise for pre-wedding photography. From the bustling streets of Bangkok to the serene beaches of Krabi, the variety of backdrops ensures that your wedding album will be as diverse and vibrant as your love story.",
        image: getBlogImage(1, "3")
      }
    ]
  },

  // --- POST 2 ---
  {
    id: 2,
    title: "A Photographer’s Guide to Thai Buddhist Weddings for Foreigners",
    category: "Culture",
    date: "November 28, 2025",
    coverImage: getBlogImage(2, "0"),
    excerpt: "Step into the serene and spiritual world of a traditional Thai Buddhist wedding ceremony, a beautiful blessing for your union.",
    tags: ["Buddhist Wedding", "Culture", "Ceremony"],
    contentSections: [
      {
        subtitle: "The Morning Alms Offering",
        text: "The day often begins at sunrise with the couple offering food to monks. This act of merit-making sets a spiritual tone for the marriage. As photographers, we capture the serene expressions and the golden light of dawn reflecting off saffron robes.",
        image: getBlogImage(2, "1")
      },
      {
        subtitle: "The Monk's Blessing",
        text: "During the ceremony, monks chant ancient prayers while the couple bows in respect. The atmosphere is one of profound peace. We focus on capturing the delicate smoke of incense and the intricate details of the ceremonial setup.",
        image: getBlogImage(2, "2")
      },
      {
        subtitle: "The Water Pouring Ritual",
        text: "Perhaps the most iconic image of a Thai wedding, the 'Rod Nam Sang' involves elders pouring holy water over the couple's hands. It is an emotional sequence of blessings, allowing us to capture genuine interactions between generations.",
        image: getBlogImage(2, "3")
      }
    ]
  },

  // --- POST 3 ---
  {
    id: 3,
    title: "Tips For Photographing Foreign Couples’ Weddings In Thailand",
    category: "Photography Tips",
    date: "November 15, 2025",
    coverImage: getBlogImage(3, "0"),
    excerpt: "Navigating different cultures and lighting conditions: A guide to capturing the perfect frame in the Land of Smiles.",
    tags: ["Photography", "Tips", "Lighting"],
    contentSections: [
      {
        subtitle: "Mastering the Tropical Light",
        text: "Thailand's sun can be harsh. We advise shooting early in the morning or waiting for the 'golden hour' just before sunset. Understanding how to balance natural light with fill flash is crucial for softening shadows on the face while keeping the vibrant blue sky.",
        image: getBlogImage(3, "1")
      },
      {
        subtitle: "Understanding Cultural Nuances",
        text: "Every culture has its key moments. For a Western wedding, it's the first kiss; for an Indian wedding, the Pheras. Knowing these schedules inside out ensures we are in the right place at the right time, never missing a beat.",
        image: getBlogImage(3, "2")
      },
      {
        subtitle: "Managing Heat and Humidity",
        text: "It gets hot. We plan our shoots to keep the couple comfortable, utilizing shaded areas and air-conditioned breaks. A sweaty couple is an unhappy couple, so efficiency and speed during outdoor portrait sessions are our top priorities.",
        image: getBlogImage(3, "3")
      }
    ]
  },

  // --- POST 4 ---
  {
    id: 4,
    title: "Why You Should Hire A Local Destination Wedding Photographer In Thailand",
    category: "Advice",
    date: "October 30, 2025",
    coverImage: getBlogImage(4, "0"),
    excerpt: "Local expertise meets world-class talent. Here is why hiring a Thailand-based photographer is the smartest investment for your big day.",
    tags: ["Advice", "Planning", "Local Expert"],
    contentSections: [
      {
        subtitle: "Scouting the Best Locations",
        text: "A local photographer knows the hidden gems that tourists miss—the secluded beach at low tide, the ancient temple without the crowds. We take you to spots that make your photos unique, not just generic postcards.",
        image: getBlogImage(4, "1")
      },
      {
        subtitle: "Navigating Logistics Smoothly",
        text: "We speak the language, know the traffic patterns, and have relationships with local venues. If it rains, we know exactly where to go for Plan B. This logistical fluency takes the stress off you, letting you focus on your celebration.",
        image: getBlogImage(4, "2")
      },
      {
        subtitle: "Understanding the Light",
        text: "Tropical light is different. We know exactly when the sun sets in different seasons and how the light hits specific venues. This knowledge guarantees that your romantic sunset portraits are perfectly timed.",
        image: getBlogImage(4, "3")
      }
    ]
  },

  // --- POST 5 ---
  {
    id: 5,
    title: "How To Plan A Destination Wedding In Thailand (Step-By-Step Guide For 2025)",
    category: "Planning",
    date: "October 12, 2025",
    coverImage: getBlogImage(5, "0"),
    excerpt: "Your comprehensive roadmap to saying 'I Do' in paradise, from legal requirements to choosing the perfect venue.",
    tags: ["Planning", "Guide", "2025"],
    contentSections: [
      {
        subtitle: "12 Months Out: Venue & Planner",
        text: "Start by locking in your date and venue. Popular spots in Phuket and Koh Samui book up fast. Hiring a local wedding planner at this stage is crucial to bridge the language gap and handle vendor negotiations.",
        image: getBlogImage(5, "1")
      },
      {
        subtitle: "6 Months Out: Vendors & Attire",
        text: "Book your photographer, makeup artist, and entertainment. Choose attire that suits the tropical climate—think breathable fabrics like linen or chiffon. Send out your Save the Dates to give guests ample time to book flights.",
        image: getBlogImage(5, "2")
      },
      {
        subtitle: "1 Month Out: Final Details",
        text: "Confirm all bookings, finalize the menu tasting, and create a detailed itinerary for your guests. Don't forget to check the latest visa requirements and travel advisories for your home country.",
        image: getBlogImage(5, "3")
      }
    ]
  },

  // --- POST 6 ---
  {
    id: 6,
    title: "What To Expect When Hiring A Destination Wedding Photographer In Thailand",
    category: "Advice",
    date: "September 25, 2025",
    coverImage: getBlogImage(6, "0"),
    excerpt: "Transparency, package inclusions, and delivery times—everything you need to know before signing the contract.",
    tags: ["Photography", "Hiring", " Expectations"],
    contentSections: [
      {
        subtitle: "Communication is Key",
        text: "Expect initial meetings via video call to discuss your vision. A professional will ask detailed questions about your schedule and family dynamics to ensure nothing is missed on the big day.",
        image: getBlogImage(6, "1")
      },
      {
        subtitle: "The Coverage Day",
        text: "On the wedding day, expect a team that is punctual, dressed appropriately, and unobtrusive. We blend into the background to capture candid moments but step up to direct group shots efficiently.",
        image: getBlogImage(6, "2")
      },
      {
        subtitle: "Post-Production & Delivery",
        text: "Editing takes time. Standard delivery for a full gallery is 6-8 weeks, but we always provide a 'sneak peek' within a few days so you can share your joy on social media immediately.",
        image: getBlogImage(6, "3")
      }
    ]
  },

  // --- POST 7 ---
  {
    id: 7,
    title: "Why Thailand Is The Perfect Destination For Your Dream Wedding",
    category: "Inspiration",
    date: "September 08, 2025",
    coverImage: getBlogImage(7, "0"),
    excerpt: "Beyond the beaches: exploring the diverse landscapes, rich culture, and luxury that make Thailand the world's wedding capital.",
    tags: ["Thailand", "Inspiration", "Dream Wedding"],
    contentSections: [
      {
        subtitle: "Diverse Landscapes",
        text: "Whether you want a barefoot beach wedding, a mystical jungle ceremony in Chiang Mai, or a glamorous rooftop party in Bangkok, Thailand has it all. The variety of landscapes offers endless possibilities for your wedding theme.",
        image: getBlogImage(7, "1")
      },
      {
        subtitle: "Unbeatable Luxury Value",
        text: "Your budget goes further here. You can afford a five-star resort experience, elaborate floral decor, and top-tier entertainment for a fraction of the cost of a similar wedding in Europe or North America.",
        image: getBlogImage(7, "2")
      },
      {
        subtitle: "A Honey-moon Built In",
        text: "Once the guests leave, you are already on your honeymoon. Island hopping, spa retreats, and world-class dining are right at your doorstep, making the transition from celebration to relaxation seamless.",
        image: getBlogImage(7, "3")
      }
    ]
  },

  // --- POST 8 ---
  {
    id: 8,
    title: "A Destination Wedding Photographer’s Day In Thailand",
    category: "Behind the Scenes",
    date: "August 20, 2025",
    coverImage: getBlogImage(8, "0"),
    excerpt: "A behind-the-scenes look at the marathon of creativity, logistics, and adrenaline that goes into documenting your special day.",
    tags: ["BTS", "Photographer Life", "Thailand"],
    contentSections: [
      {
        subtitle: "The Prep",
        text: "Our day starts hours before the ceremony, checking gear, syncing cameras, and scouting the venue for light conditions. We arrive early to capture the flat lays—invitations, rings, and shoes—before the chaos begins.",
        image: getBlogImage(8, "1")
      },
      {
        subtitle: "The Marathon",
        text: "From the first look to the last dance, we are on our feet, constantly scanning for moments. It's a physical and mental marathon, fueled by the energy of the celebration and the drive to create art.",
        image: getBlogImage(8, "2")
      },
      {
        subtitle: "The Wrap Up",
        text: "After the fireworks fade, our work isn't done. We immediately back up thousands of images to multiple drives to ensure your memories are safe. Only then do we rest, ready to do it all again.",
        image: getBlogImage(8, "3")
      }
    ]
  },

  // --- POST 9 ---
  {
    id: 9,
    title: "Cultural Traditions To Include In Your Thai Wedding Ceremony",
    category: "Culture",
    date: "August 05, 2025",
    coverImage: getBlogImage(9, "0"),
    excerpt: "Infuse your destination wedding with local meaning by incorporating these beautiful and symbolic Thai traditions.",
    tags: ["Tradition", "Ceremony", "Culture"],
    contentSections: [
      {
        subtitle: "Khan Maak Procession",
        text: "A fun and rhythmic parade where the groom dances his way to the bride, bearing gifts. It's a great way to involve your guests and kick off the festivities with high energy and laughter.",
        image: getBlogImage(9, "1")
      },
      {
        subtitle: "Sanuk (Fun)",
        text: "Thai weddings are never solemn; they are infused with 'Sanuk'. Incorporate traditional Thai dancers or musicians to entertain guests during dinner. It adds a layer of cultural richness that foreigners love.",
        image: getBlogImage(9, "2")
      },
      {
        subtitle: "Releasing Lanterns (Kom Loi)",
        text: "In the north, releasing sky lanterns symbolizes letting go of bad luck and making a wish for the future. It creates a breathtaking visual spectacle that lights up the night sky—perfect for your finale photos.",
        image: getBlogImage(9, "3")
      }
    ]
  },

  // --- POST 10 ---
  {
    id: 10,
    title: "Top 5 Nationalities That Choose Thailand For Their Destination Wedding",
    category: "Trends",
    date: "July 18, 2025",
    coverImage: getBlogImage(10, "0"),
    excerpt: "From India to Australia, see who is flocking to Thailand to say 'I Do' and what makes it a universal favorite.",
    tags: ["Trends", "Statistics", "International"],
    contentSections: [
      {
        subtitle: "1. Indian Couples",
        text: "Known for their grandeur, Indian weddings in Thailand are spectacular multi-day affairs. Thailand offers the capacity to host hundreds of guests with specialized Indian catering and decor capabilities.",
        image: getBlogImage(10, "1")
      },
      {
        subtitle: "2. Chinese Couples",
        text: "Valuing proximity and luxury, Chinese couples love the high-end resorts of Phuket. It's a status symbol and a convenient getaway for family members flying in from Beijing, Shanghai, or Hong Kong.",
        image: getBlogImage(10, "2")
      },
      {
        subtitle: "3. Australian & UK Couples",
        text: "For Aussies, it's a close tropical neighbor. For the British, it's an exotic escape from the grey weather. Both love the laid-back beach vibe and the reliability of Thai service standards.",
        image: getBlogImage(10, "3")
      }
    ]
  },

  // --- POST 11 ---
  {
    id: 11,
    title: "How To Choose The Right Thai Wedding Planner As A Foreigner",
    category: "Planning",
    date: "July 02, 2025",
    coverImage: getBlogImage(11, "0"),
    excerpt: "Language barriers? Vendor networks? Here is a checklist for finding a planner who sees your vision and speaks your language.",
    tags: ["Planner", "Vendor", "Guide"],
    contentSections: [
      {
        subtitle: "Check Their Portfolio",
        text: "Look for planners who have experience with your specific culture. An expert in Western weddings might not know the intricate requirements of a traditional Chinese tea ceremony. Review their past work critically.",
        image: getBlogImage(11, "1")
      },
      {
        subtitle: "Communication Style",
        text: "Response time matters. If they take a week to reply to an email now, imagine the stress a week before the wedding. Choose someone proactive, transparent, and fluent in your preferred language.",
        image: getBlogImage(11, "2")
      },
      {
        subtitle: "Vendor Network",
        text: "A great planner is only as good as their contacts. Ask about their relationships with florists, caterers, and venues. Established planners can often get you better rates and priority booking.",
        image: getBlogImage(11, "3")
      }
    ]
  },

  // --- POST 12 ---
  {
    id: 12,
    title: "Why Thailand Is a Top Wedding Destination for Indian Couples",
    category: "Destination Guide",
    date: "June 15, 2025",
    coverImage: getBlogImage(12, "0"),
    excerpt: "Big, bold, and beautiful. Exploring the unique synergy between Thai hospitality and the grandeur of Big Fat Indian Weddings.",
    tags: ["Indian Wedding", "Thailand", "Luxury"],
    contentSections: [
      {
        subtitle: "Scalability for Large Guest Lists",
        text: "Indian weddings often have 300 to 500+ guests. Thailand's major resorts have the ballroom capacity and room inventory to host everyone comfortably in one location, creating a resort buyout feel.",
        image: getBlogImage(12, "1")
      },
      {
        subtitle: "Culinary Expertise",
        text: "Food is central to Indian weddings. Many top Thai hotels have resident Indian chefs or allow external catering, ensuring that the Dal Makhani tastes just as authentic as it does in Delhi.",
        image: getBlogImage(12, "2")
      },
      {
        subtitle: "Tolerance for Noise and Festivity",
        text: "We know Indian weddings are loud and joyous! Thai venues are accustomed to the Barat procession and late-night Sangeet parties, offering flexible policies on noise and timing.",
        image: getBlogImage(12, "3")
      }
    ]
  },

  // --- POST 13 ---
  {
    id: 13,
    title: "When Is the Best Time To Get Married In Thailand?",
    category: "Planning",
    date: "May 28, 2025",
    coverImage: getBlogImage(13, "0"),
    excerpt: "Rain vs. Shine: A month-by-month breakdown of Thailand's weather to help you pick the perfect wedding date.",
    tags: ["Weather", "Date", "Planning"],
    contentSections: [
      {
        subtitle: "The Cool Season (Nov - Feb)",
        text: "This is the peak season. Humidity is lower, rain is rare, and the temperatures are pleasant. It's perfect for outdoor ceremonies, but expect higher prices and the need to book venues well in advance.",
        image: getBlogImage(13, "1")
      },
      {
        subtitle: "The Hot Season (Mar - May)",
        text: "It gets very hot. If you choose this time, plan for a late afternoon ceremony and indoor receptions. The upside is stunning, vibrant sunsets and fewer tourists on the beaches.",
        image: getBlogImage(13, "2")
      },
      {
        subtitle: "The Green Season (Jun - Oct)",
        text: "Detailed as the 'monsoon' season, it doesn't rain all day—usually just short, intense bursts. The landscape is lush and green, and you can get incredible deals on luxury villas. Just have a covered backup plan.",
        image: getBlogImage(13, "3")
      }
    ]
  },

  // --- POST 14 ---
  {
    id: 14,
    title: "How To Plan A Luxury Destination Wedding In Thailand (From India or China)",
    category: "Luxury",
    date: "May 10, 2025",
    coverImage: getBlogImage(14, "0"),
    excerpt: "Elevating your experience: VIP services, yacht parties, and exclusive villa rentals for the discerning couple.",
    tags: ["Luxury", "VIP", "Planning"],
    contentSections: [
      {
        subtitle: "Exclusive Villa Rentals",
        text: "For ultimate privacy, rent a cliffside mega-villa in Phuket. You get your own private chef, butler, and infinity pool, allowing you to host intimate pre-wedding parties away from the public eye.",
        image: getBlogImage(14, "1")
      },
      {
        subtitle: "Yacht Charters",
        text: "Kick off your wedding weekend with a sunset cruise on a private yacht. It's a fantastic icebreaker for guests and provides a backdrop of limestone karsts that is simply unmatched.",
        image: getBlogImage(14, "2")
      },
      {
        subtitle: "Customized Decor & Production",
        text: "Luxury means bespoke. Work with top-tier production teams to build custom structures over hotel pools, import specific flowers, and create lighting designs that transform a venue into a fairytale world.",
        image: getBlogImage(14, "3")
      }
    ]
  },

  // --- POST 15 ---
  {
    id: 15,
    title: "Decor Trends For Indian And Chinese Weddings In Thailand",
    category: "Trends",
    date: "April 22, 2025",
    coverImage: getBlogImage(15, "0"),
    excerpt: "Pastels, mirrors, and tropical fusion. What is trending in wedding design for 2025 Asian weddings.",
    tags: ["Decor", "Trends", "Style"],
    contentSections: [
      {
        subtitle: "Tropical Fusion",
        text: "Couples are blending traditional mandaps or altars with local tropical flora. Think lotus flowers, monstera leaves, and orchids integrated into classic red and gold themes for a fresh, site-specific look.",
        image: getBlogImage(15, "1")
      },
      {
        subtitle: "Mirrored Aisles",
        text: "For a touch of modern glam, mirrored walkways are huge. They reflect the sky and the floral arches, creating an illusion of walking on water or floating in a garden. It looks spectacular in photos.",
        image: getBlogImage(15, "2")
      },
      {
        subtitle: "Sustainable Decor",
        text: "Eco-conscious luxury is on the rise. We are seeing more locally sourced materials, bamboo structures, and plastic-free setups. It’s beautiful and respectful of the stunning environment hosting your big day.",
        image: getBlogImage(15, "3")
      }
    ]
  },

  // --- POST 16 ---
  {
    id: 16,
    title: "Top 5 Wedding Themes Popular Among Foreign Couples In Thailand",
    category: "Inspiration",
    date: "April 05, 2025",
    coverImage: getBlogImage(16, "0"),
    excerpt: "From 'Boho Beach' to 'Royal Thai'—find the aesthetic that matches your personality and venue.",
    tags: ["Themes", "Inspiration", "Style"],
    contentSections: [
      {
        subtitle: "Boho Chic",
        text: "Dried pampas grass, macramé details, and barefoot ease. This theme fits perfectly with the relaxed beach vibe of Koh Samui and is a favorite among European couples.",
        image: getBlogImage(16, "1")
      },
      {
        subtitle: "Rustic Elegance",
        text: "Wooden tables, fairy lights, and greenery runners. This timeless style works beautifully in garden venues and offers a warm, intimate dining experience under the stars.",
        image: getBlogImage(16, "2")
      },
      {
        subtitle: "Tropical Glamour",
        text: "Bright colors, neon signs, and bold tropical prints. This is for the couple who wants to party. It screams fun and looks amazing against the backdrop of a white sand beach.",
        image: getBlogImage(16, "3")
      }
    ]
  }
];