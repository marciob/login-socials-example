# Next.js Social Login

Next.js 14 application with Twitter/X and Google authentication using NextAuth.js.

## Features

- Twitter/X OAuth authentication
- Google OAuth authentication
- Session management
- Responsive design with Tailwind CSS
- TypeScript support

## Requirements

- Node.js 18+
- Twitter Developer Account
- Google Cloud Console Account

## Setup

1. Install dependencies:

```bash
npm install
```

2. Generate NEXTAUTH_SECRET:

```bash
openssl rand -base64 32
```

3. Create `.env.local`:

```env
NEXTAUTH_URL=http://localhost:3003
NEXTAUTH_SECRET=your-generated-secret

# Twitter Keys (OAuth 1.0a)
TWITTER_CLIENT_ID=your-twitter-api-key
TWITTER_CLIENT_SECRET=your-twitter-api-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Getting API Keys

### 1. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google OAuth:
   - Go to "APIs & Services" > "OAuth consent screen"
   - Choose "External" user type
   - Fill in app name and required fields
   - Add test users if needed
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized JavaScript origins:
     ```
     http://localhost:3003
     ```
   - Add authorized redirect URI:
     ```
     http://localhost:3003/api/auth/callback/google
     ```
   - Click "Create"
5. Copy credentials:
   - Use "Client ID" as GOOGLE_CLIENT_ID
   - Use "Client Secret" as GOOGLE_CLIENT_SECRET

### 2. Twitter OAuth Setup

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new app or select existing
3. Setup OAuth 1.0a:
   - Go to app settings
   - Enable "OAuth 1.0a"
   - Set app permissions to "Read and write"
   - Add callback URL:
     ```
     http://localhost:3003/api/auth/callback/twitter
     ```
   - Enable "Request email from users"
4. Get API Keys:
   - Go to "Keys and tokens" tab
   - Under "Consumer Keys" section (OAuth 1.0a):
     - Use "API Key" as TWITTER_CLIENT_ID
     - Use "API Key Secret" as TWITTER_CLIENT_SECRET

Note: Do not use OAuth 2.0 keys for Twitter. This project uses OAuth 1.0a for better session handling.

## Running the App

Start development server:

```bash
npm run dev
```

Visit `http://localhost:3003`

## Project Structure

```
├── app/
│   ├── api/auth/
│   ├── components/
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
└── types/
```

## Stack

- Next.js 14
- NextAuth.js
- Tailwind CSS
- TypeScript

## License

MIT
