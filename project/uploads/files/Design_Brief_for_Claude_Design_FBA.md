# Engineered Safety Platform
## Design Brief for Claude Design (AI-Powered Wireframing)
### Project Context: Fremantle Bridges Alliance

---

## PROJECT OVERVIEW

| Field | Value |
|-------|-------|
| **Project Name** | Fremantle Bridges Alliance |
| **Project Abbreviation** | FBA |
| **Project Location** | Perth |
| **Project Sector** | Bridges |
| **Contract Type** | Alliance |
| **Project Value** | $350,000,000 AUD |
| **Project Start Date** | January 2024 |
| **Project End Date** | December 2026 |
| **Platform Deployment** | Q2 2024 (Estimated) |

**Project Context**: This is a major bridge construction alliance project in Perth, Australia. The Engineered Safety Platform will support continuous safety improvement capture, validation, and knowledge sharing across the FBA delivery team and broader Laing O'Rourke organization.

---

## DESIGN BRIEF INSTRUCTIONS FOR CLAUDE DESIGN

### Purpose
You are tasked with creating **wireframes, mockups, and interactive prototypes** for the Engineered Safety Platform. Use the specifications in this brief to generate high-fidelity UI designs suitable for development handoff.

### Deliverables Expected
1. **Homepage / Dashboard** (personalized per user role)
2. **Submission Form** (multi-step, mobile-optimized)
3. **Search Results Page** (faceted filtering, responsive grid)
4. **Solution Detail View** (modal or separate page)
5. **ESL Dashboard** (review queue, metrics, alerts)
6. **Leadership Dashboard** (KPIs, charts, summary views)
7. **Implementation Tracking** (action list, status updates)
8. **Mobile Responsive Views** (key screens at 320px, 768px, 1024px breakpoints)

---

## BRAND GUIDELINES (CRITICAL)

### Color Palette - Laing O'Rourke

**Primary Actions (Use Sparingly)**
- LOR Red: `#e30613` (Primary buttons, critical alerts)
- LOR Yellow: `#ffcd00` (Status highlights, badges)

**Secondary Interactive**
- LOR Teal: `#00a7b5` (Secondary buttons, links, focus states)
- LOR Teal Dark: `#009cde` (Button hover, active states)

**Status Colors**
- Success (Green): `#64a70b` (Approved, positive actions)
- Warning (Orange): `#fe5000` (At-risk, warnings, in-progress)

**Neutral (Cool Grey Palette)**
- Almost Black (Text): `#2d2d2d` — Primary text, headlines
- Very Dark Grey: `#4d4d4d` — Body text
- Dark Grey: `#999999` — Secondary text, labels
- Medium Grey: `#cccccc` — Input borders
- Light Grey 2: `#e6e6e6` — Dividers, disabled states
- Light Grey (Background): `#f2f2f2` — Page background, cards
- White: `#ffffff` — Modal backgrounds

### Typography
- **Primary Font**: Century Gothic (all user-facing text)
- **Fallback**: Arial, Helvetica, sans-serif
- **Heading Sizes**: H1=32px (desktop)/24px (mobile), H2=24px/20px, H3=18px/16px, Body=14px
- **Font Weights**: Bold (700), Semibold (600), Regular (400)

### Logo & Branding
- Place LOR logo in **top-left corner** of header (32–48px height on desktop, 24–32px on mobile)
- Maintain **clear space** of 3× the logo height around all sides
- Footer includes: **"THE POWER OF EXPERIENCE"** tagline + contact address block
- Never modify logo colors, proportions, or elements

---

## PRODUCT CONTEXT

### Product Summary
The Engineered Safety Platform is an enterprise system designed to:
- **Capture** safety ideas from workforce (mobile-first, <5 minutes per submission)
- **Validate** ideas through multi-level approval workflows
- **Track** implementation with action assignments and progress monitoring
- **Distribute** approved solutions across projects and sectors via searchable knowledge library
- **Measure** effectiveness through ratings, feedback, and case studies

