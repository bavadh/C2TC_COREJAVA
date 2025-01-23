package com.tns.ifet.activityone;
import java.util.Scanner;
class EmployeeDetails {
    private Scanner scanner;
    public EmployeeDetails() {
        scanner = new Scanner(System.in);
    }
    public Employee collectEmployeeDetails() {
        try {
            System.out.print("Enter Employee ID: ");
            int id = Integer.parseInt(scanner.nextLine());

            System.out.print("Enter Employee Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Employee Salary: ");
            double salary = Double.parseDouble(scanner.nextLine());

            // Validate the salary
            if (salary < 0) {
                throw new IllegalArgumentException("Salary cannot be negative.");
            }

            return new Employee(id, name, salary);
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format! Please enter valid numerical values.");
            return null;
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    public Manager collectManagerDetails() {
        try {
            System.out.print("Enter Manager ID: ");
            int id = Integer.parseInt(scanner.nextLine());

            System.out.print("Enter Manager Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Manager Salary: ");
            double salary = Double.parseDouble(scanner.nextLine());

            if (salary < 0) {
                throw new IllegalArgumentException("Salary cannot be negative.");
            }

            System.out.print("Enter Department Name: ");
            String department = scanner.nextLine();

            return new Manager(id, name, salary, department);
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format! Please enter valid numerical values.");
            return null;
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}