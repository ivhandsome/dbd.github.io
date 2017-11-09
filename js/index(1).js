

function fnIndex(){
	var wrap = id('wrap');
	var box = wrap.getElementsByClassName('box')[0];
	var section = wrap.getElementsByTagName('section')
	var iW = view().w;
	var Width = view().w/4
	var num = 0;
	var now = 0;
	var disx = 0;
	var disy = 0;
	var startx,movex,endx = null;
	var starty,movey,endy = null;
	var theCSSprop = window.getComputedStyle(box,null).width;
	var s1 = window.getComputedStyle(section[0],null).height;
	var s2 = window.getComputedStyle(section[1],null).height;
	var s3 = window.getComputedStyle(section[2],null).height;
	var s4 = window.getComputedStyle(section[3],null).height;
	console.log(iW,theCSSprop,Width);
	console.log(s1,s2,s3,s4)
	var arr = [];
	
	
	
	bind(wrap,'touchstart',start);
	bind(wrap,'touchmove',move);
	bind(wrap,'touchend',end);
	
	function start(ev){
		box.style.transition = 'none';
		ev = ev.changedTouches[0];
		now = disx;
		startx = ev.pageX;
		starty = ev.pageY;
		console.log(startx);
	};
	
	function move(ev){
		ev = ev.changedTouches[0];
		num = Math.round(disx/iW);
		movex = ev.pageX;
		disx = now - (movex - startx);
		num = Math.round(disx/iW);
		if(num >= section.length-1){
			num =3;
			disx = num*iW;
			box.style.transition = '1s';
			box.style.transform = 'translate3d(-'+(disx)+'px,0,0)';
		}
		//now = disx;
		//console.log(moveX);
		//console.log(disx)
		box.style.transform = 'translate3d(-'+(disx)+'px,0,0)';
	};
	
	function end(ev){
		ev = ev.changedTouches[0];
		endy = ev.pageY;
		disy = endy-starty
		console.log(disy)
		
		num = Math.round(disx/iW);
		
		if(num >= section.length-1){			
			num =3;
		}else if(num<=0){
			num = 0;
		}
		
		//now = disx;
		disx = num*iW;
		console.log(disx)
		box.style.transition = '1s';
		box.style.transform = 'translate3d(-'+(disx)+'px,0,0)';
		console.log(num)
	}
}
