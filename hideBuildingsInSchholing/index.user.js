// ==UserScript==
// @name         Hide Buildings with schooled Personal
// @version      0.1
// @description  Blendet Gebäude mit ausgebildetem Personal beim Ausbilden aus!
// @author       Leitstellenleiter112
// @match        https://www.leitstellenspiel.de/buildings/*
// @match        https://www.leitstellenspiel.de/schoolings/*
// @icon         https://www.google.com/s2/favicons?domain=leitstellenspiel.de
// ==/UserScript==
/* global $ */

(function() {
    'use strict';

    function check(){
        $("span.label-success").parent().parent().parent().parent().addClass("hidden");
        $("span.label-success:last").parent().parent().parent().parent().removeClass("hidden");
        console.log(window.location.href)
    }

    $(document).on("scroll", function(){setTimeout(check, 200)})
    if($("h1:first").attr("building_type") == 3 || $("h1:first").attr("building_type") == 1 || $("h1:first").attr("building_type") == 8 || $("h1:first").attr("building_type") == 10){
        check();
        $(".check").on("click", check);
    }

    if(window.location.href.includes("schooling")){
        check();
    };

})();
