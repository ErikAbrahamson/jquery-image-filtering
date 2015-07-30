//Grabs values for each selected option and puts them into array
var $selected = function() {
  var newArray =[];
  $('input:checked').each(function() {
    newArray.push(+$(this).val());
  });
  return newArray;
};
