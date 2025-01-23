//Driver Program for generic constructors
package com.tnsif.dayfifteen.generics;

public class GenericConstructorDemo {

	public static void main(String[] args) {
		  System.out.println("Number to Double Conversion:");
		  
		  GenericConstructor obj=new GenericConstructor(10);
		  obj.show();
		  
		  GenericConstructor objOne=new GenericConstructor(136.8F);
		  objOne.show();
		  
			/*
			 * GenericConstructors objTwo=new GenericConstructors("Hello")); objTwo.show();
			 */

	}

}
