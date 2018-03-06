/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
	Customization: by Firsh for Justified Image Grid v2.8.2
------------------------------------------------------------------------- */
function loadJIGprettyPhoto(a){function Q(){var a=!1,d;d=location.hash;d=d.replace("%5B","[");d=d.replace("%5D","]");d=d.replace(/([^|])(poster=|videoplayer)/mg,"$1|$2");d=d.match(/^#!?([\w\-[\]]+?\/(?:(\d+)(?=\/))?(https?:\/\/[^&]*)?([A-Z]{2}\/[_\w]*)?)/im);null!==d&&(a=d[1]);return a}function V(a){if("undefined"!=typeof theRel){var d=!1;if(1==settings.smart_deeplinking&&a){d="";a=a.eq(set_position);d=a.attr("class");-1===d.indexOf("jig-contentID")&&(d=a.closest(".jig-imageContainer").attr("class"));
d=/(?:jig-contentID)-(\w{2})-([^\s]*)/im.exec(d);null!=d&&(d=d[1]+"/"+d[2]);if(d){location.hash="!"+theRel+"/"+d;return}d=!0}location.hash=1==settings.advanced_deeplinking||1==d?"!"+theRel+"/"+pp_images[set_position]:theRel+"/"+rel_index+"/"}}function v(a,d){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var h=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(d);return null==h?"":h[1]}function H(){var c=a(".jig_pp_twitter iframe.twitter-share-button"),d=a(".jig_pp_twitter");10>z&&0!==c.length&&(300==c.width()&&
150==c.height()||0==c.width()&&0==c.height())?(c=d.attr("data-url"),d=d.attr("data-text"),a(".jig_pp_twitter").empty().append('<a class="twitter-share-button" data-count="none" data-url="'+c+'" data-text="'+d+'">'),twttr.widgets.load(),setTimeout(function(){a(".jig_pp_twitter iframe.twitter-share-button").ready(function(){setTimeout(function(){H()},300)})},50)):z=0}function E(a,d){return"hasOwnProperty"in a?a.hasOwnProperty(d):Object.prototype.hasOwnProperty.call(a,d)}a.prettyPhoto={version:"3.1.6"};
a.prettyPhoto.JIG=!0;a.fn.prettyPhoto=function(c){function d(){var b=a(".jig_pp_pinterest"),f=a(".pp_details .pp_social").height();if(0!==b.length){var c=b.get(0).scrollWidth;0!==c&&"undefined"!==typeof b.find("a").attr("data-pin-log")?(a(".jig_pp_pinterest").addClass("jig_pp_measured_pinterest").width(c),f<a(".pp_details .pp_social").height()&&a(".pp_content").height(a(".pp_content").height()+a(".pp_details .pp_social").height()-f),"undefined"!==typeof I&&(J=0,clearTimeout(I))):30>J&&(I=setTimeout(function(){J++;
d()},500))}}function h(a,f){a=W(a);f=(((f||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");return a.replace(/\x3c!--[\s\S]*?--\x3e|<\?(?:php)?[\s\S]*?\?>/gi,"").replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,function(a,b){return-1<f.indexOf("<"+b.toLowerCase()+">")?a:""})}function W(a,f){if(void 0===a)return"";var c=0,d=!1;"undefined"===typeof f&&(f=2);a=a.toString().replace(/&lt;/g,"<").replace(/&gt;/g,">");var e={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,
ENT_QUOTES:3,ENT_IGNORE:4};0===f&&(d=!0);if("number"!==typeof f){f=[].concat(f);for(var g=0,l=f.length;g<l;g+=1)0===e[f[g]]?d=!0:e[f[g]]&&(c|=e[f[g]]);f=c}f&e.ENT_HTML_QUOTE_SINGLE&&(a=a.replace(/&#0*39;/g,"'"));d||(a=a.replace(/&quot;/g,'"'));return a=a.replace(/&amp;/g,"&")}function K(){a(".pp_loaderIcon").hide();projectedTop=scroll_pos.scrollTop+(y/2-e.containerHeight/2);0>projectedTop&&(projectedTop=0);$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:e.imageHeight,
width:e.imageWidth},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:0>w/2-e.containerWidth/2?0:w/2-e.containerWidth/2,width:e.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(e.height).width(e.width);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);isSet&&"image"==L(pp_images[set_position])&&1<pp_images.length?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide();
settings.allow_expand&&(e.resized?a("a.pp_expand,a.pp_contract").show():a("a.pp_expand").hide());!settings.autoplay_slideshow||A||M||a.prettyPhoto.startSlideshow();settings.changepicturecallback();M=!0});isSet&&settings.overlay_gallery&&"image"==L(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((e.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=
Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?
Math.floor(set_position/itemsPerPage):totalPage,a.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");c.ajaxcallback();settings.social_tools&&(-1!==N&&d(),-1!==O&&H())}function z(b){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){a(".pp_loaderIcon").show();b()})}
function E(b){1<b?a(".pp_nav").show():a(".pp_nav").hide()}function k(a,f){R(a,f);var c=!1,d=w-50,e=y-40,g=a,l=f;if((B>d||C>e)&&doresize&&settings.allow_resize&&!F)for(var c=!0,h=!0,k=!1;h;)B>d&&(g=Math.min(d,g)-20,l=f/a*g,200>g&&(g=200,l=f/a*g,k=!0)),C>e&&(l=Math.min(e,l)-20,g=a/f*l,200>l&&(l=200,g=a/f*l,k=!0)),R(g,l),h=0==k&&(B>d||C>e)?!0:!1;G();return{width:Math.floor(g),height:Math.floor(l),containerHeight:Math.floor(C),containerWidth:Math.floor(B)+2*settings.horizontal_padding,imageHeight:Math.floor(P),
imageWidth:Math.floor(S),resized:c}}function R(b,f){b=parseFloat(b);f=parseFloat(f);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(b);var c=0,d="facebook"!==settings.theme?settings.theme:"pp_facebook",d=a('<div class="prettyPhotoTemporaryMeasure"><div class="pp_content_container"></div></div>').addClass(d).css({position:"absolute",top:-1E4}).appendTo("body");$pp_details=$pp_details.clone().width(b).appendTo(d.find(".pp_content_container"));if("inside"==settings.title_position){a(".pp_details.pp_includes_title").removeClass("pp_alt_x_position pp_alt_br_position pp_socials_own_line");
a(".pp_details .pp_nav, .pp_details .pp_description, .pp_details .pp_bottom_right").removeAttr("style");var e=$pp_details.find(".pp_description:visible");0!==e.length&&0===e.position().left?(a(".pp_details .pp_description").css("margin-right",0).prev().css("margin-right",48),$pp_details.find(".pp_social").outerWidth(!0)<$pp_details.width()-$pp_details.find(".pp_nav").outerWidth(!0)?a(".pp_details.pp_includes_title").addClass("pp_alt_br_position"):a(".pp_details.pp_includes_title").addClass("pp_alt_x_position")):
0!==$pp_details.find(".pp_bottom_right").position().top&&(0===e.length||30<$pp_details.find(".pp_social").height()?a(".pp_details.pp_includes_title").addClass("pp_alt_x_position"):(a(".pp_details .pp_description").css("margin-right",0),a(".pp_details .pp_bottom_right").css("float","none"),1==$pp_details.find(".pp_social").length&&a(".pp_details.pp_includes_title").addClass("pp_socials_own_line")))}c+=d.outerHeight(!0);c=34>=c?36:c;d.remove();titleHeight=0;"inside"!==settings.title_position&&($pp_title=
$pp_pic_holder.find(".ppt"),$pp_title.width(b),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(a("body")).css({position:"absolute",top:-1E4}),titleHeight+=$pp_title.height(),$pp_title.remove());P=f+c;S=b;C=P+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();B=b}function L(a){return a.match(/\b\|videoplayer\b/i)?"videoplayer":a.match(/youtube\.com\/watch/i)||a.match(/youtu\.be/i)?
"youtube":a.match(/vimeo\.com/i)?"vimeo":a.match(/\b.mov\b/i)?"quicktime":a.match(/\b.swf\b/i)?"flash":a.match(/\biframe=true\b/i)?"iframe":a.match(/\bajax=true\b/i)?"ajax":a.match(/\bcustom=true\b/i)?"custom":"#"==a.substr(0,1)?"inline":"image"}function G(){if(doresize&&"undefined"!=typeof $pp_pic_holder){scroll_pos=T();var a=$pp_pic_holder.height(),c=$pp_pic_holder.width();projectedTop=y/2+scroll_pos.scrollTop-a/2;0>projectedTop&&(projectedTop=0);a>y||$pp_pic_holder.css({top:projectedTop,left:w/
2+scroll_pos.scrollLeft-c/2})}}function T(){if(self.pageYOffset)return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};if(document.documentElement&&document.documentElement.scrollTop)return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};if(document.body)return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}function U(b){settings.markup=settings.markup.replace("{pp_social}","");a("body").append(settings.markup);$pp_pic_holder=
a(".pp_pic_holder");$ppt=a(".ppt");$pp_overlay=a("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(b=0;b<pp_images.length;b++)pp_images[b].match(/\b(jpg|jpeg|png|webp|bmp|gif)\b/gi)?(classname="","undefined"!==typeof r?(img_src=r.find('a.jig-link[href="'+pp_images[b]+'"]:not(.jig-hiddenLink) img').eq(0).attr("src"),"undefined"==typeof img_src&&(img_src=pp_images[b])):img_src=pp_images[b]):(classname=' class="default"',img_src=""),toInject+="<li"+classname+
'><a href="#"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="background-image: url('+img_src+');" alt="'+pp_titles[b]+'" /></a></li>';toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=a(".pp_pic_holder .pp_gallery");$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){a.prettyPhoto.changeGalleryPage("next");a.prettyPhoto.stopSlideshow();
return!1});$pp_gallery.find(".pp_arrow_previous").click(function(){a.prettyPhoto.changeGalleryPage("previous");a.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=57;$pp_gallery_li.each(function(b){a(this).find("a").click(function(){a.prettyPhoto.changePage(b);a.prettyPhoto.stopSlideshow();return!1})})}settings.slideshow&&
($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){a.prettyPhoto.startSlideshow();return!1}));$pp_pic_holder.attr("class","pp_pic_holder "+("facebook"!==settings.theme?settings.theme:"pp_facebook"));$pp_overlay.css({opacity:0,height:a(document).height(),width:a(window).width()}).bind("click",function(){settings.modal||a.prettyPhoto.close()});a("a.pp_close").bind("click",function(){a.prettyPhoto.close();return!1});
settings.allow_expand&&a("a.pp_expand").bind("click",function(b){a(this).hasClass("pp_expand")?(a(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(a(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0);z(function(){a.prettyPhoto.open()});return!1});$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){a.prettyPhoto.changePage("previous");a.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",
function(){a.prettyPhoto.changePage("next");a.prettyPhoto.stopSlideshow();return!1});G()}jigReCallPrettyPhotoAfterPossibleResize="undefined"===typeof c||"undefined"!==typeof c&&"undefined"===typeof c.jig_call?!0:void 0;c=jQuery.extend({jig_call:!1,jig_socials:"ftpg",title_position:"inside",videoplayer:!1,hook:"rel",advanced_deeplinking:!1,smart_deeplinking:!0,animation_speed:"fast",ajaxcallback:function(){},slideshow:5E3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,
default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:300,keyboard_shortcuts:!0,analytics:!1,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> <div class="ppt">&nbsp;</div> <div class="pp_top"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> <div class="pp_content_container"> <div class="pp_left"> <div class="pp_right"> <div class="pp_content"> <div class="pp_loaderIcon"></div> <div class="pp_fade"> <a href="#" class="pp_expand" title="Expand the image">Expand</a> <div class="pp_hoverContainer"> <a class="pp_next" href="#">next</a> <a class="pp_previous" href="#">previous</a> </div> <div id="pp_full_res"></div> <div class="pp_details"> <div class="pp_nav"> <a href="#" class="pp_arrow_previous">Previous</a> <a href="#" class="pp_arrow_next">Next</a> <p class="currentTextHolder">0/0</p> </div> <p class="pp_description"></p> <div class="pp_bottom_right"> <a class="pp_close" href="#">Close</a> <div class="pp_social">{pp_social}</div> </div> </div> </div> </div> </div> </div> </div> <div class="pp_bottom"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> </div> <div class="pp_overlay"></div>',
gallery_markup:'<div class="pp_gallery"> <a href="#" class="pp_arrow_previous">Previous</a> <div> <ul> {gallery} </ul> </div> <a href="#" class="pp_arrow_next">Next</a> </div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" allowfullscreen></iframe>',
inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:!0,jig_facebook:'<div class="jig_pp_social_btn jig_pp_facebook"><iframe src="//www.facebook.com/plugins/like.php?href={f_location_href}&amp;width=135&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:135px; height:21px;" allowTransparency="true"></iframe></div>',jig_twitter:'<div class="jig_pp_social_btn jig_pp_twitter" data-url="{unencoded_location_href}" data-text="{twitter_text}"><a class="twitter-share-button" data-count="none" data-url="{unencoded_location_href}" data-text="{twitter_text}">Tweet</a><script>jigPrettyPhotoHandleTwitter();\x3c/script></div>',
jig_pinterest:'<div class="jig_pp_social_btn jig_pp_pinterest"><a href="//www.pinterest.com/pin/create/button/?url={location_href}&media={location_img}&description={d}" class="pin-it-button" data-pin-do="buttonPin" data-pin-config="beside"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" /></a><script type="text/javascript">window["jigBuildPinterestButton"](jQuery(".jig_pp_pinterest")[0]);\x3c/script></div>',jig_google:'<div class="jig_pp_social_btn jig_pp_google"><g:plusone size="medium" annotation="none" href="{unencoded_location_href}"></g:plusone><script type="text/javascript">(function(){if(document.getElementById("jigGooglePlus"))gapi.plusone.go();else{var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://apis.google.com/js/plusone.js";a.id="jigGooglePlus";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}})();\x3c/script></div>'},
c);!1===c.jig_call&&!0===c.smart_deeplinking&&!0===c.deeplinking&&(c.smart_deeplinking=!1,c.advanced_deeplinking=!0);if(c.social_tools){var g=c.jig_socials,g=g.toLowerCase(),g=g.split(""),t=a.inArray("f",g),O=a.inArray("t",g),N=a.inArray("p",g),x=a.inArray("g",g);-1!==t&&(g[t]=c.jig_facebook);-1!==O&&(g[O]=c.jig_twitter);-1!==N&&(g[N]=c.jig_pinterest,"undefined"===typeof window.jigBuildPinterestButton&&(window.jigBuildPinterestButton=function(a){setTimeout(function(){window.jigBuildPinterestButton(a)},
500)}),!0===c.jig_call&&"undefined"==typeof window.jigPinterestTrickRan&&(window.jigPinterestTrick(),a(window).off("load",window.jigPinterestTrick).on("load",window.jigPinterestTrick)));-1!==x&&(g[x]=c.jig_google);c.social_tools=g.join("")}var p=this,F=!1,e,M,P,S,C,B,y=a(window).height(),w=a(window).width(),A,r;1==c.jig_call&&(r=p.first().closest(".justified-image-grid"));doresize=!0;scroll_pos=T();-1==p.selector.indexOf("#jig")&&(p=p.filter(":not(.justified-image-grid a)"));c.matchedObjects=p;a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",
function(){y=a(window).height();w=a(window).width();"undefined"!=typeof $pp_overlay&&$pp_overlay.height(a(document).height()).width(w);G()});c.keyboard_shortcuts&&a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(b){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(b.keyCode){case 37:a.prettyPhoto.changePage("previous");b.preventDefault();break;case 39:a.prettyPhoto.changePage("next");b.preventDefault();break;case 27:settings.modal||a.prettyPhoto.close(),
b.preventDefault()}});a.prettyPhoto.initialize=function(){settings=c;"pp_default"==settings.theme&&(settings.horizontal_padding=16);theRel=a(this).attr(settings.hook);(isSet=/\[(?:.*)\]/.exec(theRel)?!0:!1)?(pp_images=jQuery.map(p,function(b,c){if(a(b).attr(settings.hook)&&-1!=a(b).attr(settings.hook).indexOf(theRel))return a(b).attr("href")}),pp_titles=jQuery.map(p,function(b,c){if(a(b).attr(settings.hook)&&-1!=a(b).attr(settings.hook).indexOf(theRel))return a(b).find("img").attr("alt")?a(b).find("img").attr("alt"):
""}),pp_descriptions=jQuery.map(p,function(b,c){if(a(b).attr(settings.hook)&&-1!=a(b).attr(settings.hook).indexOf(theRel))return a(b).attr("title")?a(b).attr("title"):""})):(pp_images=a.makeArray(a(this).attr("href")),pp_titles=a.makeArray(a(this).find("img").attr("alt")),pp_descriptions=a.makeArray(a(this).attr("title")));pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1);set_position=jQuery.inArray(a(this).attr("href"),pp_images);rel_index=isSet?set_position:a("a["+settings.hook+
"^='"+theRel+"']").index(a(this));U(this);settings.allow_resize&&a(window).bind("scroll.prettyphoto",function(){y=a(window).height();w=a(window).width();G()});a.prettyPhoto.open();return!1};a.prettyPhoto.open=function(b,f,d,g){"undefined"==typeof settings&&(settings=c,pp_images=a.makeArray(b),pp_titles=f?a.makeArray(f):a.makeArray(""),pp_descriptions=d?a.makeArray(d):a.makeArray(""),isSet=1<pp_images.length?!0:!1,set_position=g?g:0,U(b.target));settings.hideflash&&a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility",
"hidden");E(a(pp_images).size());a(".pp_loaderIcon").show();settings.deeplinking&&V(settings.matchedObjects);1==settings.analytics&&"undefined"!==typeof _gaq&&_gaq.push(["_trackEvent","Photos","View",pp_images[set_position]]);f="";1==settings.advanced_deeplinking||1==settings.smart_deeplinking?(f=decodeURI(document.location.href),b=f.split("#!"),f=b[0]+"#!"+b[1]):f=location.href;settings.social_tools?(b=settings.social_tools.replace(/{location_href}/g,encodeURIComponent(location.href)),b=b.replace(/{unencoded_location_href}/g,
location.href),d="?",-1!==f.indexOf("?")&&f.indexOf("?")<f.indexOf("#!")&&(d="&"),b=b.replace("{f_location_href}",encodeURIComponent(f.replace("#!",d+"_escaped_fragment_="))),f=/(?:poster=)(.*)(?:\|videoplayer)/m.exec(pp_images[set_position]),b=null===f?b.replace(/{location_img}/g,encodeURIComponent(pp_images[set_position])):b.replace(/{location_img}/g,encodeURIComponent(f[1])),f="","undefined"!==typeof pp_titles[set_position]?(f=pp_titles[set_position],b=b.replace(/{twitter_text}/g,pp_titles[set_position])):
b=b.replace(/{twitter_text}/g,document.title),"undefined"!==typeof pp_descriptions[set_position]&&(f+=""!==f?" "+pp_descriptions[set_position]:pp_descriptions[set_position]),b=b.replace(/{d}/g,encodeURIComponent(h(f.replace(/<a(?:.+?)href=['"](.+?)['"](?:.+?>)(.+?)(?:<\/a>)/mg,"$2: $1")))),$pp_pic_holder.find(".pp_social").html(b)):$pp_pic_holder.find(".pp_social").remove();$ppt.is(":hidden")&&$ppt.css("opacity",0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text(set_position+
1+settings.counter_separator_label+a(pp_images).size());"inside"==settings.title_position&&(pp_descriptions[set_position]=(settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?'<div class="ppt_inside">'+pp_titles[set_position]+"</div>":"")+("undefined"!=typeof pp_descriptions[set_position]?pp_descriptions[set_position]:""),pp_titles[set_position]=void 0,$pp_pic_holder.find(".pp_details").addClass("pp_includes_title"));"undefined"!=typeof pp_descriptions[set_position]&&
""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(pp_descriptions[set_position]):$pp_pic_holder.find(".pp_description").hide();var m=parseFloat(v("width",pp_images[set_position]))?v("width",pp_images[set_position]):settings.default_width.toString(),n=parseFloat(v("height",pp_images[set_position]))?v("height",pp_images[set_position]):settings.default_height.toString();F=!1;-1!=n.indexOf("%")&&(n=parseFloat(a(window).height()*parseFloat(n)/100-150),F=!0);-1!=m.indexOf("%")&&
(m=parseFloat(a(window).width()*parseFloat(m)/100-150),F=!0);$pp_pic_holder.fadeIn(function(){settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?$ppt.html(pp_titles[set_position]):$ppt.remove();var b="",c=!1;switch(L(pp_images[set_position])){case "image":var b=new Image,d=new Image;isSet&&set_position<a(pp_images).size()-1&&(d.src=pp_images[set_position+1]);d=new Image;isSet&&pp_images[set_position-1]&&(d.src=pp_images[set_position-1]);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=
settings.image_markup.replace(/{path}/g,pp_images[set_position]);b.onload=function(){e=k(b.width,b.height);K()};b.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");a.prettyPhoto.close()};b.src=pp_images[set_position];break;case "youtube":e=k(m,n);movie_id=v("v",pp_images[set_position]);""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],0<movie_id.indexOf("?")&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),
0<movie_id.indexOf("&")&&(movie_id=movie_id.substr(0,movie_id.indexOf("&"))));movie="http://www.youtube.com/embed/"+movie_id;v("rel",pp_images[set_position])?movie+="?rel="+v("rel",pp_images[set_position]):movie+="?rel=1";settings.autoplay&&(movie+="&autoplay=1");toInject=settings.iframe_markup.replace(/{width}/g,e.width).replace(/{height}/g,e.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case "vimeo":e=k(m,n);movie_id=pp_images[set_position];d=movie_id.match(/https?:\/\/(?:www\.)?vimeo\.com\/(?:(\d+)|channels\/\w+?\/(\d+))/m);
movie="http://player.vimeo.com/video/"+(d[1]|d[2])+"?title=0&amp;byline=0&amp;portrait=0";settings.autoplay&&(movie+="&autoplay=1;");vimeo_width=e.width+"/embed/?moog_width="+e.width;toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,e.height).replace(/{path}/g,movie);break;case "quicktime":e=k(m,n);e.height+=15;e.imageHeight+=15;e.containerHeight+=15;toInject=settings.quicktime_markup.replace(/{width}/g,e.width).replace(/{height}/g,e.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,
pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case "flash":e=k(m,n);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,e.width).replace(/{height}/g,e.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case "iframe":e=
k(m,n);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,e.width).replace(/{height}/g,e.height).replace(/{path}/g,frame_url);break;case "videoplayer":e=k(m,n);frame_url=pp_images[set_position];!1!==settings.videoplayer&&(frame_url=settings.videoplayer+frame_url.substr(0,frame_url.indexOf("|videoplayer")).replace(/\|/,"&"));toInject=settings.iframe_markup.replace(/{width}/g,e.width).replace(/{height}/g,e.height).replace(/{path}/g,
frame_url);break;case "ajax":doresize=!1;e=k(m,n);c=doresize=!0;a.get(pp_images[set_position],function(a){toInject=settings.inline_markup.replace(/{content}/g,a);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;K()});break;case "custom":e=k(m,n);toInject=settings.custom_markup;break;case "inline":myClone=a(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show(),
doresize=!1,e=k(a(myClone).width(),a(myClone).height()),doresize=!0,a(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,a(pp_images[set_position]).html())}b||c||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,K())});return!1};a.prettyPhoto.changePage=function(b){currentGalleryPage=0;"previous"==b?(set_position--,0>set_position&&(set_position=a(pp_images).size()-1)):"next"==b?(set_position++,set_position>a(pp_images).size()-1&&(set_position=0)):set_position=b;rel_index=
set_position;doresize||(doresize=!0);settings.allow_expand&&a(".pp_contract").removeClass("pp_contract").addClass("pp_expand");z(function(){a.prettyPhoto.open()})};a.prettyPhoto.changeGalleryPage=function(a){"next"==a?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==a?(currentGalleryPage--,0>currentGalleryPage&&(currentGalleryPage=totalPage)):currentGalleryPage=a;slide_speed="next"==a||"previous"==a?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*
itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};a.prettyPhoto.startSlideshow=function(){"undefined"==typeof A?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){a.prettyPhoto.stopSlideshow();return!1}),A=setInterval(a.prettyPhoto.startSlideshow,settings.slideshow)):a.prettyPhoto.changePage("next")};a.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){a.prettyPhoto.startSlideshow();
return!1});clearInterval(A);A=void 0};a.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(a.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){a(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");a(this).remove();a(window).unbind("scroll.prettyphoto");
if("undefined"!=typeof theRel){var b=location.hash,c=theRel.replace("[",")\\["),c=c.replace("]","\\]");-1===c.indexOf(")")&&(c+=")");null!==b.match(new RegExp("^#(!?"+c+"/(\\d+?/)?(https?://.*)?([A-Z]{2}/[_w]*)?"))&&(location.hash="!")}settings.callback();doresize=!0;M=!1;delete settings}))};var I,J=0;if(!pp_alreadyInitialized&&Q()&&1==c.jig_call){var D,q,u=!1,g=Q(),t=g.substring(0,g.indexOf("/")),g=g.substring(g.indexOf("/")+1,g.length);/^([A-Z]{2}\/[_\w]*)$/im.test(g)?(g=g.replace("/","-"),q=r.find(".jig-contentID-"+
g).find("a["+c.hook+"^='"+t+"']").first(),0===q.length&&(q=r.find("a["+c.hook+"^='"+t+"'].jig-contentID-"+g).first()),0!==q.length?(pp_alreadyInitialized=!0,a(window).one("jigPrettyPhotoActivation",function(){delete jigOtherPrettyPhotoIsPresent;q.trigger("click")}),u=!1):u=!0):u=!0;1==u&&(x=/(^\d+)?\/?(https?:\/\/.+$)/,q=g.match(x),null!==q&&(g=q[1],x=q[2],D=r.find("a["+c.hook+"^='"+t+"']").eq(g),D.attr("href")!==x&&(D=r.find("a["+c.hook+"^='"+t+"'][href^='"+x+"']")),0!==D.length?(pp_alreadyInitialized=
!0,a(window).one("jigPrettyPhotoActivation",function(){delete jigOtherPrettyPhotoIsPresent;D.trigger("click")}),u=!1):u=!0,u=!1));1==u&&0!==r.find("a["+c.hook+"^='"+t+"']").eq(g).trigger("click").length&&(pp_alreadyInitialized=!0)}return p.unbind("click.prettyphoto").bind("click.prettyphoto",a.prettyPhoto.initialize)};window.jigPrettyPhotoHandleTwitter=function(){var a=jQuery;"undefined"==typeof twttr||"undefined"==typeof twttr.widgets?0==a('a[src*="platform.twitter.com/widgets.js"]').length&&a("body").append('<script id="twitter-wjs" type="text/javascript" src="https://platform.twitter.com/widgets.js">\x3c/script>'):
("undefined"!==typeof __twttr.widgets.loaded&&(__twttr.widgets.loaded=!1),twttr.widgets.load());var d=window.setInterval(function(){if("undefined"!==typeof __twttr&&"undefined"!==typeof __twttr.widgets.loaded){window.clearInterval(d);var h=a(".jig_pp_twitter iframe.twitter-share-button");if(0!==h.length)h.on("load",function(){if(0!==h.length&&(300==h.width()&&150==h.height()||0==h.width()&&0==h.height())){var a=h.attr("src");h.off("load").on("load",function(){h.off("load").attr("src",a);H()}).attr("src",
"about:blank")}})}},50)};var z=0;window.jigPinterestTrick=function(){if("undefined"===typeof window.jigPinterestTrickRan){window.jigPinterestTrickRan=1;var c=!1;for(aProp in window)try{if(E(window,aProp)&&"function"===typeof window[aProp]&&"function (a){d.f.build(a)}"==window[aProp]){c=window[aProp];break}}catch(d){}if(0==c){for(aProp in window)try{!E(window,aProp)||"boolean"!==typeof window[aProp]&&"object"!==typeof window[aProp]||0!==aProp.indexOf("PIN_")||(delete window[aProp],a('script[src*="assets.pinterest.com/js/pinit"]').remove(),
a('style[type="text/css"]:contains('+aProp+")").remove())}catch(h){}c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src="//assets.pinterest.com/js/pinit.js";c.setAttribute("data-pin-build","jigBuildPinterestButton");a("body").append(c)}else window.jigBuildPinterestButton=c}}}(function(){"undefined"!==typeof jQuery.prettyPhoto&&(jigOtherPrettyPhotoIsPresent=!0);loadJIGprettyPhoto(jQuery);pp_alreadyInitialized=!1})();