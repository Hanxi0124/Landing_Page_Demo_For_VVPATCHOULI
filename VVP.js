var speed=20//速度数值越大速度越慢
 	net_left2.innerHTML=net_left1.innerHTML
 	function Marquee3(){
 		if(net_left2.offsetWidth-net_left.scrollLeft<=0)
 			net_left.scrollLeft-=net_left1.offsetWidth
 		else{net_left.scrollLeft++}
 }
 var MyMar3=setInterval(Marquee3,speed)
net_left.onmouseover=function() {clearInterval(MyMar3)}
net_left.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)}
