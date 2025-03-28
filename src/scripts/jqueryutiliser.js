$(document).ready(function () {
    var o = 0;
    var e = 0;
    $("#env").hide();

    $("#p0").click(function () {
        o++;
        $(".k").hide();
        $("#env").show();
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/vetements/image.png" alt="vetements" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c0").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p1").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/vetements/image copy 5.png" alt="vetements" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p2").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/vetements/image copy 4.png" alt="vetements" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p3").click(function () {
        o++;
        $(".k").hide();
        $("#env").show();
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/fruits/image.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p4").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/fruits/image copy.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c4").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p5").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/fruits/image copy 2.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c5").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p6").click(function () {
        o++;
        $(".k").hide();
        $("#env").show();
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/legumes/image copy 2.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c6").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p7").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/legumes/image copy 3.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c7").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p8").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/legumes/image.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c8").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p9").click(function () {
        o++;
        $(".k").hide();
        $("#env").show();
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/jouets/image copy 2.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c9").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p10").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/jouets/image copy 3.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c10").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })

    $("#p11").click(function () {
        $(".k").hide();
        $("#env").show();
        o++;
        $("#clicker").append(`
            <div class="container my-5">
                <div class="row d-flex  align-items-center gap-5">
                    <div class="col">
                        <img src="../../images/jouets/image.png" alt="fruit" class="po12">
                    </div>

                    <div class="col">
                        <h5 class="card-title text-danger fw-bold fs-2">1000fcfa</h5>
                    </div>

                    <div class="col bg-light hot text-black d-flex  align-items-center justify-content-around">
                        <button class="btn"><i class="fa-solid fa-minus" id="moin"></i></button>
                        <div class="bg-dark text-light py-3 px-4"><span>0</span></div>
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
        $("#c11").append(btn)

        $(".count").text(o);
        // if($("#Total")===0){
        //     $("#Total").html(e+1000);
        // } else if($("#Total")===1000) {
        //     $("#Total").html(1000+1000);
        // } else{
        //     $("#Total").html(0)
        // }
    })
})