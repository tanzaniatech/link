var MONTH_FORMAT=[,"Januari","Februari","Maret","April","Mei","Juni","July","Agustus","September","Oktober","November","Desember"];var 
NO_IMAGE="https://4.bp.blogspot.com/-SKh7CYM3lB0/WZlRLgH8wII/AAAAAAAACjQ/vx5PJdQYhSo136-Wg-A633KcElrfkHNNACLcBGAs/s1600/non.png";var BOX_NUM=5;var CAROUSEL_NUM=6;!

function(a){function e(){n||(n=!0,s?(i.find("a").hide(),i.find("img").show(),a.ajax(s,{dataType:"html"}).done(function(e){e=a("<div></div>").append(e.replace(d,""));var t=e.find("a.blog-pager-older-link");t?s=t.attr("href"):

(s="",i.hide()),e=e.find(r).children(),a(r).append(e),window._gaq&&window._gaq.push(["_trackPageview",s]),window.gapi&&window.gapi.plusone&&window.gapi.plusone.go&&window.gapi.plusone.go

(),window.disqus_shortname&&a.getScript("http://"+window.disqus_shortname+".disqus.com/blogger_index.js"),window.FB&&window.FB.XFBML&&window.FB.XFBML.parse&&window.FB.XFBML.parse(),i.find

("img").hide(),i.find("a").show(),n=!1})):i.hide())}function t(){var a=Math.max(l.height(),c.height(),document.documentElement.clientHeight),t=l.scrollTop()+l.height();0>a-t&&e()}var s="",i=null,r="div.blog-posts",n=!1,l=a

(window),c=a(document),d=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;a(document).ready(function(){if("item"!=_WidgetManager._GetAllData()
.hide()}})}(jQuery),$(".hotline .HTML .widget-content").each(function(){var a=$(this).find("span").attr("data-no"),e=$(this).find("span").attr("data-label"),t=$(this).find("span").attr("data-type");t.match("recent")?$.ajax

({url:"/feeds/posts/default?alt=json-in-script&max-results="+a,type:"get",dataType:"jsonp",success:function(a){for(var e="",t="<ul>",s=0;s<a.feed.entry.length;s++){for(var i=0;i<a.feed.entry[s].link.length;i++)if

("alternate"==a.feed.entry[s].link[i].rel){e=a.feed.entry[s].link[i].href;break}var r=a.feed.entry[s].title.$t,n=a.feed.entry[s].category[0].term,l=a.feed.entry[s].content.$t,c=$("<div>").html(l);l.indexOf

("//www.youtube.com/embed/")>-1?a.feed.entry[s].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg"):l.indexOf("<img")>-1?c.find("img:first").attr("src").replace("s72-c","s1600"):NO_IMAGE,t+='<li><a 

href="/search/label/'+n+'" class="tag_rel icon '+n+'">'+n+'</a><h3 class="recent-title"><a href="'+e+'">'+r+"</a></h3></li>"}t+="</ul>",$(".hotline .widget-content").each(function(){$(this).html(t),$(this).find

("ul").webhotline()})}}):t.match("label")&&$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+a,type:"get",dataType:"jsonp",success:function(a){for(var e="",t="<ul>",s=0;s<a.feed.entry.length;s++)

{for(var i=0;i<a.feed.entry[s].link.length;i++)if("alternate"==a.feed.entry[s].link[i].rel){e=a.feed.entry[s].link[i].href;break}var r=a.feed.entry[s].title.$t,n=a.feed.entry[s].category[0].term,l=a.feed.entry[s].content.$t,c=

$("<div>").html(l);l.indexOf("//www.youtube.com/embed/")>-1?a.feed.entry[s].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg"):l.indexOf("<img")>-1?c.find("img:first").attr("src").replace("s72-

c","s1600"):NO_IMAGE,t+='<li><a href="/search/label/'+n+'" class="tag_rel icon '+n+'">'+n+'</a><h3 class="recent-title"><a href="'+e+'">'+r+"</a></h3></li>"}t+="</ul>",$(".hotline .HTML .widget-content").each

(function(){$(this).html(t),$(this).find("ul").webhotline()})}})}),function(a){function e(a,i){var r=a.data("settings");"undefined"==typeof i&&(i=!1),i&&s(a);var n=t(a);a.animate(n.css,n.time,"linear",function(){a.css

(r.direction,"0"),e(a,!0)})}function t(a){var e=a.data("settings"),t=a.children().first(),s=Math.abs(-a.css(e.direction).replace("px","").replace("auto","0")-t.outerWidth(!0)),e=a.data("settings"),i=1e3*s/e.speed,r={};return r

[e.direction]=a.css(e.direction).replace("px","").replace("auto","0")-s,{css:r,time:i}}function s(a){var e=a.data("settings");a.css("transition-duration","0s").css(e.direction,"0");var t=a.children().first();t.hasClass("webhotline-

init")?t.remove():a.children().last().after(t)}function i(a,e){"undefined"==typeof e&&(e=!1),e&&s(a);var i=t(a),r=i.time/1e3;r+="s",a.css(i.css).css("transition-duration",r)}function r(e,t,s){var i;a.get(e,function(e){var r=a

(e);r.find("item").each(function(){var e=a(this),t={title:e.find("title").text(),link:e.find("link").text()};listItem="<li><a href='"+t.link+"'>"+t.title+"</a></li>",i+=listItem}),s.webhotline("update",i,t)})}function n(e){var t=e.data

("settings");e.width("auto");var s=0;if(e.children("li").each(function(){s+=a(this).outerWidth(!0)}),s<e.parent().width()||1==e.children().length)if(t.duplicate)for(itemWidth=Math.max.apply(Math,e.children().map(function()

{return a(this).width()}).get());s-itemWidth<e.parent().width()||1==e.children().length;){var i=e.children().clone();e.append(i),s=0,e.children("li").each(function(){s+=a(this).outerWidth(!0)}),itemWidth=Math.max.apply

(Math,e.children().map(function(){return a(this).width()}).get())}else{var r=e.parent().width()-s;r+=e.find("li:first").width();var n=e.find("li:first").height();e.append('<li class="hotline-spacer" style="width:'+r+"px;height:"+n

+'px;"></li>')}if(t.startEmpty){var n=e.find("li:first").height();e.prepend('<li class="webhotline-init" style="width:'+e.parent().width()+"px;height:"+n+'px;"></li>')}for(s=0,e.children("li").each(function(){s+=a

(this).outerWidth(!0)}),e.width(s+200),widthCompare=0,e.children("li").each(function(){widthCompare+=a(this).outerWidth(!0)});widthCompare>=e.width();)e.width(e.width()+200),widthCompare=0,e.children

("li").each(function(){widthCompare+=a(this).outerWidth(!0)})}var l=function(){var a=document.createElement("p").style,e=["ms","O","Moz","Webkit"];if(""==a.transition)return!0;for(;e.length;)if(e.pop()+"Transition"in a)

return!0;return!1}(),c={init:function(t){return t=jQuery.extend({speed:50,direction:"left",moving:!0,startEmpty:!0,duplicate:!1,rssurl:!1,hoverpause:!0,rssfrequency:0,updatetype:"reset"},t),this.each(function(){jQuery

(this).data("settings",t);var s=jQuery(this);s.addClass("newshotline");var c=s.wrap("<div class='mask'></div>");c.after("<span class='hotlineoverlay-left'>&nbsp;</span><span class='hotlineoverlay-

right'>&nbsp;</span>"),s.parent().wrap("<div class='hotlinecontainer'></div>"),n(s),t.rssurl&&(r(t.rssurl,t.type,s),t.rssfrequency>0&&window.setInterval(function(){r(t.rssurl,t.type,s)},1e3*t.rssfrequency*60)),l?(s.css

("transition-duration","0s").css(t.direction,"0"),i(s,!1),s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(e){return s.is(e.target)?void i(a(this),!0):!1})):e(a(this)),t.hoverpause&&s.hover(function

(){if(l){var e=a(this).css(t.direction);a(this).css("transition-duration","0s").css(t.direction,e)}else jQuery(this).stop()},function(){jQuery(this).data("settings").moving&&(l?i(a(this),!1):e(s))})})},stop:function(){var e=a

(this).data("settings");return e.moving?(e.moving=!1,this.each(function(){if(l){var t=a(this).css(e.direction);a(this).css("transition-duration","0s").css(e.direction,t)}else a(this).stop()})):void 0},cont:function(){var t=a

(this).data("settings");return t.moving?void 0:(t.moving=!0,this.each(function(){l?i(a(this),!1):e(a(this))}))},update:function(e,t,s,i){t=t||"reset","undefined"==typeof s&&(s=!0),"undefined"==typeof i&&(i=!1),"string"==typeof 

e&&(e=a(e));var r=a(this);r.webhotline("stop");var l=a(this).data("settings");if("reset"==t)r.html(e),r.css(l.direction,"0"),n(r);else if("swap"==t){r.children("li").addClass("old");for(var c=0;c<e.length;c++)id=a(e[c]).data

("update"),match=r.find('[data-update="'+id+'"]'),match.length<1?s&&(0==r.find(".hotline-spacer:first-child").length&&r.find(".hotline-spacer").length>0?r.children("li.hotline-spacer").before(e[c]):r.append(e[c])):r.find

('[data-update="'+id+'"]').replaceWith(e[c]);r.children("li.webhotline-init, li.hotline-spacer").removeClass("old"),i&&r.children("li").remove(".old"),stripWidth=0,r.children("li").each(function(){stripWidth+=a(this).outerWidth

(!0)}),r.width(stripWidth+200)}r.webhotline("cont")}};a.fn.webhotline=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void a.error("Method "+e+" does not exist on 

jQuery.webhotline"):c.init.apply(this,arguments)}}(jQuery),$(document).ready(function(){$("").each(function(){$(this).find("").attr("",function(a,e){return e.replace("")}).attr("",function(a,e){return e.replace("")})})}),

$(".recent-boxes .HTML .widget-content").each(function(){var a=$(this).find("span").attr("data-label"),e="box",t="carousel",s=($(this).prev("h2").text(),$(this).parent().attr("id")),i=$(this).find("span").attr("id");i.match(e)

&&$.ajax({url:"/feeds/posts/default/-/"+a+"?alt=json-in-script&max-results="+BOX_NUM,type:"get",dataType:"jsonp",success:function(a){for(var e="",t="<ul>",i=0;i<a.feed.entry.length;i++){for(var r=0;r<a.feed.entry

[i].link.length;r++)if("alternate"==a.feed.entry[i].link[r].rel){e=a.feed.entry[i].link[r].href;break}var n=a.feed.entry[i].title.$t,l=a.feed.entry[i].category[0].term,c=a.feed.entry[i].published.$t,d=c.substring(0,4),f=c.substring

(5,7),o=c.substring(8,10),h=MONTH_FORMAT[parseInt(f,10)]+" "+o+", "+d,u=a.feed.entry[i].content.$t,v=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var p=a.feed.entry[i].media

$thumbnail.url,g=p;else if(u.indexOf("<img")>-1)var m=v.find("img:first").attr("src"),g=m;else var g=NO_IMAGE;t+=0==i?'<div class="bx-first"><div class="bx-item"><div class="box-thumbnail"><a class="bf-thumb" 

href="'+e+'" style="background:url('+g+') no-repeat center center;background-size: cover"></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-

star"></i> <i class="fa fa-star-o"></i> </div></div><div class="bf-content"><div class="first-tag"><a href="/search/label/'+l+'">'+l+'</a></div><h3 class="recent-title"><a href="'+e+'">'+n+'</a></h3><span 

class="recent-date">'+h+"</span></div></div></div>":'<li><div class="box-thumbnail"><a class="box-image" href="'+e+'" style="background:url('+g+') no-repeat center center;background-size: cover"></a></div><div 

class="recent-content"><div class="box-tag"><a href="/search/label/'+l+'">'+l+'</a></div><h3 class="recent-title"><a href="'+e+'">'+n+'</a></h3><span class="recent-date">'+h+'</span></div><div 

class="clear"/></li>'}t+="</ul>",$(".recent-boxes .HTML .widget-content").each(function(){var a=$(this).parent().attr("id");a==s&&($(this).html(t),$(this).parent().addClass("fbox"),$(this).parent().addClass("boxes"),

$(this).find(".bf-thumb,.box-image").each(function(){$(this).attr("style",function(a,e){return e.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})}))})}}),i.match(t)&&

$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=12"+CAROUSEL_NUM,type:"get",dataType:"jsonp",success:function(a){for(var e="",t='<div class="main-carousel">',i=0;i<a.feed.entry.length;i++){for(var 

r=0;r<a.feed.entry[i].link.length;r++)if("alternate"==a.feed.entry[i].link[r].rel){e=a.feed.entry[i].link[r].href;break}var n=a.feed.entry[i].title.$t,l=a.feed.entry[i].category[0].term,c=a.feed.entry[i].published.$t,d=c.substring

