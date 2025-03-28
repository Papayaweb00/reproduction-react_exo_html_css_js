async function affichagePagelegume() {
    const element = await fetch("legumejson/legume.json");
    const legumeElement = await element.json();
    // console.log(legumeElement);
    var main = document.querySelector("main");
    var h1 = document.createElement("h1");
    main.appendChild(h1);
    h1.innerText = "legumes";
    h1.classList.add("text-center");
    h1.classList.add("m-4");
    h1.classList.add("fw-bold");


    const contentsection = document.createElement("div");
    contentsection.classList.add("contentsection");
    main.appendChild(contentsection);

    for (var i = 0; i < legumeElement.length; i++) {
        const legume = legumeElement[i];

        const img = document.createElement("img");
        img.src = legume.image;
        img.classList.add("po2");
        // console.log(img);

        const description = document.createElement("h5");
        description.innerHTML = legume.description;
        description.classList.add("card-text");
        description.classList.add("text-center");
        // console.log(description);

        const prix = document.createElement("p");
        prix.innerText = legume.prix;
        prix.classList.add("card-title");
        prix.classList.add("text-danger");
        prix.classList.add("fw-bold");
        prix.classList.add("fs-2");
        // console.log(prix);

        const section = document.createElement("section");
        section.classList.add("section");
        contentsection.appendChild(section);

        const container = document.createElement("div");
        container.classList.add("container");
        container.classList.add("my-5");
        section.appendChild(container);

        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);

        const card = document.createElement('div');
        card.classList.add("card");
        card.classList.add("code");
        col.appendChild(card);

        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.classList.add("card-body");
        cardBody.setAttribute("id", `c${i}`);
        console.log(cardBody);
        
        card.appendChild(cardBody);
        cardBody.appendChild(prix);
        cardBody.appendChild(description);

        const button = document.createElement("a");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.classList.add("w-100");
        button.setAttribute("href", "#");
        button.setAttribute("id", "p" + i);
        console.log(button);
        
        button.innerText = "Mettre au panier";
        cardBody.appendChild(button);
    }

    var o = 0;
    $("#p0").click(function () {
        o++;
        $(".k").hide();
        $("#clicker").append(`
                <div class="container my-5">
                    <div class="row d-flex  align-items-center gap-5">
                        <div class="col">
                            <img src="../../images/fruits/image.png" alt="fruits" class="po12">
                        </div>

                        <div class="col">
                            <h5 class="text-danger fw-bold fs-2">1000fcfa</h5>
                        </div>

                        <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                            <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                            <div class="bg-dark text-light py-3 px-4"><span id="cgt">0</span></div>
                            <button class="btn"><i class="fa-solid fa-plus" id="plus"></i></button>
                        </div>

                        <div class="col">
                            <button class="btn fs-3 text-danger"><i class="fa-solid fa-trash" id="poubelle"></i></button>
                        </div>
                    </div>
                </div>
            `);
        // $(this).attr("class", "arret");
        const btn = $("<button></button>");

        btn.text("Voir le panier");
        btn.attr({
            "class": "btn btn-primary w-100",
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#canvas2",
            "aria-controls": "canvas",
        });
        $(this).css("display", "none");
        $("#c0").append(btn);

        $(".count").text(o);
    })

    $("#p1").click(function () {
        $(".k").hide();
        o++;
        $("#clicker").append(`
                <div class="container my-5">
                    <div class="row d-flex  align-items-center gap-5">
                        <div class="col">
                            <img src="../../images/fruits/image copy.png" alt="fruits" class="po12">
                        </div>

                        <div class="col">
                            <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                        </div>

                        <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                            <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                            <div class="bg-dark text-light py-3 px-4"><span id="cgt">0</span></div>
                            <button class="btn"><i class="fa-solid fa-plus" id="plus"></i></button>
                        </div>

                        <div class="col">
                            <button class="btn fs-3 text-danger"><i class="fa-solid fa-trash" id="poubelle"></i></button>
                        </div>
                    </div>
                </div>
            `);
        const btn = $("<button></button>");

        btn.text("Voir le panier");
        btn.attr({
            "class": "btn btn-primary w-100",
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#canvas2",
            "aria-controls": "canvas",
        });
        $(this).css("display", "none")
        $("#c1").append(btn)

        $(".count").text(o);
    })

    $("#p2").click(function () {
        $(".k").hide();
        o++;
        $("#clicker").append(`
                <div class="container my-5">
                    <div class="row d-flex  align-items-center gap-5">
                        <div class="col">
                            <img src="../../images/fruits/image copy 2.png" alt="fruits" class="po12">
                        </div>

                        <div class="col">
                            <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                        </div>

                        <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                            <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                            <div class="bg-dark text-light py-3 px-4"><span id="cgt">0</span></div>
                            <button class="btn"><i class="fa-solid fa-plus" id="plus"></i></button>
                        </div>

                        <div class="col">
                            <button class="btn fs-3 text-danger"><i class="fa-solid fa-trash" id="poubelle"></i></button>
                        </div>
                    </div>
                </div>
            `);
        const btn = $("<button></button>");

        btn.text("Voir le panier");
        btn.attr({
            "class": "btn btn-primary w-100",
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#canvas2",
            "aria-controls": "canvas",
        });
        $(this).css("display", "none")
        $("#c2").append(btn)

        $(".count").text(o);
    })

    $("#p3").click(function () {
        o++;
        $(".k").hide();
        $("#clicker").append(`
                <div class="container my-5">
                    <div class="row d-flex  align-items-center gap-5">
                        <div class="col">
                            <img src="../../images/fruits/image copy 3.png" alt="fruits" class="po12">
                        </div>

                        <div class="col">
                            <h5 class="text-danger fw-bold fs-2">1000fcfa</h5>
                        </div>

                        <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                            <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                            <div class="bg-dark text-light py-3 px-4"><span id="cgt">0</span></div>
                            <button class="btn"><i class="fa-solid fa-plus" id="plus"></i></button>
                        </div>

                        <div class="col">
                            <button class="btn fs-3 text-danger"><i class="fa-solid fa-trash" id="poubelle"></i></button>
                        </div>
                    </div>
                </div>
            `);
        // $(this).attr("class", "arret");
        const btn = $("<button></button>");

        btn.text("Voir le panier");
        btn.attr({
            "class": "btn btn-primary w-100",
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#canvas2",
            "aria-controls": "canvas",
        });
        $(this).css("display", "none")
        $("#c3").append(btn)

        $(".count").text(o);
    })
}
affichagePagelegume()