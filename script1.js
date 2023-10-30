const projectData = {
    days: {
      1: {
        date: "10/23/23",
        day: "Monday",
        description: "Visiting Tompkins Square Park as a New Yorker is always a treat. When I walked in, I felt that classic East Village energy in the air – families picnicking, buskers strumming away, and the buzz of diverse conversations. It's a microcosm of our amazing city, where I can enjoy the blend of languages, grab a bite from food trucks with flavors from around the world, and soak in the variety of people who call this place home. The dog run is a riot, and the park's garden offers a little green escape from city life. And hey, there's always something cool happening, like the artsy fair I stumbled upon. Sitting on a park bench, soaking up the sun, I'm reminded that Tompkins Square Park is a treasured part of our local scene – a spot where New Yorkers of all kinds come together to make something pretty darn special.",
        photos: ["DNO-Home.png", "day1-photo2.jpg"],
        sketches: ["day1-sketch1.jpg", "day1-sketch2.jpg"],
      },
      2: {
        date: "10/24/23",
        day: "Tuesday",
        description: "Times Square, is a sight to behold, especially after sunset. When you step into that neon wonderland, you're instantly surrounded by towering billboards, larger-than-life characters, and a relentless sea of people from all corners of the world. It's a sensory overload, but in the best way possible. The glow of screens and the cacophony of street performers make you feel like you're in the heart of the city that never sleeps. Whether you're on your way somewhere or just people-watching, Times Square's electrifying chaos is an essential part of the New York experience, no matter how many times you've seen it.",
        photos: ["day2-photo1.jpg", "day2-photo2.jpg"],
        sketches: ["day2-sketch1.jpg", "day2-sketch2.jpg"],
      },
      3: {
        date: "10/25/23",
        day: "Wednesday",
        description: "Soho, is a bit of a hidden gem amid the hustle and bustle of Manhattan. Walking through its cobblestone streets, you can't help but notice the historic cast-iron architecture and the chic boutiques tucked into old warehouses. It's got a different vibe, a mix of artistry and urban coolness. Soho feels like a neighborhood that's perpetually in-the-know, with its galleries, cafes, and stylish locals. You might find yourself wandering into a pop-up art exhibit or discovering a cozy café tucked away on a side street. Soho's blend of history and contemporary creativity makes it a unique slice of NYC, a place where you can stroll, shop, and soak up some of that quintessential New York style.",
        photos: ["day3-photo1.jpg", "day3-photo2.jpg"],
        sketches: ["day3-sketch1.jpg", "day3-sketch2.jpg"],
      },
      4: {
        date: "10/26/23",
        day: "Thursday",
        description: "Union Square, is like a dynamic heartbeat right in the heart of Manhattan. The park itself is a green oasis, surrounded by the bustle of the city. It's a meeting point, a gathering place for all my friends. The farmers' market is a weekly treat, with fresh produce, artisanal goods, and street performers adding to the vibrant scene. Nearby, you've got eclectic shops, cozy cafes, and a real mix of personalities. Union Square feels like a crossroads of cultures and ideas, with impromptu protests and creative expressions always in the air. Whether I'm in search of fresh veggies or a bit of local flavor, Union Square's energy and diversity make it a true neighborhood gem.",
        photos: ["day4-photo1.jpg", "day4-photo2.jpg"],
        sketches: ["day4-sketch1.jpg", "day4-sketch2.jpg"],
      },
      5: {
        date: "10/27/23",
        day: "Friday",
        description: "Central Park, is an urban oasis that never ceases to amaze. It's a sprawling escape from the city's concrete jungle, a place where nature and skyscrapers coexist in harmony. Whether I'm taking a leisurely stroll or having a picnic with friends, Central Park offers a sense of calm and tranquility that's essential in this bustling metropolis. The park's winding pathways lead to hidden gems like Bethesda Terrace, the Central Park Zoo, and the iconic Bow Bridge, providing endless opportunities for exploration. It's not just a place to relax; it's where I've witnessed summer concerts, enjoyed a boat ride on the lake, and even taken part in a game of pick-up softball. Central Park is like New York's backyard, a green haven that brings our diverse city together to bask in its beauty and enjoy a moment of serenity.",
        photos: ["day5-photo1.jpg", "day5-photo2.jpg"],
        sketches: ["day5-sketch1.jpg", "day5-sketch2.jpg"],
      },
      6: {
        date: "10/28/23",
        day: "Saturday",
        description: "Brooklyn, is not just a borough; it's a vibrant culture, a way of life. Crossing the East River into Brooklyn feels like stepping into a realm of endless possibilities. The streets are alive with character, a blend of artistic expression and rich history. From Williamsburg's hipster haunts to DUMBO's cobblestone streets with stunning views of the Manhattan skyline, there's always something new to discover. Brooklyn's diverse neighborhoods offer a taste of world cuisine, local breweries, and an array of independent shops and boutiques. But it's not just the places; it's the people. Brooklynites are a tight-knit community, proud of their unique borough and ever-eager to welcome newcomers. Whether you're biking along the Brooklyn Bridge, enjoying a slice of pizza, or savoring the serenity of Prospect Park, Brooklyn has a magnetic charm that's impossible to resist – it's the heartbeat of New York City's creative soul.",
        photos: ["day6-photo1.jpg", "day6-photo2.jpg"],
        sketches: ["day6-sketch1.jpg", "day6-sketch2.jpg"],
      },
      7: {
        date: "10/29/23",
        day: "Sunday",
        description: "Chelsea holds a special place in my heart. Its charming streets blend historic brownstones with modern architecture, creating a unique urban landscape. Chelsea's art scene is a standout, with renowned galleries like the High Line Gallery District, and public art installations that infuse creativity into the neighborhood. Its diverse culinary scene offers a culinary journey around the world, while the High Line Park provides a peaceful, elevated escape above the city streets. Chelsea's inclusive and vibrant LGBTQ+ community, eclectic boutiques, and welcoming atmosphere make it an essential and cherished part of New York City living, where history, culture, and diversity collide.",
        photos: ["day7-photo1.jpg", "day7-photo2.jpg"],
        sketches: ["day7-sketch1.jpg", "day7-sketch2.jpg"],
      },
    }
  };
  
