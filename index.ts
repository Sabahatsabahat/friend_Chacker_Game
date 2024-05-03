import inquirer from "inquirer";
import chalk from "chalk";

// Best friends list
const bestFriends: string[] = ["Samreen", "FatimaZehra"];

async function checkFriend(): Promise<void> {
    const userInput = await inquirer.prompt([{
        type: "input",
        name: "name",
        message: chalk.yellow("Enter your friend's name: ") // Yellow color for prompt message
    }]);

    const friendName: string = userInput.name.trim(); // Remove extra spaces

    // Check if the entered name exists in the best friends list (case-insensitive)
    const isBestFriend: boolean = bestFriends.some(friend =>
        friend.toLowerCase() === friendName.toLowerCase()
    );

    // Output result with colored text
    if (isBestFriend) {
        console.log(chalk.green(`${friendName} is your best friend.`)); // Green color for positive result
    } else {
        console.log(chalk.red(`${friendName} is not your best friend.`)); // Red color for negative result
    }
}

// Start the game
checkFriend();
