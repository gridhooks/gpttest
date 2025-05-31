# Two App React Dev Environment

This repo contains a small example of running two React apps in a single page.
App 1 lets you send prompts to OpenAI and App 2 displays the result. The server
uses your OpenAI API key from the environment.

## Prerequisites

- Node.js (v18 or newer)
- npm

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your OpenAI credentials:

   ```bash
   cp .env.example .env
   # edit .env to add OPENAI_API_KEY
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser. You will see App 1 on the left
   and App 2 on the right.

The client side uses React via CDN and requires no build step. The server
handles `/api/review` and forwards requests to OpenAI.