### Core Value Proposition
1. **Democratize safety innovation** — All workforce levels can contribute
2. **Reduce safety risk** — Structured capture, validation, and tracking
3. **Enable knowledge sharing** — Searchable, filterable solution library
4. **Streamline project integration** — Embed into existing HSE processes

### Primary User Problem
Safety innovations exist in silos with no systematic way to capture, validate, scale, or track effectiveness.

---

## TARGET USERS & PERSONAS

### User Segment 1: Workforce / Field Teams
- **Goals**: Quickly log safety ideas without friction
- **Context**: Mobile/kiosk-based, time-poor, non-technical
- **Key Behavior**: Rapid form entry, minimal scrolling, large touch targets (44px min)
- **Max Form Time**: <5 minutes
- **Design Implication**: Single-column mobile layout, 3–4 screens per form, large buttons

### User Segment 2: Project Teams (Submitters/Reviewers)
- **Goals**: Submit ideas, review others, provide feedback
- **Context**: Desktop + mobile, moderate technical literacy
- **Key Behavior**: Submissions, commenting, linking FSR events
- **Design Implication**: Rich editor, threaded comments, workflow visibility

### User Segment 3: Engineering Safety Leads (ESLs)
- **Goals**: Review weekly/monthly summaries, track implementation, escalate aged items
- **Context**: Desktop-primary, regular system users, management responsibility
- **Key Behavior**: Dashboard views, filtering, bulk actions, alert management
- **Design Implication**: Custom dashboard with KPI cards, pending reviews widget, aged item alerts

### User Segment 4: Project Leadership
- **Goals**: Review monthly innovations, make implementation decisions
- **Context**: Desktop-only, infrequent users, executive summary preference
- **Key Behavior**: High-level dashboards, summary exports, filtered views
- **Design Implication**: 4 KPI cards (no scrolling required), trend charts, drill-down capability

### User Segment 5: Design Teams
- **Goals**: Access approved solutions at design kickoff
- **Context**: Desktop-primary, design-phase focused
- **Key Behavior**: Search, filter by sector/phase, detailed exploration, export
- **Design Implication**: Faceted search, filter preservation, solution comparison

### User Segment 6: Admins / System Maintainers
- **Goals**: Monitor system health, manage users, configure workflows
- **Context**: Desktop-only, technical background, infrequent but high-impact actions
- **Key Behavior**: Admin dashboards, configuration tools, bulk operations
- **Design Implication**: Admin sidebar, metric cards, data tables with expandable rows

---

## KEY USER JOURNEYS TO WIREFRAME

### Journey 1: Submit a Safety Idea (Workforce) — PRIORITY 1
**Flow**: Home → Form Step 1 (Context) → Step 2 (Description) → Step 3 (Links) → Step 4 (Review) → Confirmation

**Key Screens to Design**:
1. **Homepage** — CTA: "Submit New Idea" (large, red button)
2. **Form Step 1** — Auto-populated fields: Project, Sector, Location (editable)
3. **Form Step 2** — Text areas: Problem, Solution + File upload (drag-drop)
4. **Form Step 3** — Multi-select: FSR Events, PC1 Links (searchable dropdowns)
5. **Form Step 4** — Summary review, "Save as Draft" or "Submit" buttons
6. **Confirmation** — Success message, submission ID, next steps, "Submit Another" button

**Mobile Optimizations**:
- Single column, max 5 fields per screen
- Progress bar at top (Step X/4)
- Sticky "Save as Draft" footer button (always visible)
- Large text inputs (min 14px font)
- Large touch targets (44px min height)

---

### Journey 2: Review & Approve Ideas (ESL) — PRIORITY 2
**Flow**: Home → My Pending Reviews (List) → Detail View → Action (Approve/Request Clarification/Reject) → Return to List

**Key Screens to Design**:
1. **ESL Dashboard** — KPI cards (pending reviews, aged items), "My Reviews" widget with count
2. **Pending Reviews List** — Table with: Title, Submitter, Status Badge, Days Pending (red if >7), Action Menu
3. **Detail View (Modal)** — Full submission + status timeline + comments thread + action buttons
4. **Action Modal** — "Request Clarification" form with comment input
5. **Approval Feedback** — Success toast: "Idea sent to Leadership (pending)"

