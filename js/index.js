let username = document.querySelector("#username");
let pass = document.querySelector("#pass");

let logInbtn = document.querySelector(".button button");
let logInForm = document.querySelector(".logInForm");
let logInSection = document.querySelector("#logIn");
let introSection = document.querySelector("#intro");
let basketIcon = document.querySelector(".icon i");
let basketSection = document.querySelector("#basket");
let guestButton = document.querySelector(".guestButton")

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let userName;
let passWord;

const user = {
    username: "USER",
    pass: "12345",
};


username.addEventListener("change", function (e) {
    const { value: userVal } = e.target;
    userName = userVal;
});
pass.addEventListener("change", function (e) {
    const { value: userPass } = e.target;
    passWord = userPass;
});

logInbtn.addEventListener("click", function (e) {
    const { username: myName, pass: myPassword } = user;
    if (userName === myName && passWord === myPassword) {
        localStorage.setItem("login", JSON.stringify(user));
        location.reload();
    }
});
guestButton.addEventListener("click", () => {
    localStorage.setItem("login", JSON.stringify(user));
    location.reload();
    introSection.style.display = "block"
    logInSection.style.display = "none"

})

basketIcon.addEventListener("click", () => {
    introSection.style.display = "none"
    basketSection.style.display = "block"
});

let localUser = JSON.parse(localStorage.getItem("login"));


if (localUser !== null) {
    introSection.style.display = "block"
    logInSection.style.display = "none"
} else {
    introSection.style.display = "none"
    logInSection.style.display = "block"
}
let btns = [btn1, btn2, btn3, btn4]
btns.forEach(btn => {
    switch (btn) {
        case btn1:
            btn1.addEventListener("click", () => {
                var card1 = document.querySelector(".card1");
                var cln1 = card1.cloneNode(true);
                document.querySelector(".myProduct").appendChild(cln1);
            })
            break;
        case btn2:
            btn2.addEventListener("click", () => {
                var card2 = document.querySelector(".card2");
                var cln2 = card2.cloneNode(true);
                document.querySelector(".myProduct").appendChild(cln2);
            });
            break;
        case btn3:
            btn3.addEventListener("click", () => {
                var card3 = document.querySelector(".card3");
                var cln3 = card3.cloneNode(true);
                document.querySelector(".myProduct").appendChild(cln3);
            });
            break;
        case btn4:
            btn4.addEventListener("click", () => {
                var card4 = document.querySelector(".card4");
                var cln4 = card4.cloneNode(true);
                document.querySelector(".myProduct").appendChild(cln4);

            });
            break;
    }

});
