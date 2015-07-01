var fs = require('fs');
var input = 'out.html';
var output = 'out.html';
var out = "";

var fileContent = fs.readFileSync(input, 'utf-8');
var before = function (argument) {
	/*
<html>
<head>
  <title>XV6 github.com/nadav-dav</title>
  <style>
  	body {
      font-family: monospace;
      white-space: pre;
      font-size: 1.2em;
      background: black;
      color: #ccc;
    }
    td {
      vertical-align: top;
      white-space: pre;
      font-size: 1.2em;
    }
    .content {
  		width: 800px;
  		margin: 0 auto;
  		background: #333;
  		padding: 10px;
      white-space: pre;
    }
    .lines {
      
    }
    a{
      color:#eee;
    }
    a.define-ref {
      color:#4aa7db; 
    }
    a.str-ref {
      color:#ffc425; 
    }
    a.func-ref {
      color:#00b159; 
    }
    a.file-ref {
      color:#ffc425; 
    }
    span.reserved {
	  color: #4aa7db;
	  pointer-events: none;
    }
    span.hash {
	  color: #ee4035;
    }
    span.comment {
	  color: #777 !important;
    }
    span.comment a{
	  color: #777 !important;
    }
  </style>
</head>
<body>
<div class='content'><table><tr><td class='lines'></td><td>
*/
}.toString().match(/\/\*([\s\S]*)\*\//m)[1]
var after = "\n</td></tr></table></div></body></html>"

fs.writeFileSync(output, 
	before +
		fileContent.replace(/\</g,"&lt;").replace(/\>/g,"&gt;") +
		after, 'utf8');