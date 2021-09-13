function makeBuffer() {
	var bufferValue = "";

	function stringBuffer() {
		return bufferValue;
	}

	stringBuffer.add = function(value) {
		if (isNaN(value))
			bufferValue += value + " ";
		else
			bufferValue += value;
	}

	stringBuffer.print = stringBuffer; 

	stringBuffer.clear = function() {
		bufferValue = "";
	}

	return stringBuffer;
}

var buffer = makeBuffer();
buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно!");
console.log(buffer.print());

var buffer1 = makeBuffer();
buffer1.add(0);
buffer1.add(1);
buffer1.add(0);
console.log(buffer1.print());

var buffer2 = makeBuffer();
buffer2.add("Тест");
buffer2.add("тебе не з'їсть!");
console.log(buffer2.print());
buffer2.clear();
console.log(buffer2.print());