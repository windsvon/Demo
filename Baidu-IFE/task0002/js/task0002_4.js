var input = document.getElementById("search-box");
var hint = document.getElementById("hint");
var suggestData = [
	'Alma', 'Alex', 'Armin',
	'Brook', 'Bill', 'Bryan',
	'Charles', 'Cris',
	'Darsey', 'Darwin',
	'Eva', 'Edward', 'Elwood',
	'Finn', 'Frank',
	'Greg', 'George',
	'Henry', 'Hanks',
	'Indian', 'Indo',
	'Jim', 'James', 'Julius',
	'Ken', 'Kieren',
	'Levis', 'Louis',
	'Mike', 'Marvel',
	'Nike', 'Neymar',
	'Olivia','Omar',
	'Paul', 'Park',
	'Queen', 'Query',
	'Richael','Richard',
	'Steve', 'Stanley',
	'Ted', 'Tom',
	'Uber', 'UFO',
	'Victoria', 'Vincent',
	'Woodward', 'Will', 'Woody',
	'XXOO',
	'York', 'Yavus',
	'Zelus', 'Zerg'
];


function showHint(e) {
	if (e.keyCode !== 40 && e.keyCode !== 38 && e.keyCode !== 13) { //防止按上下以及空格时触发这个listener
		var content = input.value;
		var hintList = "";
		hint.removeAttribute("class");
	    for (i = 0; i < suggestData.length; i++) {
	    	if (suggestData[i].substring(0, content.length) == content) {
	    		hint.setAttribute("class", "hintBox");
	    		hintList += "<p><span>" + content + "</span>" + suggestData[i].substring(content.length) + "</p>"
	    	}

	    	if (content.length == 0) {
	    		hintList = "";
	    		hint.removeAttribute("class");
	    	}
	    }
	    hint.innerHTML = hintList;
	}
}


input.addEventListener("keyup", showHint, false);


$.delegate("#hint", "p", "click", function() {
	var name = this.textContent;
	input.value = name;
	hint.removeAttribute("class");
	hint.innerHTML = "";
});

window.addEventListener("keydown", function(e) {
	var hintList = Array.prototype.slice.call(document.getElementsByTagName("p"));
	var curr = document.getElementsByClassName("selected")[0];
	if (e.keyCode == 40) {
		if (curr === undefined) {
			hint.firstChild.setAttribute("class", "selected");  //当没有选中任何选项时，选中第一个选项
		} 
		else if (hintList.indexOf(curr) == hintList.length - 1) {
			curr.removeAttribute("class");
			hint.firstChild.setAttribute("class", "selected");  //当达到底部时返回到第一个选项
		}

		else {
			curr.removeAttribute("class");
			curr.nextSibling.setAttribute("class", "selected");
		}
	}

	if (e.keyCode == 38) {
		if (hintList.indexOf(curr) == 0) {
			curr.removeAttribute("class");
			hint.lastChild.setAttribute("class", "selected");  //当到达顶部时回到最后一个选项
		}
		else {
			curr.removeAttribute("class");
			curr.previousSibling.setAttribute("class", "selected");
		}
	}

	if (e.keyCode == 13) {
		e.preventDefault();
		input.value = curr.textContent;
		hint.removeAttribute("class");
		hint.innerHTML = "";
	}

}, false)

// 这个练习有几处发现
// 第一、 keypress不好使。所以为了防止上下回车键触发showHint不得不多写了很多代码。
// 第二、为了防止回车键submit form，添加了e.preventDefault, 注意！！此处不能用keyup, 不然preventDefault不好使。


