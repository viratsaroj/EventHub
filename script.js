const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".event-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {

            if (filter === "all") {
                card.style.display = "block";
            } 
            else if (card.getAttribute("data-category") === filter) {
                card.style.display = "block";
            } 
            else {
                card.style.display = "none";
            }

        });

    });
});