(0,4),f=c.substring(5,7),o=c.substring(8,10),h=MONTH_FORMAT[parseInt(f,10)]+" "+o+", "+d,u=a.feed.entry[i].content.$t,v=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var p=a.feed.entry

[i].media$thumbnail.url,g=p;else if(u.indexOf("<img")>-1)var m=v.find("img:first").attr("src"),g=m;else var g=NO_IMAGE;t+='<li class="carousel-item"><div class="carousel-thumb"><a class="box-image" href="'+e+'" 

style="background:url('+g+') no-repeat center center;background-size: cover"></a></div><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> 

<i class="fa fa-star-o"></i> </div><div class="carousel-content"><div class="carousel-tag"><a class="category" href="/search/label/'+l+'">'+l+'</a></div><h3 class="recent-title"><a href="'+e+'">'+n+'</a></h3><span 

class="recent-date">'+h+"</span></div></li>"}t+="</div>",$(".recent-boxes .HTML .widget-content").each(function(){var a=$(this).parent().attr("id");a==s&&($(this).html(t),$(this).parent().addClass("carousel"),

$(".main-carousel").owlCarousel({items:3,margin:5,smartSpeed:500,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplaySpeed:600,dots:!1,responsive:{0:{items:1,nav:!0},601:{items:2,nav:!0},701:{items:4,nav:!0}}}),

