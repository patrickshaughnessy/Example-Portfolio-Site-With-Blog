'use strict';

var concat = require('concat-files');
var parser = require('markdown-parse');
var fs = require('fs');
var path = require('path')

fs.readdir('./posts/', function(err, files){
  if (err) throw err;

  var posts = [];

  files.forEach(function(file){
    var content = (fs.readFileSync(__dirname + `/posts/${file}`, 'utf8'));

    parser(content, function(err, result){
      var newPost = {};
      newPost.title = result.attributes.title;
      newPost.id = result.attributes.id;
      newPost.date = result.attributes.date;
      newPost.tags = result.attributes.tags || [];
      newPost.body = result.html.toString();

      posts.push(newPost);
    })

  });

  var data = `var posts = ${JSON.stringify(posts)}`

  fs.writeFileSync('./posts.js', data);

  concat([
    './controllers/blogCtrl.js',
    './posts.js'
  ], path.resolve(__dirname, './controllers/blogCtrlCompiled.js'), function(err){
    if (err) throw err
    console.log('All posts compiled successfully!');
    fs.unlinkSync('./posts.js')
  });


})
