package com.tnsif.bavadharani.assignment1;
import com.tnsif.bavadharani.assignment1.employees.Manager;
import com.tnsif.bavadharani.assignment1.employees.Developer;
import com.tnsif.bavadharani.assignment1.utilities.EmployeeUtilities;
public class AssignmentMain {
public static void main(String[] args) {
Manager manager = new Manager("Sandhiya", 101, 90000, "Sales");
Developer developer = new Developer("Shiva", 102, 80000, "Java");
EmployeeUtilities.printEmployeeDetails(manager);
EmployeeUtilities.printEmployeeDetails(developer);
}
}