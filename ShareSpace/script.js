let userInput = prompt("Input Fullname here")
userName.innerHTML = userInput
names.innerHTML = userInput

function arrow() {
    main.style.display = "none"
    homeWrapper.style.display = "block"
    document.title = "ShareSpace - Feed"
}

function cancel() {
    main.style.display = "none"
    homeWrapper.style.display = "block"
    document.title = "ShareSpace - Feed"
    if (textArea.value !== "") {
        notyet.style.display = "none"
    }

}

function recruitMain() {
    loading.innerHTML = "Publish"
    main.style.display = "flex";
    homeWrapper.style.display = "none";
    document.title = "Create post";
    textArea.value = "";
}


function publish() {
    if (textArea.value === "") {
        alert("Input field must not be empty!")
        return;
    }

    var postText = textArea.value
    var newPost = document.createElement("div")
    feedContent.appendChild(newPost)
    newPost.innerHTML = postText;
    newPost.classList.add("custom-post");


    loading.innerHTML = "Publishing...";
    setTimeout(function () {
        notyet.style.display = "none";
        main.style.display = "none";
        homeWrapper.style.display = "block";
        document.title = "ShareSpace - Feed";
    }, 3000);
}

function changeTheme() {
    const body = document.body;
    const themeSwitch = document.querySelector('.switch input');
    body.classList.toggle('light-theme', !themeSwitch.checked);
}


document.addEventListener("DOMContentLoaded", () => {
    changeTheme();
});

