$(document).ready(function() {
  spaceJSExec();
});

function spaceJSExec() {
  bindHelperFunctions();
  prefillEditUsername();
  resizeHandler();
  loadCSS();
}

function loadCSS() {
	var cssRefObject=document.createElement("link");
	cssRefObject.setAttribute("rel", "stylesheet");
	cssRefObject.setAttribute("type", "text/css");
	cssRefObject.setAttribute("href", "http://471.no/Discovery/space.css");
	document.querySelector("head").appendChild(cssRefObject);
}

/* function declarations start */

function resizeHandler() {
	/* run resize handler once onload */
	onresize();
	$(window).smartresize(function(){
    	onResize();
	});
}

function onResize() {
	scaleNavbar();
}

function prefillEditUsername() {
  /* prefills the moderator edit interface with the username of the currently logged in user.  */
  if(!!document.querySelector("input[name='postusername']")) {
    document.querySelector("input[name='postusername']").value = document.querySelector("#editpost > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML.split(" <")[0];
  }
}

function scaleNavbar() {
  /* adds css classes for   */
  if(document.querySelector(".menu").offsetHeight > 1.25*document.querySelector(".menu ul li").offsetHeight) {
    $("body").removeClass("navbarNotWrapped");
  } else {
    $("body").addClass("navbarNotWrapped");
  }
}

function bindHelperFunctions() {
	(function($,sr){
	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
	  var timeout;
	  
	  return function debounced () {
	    var obj = this, args = arguments;
	    function delayed () {
	        if (!execAsap)
	  	  func.apply(obj, args);
	        timeout = null;
	    };
	  
	    if (timeout)
	        clearTimeout(timeout);
	    else if (execAsap)
	        func.apply(obj, args);
	  
	    timeout = setTimeout(delayed, threshold || 100);
	  };
	  }
	  // smartresize 
	  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	
	})(jQuery,'smartresize');
}
/* function declarations end */
