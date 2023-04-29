import "./scss/index.scss";

const imagesList = document.body.querySelectorAll(".card__image");
const popup = document.body.querySelector(".pop-up");
const popupImage = popup.querySelector(".pop-up__image");

popup.addEventListener("click", handleCloseImage);

imagesList.forEach((image) => {
    image.addEventListener("click", handleOpenImage);
});

function handleOpenImage(event) {
    event.preventDefault();
    const imageUrl = event.currentTarget.dataset.src;

    popup.style.display = "block";
    popupImage.setAttribute("src", imageUrl);

};

function handleCloseImage(event) {
    event.preventDefault();
    if (event.target === popupImage) {
        return
    }

    popup.style.display = "none";
};