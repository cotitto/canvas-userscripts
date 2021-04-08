// ==UserScript==
// @name         Expand Profile Course Enrollment List while in Profile
// @namespace    https://github.com/cotitto
// @version      1
// @include      https://*.instructure.com/accounts/1/users/*
// @description  Expand course enrollments when visiting profile
// @author       cotitto
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
    //Expand Course Enrollment List while in Canvas Profile//
$(".unstyled_list.context_list").css({"max-height":"800px"});
})();
