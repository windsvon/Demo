// 实现一个可拖拽交互的界面
// 如示例图，左右两侧各有一个容器，里面的选项可以通过拖拽来左右移动
// 被选择拖拽的容器在拖拽过程后，在原容器中消失，跟随鼠标移动
// 注意拖拽释放后，要添加到准确的位置
// 拖拽到什么位置认为是可以添加到新容器的规则自己定
// 注意交互中良好的用户体验和使用引导


var el = document.getElementById("drag-box");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var firstBoxPosition = getPosition(box1);
var secondBoxPosition = getPosition(box2);


$.delegate("#drag-box", "p", "mousedown", function(e) {
	moveBox(e);
});



function moveBox(e) {
	var ev = e || window.event;
	var target = ev.target || ev.srcElement;
	var elParent = target.parentNode;

	//改变被拖拽方块的外观
	target.style.backgroundColor = "rgba(255, 0, 0, 0.5)";

	document.onmousemove = function(e) {
		target.style.position = "absolute";
		target.style.left = e.pageX - 125 + "px";
		target.style.top = e.pageY - 50 + "px";
	};

	document.onmouseup = function(e) {
		document.onmousemove = null;
		document.onmouseup = null;

		//target样式回复原状
		target.style.position = "relative";
		target.style.left = 0;
		target.style.top = 0;
		target.style.backgroundColor = "red";

		elParent.removeChild(target);	
		
		if (e.pageY >= firstBoxPosition.y && e.pageY <= firstBoxPosition.y + 580 && e.pageX >= firstBoxPosition.x && e.pageX <= firstBoxPosition.x +250) {
			box1.appendChild(target);
		}	

		else if (e.pageY >= secondBoxPosition.y && e.pageY <= secondBoxPosition.y + 580 && e.pageX >= secondBoxPosition.x && e.pageX <= secondBoxPosition.x +250) {
			box2.appendChild(target);
		}	

		else {
			elParent.appendChild(target);
		}
	};


}
