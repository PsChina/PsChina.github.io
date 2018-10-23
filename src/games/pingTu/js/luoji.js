import isMobile from '../../../is/mobile.js'
export default function(){
	var successfullCoordinateArray = new Array(0,0,134,0,269,0,0,151,134,151,269,151,0,302,134,302);
	var mainGameBoxUl = document.getElementsByTagName("ul");
	var mainGameBoxLi = mainGameBoxUl[0].getElementsByTagName("li");
	var currentEmptOffset = new Array(269,302);
	var thisEmptOffset = new Array(0,0);
	var indexArray = new Array(0,1,2,3,4,5,6,7);
	var stepViewArray = document.getElementsByClassName("step");
	var stepView = stepViewArray[0];
	var timer = null;
	var step = 0;
	
	var time = 0;
	var succeed = 0;
	var notOk = 1;
	
	window.TimeAction = function() {
		time++;
		stepView.innerHTML="步数："+step+"  时间："+time;
	}
	
	for(var i=0; i<mainGameBoxLi.length; i++){
		
		if(i<mainGameBoxLi.length-1){
			mainGameBoxLi[i].style.left = successfullCoordinateArray[2*indexArray[i]] +"px";
			mainGameBoxLi[i].style.top = successfullCoordinateArray[2*indexArray[i]+1] +"px";
		}
		
		mainGameBoxLi[i].onclick = function(){
	
			if(!step&&!notOk){
				if(!time){
					timer = setInterval("TimeAction()",1000);
				}
			}
			
			var horizontalDistance = currentEmptOffset[0]-this.offsetLeft;
			var verticalDistance = currentEmptOffset[1]-this.offsetTop;
			
			if(horizontalDistance<0){
				horizontalDistance*=-1;
			}
			
			if(verticalDistance<0){
				verticalDistance*=-1;
			}
	
			var distance = horizontalDistance+verticalDistance;
			
			if(distance<=152&&distance>=149){
				thisEmptOffset[1] = this.offsetTop;
				this.style.top = currentEmptOffset[1]+"px";
				currentEmptOffset[1] = thisEmptOffset[1];
				step++;
			}else if(distance<149){
				thisEmptOffset[0] = this.offsetLeft;
				this.style.left = currentEmptOffset[0]+"px";
				currentEmptOffset[0] = thisEmptOffset[0];
				step++;
			}
			
			
			if(notOk){
				step = 0;
			}
			stepView.innerHTML="步数："+step+"  时间："+time;
			
			var c1 = mainGameBoxLi[0].offsetLeft==0&&mainGameBoxLi[0].offsetTop==0;
			var c2 = mainGameBoxLi[1].offsetLeft==134&&mainGameBoxLi[1].offsetTop==0;
			var c3 = mainGameBoxLi[2].offsetLeft==269&&mainGameBoxLi[2].offsetTop==0;
			var c4 = mainGameBoxLi[3].offsetLeft==0&&mainGameBoxLi[3].offsetTop==151;
			var c5 = mainGameBoxLi[4].offsetLeft==134&&mainGameBoxLi[4].offsetTop==151;
			var c6 = mainGameBoxLi[5].offsetLeft==269&&mainGameBoxLi[5].offsetTop==151;
			var c7 = mainGameBoxLi[6].offsetLeft==0&&mainGameBoxLi[6].offsetTop==302;
			var c8 = mainGameBoxLi[7].offsetLeft==134&&mainGameBoxLi[7].offsetTop==302;
			succeed = c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8;
			if(succeed&&!notOk) {
				clearInterval(timer);
				mainGameBoxLi[8].style.display = "block";
				stepView.innerHTML="过关! 步数："+step+"  时间："+time;
				for(var i=0; i<mainGameBoxLi.length; i++){
					mainGameBoxLi[i].onclick = function(){
						alert("恭喜过关！耗时："+time+"秒,共："+step+"步");
					}
				}
			}
		}
		
		if(i==mainGameBoxLi.length-1){
			
			var min_setp = 0;
		do{
	
			min_setp++;
			var suijiIndex = Math.round(Math.random()*7);
			mainGameBoxLi[suijiIndex].click();
			
			notOk = !(min_setp>500&&!succeed&&currentEmptOffset[0]==269&&currentEmptOffset[1]==302);
			
	
		}while(notOk);
		
		}
	
		
	}
	// 禁止拖拽图片
	document.body.ondragstart = function(){
		return false;
	}
	if(isMobile){
		
	}
}