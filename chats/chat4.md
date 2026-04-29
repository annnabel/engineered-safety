# Idea Workflow Design

_Started 2026-04-29 06:35 UTC_

---

## User

Submit Idea / My Reviews should be part of the same workflow
add an option for the drop down to select who the user is 
If project team member → idea submission page
Engineered Safety Lead → ESL review page
Project Leadership → Project Leadership review page
3 steps.
Workflow: Idea submission → ESL review if approved then escalated, if not, returns to submitter with feedback → Project leader review. if approved then implemented, if not, returns to submitter and ESL with feedback → Implementation

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: update_todos]_

Now I have a complete picture. Here's my plan:

1. **App.jsx** — add a role-picker landing (dropdown), role-aware nav, workflow banner
2. **components.jsx** — Header accepts role-based nav + role switcher  
3. **Dashboards.jsx** — ESL gets "Return with Feedback" flow; Leadership gets a pending-approval queue + same feedback flow

_[tool: write_file]_

_[tool: str_replace_edit]_

Now update the Header to use role-based nav:

_[tool: str_replace_edit]_

Now update Dashboards.jsx — add `FeedbackModal`, update ESL reject flow, and add a Leadership pending-approval queue:

_[tool: str_replace_edit]_

Now update the ESL modal's action buttons and wire up the feedback modal:

_[tool: str_replace_edit]_

Now update the `IdeaDetailModal` signature and the `ESLDashboard` to wire up the feedback modal:

_[tool: str_replace_edit]_

Now update the table row actions and modal call site, and add the FeedbackModal render:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add the Leadership pending-approval queue. I'll add it right before the KPI cards in `LeadershipDashboard`:

_[tool: str_replace_edit]_

Now inject the pending-approval queue into the Leadership dashboard layout, and wire up the feedback modal:

_[tool: str_replace_edit]_

Now close out the Leadership component — remove the old `drilldown` state and add the FeedbackModal render at the bottom:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

The workflow is now fully connected. Here's what changed:

**Role Picker** — A landing screen appears on load with a dropdown: *Project Team Member*, *Engineered Safety Lead*, or *Project Leadership*. Selecting one shows a description chip and routes you straight to the right view.

**Workflow Banner** — A persistent 4-step indicator sits below the header (Idea Submission → ESL Review → Leadership Approval → Implementation), highlighting your current step based on role.

**Role-based nav** — Each role only sees the nav items relevant to them. The avatar menu shows your current role and a "Switch Role" option to return to the picker.

**ESL Review** — "Reject" is replaced by **↩ Return with Feedback** (both in the detail modal and the table row). Opens a modal that captures written feedback, then notifies the submitter.

**Leadership Approvals** — The Reports page now opens with a **Pending Your Approval** queue showing ideas forwarded by ESL. Each card has:
- **Approve for Implementation ✓** — moves to implemented, notifies team
- **↩ Return with Feedback** — opens the feedback modal which explicitly routes back to *both* the submitter and the ESL

## User

Verifier agent check completed

## Assistant

All clear — verifier confirmed everything renders and works correctly. The workflow is live and ready to use.

