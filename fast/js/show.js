var ultShow = "";

function devShow(text) {
    $("#devShow").remove();

    if ((text != "") && (text != undefined)) {
        var cap = "<div class=\u0022fixed font-fastWeb z-index9999 c-white bottom0 right0 z-index100 height-auto min-height40px bg6-black father padding15px\u0022 id=\u0022devShow\u0022 onclick=\u0022$('#devShow').remove()\u0022>" +
            text +
            '</div>';
        $("body").append(cap);
    }
}

function show(text, icon, solid, btn1, btn2, btn3) {

    endCap();

    if ((solid == undefined) || (!solid)) {
        addCap("8");
    } else {
        addCap("");
    }

    if ((btn1 == undefined) && (btn2 == undefined) && (btn3 == undefined)) {
        addContainerTextImg();
        if ((icon != undefined) && (icon != "")) {
            addIcon(icon);
        }
        addText(text);
        addContainerButton();
        addButton("Ok", 1, "green");

        ultShow = "show";

    } else {
        addContainerTextImg();
        if ((icon != undefined) && (icon != "")) {
            addIcon(icon);
        }
        addText(text);
        addContainerButton();
        if (btn1 == undefined) {
            addButton("Ok", 1, "green");
        } else {
            addButton(btn1, 1, "green");
        }
        if (btn2 != undefined) {
            if (btn2 == "No") {
                addButton(btn2, 2, "red");
            } else {
                addButton(btn2, 2, "orange");
            }
        }
        if (btn3 != undefined) {
            addButton(btn3, 3, "purple");
        }

        ultShow = text;
    }

    if ((btn2 == undefined) && (btn3 == undefined)) {
        $("#capIn").parent().attr("onclick", "endCap()");
    }
}

function loading(text, opac) {

    endCap();

    if (opac == undefined) {
        addCap("8");
    } else {
        addCap(opac);
    }

    if ((text != undefined) && (text != "")) {
        addContainerTextImg();
        addIcon('loading');
        addText(text);
    } else {

        var cap = "<div class=\u0022textCenter font15px z-index9999\u0022> <i class=\u0022fa fa-spinner c-white fa-pulse fa-3x fa-fw margin20px\u0022></i></div>";
        $("#capIn").append(cap);
    }
}

function endCap(cap) {
    if (cap == undefined) {
        cap = "#cap";
    } else {
        cap = "#" + cap;
    }
    $(cap).remove();
    ultShow = "";
}

//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

function addCap(opac, color, id) {

    var color;

    if (opac == undefined) {
        color = "bg-transparent";
    } else {
        if ((color == undefined) || (color == "black")) {

            if (opac == "") {
                color = "bg-black";
            } else {
                color = "bg" + opac + "-black";
            }
        } else if (color == "white") {

            color = "bg" + opac + "-white";
        }
    }

    if (id == undefined) {
        id = "";
    }

    var cap =

        "<div class=\u0022father fastStyle cap z-index9999 " + color + " \u0022 id=\u0022cap" + id + "\u0022 onclick=\u0022 \u0022>" +
        "<div class=\u0022margin20px flex flex-column c-white son z-index9999 textCenter font22px \u0022 id=\u0022capIn\u0022>" +
        "</div>" +
        "</div>";

    $("body").append(cap);
}

function addContainerTextImg() {

    var cap =

        "<div class=\u0022bg8-white corner7\u0022>" +
        "<div class=\u0022flex relative bg8-black corner6 father padding10px\u0022 id=\u0022containerTextImgIn\u0022>" +
        "</div>" +
        "</div>";

    $("#capIn").append(cap);
}

function addIcon(icon) {

    if (icon == "loading") {
        var cap = "<div class=\u0022 max-width70px auto padding10px z-index9999 font15px father\u0022> <i class=\u0022fa fa-spinner c-white fa-pulse fa-3x fa-fw margin20px\u0022></i></div>";
        $("#containerTextImgIn").append(cap);

    } else {
        var cap = "<div class=\u0022 auto padding10px z-index9999 father\u0022> <img src=\u0022fast/img/" + icon + ".png\u0022></div>";
        $("#containerTextImgIn").append(cap);
    }

}

function addText(text) {

    var cap = "<div class=\u0022father padding10px\u0022 id=\u0022show_text\u0022>" +
        text + "</div>";

    $("#containerTextImgIn").append(cap);
}

function addContainerButton() {

    var cap = "<div class=\u0022flex0 son z-index9999 flex marginT-20px\u0022 id=\u0022containerButton\u0022>";

    $("#capIn").append(cap);
}

function addButton(text, numAns, color) {

    var cap = "";

    if (color == "green") {
        color = "bg7-green";
    } else if (color == "orange") {
        color = "bg7-orange";
    } else if (color == "purple") {
        color = "bg7-purple";
    } else if (color == "red") {
        color = "bg7-red";
    }

    cap = "<div onclick=\u0022btn" + numAns +
        "()\u0022 class=\u0022corner5 z-index9999 flex1 " + color +
        " padding10px margin5px father font15px cursorHand\u0022>" + text +
        "</div>";


    $("#containerButton").append(cap);
}

// -----------------------------------------------------------------------------

window.onload = function () {
    document.onkeyup = pressKey;
}

function pressKey(e) {
    key = (document.all) ? e.keyCode : e.which;
    if ((key == 13) && (ultShow == "show")) {
        endCap();
    }
}