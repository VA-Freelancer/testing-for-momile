
document.querySelector('#alive-search').oninput = function (){

    let val = this.value.trim();
    let searchDate = document.querySelectorAll('.data__list li>a');
    if(val !==  ''){
        searchDate.forEach(function (elem){
            if(elem.innerText.search(val) === -1){
                elem.parentElement.classList.add('hide');
                // elem.innerHTML = elem.innerText;
            }
            else{
                elem.parentElement.classList.remove('hide');
                let str = elem.innerText;
                let pos = elem.innerText.search(val);
                elem.innerHTML = insertMark(str, pos, val.length);
            }
        });
    }
    else {
        searchDate.forEach(function (elem) {
            elem.parentElement.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        })
    }
}
function insertMark(searchWorld, pos, len){
    return searchWorld.slice(0, pos) + '<mark>' + searchWorld.slice(pos, pos + len) + '</mark>' + searchWorld.slice(pos + len);
}

const searchInputBox = document.querySelector('.vp-search-alive--wrapper');
const searchDataBox = document.querySelector('.vp-search__date');


searchInputBox.addEventListener('focus', function (e){
    searchDataBox.classList.add('focus')

})
searchInputBox.addEventListener('blur', function (e){
    searchDataBox.classList.remove('focus')

})
// searchInputBox.onfocus = function (){
//     if(searchInputBox.onfocus){
//         console.log('focus');
//     }
//
// }
// searchInputBox.blur = function (){
//
//     if(searchInputBox.blur){
//
//     }
//
// }
