// ==UserScript==
// @name         Clone Update Course settings
// @namespace    https://github.com/cotitto/canvas-userscripts
// @version      1.1
// @include      https://*.instructure.com/courses/*/settings
// @description  Clone the update setting buttons
// @author       cotitto
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".form-actions:contains('Update Course Details')").clone().prependTo("#course_form");
	$(".form-actions:contains('Actualizar detalles del curso')").clone().prependTo("#course_form");
})();
