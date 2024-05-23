function showUsername() {
    var usernameInput = document.getElementById('username');
    var username = usernameInput.value;

    alert(hw.value + ' ' +username)
}

var hw = document.getElementById('hw');
hw.addEventListener('click', showUsername)

