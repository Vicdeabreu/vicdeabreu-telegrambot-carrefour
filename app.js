const Telegraf = require('telegraf')

const bot = new Telegraf('1071648884:AAFkOH_jAJBqa9TZlwnJc7SacbDkZPl4V3E');

// Bot em portugués
bot.start((ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Seja bem vindo a o bot do Carrefour 🔵⚪️🔴\n 
🇪🇸 Para español, presione el botón 'español' debajo
🇬🇧 For english, press the 'english' button bellow\n 
Caso contrário, Digite as opções de eletrodomésticos que vocé quer comprar: \n 
1️⃣: TV 📺
2️⃣: Celular 📱 \n
Em caso de precisar de ajuda, digite /help`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Español", callback_data: "esp-menu"},
          {text: "English", callback_data: "eng-menu"}
        ],
      ]
    }
  })
})

bot.help((ctx) => {
  ctx.reply(`Enquanto fazemos crescer esse maravilhoso bot, deixamos as nossas principais opções 😊\n 
✔️Digite 'TV' para ver as nossas opções de TV 📺 
✔️Digite 'celular' para ver as opções de celulares que ofercemos 📱 \n
Para voltar para o menú principal, digite /start `)
})

bot.hears(['TV', 'Tv', 'tv'], (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `Nada melhor para ficar em casa que uma TV nova, ne? ☺️
Qual TV você quer? 
1️⃣ Samsung: /samsungtv 
2️⃣ LG: /lgtv `, {
    reply_markup: {
      inline_keyboard: [
        [{text: "Menú principal", callback_data: "go-main"}],
      ]
    }
  })
})

bot.hears(['Celular', 'CELULAR', 'celular'], (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `Já é hora de trocar de aparelho, ne? 😄. Qual celular você quer?

1️⃣ Samsung: /samsungphones 
2️⃣ iPhone: /iphones `, {
    reply_markup: {
      inline_keyboard: [
        [{text: "Menú principal", callback_data: "go-main"}],
      ]
    }
  })
})

// SMART TV SAMSUNG
bot.command('samsungtv', (ctx) => {
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://i.pinimg.com/originals/5f/d0/30/5fd030534fd74380e0680ebeb79a213a.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de Smart TV Samsung, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "43 polegadas", callback_data: "STV43"},
          {text: "55 polegadas", callback_data: "STV55"}
        ],
        [{text: "Voltar para TV's", callback_data: "back-tvs"}],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('STV43', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/h23/h5d/h00/h00/26900204224542.jpg')
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

bot.action('STV55', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/h40/h20/h00/h00/13615290908702.jpg')
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
        [ {text: "Comprar", url: "https://www.carrefour.com.br/Smart-TV-LED-55-Samsung-RU7100-Ultra-HD-4K-Bluetooth-Wifi-HDR-Premium-Itunes-Controle-Unico-3-HDMI-2-USB/p/5675880"},
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
  ctx.telegram.sendMessage(ctx.chat.id, `Temos disponíveis 2 modelos de Smart TV Samsung, Qual você prefere? 😊`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "43 polegadas", callback_data: "STV43"},
          {text: "55 polegadas", callback_data: "STV55"}
        ],
        [{text: "Voltar para TV's", callback_data: "back-tvs"},
        {text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('go-main', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Seja bem vindo a o bot do Carrefour 🔵⚪️🔴\n 
🇪🇸 Para español, escriba 'español'
🇬🇧 For english, type: 'english'\n 
Caso contrário, Digite as opções de eletrodomésticos que vocé quer comprar: \n 
1️⃣: TV 📺
2️⃣: Celular 📱 \n
Em caso de precisar de ajuda, digite /help`)
})

bot.action('back-tvs', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `Nada melhor para ficar em casa que uma TV nova, ne? ☺️
Qual TV você quer? 
1️⃣ Samsung: /samsungtv 
2️⃣ LG: /lgtv `, {
    reply_markup: {
      inline_keyboard: [
        [{text: "Menú principal", callback_data: "go-main"}],
      ]
    }
  })
})

