// Add your custom JavaScript for storefront pages here.
$('#search-input').on('input', (e) => {
    console.log(e.currentTarget.value)
    $('.search__box.card').show()
    $('.search__input.form-control').val(e.currentTarget.value).trigger('input')
})
