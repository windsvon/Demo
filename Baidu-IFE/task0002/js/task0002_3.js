var toggle = document.getElementsByTagName("li");
var toggleList = Array.prototype.slice.call(toggle); // convert a nodelist to a real array
var currentID = 0;
var nextID = 0;
var imageWidth = $("img").offsetWidth;

// 设置轮播属性
var dir = true; //true为正向，false为反向
var intervalTime = 5000; //轮播时间间隔
var cyc = true; //true为循环，false为不循环

function toImage(clickID) {
	if (typeof clickID == "number") { //如果直接用clickID的话，当clickID为零时不会触发条件
		nextID = clickID;
	} 

	else if (dir && cyc) {
		nextID = currentID  <= 2 ? currentID + 1 : 0;
	}

	else if (dir && !cyc) {
		if (currentID <= 2) {
			nextID = currentID + 1;
		} else {
			clearInterval(timer);
		}
	}

	else if (!dir) {
		nextID = currentID >=1 ? currentID - 1 : 3;
	}

	else if (!dir && !cyc) {
		if (currentID >= 1) {
			nextID = currentID - 1;
		} else {
			clearInterval(timer);
		}
	}

	toggle[currentID].className = "";
	toggle[nextID].className = "active";
	var el = document.getElementById("active-figure");
	var style = window.getComputedStyle(el);
	var pos = parseFloat(style.getPropertyValue("right"));
	setInterval(move, 5);
	function move() {
		var speed = (500*nextID - pos)/15;
		pos = pos + speed
		el.style.right = pos + "px";
	}
	currentID = nextID;
}

var timer = setInterval(toImage, intervalTime);

$.delegate("#mark", "li", "click", function() {
	clearInterval(timer);
	var clickID = toggleList.indexOf(this); //得到当前选项的index
	toImage(clickID);
	timer = setInterval(toImage, intervalTime);
})




