// ================= SMOOTH SCROLL (optional enhancement) =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================= BOOKING FORM =================

const form = document.getElementById("bookingForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // show popup
    popup.style.display = "flex";

    // reset form
    form.reset();
});


// ================= CLOSE POPUP =================

function closePopup() {
    popup.style.display = "none";
}


// ================= CLOSE POPUP ON OUTSIDE CLICK =================

window.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
    }
});