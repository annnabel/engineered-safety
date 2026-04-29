# Engineered Safety Platform
## UX Design Requirements Document v1.0

---

## 1. PRODUCT CONTEXT

### Product Summary
The Engineered Safety Platform is an enterprise safety solutions management system designed to capture, review, track, and optimize engineered safety innovations across construction and infrastructure projects. The platform supports a continuous safety loop that captures ideas from the workforce, validates them through structured workflows, and distributes approved solutions across the organization.

### Core Value Proposition
- **Democratize safety innovation**: Enable all workforce levels (field teams, engineers, leadership) to contribute safety improvements through simple, mobile-friendly interfaces
- **Reduce safety risk through continuous improvement**: Create a structured process for idea validation, implementation tracking, and effectiveness measurement
- **Enable knowledge sharing**: Build a searchable, filterable library of proven safety solutions that can be adapted across projects and sectors
- **Streamline project integration**: Embed engineered safety workflows into existing project and HSE processes at design kickoff, project initiation, and ongoing phases

### Primary User Problem Solved
**Challenge**: Safety innovations exist in silos across projects and teams with no systematic way to capture, validate, scale, or track their effectiveness.

**Solution**: A centralized platform that captures ideas rapidly (mobile-first), routes them through clear approval workflows, tracks implementation, and makes them discoverable across the organization.

---

## 2. TARGET USERS & PERSONAS

### User Segments

#### 1. **Workforce / Field Teams**
- **Goals**: Quickly log safety ideas and suggestions without friction; see their ideas get actioned
- **Motivations**: Recognize their contribution; contribute to team safety culture
- **Pain Points**: 
  - Complex forms that take time away from productive work
  - Unclear submission process or feedback loops
  - Ideas get lost or never see implementation
- **Context**: Often mobile/kiosk-based, time-poor, non-technical background
- **Key Behavior**: Rapid form entry, minimal scrolling, large touch targets

#### 2. **Project Teams (Submitters/Reviewers)**
- **Goals**: Submit ideas, validate them, provide feedback on others' suggestions
- **Motivations**: Contribute to safety culture; get ideas into the knowledge base
- **Pain Points**: 
  - Complex workflows; unclear approval requirements
  - Difficulty navigating versioning and change tracking
  - No visibility into next steps after submission
- **Context**: Desktop and mobile, moderate technical literacy
- **Key Behavior**: Submissions, commenting, reviewing linked FSR events

#### 3. **Engineering Safety Leads (ESLs)**
- **Goals**: Review weekly/monthly summaries; track implementation status; escalate aged items
- **Motivations**: Ensure safety innovations are implemented; identify system bottlenecks
- **Pain Points**: 
  - Manual aggregation of project updates
  - No clear alerts for stalled items
  - Difficulty seeing organizational trends across projects
- **Context**: Desktop-primary, regular system users, management responsibility
- **Key Behavior**: Dashboard views, filtering, bulk actions, alert management

#### 4. **Project Leadership**
- **Goals**: Review monthly innovations; make implementation decisions; promote safety culture
- **Motivations**: Strategic safety oversight; compliance; cost-benefit analysis
- **Pain Points**: 
  - Too much detail; need summary-level views
  - Difficulty filtering by relevance (sector, phase, risk level)
  - Unclear ROI or business impact of safety innovations
- **Context**: Desktop-only, infrequent users, executive summary preference
- **Key Behavior**: High-level dashboards, summary exports, filtered views

#### 5. **Design Teams**
- **Goals**: Access approved solutions at design kickoff; integrate into new projects
- **Motivations**: Accelerate project design; reduce design risk through proven solutions
- **Pain Points**: 
  - Large library is overwhelming without good filtering
  - Difficulty comparing solutions
  - No context on sector/phase applicability
- **Context**: Desktop-primary, design-phase focused
- **Key Behavior**: Search, filter by sector/phase, detailed exploration, export for reference

#### 6. **Admins / System Maintainers**
- **Goals**: Monitor system health; manage users; configure workflows/forms; bulk import data
- **Motivations**: Keep system running; ensure data quality; reduce manual effort
- **Pain Points**: 
  - Complex system configuration requires coding
  - Manual data entry for bulk imports
  - Limited visibility into system performance
- **Context**: Desktop-only, technical background, infrequent but high-impact actions
- **Key Behavior**: Admin dashboards, configuration tools, bulk operations, monitoring

---

## 3. USER JOURNEYS

### Journey 1: Submit a New Engineered Safety Idea (Workforce)
```
ENTRY POINT: Workforce member notices safety issue on site
  ↓
[Mobile/Desktop] Tap "Submit New Idea" button
  ↓
[Form 1] Auto-populated context fields:
  - Project name (from user profile)
  - Sector (auto-detected)
  - Location (auto-detected)
  - Editable if required
  ↓
[Form 2] Describe the problem & solution:
  - Problem statement
  - Proposed safety solution
  - Expected health benefit
  - Attach supporting documents/images/video (drag-and-drop)
  ↓
[Form 3] Link to related FSR events:
  - Multi-select FSR picker (populated from HSEMS data feed)
  - Optional: Link to PC1 incident if applicable
  ↓
[Form 4] Meta & tags:
  - Auto spell-check on all text fields
  - Select applicable lifecycle stage
  - (Optional) Success metrics input
  ↓
[Decision Point] Save as Draft OR Submit?
  ├─ [Save Draft] → Stored in user's draft inbox
  └─ [Submit] → Moved to "Under Review" status
  ↓
[Outcome] Confirmation screen:
  - Unique submission ID displayed
  - Next steps explained
  - Link to view submission status
  - Button to submit another idea
```

**UX Requirements for this journey:**
- Form completion time must be <5 minutes
- Minimal vertical scrolling (ideally fit on mobile in 3–4 screens)
- Large touch targets (min 44px for mobile)
- Progress indicator at top of form
- "Save Draft" button always visible (sticky footer on mobile)
- Spell-check runs as-you-type without blocking submission
- Validation errors appear inline and highlight specific fields
- Auto-save draft every 30 seconds
- Clear, plain language (no jargon)

---

### Journey 2: Review & Approve Ideas (ESL / Project Team)
```
ENTRY POINT: ESL receives notification of new idea in queue
  ↓
[Desktop] ESL opens email or in-app notification
  ↓
[Navigation] Clicks link → Directed to "My Pending Reviews" view
  ↓
[List View] Displays queue of ideas awaiting review:
  - Idea title + submitter
  - Status badge (New, In Review, Pending Decision)
  - Days pending (color-coded: green <7 days, yellow 7–14, red 14+)
  - Filter options: By status, sector, priority
  - Sort options: By date, urgency, submitter name
  ↓
[Decision Point] Click on an idea → Opens detail view (modal or separate page)
  ├─ [Detail View] Full submission displayed:
  │  - Problem & proposed solution
  │  - Attached media (inline display)
  │  - Linked FSR events
  │  - Current status in workflow
  │  - Version history (who reviewed, when, feedback)
  │  - Comments thread
  │  ↓
  │ [Action Bar] Reviewer options:
  │  ├─ [Request Clarification] → Open comment dialog + stay in review
  │  ├─ [Mark as Draft] → Return to submitter with feedback
  │  ├─ [Send to Next Reviewer] → Approve and forward
  │  ├─ [Reject] → Trigger rejection reason form
  │  └─ [Flag as Duplicate] → Link to existing idea
  │  ↓
  │ [Notify] Assignee receives notification of next action
  │  ↓
  │ [Return to List] Background updates; badge reflects new status
  │  ↓
  └─ [Outcome] Idea moves through workflow states
     - Under Review → Pending Leadership Decision → Approved → Closed
```

**UX Requirements for this journey:**
- "Pending Reviews" widget on ESL dashboard showing count + aged items (red if >7 days)
- Clickable notification links go directly to detail view
- Inline commenting (no page reload)
- Status workflow visual (timeline or step indicator) showing past and future states
- Quick-action buttons in list (Request Clarification, Approve, Reject) for power users
- Bulk actions for experienced reviewers (e.g., "Approve all in [Project]")
- Automatic escalation alert if item stalled >7 days (F-22)
- Detailed audit trail showing all reviewers, timestamps, feedback

---

