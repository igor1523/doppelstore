// Add your custom JavaScript for storefront pages here.
$('.header__search-input').on('input', function(){
    $('.search__box.card').show()
    $('body .search__input').val($(this).val())[0].dispatchEvent(new Event('input'));
});

$('body').click((e) => {
    if($(e.target).closest('.header__search').length == 0){
        $('#instant-search .search__status .close').click();
    }
})
