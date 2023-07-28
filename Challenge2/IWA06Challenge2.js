const rent = 400;
const tax = 0.08; 
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0; 
const minuteOfDay = 0; 

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 0 && minuteOfDay === 0) {
  const taxAsDecimal = tax / 100; 
  const startingAfterTax = salary * (1 - taxAsDecimal); 
  const balance = startingAfterTax - (food + rent + transport);
  console.log(balance.toFixed(3));
} else {
  console.log("Balance calculation is only valid at midnight (00:00).");
}