// Function to display a day's information with a delay
function displayDay(dayNumber, delay) {
  setTimeout(() => {
    const day = projectData.days[dayNumber];

    // Create a div element for each day
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day-entry");

    // Create a heading for the day
    const dayHeading = document.createElement("h2");
    dayHeading.textContent = `Day ${dayNumber}`;
    dayDiv.appendChild(dayHeading);

    // Create and append elements for date and day of the week
    const dateElement = document.createElement("p");
    dateElement.textContent = `Date: ${day.date}`;
    dayDiv.appendChild(dateElement);

    const dayOfWeekElement = document.createElement("p");
    dayOfWeekElement.textContent = `Day of the Week: ${day.day}`;
    dayDiv.appendChild(dayOfWeekElement);

    // Create and append elements for description, photos, and sketches
    const description = document.createElement("p");
    description.textContent = day.description;
    dayDiv.appendChild(description);

    // const photosList = document.createElement("ul");
    // for (const photo of day.photos) {
    //   const photoItem = document.createElement("li");
    //   photoItem.textContent = photo;
    //   photosList.appendChild(photoItem);
    // }
    // dayDiv.appendChild(photosList);

    // const sketchesList = document.createElement("ul");
    // for (const sketch of day.sketches) {
    //   const sketchItem = document.createElement("li");
    //   sketchItem.textContent = sketch;
    //   sketchesList.appendChild(sketchItem);
    // }
    // dayDiv.appendChild(sketchesList);

    // Add a class to trigger the transition effect
    dayDiv.classList.add("show");

    // Append the day div to the journal entry
    journalEntry.appendChild(dayDiv);
  }, delay);
}
 
  // Get the element where you want to display the day information
  const journalEntry = document.getElementById("dayInfo");
  
  // Display each day with a specified delay
  displayDay(1, 3000); // 3 seconds (3000 milliseconds)
  displayDay(2, 8000); // 8 seconds (8000 milliseconds)
  displayDay(3, 13000); // 13 seconds (13000 milliseconds)
  displayDay(4, 18000); // 18 seconds (18000 milliseconds)
  displayDay(5, 23000); // 23 seconds (23000 milliseconds)
  displayDay(6, 28000); // 28 seconds (28000 milliseconds)
  displayDay(7, 33000); // 33 seconds (33000 milliseconds)
  