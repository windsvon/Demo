// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return typeof arr === "object" && Object.prototype.toString.call(arr) === "[object Array]";
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
	return typeof(fn) == 'function';

}

// 查看结果
// console.log(isArray('sha'));
// console.log(isFunction('sha'));

////////////////////////////////////////

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不包含函数，正则对象等。
function cloneObject(src) {
	// your implement
	var temp = src.constructor === Array ? [] : {};
	for ( var i in src) {
		if (typeof src[i] === 'object') { //由于数组也是对象
			temp[i] = cloneObject(src[i]);
		} else {
			temp[i] = src[i];
		}
	}
    return temp;
}

// 测试用例：
// var srcObj = {
// 	a: 1,
// 	b: {
// 		b1: ["hello", "hi"],
// 		b2: "Javascript"
// 	}
// }

// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);  // 1
// console.log(tarObj.b.b1[0]);  // "hello"

///////////////////////////////////////////////////////////////////////

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
	var temp = []; //创建新数组
	temp[0] = arr[0]; 
	for (var i = 1; i < arr.length; i++) { // 从第二个元素开始遍历旧数组
		arrPrev = arr.slice(0,i); 
		if (arrPrev.indexOf(arr[i]) === -1) {
			temp.push(arr[i]); //如果当前元素不与之前元素相同，则将该元素加入新数组
		}
	}
	return temp;
}


//查资料后，发现更好的方法

// function uniqArray(arr) {
//     var newArr = []; //创建空数组
//     for (var i in arr) { //遍历旧数组
//         if (newArr.indexOf(arr[i]) == -1) { //如果新数组中不存在当前元素
//             newArr.push(arr[i]); //新数组中加入当前元素
//         }
//     }
//     return newArr;
// }


// 使用示例
// var a = [1, 3, 5, 7, 5, 3, 5, 7, 5, 6];
// var b = uniqArray(a);
// console.log(b); // [1, 3, 5, 7]

///////////////////////////////////////////////////////////////

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删除掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
	var startIndex;
	var endIndex;
	for (var i = 0; i < str.length; i++) { //从头开始遍历这个字符串
		var temp = str.charAt(i);
		if (temp !== " ") {
			startIndex = i; //记录下非空白字符的起始位置
			break;
		}
	}

	for (var j = str.length - 1;  j > 0; j--) { //从尾部开始遍历这个字符串
		var temp = str.charAt(j);
		if (temp !== " ") {
			endIndex = j;  //记录下非空白字符的结束位置
			break;
		}
	}

	var newStr = str.slice(i, j+1); // 返回字符串
	return newStr;
}

// 和很多同学肯定对上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简单的正则表达式完成该题目

function trim(str) {

	return str.replace(/^\s|\s$/g, "");

}

// 使用示例
// var str = '   hello world!   ';
// console.log(str);
// console.log(str.length);
// str = simpleTrim(str);
// str2 = trim(str);
// console.log(str); //'hi!'
// console.log(str2);
// console.log(str2.length);

//////////////////////////////////////////////////////////////////////

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
	for (var i in arr) {
		fn(arr[i], i);
	}
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item) {
// 	console.log(item)
// }

// each(arr, output); // java, c, php, html

// // 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item, index) {
// 	console.log(index + ": " + item)
// }

// each(arr, output);

////////////////////////////////////////////////////////////

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var num = 0;
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) { //如果不check的话会遍历到prototype中的元素
			num += 1;
		}
	}
	return num;
}


// 使用示例
// var obj = {
// 	a: 1,
// 	b: 2,
// 	c: {
// 		c1: 3,
// 		c2: 4 
// 	}
// };
// console.log(getObjectLength(obj)); //3

////////////////////////////////////////////////////////

// 判断是否为邮箱地址
function isEmail(emailStr) {
	if (emailStr.match(/.+@.+\..+/g) !== null) {
		return true;
	} else {
		return false;
	}
}
// var email = "yuvon1990@gmail.com";
// console.log(isEmail(email));

// 判断是否为手机号
function isMobiePhone(phone) {
	if (phone.match(/^[1][358][0-9]{9}$/) !== null) {
		return true;
	} else {
		return false;
	}
}

// var phone = "13837159656";
// console.log(isMobiePhone(phone));

////////////////////////////DOM////////////////////////////////

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
	var oldClassName = element.className;
	element.className = newClassName === oldClassName ? oldClassName : oldClassName + " " +newClassName;
}

// var el = document.getElementById("number1");