**Design Considerations**:
- Red badge for items >7 days old
- Inline action buttons (Request Clarification, Approve, Reject)
- Workflow timeline showing past reviewers
- Comment counter with unread indicator

---

### Journey 3: Search & Filter Solutions (Design Team) — PRIORITY 2
**Flow**: Home → Search Library → Faceted Filters → Results Grid → Detail View → Export/Save

**Key Screens to Design**:
1. **Homepage** — CTA: "Browse Solutions" (large, teal button)
2. **Search Interface** — Left sidebar (sticky) with filters:
   - Sector (checkboxes): Road, Rail, Defence, etc.
   - Status (checkboxes): Approved, In Review, Case Study
   - Phase (checkboxes): Design, Tender, Construction
   - Implementation Date (range slider)
   - FSR Category (searchable multi-select)
   - [Clear All Filters] button at bottom
3. **Results Grid** — 3-column desktop / 1-column mobile:
   - Card layout: Image | Title (blue link) | 1-line AI summary (gray italic) | Sector badge | Stars (4.2★ 23)
   - [View Details] button
   - Pagination: "Load More" button
4. **Empty State** — Icon + message: "No solutions match your filters" + [Clear All Filters]
5. **Detail View (Modal)** — Full description, media gallery, linked FSRs, effectiveness rating, comments, [Save to Workspace], [Export as PDF], [Contact Support]

**Real-Time Features**:
- Results update as filters change (no refresh button needed)
- Active filters shown as removable chips above results
- Search box with autocomplete suggestions

---

### Journey 4: Track Implementation & Close Actions (ESL) — PRIORITY 3
**Flow**: Home → Implementation Actions (List) → Detail View → Update Status → Add Evidence → Mark Complete → Effectiveness Survey

**Key Screens to Design**:
1. **Actions List** — Status tabs: All (N), Not Started (N), In Progress (N), Pending Approval (N), Closed (N)
   - Table with: Action title, Assigned to, Due date (color-coded), Status badge, Progress bar (if In Progress), Action menu
   - Overdue items highlighted in red
   - Bulk selection + [Close Selected] button
2. **Action Detail View** — Full description, linked idea, status timeline, due date, assignee, evidence upload area
3. **Evidence Upload Modal** — Drag-drop zone, file preview, progress bar
4. **Status Update** — Dropdown: "In Progress", "Pending Approval", "Complete"
5. **Effectiveness Survey** (appears if completing) — 5-star rating, benefits realized (text), lessons learned, "Recommend for case study?" checkbox

**Design Considerations**:
- Due date color-coded: Green (on-track) | Yellow (at-risk) | Red (overdue)
- Progress bar (0–100%) for in-progress actions
- Sticky action footer showing available actions

---

### Journey 5: View Executive Dashboard (Leadership) — PRIORITY 1
**Flow**: Home → Dashboard (auto-populated with KPIs, charts, quick links)

**Key Screens to Design**:
1. **Leadership Dashboard** (No scrolling required for top 4 elements):
   - **Top Section (4 KPI Cards in 1 row)**:
     - Card 1: "Total Submitted" | Number + trend arrow
     - Card 2: "Pending Approvals" | Number + "View Now" link
     - Card 3: "Approved This Month" | Number + trend arrow
     - Card 4: "Avg Implementation Time" | "45 days"
   - **Middle Section (2 charts side-by-side, desktop; stacked mobile)**:
     - Chart 1: "Ideas by Status" (horizontal bar: Submitted | Under Review | Approved | Rejected)
     - Chart 2: "Ideas by Sector" (pie or donut chart: Road | Rail | Defence | Other)
   - **Bottom Section**:
     - "Escalated Items" alert box (red if any items >14 days)
     - Quick links: [View Pending Approvals], [Export Monthly Report], [View Aged Items]

