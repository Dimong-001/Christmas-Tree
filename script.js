document.addEventListener("DOMContentLoaded", () => {
  const decorations = document.querySelector(".decorations");
  const snowContainer = document.querySelector(".snow-container");

  // Generate ornaments dynamically
  for (let i = 0; i < 60; i++) {
    const ornament = document.createElement("div");
    if (i % 2 === 0) {
      ornament.className = "bauble";
    } else {
      ornament.className = "star-decoration";
    }

    // Randomize position on the tree
    ornament.style.top = `${Math.random() * 600}px`;
    ornament.style.left = `${Math.random() * 450}px`;

    decorations.appendChild(ornament);
  }

  // Generate snowflakes
  for (let i = 100; i > 0; i--) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.width = `${Math.random() * 5 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = `${Math.random() * 3 + 7}s`;
    snowContainer.appendChild(snowflake);
  }
});