// SMART TV LG
bot.command('lgtv', (ctx) => {
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://technolized.files.wordpress.com/2012/09/lg-smart-tv-logo.jpg?w=848')
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de Smart TV LG, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "32 polegadas", callback_data: "LGSTV32"},
          {text: "60 polegadas", callback_data: "LGSTV60"},
        ],
        [{text: "Voltar para TV's", callback_data: "back-tvs"}],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

// LG DE 32 POLEGADAS

bot.action('LGSTV32', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/h6a/ha6/h00/h00/14046427512862.jpg')
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

Você pode ver mais detalhes da compra ou voltar para o menú principal. Qual prefere? 👀`, 
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
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/h58/hd5/h00/h00/28087718182942.jpg')
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

Você pode ver mais detalhes da compra ou voltar para o menú principal. Qual prefere? 👀`, 
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
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

// Celulares

// CELULARES SAMSUNG
bot.command('samsungphones', (ctx) => {
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://logo-logos.com/wp-content/uploads/2017/10/Samsung-Mobile.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de aparelhos Samsung, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Galaxy S10", callback_data: "GLXS10"},
          {text: "Galaxy A71", callback_data: "GLXA71"}
        ],
        [{text: "Voltar para celulares", callback_data: "back-cellphones"}]
      ]
    }
  })
})