### Journey 3: Search & Filter Solutions (Design Team at Kickoff)
```
ENTRY POINT: Design team planning new project; wants to discover relevant safety innovations
  ↓
[Desktop] Opens platform homepage
  ↓
[Navigation] Clicks "Search Solutions" or "Browse Library"
  ↓
[Search Interface] Multi-faceted filtering panel:
  - Sector dropdown (Road, Rail, Defence, etc.)
  - Project Phase dropdown (Design, Tender, Construction, etc.)
  - FSR Category multi-select
  - Status filter (Approved, Case Study, LOR Preferred)
  - Implementation Date range slider
  - Free-text search box (with live keyword suggestions)
  - Sort option: Relevance, Recency, Effectiveness Rating
  ↓
[Decision Point] Narrow filters and click "Search" or results update in real-time?
  ├─ [Real-time] Faceted results update as filters change (PREFERRED)
  └─ [Search Button] Explicit submission
  ↓
[Results View] Grid or list of matching solutions:
  - Solution title + short 1-2 sentence AI summary
  - Sector tags (colored badges)
  - FSR category badge
  - Star rating (effectiveness) + # of votes
  - Submitter + date
  - Thumbnail if media attached
  ↓
[Decision Point] Click on a solution → Opens detail view
  ├─ [Detail View] Full solution displayed (modal or separate page):
  │  - Full description + media (images/video inline, PDFs linked)
  │  - Linked FSR events (read-only for viewers)
  │  - Effectiveness ratings + comments
  │  - Implementation evidence (case studies, photo documentation)
  │  - Implementation status across projects
  │  - Contact button for more info
  │  ↓
  │ [Action Buttons]:
  │  ├─ [Save to Workspace] → Add to "My Project Workspace"
  │  ├─ [Export as PDF] → Download branded PDF
  │  ├─ [Contact Support] → Open support request form
  │  └─ [Flag as Helpful] → Upvote or feedback
  │  ↓
  └─ [Return to Results] Close modal or back button
  ↓
[Bulk Actions] Design team selects multiple solutions:
  ├─ [Select All Matching] → Checkbox to select entire result set
  ├─ [Bulk Export] → Download all as Excel/CSV or PDF
  └─ [Save to Workspace] → Add all selected to workspace
  ↓
[Outcome] Design team has curated list of relevant innovations
         → Can reference in design documentation
         → Can track implementation status
```

**UX Requirements for this journey:**
- Faceted search must return results in <2 seconds
- Filters should update results in real-time (no page reload)
- "Clear Filters" button always available
- Save current filter combination as "View" for reuse
- Detail view accessible from search results without losing filter state
- Bulk selection checkboxes for power users
- Responsive grid layout (3 cols on desktop, 1–2 on mobile)
- AI-generated 1-2 sentence summaries visible in list view (not just full description)
- Effectiveness rating visible at-a-glance (star icon, color-coded)

---

### Journey 4: Track Implementation & Close Action (ESL / Leadership)
```
ENTRY POINT: ESL dashboard shows "Pending Implementation Actions"
  ↓
[Dashboard View] Table of active actions:
  - Action title + description
  - Assigned to (person/team name)
  - Due date (color-coded: green on-track, yellow at-risk, red overdue)
  - Status (Not Started, In Progress, Pending Approval, Closed)
  - Days pending since assignment
  ↓
[Decision Point] Click on an action → Opens detail view
  ├─ [Detail View] Full action record:
  │  - Linked idea (parent solution)
  │  - Current status + assignee
  │  - Due date + timeline
  │  - Evidence of completion (documents, photos, sign-offs)
  │  - Comments thread
  │  - Escalation path if overdue
  │  ↓
  │ [Update Options]:
  │  ├─ [Add Evidence] → Upload completion documents
  │  ├─ [Update Status] → Change to "In Progress" or "Complete"
  │  ├─ [Request Clarification] → Comment + notify assignee
  │  ├─ [Extend Deadline] → Adjust due date + notify
  │  ├─ [Reassign] → Transfer to new owner
  │  └─ [Mark as Closed] → Requires evidence; triggers effectiveness survey
  │  ↓
  │ [Effectiveness Survey] (if closing):
  │  - Rate effectiveness (1-5 stars)
  │  - Benefits realized (measured against initial success metrics)
  │  - Lessons learned (free text)
  │  - Recommend for case study? (Yes/No)
  │  ↓
  └─ [Outcome] Action marked as Closed
     → Solution moves to "Implemented" status
     → Data feeds into knowledge base
     → Effectiveness rating updates
     → Team member receives recognition notification
  ↓
[Escalation Path] If action >7 days overdue:
  ├─ Automated alert sent to assignee (F-22)
  ├─ Alert escalated to next management level
  ├─ ESL dashboard flags item in red
  └─ Weekly email summary includes escalated items
```

