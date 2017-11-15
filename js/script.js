window.onload = function(){
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

    //当音乐播放完毕停止时候，自动停止光盘旋转效果
    audio.addEventListener("ended",function(event) {
    	music.setAttribute("class","");
    },false);

    //点击音乐图标，控制音乐播放效果
	/*music.onclick = function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			//this.style.animationPlayState = "running"; 安卓，ios不兼容
		}else{
			audio.pause();
			this.setAttribute("class","");
		};
	}; */
	//点击屏幕，开启
	music.addEventListener("touchstart",function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			//this.style.animationPlayState = "running"; 安卓，ios不兼容
		}else{
			audio.pause();
			this.setAttribute("class","");
		};
	},false);
	  page1.addEventListener("touchstart",function(event){
	  	page1.style.display = "none";
	  	page2.style.display = "block";
	  	page3.style.display = "block";
	  	page3.style.top     = "100%";
	  	
	  	setTimeout(function(){
	  		page2.setAttribute("class","page fadeOut");
	  		page3.setAttribute("class","page fadeIn");
	  },5500);
	  },false);
};