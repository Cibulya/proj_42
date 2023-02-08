function fillCup(level: number) {
    const coffee = document.querySelector("#Coffee");
    (coffee as HTMLElement).style.transform = `scaleY(${level})`;

    const liquid = document.querySelector(".liquid");
    const steam = document.querySelector(".steam");
    setTimeout(() => {
        (liquid as HTMLElement).style.display = 'block';
        (steam as HTMLElement).style.display = 'block';
        setTimeout(() => {
        (liquid as HTMLElement).style.display = 'none';
        }, 8000)
    }, 4000)

    return;
}

export default fillCup;