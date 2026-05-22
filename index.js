
const fs = require("fs");

const {
    default: makeWASocket,
    useMultiFileAuthState
} = require("@whiskeysockets/baileys");

const qrcode = require("qrcode-terminal");

// START BOT
async function startBot() {

    // AUTH
    const { state, saveCreds } = await useMultiFileAuthState("auth");

    // SOCKET
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false
    });

    // SAVE LOGIN
    sock.ev.on("creds.update", saveCreds);

    // CONNECTION
    sock.ev.on("connection.update", (update) => {

        const { connection, qr } = update;

        // SHOW QR
        if (qr) {

            console.log("Scan QR Code:\n");

            qrcode.generate(qr, {
                small: true
            });
        }

        // CONNECTED
        if (connection === "open") {

            console.log("✅ Dmark Advise Bot Connected");
        }

        // DISCONNECTED
        if (connection === "close") {

            console.log("❌ Bot Disconnected");
            startBot();
        }
    });

    // MESSAGE LISTENER
    sock.ev.on("messages.upsert", async ({ messages }) => {

        const msg = messages[0];

        // IGNORE EMPTY
        if (!msg.message) return;

        // IGNORE OWN MESSAGE
        if (msg.key.fromMe) return;

        const sender = msg.key.remoteJid;

        let text = "";

        // NORMAL MESSAGE
        if (msg.message.conversation) {
            text = msg.message.conversation;
        }

        // REPLY MESSAGE
        if (msg.message.extendedTextMessage) {
            text = msg.message.extendedTextMessage.text;
        }

        text = text.toLowerCase();

        console.log("Message:", text);

        // ============================
        // SAVE LEADS
        // ============================

        const lead = {
            number: sender,
            message: text,
            time: new Date()
        };

        let leads = [];

        if (fs.existsSync("leads.json")) {

            leads = JSON.parse(fs.readFileSync("leads.json"));
        }

        leads.push(lead);

        fs.writeFileSync(
            "leads.json",
            JSON.stringify(leads, null, 2)
        );

        // ============================
        // WELCOME MESSAGE
        // ============================

        if (text === "hi" || text === "hello") {

            await sock.sendMessage(sender, {
                text:
`Welcome to Dmark Advise 🚀

Choose a Service:

1️⃣ Digital Marketing
2️⃣ E-commerce Website Development
3️⃣ App Development
4️⃣ Branding
5️⃣ Lead-Generation Service
6️⃣ SEO
7️⃣ Social Media Marketing
8️⃣ Web Development

Reply with the number.`
            });
        }

        // ============================
        // 1 DIGITAL MARKETING
        // ============================

        if (text === "1") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/digital.png"
                },
                caption:
`🚀 Digital Marketing

✔ Meta Ads
✔ Google Ads
✔ Online Campaigns
✔ Conversion Optimization

Please share your business details.`
            });
        }

        // ============================
        // 2 ECOMMERCE
        // ============================

        if (text === "2") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/ecommerce.png"
                },
                caption:
`🛒 E-commerce Website Development

✔ Online Store Setup
✔ Payment Gateway
✔ Shopping Cart
✔ Product Management

Please share your business niche.`
            });
        }

        // ============================
        // 3 APP DEVELOPMENT
        // ============================

        if (text === "3") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/app.png"
                },
                caption:
`📱 App Development

✔ Android Apps
✔ iOS Apps
✔ Admin Dashboard
✔ API Integration

Please share your app idea.`
            });
        }

        // ============================
        // 4 BRANDING
        // ============================

        if (text === "4") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/branding.png"
                },
                caption:
`🎨 Branding

✔ Logo Design
✔ Brand Identity
✔ Creative Designs
✔ Marketing Creatives

Please share your business niche.`
            });
        }

        // ============================
        // 5 LEAD GENERATION
        // ============================

        if (text === "5") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/lead.png"
                },
                caption:
`📈 Lead-Generation Service

✔ Meta Lead Campaigns
✔ Google Lead Campaigns
✔ Audience Targeting
✔ Landing Pages

Please share your target audience.`
            });
        }

        // ============================
        // 6 SEO
        // ============================

        if (text === "6") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/seo.png"
                },
                caption:
`🔍 SEO Services

✔ Google Ranking
✔ Keyword Research
✔ Technical SEO
✔ Organic Traffic Growth

Please share your website URL.`
            });
        }

        // ============================
        // 7 SOCIAL MEDIA
        // ============================

        if (text === "7") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/social.png"
                },
                caption:
`📲 Social Media Marketing

✔ Instagram Marketing
✔ Facebook Marketing
✔ LinkedIn Growth
✔ Audience Engagement

Please share your social media pages.`
            });
        }

        // ============================
        // 8 WEB DEVELOPMENT
        // ============================

        if (text === "8") {

            await sock.sendMessage(sender, {
                image: {
                    url: "./images/web.png"
                },
                caption:
`🌐 Web Development

✔ Business Websites
✔ Landing Pages
✔ Portfolio Websites
✔ Responsive Design

Please share your business type.`
            });
        }

    });

}

// START BOT
startBot();
