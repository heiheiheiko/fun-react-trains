function dive(currentKey, into, target) {
  for (var i in into) {
      if (into.hasOwnProperty(i)) {
          var newKey = i;
          var newVal = into[i];
          
          if (currentKey.length > 0) {
              newKey = currentKey + '.' + i;
          }
          
          if (typeof newVal === "object") {
              dive(newKey, newVal, target);
          } else {
              target[newKey] = newVal;
          }
      }
  }
}

export function flatten(arr) {
  var newObj = {};
  dive("", arr, newObj);
  return newObj;
}