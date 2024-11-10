package com.tns.ifet.assignment;

public class BankApplication {
    public static void main(String[] args) {
        // Create Savings Account with initial balance of 1000
        Account savings = new SavingsAccount(1000);
        savings.deposit(500);
        savings.withdraw(300);
        savings.displayAccountInfo();

        System.out.println();

        // Create Checking Account with initial balance of 1000
        Account checking = new CheckingAccount(1000);
        checking.deposit(200);
        checking.withdraw(150);
        checking.displayAccountInfo();
    }
}

