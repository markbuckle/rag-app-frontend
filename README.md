# Deploying the Ai Chatbot

For this custom deployment I used my AiAppDeploy chatbot [Next.js](https://nextjs.org/) project that was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Here is the AWS link to my app: 

https://main.d15um7o1z4plf1.amplifyapp.com/

Here are my custom domains:

https://podcastaichatbot.website/
https://www.podcastaichatbot.website/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on AWS Amplify

AWS Amplify provides a straightforward way to deploy and host your Next.js application. You can connect your GitHub repository to Amplify, and it will handle the build and deployment process.

If you don’t already have a domain, you can register one through AWS Route 53. In the Route 53 console, create a hosted zone for your domain. Click on “Hosted zones” and then “Create hosted zone”. Enter your domain name and create the hosted zone. Add DNS records to route traffic to your application. 

## Create a custom Domain

You can do this on AWS Amplify but you may be able to do it cheaper on nampecheap.com. 

Use Copilot to find the steps for adding a custom namecheap domain to AWS Amplify
