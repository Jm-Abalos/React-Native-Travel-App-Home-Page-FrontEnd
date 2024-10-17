# Travel App

A simple travel app built using Expo and React Native.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Installation Steps

### 1. Install Node.js

First, make sure you have Node.js installed. If not, you can download and install it from the [official website](https://nodejs.org/).

### 2. Create an Expo App

Run the following command to create a new Expo app using a blank template:

npx create-expo-app@latest (name-of-your-folder) --template blank@latest <br>
(Follow all the installions and instructions when shown on the terminal)

### 3. Install Required Dependencies
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install react-native-vector-icons
npm install react-native-safe-area-context

### 4. Start Expo App
npx expo start

### 5. Replace App.js with Your Code
Replace the existing App.js file in your project with the code provided in this repository. Make sure to include any assets such as images in the assets folder of your project.
If you have any images or resources, they should be placed inside the assets folder and referenced correctly in your code.

## Important Notes
If you encounter a "connection timeout" issue when running on a physical device, ensure your phone and computer are on the same network, or use a tunnel URL provided by Expo.

