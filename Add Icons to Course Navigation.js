// ==UserScript==
// @name         Add Icons to Course Navigation
// @namespace    https://github.com/cotitto/canvas-userscripts
// @version      1.1
// @description  Add Canvas icons
// @author       You
// @include      https://*.instructure.com/courses/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
      //$("a.pages").append( "icon","icon-document");
    $("a.home").append(`\xa0\xa0<i class="icon-home" padding="inherit" role="presentation"></i>`);
    $("a.syllabus").append(`\xa0\xa0<i class="icon-syllabus" aria-hidden="true" role="presentation"></i>`);
    $("a.announcements").append(`\xa0\xa0<i class="icon-announcement" aria-hidden="true" role="presentation"></i>`);
    $("a.pages").append(`\xa0\xa0<i class="icon-document" aria-hidden="true" role="presentation"></i>`);
    $("a.assignments").append(`\xa0\xa0<i class="icon-assignment" aria-hidden="true" role="presentation"></i>`);
    $("a.quizzes").append(`\xa0\xa0<i class="icon-quiz" aria-hidden="true" role="presentation"></i>`);
    $("a.discussions").append(`\xa0\xa0<i class="icon-discussion" aria-hidden="true" role="presentation"></i>`);
    $("a.files").append(`\xa0\xa0<i class="icon-paperclip" aria-hidden="true" role="presentation"></i>`);
    $("a.context_external_tool").append(`<i class="icon-integrations" aria-hidden="true" role="presentation"></i>`);
    $("a.external_tool").append(`<i class="icon-integrations" aria-hidden="true" role="presentation"></i>`);
    $("a.rubrics").append(`\xa0\xa0<i class="icon-icon-rubric" aria-hidden="true" role="presentation"></i>`);
    $("a.people").append(`\xa0\xa0<i class="icon-address-book" aria-hidden="true" role="presentation"></i>`);
    $("a.grades").append(`\xa0\xa0<i class="icon-gradebook" aria-hidden="true" role="presentation"></i>`);
    $("a.outcomes").append(`\xa0\xa0<i class="icon-outcomes" aria-hidden="true" role="presentation"></i>`);
    $("a.modules").append(`\xa0\xa0<i class="icon-module" padding="inherit" role="presentation"></i>`);

    $("a.settings").append(`\xa0\xa0<i class="icon-settings" aria-hidden="true" role="presentation"></i>`);

      //var item_types = [{id: "wiki_page", label: "Pages", icon: "icon-document"},
                    //    {id: "assignment", label: "Assignments", icon: "icon-assignment"},
                     //   {id: "quiz", label: "Quizzes", icon: "icon-quiz"},
                     //   {id: "discussion_topic", label: "Discussion Topics", icon: "icon-discussion"},
                     //   {id: "external_url", label: "Links", icon: "icon-link"},
                     //   {id: "attachment", label: "Files", icon: "icon-paperclip"},
                      //  {id: "context_external_tool", label: "External Tools", icon: "icon-integrations"}];


})();
