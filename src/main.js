let sidebar = document.getElementById("sidebar");

function showSB () {
    sidebar.style.display = "block";
}

function toggleSB(event) {
    let element = event.currentTarget;
    if(element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// sidebar.addEventListener('click', toggleSB)

function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
}