$(function(){
  //writes inputs
  var grocIds = ["item1","item2","item3","item4","item5","item6","item7","item8"];
  for (var index=0; index < grocIds.length; index++ ){
    $("#groceryForm").append('<input id="'+grocIds[index]+'" type="text"><br>');
  }
  $("button.submitIt").click(function(event){
    // $("form#groceryForm").hide();
  $("ul#groceryList").empty();
// EMPTY is how you clear all the child elements
  var arrayitems = ["item1","item2","item3","item4","item5","item6","item7","item8"];
  var tempItemArray =[];
  for (var i=0 ; i < arrayitems.length ; i++){
    tempItemArray.push($("#"+arrayitems[i]).val());
  }
  tempItemArrayCap = tempItemArray.map(function(item){
    return item.toUpperCase();
  });
  tempItemArrayCap.sort();
  event.preventDefault();

  // WHILE NOT FOR LOOP EXAMPLE:::::
  var i = 0;
  while(i<tempItemArrayCap.length){
    $("ul#groceryList").append("<li>"+tempItemArrayCap[i]+"</li>");
    i++;
  }
  });
});
