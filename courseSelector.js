let image = document.querySelectorAll(".image")

image.forEach((images) => {
    images.addEventListener("click", () => {
        window.location.assign("/class.html")
    });
});
