// ==UserScript==
// @name           Flagadmin Tool
// @description   Flagadmin Tool
// @include        https://services.okcupid.com/flagmod*
// @exclude        /.google.com./
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     14
// @grant   GM_openInTab

// ==/UserScript==

var $blacklist = 1;
var $username = "";

if ( window.addEventListener ) {
      window.addEventListener("keydown",
      function(e){

               if (e.keyCode == 49){
               if ($blacklist)
               {

                   $('input[type=radio][name=action][value=6]').prop('checked',true);
               }

                else
               {
                   GM_openInTab('mailto:jase@okcupid.com?Subject=https://services.okcupid.com/admin/superadmin?uid='+$username);

                   $('input[type=radio][name=action][value=2]').prop('checked',true);

                    $('input[type=submit][name=vote][value=vote]').trigger('click');
               }
              } //1 aka blacklist

              if (e.keyCode == 50){$('input[type=radio][name=action][value=3]').prop('checked',true);}

               if (e.keyCode == 52){$('input[type=submit][name=skip][value=skip]').trigger('click');}
              if (e.keyCode == 51){$('input[type=radio][name=action][value=2]').prop('checked',true);} //dismiss

               if (e.keyCode == 32){$('input[type=submit][name=vote][value=vote]').trigger('click');} //spacebar

              if (e.keyCode == 81){
                  var url='http://images.google.com/searchbyimage?image_url=' + $('div[id=user_images] a:first').attr('href');

                   GM_openInTab(url);
              }           
              if (e.keyCode ==  87){GM_openInTab($('a[href*="https://services.okcupid.com/admin/superadmin?uid="]').attr('href'));}      
              if (e.keyCode ==  69){GM_openInTab($('a[href*="https://services.okcupid.com/admin/spammeradmin?show_auto_approve=1&senderid="]').attr('href'));}      

       }, true);
}

$("*").each(function(){$(this).css('background-color','#333333'); $(this).css('color','#cccccc'); });  
$username = $("div[id=username] a:first").text();

$("input[type=radio][name=action][value=9]").each(function(){$blacklist = 0;});