**Interactive Features**:
- Click on any chart element to drill down (e.g., click "Approved" bar → filtered list of approved ideas)
- Responsive: Mobile shows top 2 KPI cards only; full dashboard on desktop

---

## CRITICAL DESIGN SPECIFICATIONS

### Responsive Design Breakpoints
Test and design for these viewport widths:
- **Mobile**: 320px (phone), 375px (standard phone)
- **Tablet**: 768px (portrait tablet)
- **Desktop**: 1024px (small desktop), 1440px (standard), 1920px (wide)

**Mobile-First Approach**: Design for 320px first, then scale up.

### Form Requirements
- **Max completion time**: 5 minutes
- **Progress indicator**: Show "Step X of Y" at top
- **Mandatory fields**: Mark with red asterisk (*)
- **Validation**: Field-level on blur, form-level on submit attempt
- **Error messaging**: Red text below field + error banner at top with jump-to-error links
- **Auto-save**: Draft saved every 30 seconds (silent, no notification)
- **Spell-check**: Built-in, runs as-you-type without blocking

### Navigation Structure
```
Header (Persistent)
├─ Logo (top-left) + "Engineered Safety Platform"
├─ Primary Nav: Home | Submit | Search | Admin (if authorized)
├─ Search bar (persistent, all pages)
├─ Notifications bell (red badge for count)
├─ Help icon (tooltip: "Keyboard shortcuts, user manual, contact support")
├─ Settings icon (dropdown: Profile, Preferences, Logout)
└─ User avatar + name

Footer
├─ Copyright + Laing O'Rourke legal/branding
├─ Logo + "THE POWER OF EXPERIENCE" tagline
└─ Contact address block
```

### Status Badges (Color-Coded)
- **Submitted**: Blue badge "Submitted"
- **Under Review**: Orange badge "Under Review"
- **Approved**: Green badge "Approved" + checkmark icon
- **Rejected**: Red badge "Rejected" + X icon
- **Closed**: Gray badge "Closed"
- **Aged (30+ days)**: Red flash animation + warning icon

