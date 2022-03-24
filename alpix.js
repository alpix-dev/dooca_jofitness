$('.footer-logo-link').attr('href','https://cadastro.dooca.store?partner=5798d07e0e3fbe2a15715ff03873f253');
$('.text-top').insertBefore('header');
//$('.footer-top, .footer-logo-text').remove();
$('<a style="display:block;margin-right:3rem;" href="https://www.alpix.dev?ref=jofitness" target="_blank"><svg style="height: 30px;width: 64px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320.23 150.05"><defs><style>.cls-1{fill:#fc5656;}.cls-2{fill:#b32fd3;}.cls-3{fill:url(#Gradiente_sem_nome_49);}</style><linearGradient id="Gradiente_sem_nome_49" x1="-1021.91" y1="912.64" x2="-898.84" y2="912.64" gradientTransform="translate(1114.16 -837.62)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fc5656"/><stop offset="1" stop-color="#b32fd3"/></linearGradient></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><rect x="215.32" y="40.9" width="19.21" height="70.65"/><rect x="92.25" width="19.11" height="111.55"/><path d="M167.15,39.84a36.48,36.48,0,0,0-17.37,4.38V41.07H130.59V150h19.19V108.58a36.56,36.56,0,1,0,17.37-68.74Zm0,53.87A17.32,17.32,0,1,1,184.47,76.4,17.31,17.31,0,0,1,167.15,93.71Z"/><path d="M53.83,111.37H73l0-70.48H53.87v3.3a36.76,36.76,0,0,0-17.31-4.36,36,36,0,0,0-11.7,1.93,36.55,36.55,0,0,0,0,69.26,36.43,36.43,0,0,0,23.4,0,34.82,34.82,0,0,0,5.61-2.43M36.56,94.13A17.32,17.32,0,1,1,53.87,76.81,17.31,17.31,0,0,1,36.56,94.13Z"/><polygon points="318.51 41.07 305.89 58.94 282.36 58.94 294.97 41.07 318.51 41.07"/><polygon points="320.23 111.55 296.55 111.55 282.36 92.17 268.77 111.55 245.22 111.55 270.5 75.69 270.6 75.55 258.79 58.94 246.09 41.07 269.77 41.07 282.36 58.94 282.38 58.94 294.19 75.69 294.24 75.69 320.23 111.55"/><rect class="cls-1" x="92.25" y="130.94" width="19.11" height="19.11"/><rect class="cls-2" x="196.11" width="19.21" height="19.21"/><rect class="cls-3" x="92.25" y="130.94" width="19.11" height="19.11"/><rect class="cls-3" x="196.11" width="19.21" height="19.21"/></g></g></svg></a>').insertBefore('.footer-logo-link');
$('<div class="footer-jo"> <div class="container"> <div class="row"> <div class="col-12 text-center justify-content-center social"></div></div><div class="row"> <div class="col-12 text-center justify-content-center menu"></div></div><div class="row"> <div class="col-12 text-center justify-content-center payments"></div></div><div class="row"> <div class="col-12 text-center justify-content-center credits"></div></div></div></div><div class="row"> <div class="col-12 text-center justify-content-center info"></div></div>').insertBefore('.footer-middle');
$('.footer-navigation a').appendTo('.footer-jo .menu');
$('.footer-jo .menu a:not(:last-child)').after('<span>/</span>')
$('.footer-social').appendTo('.footer-jo .social');
$('.footer-payment').appendTo('.footer-jo .payments');
$('.footer-jo .payments .h2').text('Formas de Pagamento');
$('.footer-logo-seo .text').appendTo('.footer-jo + .row > .info');
$('.footer-logo a').appendTo('.footer-jo .credits');
$('.footer-middle,.footer-logo').remove();
$('.smart-search').closest('.ml-3').remove();

$('.product-gallery-main img').each(function(){
    let url = $(this).attr('src').split('_')[0] + '.png';
    $(this).attr('src', url)
});
$('.product-color .h4').text('Cor');
$('.header-box .logo-link img').attr('src','https://cdn.jsdelivr.net/gh/alpix-dev/dooca_jofitness/jofitness.svg');
//$('.header-mobile .logo-link img').attr('src','https://cdn.jsdelivr.net/gh/alpix-dev/dooca_jofitness/jofitness_mobile.svg');

if(window.innerWidth < 990){
    $('#banners-commercial-14028098 > .container > .section-title + .row').addClass('owl-carousel owl-drag');
    $('#banners-commercial-14028098 > .container > .section-title + .row').owlCarousel({
        loop:true,
        items:1,
        nav:false,
        autoplay:true,
        autoplaySpeed: 2000
    });
}
$('body').css('opacity','1')