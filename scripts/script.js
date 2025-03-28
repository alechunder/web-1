function pozdrav() {
    alert("Děkujeme, že jste navštívili naši kavárnu!");
}

function darkmode() {
    document.body.classList.toggle('bodyDarkmode');

    document.querySelector("h1").classList.toggle('h1Darkmode');

    document.querySelectorAll("button").forEach(button => {
        button.classList.toggle('buttonDarkmode');
    });

    document.querySelectorAll("table").forEach(table => {
        table.classList.toggle('tableDarkmode');
    });

    document.querySelectorAll("label").forEach(label => {
        label.classList.toggle('labelDarkmode');
    });

    document.querySelectorAll("input").forEach(input => {
        input.classList.toggle('inputDarkmode');
    });

    document.querySelectorAll("th").forEach(th => {
        th.classList.toggle('thDarkmode');
    });

    document.querySelectorAll("td").forEach(td => {
        td.classList.toggle('tdDarkmode');
    });
}

document.querySelector("form").onsubmit = function(event) {
    event.preventDefault(); // Prevent page reload
    localStorage.setItem("name", (document.getElementById("name").value));
    localStorage.setItem("email", (document.getElementById("email").value));
    alert("Uloženo do LocalStorage!");
};