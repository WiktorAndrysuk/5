
let header       = document.querySelector('.info-header'),
    headerTab    = document.querySelectorAll('.info-header-tab'),
    tabcontent   = document.querySelectorAll('.info-tabcontent');

function hideTab(a){
    for(let i = a; i < tabcontent.length; i++){
        tabcontent[i].classList.add('hide');
        tabcontent[i].classList.remove('show');
    }
}

hideTab(1);
function showTab(b){
    if(tabcontent[b].classList.remove('hide')){
        tabcontent[b].classList.add('show');
        tabcontent[b].classList.remove('hide');
    }
}

header.addEventListener('click', function(event){
    console.log(event);
    let target = event.target;
    if(target && target.classList.contains('info-header-tab')){
        for(let i = 0; headerTab.length; i++){
            if(target == headerTab[i]){
                hideTab(0);
                showTab(i);
                break;
            }
        }
    }
});