$(this).find(".box-image").each(function(){$(this).attr("style",function(a,e){return e.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})}))})}})}),$(".featured .HTML 

.widget-content").each(function(){var a=$(this).find("span").attr("data-label"),e="random",t="recent",s="label",i=$(this).find("span").attr("id");i.match(e)?$.ajax({url:"/feeds/posts/default?alt=json-in-

script",type:"get",dataType:"jsonp",success:function(a){a=a.feed.entry.length-5,a=Math.floor(Math.random()*(a-0+1))+0,0==a&&(a=Math.floor(Math.random()*(a-0+1))+1),$.ajax({url:"/feeds/posts/default?alt=json-in-

script&start-index="+a+"&max-results=5",type:"get",dataType:"jsonp",success:function(a){for(var e="",t='<div cass="feat-wrap">',s=0;s<a.feed.entry.length;s++){for(var i=0;i<a.feed.entry[s].link.length;i++)if

("alternate"==a.feed.entry[s].link[i].rel){e=a.feed.entry[s].link[i].href;break}var r=a.feed.entry[s].title.$t,n=a.feed.entry[s].category[0].term,l=(a.feed.entry[s].author[0].name.$t,a.feed.entry[s].published.$t),c=l.substring

(0,4),d=l.substring(5,7),f=l.substring(8,10),o=MONTH_FORMAT[parseInt(d,10)]+" "+f+", "+c,h=a.feed.entry[s].content.$t,u=$("<div>").html(h);if(h.indexOf("//www.youtube.com/embed/")>-1)var v=a.feed.entry

[s].media$thumbnail.url,p=v;else if(h.indexOf("<img")>-1)var g=u.find("img:first").attr("src"),p=g;else var p=NO_IMAGE;t+=0==s?'<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-

inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i 

class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n

+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div>":1==s?'<div class="hot-item item3"><div 

class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-

star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n

+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div></div></div>":2==s?'<div class="feat-align 

feat-column1"><div class="hot-item item1"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-

overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div 

class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o

+"</span></div></div></div></div></div>":3==s?'<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat 

center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa 

fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-

meta"><span class="featured-date">'+o+"</span></div></div></div></div>":'<div class="hot-item item5"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center 

center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-

o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span 

class="featured-date">'+o+"</span></div></div></div></div></div>"}t+='<div class="clear"/></div>',$(".featured .HTML .widget-content").each(function(){$(this).find("span").attr("id").match("random")&&($(this).html

(t),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(a,e){return e.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})}))})}})}}):i.match(t)?$.ajax

