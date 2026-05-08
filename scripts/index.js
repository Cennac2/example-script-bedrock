//Import world and system class
import { world, system } from "@minecraft/server";

//system.runInterval runs the code inside the callback repeatedly.
system.runInterval(() => {
    world.sendMessage("Hello, World!"); // Send the message "Hello World"
}, 20); // The second argument (20) is a number telling the function how often to run the callback in ticks


