// 入力した文字を読み込む記述 
import java.util.Scanner;
// 乱数を生成する記述
import java.util.Random;
class MyApp {
	public static void main(String[] args) {
		// 改行したくない時はlnをとるとOK
		System.out.print("Your name?");
		String name = new Scanner(System.in).next();

		// println=改行させる
		System.out.println("hello" + name);
		System.out.println("hello" + name + "again!");
	}
}
class MyApp {
	public static void main(String[] args) {
		Integer answer = 6;
		System.out.print("Your guess?");
		Integer guess = new Scanner(System.in).nextInt();

		if(answer == guess) {
			System.out.println("Bingo!");
		} else if (answer > guess) {
			System.out.println("The answer is higher!");
		} else {
			System.out.println("The answer is lower!");
		}
	}
}
class MyApp {
	public static void main(String[] args) {
		Integer answer = new Random().nextInt(10) + 1;
		System.out.print("Your guess?");
		Integer guess = new Scanner(System.in).nextInt();

		if(answer == guess) {
			System.out.println("Bingo!");
		} else if (answer > guess) {
			System.out.println("The answer is higher!");
		} else {
			System.out.println("The answer is lower!");
		}
		System.out.println("The answer was" + answer);
	}
}
class MyApp {
	public static void main(String[] args) {
		Integer answer = new Random().nextInt(10) + 1;
		Integer count = 0;
		while(true) {
		System.out.print("Your guess?");
		Integer guess = new Scanner(System.in).nextInt();
		count = count + 1;

			if(answer == guess) {
				System.out.println("Bingo! It took " + count + " guesses!");
			} else if (answer > guess) {
				System.out.println("The answer is higher!");
			} else {
				System.out.println("The answer is lower!");
			}
		}
	}
}