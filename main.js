let info = document.querySelectorAll('.hidden-info');
let btns = document.querySelectorAll('.btn');
for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener('click', () => {
        if (info[i].style.display = 'none') {
            info[i].style.display = 'block';
            btn.style.display = 'none';
        }
    })
}