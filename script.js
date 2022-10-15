function testGS() {
  const url =
    "https://script.google.com/macros/s/AKfycbxR3aVGfPXefFt-wsuv8HHavai8v6I5gcJ8rVlZzdwMIwBNn89A_QgpJDjipkmlzr3V/exec"
  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click", testGS);
