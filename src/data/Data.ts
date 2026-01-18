
export type ProjectCardProps = {
    name: string;
    lang: string[];
    desc: string;
    id: string;
    liveLink?: string;
    hideSource?: boolean;
    github?: string;
}

export type ProjectPageProps = {
    name: string;
    lang: string[];
    desc: string;
    data: string;
    liveLink?: string;
    hideSource?: boolean;
    github?: string;
}

export const Project_List = [
    {
        id: "codeflow",
        name: "CodeFlow",
        lang: ["TypeScript", "React", "Vite"],
        liveLink: "https://codeflow-app.vercel.app",
        github: "https://github.com/Shabari-K-S/codeflow",
        desc: "A powerful, real-time code execution visualizer that transforms static code into dynamic, interactive flowcharts. Bridge the gap between reading code and understanding its execution.",
        data: `
# CodeFlow 🌊

> **See your code come to life.**
> A powerful, real-time code execution visualizer that transforms static code into dynamic, interactive flowcharts.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📖 Overview

CodeFlow is a developer tool designed to bridge the gap between reading code and understanding its execution. By parsing standard JavaScript, TypeScript, and Python code, CodeFlow generates accurate, real-time flowcharts and visualizes the step-by-step execution state.

Whether you are debugging complex logic, teaching algorithms, or simply exploring how code works under the hood, CodeFlow provides the visual context you need.

## ✨ Key Features

### 🔍 Deep Execution Visualization
- **Line-by-Line & Expression Tracing**: Watch the instruction pointer move through your code in real-time, with granular step tracking for expressions and template literals.
- **Variable Inspector**: Monitor the state of local and global variables, arrays, and objects as they mutate.
- **Sandboxed Environment**: Safe execution with support for standard JavaScript built-ins like \`Array\`, \`Math\`, \`Object\`, \`Date\`, and more.
- **Call Stack Tracking**: Visualize the stack frames pushing and popping during function calls and recursion.
- **Execution Timeline**: Scrub back and forth through the execution history to pinpoint logic errors.

### 🎨 Dynamic Flowcharts
- **Auto-Generation**: Instantly converts your code into an SVG-based flowchart.
- **Control Flow**: Explicitly visualizes loops (\`for\`, \`while\`, \`do-while\`), conditionals (\`if/else\`, \`switch\`), and exception handling (\`try/catch\`).
- **Smart Layout**: Automatically arranges nodes for maximum readability.

### 🛠️ Powerful Editor Environment
- **Monaco Editor**: A fully-featured code editor (powered by VS Code's core) with syntax highlighting and IntelliSense.
- **Multi-Language Support**:
  - **JavaScript/TypeScript**: Powered by a custom AST parser and interpreter.
  - **Python**: Powered by \`filbert\` for client-side Python execution.
- **Responsive Layout**: Resizable panels for the Editor, Flowchart, and Inspector tools.

## 🏗️ Technology Stack

CodeFlow is built with a modern, performance-focused stack:

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Visualization**: [D3.js](https://d3js.org/) & SVGs
- **Parsers**:
  - \`@babel/parser\` for JS/TS AST generation.
  - \`filbert\` for Python parsing.
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for smooth UI transitions.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Shabari-K-S/codeflow.git
   cd codeflow
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in Browser**
   Visit \`http://localhost:5173\` to start attempting to visualize your code.

## 📂 Project Structure

\`\`\`
src/
├── components/          # React UI Components
│   ├── Editor/          # Monaco Editor integration
│   ├── FlowChart/       # D3.js based Flowchart renderer
│   ├── ExecutionPanel/  # Playback controls (Play, Pause, Step)
│   ├── VariablePanel/   # Variable state inspector
│   └── ...
├── core/                # Core Logic Engine
│   ├── parser/          # AST Parsers (JS, Python)
│   ├── interpreter/     # Custom code interpreter & state machine
│   └── visualizer/      # Node/Edge generation logic
├── stores/              # Global state (Zustand)
├── hooks/               # Custom React hooks
└── utils/               # Shared utilities
\`\`\`

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the parser, add new language support, or enhance the visualization engine:

1. Fork the repository.
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`).
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`).
4. Push to the branch (\`git push origin feature/AmazingFeature\`).
5. Open a Pull Request.

---

**Made with 💙 by Shabari K S**
        `
    },
    {
        id: "terminon",
        name: "Terminon",
        lang: ["Rust", "Tauri", "React", "TypeScript"],
        github: "https://github.com/Shabari-K-S/terminon",
        desc: "A modern, GPU-accelerated terminal emulator built with Rust (Tauri) and React. Designed to be lightweight, incredibly fast, and aesthetically pleasing with a 'Ghostty-style' translucent UI.",
        data: `
# 🚀 Terminon (Tauri + React)

A modern, GPU-accelerated terminal emulator built with **Rust (Tauri)** and **React**.
Designed to be lightweight, incredibly fast, and aesthetically pleasing with a "Ghostty-style" translucent UI.

![Terminal Preview](https://raw.githubusercontent.com/Shabari-K-S/terminon/refs/heads/main/docs/preview.png)

## ✨ Features

* **⚡ Blazing Fast:** Powered by Rust and \`portable-pty\` for the backend, with \`xterm.js\` WebGL rendering on the frontend.
* **🎨 Modern UI:** Sleek, borderless design with a custom title bar and glassmorphism accents.
* **🔀 Multi-Tab & Split Support:** Manage multiple sessions effortlessly.
* **📁 Smart Profile Selector:** Dropdown to easily switch between **Bash**, **WSL**, **PowerShell**, or **CMD** based on your OS.
* **🏠 Welcome Hub:** A premium landing page that appears when all tabs are closed, providing quick actions for new sessions.
* **🏠 Global Theming:** Choose from popular presets (Dracula, Nord, etc.) that apply instantly to the entire application UI.
* **🌐 SSH Profile Manager:** Complete CRUD operations for SSH profiles with live UI updates and persistence.
* **📏 Responsive Tabs:** Chrome-like tab behavior with equal width distribution and graceful shrinking.
* **⚙️ Dynamic Settings:** Manage appearance and profiles through a dedicated, live-updating Settings tab.

---

## 🛠️ Tech Stack

* **Frontend:** React 19, TypeScript, Vanilla CSS.
* **Backend:** Rust, Tauri v2.
* **Terminal Engine:** xterm.js + xterm-addon-fit + xterm-addon-web-links.
* **Shell Interface:** portable-pty (async multi-threaded shell management).

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
1.  **Rust & Cargo:** \`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\`
2.  **Node.js & npm:** v18 or higher.
3.  **System Dependencies:**
    * *Linux:* \`libwebkit2gtk-4.0-dev\`, \`build-essential\`, \`libssl-dev\`, \`libgtk-3-dev\`, \`libayatana-appindicator3-dev\`.
    * *Windows/Mac:* No extra steps usually needed.

### Installation

1.  **Clone the repository:**
    \`\`\`bash
    git clone https://github.com/Shabari-K-S/terminon.git
    cd terminon
    \`\`\`

2.  **Install Frontend Dependencies:**
    \`\`\`bash
    npm install
    \`\`\`

3.  **Run in Development Mode:**
    This starts the React server and the Rust backend simultaneously.
    \`\`\`bash
    npm run tauri dev
    \`\`\`

---

## 📖 Usage Guide

### 1. Profiles & New Tabs
* Click the **\`+\`** button to open a default terminal tab.
* Click the **Chevron (⌄)** next to it to select a specific profile (e.g., WSL, Bash) or connect via SSH.
* The app automatically detects your OS and offers relevant shells.

### 2. Settings & Themes
* Click the **Gear Icon** in the title bar to open the **Settings Tab**.
* Switch between themes (Campbell, Dracula, Catppuccin, etc.) and they will apply instantly across the whole app.
* Manage your SSH profiles with full CRUD support.

### 3. Font Issues?
If you see "boxes" instead of icons in your prompt:
* The app comes bundled with **JetBrains Mono Nerd Font**.
* Ensure the file exists in \`src/assets/fonts/\`.
* If developing on Linux, you may need to install the font system-wide if the CSS bundling fails: \`sudo pacman -S ttf-jetbrains-mono-nerd\`.

---

## 🔧 Configuration

All configurations, including themes and SSH profiles, are now managed directly through the **Settings** UI and persisted automatically via Tauri's store plugin. No manual CSS or terminal code changes are required for styling.

---

## 🤝 Contributing

Pull requests are welcome!

1. Fork the repo.
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`).
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`).
4. Push to the branch (\`git push origin feature/AmazingFeature\`).
5. Open a Pull Request.

---

## ❤️ Credits

Built with **love** and:
* [![Tauri](https://img.shields.io/badge/Tauri-FFC131?style=flat-square&logo=tauri&logoColor=black)](https://tauri.app)
* [![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
* [![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white)](https://www.rust-lang.org/)

Made by **[Shabari K S](https://github.com/Shabari-K-S)** 🚀
        `
    },
    {
        id: "rsql",
        name: "RSQL",
        lang: ["Rust"],
        github: "https://github.com/Shabari-K-S/rsql",
        desc: "A lightweight, disk-backed relational database management system (RDBMS) built in Rust. Implements a persistent B-Tree storage engine, SQL parser, and interactive REPL from the ground up.",
        data: `
# RSQL: A SQLite Clone from Scratch in Rust

**RSQL** is a lightweight, disk-backed relational database management system (RDBMS) built in Rust. This project implements a persistent B-Tree storage engine, SQL parser, and interactive REPL from the ground up.

![Demo](https://img.shields.io/badge/Rust-1.70+-orange?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

## ✨ Features

- 🗄️ **Database Management** - CREATE DATABASE and CONNECT for organized data storage
- 🌳 **B-Tree Storage Engine** - Disk-backed with 4KB pages, automatic node splitting
- 📝 **SQL Parser** - Supports CREATE, INSERT, SELECT, UPDATE, DELETE, DROP
- 🔍 **WHERE Clauses** - Filter with =, !=, <, >, <=, >= and AND/OR
- 🔗 **JOIN Support** - INNER JOIN for combining tables
- 📇 **Secondary Indexes** - CREATE INDEX and CREATE UNIQUE INDEX for fast lookups
- 💳 **Transactions** - BEGIN, COMMIT, ROLLBACK with deferred writes
- 🎨 **Rich REPL** - Colored output, command history, tab completion
- 💾 **Persistence** - Data survives restarts, stored in \`~/.rsql/databases/\`

---

## 🏗️ Architecture

\`\`\`
src/
├── main.rs          # Interactive REPL with rustyline
├── pager.rs         # 4KB page I/O management
├── btree.rs         # B-Tree node operations (leaf + internal)
├── table.rs         # Table & row handling, B-Tree traversal
├── index.rs         # Secondary index management (B-Tree based)
├── tokenizer.rs     # SQL lexer
├── parser.rs        # SQL parser → AST
├── executor.rs      # Query execution engine
└── completer.rs     # Tab completion for SQL keywords
\`\`\`

| Component | Status |
|-----------|--------|
| Database Management | ✅ Done |
| Pager (4KB pages) | ✅ Done |
| B-Tree (leaf + internal nodes) | ✅ Done |
| SQL Parser | ✅ Done |
| Query Executor | ✅ Done |
| WHERE clauses | ✅ Done |
| JOIN support | ✅ Done |
| Transactions | ✅ Done |
| Secondary Indexes | ✅ Done |
| Enhanced REPL | ✅ Done |

---

## 🚀 Quick Start

\`\`\`bash
# Build and run
cargo run

# Or build release
cargo build --release
./target/release/rsql
\`\`\`

---

## 📖 SQL Commands

### Database Management
\`\`\`sql
-- Create a new database
CREATE DATABASE myapp

-- Connect to a database (required before any table operations)
CONNECT myapp
\`\`\`

### Create a Table
\`\`\`sql
CREATE TABLE users (id INTEGER, name TEXT, email TEXT)
\`\`\`

### Insert Data
\`\`\`sql
INSERT INTO users VALUES (1, 'Alice', 'alice@example.com')
INSERT INTO users VALUES (2, 'Bob', 'bob@example.com')
\`\`\`

### Query Data
\`\`\`sql
SELECT * FROM users
SELECT name, email FROM users WHERE id > 1
SELECT * FROM users WHERE name = 'Alice' AND id < 10
\`\`\`

### Update Data
\`\`\`sql
UPDATE users SET email = 'new@email.com' WHERE id = 1
\`\`\`

### Delete Data
\`\`\`sql
DELETE FROM users WHERE id = 2
\`\`\`

### Drop Table
\`\`\`sql
DROP TABLE users
\`\`\`

### Indexes
\`\`\`sql
-- Create a secondary index for faster lookups
CREATE INDEX idx_email ON users(email)

-- Create a unique index (enforces uniqueness)
CREATE UNIQUE INDEX idx_name ON users(name)

-- Drop an index
DROP INDEX idx_email
\`\`\`

### Transactions
\`\`\`sql
BEGIN
INSERT INTO users VALUES (3, 'Charlie', 'charlie@example.com')
-- Changes are not written to disk yet
COMMIT  -- Or ROLLBACK to discard changes
\`\`\`

### Joins
\`\`\`sql
SELECT * FROM users JOIN orders ON users.id = orders.user_id
\`\`\`

---

## 🔧 Meta Commands

| Command | Description |
|---------|-------------|
| \`.help\` | Show help |
| \`.databases\` | List all databases |
| \`.tables\` | List all tables |
| \`.indexes\` | List all indexes |
| \`.schema\` | Show table schemas |
| \`.exit\` | Exit (Ctrl+D also works) |

---

## ⌨️ REPL Features

- **Dynamic Prompt** - Shows connected database: \`rsql[mydb]>\`
- **↑↓** - Navigate command history
- **Tab** - Autocomplete SQL keywords
- **Ctrl+C** - Cancel current input
- **Ctrl+D** - Exit

History is saved to \`~/.rsql_history\`.

---

## 🧪 Technical Details

- **Page Size:** 4096 bytes (SQLite-compatible)
- **B-Tree:** Supports leaf node splitting and internal nodes
- **Binary Search:** O(log n) lookups within pages
- **Persistence:** Data stored in \`~/.rsql/databases/<db_name>/\`
- **Serialization:** Raw pointer operations for zero-copy I/O
- **Indexes:** Each secondary index uses its own B-Tree file (\`.idx\`)
- **Metadata:** Table schemas stored in \`metadata.json\` per database

### Directory Structure
\`\`\`
~/.rsql/
└── databases/
    ├── myapp/
    │   ├── metadata.json     # Table schemas
    │   ├── users.db          # Table data
    │   └── users_idx_email.idx  # Index file
    └── testdb/
        └── ...
\`\`\`

---

## 📈 Roadmap

- [x] B-Tree with node splitting
- [x] SQL Parser (CREATE, INSERT, SELECT, UPDATE, DROP)
- [x] WHERE clause support
- [x] Enhanced REPL with history
- [x] DELETE statement
- [x] JOIN support
- [x] Transactions (BEGIN/COMMIT/ROLLBACK)
- [x] Database management (CREATE DATABASE/CONNECT)
- [x] Secondary indexes (CREATE INDEX/DROP INDEX)
- [x] UNIQUE constraint enforcement
- [ ] Variable-length records
- [ ] Query optimizer
- [ ] Multiple column indexes

---

## 🎯 Example Session

\`\`\`
$ cargo run

╔═══════════════════════════════════════════════════════════╗
║               RSQL - SQLite Clone in Rust                 ║
╠═══════════════════════════════════════════════════════════╣
║  Type SQL commands or .help for available commands        ║
║  Use ↑↓ for history, Tab for completion                   ║
╚═══════════════════════════════════════════════════════════╝

rsql> CREATE DATABASE myapp
✓ Database 'myapp' created.

rsql> CONNECT myapp
✓ Connected to database 'myapp'.

rsql[myapp]> CREATE TABLE users (id INTEGER, name TEXT, email TEXT)
✓ Table 'users' created.

rsql[myapp]> INSERT INTO users VALUES (1, 'Alice', 'alice@example.com')
✓ 1 row(s) inserted.

rsql[myapp]> CREATE UNIQUE INDEX idx_email ON users(email)
✓ Index 'idx_email' created.

rsql[myapp]> SELECT * FROM users
┌────┬───────┬───────────────────┐
│ id │ name  │       email       │
├────┼───────┼───────────────────┤
│ 1  │ Alice │ alice@example.com │
└────┴───────┴───────────────────┘

rsql[myapp]> .exit
Goodbye!
\`\`\`

Build with ❤️ by Shabari.
        `
    },
    {
        id: "trace",
        name: "Trace",
        lang: ["Go"],
        github: "https://github.com/Shabari-K-S/trace",
        desc: "A developer tool that versions your local development environment at the project level. Stop 'environmental drift' by tracking project ports, local config, and dependencies.",
        data: `
# Trace: Project-Level State Versioning (Phase 1 Complete)

**Trace** is a developer tool that versions your **local development environment** at the project level. It ensures that if a project "worked yesterday," you can return to that exact environment state today.

Trace focuses on the **Project Boundary**: it ignores your system-wide clutter and tracks only the ports, variables, and configs that belong to *this* codebase.

***

## 🔍 The Goal: Stop "Environmental Drift"

Code is versioned by Git. But the **environment** (the DB connection, the port, the \`.env\` file, the local dependencies) is usually invisible. Trace makes it visible.

### The "Project-Level" Pillars:

1. **Project Ports:** What ports is *this specific project* trying to use? (e.g., Is your Docker container or local Node server actually listening?)
2. **Local Context:** Changes in \`.env\`, \`.env.local\`, or \`config/\` files within the project root.
3. **Dependency State:** Tracking changes in \`node_modules\`, \`venv\`, or \`go.mod\` without committing them to Git.

***

## ✅ Phase 1: Config Tracking (Complete)

- [x] **Project Root:** Uses current directory (\`.git\`/\`go.mod\` detection coming soon).
- [x] **Config Scanner:** Parses \`.env\` keys (values never stored) + tracks any file content via \`.trace/config.json\`.
- [x] **\`trace init\`:** Creates \`.trace/\` with \`config.json\` listing files to track (\`.env\` by default).
- [x] **\`trace snap\`:** Captures env keys + file content hashes.
- [x] **\`trace diff\`:** Compares snapshots (handles single snapshot as "all new").

## 🛠 Phase 2: Process & Port Detection

* [ ] Filter system processes running inside project directory.
* [ ] Match processes to active ports.

## 🛠 Phase 3: Full Snapshots & Watch Mode

* [ ] \`trace snap "msg"\` with descriptive labels.
* [ ] \`trace status\` for current drift.
* [ ] \`trace watch\` for background monitoring.

***

## 🚀 Getting Started

### Installation

\`\`\`bash
git clone https://github.com/Shabari-K-S/trace.git
cd trace
go build -o trace
\`\`\`

### Usage

\`\`\`bash
# Initialize in your project folder
./trace init

# Customize .trace/config.json to add files like:
# "docker-compose.yml", "config/database.yml"

# Capture current state
./trace snap

# Check for drift
./trace diff
\`\`\`

**Example \`trace diff\` output:**
\`\`\`
🔍 Only one snapshot found. Showing everything as newly added...
 + [ENV ADDED]   DATABASE_URL
 + [FILE ADDED]    .env
\`\`\`

***

### 🔄 Trace Lifecycle

1. **\`./trace init\`**: Creates \`.trace/config.json\` defining tracked files.
2. **\`./trace snap\`**: Records env keys + file content hashes.
3. **\`./trace diff\`**: Compares snapshots, shows added/removed/modified env vars & files.
4. **\`./trace watch\`** (coming soon): Background drift detection.

***

### 🎯 Key Use Cases

- **"Morning After"**: \`trace diff\` shows what changed in \`.env\` or config files.
- **"New Contributor"**: \`trace diff\` vs master snap to see missing setup.
- **"Config Drift"**: Track changes in \`docker-compose.yml\` or local configs.

***

### 🛡 Privacy & Security

- **Zero-Value Storage**: Only env **keys** and file **hashes** stored, never values or full content.
- **Local Only**: Data stays in \`.trace/\` folder.
- **Project Scoped**: Only tracks files listed in your config.

***

**Next**: Port detection and \`watch\` mode. Star/follow for updates! 🚀
        `
    },
    {
        id: "ryt-downloader",
        name: "RYT-Downloader",
        lang: ["Rust", "Tauri", "React", "TypeScript"],
        github: "https://github.com/Shabari-K-S/ryt-downloader",
        desc: "A high-performance, desktop YouTube video downloader and manager built with Tauri v2. Native performance, real-time progress tracking, and a organized library.",
        data: `
# RYT-Downloader (Rust YouTube Downloader)

![Tauri](https://img.shields.io/badge/built%20with-Tauri-24C8DB.svg) ![Rust](https://img.shields.io/badge/backend-Rust-orange.svg)

**RYT-Downloader** is a high-performance, desktop YouTube video downloader and manager built with [Tauri v2](https://v2.tauri.app/). It combines a lightweight React frontend with a powerful Rust backend to provide real-time download tracking, a persistent library, and a modern dark UI.

## 🚀 Features

* **⚡ Native Performance:** Powered by Rust and \`yt-dlp\` for maximum download speeds.
* **📊 Real-time Progress:** Live progress bars, download speed, and ETA tracking.
* **📂 Organized Library:** Automatically saves files to \`~/Downloads/RYT-Downloads\` and tracks history in a local SQLite database.
* **🎨 Modern UI:** Sleek, dark-mode interface with glassmorphism effects and Lucide icons.
* **🛠️ Smart Recovery:** Retry failed downloads with a single click and robust error handling.
* **🔒 Privacy Focused:** Runs entirely locally on your machine. No tracking or external servers.

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite, CSS Modules
* **Backend:** Rust, Tauri v2 (Shell, SQL, Opener plugins)
* **Database:** SQLite
* **Engine:** [yt-dlp](https://github.com/yt-dlp/yt-dlp) (bundled as a sidecar)

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

1.  **Node.js & npm** (v16+)
2.  **Rust & Cargo** ([Install Guide](https://www.rust-lang.org/tools/install))
3.  **FFmpeg** (Required by \`yt-dlp\` for merging video/audio)
    * *Linux (Arch):* \`sudo pacman -S ffmpeg\`
    * *Windows/Mac:* Download and add to system PATH.
4.  **Python** (Required runtime for \`yt-dlp\`)

---

## 📥 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Shabari-K-S/ryt-downloader.git
cd ryt-downloader
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# OR
pnpm install
\`\`\`

---

## 🖥️ Development

To start the app in development mode with hot-reloading:

\`\`\`bash
npm run tauri dev

\`\`\`

* The frontend runs on \`localhost:1420\`.
* Rust compiles incrementally.

---

## 📦 Building for Production

To create an optimized executable installer for your machine:

\`\`\`bash
npm run tauri build

\`\`\`

The output (AppImage, .deb, .msi, or .dmg) will be located in:
\`src-tauri/target/release/bundle/\`
        `
    },
    {
        id: "jsw-ohc-python",
        name: "JSW-OHC",
        lang: ["Python", "Streamlit"],
        hideSource: true,
        // github: "", // Private project
        desc: "The JSW-OHC Team Project is an initiative aimed at slimming and organizing the Occupational Health Center (OHC) management system for JSW (Jindal Steel Works). This project focuses on developing a digital solution to enhance medical record-keeping, employee health tracking, and operational efficiency within the OHC framework.",
        data: `

> This is a **private project** built for **JSW Occupational Health Center** 🚑.  

## 📌 Key Features  
### 🏥 **Dashboard Overview**  
- **📊 Health Analytics** – Displays footfalls, healthy/unhealthy entries, and appointments.  
- **📅 Date Range Filter** – Track health records between specific dates.  
- **📂 Categorization** – Employees marked as *Healthy* or *Unhealthy*.  

### 📖 **Ledger Management**  
- **📜 Medical Records** – Store, manage, and review past medical history.  
- **📑 Document Upload** – Allows medical reports to be stored securely.  

### 🎯 **Events & Camps**  
- **🏕️ Health Camps** – Organize medical check-ups and vaccination drives.  
- **🩺 Periodic Health Checks** – Monitor employee wellness regularly.  

### 🔍 **Advanced Search & Filtering**  
- **🔎 Search by Patient ID** – Quick lookup of employee health details.  
- **📌 Record Filters** – Categorized filtering for better data management.  

### 📅 **Appointment Scheduling**  
- **🗓️ Doctor & Nurse Appointments** – Easy appointment booking.  
- **🔔 Automated Notifications** – Alerts for upcoming medical check-ups.  

### 🚨 **Emergency & Mock Drills**  
- **🦺 Emergency Response** – Rapid logging of emergency health incidents.  
- **🎭 Mock Drill Records** – Track employee participation in drills.  

### 🛡️ **Security & Access Control**  
- **🔐 Role-Based Access** – Different views for **Doctors, Nurses, and HR Teams**.  
- **🛠️ Settings Management** – Configure system preferences and user permissions.  

### 🏢 **Visitor Management**  
- **📝 Visitor Logs** – Maintain records of external visitors for security.  

## ScreenShot

![img](/jsw-login.png)
![img](/jsw-dashboard.png)



        `
    },
    {
        id: "webstrom-python",
        name: "WebStorm",
        lang: ["Python"],
        github: "https://github.com/Shabari-K-S/webstrom-python",
        desc: "WebStorm is a lightweight, flexible web framework built using Python. It serves as a customizable HTTP server with easy-to-use features for building web applications. With its streamlined design, WebStorm enables developers to quickly set up a web server and integrate dynamic content, making it an ideal solution for small to medium-sized projects. The framework is available on GitHub for open-source collaboration, and its modular structure allows developers to extend and enhance its functionalities",
        data: `
- 🌐 Easy-to-use HTTP server
- 📝 Dynamic content integration
- 🚀 Lightweight and flexible
- 🤝 Open-source collaboration
- 📦 Side Project 
        `
    },
    {
        id: "web-scraper-api",
        name: "Web Scrapper API",
        lang: ["Python", "fastapi"],
        github: "https://github.com/Shabari-K-S/web-scraper-api",
        desc: "This API takes a URL as input and returns the web page’s title, a clean summary, the full extracted text, and all image URLs. It fetches the page, parses the HTML, extracts readable content, and generates a concise summary—all in one simple POST request. Perfect for building content readers, research tools, or AI-powered summarizers",
        data: `

## 📖 Overview

The **Web Content Parser API** is a simple and powerful REST API designed to extract meaningful information from any public webpage. It processes a given URL and returns structured content including the **title**, **main article text**, a **brief summary**, and a list of all **image URLs** found on the page.

This API is ideal for developers and data analysts building tools that need to scrape and understand website content — such as news summarizers, SEO tools, or web content previewers.

---

## ✨ Key Features

* 🔗 **URL-Based Parsing**: Accepts any valid public URL.
* 📰 **Article Extraction**: Uses advanced parsing to extract clean, readable article content.
* 🧠 **Automatic Summary**: Generates a short summary (first two sentences) without external NLP libraries.
* 🖼️ **Image Scraper**: Collects all image sources from the page.
* 🏷️ **Title Detection**: Fetches the title of the page for easy reference.
* ⚡ **Fast and Lightweight**: Built using FastAPI with fast response times.

---

### 📌 API Endpoints

#### \`POST /parse-html\`

* **Description**: Takes a URL and returns parsed content.
* **Input**: JSON with a \`url\` key.
* **Output**:

  * \`title\`: Title of the page.
  * \`summary\`: First two sentences of the main content.
  * \`text\`: Full readable article text.
  * \`images\`: List of image URLs.
---

### 🛠️ Use Cases

* News article summarization tools
* Web content previews for blogging platforms
* SEO and content analysis tools
* Image scrapers or web archiving tools
* Academic research or data collection from websites

---

### 🌐 Deployment & Integration

This API is deployed on RapidAPI for easy access. You can integrate it into any frontend or backend application that needs to analyze or preview web content.
        `
    },
    {
        id: "geo-insight-api",
        name: "Geo Insight API",
        lang: ["Python", "fastapi"],
        desc: "Geo Insight API is a powerful tool for developers to access geographical data and insights. It provides endpoints for retrieving information about countries, cities, and regions, including population statistics, area sizes, and more. The API is designed to be fast, reliable, and easy to integrate into various applications.",
        github: "https://github.com/Shabari-K-S/IP-Locator.git",
        data: `
        

**GeoInsight API** is a powerful IP geolocation and network intelligence service. Built using FastAPI and MaxMind's GeoLite2 database, it provides rich details about any public IPv4 or IPv6 address.

### ✨ Key Features:

* Get location data: **City, Region, Country, Continent**
* Network info: **ISP, ASN number**
* Precise geolocation: **Latitude, Longitude, Timezone**
* Smart detection: **VPN / Proxy / Hosting providers**
* Country Flag emoji 🇺🇸
* Graceful fallback when data is unavailable

---

## 🛣️ Endpoint: \`/ip-info\`

**Method:** \`POST\`
**Description:** Returns detailed geolocation and network information for a given IP address.

### 🔹 Request Body:

\`\`\`json
{
  "ip": "8.8.8.8"
}
\`\`\`

| Field | Type   | Required | Description          |
| ----- | ------ | -------- | -------------------- |
| ip    | string | ✅ Yes    | IPv4 or IPv6 address |

---

### 🔸 Response Fields:

* \`continent\`: Continent name
* \`country\`: Country name
* \`country_iso_code\`: ISO 3166-1 alpha-2 code
* \`flag\`: Country flag emoji
* \`is_in_european_union\`: Boolean flag
* \`region\`: State or province name
* \`region_iso_code\`: ISO code of the region
* \`city\`: City name
* \`postal_code\`: ZIP or postal code
* \`latitude\` / \`longitude\`: Coordinates
* \`time_zone\`: Local timezone
* \`accuracy_radius_km\`: Estimated accuracy radius
* \`asn\`: Autonomous System Number
* \`isp\`: ISP or Organization name
* \`vpn\`: Boolean flag for VPN/Proxy detection

If data is unavailable, \`"Unknown"\` or \`0\` is returned instead — making it easy to handle programmatically.

---

## 🧠 Use Cases:

* IP tracking and geolocation
* Fraud prevention and VPN detection
* Network analysis dashboards
* Location-based personalization
* Web analytics and user insights

---

## ⚡ Example:

**Input:**

\`\`\`json
{ "ip": "8.8.8.8" }
\`\`\`

**Output:**

\`\`\`json
{
  "country": "United States",
  "region": "California",
  "city": "Mountain View",
  "isp": "Google LLC",
  "latitude": 37.386,
  "longitude": -122.0838,
  "vpn": false,
  ...
}
\`\`\`

---

## 🚀 Start using GeoInsight API now – your intelligent IP toolkit awaits!
`
    },
    {
        id: "qr-pulse",
        name: "QR Pulse",
        lang: ["Python", "fastapi"],
        desc: "QR Pulse is a high-performance QR code generator and scanner API designed for developers who need fast, reliable, and flexible QR code solutions. With support for generating QR codes in PNG and Base64 formats, and powerful QR scanning from image URLs, base64 strings, or file uploads, QR Pulse is ideal for integrating into event ticketing systems, restaurant menus, digital business cards, payment platforms, and logistics tools. This lightweight REST API ensures seamless QR code creation and decoding in real time, making it perfect for websites, mobile apps, and automation workflows.",
        github: "https://github.com/Shabari-K-S/QR-Pulse",
        data: `

## Overview

QR Pulse is a fast and reliable API to **generate** and **scan** QR codes in multiple formats. Whether you're building a ticketing system, digital menu, or smart business tool — QR Pulse gives you seamless integration and developer-friendly control.

---

## Features

* ✅ Generate QR Codes in **PNG** or **Base64**
* ✅ Simple, stateless, lightning-fast
* ✅ Built for developers, startups, and automation

---

## Endpoints

### QR Code Generator

#### \`POST /generate/image\`

Returns PNG QR code from input text.

#### \`POST /generate/base64\`

Returns base64-encoded PNG QR code from input text.

---

### 🔹 Generate QR (Base64)

\`\`\`json
POST /generate/base64
Form:
{
  "data": "https://example.com"
}
\`\`\`

---

## Use Cases

* Event ticketing & check-ins
* Contactless restaurant menus
* Payment and business cards
* Logistics & inventory tracking
* Internal tools and automation
        `
    },
    {
        id: "secure-password-api",
        name: "Secure Password Generator API",
        lang: ["Python", "FastAPI"],
        desc: "Generate cryptographically secure passwords, API keys, and random tokens with full customization. Built for developers needing high-entropy values for login systems, authentication flows, or secure storage.",
        github: "https://github.com/Shabari-K-S/Password-Generator",
        data: `
## 🔐 Overview

This API lets you generate **cryptographically secure random strings** ideal for passwords, tokens, and keys. Customize length, characters, and output formats.

---

## ✨ Features

* 🔒 Secure by default — uses Python's \`secrets\` module
* 🧩 Character selection — include/exclude symbols, digits, letters
* 🧪 Random tokens, passwords, or API keys
* 🎛️ Adjustable length and character pool
* ⚙️ Stateless and FastAPI-powered

---

## 🛠️ Use Cases

* Password generation for user onboarding
* API token issuance for apps
* Invite codes, license keys
* Secure OTP & session keys

---

## 🔗 Endpoint

**POST** \`/generate\`

Input:
\`\`\`json
{
"length": 16,
"include_uppercase": true,
"include_digits": true,
"include_symbols": false
}
\`\`\`

Output:
\`\`\`json
{
"password": "asD8keLqNMbPzvFy"
}
\`\`\`
        `
    },
    {
        id: "random-fake-data-api",
        name: "Random Fake Data Generator",
        lang: ["Python", "FastAPI"],
        desc: "Generate realistic fake data for testing and prototyping. Quickly produce emails, names, UUIDs, IPs, numbers, dates, and more — ideal for automation, dummy data, and mock APIs.",
        github: "https://github.com/Shabari-K-S/Random-Data-Generator-API",
        data: `
## Overview

This API helps developers **generate random fake data** for UI prototyping, backend seeding, and testing.

---

## ✨ Features

* 📧 Generate fake names, emails, IPs, UUIDs
* 🧪 Supports custom types like dates, booleans, hex, numbers
* 🔁 Generate bulk lists
* ⚡ High performance with FastAPI

---

## 🧰 Endpoints

**POST** \`/generate\`

Input:
\`\`\`json
{
"type": "email",
"count": 5
}
\`\`\`

Output:
\`\`\`json
["abc@mail.com", "user001@mail.net", ...]
\`\`\`

---

## Use Cases

* Backend testing
* Database mocking
* UI/UX demos
* Automation workflows
        `
    },
    {
        id: "universal-hash-api",
        name: "Universal Hash Generator API",
        lang: ["Python", "FastAPI"],
        desc: "A flexible API that generates cryptographic hash values from input text using multiple algorithms like MD5, SHA, BLAKE2, and SHAKE. Supports fixed and extendable output.",
        github: "https://github.com/Shabari-K-S/Hash-Generator-API",
        data: `
## 🔐 Overview

Generate secure hashes from text using a wide range of algorithms.

---

## ⚙️ Supported Algorithms

* MD5, SHA1, SHA256, SHA512
* SHA3 (224, 256, 384, 512)
* BLAKE2b, BLAKE2s
* SHAKE-128, SHAKE-256

---

## 🧪 Example

Input:
\`\`\`json
{
"text": "hello world",
"algorithm": "sha256"
}
\`\`\`

Output:
\`\`\`json
{
"hash": "a948904f2f0f479b8f8197694b30184b..."
}
\`\`\`

---

## Use Cases

* Password hashing
* File integrity checks
* Digital signatures
* Data comparison and validation
        `
    },
    {
        id: "password-strength-api",
        name: "Password Strength Checker API",
        lang: ["Python", "FastAPI"],
        desc: "Evaluate how secure a password is using real-time heuristics and optional breach checks. Provides instant feedback with recommendations to strengthen weak passwords.",
        github: "https://github.com/Shabari-K-S/Password-Strength-Checker-API",
        data: `
## 🔍 Overview

This API evaluates the **strength and quality** of a password using character diversity and length heuristics.

---

## 🔐 Key Metrics

* Entropy score
* Common pattern checks
* Optional data breach warning
* Suggestions to improve

---

## 📥 Example

Input:
\`\`\`json
{ "password": "Shabari@123" }
\`\`\`

Output:
\`\`\`json
{
"score": 4,
"feedback": "Strong password",
"suggestions": []
}
\`\`\`

---

## 🧠 Use Cases

* Signup form validation
* Password manager tools
* Security checks in admin panels
        `

    }
]