// addClass(el, 'container');

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
		if ((" " + element.className + " ").indexOf(" " + oldClassName + " ") !== -1 ) {
		element.className = element.className.replace(oldClassName, "").trim(); //防止oldClassName是样式名的一部分(e,g, blablaoLdClassName)
	} else {
		return false;
	}
}

// var el = document.getElementById("number1");

// removeClass(el, 'container');

// console.log(el.className);

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
	return element.parentNode === siblingNode.parentNode;
}

// el1 = document.getElementById('child1');
// el2 = document.getElementById('child2');
// el3 = document.getElementById('stranger');

// console.log(isSiblingNode(el1, el3));

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
	var rect = element.getBoundingClientRect();
	var xPosition = rect.left + window.scrollX;
	var yPosition = rect.top + window.scrollY;
	var position = {x: xPosition, y: yPosition};
	return position;
}

// el = document.getElementById("child1");
// console.log(getPosition(el));

// 实现一个简单的Query
function $(selector) {
	// 通过id获取对象
	if (selector[0] === "#" && selector.indexOf(" ") === -1) {
		return document.getElementById(selector.substr(1));
	}

	// 通过tagName获取DOM对象
	if (selector.match(/^\w+/)) {
		return document.getElementsByTagName(selector).item(0);
	}


	// 通过class name获取对象
	if (selector[0] === "." && selector.indexOf(" ") === -1) {
		return document.getElementsByClassName(selector.substr(1)).item(0);
	}

	// 通过attribute匹配获取DOM对象 
	if (selector.match(/^\[.+\]$/g) !== null && selector.indexOf("=") === -1) {
		var attr = selector.substr(1, selector.length-2);
		var items = document.getElementsByTagName("*");
		for (var i = 0; i < items.length; i++) {
			if (items[i].hasAttribute(attr)) {
				return items[i];
				break;
			}
		}

	}

	// 通过attribute以及value匹配获取DOM对象 
	if (selector.match(/^\[.+\=.+\]$/g) !== null) {
		var temp = selector.substr(1, selector.length-2).split("=");
		var attr = temp[0];
		var value = temp[1].substr(1, temp[1].length-2);
		var items = document.getElementsByTagName("*");
		for (var i = 0; i < items.length; i++) {
			if (items[i].hasAttribute(attr) && items[i].getAttribute(attr) === value) {
				return items[i];
				break;
			}
		}

	}

	if (selector.match(/^#.+\s\..+/g) !== null) {
		var temp = selector.split(" ");
		var idValue = temp[0].substr(1);
		var classValue = temp[1].substr(1);
		var parent = document.getElementById(idValue);
		var child = parent.childNodes;
		for (var i = 0; i < child.length; i++) {
			if ((" " + child[i].className + " ").indexOf(" " + classValue + " ") > -1) {
				return child[i];
				break;
			}
		}

	}	

	// 可以通过简单的组合提高查询便利性

}

// // 可以通过id获取DOM对象，通过#标示，例如
// $("#adom"); // 返回id为adom的DOM对象

// // 可以通过tagName获取DOM对象，例如
// $("a"); // 返回第一个<a>对象

// // 可以通过样式名称获取DOM对象，例如
// $(".classa"); //返回第一个样式定义包含classa的对象

// // 可以通过attribute匹配获取DOM对象，例如
// $("[data-log]"); //返回第一个包含属性data-log的对象

// $("[data-time=2015]"); //返回第一个包含属性data-time且值为2015的对象

// // 可以通过简单的组合提高查询便利性，例如
// $("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

////////////////////////////////////事件///////////////////////////////////

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
	if (element.addEventListener) {
		element.addEventListener(event, listener, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + event, listener);
	}
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
	if (element.removeEventListener) {
		element.removeEventListener(event, listener);
	} else if (element.attachEvent) {
		element.detachEvent("on" + event, listener);
	}
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
	addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
	addEvent(element, "keydown", function(e) {
		if (e.keyCode == 13) {
			listener();
		}
	});
}

// 实现对于按Up键时的事件绑定
function addUpEvent(element, listener) {
	addEvent(element, "keydown", function(e) {
		if (e.keyCode == 38) {
			listener();
		}
	});
}

// 实现对于按Down键时的事件绑定
function addUpEvent(element, listener) {
	addEvent(element, "keydown", function(e) {
		if (e.keyCode == 40) {
			listener();
		}
	});
}

// // 接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法

// $.on = function(element, event, listener) {
// 	addEvent(element, event, listener);
// }

// $.un = function(element, event, listener) {
// 	removeEvent(element, event, listener);
// }

// $.click = function(element, listener) {
// 	addClickEvent(element, listener);
// }

// $.enter = function(element,listener) {
// 	addEnterEvent(element, listener);
// }

