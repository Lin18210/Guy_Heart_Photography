// --- Import your local images here if you have them ---
// import img1 from '../assets/blog/img1.jpg';

// For now, I am using Unsplash placeholders.
// Each post has a 'coverImage' (for the card) and 'contentSections' (for the detail page).

export const blogData = [
  // --- POST 1 ---
  {
    id: 1,
    title: "The Ultimate Guide to Beach Weddings in Phuket",
    category: "Destination Guide",
    date: "December 10, 2025",
    coverImage: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover the hidden gems of Phuket's coastline and why the golden hour there creates the most magical wedding portraits.",
    tags: ["Thailand", "Beach", "Photography"],
    // These 3 sections will create the Zig-Zag layout on the detail page
    contentSections: [
      {
        subtitle: "Choosing the Right Coast",
        text: "Phuket offers two distinct vibes. The west coast is famous for its sunsets and luxury resorts, while the east coast offers serene sunrises and views of the limestone karsts. For this wedding, we chose a secluded cove on the west coast to capture the dramatic amber light of the setting sun.",
        image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "Weather Considerations",
        text: "Tropical weather can be unpredictable. We always advise our couples to have a plan B, but sometimes the storm clouds create the most dramatic backdrops. In this session, the overcast sky acted as a giant softbox, providing perfectly even lighting for intimate portraits.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "The Golden Hour Magic",
        text: "The 20 minutes before sunset are crucial. We move fast to capture the silhouette shots and the romantic, warm glow that everyone desires. It's a fleeting moment, but when timed right, the results are breathless.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // --- POST 2 ---
  {
    id: 2,
    title: "Why You Need a Second Shooter for Your Big Day",
    category: "Advice",
    date: "November 22, 2025",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Capturing the groom's reaction while the bride walks down the aisle is just one reason why a second pair of eyes is invaluable.",
    tags: ["Advice", "Planning", "Team"],
    contentSections: [
      {
        subtitle: "Two Places at Once",
        text: "One of the biggest physical limitations of a single photographer is being in one place. While the lead shooter captures the bride walking down the aisle, the second shooter is focused entirely on the groom's reaction. These simultaneous moments are the heart of the story.",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "Detailed Decor Shots",
        text: "While family portraits are happening, the cocktail hour room is untouched and perfect. A second shooter can sneak away to capture the floral arrangements, table settings, and cake before the guests arrive, preserving the effort you put into design.",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "Candid Guest Reactions",
        text: "During speeches, the main camera is on the toaster. The second camera is scanning the crowd for tears, laughter, and clinking glasses. These reaction shots often become the most cherished photos for looking back at who was there to celebrate with you.",
        image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // --- POST 3 ---
  {
    id: 3,
    title: "Traditional Thai Wedding Ceremonies Explained",
    category: "Culture",
    date: "October 15, 2025",
    coverImage: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "From the Khan Maak procession to the Water Pouring ceremony, we break down the beautiful symbolism behind Thai traditions.",
    tags: ["Culture", "Tradition", "Ceremony"],
    contentSections: [
      {
        subtitle: "The Khan Maak Procession",
        text: "This lively parade is full of music, dancing, and joy as the groom makes his way to the bride's house. Capturing the energy here requires a fast shutter speed and an eye for the colorful costumes and genuine laughter of the family members.",
        image: "https://images.unsplash.com/photo-1522057384400-88096e42657e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "The Gate Ceremony",
        text: "Before seeing his bride, the groom must pass through 'gates' made of gold or silver chains held by bridesmaids. It's a moment of humor and negotiation. We love shooting this from a low angle to capture the groom's playful determination.",
        image: "https://images.unsplash.com/photo-1583996063494-0422675e4325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "The Water Pouring",
        text: "The Rod Nam Sang is the emotional core of the day. Elders pour holy water onto the couple's hands and offer blessings. We focus on the close-ups of the hands and the tearful expressions of the parents during this intimate exchange.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // --- POST 4 ---
  {
    id: 4,
    title: "Capturing Candid Moments: The Art of Invisibility",
    category: "Style",
    date: "September 05, 2025",
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "The best photos are often the ones you didn't know were being taken. Here is how we blend into the background.",
    tags: ["Style", "Candid", "Emotion"],
    contentSections: [
      {
        subtitle: "Using Long Lenses",
        text: "To remain unobtrusive, we often use telephoto lenses (85mm or 70-200mm). This allows us to stand far back while still getting an intimate close-up. The result is a subject that is relaxed and unaware of the camera.",
        image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "Anticipating the Laugh",
        text: "Candid photography is 90% anticipation. We watch the conversation flow and wait for the punchline. By the time the laughter erupts, our shutter is already clicking. It's about feeling the room rather than directing it.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        subtitle: "The In-Between Moments",
        text: "The formal pose is nice, but the moment right *after* the pose—when the couple relaxes and looks at each other—is real. We keep shooting even when the 'official' shot is done.",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // ... (I will continue adding objects here up to 16 posts) ...
];