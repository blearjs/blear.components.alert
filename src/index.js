/**
 * alert 组件
 * @author ydr.me
 * @create 2016-05-30 21:13
 */


'use strict';


var Alert = require('blear.ui.alert');
var typeis = require('blear.utils.typeis');
var time = require('blear.utils.time');


/**
 * 弹出警告框
 * @param message {String|Object} 字符串，或者是 Error 实例
 * @returns {*|Window}
 */
module.exports = function (message) {
    var options = {};

    if (typeis.Object(message)) {
        options = message;
    } else {
        message = message || '';
        message = message && message.message ? message.message : message;
        options.message = message;
    }

    var alert = new Alert(options);

    alert.on('sure', function () {
        alert.destroy(function () {
            alert = null;
        });
    });

    alert.open();

    return alert;
};

