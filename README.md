# Oracle SQL*Plus Monochrome Terminal Replica

An authentic, native terminal emulator and lab execution environment replicating **Oracle SQL*Plus: Release 19.0.0.0.0 (Oracle Database 19c Enterprise Edition Release 19.0.0.0.0)**.

Designed with a high-fidelity pure black & monochrome theme (`#000000`, `#141414`, `#cccccc`, `#ffffff`), interactive SQL command processor, stealth blackout mode, and preloaded lab programs 1 through 10.

---

## ⌨️ Keyboard Shortcuts & Features

| Shortcut / Action | Description |
| :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>0</kbd> | **Run & Show Program 10** (Views) directly in the terminal |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd> .. <kbd>9</kbd> | Run & Show preloaded Programs 1 to 9 in the terminal |
| Click <kbd>P1</kbd> .. <kbd>P10</kbd> | Click any button in the title bar to run and show that program |
| Type `10` or `1` .. `9` | Type program number at `SQL> ` prompt to run it instantly |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> (or <kbd>1</kbd>..<kbd>9</kbd>) | Opens the overlay modal showing **AIM** and **ALGORITHM** for Program 10 (or 1..9) |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd> | **Stealth Mode** — Instantly blacks out the screen with cursor hidden (toggle back anytime) |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> or <kbd>Esc</kbd> | Closes the open Aim & Algorithm dialog modal |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Clears the terminal screen |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Navigates command history |
| <kbd>Tab</kbd> | Autocompletes SQL keywords (`SELECT`, `CREATE TABLE`, `COMMIT`, `ALTER TABLE`, etc.) |
| <kbd>Enter</kbd> | Executes SQL command (supports multi-line statements with `  2  ` until `;` or `/`) |

---

## 🖥️ Built-in Terminal Commands

In addition to standard queries, you can type:
- `HELP` or `?`: Displays the quick cheat sheet in the terminal.
- `CLEAR SCREEN` or `CL SCR`: Clears terminal output history.
- `SHOW TABLES` or `SELECT * FROM TAB`: Displays mock database tables.
- `DESC <table_name>`: Displays column schema and datatypes.
- `EXIT` or `QUIT`: Prints Oracle disconnection banner.

---

## 🧪 Preloaded Programs (1 to 10)

- **Program 01**: Data Manipulation and Data Definition Language (`CREATE`, `INSERT`, `SELECT`, `ALTER`, `UPDATE`)
- **Program 02**: Transaction Control Language (`COMMIT`, `SAVEPOINT`, `ROLLBACK`)
- **Program 03**: Logical Operations & Operators (`AND`, `OR`, `LIKE`, `NOT LIKE`, `BETWEEN`, `ALL`, `ANY`)
- **Program 04**: Queries, Sub Queries, Nested Queries & Group By (`MAX`, `MIN`, `COUNT`, `SUM`, `AVG`)
- **Program 05**: Set Operations (`UNION`, `UNION ALL`, `INTERSECT`, `MINUS`)
- **Program 06**: Built-in Functions (`MIN`, `MAX`, `AVG`, `COUNT`, `ROUND`, `LENGTH`, `LOWER`)
- **Program 07**: Rollback, Commit, and Savepoints
- **Program 08**: Joins (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`)
- **Program 09**: Triggers (`BEFORE` / `AFTER` Insert, Update, Delete with Audit Log)
- **Program 10**: Views (`CREATE VIEW`, `CREATE OR REPLACE VIEW`, `DROP VIEW`)

---

## 🚀 Running Locally

Open [index.html](file:///c:/Users/Sundaji/Desktop/project/v/index.html) directly in any web browser, or start the local server:

```bash
node server.js
```

Then visit:
[http://localhost:3000](http://localhost:3000)
