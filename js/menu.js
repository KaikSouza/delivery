$(document).ready(function() {

    $('.linknav').click(function(nav) {
        nav.preventDefault()

        let urlnav = $(this).attr('href')

        $('#content').empty()

        $('#content').load(urlnav)
    })

    $('.dropdown-item').click(function(dropdown) {
        dropdown.preventDefault()

        let url = $(this).attr('href')

        $('#content').empty()

        $('#content').load(url)
    })

})