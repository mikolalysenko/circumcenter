"use strict"

var circumcenter = require("../circumcenter.js")

require("tape").test("circumcenter", function(t) {

  t.equals(circumcenter([[1], [2]]).join(","), [1.5].join(","))
  t.equals(circumcenter([[0,0], [0,1], [1,0]]).join(","), [0.5,0.5].join(","))

  for(var d=2; d<5; ++d) {
    for(var i=0; i<100; ++i) {
      var radius = Math.random()
      var points = []
      for(var j=0; j<=d; ++j) {
        var p = new Array(d)
        var pl = 0.0
        for(var k=0; k<d; ++k) {
          p[k] = Math.random() - 0.5
          pl += Math.pow(p[k], 2)
        }
        pl = radius/Math.sqrt(pl)
        for(var k=0; k<d; ++k) {
          p[k] *= pl
        }
        points.push(p)
      }
      var center = circumcenter(points)
      for(var j=0; j<d; ++j) {
        t.ok(Math.abs(center[j]) < 1e-4)
      }
    }
  }


  t.end()
})
