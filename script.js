// =======================
// IMAGE MODAL
// =======================

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

if (modal && modalImg && closeBtn) {

    document.querySelectorAll(".product-card img").forEach(img => {

        img.addEventListener("click", () => {

            modal.style.display = "block";
            modalImg.src = img.src;

        });

    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    modal.onclick = (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    };

}


// =======================
// SCROLL ANIMATION
// =======================

window.addEventListener("scroll", () => {

    document.querySelectorAll(".reveal").forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("active");

        }

    });

});


// =======================
// BUY NOW BUTTON
// =======================

document.querySelectorAll(".buy-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const card = this.closest(".product-card");

        if (!card) return;

        const product = card.querySelector("h3").innerText;

        window.open(

            "https://wa.me/923713877616?text=" +

            encodeURIComponent("Assalam O Alaikum! I want to order: " + product),

            "_blank"

        );

    });

});


// =======================
// PRODUCT POPUP
// =======================

const popup = document.getElementById("productPopup");

if (popup) {

    const popupImg = document.getElementById("popupImage");
    const popupTitle = document.getElementById("popupTitle");
    const popupPrice = document.getElementById("popupPrice");
    const popupBuy = document.getElementById("popupBuy");
    const closePopup = document.querySelector(".close-popup");

    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("click", function (e) {

            if (e.target.classList.contains("buy-btn")) return;

            popup.style.display = "flex";

            popupImg.src = this.querySelector("img").src;
            popupTitle.innerText = this.querySelector("h3").innerText;
            popupPrice.innerText = this.querySelector("p").innerText;

            popupBuy.href =
                "https://wa.me/923713877616?text=" +
                encodeURIComponent("Assalam O Alaikum! I want to order: " + popupTitle.innerText);

        });

    });

    closePopup.onclick = function () {

        popup.style.display = "none";

    };

    popup.onclick = function (e) {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    };

}
