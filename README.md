# 🦾 Chuck Norris Jokes App

## 📖 Description
This web application displays Chuck Norris jokes using the public API chucknorris.io. Users can search for jokes, mark them as favorites, and rate them with a star system.

## User Data Storage

This application does not require user login. All favorite jokes and ratings are stored locally in the browser using `localStorage`. This ensures a quick and simple user experience, but data will only persist on the same device and browser.


## ✨ Features
- **Home Page**: Displays random jokes and allows searching by keyword
- **Favorites System**: Save your favorite jokes for later
- **Ratings**: Rate your favorite jokes from 1 to 5 stars
- **Sorting**: Sort favorite jokes by rating
- **Dark/Light Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## ⚙️ Technologies Used
- **Next.js 15**: React framework for server-side rendering and routing
- **React 19**: Library for building user interfaces
- **TypeScript**: Strongly-typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework for rapid design
- **Lucide React**: Icon set based on Lucide SVG icons
- **next-themes**: Theme switching support for Next.js
- **Sonner**: Toast notification system

## 📁 Project Structure
```bash
/app                  # Application pages (Next.js App Router)
  /favorites          # Favorites page
  /page.tsx           # Main page
  /layout.tsx         # Global layout
/components           # Reusable components
  /ui                 # UI components (shadcn)
  /JokeCard.tsx       # Joke display card
  /SidebarNavigation  # Sidebar navigation
/lib                  # Utilities and logic
  /api.ts             # Functions for interacting with the API
  /localStorage.ts    # Local storage utilities
/types                # TypeScript type definitions
/public               # Static assets
```

## 🚀 Installation
1. Clone the repository:
```bash
git clone <repo-url>
cd .
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 in your browser
> Note: The project uses Turbopack for faster development

## 🧑‍💻 Usage
- On the homepage, you can view a random joke or search using keywords
- Click the heart icon to mark a joke as favorite
- Visit the Favorites page to view your saved jokes
- Rate your favorites with 1–5 stars
- Use the sort button to order favorites by rating
- Toggle light/dark mode using the button at the bottom right

## 📡 API
This project uses the public Chuck Norris API via /lib/api.ts:
- fetchRandomJoke(category?): Get a random joke, optionally by category
- searchJokes(query, category?): Search jokes by text (and optionally filter by category)

## 💾 Data Persistence
- Favorite jokes and ratings are stored in localStorage
- No backend is needed — everything is saved in the browser

## 💻 System Requirements
- Node.js 18.0.0 or higher
- pnpm, npm, or yarn as a package manager
- Docker (optional, for containerized environments)

## 🔧 Implementation Notes
- **App Router**: Uses Next.js 15 App Router for modern routing and layout management
- **Client/Server Components**: Clear separation to optimize initial load
- **Atomic Design**: UI components follow atomic design principles
- **Local Storage Only**: No backend required; runs entirely in the browser
- **Mobile-First Design**: Tailwind CSS ensures responsiveness
- **Accessibility**: Built with Radix UI principles for accessible components

## 📜 Available Scripts
- **pnpm dev**: Start development server with Turbopack
- **pnpm build**: Build the app for production
- **pnpm start**: Run the production server
- **pnpm lint**: Run linter checks

## 🐳 Run with Docker
You can run the app in a containerized environment using Docker and Docker Compose.

### Prerequisites
- Docker installed
- Docker Compose installed

### Steps
1. Clone the repo (if not done already):
```bash
git clone <repo-url>
cd greencode
```

2. Run with Docker Compose:
```bash
docker-compose up
```

3. Run in detached mode:
```bash
docker-compose up -d
```

4. Stop the application:
```bash
docker-compose down
```

5. Open http://localhost:3000 to view the app

### 🐋 Docker Configuration
The project includes:
- **Dockerfile**: Defines the base image, dependencies, and runtime
- **docker-compose.yml**: Configures the service, ports, volumes, and environment
- **.dockerignore**: Excludes unnecessary files from the Docker image
