'use strict';

app.controller('PostCtrl', function($scope, Post){
  $scope.posts = Post.all;
  
  $scope.post = {
    url:'http://',
    title: ''
  };

  // $scope.submitPost = function(){
  //   // Post.save($scope.post, function(ref){
  //   //   $scope.posts[ref.name] = $scope.post;
  //   //   $scope.post = {url: 'http://', title: ''};
  //   // });
  //   Post.create($scope.post).then(function (ref) {
  //     $location.path('/posts/' + ref.name());
  //     // $scope.post = {url: 'http://', 'title': ''};
  //   });
  //   // $scope.post = {
  //   //   url:'http://',
  //   //   title: ''
  //   // };
  // };

  $scope.deletePost = function(post){
    Post.delete(post);
  };
});
