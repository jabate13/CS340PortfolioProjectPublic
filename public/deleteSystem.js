/*
var jquery = require('jquery');
*/

function deleteSystem(id){
  $.ajax({
    url: '/systems/' + id,
    type: 'DELETE',
    success: function(result){
      window.location.reload(true);
    }
  })
};