({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(a){for(var 

e="",t='<div cass="feat-wrap">',s=0;s<a.feed.entry.length;s++){for(var i=0;i<a.feed.entry[s].link.length;i++)if("alternate"==a.feed.entry[s].link[i].rel){e=a.feed.entry[s].link[i].href;break}var r=a.feed.entry[s].title.

$t,n=a.feed.entry[s].category[0].term,l=(a.feed.entry[s].author[0].name.$t,a.feed.entry[s].published.$t),c=l.substring(0,4),d=l.substring(5,7),f=l.substring(8,10),o=MONTH_FORMAT[parseInt(d,10)]+" "+f+", 

"+c,h=a.feed.entry[s].content.$t,u=$("<div>").html(h);if(h.indexOf("//www.youtube.com/embed/")>-1)var v=a.feed.entry[s].media$thumbnail.url,p=v;else if(h.indexOf("<img")>-1)var g=u.find("img:first").attr("src"),p=g;else 

var p=NO_IMAGE;t+=0==s?'<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center 

center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-

o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span 

class="featured-date">'+o+"</span></div></div></div></div>":1==s?'<div class="hot-item item3"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center 

center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-

o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span 

class="featured-date">'+o+"</span></div></div></div></div></div></div>":2==s?'<div class="feat-align feat-column1"><div class="hot-item item1"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" 

style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> 

<i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r

+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div></div>":3==s?'<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-

inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i 

class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n

+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div>":'<div class="hot-item item5"><div class="featured-

inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i 

class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n

+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div></div>"}t+='<div class="clear"/></div>',$(".featured 

.HTML .widget-content").each(function(){$(this).find("span").attr("id").match("recent")&&($(this).html(t),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(a,e){return e.replace

("/default.jpg","/hqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})}))})}})}}):i.match(s)&&$.ajax({url:"/feeds/posts/default/-/"+a+"?alt=json-in-script&max-

results=5",type:"get",dataType:"jsonp",success:function(a){for(var e="",t='<div cass="feat-wrap">',s=0;s<a.feed.entry.length;s++){for(var i=0;i<a.feed.entry[s].link.length;i++)if("alternate"==a.feed.entry[s].link[i].rel)

{e=a.feed.entry[s].link[i].href;break}var r=a.feed.entry[s].title.$t,n=a.feed.entry[s].category[0].term,l=(a.feed.entry[s].author[0].name.$t,a.feed.entry[s].published.$t),c=l.substring(0,4),d=l.substring(5,7),f=l.substring

(8,10),o=MONTH_FORMAT[parseInt(d,10)]+" "+f+", "+c,h=a.feed.entry[s].content.$t,u=$("<div>").html(h);if(h.indexOf("//www.youtube.com/embed/")>-1)var v=a.feed.entry[s].media$thumbnail.url,p=v;else if

(h.indexOf("<img")>-1)var g=u.find("img:first").attr("src"),p=g;else var p=NO_IMAGE;t+=0==s?'<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a class="rcp-thumb" 

href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa 

fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a 

href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div>":1==s?'<div class="hot-item item3"><div class="featured-inner"><a class="rcp-thumb" 

href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa 

fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a 

href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div></div></div>":2==s?'<div class="feat-align feat-column1"><div class="hot-item item1"><div 

class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-

star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n

+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o+"</span></div></div></div></div></div>":3==s?'<div class="feat-align feat-

column4"><div class="hot-item item4"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span class="featured-

overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-panel"><div 

class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o

+"</span></div></div></div></div>":'<div class="hot-item item5"><div class="featured-inner"><a class="rcp-thumb" href="'+e+'" style="background:url('+p+') no-repeat center center;background-size: cover"><span 

class="featured-overlay"/></a><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><div class="post-

panel"><div class="feat-tag"><a class="icon '+n+'" href="/search/label/'+n+'">'+n+'</a></div><h3 class="rcp-title"><a href="'+e+'">'+r+'</a></h3><div class="featured-meta"><span class="featured-date">'+o

+"</span></div></div></div></div></div>"}t+='<div class="clear"/></div>',$(".featured .HTML .widget-content").each(function(){$(this).find("span").attr("id").match("label")&&($(this).html(t),$(this).find(".rcp-

thumb").each(function(){$(this).attr("style",function(a,e){return e.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})}))})}})}),$(".goombox .HTML .widget-

content").each(function(){var a=$(this).find("span").attr("data-label"),e=$(this).find("span").attr("data-no"),t=($(this).prev("h2").text(),$(this).parent().attr("id")),s=$(this).find("span").attr("data-type");s.match("columnleft")

&&$.ajax({url:"/feeds/posts/default/-/"+a+"?alt=json-in-script&max-results="+e,type:"get",dataType:"jsonp",success:function(a){for(var e="",s="<ul>",i=0;i<a.feed.entry.length;i++){for(var r=0;r<a.feed.entry

[i].link.length;r++)if("alternate"==a.feed.entry[i].link[r].rel){e=a.feed.entry[i].link[r].href;break}var n=a.feed.entry[i].title.$t,l=a.feed.entry[i].category[0].term,c=(a.feed.entry[i].author[0].name.$t,a.feed.entry[i].published.

$t),d=c.substring(0,4),f=c.substring(5,7),o=c.substring(8,10),h=MONTH_FORMAT[parseInt(f,10)]+" "+o+", "+d,u=a.feed.entry[i].content.$t,v=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var 

p=a.feed.entry[i].media$thumbnail.url,g=p;else if(u.indexOf("<img")>-1)var m=v.find("img:first").attr("src"),g=m;else var g=NO_IMAGE;s+=0==i?'<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" 

href="'+e+'" style="background:url('+g+') no-repeat center center;background-size: cover"><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> 

<i class="fa fa-star-o"></i> </div><span class="img-overlay"/></a><div class="first-tag"><a class="icon '+l+'" href="/search/label/'+l+'">'+l+'</a></div></div><div class="bf-content"><h3 class="recent-title"><a 

href="'+e+'">'+n+'</a></h3><span class="recent-date">'+h+"</span></div></div>":'<li><div class="box-thumbnail"><a class="box-image" href="'+e+'" style="background:url('+g+') no-repeat center 

center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><div class="tag_goom"><a class="icon '+l+'" href="/search/label/'+l+'">'+l+'</a></div><h3 class="recent-title"><a 

href="'+e+'">'+n+'</a></h3><span class="recent-date">'+h+'</span></div><div class="clear"/></li>'}s+="</ul>",$(".goombox .HTML .widget-content").each(function(){var a=$(this).parent().attr("id");a==t&&

($(this).html(s),$(this).parent().addClass("column"),$(this).parent().addClass("columnleft"),$(this).parent().addClass("boxes"),$(this).find(".box-image,.bf-thumb").each(function(){$(this).attr("style",function(a,e){return 

e.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})}))})}}),s.match("columncenter")&&$.ajax({url:"/feeds/posts/default/-/"+a+"?alt=json-in-script&max-

results="+e,type:"get",dataType:"jsonp",success:function(a){for(var e="",s="<ul>",i=0;i<a.feed.entry.length;i++){for(var r=0;r<a.feed.entry[i].link.length;r++)if("alternate"==a.feed.entry[i].link[r].rel){e=a.feed.entry[i].link

[r].href;break}var n=a.feed.entry[i].title.$t,l=a.feed.entry[i].category[0].term,c=(a.feed.entry[i].author[0].name.$t,a.feed.entry[i].published.$t),d=c.substring(0,4),f=c.substring(5,7),o=c.substring

(8,10),h=MONTH_FORMAT[parseInt(f,10)]+" "+o+", "+d,u=a.feed.entry[i].content.$t,v=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var p=a.feed.entry[i].media$thumbnail.url,g=p;else if

(u.indexOf("<img")>-1)var m=v.find("img:first").attr("src"),g=m;else var g=NO_IMAGE;s+=0==i?'<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="'+e+'" style="background:url('+g+') no-

repeat center center;background-size: cover"><div class="star_rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><span 

class="img-overlay"/></a><div class="first-tag"><a class="icon '+l+'" href="/search/label/'+l+'">'+l+'</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="'+e+'">'+n+'</a></h3><span 

class="recent-date">'+h+"</span></div></div>":'<li><div class="box-thumbnail"><a class="box-image" href="'+e+'" style="background:url('+g+') no-repeat center center;background-size: cover"><span class="img-

overlay"/></a></div><div class="recent-content"><div class="tag_goom"><a class="icon '+l+'" href="/search/label/'+l+'">'+l+'</a></div><h3 class="recent-title"><a href="'+e+'">'+n+'</a></h3><span class="recent-

date">'+h+'</span></div><div class="clear"/></li>'}s+="</ul>",$(".goombox .HTML .widget-content").each(function(){var a=$(this).parent().attr("id");a==t&&($(this).html(s),$(this).parent().addClass("column"),

$(this).parent().addClass("columncenter"),$(this).parent().addClass("boxes"),$(this).find(".box-image,.bf-thumb").each(function(){$(this).attr("style",function(a,e){return e.replace("/default.jpg","/mqdefault.jpg")}).attr

("style",function(a,e){return e.replace("s72-c","s1600")})}))})}}),s.match("columnright")&&$.ajax({url:"/feeds/posts/default/-/"+a+"?alt=json-in-script&max-results="+e,type:"get",dataType:"jsonp",success:function(a){for

(var e="",s="<ul>",i=0;i<a.feed.entry.length;i++){for(var r=0;r<a.feed.entry[i].link.length;r++)if("alternate"==a.feed.entry[i].link[r].rel){e=a.feed.entry[i].link[r].href;break}var n=a.feed.entry[i].title.$t,l=a.feed.entry

[i].category[0].term,c=(a.feed.entry[i].author[0].name.$t,a.feed.entry[i].published.$t),d=c.substring(0,4),f=c.substring(5,7),o=c.substring(8,10),h=MONTH_FORMAT[parseInt(f,10)]+" "+o+", "+d,u=a.feed.entry

[i].content.$t,v=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var p=a.feed.entry[i].media$thumbnail.url,g=p;else if(u.indexOf("<img")>-1)var m=v.find("img:first").attr("src"),g=m;else var 

g=NO_IMAGE;s+=0==i?'<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="'+e+'" style="background:url('+g+') no-repeat center center;background-size: cover"><div class="star_rating"> <i 

class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><span class="img-overlay"/></a><div class="first-tag"><a class="icon '+l+'" 

href="/search/label/'+l+'">'+l+'</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="'+e+'">'+n+'</a></h3><span class="recent-date">'+h+"</span></div></div>":'<li><div class="box-

thumbnail"><a class="box-image" href="'+e+'" style="background:url('+g+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><div 

class="tag_goom"><a class="icon '+l+'" href="/search/label/'+l+'">'+l+'</a></div><h3 class="recent-title"><a href="'+e+'">'+n+'</a></h3><span class="recent-date">'+h+'</span></div><div class="clear"/></li>'}s

+="</ul>",$(".goombox .HTML .widget-content").each(function(){var a=$(this).parent().attr("id");a==t&&($(this).html(s),$(this).parent().addClass("column"),$(this).parent().addClass("columnright"),$(this).parent

().addClass("boxes"),$(this).find(".box-image,.bf-thumb").each(function(){$(this).attr("style",function(a,e){return e.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-

c","s1600")})}))})}})}),$(".gallery_box .HTML .widget-content").each(function(){var a=$(this).find("span").attr("data-label"),e=($(this).find("span").attr("data-no"),$(this).prev("h2").text(),$(this).parent().attr("id")),t=

$(this).find("span").attr("data-type");t.match("gallery")&&$.ajax({url:"/feeds/posts/default/-/"+a+"?alt=json-in-script&max-results=6",type:"get",dataType:"jsonp",success:function(a){for(var 

t="",s="<ul>",i=0;i<a.feed.entry.length;i++){for(var r=0;r<a.feed.entry[i].link.length;r++)if("alternate"==a.feed.entry[i].link[r].rel){t=a.feed.entry[i].link[r].href;break}var n=a.feed.entry[i].title.$t,l=(a.feed.entry[i].category

[0].term,a.feed.entry[i].author[0].name.$t,a.feed.entry[i].content.$t),c=$("<div>").html(l);if(l.indexOf("//www.youtube.com/embed/")>-1)var d=a.feed.entry[i].media$thumbnail.url,f=d;else if(l.indexOf("<img")>-1)var 

o=c.find("img:first").attr("src"),f=o;else var f=NO_IMAGE;s+='<li><a class="box-image" href="'+t+'" style="background:url('+f+') no-repeat center center;background-size: cover"><div class="star_rating"> <i class="fa 

fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><span class="gallery-overlay"/></a></div><div class="recent-content"><h3 class="recent-

title"><a href="'+t+'">'+n+'</a></h3</div><div class="clear"/></li>'}s+="</ul>",$(".gallery_box .HTML .widget-content").each(function(){var a=$(this).parent().attr("id");a==e&&($(this).html(s),$(this).parent().addClass

("gallery"),$(this).find(".box-image").each(function(){$(this).attr("style",function(a,e){return e.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})}))})}})}),$("#related-

ready").each(function(){var a=$(this).text();$.ajax({url:"/feeds/posts/default/-/"+a+"?alt=json-in-script&max-results=4",type:"get",dataType:"jsonp",success:function(a){for(var e="",t='<div class="related-

posts">',s=0;s<a.feed.entry.length;s++){for(var i=0;i<a.feed.entry[s].link.length;i++)if("alternate"==a.feed.entry[s].link[i].rel){e=a.feed.entry[s].link[i].href;break}var r=a.feed.entry[s].title.$t,n=a.feed.entry[s].category

[0].term,l=a.feed.entry[s].published.$t,c=l.substring(0,4),d=l.substring(5,7),f=l.substring(8,10),o=(MONTH_FORMAT[parseInt(d,10)]+" "+f+", "+c,a.feed.entry[s].content.$t),h=$("<div>").html(o);if(o.indexOf

("//www.youtube.com/embed/")>-1)var u=a.feed.entry[s].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg"),v=u;else if(o.indexOf("<img")>-1)var p=h.find("img:first").attr("src").replace("s72-c","s1600"),v=p;else 

var v=NO_IMAGE;t+='<li class="related-item"><div class="related-thumb"><a class="related-img" href="'+e+'" style="background:url('+v+') no-repeat center center;background-size: cover"><div class="star_rating"> <i 

class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div><span class="related-overlay"/></a></div><div class="related-content"><a 

class="related-tag" href="/search/label/'+n+'">'+n+'</a><h3><a href="'+e+'">'+r+"</a></h3></div></li>"}t+='</div><div class="clear"/>',$("#related-ready").html(t),$(".related-img").each(function(){$(this).attr

("style",function(a,e){return e.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(a,e){return e.replace("s72-c","s1600")})})}})}),$(function(){var a=$(".search"),e=$(".header-random"),t=a.find("#search-

input");e.on("click",function(){t.toggleClass("search-opened"),e.find(".fa").toggleClass("fa-close"),t.focus()})});
