# Deploying the Ai Chatbot

For this custom deployment I used my AiAppDeploy chatbot [Next.js](https://nextjs.org/) project that was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Here is the AWS link to my app: 

https://main.d2plnc0kegitny.amplifyapp.com

Here are my custom domains:

<li>https://podcastaichatbot.website/</li>
<li>https://www.podcastaichatbot.website/</li>

## Getting Started

Open the frontend folder of your AiChatBot. In my case it was the /rag-app-frontend folder.

Next, run the build server:

```pwsh
npm run dev
```

If all runs smoothly run the prodcution server next:

```pwsh
npm run build
```
then
```pwsh
npm start
````

Open the link provided to see the result.

## Deploy on Vercel

I didn't use this method as it is slightly more expensive though easier to navigate. You can use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on AWS Amplify

AWS Amplify provides a straightforward way to deploy and host your Next.js application. You can connect your GitHub repository to Amplify, and it will handle the build and deployment process.

If you don’t already have a domain, you can register one through AWS Route 53. In the Route 53 console, create a hosted zone for your domain. Click on “Hosted zones” and then “Create hosted zone”. Enter your domain name and create the hosted zone. Add DNS records to route traffic to your application. 

## Create a custom Domain

You can do this on AWS Amplify but you may be able to do it cheaper on nampecheap.com. 

Use Copilot to find the steps for adding a custom namecheap domain to AWS Amplify
