# 🚀 Ultimate GitHub Pages Playbook

Welcome! This repository serves two purposes:
1.  **A Live Demo**: A minimal website hosted on GitHub Pages.
2.  **A Complete Playbook**: A step-by-step guide to mastering Git, GitHub, and Deployment.

---

## 📚 Table of Contents
- [Prerequisites](#-prerequisites)
- [Step 1: Setting Up Git & GitHub](#-step-1-setting-up-git--github)
- [Step 2: Creating Your First Repo](#-step-2-creating-your-first-repo)
- [Step 3: Branching & Merging Strategy](#-step-3-branching--merging-strategy)
- [Step 4: Handling Conflicts](#-step-4-handling-conflicts)
- [Step 5: Deploying to GitHub Pages](#-step-5-deploying-to-github-pages)
- [Step 6: Supported Technologies](#-step-6-supported-technologies)
- [Project Usage](#-project-usage)

---

## 🛠 Prerequisites

### 1. Install Git
- **Download**: [git-scm.com/downloads](https://git-scm.com/downloads)
- **Verify Installation**:
  Open your terminal (Command Prompt, PowerShell, or Terminal) and run:
  ```bash
  git --version
  ```
  *You should see something like `git version 2.x.x`.*

### 2. Create a GitHub Account
- **Sign Up**: [github.com](https://github.com)
- **Verify**: Ensure you can log in to your dashboard.

---

## ⚙ Step 1: Setting Up Git & GitHub

### Configure Git Identity
Tell Git who you are (this appears in your commit history):
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Check Configuration
To see all your settings:
```bash
git config --list
```

### Connect Terminal to GitHub (SSH/HTTPS)
*Recommendation*: Use **GitHub CLI** or **HTTPS** for simplicity initially. When you push for the first time, a popup will ask you to login.

---

## 📁 Step 2: Creating Your First Repo

### 1. Initialize Locally
Navigate to your project folder and turn it into a Git repository:
```bash
mkdir my-site
cd my-site
git init
```

### 2. The Git Lifecycle
- **Check Status**: See what changed.
  ```bash
  git status
  ```
- **Stage Changes**: Prepare files for saving.
  ```bash
  git add .
  ```
  *(`.` adds all files. Use `git add filename` for specific files)*
- **Commit**: Save the snapshot.
  ```bash
  git commit -m "Initial commit: Added website files"
  ```

### 3. Create Repo on GitHub
1.  Go to **GitHub.com** → Click **+** → **New repository**.
2.  **Name**: `my-github-page`.
3.  **Privacy**: **Public** (Free GitHub Pages) or **Private** (Pro).
4.  **Initialize**: Leave "Add a README" **UNCHECKED** (we are importing an existing one).

### 4. Link & Push
Connect your local folder to the "Cloud" (GitHub):
```bash
# Rename branch to main (modern standard)
git branch -M main

# Add the remote URL (Replace USERNAME)
git remote add origin https://github.com/USERNAME/my-github-page.git

# Push your code
git push -u origin main
```

---

## 🌿 Step 3: Branching & Merging Strategy

Never work directly on `main` for big features. Use branches!

### Branching Commands
| Action | Command |
| :--- | :--- |
| **Create New Branch** | `git branch feature-login` |
| **Switch to Branch** | `git checkout feature-login` OR `git switch feature-login` |
| **Create & Switch** | `git checkout -b feature-login` |
| **List Branches** | `git branch` |
| **Delete Branch** | `git branch -d feature-login` |

### The Pull Request (PR) Flow
1.  **Work on Branch**: Make changes in `feature-login`.
2.  **Push Branch**:
    ```bash
    git push -u origin feature-login
    ```
3.  **Open PR on GitHub**: Go to your repo page, you'll see a "Compare & pull request" button.
4.  **Merge**: Review changes on GitHub and click "Merge Pull Request".

---

## 💥 Step 4: Handling Conflicts

Conflicts happen when two people change the same line of code.

1.  **Identify Conflict**: Git will tell you `CONFLICT (content): Merge conflict in index.html`.
2.  **Open File**: You will see markers:
    ```html
    <<<<<<< HEAD
    <h1>Old Title</h1>
    =======
    <h1>New Title from teammate</h1>
    >>>>>>> feature-branch
    ```
3.  **Resolve**: Delete the markers (`<<<<`, `====`, `>>>>`) and keep the code you want.
4.  **Commit**:
    ```bash
    git add index.html
    git commit -m "Resolved merge conflict"
    ```

---

## 🌐 Step 5: Deploying to GitHub Pages

### The Easy Way (Source Branch)
1.  Go to your GitHub Repository **Settings**.
2.  Click **Pages** on the left sidebar.
3.  Under **Source**, select **Deploy from a branch**.
4.  Select **Branch**: `main`, **Folder**: `/ (root)`.
5.  Click **Save**.
6.  Wait 1-2 minutes. Your URL will appear at the top!
    *   `https://USERNAME.github.io/my-github-page/`

### Important Rules
- **Entry Point**: You MUST have an `index.html` file in the root directory (or `/docs` if you chose that setting).
- **404 Errors**: If your site isn't loading, check if `index.html` is spelled correctly (case-sensitive on Linux servers).

---

---

## 🎮 Interactive Quiz

This project includes a built-in Git & GitHub Quiz to test your knowledge.
- **How it works**: Uses a simple JavaScript array to load questions.
- **Feedback**: Provides instant explainers for why an answer is correct or wrong.
- **Try it**: Open `index.html` in your browser!

---

## 🏗 Step 6: Supported Technologies

### ✅ Natively Supported (Static)
These works "out of the box":
- **HTML / CSS / JavaScript** (Vanilla)
- **Jekyll** (Ruby-based static site generator, GitHub's default)
- **Markdown** (Converted to HTML by Jekyll)

### 🚀 Needs Build Step (Dynamic/SPA)
Frameworks like **React, Vue, Next.js, Angular** cannot be deployed directly as source code. They must be **BUILT** into static HTML/JS/CSS first.

#### How to Deploy React/Next.js?
1.  **Build**: Run `npm run build`. This creates a `dist` or `build` folder.
2.  **Deploy**: You only commit and push the contents of that `dist` folder to a `gh-pages` branch.
    *   *Tip*: Use the `gh-pages` npm package to automate this.

#### What CANNOT be hosted?
- **Server-side Logic**: Node.js backends, Python (Django/Flask), PHP, Databases (SQL/Mongo).
- *Solution*: Use GitHub Pages for frontend + Heroku/Vercel/Render for backend.

---

## 📂 Project Structure

```text
my-github-page/
│
├── index.html      # Main entry point (REQUIRED for Pages)
├── style.css       # Your 5-line CSS file
├── script.js       # JavaScript interaction
└── README.md       # This playbook
```

## 👣 How to Use This Repo
1.  **Clone it**:
    ```bash
    git clone https://github.com/USERNAME/my-github-page.git
    ```
2.  **Enter Directory**:
    ```bash
    cd my-github-page
    ```
3.  **Open in Editor**:
    ```bash
    code .
    ```
    *(Assuming VS Code is installed)*

---
*Made with ❤️ for learning Git & Web Deployment.*
