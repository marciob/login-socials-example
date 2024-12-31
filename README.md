# Next.js Social Login

Next.js 14 application with Twitter/X authentication using NextAuth.js.

## Features

- Twitter/X OAuth authentication
- Session management
- Responsive design with Tailwind CSS
- TypeScript support

## Requirements

- Node.js 18+
- Twitter Developer Account
- Twitter API Keys (OAuth 1.0a)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local`:

```env
NEXTAUTH_URL=http://localhost:3003
NEXTAUTH_SECRET=your-secret-key

TWITTER_CLIENT_ID=your-twitter-api-key
TWITTER_CLIENT_SECRET=your-twitter-api-secret
```

## Getting the Keys

1. NEXTAUTH_SECRET:

```bash
openssl rand -base64 32
```

2. Twitter API Keys:

- Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
- Create a new app or select existing
- Under "Keys and tokens" tab you'll find two types of keys:

### OAuth 1.0a (Used in this project)

- "API Key and Secret" section (as Consumer Keys):
  - Use "API Key" as TWITTER_CLIENT_ID
  - Use "API Key Secret" as TWITTER_CLIENT_SECRET

### OAuth 2.0 (Alternative method)

- "OAuth 2.0 Client ID and Client Secret" section:
  - Client ID starts with letters followed by numbers
  - Longer Client Secret
  - Not used in this project as OAuth 1.0a provides better session handling

3. Configure Twitter App:

- Set callback URL: `http://localhost:3003/api/auth/callback/twitter`
- Enable "Sign in with Twitter"
- Set up OAuth 1.0a in App Settings
- Under "App permissions" select "Read and write"

4. Start development server:

```bash
npm run dev
```

## Structure

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
