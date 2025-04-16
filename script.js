// const eventsData = [
//     {
//       category: "Cultural",
//       image: "assets/cultural.png",
//       events: ["Drama", "Dance", "Singing", "Concert", "Fine Art"]
//     },
//     {
//       category: "Centralized",
//       image: "assets/centralized.png",
//       events: ["Dance", "Singing", "Concert", "Fine Art"]
//     },
//     {
//       category: "Technical",
//       image: "assets/technical.png",
//       events: ["CSE", "IS", "AIMl", "E&C",
//         "CIVIL"
//       ]
//     }
//   ];
  
//   const container = document.getElementById("eventContainer");
  
//   eventsData.forEach((section) => {
//     const sectionDiv = document.createElement("section");
//     sectionDiv.classList.add("event-section");
  
//     sectionDiv.innerHTML = `
//       <img src="${section.image}" alt="${section.category}" class="section-img" />
//       <h2 class="event-title">${section.category}</h2>
//       <div class="event-buttons">
//         ${section.events.map(event => `
//           <a href="details.html?event=${encodeURIComponent(event)}">${event}</a>
//         `).join("")}
//       </div>
//     `;
  
//     container.appendChild(sectionDiv);
//   });
  // 👉 Dynamic Navbar
const navItems = [
  { label: "Home", link: "index.html" },
  { label: "Events", link: "index.html#eventContainer" },
  { label: "Schedule", link: "schedule.html" },
  
];

const navbar = document.getElementById("navbar");

navItems.forEach(item => {
  const button = document.createElement("button");
  button.textContent = item.label;

  button.onclick = () => {
    // Scroll if it's an anchor link, else redirect
    if (item.link.startsWith("#") || item.link.includes("#")) {
      const target = item.link.split("#")[1];
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = item.link;
    }
  };

  navbar.appendChild(button);
});

// 👉 Events & Branches Display
const eventsData = [
  {
    category: "Cultural",
    image: "assets/cultural.png",
    events: ["Drama", "Dance", "Singing", "Concert", "Fine Art"]
  },
  {
    category: "Centralized",
    image: "assets/centralized.png",
    events: ["Dance", "Singing", "Concert", "Fine Art"]
  },
  {
    category: "Technical",
    image: "assets/technical.png",
    branches: ["CSE", "IS", "AIML", "E&C", "CIVIL"]
  }
];

const container = document.getElementById("eventContainer");

eventsData.forEach((section) => {
  const sectionDiv = document.createElement("section");
  sectionDiv.classList.add("event-section");

  let content = `
    <img src="${section.image}" alt="${section.category}" class="section-img" />
    <h2 class="event-title">${section.category}</h2>
    <div class="event-buttons">
  `;

  // Show events (Cultural / Centralized)
  if (section.events) {
    content += section.events.map(event => `
      <a href="details.html?event=${encodeURIComponent(event)}">${event}</a>
    `).join("");
  }

  // Show branches (Technical)
  if (section.branches) {
    content += section.branches.map(branch => `
      <a href="branches.html?branch=${encodeURIComponent(branch)}">${branch}</a>
    `).join("");
  }

  content += `</div>`;
  sectionDiv.innerHTML = content;
  container.appendChild(sectionDiv);
});
