console.log("Joyseno JavaScript is working!");

// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});




// Portfolio Filter Buttons

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        this.classList.add("active");

        // Get selected category
        const filterValue = this.getAttribute("data-filter");

        // Show or hide projects
        portfolioItems.forEach(function(item) {

            const category = item.getAttribute("data-category");

            if (filterValue === "all" || category === filterValue) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

// Portfolio Filter

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            portfolioItems.forEach(function (item) {

                const category = item.getAttribute("data-category");

                if (filterValue === "all" || category === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });

});



