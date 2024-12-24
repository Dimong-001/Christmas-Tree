document.addEventListener("DOMContentLoaded", () => {
  const decorations = document.querySelector(".decorations");

  // Generate ornaments dynamically
  for (let i = 0; i < 40; i++) {
    const ornament = document.createElement("div");
    if (i % 2 === 0) {
      ornament.className = "bauble";
    } else {
      ornament.className = "star-decoration";
    }

    // Randomize position on the tree
    ornament.style.top = `${Math.random() * 600}px`;
    ornament.style.left = `${Math.random() * 350}px`;

    decorations.appendChild(ornament);
  }
});
