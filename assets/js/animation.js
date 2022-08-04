let navbar = document.querySelectorAll("nav a");

for (let link of navbar) {
    link.addEventListener("click", function() {
        let current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
        }
        this.className += " active";
    });
}