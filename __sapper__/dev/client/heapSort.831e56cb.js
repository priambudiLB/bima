import { s as swap } from './swap.8dc9cfcc.js';

function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapSort(array, 0, animations);
  return animations;
}

function heapSort(array, extraIndex, animations) {
  let arrLength = array.length;
  for (let i = Math.floor(array.length/2) - 1; i >= 0; i--) {
    heapSortHelper(array, arrLength, i, extraIndex, animations);
  }
  for (let i = array.length - 1; i>0; i--) {
    animations.push([0+extraIndex, i+extraIndex, true]);
    swap(array, 0, i);
    animations.push([i+extraIndex, array[i], false]);
    animations.push([0+extraIndex, array[0], false]);
    animations.push([0+extraIndex, i+extraIndex, true]);
    arrLength--;
    heapSortHelper(array, arrLength, 0, extraIndex, animations);
  }
}
function heapSortHelper(
  array,
  arrLength,
  parentIndex,
  extraIndex,
  animations,
) {
  const leftIndex = parentIndex * 2 +1;
  const rightIndex = parentIndex * 2 +2;
  let maxIndex = parentIndex;
  if (leftIndex < arrLength && array[leftIndex] > array[maxIndex]) {
    maxIndex = leftIndex;
  }
  if (rightIndex < arrLength && array[rightIndex] > array[maxIndex]) {
    maxIndex = rightIndex;
  }
  if (maxIndex !== parentIndex) {
    animations.push([parentIndex+extraIndex, maxIndex+extraIndex, true]);
    swap(array, parentIndex, maxIndex);
    animations.push([parentIndex+extraIndex, array[parentIndex], false]);
    animations.push([maxIndex+extraIndex, array[maxIndex], false]);
    animations.push([parentIndex+extraIndex, maxIndex+extraIndex, true]);
    heapSortHelper(array, arrLength, maxIndex, extraIndex, animations);
  }
}

export { getHeapSortAnimations, heapSort };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhcFNvcnQuODMxZTU2Y2IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc29ydGluZ0FsZ29yaXRobXMvaGVhcFNvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN3YXAgZnJvbSBcIi4vc3dhcFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVhcFNvcnRBbmltYXRpb25zKGFycmF5KSB7XG4gIGNvbnN0IGFuaW1hdGlvbnMgPSBbXTtcbiAgaWYgKGFycmF5Lmxlbmd0aCA8PSAxKSByZXR1cm4gYXJyYXk7XG4gIGhlYXBTb3J0KGFycmF5LCAwLCBhbmltYXRpb25zKVxuICByZXR1cm4gYW5pbWF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYXBTb3J0KGFycmF5LCBleHRyYUluZGV4LCBhbmltYXRpb25zKSB7XG4gIGxldCBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aC8yKSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaGVhcFNvcnRIZWxwZXIoYXJyYXksIGFyckxlbmd0aCwgaSwgZXh0cmFJbmRleCwgYW5pbWF0aW9ucyk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGk+MDsgaS0tKSB7XG4gICAgYW5pbWF0aW9ucy5wdXNoKFswK2V4dHJhSW5kZXgsIGkrZXh0cmFJbmRleCwgdHJ1ZV0pO1xuICAgIHN3YXAoYXJyYXksIDAsIGkpXG4gICAgYW5pbWF0aW9ucy5wdXNoKFtpK2V4dHJhSW5kZXgsIGFycmF5W2ldLCBmYWxzZV0pO1xuICAgIGFuaW1hdGlvbnMucHVzaChbMCtleHRyYUluZGV4LCBhcnJheVswXSwgZmFsc2VdKTtcbiAgICBhbmltYXRpb25zLnB1c2goWzArZXh0cmFJbmRleCwgaStleHRyYUluZGV4LCB0cnVlXSk7XG4gICAgYXJyTGVuZ3RoLS1cbiAgICBoZWFwU29ydEhlbHBlcihhcnJheSwgYXJyTGVuZ3RoLCAwLCBleHRyYUluZGV4LCBhbmltYXRpb25zKVxuICB9XG59XG5mdW5jdGlvbiBoZWFwU29ydEhlbHBlcihcbiAgYXJyYXksXG4gIGFyckxlbmd0aCxcbiAgcGFyZW50SW5kZXgsXG4gIGV4dHJhSW5kZXgsXG4gIGFuaW1hdGlvbnMsXG4pIHtcbiAgY29uc3QgbGVmdEluZGV4ID0gcGFyZW50SW5kZXggKiAyICsxO1xuICBjb25zdCByaWdodEluZGV4ID0gcGFyZW50SW5kZXggKiAyICsyO1xuICBsZXQgbWF4SW5kZXggPSBwYXJlbnRJbmRleDtcbiAgaWYgKGxlZnRJbmRleCA8IGFyckxlbmd0aCAmJiBhcnJheVtsZWZ0SW5kZXhdID4gYXJyYXlbbWF4SW5kZXhdKSB7XG4gICAgbWF4SW5kZXggPSBsZWZ0SW5kZXhcbiAgfVxuICBpZiAocmlnaHRJbmRleCA8IGFyckxlbmd0aCAmJiBhcnJheVtyaWdodEluZGV4XSA+IGFycmF5W21heEluZGV4XSkge1xuICAgIG1heEluZGV4ID0gcmlnaHRJbmRleFxuICB9XG4gIGlmIChtYXhJbmRleCAhPT0gcGFyZW50SW5kZXgpIHtcbiAgICBhbmltYXRpb25zLnB1c2goW3BhcmVudEluZGV4K2V4dHJhSW5kZXgsIG1heEluZGV4K2V4dHJhSW5kZXgsIHRydWVdKTtcbiAgICBzd2FwKGFycmF5LCBwYXJlbnRJbmRleCwgbWF4SW5kZXgpXG4gICAgYW5pbWF0aW9ucy5wdXNoKFtwYXJlbnRJbmRleCtleHRyYUluZGV4LCBhcnJheVtwYXJlbnRJbmRleF0sIGZhbHNlXSk7XG4gICAgYW5pbWF0aW9ucy5wdXNoKFttYXhJbmRleCtleHRyYUluZGV4LCBhcnJheVttYXhJbmRleF0sIGZhbHNlXSk7XG4gICAgYW5pbWF0aW9ucy5wdXNoKFtwYXJlbnRJbmRleCtleHRyYUluZGV4LCBtYXhJbmRleCtleHRyYUluZGV4LCB0cnVlXSk7XG4gICAgaGVhcFNvcnRIZWxwZXIoYXJyYXksIGFyckxlbmd0aCwgbWF4SW5kZXgsIGV4dHJhSW5kZXgsIGFuaW1hdGlv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QUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6RSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztBQUN0QyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbkUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekUsSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBQztBQUN0RSxHQUFHO0FBQ0g7Ozs7In0=