// 接下来考虑这样一个场景，我们需要对一个列表里所有的<li>增加点击事件的监听

// 最笨的方法

// function clickListener(event) {
// 	console.log(this.textContent);
// }

// $.click($("#item1"), clickListener);
// $.click($("#item2"), clickListener);
// $.click($("#item3"), clickListener);

// 上面这段代码要针对每一个item去绑定事件，这样显然是一个麻烦的事情。
// 稍微好一些的

// function clickListener(event) {
// 	console.log(this.textContent);
// }

// each($("#list").getElementsByTagName("li"), function(li) {
// 	addClickEvent(li, clickListener);
// }); // 此处会提示Uncaught TypeError: element.attachEvent is not a function，
// 	// 但是用前一种方法不会提示，何故？

// 我们通过自己写的函数，取到id为list这个ul里面的所有li, 然后通过遍历给他们绑定事件。
// 这样我们就不需要一个个去绑定了，但是看看以下代码：

// function clickListener(event) {
// 	console.log(this.textContent);
// }

// function renderList() {
// 	$("#list").innerHTML = "<li>new item</li>";
// }

// function init() {
// 	each($("#list").getElementsByTagName("li"), function(item) {
// 		$.click(item, clickListener);
// 	});
// 	$.click($("#btn"), renderList);
// }
// init();

// 我们增加了一个按钮，当点击按钮时，改变list里面的项目，这个时候你再点击一下li, 绑定事件不在生效了。
// 那是不是我们每次改变了DOM结构或者内容后，都需要重新绑定事件呢？当然不会这么笨。
// 接下来学习一下事件代理，然后实现下面新的方法：

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
	addEvent(element, eventName, function(e) {
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if (target.tagName.toLowerCase() == tag.toLowerCase()) {
			listener.call(target, e);
			// 也可以直接用listener(e);
		}
	})
}

// $.delegate = delegateEvent;

// // 使用示例
// // 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
// function clickHandle(event) {
// 	console.log(this.textContent);
// }
// $.delegate($("#list"), "li", "click", clickHandle);

// 估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么接下来把我们的事件函数做如下封装改变：

$.on = function(selector, event, listener) {
	addEvent($(selector), event, listener);
}

$.click = function(selector, event, listener) {
	addClickEvent($(selector), event, listener);
}

$.un = function(selector, event, listener) {
	removeEvent($(selector), event, listener);
}

$.delegate = function(selector, tag, event, listener) {
	delegateEvent($(selector), tag, event, listener);
}

/////////////////////////////BOM////////////////////////////////
//实现以下函数

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
	var ua = navigator.userAgent.toLowerCase();
	console.log(ua);
	var M = ua.match(/msie\s\d/); //["msie x.0"] as an array
	console.log(M);
	if (M) {
		return M[0].split(" ")[1];
	} else {
		return -1;
	}
}

// console.log(isIE()); //-1或版本号

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString());
	console.log(document.cookie);
}

// 获取cookie值
function getCookie(cookieName){
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(cookieName + "=");
		if (c_start !== -1) {
			c_start = c_start + cookieName.length + 1;
			c_end = (document.cookie.indexOf(";", c_start) > -1) ? document.cookie.indexOf(";", c_start) : document.cookie.length;
			return decodeURIComponent(document.cookie.substr(c_start, c_end));
		}
	} else {
		return "";
	}
}

// 在Chrome中无法成功设置cookie,因为chrome出于安全性考虑不能设置本地cookie

// setCookie("Name", "Yu", 365);
// console.log(getCookie("Name"));
// console.log(document.cookie.length);


////////////////////////////////////Ajax////////////////////////////////
// 学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：
// 
function ajax(url, options) {
	// 设置type, 默认为get
	if (options.type) {
		var type = options.type;
	} else {
		var type = "GET";
	}

	// 设置发送的数据
	var data = options.data; // return an object
	var urlValue = url + "?";
	for (var key in data) {
		urlValue += key + "=" + data[key] + "&";
	}
	urlValue = urlValue.substr(0, urlValue.length -2);
	console.log(urlValue);

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			(options.onsuccess) ? options.onsucess(xhttp.responseText, xhr) : console.log("error");
		} else {
			(options.onfail) ? options.onfail() : console.log("error");
		}
	}

	xhttp.open(type, urlValue, true);
	xhttp.send();
}

// 使用示例：
// ajax(
// 	"http://localhost:8080/server/ajaxtest",
// 	{
// 		data: {
// 			name: 'simon',
// 			password: '123456'
// 		},
// 		onsuccess: function(responseText, xhr) {
// 			console.log(responseText);
// 		}

// 	}

// );

