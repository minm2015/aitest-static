function arrayRemoveItem(arr, delVal) {
  if (arr instanceof Array) {
    let index = arr.indexOf(delVal);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
}

function arrayReplaceItem(arr, oldItem, newItem) {
  if (arr instanceof Array) {
    let index = arr.indexOf(oldItem);
    if (index > -1) {
      arr[index] = newItem;
    }
  }
}

export default {
  arrayRemoveItem, arrayReplaceItem
}