$(function () {

    $("#panel").animate({ 'top': '250px', 'opacity': '1' }, 2000, function x() {
        $("#welcome").animate({ 'left': '3%' }, 100, function y() {
            $("#to").animate({ 'left': '32%' }, 300, function z() {
                $("#my").animate({ 'left': '60%' }, 300, function w() {
                    $("#project").animate({ 'left': '70%' }, 300);
                });
            });
        });
    });

    var rnd = [];
    var randomNumber;
    var diff = 4;
    while (rnd.length < diff) {
        var r = Math.floor(Math.random() * 25 + 1);
        if (rnd.indexOf(r) === -1) {
            rnd.push(r);
            var x = '#' + `${r}`;
            console.log(x);
            $(x).css("visibility", "initial");
        }
    }
    $("#difficulty").change(function () {
        diff = parseInt($(this).val());
        while (rnd.length < diff) {
            var r = Math.floor(Math.random() * 25 + 1);
            if (rnd.indexOf(r) === -1) {
                rnd.push(r);
                var x = '#' + `${r}`;
                console.log(x);
                $(x).css("visibility", "initial");
            }
        }
        
    });

    $("#play_btn").click(function x() {

        $("#startPage").fadeOut(1000, function x() {
            $("#gameScreen").fadeIn(1000);
            $("body").css("background", "#9765E4");


            for (var i = 0; i < diff; i++) {
                $(`#${rnd[i]}s`).text(i + 1).delay(2000 * (i + 1)).fadeIn(300).delay(1400).fadeOut(300);
            }
        });
    });
    var count = 1;
    $("#gameScreen").on("click", ".box", function () {
        var num = $(this).attr("id");
        console.log(num);
        
        if (count == $(`#${num}s`).text()) {
            $(`#${num}s`).remove();
            $(`#${num}`).append(`<img src="imgs/checkmark.png" style="width:100px;height:100px; position:relative; top:10px;left:0px;" alt="">`);
            $(`#${num}`).off();
            count++;
            console.log(count,diff);
        }
        else{
            
            $(`#${num}s`).remove();
            $("#gameScreen").off();
            $(`#${num}`).append(`<img src="imgs/cross-flat.png" style="width:100px;height:100px; position:relative; top:10px;left:0px;" alt="">`);
            $("body").append(`<div id="gameResult">
                <span class='infoAboutGame' style="color:#F84545;">FAILED</span><br>
                <span class="infoAboutGame2">You have failed at level ${diff}<br>F5 to start the game</span>
            </div>`);
        }
        if((count-1)===diff){
            $("#gameScreen").off();
            $("body").append(`<div id="gameResult">
                <span class='infoAboutGame' style="color:#2DCB70;">Congratulations</span><br>
                <span class="infoAboutGame2">You completed level ${diff}<br>F5 to start the game</span>
            </div>`);
        }
    });

});