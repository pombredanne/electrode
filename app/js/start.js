'use strict';
var $ = window.$;
window.$ = window.jQuery = require('jquery');

var mainAddress = 'http://localhost:4040';

$.ajax({
    type: 'HEAD',
    url: mainAddress,
    success: function () {
        location.replace(mainAddress);
    },
    error: function() {
        console.log('this page does not exist');
    }
});
