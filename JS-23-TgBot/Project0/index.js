const { Telegraf } = require("telegraf");
require("dotenv").config();
require("nodemon");
const axios = require('axios');

if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN must be provided!");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
function search(arr, x) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) return x;
    else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return undefined;
};
`;

bot.start((ctx) => {
  const welcomeMessage = `Welcome to shr/'s Bot! Here are some commands you can use:
  /binarysearch - Learn about the binary search algorithm.
  /toplinuxcommand - Get top Linux commands.
  /perfectsquaredp - Dp solution
  Send any sticker, and I'll show some love ❤️.
  Anything else, I might get a bit confused 🤷‍♂️.`;
  ctx.reply(welcomeMessage);
});

bot.command("binarysearch", (ctx) => {
  ctx.reply("Here's a JavaScript function for binary search:");
  ctx.reply(`\`\`\`${binarySearchString}\`\`\``, { parse_mode: "MarkdownV2" });
  // parse_mode: "MarkdownV2" allows you to include richer formatting options such as bold, italic, code blocks, and more in your message
});

bot.command("toplinuxcommand", (ctx) => {
  ctx.reply(
    "Here are some top Linux commands:\n- ls\n- cd\n- pwd\n- grep\n- rm",
    { parse_mode: "Markdown" }
  );
});

bot.command("perfectsquaredp", async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/singhsanket143/Data-Structures-Algorithms-Problem-Solving/master/6.DP/PerfectSquares.java');
    ctx.reply(response.data);
})

bot.on("sticker", (ctx) => ctx.reply("❤️"));

bot.on("text", (ctx) => {
  if (ctx.update.message.text.toLowerCase().includes("hello")) {
    ctx.reply("Hello there! How can I assist you today?");
  } else {
    ctx.reply(
      "I'm sorry, I don't understand humans that well. Try /start to see what I can do!"
    );
  }
});

bot.catch((err, ctx) => {
  console.error(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

bot.launch().then(() => {
  console.log("Shr/'s Bot is up and running!");
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));