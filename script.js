document.body.onclick = function (event) {
    if (event.target.classList.contains('item_min')) {
        document.getElementById('item_max').src = event.target.src;
    }
    let allDivs = document.querySelectorAll('.item_img_min div');
    console.log(allDivs[2]);
    for (let i=0; i<allDivs.length; i++) {
    allDivs[i].classList.remove('active');
    }
    event.target.parentElement.classList.add('active');

}
