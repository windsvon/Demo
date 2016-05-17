// 小练习1
function showHobby() {
	var hobby = el.value.replace(/\s+|,|，|、|\n|;/g, " ");
	var hobbyList = uniqArray(hobby.split(" "));
	if (hobby == "") {
		ht.textContent = "请输入至少一个爱好";
	}
	else if (hobbyList.length > 10) {
		ht.textContent = "最多输入十个爱好";
	}
	else {
		ht.textContent = "";
		var temp = "";
		for (var i = 0; i < hobbyList.length; i++) {
			temp = temp + "<label><input type='checkbox' name='checkbox' value='value'>" +  hobbyList[i] +"</label><br>";
		}
		elMsg.innerHTML = temp;
	}
}

var el = document.getElementById("input-hobby");
var elMsg = document.getElementById("hobby-list");
var ht = document.getElementById("hint");
var btn = document.getElementsByClassName("btn");
addEvent(btn[0], 'click', showHobby);

// 任务描述

// 在task0002目录下创建一个task0002_1.html文件，以及一个js目录和css目录，在js目录中创建task0002_1.js，并将之前写的util.js也拷贝到js目录下。然后完成以下需求。

// 第一阶段

// 在页面中，有一个单行输入框，一个按钮，输入框中用来输入用户的兴趣爱好，允许用户用半角逗号来作为不同爱好的分隔。

// 当点击按钮时，把用户输入的兴趣爱好，按照上面所说的分隔符分开后保存到一个数组，过滤掉空的、重复的爱好，在按钮下方创建一个段落显示处理后的爱好。

// 第二阶段

// 单行变成多行输入框，一个按钮，输入框中用来输入用户的兴趣爱好，允许用户用换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号来作为不同爱好的分隔。

// 当点击按钮时的行为同上

// 第三阶段

// 用户输入的爱好数量不能超过10个，也不能什么都不输入。当发生异常时，在按钮上方显示一段红色的错误提示文字，并且不继续执行后面的行为；当输入正确时，提示文字消失。

// 同时，当点击按钮时，不再是输出到一个段落，而是每一个爱好输出成为一个checkbox，爱好内容作为checkbox的label。

