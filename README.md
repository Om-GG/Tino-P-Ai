
# Tino P-Ai - A Chatbot powered by LangChain

Tino P-Ai is a JavaScript/TypeScript-based project that uses the LangChain framework to create a simple chatbot with memory functionalities. It keeps the logic driving the chat in the backend (server folder) to avoid credentials being leaked to the user and simply passes the user message to the server through a client API and the other way around for the response from OpenAI. The utilization of LangChain makes it so it is modular and simple to change one LLM for another.

## Setup

### 0. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  ```sh
  git clone https://github.com/Om-GG/Tino-P-Ai.git
  cd Tino-P-Ai
  npm i
  npm run dev
  ```

  </details>

## Requirements

### 1. Set up the environment

- [ ] Change the name for the .env.template file to just .env .
  <details style="padding-left: 2em">
    <summary>Tip</summary>
    You can do this by simply running:

    ```sh  
    cp .env.template .env
    ```
      
  </details>

- [ ] Replace your_organization_id and your_openai_api_key with your actual values.

### 2. Start and use the app

- [ ] Run the server.
  <details style="padding-left: 2em">
    <summary>Tip</summary>
    
    In the terminal:
  ```sh
  npm run dev
  ```

  </details>

- [ ] Open your web browser and navigate to localhost:3333 to access the chat.

## Usage

Once you have the chatbot set up, you can use it to chat with. The chatbot will use the LangChain framework and the OpenAI API to generate responses based on user input and contextual memory.
