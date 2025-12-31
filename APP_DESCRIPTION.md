# Cinema & Game Archive (MadMenPromptCreator)

**Cinema & Game Archive** (originally named MadMenPromptCreator) is a massive, encyclopedia-scale **Prompt Engineering Hub** for generating Midjourney scenes based on Movies, TV Series, and Video Games.

### 🎯 Key Product Essence

The application organizes thousands of "Key Scenes" from pop culture into a structured database. It allows users (digital artists and prompt engineers) to combine these narrative moments with curated **Visual Styles** (e.g., "1970s Kodachrome", "Unreal Engine 5", "Noir") to generate highly specific AI art prompts.

### 🛠️ Technical Stack

* **Frontend**: React (Vite) with an information-dense, dashboard-style UI.
* **Data Architecture**: Massive static dataset (`/data`) containing scenes, seasons, episodes, and style definitions for hundreds of media properties.
* **State Management**: Complex filtering and sorting logic (by Genre, Decade, Director) and "Randomizer" functionality with locking mechanisms.
* **Styling**: Tailwind CSS with theming support (including special themes like "Christmas" or "War" based on the selected media).

### ✨ Core Features

* **Unified Media Library**: Support for **Movies**, **TV Series** (with Season/Episode granular selection), and **Video Games**.
* **Prompt builder**: Interactive workspace to combine a `[Scene Description]` with a `[Visual Style]` + parameters (Aspect Ratio, Stylize, Niji version).
* **Smart Randomizer 🎲**: A "Slot Machine" mode for creativity, allowing users to lock specific variables (e.g., "Keep the Movie, roll for a random Scene and Style").
* **Tech Specs Toggle**: Quick switches for Midjourney parameters like `--v 6.0`, `--style raw`, `--tile`, `--ar`.
* **Studio Hub Integration**: Includes a dashboard of other available "SRE Studio" apps and their repositories.
* **Top 100 Analytics**: Visual indicators for movies that topped the box office in their respective years.

### 📂 Directory Insights

* `/src/data`: The heart of the app. Contains `movies.ts`, `series.ts`, `games.ts`, and the massive `scenes` database.
* `/src/App.tsx`: The main "Pro Dashboard" interface.
* `/src/AppV3.tsx`: A legacy or alternative interface version.
* `Research/`: Contains background research and lists used to populate the database.