bot.action('GLXS10', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/h6c/h35/h00/h00/13689345343518.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheou o Samsung Galaxy S10😍 o aparelho mais top da Samsung 😎. Agora você tem 3 opções:\n 
✅Características: para ver os detalhes do aparelho 
✅Comprar
✅Voltar para o menú principal 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "glxs10-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-S10-128GB-8GB-Octa-2-7GHz-1-9GHz-Android-9-0-PowerShare-6-1-12MP-12MP-16MP-10MP-Azul/p/MP15888516"},
          {text: "Voltar", callback_data: "back-cell-samsung"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('glxs10-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O Samsung Galaxy S10 têm nessas características:\n 
✅Tela: 6.1 polegadas
✅Resolução: UHD 8K (7680px x 4320px)
✅Armazenamento: 128GB
✅Memoria RAM: 8GB
✅Procesador: Exynos Octa Core 2.7GHz + 1.9GHz
✅Android:9
✅Camera:Tripla (12MP,12MP,16MP,10MP)
✅Cores:Azul, Branco e Preto
✅Bateria: 3400mAh
✅Bluetooth

Você pode ver mais detalhes para a compra ou voltar para o menú principal. Qual prefere? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-S10-128GB-8GB-Octa-2-7GHz-1-9GHz-Android-9-0-PowerShare-6-1-12MP-12MP-16MP-10MP-Azul/p/MP15888516"},
          {text: "Voltar", callback_data: "back-cell-samsung"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('GLXA71', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/h8f/h26/h00/h00/17100837552158.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheou o Samsung Galaxy A71😍 uma excelente escolha 😎. Agora você tem 3 opções:\n 
✅Características: para ver os detalhes do aparelho 
✅Comprar
✅Voltar para o menú principal 👀`,
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "glxa71-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-A71-128GB-Prata-4G-Tela-6-7-Pol-Camera-Quadrupla-64MP-Selfie-32MP-Android-10-0/p/5916330"},
          {text: "Voltar", callback_data: "back-cell-samsung"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('glxa71-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O Samsung Galaxy A71 têm nessas características:\n 
✅Tela: 6.7 polegadas
✅Resolução: UHD 4K (1080px x 2400px)
✅Armazenamento: 128GB (Expandível até 512GB)
✅Memoria RAM: 6GB
✅Procesador: Exynos Octa Core 2.2GHz
✅Android:10
✅Camera:Quadrupla (64MP,12MP,5MP,5MP) Frontal: 32MP
✅Cores:Prata, Preto
✅Bateria: 4500mAh
✅Bluetooth
✅Garantía: 12 meses

Você pode ver mais detalhes para a compra ou voltar para o menú principal. Qual prefere? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-A71-128GB-Prata-4G-Tela-6-7-Pol-Camera-Quadrupla-64MP-Selfie-32MP-Android-10-0/p/5916330"},
          {text: "Voltar", callback_data: "back-cell-samsung"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('back-cell-samsung', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://logo-logos.com/wp-content/uploads/2017/10/Samsung-Mobile.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de aparelhos Samsung, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Galaxy S10", callback_data: "GLXS10"},
          {text: "Galaxy A71", callback_data: "GLXA71"}
        ],
        [{text: "Voltar para celulares", callback_data: "back-cellphones"}]
      ]
    }
  })
})

// CELULARES IPHONES

bot.command('iphones', (ctx) => {
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://m.economictimes.com/thumb/msid-73717611,width-1200,height-900,resizemode-4,imgsize-428397/apple-postpones-launch-of-online-store-in-india.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de iPhones, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "iPhone 11 Pro Max", callback_data: "iphone11"},
          {text: "iPhone XS Max", callback_data: "iphoneXS"}
        ],
        [{text: "Voltar para celulares", callback_data: "back-cellphones"}]
      ]
    }
  })
})

bot.action('iphone11', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/h72/h9d/h00/h00/15110452215838.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheou o iPhone 11 Pro Max😍 o mais top da Apple 😎. Agora você tem 3 opções:\n 
✅Características: para ver os detalhes do aparelho 
✅Comprar
✅Voltar para o menú principal 👀`,
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "iphone11-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/iPhone-11-Pro-Max-64GB-Verde-meia-noite/p/MP19828791"},
          {text: "Voltar", callback_data: "back-iphones"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('iphone11-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O iPhone11 têm nessas características:\n 
✅Tela: 6.5 polegadas
✅Resolução: HDR OLED (2688px x 1242px)
✅Armazenamento: 64GB
✅Memoria RAM: 4GB
✅Procesador: Apple 4 Core
✅Camera:Tripla (12MP,12MP,12MP,12MP) Frontal: 12MP
✅Cores: Verde Meia Noite, Prata, Preto, Dourado
✅Bateria: 3969mAh
✅Bluetooth
✅Apple Pay
✅Garantía: 12 meses

Você pode ver mais detalhes para a compra ou voltar para o menú principal. Qual prefere? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/iPhone-11-Pro-Max-64GB-Verde-meia-noite/p/MP19828791"},
          {text: "Voltar", callback_data: "back-iphones"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('iphoneXS', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://static.carrefour.com.br/medias/sys_master/images/images/hf2/h40/h00/h00/28463228813342.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, `Você escolheou o iPhone XS Max😍 Boa escolha 😎. Agora você tem 3 opções:\n 
✅Características: para ver os detalhes do aparelho 
✅Comprar
✅Voltar para o menú principal 👀`,
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Características", callback_data: "iphoneXS-set"},
          {text: "Comprar", url: "https://www.carrefour.com.br/USADO-iPhone-XS-Max-Cinza-Espacial-64GB/p/MP27254825"},
          {text: "Voltar", callback_data: "back-iphones"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('iphoneXS-set', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, `O iPhone XS Max têm nessas características:\n 
✅Tela: 6.5 polegadas
✅Resolução: HDR OLED (2688px x 1242px)
✅Armazenamento: 64GB/256GB/512GB
✅Memoria RAM: 4GB
✅Procesador: Apple 4 Core
✅Camera:Dupla (12MP,12MP) Frontal: 7MP
✅Cores: Cinza, Prata, Dourado
✅Bateria: 3969mAh
✅Bluetooth
✅Apple Pay
✅Garantía: 12 meses

Você pode ver mais detalhes para a compra ou voltar para o menú principal. Qual prefere? 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Comprar", url: "https://www.carrefour.com.br/USADO-iPhone-XS-Max-Cinza-Espacial-64GB/p/MP27254825"},
          {text: "Voltar", callback_data: "back-iphones"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

bot.action('back-iphones', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://m.economictimes.com/thumb/msid-73717611,width-1200,height-900,resizemode-4,imgsize-428397/apple-postpones-launch-of-online-store-in-india.jpg')
  ctx.telegram.sendMessage(ctx.chat.id, 'Temos disponíveis 2 modelos de iPhones, Qual você prefere? 😊', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "iPhone 11 Pro Max", callback_data: "iphone11"},
          {text: "iPhone XS Max", callback_data: "iphoneXS"}
        ],
        [{text: "Voltar para celulares", callback_data: "back-cellphones"}]
      ]
    }
  })
})

bot.action('back-cellphones', (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendPhoto(ctx.chat.id, 'https://img.ibxk.com.br/2019/12/16/16144954939212.jpg?w=1120&h=420&mode=crop&scale=both')
  ctx.reply(`Já é hora de trocar de aparelho, ne? 😄. Qual celular você quer?

1️⃣ Samsung: /samsungphones 
2️⃣ iPhone: /iphones `, {
    reply_markup: {
      inline_keyboard: [
        [{text: "Menú principal", callback_data: "go-main"}],
      ]
    }
  })
})

bot.action('br-menu', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Seja bem vindo a o bot do Carrefour 🔵⚪️🔴\n 
🇪🇸 Para español, presione el botón 'español' debajo
🇬🇧 For english, press the 'english' button bellow\n 
Caso contrário, digite as opções de eletrodomésticos que vocé quer comprar: \n 
1️⃣: TV 📺
2️⃣: Celular 📱 \n
Em caso de precisar de ajuda, digite /help`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Español", callback_data: "esp-menu"},
          {text: "English", callback_data: "eng-menu"}
        ],
        [{text: "Menú principal", callback_data: "go-main"}]
      ]
    }
  })
})

// Menú en Español

bot.action('esp-menu', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Bienvenido al bot de Carrefour en español 🔵⚪️🔴\n 
🇧🇷 Para portugués, aperte o botão abaixo
🇬🇧 For english, press the button bellow\n 
En caso contrario, Seleccione los electrodomésticos que desea comprar: \n 
1️⃣: TV 📺
2️⃣: Celular 📱 \n
Para pedir ayuda, escriba /help 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "TV", callback_data: "tv-esp"},
          {text: "Celular", callback_data: "cel-esp"}
        ],
        [ {text: "Portugués", callback_data: "br-menu"},
          {text: "English", callback_data: "eng-menu"}
        ]
      ]
    }
  })
})

// Televisores

bot.action('tv-esp', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Nada mejor para quedarse en casa que una TV nueva, ¿No crees? ☺️
Cuál TV prefieres?👀 
1️⃣ Samsung 
2️⃣ LG: `, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Samsung", callback_data: "samsungtv-esp"},
          {text: "LG", callback_data: "lgtv-esp"}
        ],
        [{text: "Menú Principal", callback_data: "go-main-esp"},]
      ]
    }
  })
})

