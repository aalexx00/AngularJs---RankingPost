'use strict';

app.factory('Post', function($resource){
  return $resource("https://burning-inferno-7689.firebaseio.com/posts/:id.json");
});
