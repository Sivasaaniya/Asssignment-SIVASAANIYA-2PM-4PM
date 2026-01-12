let products = ["Mobile", "Laptop", "Tablet", "Headphones"];

let list = document.createElement("ul");

products.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});

document.body.appendChild(list);