**UX Requirements for this journey:**
- Dashboard shows at-a-glance status via color-coded badges
- Overdue items bubble to top of list (or separate "At Risk" section)
- Due date visible on list and detail views
- Inline status updates (don't require navigation away)
- Evidence upload: drag-and-drop area with file preview
- Effectiveness survey appears as multi-step form post-closure
- Bulk closure for teams closing multiple related actions (e.g., entire project implementation)
- Automatic email reminders sent before due date (F-26)
- Escalation path clearly documented (who receives notifications at each level)

---

### Journey 5: View Executive Dashboard (Leadership)
```
ENTRY POINT: Project Leader logs in
  ↓
[Homepage] Lands on personal dashboard (customizable)
  ↓
[Top Section] KPI Cards:
  - # of new ideas this month
  - # pending leadership approval
  - # successfully implemented this month
  - Average implementation time (days)
  ↓
[Middle Section] Monthly Summary:
  - Ideas by status (pie or horizontal bar chart)
  - Ideas by sector (grouped bars)
  - Trending sectors/risk types
  - Most effective safety themes (mini table of top 5)
  ↓
[Bottom Section] Quick Actions:
  - "View Pending Approvals" → Filtered list of ideas awaiting leadership decision
  - "Export Monthly Report" → PDF download with trends + recommendations
  - "View Escalated Items" → Red-flagged actions overdue >14 days
  ↓
[Drilldown Options] Click on any chart element:
  - Sector → Filtered list of ideas in that sector
  - Status → Filtered list of ideas in that status
  - Trend → Detailed breakdown of theme
  ↓
[Outcome] Leadership has summary-level visibility; can drill into detail as needed
```

**UX Requirements for this journey:**
- Dashboard loads in <2 seconds
- Charts are interactive (click to filter)
- No scrolling required to see top 4 KPI cards
- Summary data automatically refreshes daily
- Export button generates branded PDF suitable for executive distribution
- All numbers are clickable drill-down points
- Mobile version shows top 2 KPIs only; full dashboard on desktop

---

## 4. FUNCTIONAL REQUIREMENTS

### Core Features (Must Have)

#### 4.1 Submission & Idea Capture
- **F-01: Auto-Population of Context Fields**
  - System auto-populates: Project Name, Sector, Location from user profile or project selection
  - Fields remain editable for corrections or exceptions
  - UX: Single "Select Your Project" dropdown pre-fills related fields

- **F-02: Rich Media Attachment**
  - Users can attach documents, images, videos to each submission
  - Drag-and-drop upload interface
  - File preview before submission
  - Max file size: 100MB per file, 500MB total per submission
  - Supported formats: PDF, DOCX, XLSX, JPG, PNG, MP4, MOV
  - UX: Drag-and-drop zone with visual feedback; progress bar for multi-file uploads

- **F-03: FSR Event Linking**
  - Multi-select picker of relevant FSR (Financial Safety Reports) events
  - Data fed from HSEMS (Health & Safety Management System) to avoid manual updates
  - Allows >1 FSR link per solution
  - UX: Searchable dropdown with category grouping; chip tags show selected FSRs

- **F-10: Comments & Discussion Threads**
  - Users can add threaded comments to any idea at any workflow stage
  - Nested reply structure (replies to specific comments)
  - Mentions (@ tag users) trigger notifications
  - UX: Chronological comment list; reply link inline; comment count badge on solution card

- **F-11: Rejection Reasoning**
  - If idea rejected, submitter must provide (or reviewer must document) reason
  - Dropdown + free-text field
  - Stored in audit trail
  - UX: Modal appears on "Reject" button click; mandatory field blocks closure

- **F-13: Draft Saving**
  - Users can save form in progress and resume later
  - Draft stored in user's "My Drafts" section
  - Auto-save to cloud every 30 seconds
  - Restore all text if browser crashes
  - UX: "Save as Draft" button always visible (sticky footer on mobile); badge shows # unsaved drafts

- **F-14: Form Validation & Error Messages**
  - Mandatory fields: Risk Avoided, Health Benefit, FSR Category, Clarity/Actionability
  - Inline validation: errors appear below field in red text
  - Form cannot submit if errors present
  - Error summary at top of form (sticky) with links to jump to error
  - UX: Field-level validation on blur; form-level validation on submit attempt

#### 4.2 Workflow & Approval
- **F-16: Approval Workflows**
  - Configurable approval chains (admin panel)
  - Supports serial routing (A→B→C) and parallel approvals
  - Approval status visible in timeline view
  - Ability to delegate approval to another user (L3→L2 delegation)
  - UX: Workflow diagram on detail view; "Delegate" button under action bar

- **F-17: Status Workflow Management**
  - Defined states: Submitted → Under Review → Pending Decision → Approved/Rejected → Closed
  - States enforced; user can only transition forward or to rejection
  - Status badges on list and detail views
  - UX: Vertical timeline on left side of detail view; current state highlighted

- **F-18: Action Tracking & Closure**
  - Tracks assigned implementation actions with due dates
  - Records assignee, status, evidence of completion
  - Supports evidence upload (documents, photos, sign-offs)
  - Actions cannot close without evidence
  - UX: "Actions" sub-section in solution detail; evidence upload modal

- **F-19: Automated Action Prompts**
  - Email sent to assignee when action assigned (with due date, context, link)
  - In-app notification also delivered
  - Email includes: Action title, due date, parent idea summary, link to action detail
  - UX: No action required by user; backend-driven email

- **F-20: Aged Item Alerts**
  - System checks daily for items not updated in 30 days
  - Sends alert email to ESL with list of stalled items
  - Items marked in red on ESL dashboard
  - UX: Red "Aged" badge on stalled items; "View Aged Items" filter on ESL view

- **F-22: Notification Escalation**
  - If action not updated after 7 days, escalates to next management level
  - Escalation path customizable per organization
  - Escalated items added to leadership dashboard
  - UX: Red "Escalated" badge; assignee + manager both notified

- **F-23: Workflow Visibility & Notifications**
  - All participants in workflow receive status change notifications
  - Notifications sent via email + in-app (settable per user preference)
  - UX: Bell icon in header with unread count; notification center accessible from header

#### 4.3 Search & Discovery
- **F-27: Multi-Dimensional Filtering**
  - Filters: Sector, FSR, Project Phase, Status, Implementation Date, Submitter, Priority
  - All filters combinable
  - "Clear All" button resets filters
  - Current filter state shown as active chips/badges
  - UX: Left sidebar with filter panel; active filters shown as removable chips; results update in real-time

- **F-34: Detail View (Pop-up or Separate Page)**
  - Clicking solution title opens full details
  - Can be modal overlay or separate page (design choice)
  - Includes: full description, media, linked FSRs, comments, effectiveness rating
  - "Back to Results" preserves filter state
  - UX: If modal: overlay with close button; if page: breadcrumb shows "Search Results > [Solution]"

- **F-30: AI-Generated Summaries**
  - System auto-generates 1-2 sentence summary for each solution
  - Visible in search results (list view)
  - Generated from problem + solution description using LLM
  - Editable by admins if needed
  - UX: Summary appears below title in results; italicized or slightly grayed to distinguish from full text

- **F-31: AI Deduplication**
  - On submission or import, system flags entries with >80% similarity to existing entries
  - Shows side-by-side comparison of similar entries
  - Submitter can merge, modify, or proceed as new (with confirmation)
  - UX: Modal appears if duplicates found; shows match score %; user resolves before closure

#### 4.4 Reporting & Export
- **F-28: Search Result Export**
  - "Export" button in search results header
  - Format options: CSV, Excel (XLSX)
  - Exports selected results or entire result set
  - Columns: Title, Sector, Status, Submitter, Date, FSR Links, Effectiveness Rating
  - UX: Dropdown menu with format options; progress indicator during export

- **F-29: Templated PDF Export**
  - Exports selected solutions as branded PDF document
  - PDF includes: Solution titles, descriptions, media (scaled to fit), FSR links, effectiveness ratings
  - LOR branding applied (logo, colors, footer)
  - Suitable for presentation/distribution to teams
  - UX: "Export as PDF" button; modal to select solutions if multiple; generates in <5 seconds

#### 4.5 Knowledge Management & Analytics
- **F-06: Effectiveness Rating**
  - Users can rate implemented solutions on 1-5 star scale
  - Rating visible in search results + detail view
  - Average rating calculated across all ratings
  - # of ratings visible (e.g., "4.2★ (23 votes)")
  - UX: Star icon clickable for rating; tooltip shows rating distribution (e.g., 15 5-stars, 8 4-stars)

- **F-09: Knowledge Library Flags**
  - Admins can flag solutions as "LOR Preferred Method" or "Case Study"
  - Flags visible as badges in search results and detail view
  - "Filter by Flags" option in search panel
  - UX: Gold badge for "LOR Preferred"; blue badge for "Case Study"

- **F-24: ESL Dashboard View**
  - Custom dashboard for Engineering Safety Leads
  - Shows: weekly/monthly summary, pending reviews, implementation status, aged item alerts
  - Summary includes: # new ideas, # approved, # in progress, # closed this period
  - Alerts section flags items >30 days without update (F-20)
  - Pending reviews widget shows count + oldest item age
  - Implementation status mini-table: idea name, assignee, due date, % progress
  - UX: 4-section layout; each section collapsible; drill-down links to filtered views

- **F-25: Leadership Dashboard View**
  - Custom dashboard for Project Leadership
  - Shows: pending reviews, implementation status, aged item alerts (same as ESL but summary-focused)
  - KPI cards: # new ideas (month), # pending approval, # closed (month), avg implementation time
  - Trend chart: ideas by sector/phase
  - Alerts: red for items >14 days escalated
  - UX: 4 KPI cards top (no scrolling), 2 charts below, 1 alerts section; all charts clickable drill-downs

- **F-26: Admin Dashboard View**
  - System health metrics: uptime, response time, # active users, data quality score
  - User activity log: logins, submissions, approvals, exports (sortable, filterable)
  - Data quality metrics: # incomplete submissions, # spam flags, # duplicates detected
  - Maintenance tasks: bulk import job status, export queue, scheduled backups
  - UX: Grid of metric cards with mini sparklines; logs in table with search/filter; expandable detail rows

#### 4.6 Integration & Data Management
- **F-04: PC1 Event Linking** (Should Have)
  - System can link safety ideas to PC1 incidents (from incident management system)
  - PC1 system can flag that ES solution needed; auto-populates link in ES platform
  - Read-only link visible in solution detail
  - UX: "Linked Incidents" section in detail view; shows incident ID, date, risk level

- **F-07: Support Contact Link**
  - "Contact Support" or "Request More Info" button on each solution
  - Opens form: user name, email, project, question/request
  - Sends email to support team + records in solution detail as "Contact Request"
  - UX: Button in detail view; form in modal; success message shows support response time SLA

#### 4.7 Mobile & Accessibility
- **NF-02: Time-Poor User Experience**
  - Form completion: <5 minutes target
  - Mobile layout optimized: 44px min touch targets, minimal scrolling
  - Progress indicator on multi-step forms
  - Keyboard shortcuts for power users (e.g., Ctrl+S save, Ctrl+Enter submit)
  - Voice input optional (for dictation of problem/solution)
  - UX: Single-column mobile layout, max 3–4 screens per form, large buttons, minimal vert. scroll

- **NF-03: Plain Language & Accessibility**
  - WCAG 2.1 AA standard compliance
  - No technical jargon; plain English throughout
  - Consistent terminology (define terms in help)
  - Font size: min 14px for body text, 18px for headings (mobile)
  - Color contrast: 4.5:1 minimum
  - All images have alt text; all form fields have labels
  - UX: Accessible font (Arial, Helvetica, or similar sans-serif); no color-only indicators

- **NF-04: Browser & Device Compatibility**
  - Desktop: Chrome, Firefox, Safari, Edge (latest 2 versions)
  - Mobile: iOS 12+, Android 8+
  - Responsive design: breakpoints at 320px, 768px, 1024px, 1440px
  - Kiosk mode: full-screen dashboard display for static displays
  - UX: Test on real devices; CSS Grid/Flexbox for responsive layout

---

## 5. UX REQUIREMENTS

### 5.1 Navigation & Information Architecture

```
Top-Level Navigation (Persistent Header)
├─ Logo + "Engineered Safety Platform" (links to home)
├─ Primary Nav Tabs:
│  ├─ [Home] → Dashboard (personalized per role)
│  ├─ [Submit Idea] → Submission form
│  ├─ [Search Library] → Search interface
│  ├─ [My Workspace] → Private project workspace (if user has created one)
│  └─ [Admin] → Admin panel (admins only)
├─ Secondary Items (right side):
│  ├─ Notifications bell (with red badge for count)
│  ├─ Help icon → FAQ, user manual, contact support
│  ├─ Settings icon → Profile, preferences, notification settings
│  └─ User avatar + name (hover for logout option)
└─ Search bar (persistent, all pages) with recent searches dropdown

Secondary Navigation (Context-Aware)
├─ Sidebar (desktop): Collapsible filter panel / contextual menu
├─ Breadcrumbs (all pages): Shows current location in hierarchy
├─ Footer: Links to privacy policy, terms, help, external resources
```

**UX Implications:**
- Logo clickable on all pages; takes to dashboard
- Notifications bell always visible; clicking shows notification list + mark as read
- Search bar autocomplete suggests: recent submissions, saved searches, popular terms
- Help icon has tooltip "Keyboard shortcuts, user manual, contact support"
- Settings accessible from user avatar dropdown

### 5.2 Interaction Patterns

#### 5.2.1 Form Design Pattern
- **Multi-step forms**: Progress bar at top showing step N/M; step titles above form
- **Single-page forms**: Sections collapsible; one section expanded per scroll position
- **Field layout**: Label above input (stacked for mobile, 2-col for desktop on longer forms)
- **Mandatory vs. Optional**: Required fields marked with red asterisk (*); optional marked with "(Optional)"
- **Input types**:
  - Text: Single-line for <50 chars, multi-line for >50 chars
  - Dropdowns: For <15 options; autocomplete dropdown for >15 options
  - Multi-select: Checkboxes for <8 options; chip-picker for >8 options
  - Date: Calendar picker with keyboard input fallback
  - File upload: Drag-and-drop zone + "or click to select" link
  - Rich text: Optional for longer descriptions; includes spell-check
- **Buttons**: 
  - Primary (filled): "Submit", "Save", "Approve" (blue)
  - Secondary (outline): "Save Draft", "Cancel" (gray)
  - Danger (red): "Reject", "Delete" (red)
  - Disabled state: Grayed out, cursor: not-allowed

#### 5.2.2 List & Table Patterns
- **Search Results List**:
  - Card layout on mobile, table on desktop
  - Per-row actions (primary action centered on card, secondary in menu)
  - Inline filtering (chips/badges above list)
  - Bulk actions: checkbox column, batch operations at bottom
  - Pagination: "Load More" button or numbered pages (show 50 items/page default)
  - Empty state: Icon + message + suggested action

- **Data Tables** (Admin, Leadership dashboards):
  - Sortable columns (click header to sort; arrow indicates direction)
  - Row striping (light gray alternate rows for readability)
  - Expandable rows for detail view (chevron icon)
  - Hover rows highlight (light blue background)
  - Sticky header (stays visible on scroll)
  - Sticky first column if table scrolls horizontally

#### 5.2.3 Modal & Overlay Patterns
- **Modal dialogs**:
  - Centered on desktop, full-screen on mobile
  - Backdrop darkens main content
  - Close button (X) in top-right corner
  - Title in modal header (bold, 16–18px)
  - Buttons in footer: Primary action right, secondary/cancel left
  - Escape key closes modal; confirm if unsaved changes

- **Detail View** (two options; pick one):
  - **Option A (Modal)**: Solution details in modal; search results visible behind (best for quick viewing)
  - **Option B (Separate Page)**: Solution details on new page; breadcrumb shows path; back button returns to results (best for deep exploration)
  - **Recommendation**: Use Modal for quick preview; Separate Page for admin editing

#### 5.2.4 Notification & Feedback Patterns
- **Toast notifications** (bottom-right corner, auto-dismiss after 5 seconds):
  - Success (green): "Idea submitted successfully"
  - Error (red): "Validation error: Please fill out all required fields"
  - Warning (orange): "This idea is similar to [Title]. Are you sure you want to continue?"
  - Info (blue): "Your draft was auto-saved"

- **In-page alerts** (banner at top of content area, requires dismissal):
  - System maintenance: "System scheduled maintenance Sunday 2am–4am"
  - Data quality warning: "This form has incomplete fields"
  - Success summary: "3 actions marked as closed. View impact report."

- **Inline validation**:
  - Field-level errors: Red text below field, red border on input
  - Form-level errors: Summary banner at top with jump-to-error links
  - Success: Green checkmark or subtle green border (no intrusive alert)

- **Loading states**:
  - Skeleton loaders: For cards, tables, or content sections (smoother than spinners)
  - Progress bars: For multi-step processes or file uploads
  - Spinners: For short operations (<3 sec)
  - Disabled buttons + spinner: During form submission

#### 5.2.5 State Management & Feedback
- **Submission states**:
  - Default: Clickable button
  - Loading: Spinner inside button, button disabled, text fades slightly
  - Success: Checkmark icon, button text → "Submitted ✓", disable for 2 sec
  - Error: Red border around button, error message below; button re-enabled

- **Status badges** (solutions & actions):
  - Submitted: Blue badge "Submitted"
  - Under Review: Orange badge "Under Review"
  - Approved: Green badge "Approved"
  - Rejected: Red badge "Rejected"
  - Closed: Gray badge "Closed"
  - Aged (30+ days no update): Red flash animation
  - Escalated: Red "Escalated ⚠" with tooltip

### 5.3 Accessibility Requirements (WCAG 2.1 AA)

- **Color**: 
  - Contrast ratio 4.5:1 for normal text, 3:1 for large text
  - Don't rely on color alone (use icons, labels, patterns)
  - Colorblind-safe palette (avoid red-green only distinction)

- **Typography**:
  - Font size min 14px (body), 18px (mobile)
  - Font family: sans-serif (Arial, Helvetica, Roboto, Inter)
  - Line height: 1.5 for body text
  - Letter spacing: at least 0.12em

- **Buttons & Links**:
  - Min size: 44×44px (touch target)
  - Keyboard accessible: Tab order logical, Enter/Space activates
  - Focus indicator: 3px outline, high-contrast color (usually blue)
  - Hover/Active states clearly visible

- **Forms**:
  - Every field has associated <label> (not just placeholder)
  - Error messages linked to fields with aria-describedby
  - Required fields marked with * AND aria-required
  - Form submit doesn't cause unexpected context change

- **Images & Icons**:
  - All images have alt text (descriptive, not "image" or "picture")
  - Icons paired with text labels or have aria-label
  - No information conveyed by image alone

- **Motion**:
  - Animations respect prefers-reduced-motion setting
  - No auto-playing videos or sounds
  - No flashing content (>3 flashes/sec)

- **Mobile**:
  - Viewport meta tag set: <meta name="viewport" content="width=device-width, initial-scale=1">
  - Touch targets min 44×44px
  - No horizontal scrolling required
  - Zoom not disabled (user-scalable=yes)

### 5.4 Responsive Design

#### Desktop (1024px–1440px+)
- Multi-column layouts: Sidebar + main content
- Full navigation header with dropdown menus
- Tables with full column widths
- Forms: 2–3 column layout where appropriate
- Search filters: Left sidebar (sticky)

#### Tablet (768px–1023px)
- Single-column with collapsible sidebar
- Hamburger menu for primary nav (or bottom nav bar)
- Cards in 2-column grid
- Forms: Single column, full width
- Tables: Horizontal scroll with sticky first column

#### Mobile (320px–767px)
- Full-width single-column layout
- Hamburger menu (icon top-left)
- Bottom navigation bar for primary actions
- Cards stacked vertically
- Forms: Full width, minimal scrolling
- Tables: Stacked card layout (label-value pairs)
- Buttons: Full width or side-by-side at 50% each

---

## 6. UI GUIDELINES (FOR AI DESIGN TOOLS)

### 6.1 Layout Patterns

#### 6.1.1 Homepage / Dashboard
```
[Header] Persistent navigation + logo + user menu
[Hero Section] (Desktop only) 
  - Large title: "Engineered Safety Platform"
  - Subtitle: "Capture, Track, and Scale Safety Innovations"
  - CTA buttons: "Submit New Idea" (primary), "Browse Solutions" (secondary)
[KPI Cards Section] (3–4 cards, desktop 4-col grid, mobile stacked)
  - Card 1: Total ideas submitted (number + trend arrow)
  - Card 2: Pending approvals (number + link to view)
  - Card 3: Implemented this month (number + % of submitted)
  - Card 4: My drafts (number + link to view)
[Chart Section] (Desktop: 2-col grid, mobile: full width)
  - Left: Horizontal bar chart (ideas by status)
  - Right: Pie/donut chart (ideas by sector)
[Quick Links Section] 
  - 3–4 cards with links: "Start New Submission", "View My Reviews", "Search Library", etc.
[Footer] Copyright, links, version
```

**AI Design Hint**: Dashboard = KPI cards top, charts middle, quick links bottom. Cards use subtle drop shadows; charts use muted colors (avoid red/green for colorblind users).

#### 6.1.2 Submission Form (Multi-Step)
```
[Progress Bar] Step 1/4 (visual indicator at top)
[Step Title] "Project & Context" (larger, bold text)
[Form Fields]
  - Project Name (dropdown, auto-populated)
  - Sector (dropdown, auto-populated, editable)
  - Location (text field, auto-populated, editable)
  - (Optional) Submitter Name (read-only, auto-filled)
[Form Footer - Sticky]
  - Left: "Save as Draft" button (secondary)
  - Right: "Next Step" button (primary) + "Cancel" link
[Spacing] Generous margin between fields (24px), sections (32px)
```

**AI Design Hint**: Multi-step forms use progress bar (top), step title, form fields (max 5 per screen), sticky footer. Use card background for form section. Spacing is key for readability.

#### 6.1.3 Search Results Layout
```
[Header]
  - Page title: "Search Engineered Safety Solutions"
  - Breadcrumb: Home > Search > [Current View]

[Search Interface - 2-column desktop, full-width mobile]
[Left Column - Sticky Sidebar]
  - Filter title: "Refine Results"
  - Search box: Text input with clear button
  - Filter groups (collapsible sections):
    * Sector (checkboxes or chips)
    * Project Phase (checkboxes)
    * Status (checkboxes)
    * Implementation Date (range slider)
    * FSR Category (searchable multi-select)
  - [Clear All Filters] button (at bottom)

[Right Column - Results Section]
  - Results header: "N results found" + sort dropdown
  - Sort options: Relevance, Newest, Oldest, Effectiveness (High to Low)
  - Grid/List toggle (icon buttons: grid | list)
  - Results grid: 
    * Desktop: 3-column grid (cards)
    * Tablet: 2-column grid
    * Mobile: 1 column (full width)
  - Each card includes:
    * Solution title (clickable, dark blue)
    * AI summary (gray, italics, 2 lines max)
    * Sector badge (colored)
    * Stars + rating count (gold stars, gray number)
    * Submitter name + date (small gray text)
    * [View Details] button (secondary, bottom-right)
  - Pagination: "Load More" button or numbered pages

[No Results State]
  - Icon: magnifying glass with empty folder
  - Message: "No solutions match your filters"
  - Suggestion: "Try removing some filters or adjusting your search"
  - Link: [Clear All Filters]
```

**AI Design Hint**: 2-column desktop (sidebar + results), left sidebar sticky, cards in grid, good spacing between cards. Color-code badges (sectors). Load results in real-time as filters change.

#### 6.1.4 Detail View (Solution)
```
[Option A: Modal Overlay - Recommended for quick browsing]
[Modal Header] 
  - Title: Solution name (dark blue, bold)
  - Close button (X, top-right)
  - Breadcrumb inside modal: Search Results > [Solution] (small gray text)
[Modal Body - Scrollable]
  - [Status Bar] Current workflow status (blue banner)
  - [Description Section]
    * Label: "Problem" (bold)
    * Text: Problem statement (full text, wraps)
    * Label: "Proposed Solution" (bold)
    * Text: Solution details (full text)
  - [Media Section] Images/videos inline (if attached)
    * Thumbnails in grid; click to expand
  - [Details Grid] 2-column (desktop), 1-column (mobile):
    * Sector tag
    * Status badge
    * Submitted by: Name + date
    * Linked FSRs: Chips/badges (clickable?)
    * Implementation Date (if approved)
    * Effectiveness Rating: Stars + count + mini bar chart of rating distribution
  - [Comments Section]
    * "Comments (N)" heading
    * Chronological thread of comments
    * "Add Comment" text area with submit button
  - [Action Buttons] (sticky footer or top of body)
    * [Save to Workspace] (secondary)
    * [Export as PDF] (secondary)
    * [Contact Support] (secondary, text link)
    * If user is reviewer: [Approve], [Request Clarification], [Reject] (contextual)
[Modal Footer] 
  - Close button (or click outside modal)

[Option B: Separate Page - Recommended for deep exploration]
[Navigation] Breadcrumb: Home > Search > [Solution]
[Back Button] "← Back to Results" (returns to search, preserves filters)
[Main Content]
  - (Same structure as Option A, but full-width, not constrained by modal)
[Right Sidebar] (Desktop only, sticky)
  - "Quick Actions" box:
    * [Save to Workspace]
    * [Export as PDF]
    * [Contact Support]
  - "Related Solutions" list:
    * Cards of similar solutions (by sector/FSR)
[Footer] Same as Option A
```

**AI Design Hint**: Either modal or separate page. Modal better for quick browsing; separate page better for detailed reading. Use tabs or sections for different content (Description, Details, Comments, Actions). Right-align action buttons in modal; sticky sidebar for actions on separate page.

#### 6.1.5 Approval Review Queue (ESL View)
```
[Header]
  - Page title: "My Reviews"
  - Subtitle: "Ideas awaiting your approval"
[Alerts Section] (if any overdue items)
  - Red banner: "N items are overdue. Review aged items"
  - Link: [View Aged Items]
[Filters/Sorting] (inline above list)
  - Filter: Status (dropdown: All / New / In Review / Pending Decision)
  - Filter: Sector (multi-select chips)
  - Sort: By Oldest First (default), By Newest, By Submitter
  - [Clear Filters] link
[Pending Reviews List] 
  - Table or card layout (cards on mobile)
  - Columns/Fields:
    * Idea title (dark blue, bold, clickable)
    * Submitter name (gray text)
    * Status badge (colored)
    * Days pending (right-aligned, red if >7)
    * Action dropdown menu (⋮ icon):
      - View Details (opens modal or page)
      - Request Clarification (opens comment form)
      - Approve & Forward
      - Reject
  - Row hover: Light blue background + show action buttons
[Empty State] (if no pending reviews)
  - Icon: Checkmark / empty inbox
  - Message: "No ideas pending your review"
  - CTA: [Browse All Ideas]
[Footer] (sticky)
  - Bulk actions (if rows selected):
    * [Approve Selected N] (primary)
    * [Request Clarification] (secondary)
```

**AI Design Hint**: Table with rows, each clickable for detail. Status badges use color coding (blue=new, orange=reviewing, green=approved). Days pending column shows red if overdue. Hover effects reveal action buttons. Sticky header + sticky footer for bulk actions.

#### 6.1.6 Action Tracking (Implementation View)
```
[Header]
  - Page title: "Implementation Actions"
  - Subtitle: "Track assigned actions and evidence of completion"
[Status Summary Tabs] (horizontal tabs)
  - All (N) | Not Started (N) | In Progress (N) | Pending Approval (N) | Closed (N)
[Alert Section] (if any overdue)
  - Red banner: "N actions are overdue"
[Actions List]
  - Table with columns:
    * Action title (linked to parent idea) + description (1 line)
    * Assigned to: Person name
    * Due date (color-coded: green on-track, yellow at-risk, red overdue)
    * Status badge (blue/orange/green/gray)
    * Progress bar (0–100%) if "In Progress"
    * Action menu (⋮): View Detail, Update Status, Add Evidence, Extend Deadline, Reassign
  - Rows striped (light gray alternate)
  - Sort options: By Due Date, By Assignee, By Status
  - Bulk actions: Select all + [Close Selected], [Extend Deadline], [Reassign]
[Empty State]
  - Icon: Checkmark
  - Message: "No pending actions"
  - CTA: [View Closed Actions] or [Submit New Idea]
```

**AI Design Hint**: Table layout, color-coded due dates, progress bars for in-progress items. Red for overdue, orange for at-risk. Dropdown menus for actions. Sticky header, sticky action footer if rows selected.

#### 6.1.7 Admin Panel (System Health & Configuration)
```
[Left Sidebar - Admin Nav]
  - Dashboard
  - Forms & Workflows
  - Users & Permissions
  - Data Management
  - System Health
  - Reports

[Main Content Area]
[Tabs or Sections] Depending on current view

Example: Dashboard view
[KPI Cards] 4-column grid
  - System Uptime (%)
  - Active Users (number)
  - Avg Response Time (ms)
  - Data Quality Score (%)
[Charts] 2-column grid
  - Left: Line chart (Daily submissions trend)
  - Right: Bar chart (Top 10 sectors by submissions)
[Recent Activity Log]
  - Table: User name | Action | Date | Status
  - Sortable, filterable
  - Pagination: Show 50 items/page
[Maintenance Tasks]
  - Card list:
    * Bulk Import Status (with progress bar)
    * PDF Export Queue (# pending)
    * Scheduled Backups (last run, next run)

Example: Forms & Workflows view
[Editable Form Builder]
  - Left panel: Available fields (drag-and-drop)
  - Center panel: Form preview (WYSIWYG editor)
  - Right panel: Field properties (editable in context)
  - Buttons: [Save], [Preview], [Publish], [Export]
[Workflow Configuration]
  - Visual flow diagram:
    * Nodes: Submitted > Review > Approval > Closed
    * Edges: Paths between nodes (can be conditional)
    * Click to edit each stage
  - Approval rules panel: Configure who approves at each stage
```

**AI Design Hint**: Admin panel uses darker sidebar (dark gray or navy) with light text. Main content uses cards and charts. Forms use drag-and-drop builder with preview. Workflows shown as visual diagrams. Confirmation dialogs before destructive actions.

### 6.2 Component Patterns

**NOTE: Use Laing O'Rourke Brand Colors per Visual Identity Guidelines**

| Component | Usage | Key Properties |
|-----------|-------|-----------------|
| **Card** | Wrapper for solution, action, metric | Drop shadow, light background (#f8f9fa or #f2f2f2), padding 16px, border-radius 8px |
| **Button** | Primary actions (Submit, Approve, Save) | Height 44px, padding 12px 24px, border-radius 4px, font-weight 600, use LOR Red (#e30613) for primary, Teal (#00a7b5) for secondary |
| **Input Field** | Text entry | Height 40px, padding 8px 12px, border 1px solid #cccccc, border-radius 4px, :focus outline 3px #00a7b5 (Laing O'Rourke Teal) |
| **Dropdown** | Multiple options | Same as input, chevron icon right side, dropdown menu position-absolute below input |
| **Multi-Select** | Multiple checkboxes or chips | Chips: background color, border 1px, padding 6px 12px, close button (×), wraps on overflow |
| **Badge/Tag** | Status, category labels | Inline-block, padding 4px 12px, border-radius 12px, font-size 12px, small font-weight |
| **Progress Bar** | Form completion, file upload, process | Height 4px, background #e0e0e0, filled portion #007bff, border-radius 2px |
| **Modal** | Detail views, forms | Position fixed, z-index 1000, backdrop background rgba(0,0,0,0.5), max-width 600px, border-radius 8px |
| **Toast** | Notifications | Position fixed, bottom-right, padding 16px, border-radius 4px, auto-dismiss 5s, z-index 1001 |
| **Breadcrumb** | Navigation path | Font-size 12px, gray text, separators / |
| **Avatar** | User profile | Width/height 32px, border-radius 50%, background color hash from name |
| **Star Rating** | Effectiveness, reviews | Size 20px, color gold (#ffc107), filled vs outline for rating |

### 6.3 Visual Hierarchy & Spacing

**Typography Hierarchy** (use consistently across all pages):

| Level | Size (Desktop) | Size (Mobile) | Weight | Usage |
|-------|---|---|---|---|
| H1 | 32px | 24px | Bold (700) | Page title |
| H2 | 24px | 20px | Bold (600) | Section title |
| H3 | 18px | 16px | Bold (600) | Subsection title |
| Label | 12px | 12px | Medium (500) | Form label, badge |
| Body | 14px | 14px | Regular (400) | Main text, paragraph |
| Small | 12px | 12px | Regular (400) | Helper text, caption |

**Spacing Scale** (use multiples of 8px):

```
Spacing: 8px, 16px, 24px, 32px, 48px, 64px

Within components:
- Inside button: Vertical 12px, Horizontal 24px
- Input field: Vertical 8px, Horizontal 12px
- Card: Padding 16px

Between components:
- Field to field: 16px
- Section to section: 32px
- Card to card: 16px
- Large section: 48px–64px
```

**Color Palette** (use consistently):

| Semantic | Color | Usage |
|----------|-------|-------|
| Primary | #007bff (Blue) | Links, primary buttons, active states |
| Success | #28a745 (Green) | Approved, success messages, positive actions |
| Error | #dc3545 (Red) | Rejected, errors, dangerous actions |
| Warning | #ffc107 (Amber/Gold) | At-risk, warnings, caution states |
| Info | #17a2b8 (Teal) | Info messages, links |
| Dark | #212529 (Dark Gray) | Body text, dark backgrounds |
| Light | #f8f9fa (Off-White) | Backgrounds, light panels |
| Border | #dee2e6 (Medium Gray) | Borders, dividers |

**Accessibility Color Notes:**
- Avoid red-green distinction alone
- Use patterns or icons to distinguish statuses
- Maintain 4.5:1 contrast for normal text

### 6.4 Tone & Style Direction

**Brand Voice**: 
- Professional but approachable (not corporate jargon-heavy)
- Clear and direct (action-oriented language)
- Encouraging (celebrate safety contributions)
- Inclusive (no exclusionary language; accessible to non-technical users)

**Microcopy Examples** (for AI design tool prompts):

| Context | Microcopy | Tone |
|---------|-----------|------|
| Submit button | "Share Your Safety Idea" | Encouraging, collaborative |
| Success message | "Great! Your idea has been shared. Here's what happens next…" | Celebratory, informative |
| Error message | "Please fill in the highlighted fields to continue." | Clear, helpful, not blaming |
| Empty state | "No ideas pending your review. Great job!" | Positive, motivating |
| Aged alert | "This item hasn't been updated in 30 days. Take action." | Urgent, actionable |
| Approval modal | "Are you ready to approve this safety solution?" | Confirmatory, respectful |
| Delegation button | "Assign to another reviewer" | Clear, inclusive |

**Typography & Visual Style**:
- Font: Clean sans-serif (Arial, Helvetica, Roboto, Inter)
- Icons: Outline-style (not filled) for controls; filled for status/badges
- Images: Real photos of safety practices (diverse teams, inclusive) over stock images
- Illustrations: Minimal, used for empty states and onboarding (not decorative)
- Animations: Smooth, subtle transitions (400ms cubic-bezier); respect prefers-reduced-motion

---

## 7. EDGE CASES & CONSTRAINTS

### 7.1 Error Scenarios

| Scenario | UX Response |
|----------|-------------|
| **Network timeout during form submission** | Toast: "Connection lost. Trying again…" + Retry button. Auto-save ensures no data loss. |
| **User loses session (timeout)** | Redirect to login with message: "Your session expired. Please log in again." On successful login, return to previous page. |
| **Form validation fails on submit** | Error banner at top with summary. Scroll to first error. Red highlighting on fields. Clear error text. |
| **Duplicate submission detected** | Modal shows "Similar solution exists" with side-by-side comparison. User chooses: [Merge], [Modify & Submit], or [Cancel]. |
| **File upload fails** | Toast: "[Filename] failed to upload. Supported formats: [list]." Remove failed file from queue. |
| **Workflow transition invalid** | Toast: "Cannot move to this status. Current state: [X]. Allowed transitions: [Y, Z]." |
| **Access denied** | Modal: "You don't have permission to access this. Contact your admin if you believe this is an error." |
| **Data import errors (bulk)** | Show error report table: Row # | Issue | Action Required. Allow user to fix + re-upload. |
| **Search timeout** | Toast: "Search taking longer than expected. Simplify filters and try again." + Timeout message. |
| **Database connection loss** | Red banner: "System offline. Data will sync when connection restored." Disable write operations; allow read. |

### 7.2 Empty States

| State | Message | Icon | CTA |
|-------|---------|------|-----|
| **No pending reviews** | "All caught up! No reviews pending." | ✓ Checkmark | [Browse All Ideas] |
| **No search results** | "No solutions match your filters." | 🔍 Magnifying glass | [Clear Filters] |
| **No approved solutions** | "No approved solutions yet. Check back soon." | 📋 Clipboard | [Submit New Idea] |
| **No drafts saved** | "No drafts. Start a new submission." | 📝 Document | [Submit New Idea] |
| **Empty workspace** | "No solutions in your workspace. Add some from the library." | 🏠 Home | [Browse Library] |
| **No comments** | "No comments yet. Be the first to add one!" | 💬 Speech bubble | [Add Comment] |
| **No actions assigned** | "No pending actions. All implementation on track!" | ✓ Checkmark | [View Closed] |
| **No notifications** | "You're all caught up!" | 🔔 Bell | [Go to Dashboard] |

### 7.3 Performance Constraints

| Constraint | Target | Approach |
|-----------|--------|----------|
| **Homepage load** | <2 seconds | Lazy-load charts; skeleton loaders for KPI cards; CDN for static assets |
| **Search results** | <2 seconds | Server-side filtering (not client); indexed database; pagination (50 items/page) |
| **Modal open** | <500ms | Pre-fetch on hover; minimal animation |
| **Form auto-save** | <1 second | Debounce input (500ms before saving); silent save (no notification) |
| **PDF export** | <10 seconds | Queue on server; notify user via email when ready; no blocking UI |
| **Concurrent users** | 200+ supported | Horizontal scaling; CDN caching; API rate limiting |
| **Database uptime** | 99.5% | Managed database (AWS RDS, Azure SQL); multi-region failover |

### 7.4 Security & Compliance Constraints

| Constraint | UX Impact | Approach |
|-----------|-----------|----------|
| **SSO authentication** | Redirect to SSO login page; return to app after auth | Seamless for users within organization; public users see login page |
| **Role-based access** | Buttons/views hidden for unauthorized roles | Graceful degradation; no 403 errors for read operations; clear message for writes |
| **Data encryption** | Transparent to user; slight latency on load/save | Handle backend; no visible impact |
| **GDPR data requests** | Right to access/erasure forms in settings | Forms in user settings; admin approval required; async processing + email notification |
| **Audit trails** | Displayed in admin logs; version history in detail view | Users don't need to think about it; available if needed |
| **Multi-tenancy** | External users see only published items | Navigation hidden; search filtered; "published" badge shown on items |
| **IP restrictions** | VPN warning on login if outside allowed IP | Show banner: "You're accessing from an unusual location. Contact IT if this is unexpected." |

---

## 8. SUCCESS METRICS

### 8.1 UX KPIs

| Metric | Target | How Measured | Owner |
|--------|--------|--------------|-------|
| **Task Completion Rate** | >95% | % of users successfully submitting ideas without errors | Product Analytics |
| **Form Completion Time** | <5 min | Average time from form open to submit (exclude drafts) | Product Analytics |
| **Search Success Rate** | >90% | % of searches returning results satisfying user intent (user feedback post-search) | User Research |
| **Time to Find Solution** | <3 min | Avg time from "Search Library" click to opening detail view | Product Analytics |
| **Approval Workflow SLA** | <48 hrs (avg) | Avg time from submission to first reviewer response | Business Analytics |
| **Mobile Usability** | >4/5 | SUS score on mobile devices (quarterly survey) | User Research |
| **Accessibility Compliance** | 100% | WCAG 2.1 AA audit results (annual) | QA / Compliance |
| **Search Relevance** | >4/5 | User rating of search result relevance (post-search survey) | User Research |
| **Dashboard Load Time** | <2 sec | 95th percentile page load time (via RUM) | Performance Team |
| **Error Recovery Time** | <1 min | Avg time from error to successful recovery (e.g., resubmit form) | User Research |

### 8.2 Business KPIs Tied to UX

| Metric | Target | How Measured | Owner | UX Driver |
|--------|--------|--------------|-------|-----------|
| **Monthly Active Users** | 500+ | # unique users per month | Product Manager | Dashboard visibility, ease of access |
| **Submissions/Month** | 100+ ideas | Total submissions logged | Safety Lead | Form simplicity, mobile accessibility |
| **Approval Rate** | >75% submitted ideas | % of submitted ideas moving to "Approved" | ESL | Clear workflow visibility, reviewer tools |
| **Implementation Rate** | >80% of approved | % of approved ideas implemented within 6 months | Safety Lead | Action tracking, progress visibility |
| **Effectiveness Ratings** | >4/5 stars (avg) | Avg star rating from implemented solutions | Product Manager | Rating UX (ease of rating) |
| **Reuse Rate** | >30% of ideas | % of approved ideas found via search and reused | Design Team | Search quality, filtering, relevance |
| **Knowledge Base Growth** | +50 solutions/month | Approved solutions added to knowledge base | Admin | Export/publication workflows |
| **Workforce Engagement** | >50% participation | % of active users who have submitted ≥1 idea | Safety Lead | Form accessibility, mobile support |
| **Design Kickoff Adoption** | >80% of projects | % of new projects referencing platform solutions | Design Manager | Search, filtering, export for design docs |
| **Time Savings** | 5 hrs/month/user | Estimated time saved by reusing approved solutions | Safety Lead | Search speed, export features |

---

## 9. EXAMPLE SCREEN DESCRIPTIONS (FOR AI DESIGN TOOL PROMPTS)

### Screen 1: Homepage / Dashboard
```
Title: Engineered Safety Platform Dashboard

Layout:
- Header: Logo (left), Primary Nav (Home, Submit, Search, Admin), 
  Notification Bell (right), User Avatar (right)
- Hero Section (desktop only, 10% of viewport height):
  - Background: Subtle gradient (light blue to white)
  - Centered text: "Engineered Safety Platform"
  - Subtitle: "Capture, Track, and Scale Safety Innovations"
  - 2 buttons below: [Submit New Idea] (blue), [Browse Solutions] (gray)
  
- KPI Cards Section (4-column grid, desktop; 2-col tablet; 1-col mobile):
  - Card 1: "Total Submitted" | Number (e.g., "247") | Trend arrow (+12%)
  - Card 2: "Pending Reviews" | Number (e.g., "8") | "View Now" link
  - Card 3: "Approved This Month" | Number (e.g., "12") | Trend arrow (+8%)
  - Card 4: "My Drafts" | Number (e.g., "3") | "View Drafts" link
  
- Charts Section (2-column grid, desktop; 1-col mobile):
  - Chart 1: "Ideas by Status" (horizontal bar chart)
    Bars: Submitted (blue) | Under Review (orange) | Approved (green) | Rejected (red)
  - Chart 2: "Ideas by Sector" (pie/donut chart)
    Slices: Road | Rail | Defence | Other (different colors)

- Quick Actions Cards (horizontal scrollable, 3–4 cards):
  - Card: [Submit New Idea] icon + text + arrow
  - Card: [View My Reviews] icon + text + arrow
  - Card: [Search Library] icon + text + arrow
  - Card: [Implementation Status] icon + text + arrow

- Footer: Copyright, Privacy, Help, Version
```

### Screen 2: Submission Form – Step 1 (Project & Context)
```
Title: Submit a Safety Idea – Step 1 of 4

Layout:
- Header: Progress bar showing "Step 1/4" (blue fill at 25%)
- Step title: "Project & Context" (H2, bold)
- Form section (white card, light shadow):
  - Label: "Project Name *" (bold, red asterisk)
    Input: Dropdown (populated from user's projects)
    Value shown: "Highway A1 Expansion"
    Helper text: "(Auto-populated from your profile)"
    
  - Label: "Sector *" (bold)
    Input: Dropdown (Sector options)
    Value: "Road" (selected, editable)
    Helper text: "(Auto-populated based on project)"
    
  - Label: "Location *" (bold)
    Input: Text field
    Value: "London, UK" (auto-populated)
    Helper text: "(Edit if different)"
    
  - Label: "Submitter Name (Read-Only)"
    Input: Text field (disabled/grayed)
    Value: "John Smith"
    Helper text: "(Your name from your profile)"

- Sticky Footer (bottom of screen):
  - Left: [Save as Draft] button (secondary, gray outline)
  - Right: [Next Step] button (primary, blue fill) | [Cancel] link (gray text)

- Accessibility: 
  - All fields have red asterisk for mandatory
  - Focus indicators (blue outline on inputs)
  - Form fits within viewport; minimal scrolling on mobile
```

### Screen 3: Search Results – Solutions Library
```
Title: Browse Engineered Safety Solutions

Layout:
- Header: "Search Engineered Safety Solutions"
- Breadcrumb: Home > Search

- 2-Column Layout (desktop), 1-column (mobile):

[Left Sidebar – Filter Panel]
- Title: "Refine Results"
- Search box: Text input + Clear button
- Collapsible filter groups:
  - "Sector" (expanded)
    Checkboxes: Road | Rail | Defence | Other
  - "Status" (expanded)
    Checkboxes: Approved | In Review | Case Study | LOR Preferred
  - "Phase" (expanded)
    Checkboxes: Design | Tender | Construction | Post-Implementation
  - "Implementation Date" (collapsed)
    Range slider: Month/Year inputs
  - "FSR Category" (collapsed)
    Searchable dropdown with multi-select chips
- [Clear All Filters] button (bottom, secondary)

[Right Section – Results]
- Results header: "23 solutions found" + Sort dropdown ("Relevance")
- Grid toggle icons: [Grid view] | [List view]
- Results grid (3-column, desktop; 2-col tablet; 1-col mobile):
  
  Each card shows:
  - Image thumbnail (if exists, top; else colored placeholder)
  - Solution title (dark blue, bold, clickable, 2 lines max)
  - AI summary (gray italics, 1 line): "Lightweight barrier system reducing worker fall risk by 40%"
  - Meta row: Sector badge (colored) | Status badge (green) | Stars (4.2★ 23)
  - Footer: Submitter name | Date (small gray) | [View Details] button (secondary)
  
- Pagination: "Load More" button or "Showing 1–50 of 215"

- Empty state (if no results):
  - Icon: Magnifying glass + empty folder (gray, 64px)
  - Message (H3): "No solutions match your filters"
  - Suggestion text: "Try removing some filters or adjusting your search"
  - [Clear All Filters] button
```

### Screen 4: Solution Detail View (Modal)
```
Title: Safety Idea Detail

Layout (Modal, 600px max-width, centered):
- Modal header (sticky):
  - Solution title (H2, dark blue): "Modular Fall Prevention Barriers"
  - Close button (X, top-right)
  - Breadcrumb (small): Home > Search > Solution
  - Status bar (blue banner): "Approved" badge

- Modal body (scrollable):
  - Status timeline (vertical, 3px line):
    ✓ Submitted (May 15) | Under Review (May 18–22) | Approved (May 23)
    
  - Problem section:
    Label (bold): "Problem"
    Text: "Workers on elevated platforms at risk of fall from <1.5m. Current barriers require significant setup time."
    
  - Solution section:
    Label (bold): "Proposed Solution"
    Text: "Lightweight, modular barrier system with quick-clip connectors. Can be deployed in <5 minutes."
    
  - Media gallery (if images/videos):
    4 thumbnail images in 2×2 grid (click to expand)
    
  - Details grid (2-column, desktop; 1-col mobile):
    - Sector: "Road" (blue badge)
    - Status: "Approved" (green badge)
    - Submitted by: "Sarah Johnson" on "May 15, 2024"
    - Linked FSRs: [FSR-2024-001] [FSR-2024-005] (gray chips)
    - Implementation Date: "June 1, 2024"
    - Effectiveness Rating: "4.2★" (gold stars) + "23 ratings" (clickable, shows distribution)
    
  - Comments section:
    H3: "Comments (4)"
    Comment 1:
      Avatar: User initials
      Name: "Michael Chen"
      Date: "May 23, 2024"
      Text: "Great solution! We're implementing this on the North site."
      Reply button (small)
    Comment 2: [nested under comment 1]
    [Add Comment] button opens text area
    
- Modal footer (sticky):
  - [Save to Workspace] button (secondary)
  - [Export as PDF] button (secondary)
  - [Contact Support] button (secondary, text link)
```

---

## 10. ASSUMPTIONS & CLARIFICATIONS

### Assumptions Made

1. **Target Audience**: Primarily UK-based (per NF-05 UK Alignment), English-speaking workforce and engineering/leadership teams.

2. **Technology Stack**: Web-first, with native mobile app (iOS/Android) developed separately. Web version is responsive; mobile app handles offline capability.

3. **Data Ownership**: All safety ideas, solutions, and implementation data owned by organization (LOR). External users have read-only access to published items.

4. **Workflow States**: Assumes linear approval path (Submitted → Review → Leadership Decision → Approved/Rejected). Rejected items do not re-enter workflow unless resubmitted.

5. **AI Integration**: LLM (Claude, ChatGPT, or Gemini) used for summaries (F-30) and deduplication (F-31). Calls made asynchronously; costs managed by org. Deduplication threshold (80%) is configurable.

6. **Mobile-First Context**: Form submissions happen in time-poor, mobile-first environments (site, kiosk). Desktop used for review, search, analysis. App must support offline draft saving.

7. **Notification Delivery**: Assumes email + in-app notification channels. SMS optional (per F-21). Email assumed preferred for compliance/audit trail.

8. **Search Scope**: Search includes all published solutions. Internal/draft solutions hidden from external users. Search indexed and updated nightly (not real-time indexing).

9. **Permissions Model**: 
   - **Workforce/Field**: Submit ideas, comment, rate, view approved library
   - **Project Teams**: Submit + review/approve ideas, track actions
   - **ESL**: Review, approve, track implementation, view dashboards
   - **Leadership**: Approve/reject, view dashboards, make strategic decisions
   - **Design Teams**: Search, filter, export, reuse solutions
   - **Admins**: Full system access, configuration, user management, bulk import

10. **Data Retention**: 7-year retention (per S-02, D-02). Archival: old project data moved to read-only archive after 2 years of inactivity.

### Questions for Clarification

1. **Detail View**: Should it be modal (quick preview) or separate page (deep exploration)? 
   - **Recommendation**: Use modal for search results; separate page for admin/review contexts.

2. **Notification Channels**: Besides email and in-app, is SMS a must-have or nice-to-have?
   - **Recommendation**: Email + in-app mandatory. SMS optional for escalations only.

3. **Effectiveness Rating Timing**: When can users rate a solution? Only after implementation, or anytime?
   - **Recommendation**: After implementation complete and action closed. Prevents premature ratings.

4. **Bulk Actions**: Should bulk operations (approve, reject, close) require individual confirmation or batch confirmation?
   - **Recommendation**: Batch confirmation with summary ("Approve 5 ideas?") to prevent accidents.

5. **Workspace Sharing**: Should project workspaces be share-able with external teams (e.g., contractors)?
   - **Recommendation**: Internal teams only. External access limited to published library.

6. **Draft Recovery**: If user closes browser without saving draft, should draft recover automatically or require manual recovery?
   - **Recommendation**: Auto-save every 30 sec; auto-restore on next login with banner: "You have unsaved draft(s). [Resume] or [Discard]".

7. **Form Customization**: Should forms be customizable per project/sector, or one standard form for all?
   - **Recommendation**: Standard form initially; T-03 allows admins to customize via admin panel later.

---

## 11. APPENDIX: AI DESIGN TOOL PROMPT EXAMPLES

### Prompt 1: Generate Homepage Dashboard
```
Create a dashboard homepage for an Engineered Safety Platform. 

Layout:
- Header with logo, primary nav (Home, Submit, Search, Admin), notifications, user menu
- Hero section (desktop only): Title "Engineered Safety Platform", subtitle, 2 CTAs [Submit Idea], [Browse Solutions]
- 4 KPI cards in grid (4-col desktop, 2-col tablet, 1-col mobile): 
  - Total Submitted, Pending Reviews, Approved This Month, My Drafts
- 2 charts (2-col grid): Ideas by Status (horizontal bars) and Ideas by Sector (pie)
- Quick actions: 4 cards linking to Submit, Reviews, Search, Tracking
- Footer: Copyright, links, version

Design:
- Color scheme: Primary blue (#007bff), success green (#28a745), warning amber (#ffc107), light background (#f8f9fa)
- Typography: H1 32px, H2 24px, body 14px, sans-serif
- Spacing: 16px/24px/32px margins
- Accessibility: WCAG 2.1 AA, contrast 4.5:1, large touch targets (44px min)
- Tone: Professional, encouraging, clear
- Responsive: Mobile-first, test at 320px, 768px, 1024px breakpoints

Include skeleton loaders for KPI cards, smooth transitions on chart interactions, hover effects on action cards.
```

### Prompt 2: Generate Submission Form (Multi-Step)
```
Create a 4-step form for submitting engineered safety ideas.

Steps:
1. Project & Context: Project Name (dropdown), Sector (dropdown), Location (text)
2. Idea Description: Problem (textarea), Proposed Solution (textarea), Attachments (drag-drop)
3. Links & Context: Linked FSRs (multi-select), Linked PC1 Incidents (optional), Tags
4. Review & Submit: Summary of all fields (read-only), spell-check indicator, Submit button

Features:
- Progress bar at top (Step X/4)
- Auto-population from user profile (editable)
- Auto-spell-check on all text fields (no blocking)
- Validation on blur for required fields
- "Save as Draft" button always visible (sticky footer)
- Form fit mobile screen: 3–4 sections max per screen
- Max 5 fields visible per scroll on mobile
- Large buttons (44px height)
- Keyboard shortcuts (Ctrl+S save, Ctrl+Enter submit)
- Auto-save draft every 30 seconds
- Error banner at top if validation fails

Design:
- Light background card, generous spacing (24px between fields, 32px between sections)
- Required fields: red asterisk
- Optional fields: gray "(Optional)" text
- Buttons: Primary (blue fill) | Secondary (gray outline) | Danger (red fill)
- Focus states: 3px blue outline
- Mobile: Single column, full width
- Desktop: Form width 600px, centered
```

### Prompt 3: Generate Search Results Page
```
Create a search results page for browsing engineered safety solutions.

Layout:
- Header: Title, breadcrumb
- 2-column (desktop), 1-column (mobile):
  
  LEFT SIDEBAR (sticky):
  - Title: "Refine Results"
  - Search box (text input + clear)
  - Filter groups (collapsible):
    * Sector (checkboxes)
    * Status (checkboxes)
    * Phase (checkboxes)
    * Implementation Date (range slider)
    * FSR Category (searchable dropdown)
  - [Clear All Filters] button
  
  RIGHT SECTION:
  - Results header: "23 solutions found" + Sort dropdown
  - Grid toggle (grid | list icons)
  - Solution cards grid (3-col desktop, 2-col tablet, 1-col mobile):
    * Each card: image | title | AI summary | sector badge | status badge | rating (stars) | footer (submitter, date) | [View Details] button
  - Pagination: "Load More" or numbered pages
  
- Empty state: Icon, message, [Clear Filters] CTA

Features:
- Real-time filter updates (no refresh button needed)
- Current filters shown as removable chips
- Search results load in <2 seconds
- Responsive grid layout
- Accessible sorting (keyboard navigable)
- Colorblind-safe badges (use patterns, not color alone)

Design:
- Light background, white cards
- Sector badges: Different colors for each sector
- Status badges: Green (Approved), Orange (In Review), Blue (New)
- Rating stars: Gold color (#ffc107)
- Hover effects: Card shadow increases, button appears
- Mobile: Single column cards, filters collapsible at top
```

---

**End of UX Design Requirements Document v1.0**

Generated: April 29, 2026
For: Engineered Safety Platform
Audience: Product Designers, AI Design Tools, Front-End Developers
