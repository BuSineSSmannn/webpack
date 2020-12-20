import $ from 'jquery'

$('.box')
    .html('HEllo from jquery')
    .css('border','1px solid red')
    .appendTo($('.container'))