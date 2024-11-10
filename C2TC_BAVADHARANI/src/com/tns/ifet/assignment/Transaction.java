package com.tns.ifet.assignment;

public class Transaction {
	// Final variable to represent a fixed transaction fee
    private final double transactionFee = 2.50;

    // Final method to perform a transaction, ensuring consistency
    public final void performTransaction(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid transaction amount.");
            return;
        }

        double totalAmount = amount + transactionFee;
        System.out.println("Transaction successful.");
        System.out.println("Amount: " + amount);
        System.out.println("Transaction Fee: " + transactionFee);
        System.out.println("Total Amount Deducted: " + totalAmount);
    }

    // Getter for transactionFee to access the fee if needed
    public double getTransactionFee() {
        return transactionFee;
    }

    public static void main(String[] args) {
        // Create an instance of Transaction class
        Transaction transaction1 = new Transaction();

        // Perform a transaction
        transaction1.performTransaction(100.00);
    }


}

