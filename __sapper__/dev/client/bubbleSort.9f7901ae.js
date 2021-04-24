import { s as swap } from './swap.8dc9cfcc.js';

function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(
  mainArray,
  animations,
) {
  for (let i = 1; i < mainArray.length; i++) {
    let sorted = true;
    for (let j = 0; j < mainArray.length - i; j++) {
      animations.push([j, j+1, true]);
      animations.push([j, j+1, true]);
      if (mainArray[j] > mainArray[j+1]) {
        swap(mainArray, j, j + 1);
        sorted = sorted && false;
      } else {
        sorted = sorted && true;
      }
      animations.push([j, mainArray[j], false]);
      animations.push([j+1, j+1, true]);
      animations.push([j+1, mainArray[j+1], false]);
      animations.push([j+1, j+1, true]);
      if (j === mainArray.length - i - 1 && sorted) {
        break
      }
    } 
    if (sorted) break;
  }
}

export { getBubbleSortAnimations };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlU29ydC45Zjc5MDFhZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zb3J0aW5nQWxnb3JpdGhtcy9idWJibGVTb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzd2FwIGZyb20gXCIuL3N3YXBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1YmJsZVNvcnRBbmltYXRpb25zKGFycmF5KSB7XG4gIGNvbnN0IGFuaW1hdGlvbnMgPSBbXTtcbiAgaWYgKGFycmF5Lmxlbmd0aCA8PSAxKSByZXR1cm4gYXJyYXk7XG4gIGJ1YmJsZVNvcnRIZWxwZXIoYXJyYXksIGFuaW1hdGlvbnMpO1xuICByZXR1cm4gYW5pbWF0aW9ucztcbn1cblxuZnVuY3Rpb24gYnViYmxlU29ydEhlbHBlcihcbiAgbWFpbkFycmF5LFxuICBhbmltYXRpb25zLFxuKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbWFpbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNvcnRlZCA9IHRydWVcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1haW5BcnJheS5sZW5ndGggLSBpOyBqKyspIHtcbiAgICAgIGFuaW1hdGlvbnMucHVzaChbaiwgaisxLCB0cnVlXSk7XG4gICAgICBhbmltYXRpb25zLnB1c2goW2osIGorMSwgdHJ1ZV0pO1xuICAgICAgaWYgKG1haW5BcnJheVtqXSA+IG1haW5BcnJheVtqKzFdKSB7XG4gICAgICAgIHN3YXAobWFpbkFycmF5LCBqLCBqICsgMSk7XG4gICAgICAgIHNvcnRlZCA9IHNvcnRlZCAmJiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc29ydGVkID0gc29ydGVkICYmIHRydWVcbiAgICAgIH1cbiAgICAgIGFuaW1hdGlvbnMucHVzaChbaiwgbWFpbkFycmF5W2pdLCBmYWxzZV0pO1xuICAgICAgYW5pbWF0aW9ucy5wdXNoKFtqKzEsIGorMSwgdHJ1ZV0pO1xuICAgICAgYW5pbWF0aW9ucy5wdXNoKFtqKzEsIG1haW5BcnJheVtqKzFdLCBmYWxzZV0pO1xuICAgICAgYW5pbWF0aW9ucy5wdXNoKFtqKzEsIGorMSwgdHJ1ZV0pO1xuICAgICAgaWYgKGogPT09IG1haW5BcnJheS5sZW5ndGggLSBpIC0gMSAmJiBzb3J0ZWQpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9IFxuICAgIGlmIChzb3J0ZWQpIGJyZWFrO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFTyxTQUFTLHVCQUF1QixDQUFDLEtBQUssRUFBRTtBQUMvQyxFQUFFLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN4QixFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDdEMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdEMsRUFBRSxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBQ0Q7QUFDQSxTQUFTLGdCQUFnQjtBQUN6QixFQUFFLFNBQVM7QUFDWCxFQUFFLFVBQVU7QUFDWixFQUFFO0FBQ0YsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxJQUFJLElBQUksTUFBTSxHQUFHLEtBQUk7QUFDckIsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbkQsTUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0QyxNQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN6QyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxRQUFRLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBSztBQUNoQyxPQUFPLE1BQU07QUFDYixRQUFRLE1BQU0sR0FBRyxNQUFNLElBQUksS0FBSTtBQUMvQixPQUFPO0FBQ1AsTUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sSUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sRUFBRTtBQUNwRCxRQUFRLEtBQUs7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksSUFBSSxNQUFNLEVBQUUsTUFBTTtBQUN0QixHQUFHO0FBQ0g7Ozs7In0=
