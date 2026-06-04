# 🚀 DMark WhatsApp Bot

## 📌 Overview

DMark WhatsApp Bot is an automated WhatsApp Business assistant developed using Node.js and Baileys. The bot helps businesses automate customer interactions by providing instant responses about services, collecting leads, and managing inquiries through WhatsApp.

The system acts as a virtual customer support and lead-generation assistant for DMark Advise, reducing manual effort and improving customer engagement.

---

## ✨ Features

* 🤖 Automated WhatsApp responses
* 📱 QR-based WhatsApp authentication
* 📊 Lead collection and storage
* 🖼 Service-specific image responses
* 💬 Interactive menu-driven conversation
* 🔄 Automatic reconnection on disconnect
* 💾 JSON-based lead management
* 🚀 Easy deployment and setup

---

## 🛠 Tech Stack

### Backend

* Node.js
* JavaScript

### WhatsApp Integration

* Baileys (@whiskeysockets/baileys)

### QR Authentication

* qrcode-terminal

### Data Storage

* JSON File System (fs module)

---

## 📂 Project Structure

```text
dmark-whatsapp-bot/
│
├── auth/
│   └── WhatsApp session files
│
├── images/
│   ├── digital.png
│   ├── ecommerce.png
│   ├── app.png
│   ├── branding.png
│   ├── lead.png
│   ├── seo.png
│   ├── social.png
│   └── web.png
│
├── leads.json
├── index.js
├── package.json
└── README.md
```

---

## 🎯 Services Supported

### 1️⃣ Digital Marketing

* Meta Ads
* Google Ads
* Online Campaigns
* Conversion Optimization

### 2️⃣ E-commerce Development

* Online Store Setup
* Payment Gateway Integration
* Shopping Cart
* Product Management

### 3️⃣ App Development

* Android Apps
* iOS Apps
* API Integration
* Admin Dashboard

### 4️⃣ Branding

* Logo Design
* Brand Identity
* Marketing Creatives

### 5️⃣ Lead Generation

* Meta Lead Campaigns
* Google Lead Campaigns
* Audience Targeting
* Landing Pages

### 6️⃣ SEO Services

* Keyword Research
* Technical SEO
* Google Ranking
* Organic Traffic Growth

### 7️⃣ Social Media Marketing

* Instagram Marketing
* Facebook Marketing
* LinkedIn Growth

### 8️⃣ Web Development

* Business Websites
* Landing Pages
* Portfolio Websites
* Responsive Design

---

## ⚙️ Prerequisites

Install the following before running the project:

### Node.js

Recommended Version:

* Node.js 18.x LTS or later

Verify installation:

```bash
node -v
npm -v
```

---

## 📥 Installation

### Clone Repository

```bash
git clone https://github.com/vemulaasritha7-sys/dmark-whatsapp-bot.git
```

### Navigate to Project

```bash
cd dmark-whatsapp-bot
```

### Install Dependencies

```bash
npm install
```

Or manually install:

```bash
npm install @whiskeysockets/baileys
npm install qrcode-terminal
```

---

## ▶️ Running the Bot

Start the application:

```bash
node index.js
```

A QR code will appear in the terminal.

### Authentication Steps

1. Open WhatsApp on your phone.
2. Go to Linked Devices.
3. Click Link a Device.
4. Scan the QR Code displayed in terminal.
5. Bot will connect automatically.

Expected Output:

```text
Scan QR Code:

██████████████

✅ Dmark Advise Bot Connected
```

---

## 💾 Lead Management

Every incoming message is stored automatically in:

```text
leads.json
```

Example:

```json
[
  {
    "number": "919876543210@s.whatsapp.net",
    "message": "hi",
    "time": "2025-06-03T10:00:00.000Z"
  }
]
```

---

## 🔄 Workflow

Customer Message
↓
WhatsApp Bot
↓
Intent Detection
↓
Service Selection
↓
Service Information
↓
Lead Saved
↓
Customer Follow-Up

---

## 📈 Business Benefits

* 24/7 customer support
* Faster lead generation
* Reduced manual workload
* Improved customer engagement
* Instant service information delivery
* Organized lead tracking

---

## 🔮 Future Enhancements

* MongoDB Database Integration
* Admin Dashboard
* Broadcast Messaging
* Customer Analytics
* AI-Powered Responses
* Gemini/OpenAI Integration
* Voice Message Support
* Multi-Agent Support
* CRM Integration
* Appointment Booking System

---

## 🔒 Security Improvements Recommended

* Move leads storage to MongoDB
* Add environment variables
* Secure session credentials
* Implement rate limiting
* Add admin authentication
* Encrypt sensitive customer data

---

## 👩‍💻 Author

Developed by DMark Advise

GitHub:
https://github.com/vemulaasritha7-sys

---

## 📜 License

This project is intended for educational and business automation purposes.
