package com.tns.ifet.activityone;

class Manager extends Employee {
    private String department;
    public Manager(int id, String name, double salary, String department) {
        super(id, name, salary);
        this.department = department;
    }
    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Department: " + department);
    }
}
