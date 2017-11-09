var userFlag = false;
var phoneFlag = false;
var mailFlag = false;
var pwFlag = false;
var pw2Flag = false;
var num =-1;
var body = document.getElementsByTagName('body')[0];
var registerDiv = document.getElementsByClassName('registerDiv')[0];
var p = registerDiv.getElementsByTagName('p')[0];
var user = document.getElementsByClassName('user')[0];
var phone = document.getElementsByClassName('user')[1];
var mail = document.getElementsByClassName('user')[2];
var pw = document.getElementsByClassName('user')[3];
var pw2 = document.getElementsByClassName('user')[4];
var msg = document.getElementsByClassName('registerUser');
var foot = document.getElementsByClassName('registerFoot')[0];
var returntop = foot.getElementsByTagName('div')[0];
var registerBtn = document.getElementsByClassName('registerBtn')[0];
body.style.height = document.documentElement.clientHeight + 'px';
user.oninput = function(){
	if(this.value == ''){
		this.style.background = '#ff5757';
		userFlag = false;
		
	}else if(!/^[a-zA-Z0-9]{6,10}$/.test(user.value)){
		this.style.background = '#ff5757';
		userFlag = false;
	}else{
		this.style.background = '#63dcc9';
		userFlag = true;
	}
};
phone.oninput = function(){
	if(this.value == ''){
		this.style.background = '#ff5757';
		phoneFlag = false;
	}else if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.value)){
		this.style.background = '#ff5757';
		phoneFlag = false;
	}else{
		this.style.background = '#63dcc9';
		phoneFlag = true;
	}
};

mail.oninput = function(){
	if(this.value == ''){
		this.style.background = '#ff5757';
		mailFlag = false;
	}else if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ .test(this.value)){
		this.style.background = '#ff5757';
		mailFlag = false;
	}else{
		this.style.background = '#63dcc9';
		mailFlag = true;
	}
};
pw.oninput = function(){
	if(this.value == ''){
		this.style.background = '#ff5757';
		pwFlag = false
	}else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.value)){
		this.style.background = '#ff5757';
		pwFlag = false
	}else{
		this.style.background = '#63dcc9';
		pwFlag = true;
	}
};
pw2.oninput = function(){
	if(this.value == ''){
		this.style.background = '#ff5757';
		pw2Flag = false;
	}else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.value)){
		this.style.background = '#ff5757';
		pw2Flag = false;
	}else{
		if(this.value == pw.value){
			this.style.background = '#63dcc9';
			pw2Flag = true;
		}else{
			this.style.background = '#ff5757';
			pw2Flag = false;
		}
	}
};
registerBtn.addEventListener('touchstart',function(ev){
	if(userFlag == true&&phoneFlag==true&&mailFlag==true&&pwFlag==true&&pw2Flag==true){
		var timer = setInterval(function(){
			if(num>2){
				clearInterval(timer);
				console.log(num)
			}
			num++;
			msg[num].style.transform = 'translateY(-'+window.innerHeight+'px)';
			console.log(num)
		},100);
		setTimeout(function(){
			window.location.href ='index2.html';
		},1200)
	}else{
		p.style.opacity = 1;
		setTimeout(function(){
		p.style.opacity = 0;
		},2000);
	}
})