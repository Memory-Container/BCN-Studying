function select_language(language) {
    $("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).css("display", "block");
        else
            $(this).css("display", "none");
    });
}
function changeLanuage() {
    let currentLang = $("#lang").text();
    if (currentLang == "EN") {
        select_language("vi")
        $("#lang").text("VN")
    } else {
        select_language("en")
        $("#lang").text("EN")
    }
}
document.querySelector(".logo").addEventListener("click", function() {
    window.location.assign("/index.html")
})
