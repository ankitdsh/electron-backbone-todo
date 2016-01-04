var strVar = "";
strVar += "<!-- TEMPLATE FOR A SINGLE TODO ITEM -->";
strVar += "";
strVar += "<li class=\"todoItem  \" id=\"<%=todo_id%>\" position=\"<%=sort_position%>\">";
strVar += "    <span class=\"todoItemTitle\"> <%= title %>  <\/span>";
strVar += "    <span class=\"todoItemDelete removeButton\" todoid=\"<%=todo_id%>\" position=\"<%=sort_position%>\">x<\/span>";
strVar += "    <div style=\"clear: both;\"><\/div>";
strVar += "<\/li>";


module.exports = strVar;
