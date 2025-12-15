operators -

**1. Arithmetic Operators (गणित वाले)**

Used for calculations

Operator	काम	Example
+	जोड़	5 + 2 = 7
-	घटाना	5 - 2 = 3
*	गुणा	5 * 2 = 10
/	भाग	10 / 2 = 5
%	remainder	10 % 3 = 1
**	power	2 ** 3 = 8
let a = 10;
let b = 3;
console.log(a % b); // 1

**🔹 2. Assignment Operators**

Value assign / update करने के लिए

Operator	Example	Meaning
=	x = 5	assign
+=	x += 2	x = x + 2
-=	x -= 2	x = x - 2
*=	x *= 2	x = x * 2
/=	x /= 2	x = x / 2
let x = 10;
x += 5;
console.log(x); // 15

**🔹 3. Comparison Operators**

Comparison करते हैं → result true / false

Operator	Meaning
==	value equal
===	value + type equal
!=	not equal
!==	not equal (type also)
>	greater
<	smaller
>=	greater or equal
<=	smaller or equal
5 == "5"   // true
5 === "5"  // false


👉 Interview tip:
✅ हमेशा === use करो

**🔹 4. Logical Operators**

Conditions को combine करने के लिए

Operator	Meaning
&&	AND
`	
!	NOT
true && false // false
true || false // true
!true // false

**🔹 5. Ternary Operator (? :)**

Short if-else

condition ? value1 : value2

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";

**🔹 6. Unary Operators**

Single value पर काम करते हैं

Operator	काम
++	increment
--	decrement
typeof	type check
let n = 5;
n++;
console.log(n); // 6

🔹 7. String Operators

Strings को जोड़ना

let a = "Hello";
let b = "World";
console.log(a + " " + b); // Hello World

**🔹 8. Bitwise Operators (Advanced)**

Low-level operations (rare use)

Operator
&
`
^
<<
>>
#**🔹 9. Nullish & Optional (Modern JS)**
Nullish Coalescing ??
let name = null;
console.log(name ?? "Guest"); // Guest

Optional Chaining ?.
user?.profile?.name

🧠 Summary (Most Important for Beginners)

✅ Arithmetic
✅ Assignment
✅ Comparison (===)
✅ Logical
✅ Ternary

