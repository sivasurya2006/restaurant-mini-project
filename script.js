document.addEventListener("DOMContentLoaded", () => {
            const filterBtns = document.querySelectorAll(".category-btn");
            const foodCards = document.querySelectorAll(".food-card");

            filterBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                
                    filterBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");

                    const selectedCategory = btn.getAttribute("data-category");

                    foodCards.forEach(card => {
                        const cardCategory = card.getAttribute("data-category");
                        if (selectedCategory === "all" || cardCategory === selectedCategory) {
                            card.style.display = "flex";
                        } else {
                            card.style.display = "none";
                        }
                    });
                });
            });
        });