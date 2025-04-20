# Firebase Studio

This is a NextJS starter project configured to be deployed on Firebase. It uses Firebase Authentication and Firestore as a backend.

## Features

*   Next.js App Router
*   TypeScript
*   Firebase Authentication (Email/Password)
*   Firestore Integration
*   Basic UI Components

## Getting Started

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Create a Firebase project in the Firebase Console.
4.  Enable Email/Password authentication in the Authentication settings.
5.  Create a Firestore database.
6.  Copy the Firebase configuration from your project settings and replace the placeholder values in `src/app/firebase.ts`.
7.  Run the development server: `npm run dev`

## Deployment

To deploy to Firebase Hosting, you can use the Firebase CLI:

1.  Install the Firebase CLI: `npm install -g firebase-tools`
2.  Login to Firebase: `firebase login`
3.  Initialize your project: `firebase init`
    *   Select "Hosting" and "Firestore" when prompted.
    *   Choose your Firebase project.
    *   Configure your public directory as "public" (or the build output directory of your Next.js app).
4.  Build your Next.js app: `npm run build`
5.  Deploy to Firebase: `firebase deploy`
