package com.tns.ifet.activityone;

public class Main {
    public static void main(String[] args) {
        EmployeeDetails employeeDetails = new EmployeeDetails();
        Employee employee = employeeDetails.collectEmployeeDetails();
        if (employee != null) {
            System.out.println("\nEmployee Details:");
            employee.displayDetails();
        }
        Manager manager = employeeDetails.collectManagerDetails();
        if (manager != null) {
            System.out.println("\nManager Details:");
            manager.displayDetails();
        }
    }
}