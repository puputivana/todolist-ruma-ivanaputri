var myNodelist = document.getElementsByTagName("LI");
var i;
var x = myNodelist.length;
for (i = 0; i < x;  i++) {

  var span1 = document.createElement("i");
  var txt1 = document.createTextNode("edit");
  span1.className = "right tiny material-icons edit editButton grey-text text-darken-4";
  span1.appendChild(txt1);

  var span2 = document.createElement("i");
  var txt2 = document.createTextNode("close");
  span2.className = "right tiny material-icons close grey-text delete-button text-darken-4";
  span2.appendChild(txt2);
  myNodelist[i].appendChild(span2);
   myNodelist[i].appendChild(span1);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


$('label').click(function() {
	$(this).replaceWith( function() {
    return "<input class=\"col s6\" type=\"text\" value=\"" + $( this ).html() + "\" />";
	});
});

$("#addButton").click(
function() {
  var taskInput = $("#task-name").val();
  var dateInput = $("#task-date").val();
  alert("task: " + taskInput + " date: " + dateInput);

  $("#task-list").append("<li class='collection-item'><input type='checkbox'><label>"+ taskInput +"</label><label> Due date: "+ dateInput +"</label></li>");
  $("#task-name").val('');
  $("#task-date").val('');
});



