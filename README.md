# Google Generative AI Anime Suggestions

Welcome to the Google Generative AI Anime Suggestions project! This application utilizes the Google Generative AI library (GEMINI) to provide recommendations for anime titles similar to the user's input. The code is written in Node.js, Express framework and ejs for building a simple web interface.

## Setup

### Clone the repository to your local machine:

```
git clone https://github.com/hichem-18/Anime-Recommender-Using-GeminiAI.git
cd your-repo
```

### Install dependencies:

npm install

### Create a .env file in the root directory and add your Google API key:

```
GOOGLE_API_KEY=your_api_key_here
```

Get your API key by following the[Gemini API](https://ai.google.dev/tutorials/node_quickstart)

## Usage

```
nodemon index.js
```

### The application will be accessible at http://localhost:3000.

### Open your web browser and go to http://localhost:3000.

### Enter the name of an anime in the provided input field.

### Click the "Submit" button to receive suggestions for three anime titles similar to the input.

## Troubleshooting

If you encounter any issues or errors, please check the following:

- Ensure that your API key is correctly configured in the .env file.
- Make sure the necessary dependencies are installed by running npm install.
- Check the console for any error messages.

If problems persist, feel free to open an issue on the project's GitHub repository. We appreciate your feedback and contributions!
