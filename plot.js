#!/usr/bin/env node

"use strict"
var input = process.argv[2];  

line = [];
function plot(new_input)
{
  for (var x= -10; x <= 10; x+=0.1) {
    var y = eval(new_input);
    console.log('x: ' + x + ' y: ' + y);
    /* var points = [x,y];
    line.push(points); */
  }}
plot(input)  
