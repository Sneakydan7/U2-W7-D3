window.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((bookObj) => {
      bookObj
        .forEach((element) => {
          if (element.img && element.title && element.price) {
            const row = document.getElementById("books");

            const col = document.createElement("div");
            col.className = " col-12 col-sm-6 col-md-3 col-xl-2 mt-5";

            const card = document.createElement("div");
            card.className = "card h-100 ";

            const img = document.createElement("img");
            img.className = "card-img-top h-100 object-fit-cover";
            img.src = element.img;

            const body = document.createElement("div");
            body.className = "card-body text-center";

            const h5 = document.createElement("div");
            h5.className = "card-title text-truncate";
            h5.innerText = element.title;
            h5.id = "title";

            const p = document.createElement("p");
            p.className = "card-text";
            p.innerText = element.price + "$";
            p.id = "price";
            const button = document.createElement("a");
            button.className = "btn btn-primary";
            button.innerText = "Scarta";

            button.onclick = function (e) {
              e.target.closest(".col-12").remove();
            };

            const saveButton = document.createElement("a");
            saveButton.className = "btn btn-primary mt-2";
            saveButton.innerText = "Add to Cart";

            saveButton.onclick = function (e) {
              let ul = document.getElementById("ul");
              let newLi = document.createElement("li");
              let title = document.getElementById("title");
              let price = document.getElementById("price");
              newLi.innerText = e.target.closest(".card-title").;
              ul.appendChild(newLi);
            };

            body.appendChild(h5);
            body.appendChild(p);
            body.appendChild(button);
            body.appendChild(saveButton);
            card.appendChild(img);
            card.appendChild(body);
            col.appendChild(card);
            row.appendChild(col);
          }
        })
        .catch((err) => console.log("occhio ar palo", err));
    });
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
