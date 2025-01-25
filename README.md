# QuestSearch

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <https://github.com/tanvi0613/Quest_Search>
cd questsearch
```

### 2. Backend Setup
1. Navigate to backend directory
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the backend directory
```
MONGODB_URI=ymongodb+srv://tanvigupta0613:aBLpHy0sF9dwbeog@speakx.digob.mongodb.net/?retryWrites=true&w=majority&appName=SpeakX
PORT=5000
```

4. Start the backend server
```bash
npm start
```

### 3. Frontend Setup
1. In a new terminal, navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the React development server
```bash
npm start
```

### 4. Database Configuration
- Ensure MongoDB is running
- Import provided dataset into a collection named `data`

## Features
- Text-to-Speech for questions
- Interactive question solving
- Pagination
- Multiple question types support
- Responsive design

## Technologies Used
- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios

## Troubleshooting
- Verify MongoDB connection string
- Check that all dependencies are installed
- Ensure backend and frontend are running on different ports
