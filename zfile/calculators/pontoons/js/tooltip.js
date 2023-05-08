var dw_Event={add:function(t,e,o,i){i=i||!1,t.addEventListener?t.addEventListener(e,o,i):t.attachEvent&&t.attachEvent("on"+e,o)},remove:function(t,e,o,i){i=i||!1,t.removeEventListener?t.removeEventListener(e,o,i):t.detachEvent&&t.detachEvent("on"+e,o)},DOMit:function(t){return t=t?t:window.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){return t.returnValue=!1,!1}),t.stopPropagation||(t.stopPropagation=function(){t.cancelBubble=!0}),t},getTarget:function(t){t=dw_Event.DOMit(t);var e=t.target;return 1!=e.nodeType&&(e=e.parentNode),e}},dw_Viewport={getWinWidth:function(){return this.width=0,window.innerWidth?this.width=window.innerWidth-18:document.documentElement&&document.documentElement.clientWidth?this.width=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(this.width=document.body.clientWidth),this.width},getWinHeight:function(){return this.height=0,window.innerHeight?this.height=window.innerHeight-18:document.documentElement&&document.documentElement.clientHeight?this.height=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(this.height=document.body.clientHeight),this.height},getScrollX:function(){return this.scrollX=0,"number"==typeof window.pageXOffset?this.scrollX=window.pageXOffset:document.documentElement&&document.documentElement.scrollLeft?this.scrollX=document.documentElement.scrollLeft:document.body&&document.body.scrollLeft?this.scrollX=document.body.scrollLeft:window.scrollX&&(this.scrollX=window.scrollX),this.scrollX},getScrollY:function(){return this.scrollY=0,"number"==typeof window.pageYOffset?this.scrollY=window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?this.scrollY=document.documentElement.scrollTop:document.body&&document.body.scrollTop?this.scrollY=document.body.scrollTop:window.scrollY&&(this.scrollY=window.scrollY),this.scrollY},getAll:function(){this.getWinWidth(),this.getWinHeight(),this.getScrollX(),this.getScrollY()}},dw_Util;dw_Util||(dw_Util={}),dw_Util.getImage=function(t){var e=new Image;return e.src=t,e},dw_Util.forBackCompatWidth=function(t){var e=0,o=dw_Util.getCurrentStyle;if(t.currentStyle&&!window.opera&&(null==document.compatMode||"BackCompat"==document.compatMode)){var i=parseInt(o(t,"paddingLeft")),n=parseInt(o(t,"paddingRight")),r=parseInt(o(t,"borderLeftWidth")),c=parseInt(o(t,"borderRightWidth"));e=(isNaN(i)?0:i)+(isNaN(n)?0:n)+(isNaN(r)?0:r)+(isNaN(c)?0:c)}return e},dw_Util.getCurrentStyle=function(t,e){var o="";if(document.defaultView&&document.defaultView.getComputedStyle)o=document.defaultView.getComputedStyle(t,null)[e];else if(t.currentStyle&&(o=t.currentStyle[e],!/^\d+(px)?$/i.test(o)&&/^\d/.test(o))){var i=t.style.left,n=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,t.style.left=o||0,o=t.style.pixelLeft+"px",t.style.left=i,t.runtimeStyle.left=n}return o},dw_Util.writeStyleRule=function(t,e){var o=0!=e?' media="screen">':">";document.write('\n<style type="text/css"'+o+t+"</style>")},dw_Util.mouseleave=function(t,e){t=dw_Event.DOMit(t);var o=t.relatedTarget?t.relatedTarget:t.toElement?t.toElement:null;return e==o||dw_Util.contained(o,e)?!1:!0},dw_Util.contained=function(t,e){if(!t)return null;for(;t=t.parentNode;)if(t==e)return!0;return!1},dw_Util.getPageOffsets=function(t){var e=0,o=0;do e+=t.offsetLeft,o+=t.offsetTop;while(t=t.offsetParent);return{x:e,y:o}},dw_Util.isTouchDevice=function(){return"ontouchend"in document},dw_Util.makeClickable=function(t,e){if(e=e||document,e.querySelectorAll)for(var o=e.querySelectorAll(t),i=0;o[i];i++)dw_Event.add(o[i],"click",function(){})};var dw_Tooltip={tip:null,timer:0,hoverTimer:0,active:!1,actuator:null,resetFlag:!1,restored:!0,init:function(){var t,e=dw_Tooltip;if(e.hasSupport()){if(e.setProps(!0),dw_Util.isTouchDevice()){if(!e.supportTouch)return;e.forTouch=!0}(t=document.getElementById(e.tipID))||(t=document.createElement("div"),t.id=e.tipID,document.body.appendChild(t)),t.style.position="absolute",t.style.visibility="hidden",t.style.zIndex=1e4,e.tip=t,(e.forTouch||e.activateOnClick)&&(e.showDelay=1,e.hideDelay=1),e.setProps(),e.setPosition(0,0),e.initHandlers()}},hasSupport:function(){var t=document;return t.createElement&&t.getElementsByTagName&&(t.addEventListener||t.attachEvent)?!0:!1},setProps:function(t){var e,o,i=dw_Tooltip,n=t?i.getDefaultsList():i.getPropsList();i.defaultProps||(i.defaultProps={});for(var r=0;o=n[r];r++)e=o[0],i[e]=typeof i.defaultProps[e]==o[1]?i.defaultProps[e]:o[2];t||(i.tip.className=i.klass,i.coordinateOptions())},getDefaultsList:function(){return[["offX","number",12],["offY","number",12],["showDelay","number",100],["hideDelay","number",100],["hoverDelay","number",500],["tipID","string","tipDiv"],["actuatorClass","string","showTip"],["maxLoops","number",2],["supportTouch","boolean",!1],["activateOnClick","boolean",!1],["showCloseBox","boolean",!1],["closeBoxImage","string",""],["activateOnFocus","boolean",!0],["content_source","string","content_vars"],["on_activate","function",function(){}],["on_show","function",function(){}],["on_position","function",function(){}],["on_deactivate","function",function(){}],["on_hide","function",function(){}]]},getPropsList:function(){return[["klass","string",""],["followMouse","boolean",!0],["sticky","boolean",!1],["hoverable","boolean",!1],["duration","number",0],["jumpAbove","boolean",!0],["jumpLeft","boolean",!0],["Left","boolean",!1],["Above","boolean",!1],["positionFn","function",this.positionRelEvent],["wrapFn","function",this.plainWrap]]},plainWrap:function(t){return t},activate:function(t,e,o,i){var n=dw_Tooltip;n.tip&&(n.clearTimer("timer"),n.clearTimer("hoverTimer"),n.restored||n.handleRestore(),n.actuator=e,dw_Viewport.getAll(),n.getContent(t,e,o,i),n.tip.innerHTML&&(n.active=!0,n.on_activate(),n.positionFn(t,e),n.adjust(),n.timer=setTimeout(n.show,n.showDelay)))},getContent:function(t,e,o,i){var n,r,c=dw_Tooltip;if(i&&!o)if(n=c.content_vars||{},r=n[i]?n[i]:!1,"string"==typeof r)o=r;else if("object"==typeof r)if(c.checkForProps(r),"ajax"!=c.content_source||r["static"]||c.initAjaxRequest(i),r.content)o=r.content;else if(r.html_id){var a=document.getElementById(r.html_id);a&&(o=a.innerHTML)}else o=r;c.restored=!1,c.handleOptions(t),c.writeTip(o)},writeTip:function(t){t=this.wrapFn(t),this.tip.innerHTML=t},positionRelEvent:function(t,e){var o,i=dw_Tooltip;"object"==typeof t&&("mouseover"==t.type||"mousemove"==t.type||"click"==t.type?(i.evX=i.getMouseEventX(t),i.evY=i.getMouseEventY(t),"click"==t.type&&(o=dw_Util.getPageOffsets(e),(i.evX>o.x+e.offsetWidth||i.evX<o.x||i.evY>o.y+e.offsetHeight||i.evY<o.y)&&(i.evX=o.x,i.evY=o.y,i.foc=!0))):(o=dw_Util.getPageOffsets(e),i.evX=o.x,i.evY=o.y,i.foc=!0));var n=i.calcPosCoords(t,e);i.setPosition(n.x,n.y)},calcPosCoords:function(t,e){var o,i,n,r,c=dw_Viewport,a=dw_Tooltip,l=a.evX,d=a.evY,s=a.getMaxX(),u=a.getMaxY(),f=l+a.offX,p=d+a.offY,h=l-(a.width+a.offX),w=d-(a.height+a.offY),v=l-c.scrollX>c.width/2,m=d-c.scrollY>c.height/2;return"object"==typeof t&&a.foc?(a.focX=l+a.offX+e.offsetWidth,f=a.focX<=s?a.focX:a.focX=s):a.focX&&(f=a.focX),s>=f&&!a.Left?l=f:h>=c.scrollX&&(a.jumpLeft||a.Left)?l=h:a.jumpLeft&&v||a.Left?(l=c.scrollX,o="Left"):(l=s,o="Right"),u>=p&&!a.Above?d=p:w>=c.scrollY&&(a.jumpAbove||a.Above)?d=w:a.jumpAbove&&m||a.Above?(d=c.scrollY,i="Above"):(d=u,i="Below"),o&&i&&(n="Left"==o?c.scrollX-h:f-s,r="Above"==i?c.scrollY-w:p-u,r>=n?l="Left"==o?h:f:d="Above"==i?w:p),{x:l,y:d}},adjust:function(){function t(){e.active&&(e.positionFn(),i&&!i.complete&&setTimeout(t,50))}var e=dw_Tooltip,o=e.tip.getElementsByTagName("img"),i=o.length?o[o.length-1]:null;t()},setPosition:function(t,e){this.tip.style.left=t+"px",this.tip.style.top=e+"px",this.on_position()},show:function(){var t=dw_Tooltip;t.tip.style.visibility="visible",t.on_show()},deactivate:function(t){var e=dw_Tooltip;if(e.tip&&e.active&&!e.sticky&&(t=t?t:window.event,!t.type||"mouseout"!=t.type||dw_Util.mouseleave(t,e.actuator))){if(e.clearTimer("timer"),e.clearTimer("hoverTimer"),e.hoverable)return void(e.hoverTimer=setTimeout(e.hide,e.hoverDelay));if(e.duration)return void(e.timer=setTimeout(e.hide,e.duration));e.on_deactivate(),e.timer=setTimeout(e.hide,e.hideDelay)}},hide:function(){var t=dw_Tooltip;t.tip&&(t.tip.style.visibility="hidden",t.handleRestore(),t.on_hide())},handleOptions:function(t){var e=dw_Tooltip;e.coordinateOptions(),e.klass&&(e.tip.className=e.klass),e.hoverable?(e.tip.onmouseout=e.tipOutCheck,e.tip.onmouseover=function(){e.clearTimer("hoverTimer")}):e.followMouse&&"focus"!=t.type&&"focusin"!=t.type?dw_Event.add(document,"mousemove",e.positionRelEvent,!0):e.forTouch||e.activateOnClick||!e.sticky&&!e.duration||dw_Event.add(document,"mouseup",e.checkDocClick,!0),e.activateOnClick||dw_Event.add(e.actuator,"click",e.checkLinkClick)},coordinateOptions:function(){var t=dw_Tooltip;(t.forTouch||t.activateOnClick||t.sticky||t.hoverable||t.duration||t.positionFn!=t.positionRelEvent)&&(t.followMouse=!1),(t.forTouch||t.activateOnClick||t.sticky)&&(t.hoverable=!1,t.duration=0),t.hoverable&&(t.duration=0),(t.sticky||t.forTouch||t.activateOnClick)&&t.wrapFn==t.plainWrap&&(t.wrapFn=t.handleWrapOpts)},handleRestore:function(){var t=dw_Tooltip;t.followMouse?dw_Event.remove(document,"mousemove",t.positionRelEvent,!0):t.forTouch||t.activateOnClick||!t.sticky&&!t.duration||dw_Event.remove(document,"mouseup",t.checkDocClick,!0),t.forTouch||(t.tip.onmouseover=t.tip.onmouseout=function(){}),!t.activateOnClick&&t.actuator&&dw_Event.remove(t.actuator,"click",t.checkLinkClick),t.resetFlag&&t.setProps(),t.resetRequest(),t.tip.innerHTML="",t.active=!1,t.actuator=null,t.tip.style.width="",t.focX=0,t.foc=!1,t.restored=!0},getTipClass:function(t){if(!t)return"";for(var e="",o=t.split(/\s+/),i=0;o[i];i++)if(o[i]==this.actuatorClass&&o[i+1]){e=o[i+1];break}return e},checkForProps:function(t){for(var e,o=dw_Tooltip,i=o.getPropsList(),n=0;i[n];n++)e=i[n][0],"undefined"!=typeof t[e]&&(o[e]=t[e],o.resetFlag=!0)},tipOutCheck:function(t){var e=dw_Tooltip,o=this;dw_Util.mouseleave(t,o)&&(e.timer=setTimeout(e.hide,e.hideDelay))},checkEscKey:function(t){t=t?t:window.event,27==t.keyCode&&dw_Tooltip.hide()},checkDocClick:function(t){var e=dw_Tooltip;if(e.active){var o=dw_Event.getTarget(t),i=document.getElementById(e.tipID);o!==e.actuator&&o!==i&&(dw_Util.contained(o,i)&&(o.tagName&&"img"==o.tagName.toLowerCase()&&(o=o.parentNode),"a"!=o.tagName.toLowerCase()||-1!=o.href.indexOf("dw_Tooltip.hide"))||(e.timer=setTimeout(e.hide,10)))}},checkLinkClick:function(t){var e,o,i,n,r,c=dw_Tooltip,a=c.actuator;("a"==a.nodeName.toLowerCase()||"area"==a.nodeName.toLowerCase())&&(o=a.href,o&&o.lastIndexOf("#")==o.length-1&&(e=location.href,r=e.indexOf("#"),i=-1!=r?e.slice(0,r):e,r=o.indexOf("#"),n=-1!=r?o.slice(0,r):o,i==n&&(t=dw_Event.DOMit(t),t.preventDefault())))},clearTimer:function(t){dw_Tooltip[t]&&(clearTimeout(dw_Tooltip[t]),dw_Tooltip[t]=0)},initAjaxRequest:function(){},resetRequest:function(){},getWidth:function(){return this.width=this.tip.offsetWidth},getHeight:function(){return this.height=this.tip.offsetHeight},getMaxX:function(){return dw_Viewport.width+dw_Viewport.scrollX-this.getWidth()-1},getMaxY:function(){return dw_Viewport.height+dw_Viewport.scrollY-this.getHeight()-1},getMouseEventX:function(t){return t.pageX?t.pageX:t.clientX+dw_Viewport.scrollX},getMouseEventY:function(t){return t.pageY?t.pageY:t.clientY+dw_Viewport.scrollY},checkForActuator:function(t){var e=dw_Event.getTarget(t);if(e){var o=dw_Tooltip,i=null,n=0,r="",c="",a=o.maxLoops;do{if(i=o.getActuatorInfo(e)){switch(r=i.msg,c=i.id,t.type){case"mouseover":o.forTouch||(window.attachEvent&&dw_Event.remove(e,"mouseout",o.deactivate),dw_Event.add(e,"mouseout",o.deactivate)),o.forTouch&&o.activateOnClick&&dw_Event.add(e,"click",function(t){t.preventDefault()});break;case"click":o.activateOnClick&&t.preventDefault();break;case"focus":case"focusin":if(o.active&&e==o.actuator)return;window.addEventListener?dw_Event.add(e,"blur",o.deactivate):window.attachEvent&&dw_Event.add(e,"focusout",o.deactivate)}o.activate(t,e,r,c);break}n++}while(a>n&&(e=e.parentNode))}},getActuatorInfo:function(t){var e=dw_Tooltip,o=e.getTipClass(t.className);if(!o)return"";var i,n=e.content_vars||{},r="",c="";return c=n&&n[o]?o:"",!c&&"class_id"==e.content_source&&(i=document.getElementById(o))&&(r=i.innerHTML),c||r?{msg:r,id:c}:!1},initHandlers:function(){var t=dw_Tooltip;t.ready||(t.forTouch?dw_Event.add(document,"mouseover",t.checkForActuator,!0):(t.activateOnClick?(dw_Event.add(document,"click",t.checkForActuator,!0),dw_Event.add(document,"mouseup",t.checkDocClick,!0)):dw_Event.add(document,"mouseover",t.checkForActuator,!0),dw_Event.add(document,"keydown",t.checkEscKey,!0),!t.activateOnClick&&t.activateOnFocus&&(window.addEventListener?dw_Event.add(document,"focus",t.checkForActuator,!0):window.attachEvent&&dw_Event.add(document,"focusin",t.checkForActuator))),t.ready=!0)}};dw_Tooltip.writeStyleRule=function(){dw_Tooltip.hasSupport()&&dw_Util.writeStyleRule(".tipContent { display:none; }")},dw_Tooltip.posWinCenter=dw_Tooltip.positionWindowCenter=function(){var t=dw_Viewport,e=dw_Tooltip,o=Math.round((t.width-e.tip.offsetWidth)/2)+t.scrollX,i=Math.round((t.height-e.tip.offsetHeight)/2)+t.scrollY;e.setPosition(o,i)},dw_Tooltip.posCenterAboveTgt=function(){var t=dw_Tooltip,e=t.actuator,o=dw_Util.getPageOffsets(e),i=o.x+(e.offsetWidth/2-t.tip.offsetWidth/2),n=o.y-t.tip.offsetHeight;t.setPosition(i,n)},dw_Tooltip.posCenterBelowTgt=function(){var t=dw_Tooltip,e=t.actuator,o=dw_Util.getPageOffsets(e),i=o.x+(e.offsetWidth/2-t.tip.offsetWidth/2),n=o.y+e.offsetHeight+t.offY;t.setPosition(i,n)},dw_Tooltip.posLeftTgt=function(){var t=dw_Tooltip,e=t.actuator,o=dw_Util.getPageOffsets(e),i=o.x-(t.tip.offsetWidth+t.offX),n=o.y;t.setPosition(i,n)},dw_Tooltip.posRightTgt=function(){var t=dw_Tooltip,e=t.actuator,o=dw_Util.getPageOffsets(e),i=o.x+e.offsetWidth+t.offX,n=o.y;t.setPosition(i,n)},dw_Tooltip.wrapWithCloseBox=function(t,e){e=e||"";var o,i,n=this.closeBoxImage||"",r="";return n?dw_Util.getImage(n):r=' style="text-decoration:none; font-weight:bold;"',o=n?'<img style="border:none" src="'+n+'" alt="Close box" />':"X",i='<div class="topBar"><span class="closeBox" style="position:absolute; top:0; right:0; text-align:right;"><a href="javascript: void dw_Tooltip.hide()"'+r+">"+o+'</a></span><span class="caption">'+e+'</span></div><div class="XtipContent">'+t+"</div>"},dw_Tooltip.wrapWithCloseLink=function(t,e){return e&&(t='<div class="caption">'+e+"</div>"+t),t+='<div class="close" style="text-align:center; margin:4px 0;"><a href="javascript: void dw_Tooltip.hide()">Close</a></div>'},dw_Tooltip.handleWrapOpts=function(t,e){var o=dw_Tooltip,i=e&&e.w?e.w:"",n=e&&e.caption?e.caption:"";return o.sticky||o.activateOnClick||o.forTouch?t=o.showCloseBox?o.wrapWithCloseBox(t,n):o.wrapWithCloseLink(t,n):n&&(t='<div class="caption">'+n+"</div>"+t),i&&o.showCloseBox&&(o.sticky||o.activateOnClick||o.forTouch)&&(i+=8),i&&o.setTipWidth(i),t},dw_Tooltip.wrapToWidth=function(t){var e="";return t.img?(dw_Util.getImage(t.img),e='<img src="'+t.img+'" alt="" />'):e=t.str,dw_Tooltip.handleWrapOpts(e,t)},dw_Tooltip.wrapImageOverText=function(t){dw_Util.getImage(t.img);var e='<div class="img"><img src="'+t.img+'" alt="" /></div><div class="txt">'+t.txt+"</div>";return dw_Tooltip.handleWrapOpts(e,t)},dw_Tooltip.wrapTextOverImage=function(t){dw_Util.getImage(t.img);var e='<div class="txt">'+t.txt+'</div><div class="img"><img src="'+t.img+'" alt="" /></div>';return dw_Tooltip.handleWrapOpts(e,t)},dw_Tooltip.wrapTextByImage=function(t){dw_Util.getImage(t.img);var e='<table cellpadding="0" cellspacing="0" border="0"><tr><td><div class="txt">'+t.txt+'</div></td><td><div class="img"><img src="'+t.img+'" alt="" /></div></td></tr></table>';return dw_Tooltip.handleWrapOpts(e,t)},dw_Tooltip.wrapImageToWidth=function(t){dw_Util.getImage(t.img);var e='<img src="'+t.img+'" width="'+t.w+'" height="'+t.h+'" alt="" />';return dw_Tooltip.handleWrapOpts(e,t)},dw_Tooltip.setTipWidth=function(t){t=parseInt(t)+dw_Util.forBackCompatWidth(this.tip),this.tip.style.width=t+"px"},dw_Event.add(window,"load",dw_Tooltip.init);