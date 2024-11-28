# 📏 Duration Calculator

**Duration Calculator** is a lightweight web app designed to help you sum up durations in various formats, such as `1h`, `20m`, `2h 15m`. Ideal for managing time logs, scheduling tasks, or tracking durations, this app allows you to:

- Paste durations directly (e.g., from Excel).
- Upload a CSV file with durations.
- View the total time in a clear, user-friendly format.

---

## ✨ Features

- **Multiple Input Methods**:
    - Paste durations directly (one per line).
    - Upload CSV files containing durations.

- **Flexible Parsing**:
    - Supports formats like `1h`, `20m`, `2h 15m`, and more.
    - Handles inconsistent spacing and capitalization.

- **Accurate Calculation**:
    - Automatically sums up hours and minutes.
    - Converts excess minutes into hours for a clean total.

- **User-Friendly Interface**:
    - Minimal design with intuitive controls.
    - Instant results with a single click.

---

## 🚀 How It Works

1. **Input Durations**:
    - Paste a list of durations into the input box or upload a CSV file.
2. **Calculate**:
    - Click the "Calculate Total" button to process the durations.
3. **View Results**:
    - See the total time displayed in the format `X hours Y minutes`.

---

## 🚀 Demo

To use the app, open the `index.html` file directly in your browser. No installation is required.

---

## 📝 Future Improvements

- Add support for other time formats (e.g., `hh:mm:ss`).
- Enhance CSV parsing for multi-column data.
- Add export functionality to save results.

---

## 💡 Use Cases

- Summing up project time logs.
- Scheduling meetings or tasks.
- Time management for productivity tracking.

Feel free to contribute and make this tool even better! 😊

---

## 🔧 Technologies Used

- **HTML**: Provides the basic structure of the web app.
- **Gulp**: Automates tasks like watching files, compiling SCSS, and minifying JS.
- **SCSS**: Used for styling and theming.
- **JavaScript**: Implements the core functionality, including duration parsing and summation.

---

## 📂 Installation

### Step-by-Step Guide:

1. Clone the repository:
   ```bash
   git clone https://github.com/tenbonks/duration-calculator.git
   
2. Install dependencies: Since this project uses Node.js for asset compilation and watching, run:
   `npm install` from root

### Gulp Commands
Available commands: Run the following commands based on your needs:
- ` npm run gulp` : Start watching SCSS, JS, and external CSS files.
- ` npm run build` : Compile SCSS, minify JS, and process external CSS files for production.
- ` npm run watch` : Continuously watch files and process them as changes occur.
- ` npm run styles` : Compile and minify SCSS files.
- ` npm run scripts` : Minify JavaScript files.

## File Paths and Configuration

The project has the following file paths:

- **SCSS Files**:
    - **Source**: `./assets/scss/styles.scss`
    - **Watch Directory**: `./assets/scss/**/*.scss`
    - **Output Directory**: `./dist`

- **JavaScript Files**:
    - **Source**: `./assets/js/*.js`
    - **Watch Directory**: `./assets/js/**/*.js`
    - **Output Directory**: `./dist`

- **External CSS**:
    - **Source**: `./assets/external/css/*.css`
    - **Output Directory**: `./dist/external/css`