// Funciones de volver en Español

bot.action('go-main-esp', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Bienvenido al bot de Carrefour en español 🔵⚪️🔴\n 
🇧🇷 Para portugués, aperte o botão abaixo
🇬🇧 For english, press the button bellow\n 
En caso contrario, Seleccione los electrodomésticos que desea comprar: \n 
1️⃣: TV 📺
2️⃣: Celular 📱 \n
Para pedir ayuda, escriba /help 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "TV", callback_data: "tv-esp"},
          {text: "Celular", callback_data: "cel-esp"}
        ],
        [ {text: "Portugués", callback_data: "br-menu"},
          {text: "English", callback_data: "eng-menu"}
        ]
      ]
    }
  })
})

// ENGLISH MENU
bot.action('eng-menu', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `😄 Hi! Wellcome to Carrefour in english 🔵⚪️🔴\n 
🇧🇷 Para portugués, aperte o botão abaixo
🇬🇧 Para español, presione el botón 'español' debajo\n 
Otherwise, please select the electronics you wish to buy: \n 
1️⃣: TV 📺
2️⃣: Cellphones 📱 \n
For help, please type /help 👀`, 
  {
    reply_markup: {
      inline_keyboard: [
        [ {text: "Portugués", callback_data: "br-menu"},
          {text: "Español", callback_data: "esp-menu"}
        ]
      ]
    }
  })
})

bot.launch();