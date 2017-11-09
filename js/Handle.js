			var liNum = 0;
			var num = 0;
//			var btn = document.getElementById('btn');
			var flag = true;
			var startX, startY, endX, endY, moveX, moveY;
			var now = 0;
			var disx = 0;
			var disy = 0;
			var myUloffLeft = 0;
			var winWidth = window.innerWidth;
			var winNum = 0
			var open = true;
			function rendering(arr) { //遍历添加轮播图路径
				for(var i = 0; i < arr.length; i++) {
					var li = document.createElement('li');
					li.style.width = window.innerWidth + 'px';
					var img = document.createElement('img');
					img.src = data.imgs[i].src;
					li.appendChild(img);
					carUl.appendChild(li);
				}
			};
			function recommend(arr){
				for(var i=0;i<arr.length;i++){
					var li = document.createElement('li');
					var p = document.createElement('p');
					var img = document.createElement('img');
					p.innerText = data.recommend[i].num;
					img.src = data.recommend[i].src;
					li.appendChild(p);
					li.appendChild(img);
					recommends.appendChild(li);
				}
			};
			function addRecom(arr){
				for(var i =0;i<arr.length;i++){
					arr[i].index = i;
					arr[i].onclick = function(){
						console.log(this)
						var p = this.getElementsByTagName('p')[0];
						p.innerText ++;
//						console.log(this.children())
					}
				}
			}
			
			function addListener(el,e,fn){
				if(el.addEventListener){
					el.addEventListener(e,fn,false)
				}else{
					el.attachEvent(e,fn);
				}
			}

			function move(){
				winNum++;
				liNum++;
				if(winNum == 5){
					liNum = 0
				};
				for(var i=0;i<iconLi.length;i++){
					iconLi[i].style.background = 'white'
				};
				iconLi[liNum].style.background = 'black';
				if(winNum > 5){
					winNum = 0;
					carUl.style.transition = 'none';
					disx = winNum * winWidth;
					carUl.style.left = - disx + 'px';
					setTimeout(function(){
						winNum = 1;
						disx = winNum * winWidth;
						carUl.style.left = - disx + 'px';
						carUl.style.transition = '0.5s';
					},20);
				};
				disx = winNum * winWidth;
				carUl.style.left = - disx + 'px';
			};
			
			function play(){
				var mp3 = document.getElementById('play');
				if(open){
					mp3.play()
					open = false;
				}else{
					mp3.pause()
					open = true;
				}
			};



