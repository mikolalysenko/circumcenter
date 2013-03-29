"use strict"

var numeric = require("numeric")

function barycentricCircumcenter(points) {
  var N = points.length
  if(N === 0) {
    return []
  }
  var D = points[0].length
  var A = numeric.rep([points.length+1, points.length+1], 1.0)
  var b = numeric.rep([points.length+1], 1.0)
  A[N][N] = 0.0
  for(var i=0; i<N; ++i) {
    for(var j=0; j<=i; ++j) {
      A[j][i] = A[i][j] = 2.0 * numeric.dot(points[i], points[j])
    }
    b[i] = numeric.dot(points[i], points[i])
  }
  var x = numeric.solve(A, b)
  x.length = N
  return x
}

function cricumcenter(points) {
  if(points.length === 0) {
    return []
  }
  var D = points[0].length
  var result = numeric.rep([D], 0.0)
  var weights = barycentricCircumcenter(points)
  for(var i=0; i<points.length; ++i) {
    for(var j=0; j<D; ++j) {
      result[j] += points[i][j] * weights[i]
    }
  }
  return result
}

cricumcenter.barycenetric = barycentricCircumcenter
module.exports = cricumcenter
