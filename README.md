# KraftAI# KraftAI — React Edition (Environment Setup & README)

> **Objective**: Prepare a **secure** React environment for **KraftAI** (the upgraded name for your AI-driven recipes app), ensuring “hip AI developer” best practices and a **parallel** deployment that keeps your original site at `symbolkraft.com/DIY_Recipes` intact. The ultimate goal is **vibecoding**—a smooth, creative AI-assisted workflow.

---
## Overview

We are **not** performing the full “react upgrade” here—only **setting up** the environment (environment variables for Supabase, a new README, and references to **KraftAI**). In a **new chat**, you will follow your strict GitHub workflow to do the incremental React upgrade.

Why **KraftAI**?

- “Kraft” implies skill, creativity, or artistry.
- “AI” underscores the modern, intelligent aspect of the app.
- Combined, **KraftAI** feels concise, catchy, and forward-thinking.

---
## 1. Create the React Environment

1. **Initialize** (if not already done):

   npx create-react-app KraftAI  
   cd KraftAI  
   npm install @supabase/supabase-js

2. **Add** a file named `.env.local` in the **root** of this folder (ignored by Git):

   REACT_APP_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co  
   REACT_APP_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

   Make sure `.env.local` is listed in `.gitignore` so you never commit real keys.

3. **Reference** them in `src/supabaseClient.js` (no real keys in public code):

   import { createClient } from '@supabase/supabase-js';
   
   const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;  
   const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;  
   export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

4. **Test** locally:

   npm start

   By default, the dev server runs at http://localhost:3000. Environment variables are injected at build time.

---
## 2. Parallel Deployment (No Downtime)

1. **Old Site**: Remains at `symbolkraft.com/DIY_Recipes`.  
2. **New React Build** (KraftAI):

   npm run build

   Upload the resulting build folder to `symbolkraft.com/kraftai` (or a subdomain like `kraftai.symbolkraft.com`).

3. **Zero downtime** or risk to your existing site.  
4. **Optional**: Link from `symbolkraft.com/DIY_Recipes` to `symbolkraft.com/kraftai` if you want user testing or feedback.

---
## 3. Strict ChatGPT Workflow (From Your GitHub README)

When you do the “react upgrade,” you will open a **new** chat session and follow these steps:

1. Determine which file needs editing first.  
2. Prompt user to select that file in VS Code.  
3. After user confirms, provide a patch snippet referencing correct file lines in “Review/Revert” style.  
4. Wait for user confirmation or changes.  
5. Apply the patch with oboe.edit_file once user confirms.  
6. Prompt for next step.

### If oboe.edit_file Is Not Available
- **Default** to providing entire production-ready files** with **no** placeholders or snippets.  
- This ensures you can copy/paste them directly into your editor without confusion.

### Inline Comments & README Updates
- Insert short reminders in your code, for example:
  // This uses environment variables for Supabase  
  // Keep real keys out of public code

- Reference or update this **README** (and code comments) to keep the AI on track and following your workflow—even if chats restart.

### No Major Overwrites
- If a large refactor is needed, ChatGPT must ask for explicit permission.

---
## 4. “Master Prompt” for the Upgrade Chat

When you start the new chat to do the “react upgrade,” paste this:

BEGIN PROMPT

You are ChatGPT, assisting with the React version of DIY_Recipes (now called KraftAI).  
We must preserve the user’s strict 6-step workflow from their GitHub README:  
1) Determine which file to edit first  
2) Prompt user to select it in VS Code  
3) Provide patch snippet in “Review/Revert” style  
4) Wait for user confirmation or changes  
5) Apply patch with oboe.edit_file once user confirms  
6) Prompt for next step  

If oboe.edit_file is unavailable, default to providing entire production-ready files with no placeholders or snippets.

We also store Supabase keys in environment variables (no real keys in public code), deploy in parallel so the old site remains at symbolkraft.com/DIY_Recipes, and we update this README/comments to keep the AI on track and following the workflow. The user’s goal is vibecoding.

END PROMPT

This ensures ChatGPT references your environment-based security, parallel approach, fallback instructions if oboe.edit_file is unavailable, and the 6-step workflow—while using **KraftAI** as your new name.

---
## Conclusion

By placing this **README** in your **KraftAI** folder (root of your React project) and using .env.local for real keys, you have:

1. A **secure** approach (no real keys in public code).  
2. A **parallel** deployment plan (old site at `symbolkraft.com/DIY_Recipes`, new site at `symbolkraft.com/kraftai`).  
3. A **strict** ChatGPT workflow referencing your GitHub instructions, with a fallback to full production-ready files if oboe.edit_file is not available.  
4. A clear method to **update** this README and code comments to keep the AI aligned with your workflow across chats.  
5. The updated name **KraftAI**, reflecting a modern, skillful brand.  
6. The ultimate goal: **vibecoding**—smooth, creative synergy with AI.

**Next**: In a new ChatGPT session, paste the “master prompt,” begin the incremental “react upgrade,” and enjoy vibecoding with **KraftAI**!