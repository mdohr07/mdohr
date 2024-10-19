# 2024-08-25_Week Seven: Java Arrays and Test Preparation

I gotta say: week seven was hard. We had a test upcoming on Friday but also touched on our next topic which is Arrays in Java. And that was gonna be asked about in the test as well and I had trouble with it. I guess, that might be normal, we just started. But I wanted to do well in the test so that was troubeling.

## My best Java Code so far

The test on the horizon did stress me out and also the lack of time to study for it. Fortunately we got some time during class in which we could do stuff on our own. So we could either do the tasks we were given by the teacher (Arrays…) or put it aside to study something else we felt we needed to study more. Because After class I didn’t study anymore, to be honest. I barely have time after I’m home anyway and if I did, my brain would be too stuffed already during the week. Sure, there’s weekend, but one needs some time to wind down too, right?
Generally, all coding tasks that involve a lot of numbers confuse me a lot. I mean, math isn’t my strength to begin with, so I need extra time to figure out how to get to a result just in theory, if I had to solve the math myself on pen and paper. And after that I still have to find out how to tell the computer to do it. All this contributed to me feeling very tired the whole week and the poor sleep I had didn’t help at all. Don’t know why I didn’t sleep well, but I blame nervousness and on top of that I was still coding in my dreams. I hope that’s a good thing and not just something to prevent me from resting. Who knows, maybe things install in my brain while I dream of code?

But I had good moments and wrote some code that I am proud of as well!

In the beginning of the week or in the end of the previous week, or maybe both, we had a task in which we were supposed to search a String for a word. Or words. I like tasks with Strings way more and I can make them more fun for myself. So I did this thing where you look for who is on board of your spaceship.

```java
import java.util.Scanner;

public class ArraysStringDurchsuchen {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Array mit Charakteren an Bord
        String[] onBoard = {
            "Alien",
            "Robot",
            "Hooman",
            "Ship AI",
            "Hamster"
        };

        while (true) {
            System.out.println("Who are you looking for? \nEnter:");
            String character = scanner.nextLine().trim(); // .trim() entfernt Leerzeichen
            System.out.println();

            boolean found = false;
            for (int i = 0; i < onBoard.length; i++) {
                if (onBoard[i].equalsIgnoreCase(character)) {
                    System.out.println(character + " is on board!");
                    found = true;
                    break; // Optional: Beendet die Schleife, wenn der Charakter gefunden wurde
                }
            }

            if (!found) {
                System.out.printf("Sorry, %s must be lost in space somewhere\n", character);
                System.out.println();
            }
        }
    }
}

```

Well, then we got to the Arrays and it was a bit challenging for me. But surprisingly I did well in the bonus task, in which other people struggled. But I have an explanation: I think this kind of problem solving goes easier on me because it’s graphic. So I have an easier time imagining and visualising. The task was, to put out a bar graph to represent some random given percentages. The bars were supposed to be in different “colors” (Unicode characters with different raster density). I showed my result to the teacher and warned him that I had a different approach. I didn’t understand how he wanted which bar to what precentage so I did low density for low percentage to high density for high percentage. Also I found a `.repeat(unicodeZeichen)` method and used it instead of working with loops. I know it might be “the lazy way” but also it’s much more readable and shorter this way, so I’m happy and teacher was impressed so it’s all good.

```java
public class ArraysBalkendiagramm {
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_RESET = "\u001B[0m";

    public static void main(String[] args) {
        int[] prozentZahlen = {23, 4, 20, 45, 100, 68};

        for (int prozentZahl : prozentZahlen) {
            // Die Prozentzahl durch 2 teilen
            // und pro 2% im Prozentwert einProzentBlock ausgeben
            char einProzentBlock = 0x2591; // Standard-Zeichen
            int unicodeZeichen = prozentZahl / 2; // unicodeZeichen * halbe Größe der prozentZahl

            if (prozentZahl < 20) {
                einProzentBlock = 0x2591; // Neues Zeichen bei < 20%
            } else if (prozentZahl > 20 && prozentZahl < 50) {
                einProzentBlock = 0x2593; // Neues Zeichen bei 20% - 50%
            } else if (prozentZahl > 50) {
                einProzentBlock = 0x2588; // Neues Zeichen bei > 50%
            }

            String grafischeDarstellung = Character.toString(einProzentBlock).repeat(unicodeZeichen);
            // repeat() wiederholt den String unicodeZeichen-mal.

            System.out.printf(ANSI_YELLOW + "%d%%\n", prozentZahl);
            System.out.printf(ANSI_PURPLE + "%s\n", grafischeDarstellung + ANSI_RESET);
        }
    }
}

```

When I was done with that, I had some spare time to do whatever I want and decided to use it for practise. From the top of my head I couldn’t recall exactly the switch statements and it was gonna come up in the test, so I did some practice with that. It’s about a spaceship again, but this time you’re the pilot and press some buttons. I would love to keep building on this and do more buttons, different scenarios etc. but that’s not happening yet. For the time being this is still work in progress. But I would very much like to translate this to JavaScript so that I can make a little browser game out of it 🤓

```java
import java.util.Scanner;

public class FallAuswahlRaumschiff {
    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_GREEN = "\u001B[32m";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println(
            "1️⃣ Hyperspace Jump\n" +
            "2️⃣ Orbital Navigation\n" +
            "3️⃣ Planetary Landing\n" +
            "4️⃣ Explorer Mode\n" +
            "5️⃣ Emergency Mode\n"
        );

        boolean cmdOK = false;

        while (true) {
            System.out.println(ANSI_GREEN + "//////////////////////////////////");
            System.out.println("Which button do you want to press?" + ANSI_RESET);
            String cmd = scanner.nextLine();

            // Überprüfe, ob die Eingabe gültig ist
            cmdOK = cmd.equals("1") || cmd.equals("2") || cmd.equals("3") || cmd.equals("4") || cmd.equals("5");

            if (cmdOK) {
                switch (cmd) {
                    case "1":
                        System.out.println("The hyperspace jump is being deployed.\nHold on to your seats!\n");
                        break;
                    case "2":
                        System.out.println("The spaceship enters the orbit of the target planet.\n");
                        break;
                    case "3":
                        System.out.println("Landing procedure initiated.\nPrepare to enter the atmosphere.\n");
                        break;
                    case "4":
                        System.out.println("Exploration drones launched.\nSurface scanner ready.\n");
                        break;
                    case "5":
                        System.out.println("Emergency protocol activated!\nAll systems set to protective mechanisms.\n");
                        break;
                }
            } else {
                System.out.println("Wrong button, sausage fingers!\n");
            }
        }
    }
}

```

## The test

This section isn’t gonna be too long. Unlike the test itself, which was kind of long. We do them on paper, don’t remember how many pages in total but six of them had code that we had to find out what the output is gonna be. For example a while loop with some conditionals withing and a table on the right with different values x and an empty value y which we had to fill. So pretty much going through the code several times with every different x-value to find out the y-value for each.
Then there were two (I think) fill the gap tests, over one page of putting a name to a description (knowing the technical terms of things), some writing code from scratch (by hand) and finding syntax errors in a given code. Last time I was really good in the latter with no mistakes, but this time I didn’t find three.
I am guessing that we get our results next week. I think overall I did okay, but I hope it’s gonna be better than okay (like a 2, which equals a B). We will see.

Also, I thought maybe it’s a cool idea to link the song I am listening to at the moment (which is displayed on top of the post). I tried embedding before, but the iframes that YouTube wants me to use are just too inconvinient and annoying. So here goes:

Yeah, well, that’s it for today. Until next time ✌️👽