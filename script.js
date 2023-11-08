window.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((bookObj) => {
      bookObj
        .forEach((element) => {
          if (element.img && element.title && element.price) {
            const row = document.getElementById("books");
            const col = document.createElement("div");
            col.className = "col-3 mt-5";

            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.className = "card-img-top";
            img.src = element.img;

            const body = document.createElement("div");
            body.className = "card-body";

            const h5 = document.createElement("div");
            h5.className = "card.title";
            h5.innerText = element.title;

            const p = document.createElement("p");
            p.className = "card-text";

            const button = document.createElement("a");
            button.className = "btn btn-primary";
            button.innerText = "Scarta";

            body.appendChild(h5);
            body.appendChild(p);
            body.appendChild(button);
            card.appendChild(img);
            card.appendChild(body);
            col.appendChild(card);
            row.appendChild(col);
          }
        })
        .catch((err) => console.log(err));
    });
