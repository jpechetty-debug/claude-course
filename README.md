# Claude Code Mastery: Zero to Production AI Engineer
## Flagship LMS Platform & Course Architecture

Welcome to the complete repository for the **Claude Code Mastery** flagship curriculum and its companion production LMS web platforms.

---

## 🌐 Running the LMS Platforms Locally

### Platform 1: Full-Stack Django LMS Platform ([`lms_platform/`](./lms_platform/))
The complete learning management system with student progress tracking, interactive quiz runner, markdown lesson viewer, prompt playground, and UUID-backed certificate verification.

```bash
# 1. Navigate to the LMS platform directory
cd lms_platform

# 2. Install dependencies
pip install -r requirements.txt

# 3. Apply database migrations & seed demo environment
python manage.py migrate
python manage.py load_curriculum --clear
python manage.py seed_demo_data

# 4. Start the server
python manage.py runserver 0.0.0.0:8000
```

#### 🔑 Live Demo Credentials & Routes:
- **Dashboard:** [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- **Demo User:** `demoadmin` / `DemoPassword123!`
- **Interactive Lesson Reader:** [http://127.0.0.1:8000/lesson/1/](http://127.0.0.1:8000/lesson/1/)
- **Prompt Playground:** [http://127.0.0.1:8000/prompt-playground/](http://127.0.0.1:8000/prompt-playground/)
- **Verifiable Certificate:** [http://127.0.0.1:8000/verify/11111111-2222-3333-4444-555555555555/](http://127.0.0.1:8000/verify/11111111-2222-3333-4444-555555555555/)

---

### Platform 2: React + Vite Curriculum Dashboard ([`zip_extracted/`](./zip_extracted/))
Visual interactive explorer for the 50 Labs, 30 Capstones, 20 Gap Analysis, and 8-Module Syllabus.

```bash
cd zip_extracted
npm install
npm run dev
```
Open **[http://localhost:3000/](http://localhost:3000/)** in your browser.

---

## 📁 Repository Structure

```
d:\LMS\claude-course\
├── curriculum/                                  # Structured modular Markdown curriculum
│   ├── structure.json                           # Master course manifest (Phases & Weeks)
│   ├── week1/ ... week10/                       # Day-by-day lesson markdown & assessments
├── lms_platform/                                # Full-stack Django LMS Application
│   ├── courses/                                 # Course models, views, quiz runner, & certs
│   ├── templates/                               # Modern Tailwind CSS LMS UI templates
│   ├── manage.py                                # CLI management commands (seed_demo_data)
│   └── requirements.txt                         # Python dependencies
├── 01_Curriculum_Audit_and_Gap_Analysis.md      # 4D quality audit & 20 enterprise gap resolutions
├── 02_Course_Blueprint_and_Syllabus.md          # 60-day day-by-day syllabus & 4 skill tiers
├── 03_Hands_On_Labs_Catalog_50.md               # 50 standalone production hands-on labs
├── 04_Capstone_Projects_Catalog_30.md           # 30 industry capstones across 4 skill tiers
├── 05_LMS_Production_and_Certification_Framework.md # 5 complete flagship lesson packages & certs
├── Claude_Code_Mastery_Flagship_Curriculum.md   # Master deliverable index
├── scripts/                                     # Single source of truth sync scripts
│   ├── master_data.js                           # Canonical curriculum data model
│   └── generate_curriculum.js                   # Automated generation script
└── zip_extracted/                               # React + Vite interactive curriculum dashboard
```
