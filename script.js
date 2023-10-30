const animatedText = document.getElementById("animatedText");
const text = "Walking Through Time";
const speed = 4; 

let textX = -animatedText.clientWidth;
const centerX = window.innerWidth / 2 - animatedText.clientWidth / 2;

function animateText() {
    if (textX < centerX) {
        textX += speed;
        animatedText.style.transform = `translateX(${textX}px)`;
        requestAnimationFrame(animateText);
    }
}

animateText();

setTimeout(() => {
  animateText();
  document.getElementById("content").style.opacity = 1;
}, 4250);

// setTimeout(function() {
//   document.body.style.backgroundImage = "url('footprint.png')";
// }, 4300);

const project = {
  title: "Walking Through Time: A Week of NYC Pathways",
  author: "Sreya Chalasani",
  projectOverview: {
    description: "In the heart of the bustling metropolis that is New York City, I embarked on a personal odyssey to capture the pulse of this urban giant through the simple act of walking. Over the course of seven days, I allowed the city to be my guide, leading me through its labyrinthine streets, verdant parks, and diverse neighborhoods.",
    objectives: [
      "Document Daily Walks: Record and document my daily walks exploring new areas in New York City, emphasizing the various destinations and landscapes encountered.",
      "Explore NYC's Diversity: Showcase the diverse neighborhoods, architecture, and urban landscapes within the city, reflecting the city's vibrancy and uniqueness.",
      "Highlight the Passage of Time: Through photographs, sketches, or multimedia elements, emphasize how the cityscape, people, and atmospheres change as the area changes.",
      "Capture the Unexpected: Document spontaneous moments, encounters, and surprises that occur during the walks, emphasizing the serendipity of city life.",
      "Create a Multimedia Narrative: Compile the collected material into a multimedia project, possibly a website, a video series, or a digital journal, to convey the experiences and emotions of each walk effectively."
    ]
  }
};

document.getElementById("overview").textContent = project.projectOverview.description;

const objectivesList = document.getElementById("objectives");
project.projectOverview.objectives.forEach(objective => {
  const listItem = document.createElement("li");
  listItem.textContent = objective;
  objectivesList.appendChild(listItem);
});

const projectData = {
  days: {
    1: {
      description: "Short description of my trip to Tompkins Square Park",
      photos: ["day1-photo1.jpg", "day1-photo2.jpg"],
      sketches: ["day1-sketch1.jpg", "day1-sketch2.jpg"],
    },
    2: {
      description: "Short description of my trip to Times Square",
      photos: ["day2-photo1.jpg", "day2-photo2.jpg"],
      sketches: ["day2-sketch1.jpg", "day2-sketch2.jpg"],
    },
    3: {
      description: "Short description of my trip to Soho",
      photos: ["day3-photo1.jpg", "day3-photo2.jpg"],
      sketches: ["day3-sketch1.jpg", "day3-sketch2.jpg"],
    },
    4: {
      description: "Short description of my trip to Union Square",
      photos: ["day4-photo1.jpg", "day4-photo2.jpg"],
      sketches: ["day4-sketch1.jpg", "day4-sketch2.jpg"],
    },
    5: {
      description: "Short description of my trip to the MET",
      photos: ["day5-photo1.jpg", "day5-photo2.jpg"],
      sketches: ["day5-sketch1.jpg", "day5-sketch2.jpg"],
    },
    6: {
      description: "Short description of my trip to Brooklyn",
      photos: ["day6-photo1.jpg", "day6-photo2.jpg"],
      sketches: ["day6-sketch1.jpg", "day6-sketch2.jpg"],
    },
    7: {
      description: "Short description of my trip to Chelsea",
      photos: ["day7-photo1.jpg", "day7-photo2.jpg"],
      sketches: ["day7-sketch1.jpg", "day7-sketch2.jpg"],
    },
  }
};


// Call the function to display the data
displayProjectData(projectData);
