# Engineered Safety Platform — Setup & Usage

## For Team Members (Sharing the Standalone Version)

### Quick Start
1. Download `project/Engineered-Safety-Platform-Standalone.html`
2. Open it directly in any modern web browser (Chrome, Firefox, Safari, Edge)
3. Select your role: **Project Team Member**, **Engineered Safety Lead**, or **Project Leadership**
4. Start using the platform!

**No installation, server, or internet required** — it's a completely self-contained HTML file.

---

## For Developers (GitHub Codespace Setup)

### Prerequisites
- Node.js 16+ (already in Codespace)
- Git

### Clone & Setup
```bash
git clone <your-repo-url>
cd <repo-name>
npm install  # if package.json exists
```

### Building the Standalone Version
When you make changes to the source files, rebuild the standalone HTML:

```bash
node build-standalone.js
```

This creates: `project/Engineered-Safety-Platform-Standalone.html`

### Directory Structure
```
project/
├── Engineered Safety Platform.html    (dev version - loads components separately)
├── Engineered-Safety-Platform-Standalone.html (share this with team)
└── esp/
    ├── components.jsx                 (design system, shared components)
    ├── App.jsx                        (role picker, routing)
    ├── Dashboard.jsx                  (home screen)
    ├── SubmitForm.jsx                 (4-step idea submission)
    ├── SearchResults.jsx              (solution library & search)
    └── Dashboards.jsx                 (ESL & Leadership dashboards)
```

### Making Changes
1. Edit any `.jsx` file in the `esp/` folder
2. To test in dev mode: Open `project/Engineered Safety Platform.html` in a browser
3. To rebuild for sharing: Run `node build-standalone.js`
4. Commit and push your changes

### Development Tips
- Design tokens & colors defined in `components.jsx` — update `T = { ... }` for branding changes
- Role data in `App.jsx` — update `ROLES` and `NAV_BY_ROLE` to modify access
- Sample data in component files (QUEUE, SOLUTIONS, etc.) — replace with real data later
- All styling is inline (no external CSS) for portability

### Next Steps: Backend Integration
To connect to real data:
1. Replace sample data arrays (QUEUE, SOLUTIONS, etc.) with API calls
2. Add authentication (role assignment from backend)
3. Wire up form submissions to your backend
4. Store idea/review data in your database

---

## Feature Summary

### 3 Role-Based Workflows
- **Project Team Member**: Submit safety ideas via 4-step form, browse approved solutions
- **Engineered Safety Lead (ESL)**: Review submitted ideas, approve/return with feedback
- **Project Leadership**: Final approvals, implementation tracking, trend reports

### 5 Main Screens
1. **Dashboard** — KPI cards, submission trends, recent activity
2. **Submit Idea** — Guided form with sectors, FSR categories, attachments
3. **Search Library** — Filter/sort approved solutions by sector, phase, status
4. **My Reviews (ESL)** — Review queue with detail modal, feedback workflow
5. **Reports & Approvals (Leadership)** — Pending items, KPIs, implementation tracking

### Design System
- **Brand**: LOR (Laing O'Rourke) — Red (#e30613), Teal (#00a7b5)
- **Font**: Century Gothic (Arial/Helvetica fallback)
- **Layout**: 8px grid, card-based design, subtle shadows
- **Interactive**: Modals, tabs, charts (Chart.js), status badges, sector tags

---

## Troubleshooting

**"Blank page when opening the HTML"**
- Ensure you're opening it in a modern browser (Chrome 90+, Firefox 88+, Safari 14+)
- Check browser console (F12) for errors
- The standalone version loads React/Babel from CDN — needs internet on first load

**"Components not loading in dev mode"**
- Make sure you're opening `project/Engineered Safety Platform.html`, not the standalone version
- The dev version loads JSX files from the `esp/` folder — they must be in the right location

**"Changes aren't showing after rebuild"**
- Hard refresh the browser (Ctrl+Shift+R / Cmd+Shift+R)
- Clear browser cache if needed

---

## Questions?
See the chat transcripts in `chats/` for the full design brief and iteration history.
