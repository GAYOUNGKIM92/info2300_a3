# Emotion Diary

A React-based web application that allows users to record and manage their daily emotions and thoughts.

## Features

- 📝 Create, update, and delete diary entries
- 😊 Record emotions with 5 different states (Very Good to Terrible)
- 📅 Manage entries by date
- 🗂 Sort by latest/oldest
- 📱 Responsive design
- 💾 Data persistence using LocalStorage

## Tech Stack

- React 18
- Vite
- React Router DOM
- LocalStorage
- CSS

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/emotion-diary.git
```

2. Navigate to the project directory:

```bash
cd emotion-diary
```

3. Install dependencies:

```bash
npm install
```

### Running the Application

To run the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Routing Structure

- `/` : Home page (Diary list)
- `/new` : Create new diary entry
- `/diary/:id` : View diary entry details
- `/edit/:id` : Edit diary entry

## Data Storage

All diary entries are stored in the browser's LocalStorage, ensuring data persistence across page refreshes and browser sessions.

## Key Features

### Emotion Recording

- Users can select from 5 different emotion states
- Each emotion has its own unique visual representation

### Date Management

- Entries are organized by month
- Easy navigation between different months
- Automatic date sorting capabilities

### Entry Management

- Create new diary entries
- View detailed entry information
- Edit existing entries
- Delete unwanted entries

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Why MIT License?
- It allows anyone to use, modify, and distribute the code freely.
- It is widely used and recognized in open-source projects.
- It imposes minimal restrictions, making it ideal for personal and commercial projects.
