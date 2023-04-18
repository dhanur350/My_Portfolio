const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function changeClass() {

    const sunicon = document.getElementById('sunicon');
    const sections = document.getElementById('section');
    const sectionsTwo = document.getElementById('about-me');
    const sectionTwoStyle = window.getComputedStyle(sectionsTwo);
    let sectionTwobgColor = sectionTwoStyle.backgroundColor;
    const boxPresssed = (e) => {
        // e.target.className = "bx bx-moon";
        // sunicon.classList.toggle("bx");
        sunicon.classList.toggle("bx-brightness");
        // sunicon.classList.toggle("bx");
        sunicon.classList.toggle("bx-moon");

        // sections.forEach((section) => {

        // console.log(sectionsTwo.style.backgroundColor);
        // if (sectionsTwo.style.backgroundColor === "#576CBC") {
        //     sectionsTwo.style.backgroundColor = "#FFBF9B"
        // }
        // else {
        //     sectionsTwo.style.backgroundColor = "#576CBC";
        // }
        // sections.classList.toggle("bg-light");
        // sections.classList.toggle("bg-dark");
        // });
    }

    sunicon.addEventListener("click", boxPresssed, { once: true });
}

// if (document.getElementById('sunicon').classList.contains('bx bx-moon')) {
//     console.log(true);
//     document.getElementById('sunicon').classList.toggle("bx bx-brightness");
// }
// else{
//     console.log(false);
//     document.getElementById('sunicon').classList.add("bx bx-moon");
//     document.getElementById('sunicon').classList.remove("bx bx-brightness");
// }

function toggleButton() {
    navList.classList.toggle('show')
}

// hamburgerButton.addEventListener('click', toggleButton)