### Button Hierarchy
- **Primary Button** (High-impact actions): Red (#e30613) fill, white text, 44px min height
  - Examples: "Submit Idea", "Approve", "Save", "Close Action"
- **Secondary Button** (Alternative actions): Teal (#00a7b5) outline, teal text
  - Examples: "Save as Draft", "Cancel", "Request Clarification"
- **Danger Button** (Destructive): Red (#e30613) fill
  - Examples: "Delete", "Reject", "Cancel Submission"
- **Text Link** (Low-priority): Teal (#00a7b5), underline on hover
  - Examples: "Learn More", "View Details", "Back to Results"

### Accessibility Targets
- **WCAG 2.1 AA Compliance**
- **Contrast Ratio**: Min 4.5:1 for normal text, 3:1 for large text
- **Touch Targets**: Min 44×44px (buttons, links, inputs)
- **Focus States**: 3px outline in Teal (#00a7b5)
- **Color-Blind Safe**: Use icons + labels + text, never color alone
- **Alt Text**: All images have descriptive alt text
- **Font Size**: Min 14px for body text, 18px for headings (mobile)

---

## SPECIFIC WIREFRAME REQUIREMENTS BY SCREEN

### Screen 1: Homepage / Dashboard (Personalized)

**Layout**:
```
[Header with LOR Logo + Nav]

[Hero Section - Desktop Only]
"Engineered Safety Platform"
"Capture, Track, and Scale Safety Innovations"
[Submit New Idea] [Browse Solutions]

[KPI Cards - 4 Column Grid on Desktop, 2 on Tablet, 1 on Mobile]
┌─────────────────────────────────────┐
│ Total Submitted  │ Pending Reviews   │
│ 247              │ 8                 │
│ +12% this month  │ View Now →        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ Approved This Month │ My Drafts       │
│ 12                  │ 3              │
│ +8% vs last month   │ View Drafts →  │
└─────────────────────────────────────┘

[Charts Section - 2 Columns on Desktop, 1 on Mobile]
Ideas by Status (Horizontal Bar)    │ Ideas by Sector (Pie)
Submitted | Under Review | Approved │ Road | Rail | Defence | Other
Rejected                             │

[Quick Links - 4 Cards]
Submit New Idea        │ View My Reviews
Browse Solutions       │ Track Implementation

[Footer]
LOR Logo + "THE POWER OF EXPERIENCE"
Contact Info
```

**Design Notes**:
- KPI cards with skeleton loaders while data loads
- Trending arrows (green ↑ for positive, red ↓ for negative)
- Charts clickable for drill-down (e.g., click "Approved" → filtered list)
- No horizontal scrolling on any device

---

### Screen 2: Multi-Step Submission Form (Step 1: Context)

**Layout**:
```
[Header]

[Progress Bar - 25% filled]
Step 1 of 4

[Form Title]
"Submit a Safety Idea — Step 1 of 4: Project & Context"

[Form Content]
Label: "Project Name *"
Input: Dropdown with auto-populated value "Highway A1 Expansion"
Helper: "(Auto-populated from your profile, editable)"

Label: "Sector *"
Input: Dropdown with auto-populated value "Road"
Helper: "(Auto-populated based on project)"

Label: "Location *"
Input: Text field with value "London, UK"
Helper: "(Edit if different)"

Label: "Submitter Name"
Input: Read-only text field "John Smith"
Helper: "(Your name from profile)"

[Sticky Footer - Always Visible on Mobile]
[Save as Draft] ← → [Next Step] [Cancel]
```

**Mobile Considerations**:
- Dropdowns expand full-width
- Single column layout
- Input height: 40px min
- Button height: 44px min
- No scrolling within form fields (max 5 fields per screen)

---

### Screen 3: Search Results Page (2-Column Desktop)

**Layout**:
```
[Header]

[Breadcrumb]
Home > Search > Solutions

[2-Column Layout on Desktop, 1-Column on Mobile]

LEFT SIDEBAR (Sticky on Scroll)
─────────────────────────────
[Filter Panel Title]
"Refine Results"

[Search Box]
Input: "Type to search..." with [×] clear button

[Filter Group 1 - Sector]
☐ Road
☐ Rail
☐ Defence
☐ Other

[Filter Group 2 - Status]
☐ Approved
☐ In Review
☐ Case Study
☐ LOR Preferred

[Filter Group 3 - Phase]
☐ Design
☐ Tender
☐ Construction

[Collapsed Filter Group]
[+] Implementation Date (range slider when expanded)

[Collapsed Filter Group]
[+] FSR Category (searchable dropdown when expanded)

[Clear All Filters] Button

RIGHT SECTION (Main Content)
──────────────────────────────
"23 solutions found"  [Sort ▼ Relevance]  [Grid] [List]

[Solution Card Grid - 3 Columns Desktop, 1 Mobile]
┌──────────────────────┐
│ [Image Thumbnail]    │
│                      │
│ Solution Title       │
│ (dark blue, link)    │
│                      │
│ AI summary: "A       │
│ lightweight barrier  │
│ system reducing      │
│ fall risk by 40%"    │
│ (gray, italic)       │
│                      │
│ [Sector] [Status] ★  │
│ Road     Approved 4.2│
│ (23)                 │
│ Sarah Johnson        │
│ May 15, 2024         │
│                      │
│ [View Details] Btn   │
└──────────────────────┘

[Pagination - Load More or Numbered Pages]
Showing 1–50 of 215

[Empty State - If No Results]
🔍
No solutions match your filters
Try removing some filters or adjusting search
[Clear All Filters]
```

**Interaction**:
- Results update in real-time as filters change
- Active filters shown as removable chips above results
- Click solution card → detail modal or separate page
- Click chart/badge → filter applied

---

### Screen 4: Solution Detail View (Modal)

**Layout**:
```
[Modal Header - Sticky at Top]
────────────────────────────────
"Modular Fall Prevention Barriers" [×] Close
Breadcrumb: Home > Search > Solution

[Status Bar]
🟢 Approved

[Modal Body - Scrollable]
────────────────────────────────

[Problem Section]
Label (bold): "Problem"
Text: "Workers on elevated platforms at risk of fall from <1.5m. 
       Current barriers require significant setup time."

[Solution Section]
Label (bold): "Proposed Solution"
Text: "Lightweight, modular barrier system with quick-clip connectors. 
       Can be deployed in <5 minutes."

[Media Gallery - If Images Attached]
[Thumbnail 1] [Thumbnail 2] [Thumbnail 3]
(Click to expand full-screen)

[Details Grid - 2 Columns Desktop, 1 Mobile]
Sector: Road (badge)        │ Status: Approved (badge)
Submitted by: Sarah Johnson │ Date: May 15, 2024
Linked FSRs: [FSR-001] [FSR-005]
Implementation Date: June 1, 2024
Effectiveness Rating: ⭐⭐⭐⭐⭐ 4.2 (23 ratings)
(Click stars to see rating distribution)

[Comments Section]
"Comments (4)"
─────────────────────
👤 Michael Chen
   "Great solution! We're implementing on North site."
   May 23, 2024

👤 Sarah Johnson (Indented Reply)
   "Thanks Michael! Please share feedback once deployed."
   May 24, 2024

[Add Comment] Text area

[Modal Footer - Sticky at Bottom]
────────────────────────────────
[Save to Workspace] [Export as PDF] [Contact Support]
```

**Design Considerations**:
- Modal width: 600px max on desktop, full-screen on mobile
- Images scale to fit modal (object-fit: cover)
- Star rating clickable to show distribution (tooltip or small popup)
- Comments auto-scroll to latest
- Buttons always visible (sticky footer)

---

### Screen 5: ESL Dashboard (Review Queue)

**Layout**:
```
[Header]

[Page Title]
"My Reviews"
"Ideas awaiting your approval"

[Alert Section - If Overdue Items]
⚠️ Red Banner
"3 items are overdue. Take action"
[View Aged Items] →

[Filters & Sorting - Inline Above List]
Filter: [Status ▼ All]  [Sector ▼ All]  [Clear Filters]
Sort: [Oldest First ▼]

[Pending Reviews List - Table on Desktop, Cards on Mobile]

DESKTOP TABLE:
┌──────────────────────────────────────────────────────────┐
│ Idea Title           │ Submitter  │ Status    │ Days  │ …│
├──────────────────────────────────────────────────────────┤
│ Modular Barriers     │ S. Johnson │ Submitted │  3    │⋮ │
│ Safety Harness Ref.  │ M. Chen    │ In Review │  8 🔴 │⋮ │
│ PPE Tracker System   │ J. Smith   │ New       │  1    │⋮ │
│ Dust Control Unit    │ A. Patel   │ Submitted │ 12 🔴 │⋮ │
└──────────────────────────────────────────────────────────┘

MOBILE CARDS:
┌────────────────────────┐
│ Modular Barriers       │
│ By: S. Johnson         │
│ Status: Submitted      │
│ 3 days pending         │
│ ⋮ [Menu]               │
├────────────────────────┤
│ [View Details]         │
│ [Request Clarification]│
│ [Approve & Forward]    │
└────────────────────────┘

[Empty State - If No Pending]
✅
No ideas pending your review
Great job! [Browse All Ideas]

[Footer - Sticky if Rows Selected]
Bulk Actions (if rows selected):
[Approve Selected 3] [Request Clarification] [Bulk Reject]
```

**Design Considerations**:
- Days pending: Red text if >7 days
- Status badge colors: Blue (Submitted), Orange (In Review), Green (Pending Decision)
- Hover effect: Light blue background, action buttons visible
- Row click opens detail modal (preserves list state)
- Bulk selection: Checkboxes appear on row hover (mobile) or always visible (desktop)

---

### Screen 6: Action Tracking List (Implementation Status)

**Layout**:
```
[Header]

[Page Title]
"Implementation Actions"

[Status Tabs - Horizontal]
All (15) | Not Started (3) | In Progress (7) | Pending Approval (4) | Closed (1)

[Alert Section - If Overdue]
⚠️ "2 actions are overdue"

[Actions Table]
┌────────────────────────────────────────────────────────────────┐
│ Action Title        │ Assigned To │ Due Date  │ Status    │ %   │
├────────────────────────────────────────────────────────────────┤
│ Install Barriers    │ J. Smith    │ Jun 30    │ In Prog   │ 60% │
│ Safety Induction    │ M. Chen     │ Jun 15 🔴 │ Not Start │ 0%  │
│ Review Procedures   │ A. Patel    │ Jul 15    │ Pending   │ 80% │
└────────────────────────────────────────────────────────────────┘

[Bulk Actions - Sticky Footer if Rows Selected]
[Close Selected 2] [Extend Deadline] [Reassign]
```

**Design Considerations**:
- Due date: Green (on-track), Yellow (at-risk), Red (overdue)
- Progress bar: Visual indicator of completion % (0–100%)
- Status colors: Blue (Not Started), Orange (In Progress), Purple (Pending), Gray (Closed)
- Click row → detail view with evidence upload area

---

## INTERACTION & STATE SPECIFICATIONS

### Loading States
- **Skeleton loaders**: For KPI cards, chart placeholders, solution cards
- **Pulse animation**: Subtle gradient fade (not jarring spinners)
- **Progress bars**: For file uploads, form multi-step progress

### Feedback States
- **Success Toast** (bottom-right, 5s auto-dismiss): "✓ Idea submitted successfully"
- **Error Toast** (bottom-right, persistent): "✗ Validation error: Please fill required fields"
- **Warning Toast** (bottom-right): "⚠ This idea is similar to [Title]. Continue anyway?"
- **Success Checkmark**: In button text after action ("Submit ✓")

### Disabled States
- **Buttons**: Opacity 0.6, cursor: not-allowed, no hover effect
- **Form Fields**: Background #f2f2f2, text #999999, no interaction
- **Links**: Color #999999, cursor: not-allowed

### Focus States
- **All interactive elements**: 3px outline in Teal (#00a7b5)
- **Buttons**: Outline + subtle background lightening
- **Links**: Outline + underline
- **Form fields**: Outline + slight shadow

---

## SPECIFICATIONS SUMMARY FOR CLAUDE DESIGN

### Must-Have Screens (Wireframe First)
1. ✅ Homepage / Dashboard (personalized per role)
2. ✅ Submission Form (all 4 steps)
3. ✅ Search Results Page (faceted filtering)
4. ✅ Solution Detail View (modal or page)
5. ✅ ESL Dashboard (pending reviews)
6. ✅ Leadership Dashboard (KPIs + charts)

### Nice-to-Have Screens (Design if time permits)
7. Implementation Tracking List
8. Action Detail View
9. Mobile Views (key screens at 320px & 768px)
10. Video Intro Sequence (optional)

### Design Tools & Formats
- **Preferred Output**: Figma file (interactive components) or high-fidelity mockups
- **Alternative Output**: HTML/CSS prototypes, PDF mockups
- **Responsiveness**: Show desktop (1440px), tablet (768px), mobile (320px) views side-by-side

### Color Palette (Copy-Paste Ready)
```
Primary: #e30613 (LOR Red - CTA buttons only)
Secondary: #00a7b5 (LOR Teal - secondary actions, links)
Success: #64a70b (Green)
Warning: #fe5000 (Orange)
Text: #2d2d2d (Almost Black)
Background: #f2f2f2 (Light Grey)
Border: #cccccc (Medium Grey)
White: #ffffff
```

### Font Stack
```
font-family: "Century Gothic", Arial, Helvetica, sans-serif;
```

### Key Numbers to Remember
- **Min form time**: 5 minutes
- **Max field per screen**: 5 fields
- **Min touch target**: 44×44px
- **Min contrast ratio**: 4.5:1
- **Logo height**: 32–48px (desktop), 24–32px (mobile)

---

## DELIVERY CHECKLIST FOR CLAUDE DESIGN

- [ ] All screens use LOR color palette (Red, Teal, Greys)
- [ ] Typography: Century Gothic (or serif fallback)
- [ ] Logo placed top-left with proper clear space
- [ ] All buttons meet 44×44px minimum touch target
- [ ] Form steps show progress bar (Step X/4)
- [ ] Mobile views stack single-column, no horizontal scroll
- [ ] Focus states visible (3px Teal outline)
- [ ] Status badges color-coded (Green/Orange/Red)
- [ ] Empty states include helpful messaging + CTA
- [ ] Footer includes "THE POWER OF EXPERIENCE" tagline
- [ ] Responsive breakpoints tested: 320px, 768px, 1440px
- [ ] Loading states use skeleton loaders (no spinners)
- [ ] Accessibility: WCAG AA contrast ratios verified
- [ ] All images have descriptive alt text noted
- [ ] Interactive elements include hover + active states
- [ ] Error messaging clear and actionable
- [ ] Tooltips/helpers positioned logically
- [ ] Dashboard KPIs show without scrolling (top 4 cards)
- [ ] Charts are clickable for drill-down
- [ ] Form auto-save indicated (draft saved ✓)

---

## ADDITIONAL REFERENCE DOCUMENTS

**Provided Separately**:
1. **UX_Design_Requirements_v1.0.md** — Complete product specifications
2. **Component_Library_and_Design_Tokens.md** — All UI components with exact specs
3. **Brand_Alignment_Addendum_LOR.md** — Laing O'Rourke visual identity guidelines

**Key Pages to Reference**:
- Brand Guidelines: Pages 1–8 of Brand Addendum
- Component Specifications: Entire Component Library document
- User Journeys: Section 3 of UX Requirements
- Accessibility: Section 5.3 of UX Requirements
- Forms Design: Section 4.1 of UX Requirements

---

## QUESTIONS FOR CLAUDE DESIGN

Before you begin wireframing, confirm:

1. **Detail View Format**: Modal (recommended for quick browsing) or separate page (for deep exploration)?
   - **Recommendation**: Use modal for search results, separate page for admin detail views

2. **Chart Type for Ideas by Status**: Horizontal bar chart (recommended) or vertical bar?
   - **Recommendation**: Horizontal bars (easier to read on mobile)

3. **Sort Options**: Relevance, Newest, Oldest, Effectiveness (High to Low)?
   - **Recommendation**: Defaults to "Relevance"; offer all 4 as dropdown

4. **Bulk Selection**: Checkboxes always visible (desktop) or appear on hover?
   - **Recommendation**: Always visible on desktop, appear on hover/click on mobile

5. **Dashboard Charts**: Should clicking chart segments filter the main list below?
   - **Recommendation**: Yes, drill-down to filtered results

---

## NEXT STEPS AFTER DESIGN

1. **Share Figma file** or high-fidelity mockups with product team
2. **User testing** on 3–5 representatives from each user segment
3. **Accessibility audit** (WCAG AA verification)
4. **Handoff to developers** with component library + design tokens
5. **FBA project integration** — customize with project-specific sectors, FSRs, etc.

---

**Document Version**: 1.0  
**Created**: April 29, 2026  
**Project**: Fremantle Bridges Alliance (FBA)  
**Platform**: Engineered Safety Platform  
**Designer Assignment**: Claude Design (AI-Powered UI)  
**Status**: Ready for Wireframing

---

## SEND THIS BRIEF TO CLAUDE DESIGN

**Instructions**:
1. Copy all content above
2. Paste into Claude Design tool or share via design platform
3. Request: "Generate interactive wireframes + mockups for all 6 priority screens using the specifications above"
4. Specify output format: Figma file, PDF mockups, or HTML prototype
5. Timeline: Estimate 2–3 days for initial wireframes, 1 week for high-fidelity mockups with interactions

