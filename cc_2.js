let products = ["Apple", "Banana", "Carrot", "Donut", "Eggplant"];
products.push("Fish");
products.pop();
console.log(products);  // Output: ["Apple", "Banana", "Carrot", "Donut"]
let scores = [85, 92, 78, 88, 94];
let total = scores.reduce((acc, score) => acc + score, 0);
let average = total / scores.length;
console.log("Updated scores array:", scores);
console.log("Average score:", average);
let employee = {
    name: "Mary John",
    age: 40,
    department: "Sales",
    isActive: true
};
employee.department = "Marketing"; // Update department
employee.position = "Manager"; // Add new property
console.log(employee); // Log updated object
let customers = [
    { name: 'Adrian', email: 'adrianfern34@gmail.com', purchaseAmount: 150 },
    { name: 'Charlie', email: 'charlie455@gmail.com', purchaseAmount: 250 },
    { name: 'Jone', email: 'jonesjones@gmail.com', purchaseAmount: 157 }
]; 
customers.push({ name: 'David', email: 'davidwownder@yahoo.com', purchaseAmount: 188 });
console.log(customers);
