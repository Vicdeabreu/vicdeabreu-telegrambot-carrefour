const Telegraf = require('telegraf')

const bot = new Telegraf('1071648884:AAFkOH_jAJBqa9TZlwnJc7SacbDkZPl4V3E');

// Bot em portugués
bot.start((ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Seja bem vindo a o bot do Carrefour 🔵⚪️🔴\n 
🇪🇸 Para español, escriba 'español'
🇬🇧 For english, type: 'english'\n 
Caso contrário, Digite as opções de eletrónicos que vocé quer comprar: \n 
1️⃣: TV 📺
2️⃣: Celular 📱 \n
Em caso de precisar de ajuda, digite /help`)
})

bot.help((ctx) => {
  ctx.reply(`Enquanto fazemos crescer esse maravilhoso bot, deixamos as nossas principais opções 😊\n 
✔️Digite 'TV' para ver as nossas opções de TV 📺 
✔️Digite 'celular' para ver as opções de celulares que ofercemos 📱 \n
Para voltar para o menú principal, digite /start `)
})

bot.hears(['TV', 'Tv', 'tv'], (ctx) => {
  ctx.reply(`Nada melhor para ficar em casa que uma TV nova, ne? ☺️
Qual TV você quer? 
1️⃣ Samsung: /samsungtv 
2️⃣ LG: /lgtv `)
})

bot.hears(['Celular', 'CELULAR', 'celular'], (ctx) => {
  ctx.reply(`Já é hora de trocar de aparelho, ne? 😄. Qual celular você quer?

1️⃣ Samsung: /samsungphones 
2️⃣ iPhone: /iphones `)
})

// SMART TV SAMSUNG
bot.command('samsungtv', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de Smart TV Samsung, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "43 polegadas", callback_data: "STV43"},
          {text: "55 polegadas", callback_data: "STV55"}
        ],
      ]
    }
  })
})

bot.action('STV43', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, {source: "res/samsung-smart43.jpg"})
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheou o Samsung Smart TV LED 43"😍. Agora você tem 3 opções:\n 
✅Características: para ver os detalhes da TV 
✅Comprar
✅Voltar para o menú principal 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "stv43-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-43-Samsung-T5300-FULL-HD-WIFI-HDR-para-Brilho-e-Contraste-Plataforma-Tizen-2-HDMI-1-USB/p/6005152?origin=autocomplete&p=samsung%20smartv&ranking=2&typeclick=3&ac_pos=header"},
          {text: "Voltar", callback_data: "go-back"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('stv43-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O Samsung Smart TV LED 43" têm nessas características:\n 
✅Tela: Ultra HD 4K Bluetooth
✅Resolução: HDR 1,920px x 1,080px
✅Altura: 57.19cm
✅Largura: 97.99cm
✅Profundidade: 7.07cm
✅Entrada USB e HDMI
✅Wifi \n

Você quer mais detalhes para a compra ou voltar para o menú principal. Qual prefere? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-43-Samsung-T5300-FULL-HD-WIFI-HDR-para-Brilho-e-Contraste-Plataforma-Tizen-2-HDMI-1-USB/p/6005152?origin=autocomplete&p=samsung%20smartv&ranking=2&typeclick=3&ac_pos=header"},
          {text: "Voltar", callback_data: "go-back"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('STV55', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, {source: "res/samsung-smart55.jpg"})
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheu o Smart TV LED 55" 😍. Agora você tem 3 opções:\n 
✅Características: para ver detalhes da TV 
✅Comprar
✅Voltar para o menú principal 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "stv55-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-55-Samsung-RU7100-Ultra-HD-4K-Bluetooth-Wifi-HDR-Premium-Itunes-Controle-Unico-3-HDMI-2-USB/p/5675880"},
          {text: "Voltar", callback_data: "go-back"}
        ],
      ]
    }
  })
})

bot.action('stv55-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O Samsung Smart TV LED 55" têm nessas características:\n 
✅Tela: Ultra HD 4K Bluetooth
✅Resolução: HDR Premium 1,920px x 1,080px
✅Aplicativos Pré-instalados: Youtube, Netflix, Google Play, Globo Play, Amazon Prime Video
✅Altura: 71.42cm
✅Largura: 1.24m
✅Profundidade: 5,87 cm
✅Peso: 17.2kg
✅Entradas: 2USB e HDMI
✅Wifi \n

Você pode ver mais detalhes para a compra ou voltar para o menú principal. Qual prefere? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-43-Samsung-T5300-FULL-HD-WIFI-HDR-para-Brilho-e-Contraste-Plataforma-Tizen-2-HDMI-1-USB/p/6005152?origin=autocomplete&p=samsung%20smartv&ranking=2&typeclick=3&ac_pos=header"},
          {text: "Voltar", callback_data: "go-back"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

// Funções de voltar

bot.action('go-back', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de Smart TV Samsung, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "43 polegadas", callback_data: "STV43"},
          {text: "55 polegadas", callback_data: "STV55"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('go-main', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Seja bem vindo a o bot do Carrefour 🔵⚪️🔴\n 
🇪🇸 Para español, escriba 'español'
🇬🇧 For english, type: 'english'\n 
Caso contrário, Digite as opções de eletrónicos que vocé quer comprar: \n 
1️⃣: TV 📺
2️⃣: Celular 📱 \n
Em caso de precisar de ajuda, digite /help`)
})

