var blockRightClick = false;

// -----------------------------------Right Click locked
if (blockRightClick) {
    document.oncontextmenu = function () {
        return false;
    }
}

// -----------------------------------Change page
function goTo(page) {

    $(".page").each(function () {
        $(this).addClass("none");
    });

    $("#" + page).removeClass("none");

    addCap("2", "white");
    $("#cap").fadeOut(120, function () {
        endCap("cap");
    });
}

// -----------------------------------Goto link
function goToLink(link) {
    location.href = link;
}

function _write(_id, _text, _blinkStart, _blinkEnd, _index) {

    if(_blinkStart == undefined){
        _blinkStart = 3;
    }

    if(_blinkEnd == undefined){
        _blinkEnd = 3;
    }

    var _time = 100;

    if (_index == undefined) {
        _index = 0;
        _blinkEnd = _blinkEnd-1;

        _blink(_id, _blinkStart, function () {
            _writing(_id, _text, _blinkStart, _blinkEnd, _index);
        });
    } else {
        _writing(_id, _text, _blinkStart, _blinkEnd, _index);
    }

    function _blink(_id, _times, callback, _index) {
        var blinkTime = 500;
        if (_index == undefined) {
            _index = 0;
        }

        setTimeout(function () {
            $("#" + _id).text($("#" + _id).text() + "|");
            setTimeout(function () {
                $("#" + _id).text($("#" + _id).text().substring(0, $("#" + _id).text()
                    .length - 1));
                if (_index < _times - 1) {
                    _index++;
                    _blink(_id, _times, callback, _index);
                } else {
                    if (typeof callback === "function") {
                        callback();
                    }
                }
            }, blinkTime);
        }, blinkTime);
    }

    function _writing(_id, _text, _blinkStart, _blinkEnd, _index) {
        if (_index < _text.length) {
            $("#" + _id).text(_text.substring(0, _index + 1) + "|");
            setTimeout(function () {
                _write(_id, _text, _blinkStart, _blinkEnd, _index + 1);
            }, _time);
        } else {
            $("#" + _id).text($("#" + _id).text().substring(0, $("#" + _id).text().length - 1));
            _blink(_id, _blinkEnd);
        }
    }
}

function aInAbc(a, abc) {
    return (abc.indexOf(a) > -1)
}