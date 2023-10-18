const project = {
    title: "Walking Through Time: A Week of NYC Pathways",
    author: "Sreya Chalasani",
    projectOverview: {
      description: "This project aims to document and capture the daily walking paths I traverse in New York City over the course of a week. By visually and creatively recording these journeys, I intend to highlight the unique, ever-evolving narrative that unfolds when one explores the city's streets, parks, and neighborhoods on foot. This project not only chronicles my personal experiences but also invites viewers to reflect on the fluidity and dynamism of urban life, one step at a time.",
      objectives: [
        "Document Daily Walks: Record and document my daily walking routes in New York City, emphasizing the various destinations and landscapes encountered.",
        "Explore NYC's Diversity: Showcase the diverse neighborhoods, architecture, and urban landscapes within the city, reflecting the city's vibrancy and uniqueness.",
        "Highlight the Passage of Time: Through photographs, sketches, or multimedia elements, emphasize how the cityscape, people, and atmospheres change as the day progresses from morning to evening.",
        "Capture the Unexpected: Document spontaneous moments, encounters, and surprises that occur during the walks, emphasizing the serendipity of city life.",
        "Create a Multimedia Narrative: Compile the collected material into a multimedia project, possibly a website, a video series, or a digital journal, to convey the experiences and emotions of each walk effectively."
      ]
    },
    projectObjectives: [
      { name: "Daily Documentation", description: "For seven consecutive days, I will meticulously record my walking paths by taking photographs, creating sketches, and jotting down notes about the routes, landmarks, and any remarkable encounters." },
      { name: "Photography and Sketching", description: "I will employ both photography and sketching to capture the essence of each journey, including landscapes, street scenes, architectural details, and human interactions." },
      { name: "Narrative Creation", description: "After completing the week, I will compile the material into a multimedia project. This may involve creating a dedicated website that showcases the daily routes, pairing them with narratives and interactive maps." }
    ],
    methods: {
      dailyDocumentation: function() {
        console.log("Meticulously record walking paths for seven consecutive days.");
      },
      photographyAndSketching: function() {
        console.log("Use photography and sketching to capture the essence of each journey.");
      },
      narrativeCreation: function() {
        console.log("Compile collected material into a multimedia project, possibly a website with narratives and interactive maps.");
      }
    },
    dataTypes: {
      number: 7,
      string: "New York City",
      boolean: true,
      functionProp: function() {
        console.log("This is a sample function.");
      },
      object: { nestedProperty1: "Nested Property 1", nestedProperty2: "Nested Property 2" },
      array: ["Item 1", "Item 2", "Item 3"]
    },
    startDate: new Date("2023-10-18"),
    durationInDays: 7,
    locationsVisited: ["Central Park", "Brooklyn Bridge", "Times Square"],
    projectCompleted: false,
    additionalNotes: [
      "Consider collaborating with local artists for sketches.",
      "Explore using augmented reality for an interactive map.",
    ],
    toggleCompletion: function() {
      this.projectCompleted = !this.projectCompleted;
    },
    
    websiteLink: "https://www.example.com",
    videoSeries: ["Episode 1", "Episode 2", "Episode 3"],
    multimediaContent: [
      { type: "Image", description: "Sunset in Central Park" },
      { type: "Video", description: "Street Performers in Times Square" },
    ],
    reviewComments: {
      positive: ["Impressive project concept!", "Great use of multimedia."],
      negative: ["Website navigation could be improved."],
    },
    projectBudget: {
      totalCost: 10000,
      itemizedCosts: {
        photography: 3000,
        websiteDevelopment: 4000,
        marketing: 2000,
        miscellaneous: 1000,
      },
    },
  };
  
  // Test
  console.log("Project Start Date: " + project.startDate.toLocaleDateString());
  console.log("Locations Visited: " + project.locationsVisited.join(", "));
  console.log("Is Project Completed? " + project.projectCompleted);
  project.toggleCompletion();
  console.log("Is Project Completed? " + project.projectCompleted);
  