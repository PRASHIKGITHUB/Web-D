document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("card-container");
    const cards = document.querySelectorAll(".card");
    const cardCount = cards.length;
    const angleIncrement = (2 * Math.PI) / cardCount;

    cards.forEach((card, index) => {
        const angle = index * angleIncrement;
        const radius = 100; // Adjust the radius as needed

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});
