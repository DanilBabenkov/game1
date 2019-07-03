window.onload = function () {
    $(".col-12").on("click", ".but", function (e) {
        var spicok = $("#spick").text();
        if (spicok < 10) {
            var par = $(e.target).parent().parent().parent().clone(true);
            var er = $(".col-md-8").children().children().first().children().last();
            var m = par.children().children().last().removeClass("col-7").addClass("col-4");
            er.after(par);
            par.children().children().last().children().html('Надеть');
            par.children().children().last().children().removeClass('but').addClass('dob');
            var a = par.children().append(m.clone(true));
            var izi = a.children().last().children().html('Продать');
            var izi1 = izi.removeClass('dob').addClass('del');
            izi1.parent().removeClass("col-4").addClass('col-3');
            if (par.attr("class") == "col-12 eda" || par.attr("class") == "col-12 potion" || par.attr("class") == "col-12 poison") {
                par.children().children().last().prev().children().html('Применить');
                par.children().children().last().prev().children().removeClass('dob').addClass('prm');
            }
            var spicok = $("#spick").text();
            var otvetspick = spicok * 1 + 1;
            $("#spick").html(otvetspick);
            var money = $("#money");
            var chit = money.text();
            var otvet = chit - 20;
            money.html(otvet);
        }
    });

    $(".col-12").on("click", ".prm", function (e) {

        var par = $(e.target).parent().parent().parent();
        
        if (par.attr("class") == "col-12 eda") {
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var attack = $("#hungry").text();
            var otv = attack * 1 + prov * 1;
            $("#hungry").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 + prov1 * 1;
            $("#xp").html(otv1);
            par.remove();
        }

        if (par.attr("class") == "col-12 potion") {
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var attack = $("#lov").text();
            var otv = attack * 1 + prov * 1;
            $("#lov").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 + prov1 * 1;
            $("#xp").html(otv1);
            var attack = $("#zaz").text();
            var otv2 = attack * 1 + prov2 * 1;
            $("#zaz").html(otv2);
            par.remove();
        }

        if (par.attr("class") == "col-12 poison") {
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var attack = $("#attack").text();
            var otv = attack * 1 - prov * 1;
            $("#attack").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 - prov1 * 1;
            $("#xp").html(otv1);
            
            par.remove();
        }

        
    });


    $(".col-12").on("click", ".dob", function (e) {
        var c = 0, a = 0, b=0, g =0, f = 0;
        
        var ed = $(e.target).parent().parent().parent();
        
        var len = $(e.target).parent().parent().parent().parent().next();
        
        var d = len[0].children.length;
        var lenn = len.children();
        for (var i = 0; i < d - 1; i++) {            
            lenn = lenn.next();
            if (lenn.attr("class") == "col-12 meh") {                
                c++;
            }                       
        }
        var lenn = len.children();
        for (var i = 0; i < d - 1; i++) {
            lenn = lenn.next();
            if (lenn.attr("class") == "col-12 colc") {
                a++;
            }
        }
        var lenn = len.children();
        for (var i = 0; i < d - 1; i++) {
            lenn = lenn.next();
            if (lenn.attr("class") == "col-12 nog") {
                f++;
            }
        }
        var lenn = len.children();
        for (var i = 0; i < d - 1; i++) {
            lenn = lenn.next();
            if (lenn.attr("class") == "col-12 trs") {
                g++;
            }
        }
        var lenn = len.children();
        for (var i = 0; i < d - 1; i++) {
            lenn = lenn.next();
            if (lenn.attr("class") == "col-12 shlm") {
                b++;
            }
        }
     
        var ig = $(e.target).parent().parent().parent().parent().next();
        var ig1 = ig.children().last();
        if (c == 0 && ed.attr("class") == "col-12 meh") {
            var ig = $(e.target).parent().parent().parent().parent().next();
            var ig1 = ig.children().last();
            ig1.after(ed);
            ed.children().children().last().children().css({ display: "none" });;
            $(e.target).html('Снять');
            $(e.target).removeClass("dob").addClass("sny");
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var attack = $("#attack").text();
            var otv = attack * 1 + prov1 * 1;
            $("#attack").html(otv);
            var sil = $("#sil").text();
            var otv1 = sil * 1 + prov * 1;
            $("#sil").html(otv1);
            var spicok = $("#spick").text();
            var otvetspick = spicok * 1 - 1;
            $("#spick").html(otvetspick);
        }
        if (b == 0 && ed.attr("class") == "col-12 shlm") {
            var ig = $(e.target).parent().parent().parent().parent().next();
            var ig1 = ig.children().last();
            ig1.after(ed);
            $(e.target).html('Снять');
            $(e.target).removeClass("dob").addClass("sny");
            ed.children().children().last().children().css({ display: "none" });;
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 + prov2 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 + prov1 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#ym").text();
            var otv2 = sil1 * 1 + prov * 1;
            $("#ym").html(otv2);
            var spicok = $("#spick").text();
            var otvetspick = spicok * 1 - 1;
            $("#spick").html(otvetspick);
        }
        if (g == 0 && ed.attr("class") == "col-12 trs") {
            var ig = $(e.target).parent().parent().parent().parent().next();
            var ig1 = ig.children().last();
            ig1.after(ed);
            $(e.target).html('Снять');
            $(e.target).removeClass("dob").addClass("sny");
            ed.children().children().last().children().css({ display: "none" });;
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 + prov2 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 + prov1 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#ym").text();
            var otv2 = sil1 * 1 + prov * 1;
            $("#ym").html(otv2);
            var spicok = $("#spick").text();
            var otvetspick = spicok * 1 - 1;
            $("#spick").html(otvetspick);
        }
        if (f == 0 && ed.attr("class") == "col-12 nog") {
            var ig = $(e.target).parent().parent().parent().parent().next();
            var ig1 = ig.children().last();
            ig1.after(ed);
            $(e.target).html('Снять');
            $(e.target).removeClass("dob").addClass("sny");
            ed.children().children().last().children().css({ display: "none" });;
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 + prov2 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 + prov1 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#lov").text();
            var otv2 = sil1 * 1 + prov * 1;
            $("#lov").html(otv2);
            var spicok = $("#spick").text();
            var otvetspick = spicok * 1 - 1;
            $("#spick").html(otvetspick);
        }
        if (a < 2 && ed.attr("class") == "col-12 colc") {
            var ig = $(e.target).parent().parent().parent().parent().next();
            var ig1 = ig.children().last();
            ig1.after(ed);
            $(e.target).html('Снять');
            $(e.target).removeClass("dob").addClass("sny");
            ed.children().children().last().children().css({ display: "none" });;
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var prov3 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().prev().text();
            var prov4 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().prev().prev().text();
            var prov5 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().prev().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 + prov5 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 + prov4 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#lov").text();
            var otv2 = sil1 * 1 + prov3 * 1;
            $("#lov").html(otv2);
            var attack = $("#mp").text();
            var otv3 = attack * 1 + prov2 * 1;
            $("#mp").html(otv3);
            var sil = $("#attack").text();
            var otv4 = sil * 1 + prov1 * 1;
            $("#attack").html(otv4);
            var sil1 = $("#hungry").text();
            var otv5 = sil1 * 1 + prov * 1;
            $("#hungry").html(otv5);
            var spicok = $("#spick").text();
            var otvetspick = spicok * 1 - 1;
            $("#spick").html(otvetspick);
        }

       

    });

    $(".col-12").on("click", ".sny", function (e) {
        $(e.target).html('Надеть');
        var m = $(e.target).removeClass("sny").addClass("dob");
        var ed = $(e.target).parent().parent().parent();
        var rrr = ed.children().children().last().children().css({ display: "block" });;

       

       var ig = $(e.target).parent().parent().parent().parent().prev();
        var ig1 = ig.children().last();
        ig1.after(ed);

        if (ed.attr("class") == "col-12 nog") {          
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 - prov2 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 - prov1 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#lov").text();
            var otv2 = sil1 * 1 - prov * 1;
            $("#lov").html(otv2);
        }
        if (ed.attr("class") == "col-12 colc") {            
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var prov3 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().prev().text();
            var prov4 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().prev().prev().text();
            var prov5 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().prev().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 - prov5 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 - prov4 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#lov").text();
            var otv2 = sil1 * 1 - prov3 * 1;
            $("#lov").html(otv2);
            var attack = $("#mp").text();
            var otv3 = attack * 1 - prov2 * 1;
            $("#mp").html(otv3);
            var sil = $("#attack").text();
            var otv4 = sil * 1 - prov1 * 1;
            $("#attack").html(otv4);
            var sil1 = $("#hungry").text();
            var otv5 = sil1 * 1 - prov * 1;
            $("#hungry").html(otv5);
        }
        if (ed.attr("class") == "col-12 meh") {            
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var attack = $("#attack").text();
            var otv = attack * 1 - prov1 * 1;
            $("#attack").html(otv);
            var sil = $("#sil").text();
            var otv1 = sil * 1 - prov * 1;
            $("#sil").html(otv1);
        }
        if (ed.attr("class") == "col-12 shlm") {           
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 - prov2 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 - prov1 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#ym").text();
            var otv2 = sil1 * 1 - prov * 1;
            $("#ym").html(otv2);
        }
        if (ed.attr("class") == "col-12 trs") {
            var prov = $(e.target).parent().parent().parent().children().children().first().children().last().text();
            var prov1 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().text();
            var prov2 = $(e.target).parent().parent().parent().children().children().first().children().last().prev().prev().text();
            var attack = $("#zaz").text();
            var otv = attack * 1 - prov2 * 1;
            $("#zaz").html(otv);
            var sil = $("#xp").text();
            var otv1 = sil * 1 - prov1 * 1;
            $("#xp").html(otv1);
            var sil1 = $("#ym").text();
            var otv2 = sil1 * 1 - prov * 1;
            $("#ym").html(otv2);
        }
        var spicok = $("#spick").text();
        var otvetspick = spicok * 1 + 1;
        $("#spick").html(otvetspick);
    });

    $(".col-12").on("click", ".del", function (e) {
        
        //$(e.target).parent().parent().parent().removeClass().addClass("col-12 gold");
        //var ed = $(e.target).parent().parent().parent().parent();   
        
        var ed3 = $(e.target).parent().prev().prev().prev().next().next();
        //var d = ed[0].children.length;
        //var lenn = ed.children();
        //for (var i = 0; i < d - 1; i++) {
        //    lenn = lenn.next();
        //    if (lenn.attr("class") == "col-12 gold") {
        //        a++;
        //    }
        //}
       
        //if (a > 1) {
        //    y = a;
        //    var g = "X" + y;

        //    ed.children().first().next().remove();
                     
        //    ed3.text(g);
        //    var spicok = $("#spick").text();
        //    var otvetspick = spicok * 1 - 1;
        //    $("#spick").html(otvetspick);
        //} 
       
        var ed1 = $(e.target).parent().prev().prev().prev().children().first();
        var ed2 = $(e.target).parent().prev().prev().prev().next();
        var ed4 = $(e.target).parent().prev().prev().prev().next().next().next();
        ed1.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qi9WHJ3uhfX0RNpwbSbAPTstiN4v3QgmrihJs-ca_Am44oKtww"); 
        ed2.html(' Золотые Монетки');
        ed3.remove();
        ed4.remove();
        var money = $("#money");
        var chit = money.text();        
        chit =  chit*1 + 20;
        money.html(chit);
        

    });
}