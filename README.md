# **AI Sales Call Automation - AI Language Agent**

**AI Language Agent** is a cutting-edge AI-powered sales call automation platform designed to enhance business outreach and client engagement. This project demonstrates how to automate the entire sales call process, leveraging AI to generate personalized pitches and conduct effective client interactions.

---

## **Features**

- **AI-Driven Sales Calls**:
  - Automates calls to clients using AI agents like **LangChain** and **LLaMA**.
  - Handles conversation with clients, including introductions, pitches, and follow-ups.

- **Personalized Pitch Generation**:
  - Gathers company and client information online.
  - Creates tailored pitches using brainstorming agents.

- **Modular Design**:
  - Utilizes a multi-agent architecture for web scraping, brainstorming, formatting, and sales calls.

- **Integration-Friendly**:
  - Works with modern APIs for call handling and voice synthesis.

- **User-Friendly Interface**:
  - Simple input for client and company details (e.g., name, website, phone number).
  - Easy-to-use front end for managing call data.

---

## **Tech Stack**

- **Frontend**: Next.js, TailwindCSS
- **Backend**: Node.js, Prisma ORM, FastAPI
- **AI Frameworks**: LangChain, LLaMA
- **APIs**:
  - **Voice API**: For call synthesis and handling.
  - **Search API**: For online data retrieval.
- **Database**: PostgreSQL

---

## **Setup and Installation**

### **Prerequisites**

1. **Node.js**: Version 16+
2. **Python**: Version 3.9+
3. **PostgreSQL Database**
4. **API Keys**: Obtain credentials for APIs (e.g., OpenAI, Voice API, Web Scraping API).

### **Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ai-lang-tutor.git
   cd amelia-ai-agent
   ```

2. Install dependencies:

   ```bash
   npm install
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Create a `.env` file:

     ```env
     DATABASE_URL=your_postgres_url
     OPENAI_API_KEY=your_openai_key
     VOICE_API_KEY=your_voice_api_key
     ```

4. Initialize the database:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Run the backend and frontend:
   - Backend:

     ```bash
     uvicorn main:app --reload
     ```

   - Frontend:

     ```bash
     npm run dev
     ```

6. Access the app at `http://localhost:3000`.

---

## **How It Works**

1. **Input Details**:
   - Enter client and company details (e.g., name, website, and phone number).

2. **Web Search Agent**:
   - Collects company information online using web scraping tools.

3. **Brainstorming Agent**:
   - Generates unique sales pitch ideas by combining company offerings and gathered information.

4. **Formatting Agent**:
   - Converts ideas into a cohesive sales pitch.

5. **Call Execution**:
   - AI agent uses a Voice API to make calls, introduce the pitch, and handle conversations.

---

## **Future Enhancements**

- Add more robust error handling and fallback mechanisms.
- Support video calls and live interaction.
- Integrate with CRM systems like Salesforce for seamless client management.

---

## **Contributing**

We welcome contributions! Please fork the repository, make your changes, and submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
