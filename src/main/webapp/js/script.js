let open = false;

function abrir() {
    open = !open;
    toggleMenu(open);
}

function fechar() {
    open = false;
    toggleMenu(open);
}

function toggleMenu(open) {
    let menu = $('.crn-navigator-vertical');
    let nav = $('.crn-navigator-vertical .header');
    let dark = $('#dark-content');
    let content = $('#main-view');
    let imagem = $('.image')[0].children;

    if (open) {
        nav[0].classList.add('abrir');
        dark[0].classList.add('memory-backdrop');
        imagem[0].style['display'] = 'none';
        imagem[1].style['display'] = 'block';
        menu[0].style['width'] = '19vw';

    } else {
        nav[0].classList.remove('abrir');
        dark[0].classList.remove('memory-backdrop');
        imagem[0].style['display'] = 'block';
        imagem[1].style['display'] = 'none';
        menu[0].style['width'] = '49px';
        content[0].style['width'] = '91vw';
    }

}