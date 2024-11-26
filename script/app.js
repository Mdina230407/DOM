const asideItems = document.querySelectorAll(".aside__list-item")

asideItems.forEach((asideItem) => {
    asideItem.addEventListener("click", () => {
        const backgroundColor = getComputedStyle(asideItem).backgroundColor

        document.body.style.backgroundColor = backgroundColor
    })
})

const asideButton = document.querySelector(".aside__button")

asideButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "white"
})

const sectionOneItems = document.querySelectorAll(".section__one-item")


function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

sectionOneItems.forEach((sectionOneItem) => {
    sectionOneItem.addEventListener("click", () => {

        sectionOneItem.style.backgroundColor = generateRandomColor()
    })
})