# Cinema Archive (Top Gun Prompter)

Cinema Archive is a specialized tool designed to generate high-quality Midjourney prompts for recreating iconic movie scenes. It allows users to combine specific movie scenes with various artistic styles and configuration parameters to create unique AI-generated imagery.

## Features

- **Movie Selection**: Browse and select from a curated list of movies (e.g., Top Gun).
- **Scene Library**: Access a detailed collection of scenes for each movie, complete with descriptions.
- **Style System**: Apply different artistic styles to your prompts:
  - **Standard Styles**: Global styles available for all movies.
  - **Unique Styles**: Custom styles tailored specifically to the selected movie.
- **Advanced Configuration**:
  - **Midjourney Version**: Support for v5, v6, v6.1, and v7.
  - **Aspect Ratio**: Choose from a wide range of aspect ratios (e.g., 16:9, 9:16, 1:1, 2:3).
  - **Stylize**: Fine-tune the artistic influence with a customizable stylize parameter (0-1000).
- **Instant Generation**: Real-time prompt construction as you make selections.
- **One-Click Copy**: Easily copy the generated prompt to your clipboard for use in Midjourney.

## How It Works

1.  **Select a Movie**: Choose a film from the horizontal scroll bar at the top.
2.  **Select a Scene**: Pick a specific scene from the grid. Each scene includes a title and ID.
3.  **Choose a Style**: Select an artistic style from the left sidebar. You can choose from "Unique Styles" (specific to the movie) or "Standard Styles".
4.  **Configure Settings**: Adjust the Midjourney version, aspect ratio, and stylize value in the left sidebar.
5.  **Generate & Copy**: The prompt is automatically generated in the "Output" terminal on the right. Click "COPY PROMPT" to save it to your clipboard.

## Installation

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- npm (comes with Node.js)

### Steps

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    The terminal will display a local URL (usually `http://localhost:5173`). Open this link in your browser.

## Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Technologies Used

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
