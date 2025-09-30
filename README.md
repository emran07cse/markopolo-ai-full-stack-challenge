# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project


A Perplexity-style chat interface built with Create React App + Tailwind.
Simulates connecting data sources and generating campaign JSON streams.


## 🚀 Quick Start.

A React component that simulates a **Perplexity style chat interface** for campaign recommendations. 
Users can connect to various **data sources** and **channels**, then run queries to generate a streaming JSON payload 
representing the **right time, right channel, right message, for the right audience**.


---

# 📂 Create a chat interface similar to Perplexity

Create a chat interface similar to Perplexity. The interface should allow a user to connect to various data sources. For this challenge, you can choose any 3 data sources from the list below and any 4 channels.

Data Sources: GTM, Facebook Pixel, Google Ads Tag, Facebook Page, Website, Shopify, CRMs, Twitter Page, Review Sites, Ad Managers (Meta, Google, Tiktok, etc.).
Channels: Email, SMS, Push, WhatsApp, Voice, Messenger, Ads. 

---

## 🚀 Features
- Select from 10 data sources (e.g., Website, Shopify, Facebook Pixel).
- Choose from 7 channels (e.g., Email, SMS, WhatsApp, Ads).
- Pre-loaded demo setup (Website, Shopify, Facebook Pixel + Email, SMS, WhatsApp, Ads).
- Simulates **streaming JSON output** for campaign execution plans.
- Download generated campaign JSON as a file.
- Maintains **history of queries** with timestamps.
---

## 📦 Requirements
- [Node.js LTS](https://nodejs.org/en/download/) 
- npm  

---

## 🛠️ Tech Stack
- React (Vite or CRA compatible)
- Tailwind CSS for styling

## 📦 Installation


1. Clone this repository:
```bash
git clone https://github.com/emran07cse/markopolo-ai-full-stack-challenge.git
cd perplexity-chat-interface
```


2. Install dependencies:
```bash
npm install
```


3. Install Tailwind CSS (if not already configured):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

---

meldcx/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
├── public/
│   ├── index.html      ✅ required
│   └── favicon.ico     (optional, can leave empty or use CRA’s default)
│
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
# 🗂 Project Structure
```
markopolo-ai-full-stack-challenge
│
├── public/
│   ├── index.html      ✅ required
│   └── favicon.ico     (optional, can leave empty or use CRA’s default)
│
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

```## 🎯 Example Query
- "Recommend a 3-step campaign for cart abandoners"


The system will simulate and stream a JSON execution plan including:
- Target audience segments
- Recommended channels
- Message personalization
- Send times


---


## 📥 Download JSON
Use the **Download** button to export the generated payload as a `.json` file for later execution.


---


## 📜 License
MIT License — feel free to use and modify.

--- 
##Sample picture
<img width="657" height="878" alt="image" src="https://github.com/user-attachments/assets/117c321a-792e-46dc-a588-a55fa2e9f9d8" />