// SMART TV LG
bot.command('lgtv', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de Smart TV LG, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "32 polegadas", callback_data: "LGSTV32"},
          {text: "60 polegadas", callback_data: "LGSTV60"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

// LG DE 32 POLEGADAS

bot.action('LGSTV32', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, {source: "res/lg-smart32.jpg"} )
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheou o LG Smart TV LED 32"😍. Agora você tem 3 opções:\n 
✅Características: para ver detalhes da TV 
✅Comprar
✅Voltar para o menú principal 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "lgtv32-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-32-LG-32LM625BPSB-HDR-Ativo-Virtual-Surround-Sound-Wi-Fi-Inteligencia-Artificial-ThinQ-AI/p/5733227"},
          {text: "Voltar", callback_data: "back-lgtv"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('lgtv32-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O LG Smart TV LED 32" têm nessas características:\n 
✅Tela: HD 720px
✅Altura: 44.5cm
✅Largura: 74.2cm
✅Profundidade: 8.75cm
✅Peso: 5.1kg
✅Inteligência Artificial
✅Entrada USB e HDMI
✅Wifi \n

Você quer mais detalhes da compra ou voltar para o menú principal? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-32-LG-32LM625BPSB-HDR-Ativo-Virtual-Surround-Sound-Wi-Fi-Inteligencia-Artificial-ThinQ-AI/p/5733227"},
          {text: "Voltar", callback_data: "back-lgtv"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

// LG DE 60 POLEGADAS

bot.action('LGSTV60', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, {source: "res/lg-smart60.jpg"})
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheou o LG Smart TV LED 60"😍. Agora você tem 3 opções:\n 
✅Características: para ver detalhes da TV 
✅Comprar
✅Voltar para o menú principal 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "lgtv60-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-60-LG-UN7310PSC-UHD-4K-Wi-Fi-Bluetooth-HDR-Thinq-AI-Smart-Magic-Google-Assistente-Alexa/p/6124291"},
          {text: "Voltar", callback_data: "back-lgtv"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('lgtv60-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O LG Smart TV LED 60" têm nessas características:\n 
✅Tela: UHD 4K 3840px x 2160px
✅Altura: 72.6cm
✅Largura: 1.244m
✅Profundidade: 8.7cm
✅Peso: 14.3kg
✅Entrada USB e HDMI
✅Wifi \n

Você quer mais detalhes da compra ou voltar para o menú principal? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-60-LG-UN7310PSC-UHD-4K-Wi-Fi-Bluetooth-HDR-Thinq-AI-Smart-Magic-Google-Assistente-Alexa/p/6124291"},
          {text: "Voltar", callback_data: "back-lgtv"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

// Menú principal LG TV

bot.action('back-lgtv', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de Smart TV LG, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "32 polegadas", callback_data: "LGSTV32"},
          {text: "60 polegadas", callback_data: "LGSTV60"}
        ],
      ]
    }
  })
})

// CELULARES
bot.hears(['Celular', 'celular', 'CELULAR'], (ctx) => {
  ctx.reply('!!')
})



// Carrefour en español


bot.launch();