3. Example (Dono me farak)Chaliye dekhte hain ki agar hum ek aisi condition dein jo shuru se hi galat ho, to kya hoga:Normal while loop:JavaScriptlet i = 10;
while (i < 5) {
  console.log("Ye nahi chalega");
  i++;
}
// Result: Kuch bhi print nahi hoga kyunki 10 chota nahi hai 5 se.
do...while loop:JavaScriptlet i = 10;
do {
  console.log("Ye ek baar zaroor chalega!");
  i++;
} while (i < 5);
// Result: "Ye ek baar zaroor chalega!" print hoga. 
// Uske baad check hoga ki (11 < 5) jo false hai, tab loop rukega.
4. Real-life Use CaseIska sabse achha example hai User Input. Maan lijiye aap user se tab tak uska naam mangna chahte hain jab tak wo sahi naam na daal de.JavaScriptlet name;
do {
  name = prompt("Please enter your name:");
} while (!name); // Agar naam khali hai, to phir se pucho.

console.log("Hello " + name);
Isme aapko kam se kam ek baar to prompt dikhana hi padega, isliye do...while best hai.Summary TableFeaturewhile loopdo...while loopPehle kya hota hai?Condition check hoti haiCode execute hota haiMinimum execution0 baar (agar condition false ho)1 baar (hamesha)ApproachEntry-controlledExit-controlled