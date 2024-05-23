let searchB = document.getElementById('searchB')
let searchIn = document.getElementById('searchIn')

searchB.addEventListener('click', function () {
    search_comment(searchIn);
});
searchIn.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        search_comment(searchIn);
    }
});

function search_comment(searchIn) {
    loadCommentsFromLocalStorage()
    let contentList = document.querySelectorAll('#commentList p');
    let searchFor = searchIn.value;

    contentList.forEach(paragraph => {
        if (!(paragraph.textContent.match(searchFor))){
            paragraph.remove();
        }
    })
}
