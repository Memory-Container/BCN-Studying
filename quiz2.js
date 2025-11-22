let bar = document.querySelector(".progress")
let answer = []
let questionList= [
    "Bạn thích làm việc với thứ nào hơn?",
    "Khi bạn thấy một ứng dụng hoặc website đẹp, bạn thường nghĩ điều gì đầu tiên?",
    "Khi sử dụng một trang web hoặc app, bạn chú ý điều gì trước tiên?",
    "Khi xem video hướng dẫn, bạn thích nội dung kiểu nào hơn?",
    "Khi đang lướt mạng xã hội bạn bị thu hút bởi loại nội dung nào sau đây?",
    "Điều nào khiến bạn tò mò nhất?",
    "Khi làm việc, bạn thích điều gì?",
    "Khi bạn tưởng tượng tạo ra một thứ gì đó cho người khác dùng, bạn muốn làm gì?",
]
let questionListEN = [
    "Which of the following do you prefer to work with?",
    "When you see a beautiful app or website, the first thing you usually think about is?",
    "When using a website or app, what do you pay attention to first?",
    "When watching tutorial videos, what type of content do you prefer?",
    "When scrolling through social media, the type of content are you most drawn to is?",
    "What makes you most curious?",
    "When working, what do you enjoy doing?",
    "When you imagine creating something for others to use, what would you like to build?",
]

let answerList = [
    ["Máy tính, trình duyệt","Điện thoại, ứng dụng","Hình ảnh, màu sắc, bố cục"],
    ["Không biết họ làm trang web này như thế nào nhỉ?", "Không biết app này chạy ra sao trên điện thoại?", "Màu sắc và bố cục này phối đẹp ghê!"],
    ["Cách nó hoạt động, bấm vào đây thì ra gì","Nó có tiện dùng trên điện thoại không","Màu sắc, bố cục, hình ảnh có đẹp không"],
    ["Xây dựng trang web từ những bước nhỏ","Làm app đơn giản ","Hướng dẫn làm poster, logo, hình minh họa"],
    ["Website, công nghệ mới","App điện thoại, tính năng mới của smartphone","Video thiết kế đẹp, màu sắc, logo, UI/UX"],
    ["Cách website hoạt động","Tính năng trên điện thoại","Những thứ mang tính thẩm mỹ"],
    ["Làm ra thứ hoạt động tốt và có logic","Làm ra thứ mà người dùng có thể chạm vào trên điện thoại","Làm ra thứ nhìn đẹp, gọn, đúng ý đồ thiết kế"],
    ["Một trang web mọi người có thể xem bằng trình duyệt","Một ứng dụng ai cũng có thể dùng trên điện thoại","Một thiết kế đẹp: banner, poster, hình minh họa"],
]
let answerListEN = [
    ["Computers, browsers", "Phones, mobile applications", "Images, colors, layout "],
    ["How did they build this website?", "How does this app run on a phone?", "This colors and layout are beautiful!"],
    ["How it works, what happens if I click?", "Is it convenient to use on a phone?", "Are the colors, layout, images good?"],
    ["Building a website from small steps", "Creating simple mobile apps", "Tutorials on making posters, logos, or illustrations"],
    ["Websites, new technology trends", "Mobile apps, new smartphone features", "Visually appealing design videos, color schemes, logos, UI/UX"],
    ["How a website functions/works", "Features on a mobile phone", "Things with aesthetic value/design"],
    ["Creating something that works well and is logical", "Creating something a user can interact with on their phone", "Creating something that looks beautiful, clean, and fulfills the design intent"],
    ["A website everyone can view using a browser", "An application anyone can use on their phone", "A beautiful design: banner, poster, illustration"],
]
function updateProgress() {
    let progress = answer.length / questionList.length * 100;
    bar.style.width = `${progress}%`
    if (progress >= 100) {
        bar.style.borderRadius = "5px";
        bar.style.width = `100%`
    }
}
let question = document.querySelector(".question")
let answerCard = document.getElementsByClassName("card")
let current = 0;
function setActive(index, mode = 0) {
    if (mode == 1) {
    } else {
        document.getElementsByClassName('primary')[2].classList.remove("disabled")
        answer[current] = index 
    }
    updateProgress()
    document.querySelector(".progress-info").textContent = ` ${Math.floor(answer.length)}/${Math.floor(questionList.length)}`
    for (i = 0; i < 3; i++) {
        answerCard[i].classList.remove("active")
        if (i == index - 1) {
            answerCard[i].classList.add("active") 
        }
    }
}
function updateQuestion(mode) {
    if (mode == "next") {
        if (answer.length < current + 1) {
            return 0;
        }
        if (answer.length == questionList.length) {
            window.location.assign("/done-quiz.html")
        }
        document.getElementsByClassName('primary')[1].classList.remove("disabled")
        if (answer[current + 1] == undefined) {
            document.getElementsByClassName('primary')[2].classList.add("disabled")
        }
        current >= questionList.length - 1 ? current = questionList.length - 1 : current++
    }
    if (mode == "previous") {
        if (current - 1 <= 0 ) {
            current = 0;
            document.getElementsByClassName('primary')[1].classList.add("disabled")
        } else {
            current--
        }
        document.getElementsByClassName('primary')[2].classList.remove("disabled")
    }
    setActive(answer[current], 1)
    question.innerHTML = `
        <span lang="en"> ${questionListEN[current]} </span>
        <span lang="vi"> ${questionList[current]} </span>
    `
    for (i = 0; i < 3; i++) {
        answerCard[i].innerHTML = `
        <span lang="vi">${answerList[current][i]}</span>
        <span lang="en">${answerListEN[current][i]}</span>
    `
    }
    select_language(currentLang)
}
updateQuestion()
//Progress Bar