let lang = "en"
let currentLang = localStorage.getItem("lang")
function select_language(language) {
    lang = language
    $("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).css("display", "block");
        else
            $(this).css("display", "none");
    });
}
function changeLanuage(lang = currentLang) {
    let currentLang = $("#lang").text();
    if (currentLang == "EN") {
        select_language("vi")
        $("#lang").text("VN")
        localStorage.clear()
        localStorage.setItem("lang", 'vi')
    } else {
        select_language("en")
        $("#lang").text("EN")
        localStorage.clear()
        localStorage.setItem("lang", 'en')
    }
}
document.querySelector(".logo").addEventListener("click", function() {
    window.location.assign("/index.html")
})
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed!");
    if (currentLang == undefined) {
        select_language("en")
        currentLang = "en"
        localStorage.setItem("lang", 'en')
    }
    select_language(currentLang)
    if (currentLang == "vi") {
        $("#lang").text('VN');
    } else {
        $("#lang").text('EN');
    }
});