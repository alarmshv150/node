const { Telegraf, Markup } = require("telegraf");
const text = require("./const");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start
bot.start(
  (ctx) =>
    ctx.reply(
      `Привет ${
        ctx.message.from.first_name
          ? ctx.message.from.first_name
          : "unknown username"
      }!`
    )
  /* ctx.reply(text.commands) */
);

// /help - список команд
bot.help((ctx) => ctx.reply(text.commands));

//обработчик стикера
bot.on("sticker", (ctx) => ctx.reply("👍"));

//обработчик команд  /list
bot.command("list", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Список названий</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Названиe", "btn_1"),
          Markup.button.callback("Названиe", "btn_2"),
          Markup.button.callback("Название", "btn_3"),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

//обработка кнопки
function addActionBot(name, src, text) {
  bot.action(name, async (ctx) => {
    try {
      await ctx.answerCbQuery();
      if (src !== false) {
        await ctx.replyWithPhoto({
          source: src,
        });
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: true,
      });
    } catch (e) {
      console.error(e);
    }
  });
}

addActionBot("btn_1", "./img/img1.png", text.text1);
addActionBot("btn_2", "./img/img1.png", text.text2);
addActionBot("btn_3", false, text.text3);

//обработчик текстового сообщения
bot.hears("hi", (ctx) => ctx.reply("hi"));
bot.hears("hello", (ctx) => ctx.reply("hello"));

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

/* 
ctx.message
{
  message_id: 57,
  from: {
    id: 405687256,
    is_bot: false,
    first_name: 'Лёша',
    username: 'alarmshv',
    language_code: 'ru'
  },
  chat: {
    id: 405687256,
    first_name: 'Лёша',
    username: 'alarmshv',
    type: 'private'
  },
  date: 1653315547,
  text: '/start',
  entities: [ { offset: 0, length: 6, type: 'bot_command' } ]
}
*/

/* 
ctx.replyWithHTML("<b>Жирный</b>")
ctx.replyWithHTML("<i>Курсив</ш>")
ctx.replyWithHTML("<u>Подчёркнутый</u>")
ctx.replyWithHTML("<s>Зачёркнутый</s>")
ctx.replyWithHTML("<code>Моноширинный</code>")
ctx.replyWithHTML("<a href="https://something.ru">Ссылка</a>")
*/
