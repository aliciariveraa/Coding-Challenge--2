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
    name: "John Doe",
    age: 30,
    department: "Sales",
    isActive: true
};
employee.department = "Marketing"; // Update department
employee.position = "Manager"; // Add new property
console.log(employee); // Log updated object
