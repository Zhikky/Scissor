# Scissors

Scissors is a link shortening application that allows users to create shortened URLs and generate QR codes for easy sharing. It leverages the Bitly API for URL shortening and React QRCode library for QR code generation. This README provides an overview of the project's features and instructions for setting it up and running locally.

## Features

- User registration and authentication using Firebase Authentication
- Create shortened URLs using the Bitly API
- Generate QR codes for shortened URLs using React QRCode library
- Account profile management (change name, email, and password)
- Responsive design for seamless usage on different devices
- Error handling and form validation

## Technologies Used

- React: JavaScript library for building user interfaces
- Firebase: Backend-as-a-Service (BaaS) platform for authentication and database management
- Bitly API: URL shortening API for creating shortened URLs
- React Router: Library for routing and navigation in React applications
- React QRCode: Component for generating QR codes in React
- Formik: Library for form management and validation in React
- Yup: JavaScript schema validation library
- Sass: CSS preprocessor for styling

## Getting Started

To run the Scissors application locally, follow these steps:

1. Clone the repository: git clone https://github.com/your-username/scissors.git

2. Install dependencies:
    cd scissors
    npm install

3. Configure Firebase:

   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Firebase Authentication and Firestore in the Firebase project
   - Create a web app in the Firebase project and obtain the Firebase configuration object
   - Replace the placeholder values in the `firebaseConfig` object located in `src/firebase/firebaseConfig.js` with your Firebase project's configuration

4. Obtain Bitly API credentials:

   - Create a Bitly account at [https://dev.bitly.com/](https://dev.bitly.com/)
   - Generate a Bitly API token in your Bitly account settings
   - Replace the placeholder value for `BITLY_API_TOKEN` in `src/utils/bitly.js` with your Bitly API token

5. Start the development server: npm start


6. Open your browser and navigate to `http://localhost:3000` to access the Scissors application

## Deployment

To deploy the Scissors application to a hosting platform, follow these steps:

1. Build the production-ready version of the application: npm run build



2. Deploy the contents of the `build` folder to your preferred hosting platform (e.g., Firebase Hosting, Netlify, Vercel, etc.)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).








