// ==UserScript==
// @name okcupid GLA Tool
// @description okcupid GLA Tool
// @include https://services.okcupid.com/admin/graylistadmin*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version 15
// @grant GM_openInTab
// ==/UserScript==


if (window.addEventListener) {
  window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    //q
    if (e.keyCode == 81) {
      $("#login_history a.sa_ip").each(function()
                                       {
                                           GM_openInTab(window.location.origin + $(this).attr("href"));
                                       });
    }     
  }, true);
}
