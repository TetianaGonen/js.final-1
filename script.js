const getS = selector => document.querySelector(selector);

getS('.btn-tag').onclick = function () {
    getS('.second').classList.add('show');
    getS('.first').classList.add('hide');
    getS('.edit-area').value = getS('.top-block').innerHTML;

}

getS('.btn-save').onclick = function () {
    getS('.first').classList.remove('hide');
    getS('.second').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}


getS('.btn-bold').addEventListener('click', function () {
    getS('.top-block').classList.toggle('bold');
});

getS('.btn-cursive').addEventListener('click', function () {
    getS('.top-block').classList.toggle('italic');
});

getS('.btn-underlined').addEventListener('click', function () {
    getS('.top-block').classList.toggle('underline');
});

getS('.btn-crossedout').addEventListener('click', function () {
    getS('.top-block').classList.toggle('line-through');

});

getS('.btn-align-left').onclick = function () {
    getS('.top-block').style.textAlign = 'left';

}

getS('.btn-align-center').onclick = function () {
    getS('.top-block').style.textAlign = 'center';
}

getS('.btn-align-right').onclick = function () {
    getS('.top-block').style.textAlign = 'right';
}

getS('.btn-font-size').addEventListener('click', function () {
    getS('#font-size').classList.toggle('show');

});

getS('.btn-font-family').addEventListener('click', function(){
    getS('#font-family').classList.toggle('show');
});

// function fontSize() { //доступ до кожного елементу (чи до його значення value) на який клікаємо і  
//     //console.log(event.target.textContent); //на який в html повісили onclick з ф-цією fontSize ()
//     getS('.top-block').style.fontSize = el.target.textContent;
// }

const link = document.querySelectorAll('a');
for(let i=0; i<link.length; i++){
    link[i].addEventListener('click', el => {
        let fontSize = el.target.textContent;
        let fontFamily = el.target.textContent;
        getS('.top-block').style.fontSize = getS('.top-block').style.fontSize=== fontSize ? "" : fontSize;
        
        getS('.top-block').style.fontFamily =  getS('.top-block').style.fontFamily=== fontFamily ? "" : fontFamily;
       
    })
    console.log(link);
}



