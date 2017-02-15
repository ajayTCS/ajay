'use strict';
import express from "express";
import memcached from "memcached";
var Memcached = new memcached('192.168.0.102:11211');
var app=express();
console.log(Memcached)
app.get("/",(request,response) => {
	response.write("<!DOCTYPE html>");
	response.write("<head>");
	response.write("</head>");
	response.write("<body>");
	response.write("hi");
	response.write("</body>");
	response.write("</html>");
	response.end();
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});