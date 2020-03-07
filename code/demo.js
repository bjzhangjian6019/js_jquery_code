alert("第二种引入方式...");
/** 根据元素的id删除一个元素
	参数: eleId 所要删除元素的id
 */
function remove(eleId){
	//1.获取要删除的元素(通过id获取)
	var ele = document.getElementById(eleId);
	//2.获取要删除元素的父元素
	var eleParent = ele.parentNode;
	//3.通过父元素删除子元素
	eleParent.removeChild( ele );
}