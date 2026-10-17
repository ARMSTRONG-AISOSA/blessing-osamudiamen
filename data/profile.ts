/**
 * ============================================================
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ============================================================
 *  Content from Blessing Osamudiamen's CV and case-study PDFs.
 *  Privacy: no age, address, nationality or CGPA is shown anywhere.
 *  Every page and component reads from here — no JSX edits needed.
 * ============================================================
 */

export type Category = "Financial Modeling" | "Data & Analytics" | "Accounting & Audit";
export const CATEGORIES: ("All" | Category)[] = ["All", "Financial Modeling", "Data & Analytics", "Accounting & Audit"];

/* ---------- SITE / CONTACT / SEO ---------- */
export const site = {
  name: "Blessing Osamudiamen",
  initials: "BO",
  jobTitle: "Chartered Accountant & Financial Analyst",
  url: "https://blessing-osamudiamen.vercel.app", // live site on Vercel — used for canonical, OpenGraph, sitemap, JSON-LD
  email: "blessingosariemen75@gmail.com",
  phone: "+234 815 362 9437",
  phoneHref: "tel:+2348153629437",
  whatsappHref: "https://wa.me/2348153629437",
  linkedin: "https://www.linkedin.com/in/blessing-osamudiamen/",
  workMode: "Remote",
  resumeUrl: "/Blessing-Osamudiamen-Resume.pdf",
  portrait: "/images/portrait.png",
  credit: { label: "Bossstrong-Dev", url: "https://bossstrong-dev.vercel.app/" }, // footer: "Designed and maintained by …"
  description:
    "Chartered Accountant (ACA) and FMVA-certified financial analyst — financial reporting, 3-statement modeling, DCF valuation, budgeting, cash-flow analysis and Tableau dashboards. Available remotely.",
};

/* ---------- SEO ---------- */
export const seo = {
  updated: "2026-10-17", // bump when content changes: feeds sitemap <lastmod>
  givenName: "Blessing",
  familyName: "Osamudiamen",
  honorificSuffix: "ACA",
  // Name forms people may search for (her CV header reads "OSAMUDIAMEN OSARIEMEN BLESSING")
  alternateNames: ["Blessing Osamudiamen, ACA", "Osamudiamen Osariemen Blessing", "Blessing Osariemen Osamudiamen", "Blessing Osariemen"],
  googleSiteVerification: "", // paste the Google Search Console HTML-tag `content` value here
  bingSiteVerification: "", // paste the Bing Webmaster Tools `msvalidate.01` value here
  orgUrls: {
    "Institute of Chartered Accountants of Nigeria": "https://icanig.org",
    "Corporate Finance Institute": "https://corporatefinanceinstitute.com",
    "University of Benin": "https://www.uniben.edu",
  } as Record<string, string>,
  // Every term is backed by her CV, certifications or case-study PDFs
  keywords: [
    // identity
    "Blessing Osamudiamen", "Blessing Osamudiamen ACA", "Osamudiamen Osariemen Blessing", "Blessing Osariemen", "Blessing Osamudiamen portfolio", "Blessing Osamudiamen resume",
    // roles
    "Chartered Accountant", "ACA Chartered Accountant", "ICAN Chartered Accountant", "Financial Analyst", "Remote Financial Analyst", "Remote Accountant", "Remote Chartered Accountant", "Financial Modeling Analyst", "FP&A Analyst", "Account Officer", "Accountant portfolio", "Financial analyst portfolio", "Hire a financial analyst", "Hire a chartered accountant",
    // credentials
    "ACA", "ICAN", "Institute of Chartered Accountants of Nigeria", "AAT", "FMVA", "FMVA certified", "Financial Modeling & Valuation Analyst", "CMSA", "Capital Market & Securities Analyst", "FPWM", "Financial Planning & Wealth Management", "Corporate Finance Institute", "BSc Accounting", "University of Benin",
    // modeling & valuation
    "Financial modeling", "3-statement financial model", "Integrated financial model", "DCF valuation", "Discounted cash flow", "WACC", "CAPM", "Terminal value", "Sensitivity analysis", "Model audit", "Equity research", "Company valuation",
    // planning & analysis
    "Budgeting and forecasting", "Driver-based budgeting", "Master budget", "Budget vs actual", "Variance analysis", "Cash flow analysis", "Cash flow forecasting", "Working capital analysis", "Management reporting", "Financial analysis",
    // accounting & reporting
    "Financial reporting", "Financial statement preparation", "General ledger", "Chart of accounts", "Trial balance", "Bank reconciliation", "Month-end close", "Inventory costing", "Accounts receivable", "Accounts payable", "Payroll", "VAT", "WHT", "PAYE", "Internal controls", "Audit",
    // tools & analytics
    "Microsoft Excel", "Advanced Excel", "Excel financial model", "SUMIFS", "Tableau", "Tableau dashboard", "Power BI", "QuickBooks", "Zoho", "PowerPoint", "Data analytics", "Data visualization", "Holt-Winters forecast",
    // case studies
    "Dangote Cement valuation", "DANGCEM DCF", "Sales and performance dashboard", "Integrated budgeting model", "Cash flow analysis case study", "Financial modeling case studies",
  ],
  pages: {
    home: {
      title: "Blessing Osamudiamen, ACA | Chartered Accountant & Financial Analyst",
      description:
        "Blessing Osamudiamen is a Chartered Accountant (ACA, ICAN) and FMVA-certified financial analyst: financial modeling, DCF valuation, budgeting, reporting and Tableau dashboards. Available remotely.",
    },
    about: {
      title: "About Blessing Osamudiamen, ACA | Experience, Certifications & Skills",
      description:
        "Work history, certifications (ACA, AAT, FMVA, CMSA, FPWM), education and tools of Blessing Osamudiamen, Chartered Accountant and financial analyst. Excel, Tableau, Power BI, QuickBooks.",
    },
    projects: {
      title: "Financial Modeling & Analytics Case Studies | Blessing Osamudiamen",
      description:
        "Five finance case studies by Blessing Osamudiamen, ACA: a Dangote Cement DCF valuation, an integrated budgeting model, a Tableau sales dashboard, a budget-vs-actual analysis and a cash-flow analysis.",
    },
  },
};

/* ---------- HOME: HERO ---------- */
export const hero = {
  eyebrow: "Blessing Osamudiamen, ACA · Chartered Accountant · Financial Analyst",
  headline: "Driving business decisions through financial rigor & data.",
  subheadline:
    "I turn complex financial data into clear, decision-ready insight — from month-end statements to 3-statement models, DCF valuations and interactive dashboards.",
  credentials: [
    { label: "ACA — Chartered Accountant", tone: "navy" },
    { label: "FMVA™ Certified", tone: "orange" },
    { label: "BSc Accounting", tone: "outline" },
  ] as const,
  availability: "Remote · Open to Accounting & Financial Analyst roles",
};

/* ---------- HOME: QUICK STATS ---------- */
export const stats = [
  { value: "60%", label: "Faster close via automated statements", accent: true },
  { value: "5", label: "Published case studies with models & reports" },
  { value: "5", label: "Professional certifications" },
  { value: "15,892", label: "Order lines analysed in Tableau" },
];

/* ---------- HOME: CORE COMPETENCIES ---------- */
export const competencies = [
  {
    icon: "chart",
    title: "Financial Modeling & Valuation",
    items: ["Integrated 3-statement models", "DCF valuation — CAPM, WACC, terminal value", "Driver-based budgets & forecasts", "Sensitivity analysis & model auditing"],
  },
  {
    icon: "shield",
    title: "Accounting & Financial Reporting",
    items: ["General ledger & chart of accounts", "Trial balance & full financial statements", "Bank reconciliations & month-end close", "Cash-flow analysis, VAT, WHT & PAYE"],
  },
  {
    icon: "database",
    title: "Data Analytics & Visualization",
    items: ["Interactive Tableau dashboards", "Budget-vs-actual variance analysis", "Seasonal forecasting with backtests", "Management reports for decision-making"],
  },
] as const;

/* ---------- CERTIFICATIONS ---------- */
export const certifications: { name: string; issuer: string; date: string; status: "Qualified" | "Completed" | "In progress" }[] = [
  { name: "Association of Chartered Accountants (ACA)", issuer: "Institute of Chartered Accountants of Nigeria", date: "July 2026", status: "Qualified" },
  { name: "Association of Accounting Technicians (AAT)", issuer: "Institute of Chartered Accountants of Nigeria", date: "December 2023", status: "Completed" },
  { name: "Capital Market & Securities Analyst (CMSA)", issuer: "Corporate Finance Institute", date: "June 2023", status: "Completed" },
  { name: "Financial Planning & Wealth Management (FPWM)", issuer: "Corporate Finance Institute", date: "June 2023", status: "Completed" },
  { name: "Financial Modeling & Valuation Analyst (FMVA)™", issuer: "Corporate Finance Institute", date: "September 2022", status: "Completed" },
];

/* ---------- ABOUT ---------- */
export const about = {
  eyebrow: "About Blessing Osamudiamen, ACA",
  headline: "An accountant who reconciles every line — and then asks what it means.",
  narrative:
    "I'm a Chartered Accountant (ACA) with a strong foundation in financial reporting, valuation and financial modeling, backed by hands-on project work spanning 3-statement modeling, DCF valuation, budgeting systems, cash-flow analysis and interactive dashboard design in Excel and Tableau. I've automated financial statement preparation and reconciliation processes, and I have a track record of turning complex financial data into clear, decision-ready insights. I'm looking to bring this blend of accounting rigor and analytical fluency to a forward-thinking finance or advisory team.",
  facts: [
    { label: "Focus", value: "Reporting · Modeling · Valuation" },
    { label: "Work mode", value: "Remote" },
    { label: "Open to", value: "Accounting & Financial Analyst roles" },
  ],
};

/* ---------- WORK HISTORY ---------- */
export const experience: { role: string; company: string; start: string; end: string; achievements: string[]; impact?: string }[] = [
  {
    role: "Account Officer",
    company: "Johem Agro Limited",
    start: "Jan 2026",
    end: "Present",
    achievements: [
      "Maintain the general ledger and chart of accounts, ensuring transactions are accurately recorded and classified",
      "Prepare trial balances and monthly financial statements — income statement, balance sheet, cash flow and equity statement",
      "Manage inventory and costing records for the agricultural distribution business, supporting accurate cost-of-sales reporting",
      "Perform bank and account reconciliations to ensure accuracy and completeness of financial records",
      "Support month-end close and prepare management reports for business decision-making",
      "Advise on transaction-cost and payment-processing policy to support pricing and cost-control decisions",
    ],
    impact: "Owns the full cycle from ledger to monthly management reporting",
  },
  {
    role: "Accountant",
    company: "Zash Mart Ltd",
    start: "Sep 2025",
    end: "Dec 2025",
    achievements: [
      "Automated financial statement preparation, reducing closing time by 60%",
      "Streamlined inventory management, ensuring accurate tracking and reporting",
      "Enhanced financial reporting, providing insights for business decision-making",
      "Improved reconciliation processes, ensuring accuracy and timeliness of financial data",
    ],
    impact: "Closing time reduced by 60%",
  },
  {
    role: "Sales Representative",
    company: "Patience Omono Retail Outlet",
    start: "2018",
    end: "2024",
    achievements: ["Managed inventory, kept sales records and handled customer complaints", "Achieved a 40% increase in sales in the second year"],
    impact: "+40% sales growth in year two",
  },
];

/* ---------- VIRTUAL EXPERIENCE ---------- */
export const virtualExperience = [
  {
    title: "Virtual Accounting Internship",
    org: "YAP Africa",
    date: "Sep 2025",
    points: ["Chart of accounts set-up, double entry and ethics", "PO management, invoicing, AR & AP management", "Bank reconciliation, payroll preparation and PAYE computation", "VAT & WHT accounting"],
  },
  {
    title: "Investment Banking Virtual Experience",
    org: "Bank of America · Forage",
    date: "Jul 2024",
    points: ["Identified an acquisition target using SWOT analysis against the client's strategic criteria", "Built a DCF model to calculate the target's implied equity and share value", "Ran sensitivity analysis and wrote a company profile of the target"],
  },
  {
    title: "Financial Analyst Job Simulation",
    org: "New York Jobs CEO Council · Forage",
    date: "Feb 2025",
    points: ["Worked as an analyst on an investment bank's technology team", "Helped senior bankers assess the feasibility of a partnership with a Big Tech company", "Presented findings and recommendations to senior bankers"],
  },
  {
    title: "U.S. Audit Job Simulation",
    org: "KPMG · Forage",
    date: "Feb 2025",
    points: ["Identified key internal controls in the inventory process of client Scoops Inc.", "Analysed profitability and expense trends in Excel", "Delivered a client video presentation on profitability findings"],
  },
];

/* ---------- EDUCATION ---------- */
export const education = {
  degree: "BSc Accounting",
  institution: "University of Benin",
  years: "2021 – 2025",
  notes: "Relevant coursework: financial accounting, managerial accounting, taxation, financial management, cost accounting, auditing, accounting information systems.",
};

/* ---------- TOOLSTACK ---------- */
export const tools = [
  { abbr: "XL", name: "Microsoft Excel", use: "3-statement models, DCF, budgets, SUMIFS analysis" },
  { abbr: "TB", name: "Tableau", use: "Interactive dashboards, parameters, forecasting" },
  { abbr: "BI", name: "Power BI", use: "Reporting & data visualization" },
  { abbr: "QB", name: "QuickBooks", use: "Bookkeeping, AR / AP, reconciliations" },
  { abbr: "ZO", name: "Zoho", use: "Accounting & business operations" },
  { abbr: "PPT", name: "PowerPoint", use: "Findings & client presentations" },
];

/* ---------- PROJECTS / CASE STUDIES ---------- */
export type Project = {
  slug: string;
  category: Category;
  featured?: boolean;
  context: string;
  title: string;
  problem: string;
  method: string;
  tools: string[];
  takeaway: string; // the "So what?"
  keyResult: string;
  metrics: { value: string; label: string }[];
  steps: string[];
  findings: string[];
  recommendations: string[];
  drive: string; // Google Drive project folder
  pdf: string; // downloadable case-study PDF in /public/case-studies
  keywords: string[]; // SEO: search terms for this case study's page (facts from its PDF only)
};

export const projects: Project[] = [
  {
    slug: "dangote-cement-equity-research",
    category: "Financial Modeling",
    featured: true,
    context: "Equity research · NGX: DANGCEM",
    title: "Dangote Cement PLC — Equity Research Model",
    problem: "What is Dangote Cement worth, and does its ₦493 share price (31 Dec 2024) offer upside?",
    method: "Three-statement forecast for 2025–2029 driving a DCF at a 24.2% WACC, after auditing and correcting the model's formula errors.",
    tools: ["Excel", "3-Statement Model", "DCF", "CAPM / WACC", "Sensitivity", "Model Audit"],
    takeaway: "Reported earnings are strong, but the corrected DCF values DANGCEM at ₦141 against ₦493 — a Sell call, 71% below the market price.",
    keyResult: "Implied ₦141 vs. ₦493 share price → Sell",
    metrics: [
      { value: "₦141", label: "Implied share price" },
      { value: "₦493", label: "Share price, 31 Dec 2024" },
      { value: "24.2%", label: "WACC" },
      { value: "−71%", label: "Implied downside" },
    ],
    steps: [
      "Restructured the reported 2022–2024 statements into one consistent model layout.",
      "Drove the 2025–2029 forecast from an input sheet: growth, cost ratios, working capital and capex.",
      "Linked the income statement, balance sheet and cash flow — the balance sheet balances every year.",
      "Discounted free cash flow at a 24.2% WACC with a 1.9% terminal growth rate, after tracing and correcting formula errors.",
    ],
    findings: [
      "2024 revenue rose 69% to ₦2.19tn with a 38.5% EBITDA margin and ₦1.03tn net profit.",
      "Revenue grew 82% from 2022 to 2024, but gross margin fell from 67.6% to 59.5%.",
      "Finance income was 66% of 2024 profit before tax — earnings lean on non-operating income.",
      "Across WACC of 22–26.5% and terminal growth of 1.9–8%, the implied price ranges ₦131–₦178; no case reaches ₦493.",
    ],
    recommendations: [
      "Reconcile growth and discount rate: forecast growth of 10–12.5% sits below the 17.95% risk-free rate.",
      "Review capex and tax inputs: capex is fixed at 3× depreciation and tax at 32% (2024 effective rate: 12.7%).",
      "Value the subsidiary stakes, carried at cost (₦249bn); group accounts would capture their full value.",
    ],
    drive: "https://drive.google.com/drive/folders/19GqpMCCn45pk9VqayWafbVsCUE5dm0Np?usp=drive_link",
    pdf: "/case-studies/dangote-cement-equity-research.pdf",
    keywords: ["Dangote Cement valuation", "Dangote Cement equity research", "DANGCEM DCF model", "NGX stock valuation", "Equity research model", "3-statement financial model", "DCF valuation case study", "WACC and CAPM", "Implied share price", "Sell recommendation", "Financial model audit"],
  },
  {
    slug: "99-agency-budgeting-model",
    category: "Financial Modeling",
    context: "Advertising & SEO agency · FY2026",
    title: "99 Agency — Integrated Budgeting Model",
    problem: "Build a linked FY2026 budget from business drivers for an agency that earned $101.7M revenue and $16.4M net income in FY2025.",
    method: "Revenue built bottom-up by client and top-down by market, then averaged; driver-based costs, working capital and debt; three statements linked with a quarterly balance check.",
    tools: ["Excel", "Master Budget", "Driver-Based Costs", "Working Capital", "Debt Schedule"],
    takeaway: "The budget balances and links cleanly, but its profit uplift rests on one assumption: 23% growth in ad revenue.",
    keyResult: "Revenue +17.1% to $119.2M; net income +58% to $25.9M",
    metrics: [
      { value: "$119.2M", label: "FY2026 revenue (+17.1%)" },
      { value: "$25.9M", label: "Net income (+58%)" },
      { value: "46.1%", label: "Gross margin (from 41.9%)" },
      { value: "$22.1M", label: "Year-end cash (from $0.6M)" },
    ],
    steps: [
      "Revenue: built bottom-up by client and top-down by market, then averaged.",
      "Costs & balance sheet: campaign volumes, headcount, SG&A, assets, working capital and debt.",
      "Master budget: three statements linked, with a balance check every quarter.",
    ],
    findings: [
      "EBITDA margin rises from 19.2% to 25.1% as cost of sales and SG&A grow only 8–9%.",
      "The two revenue methods sit $23M apart: bottom-up supports +5.9%, top-down +28.4%.",
      "Ad revenue absorbs the difference (+23%) against +2% for SEO.",
    ],
    recommendations: [
      "Reconcile the two revenue views — resolve the $23M gap before the budget is approved.",
      "Stress-test ad pricing: the budget implies about 15% higher revenue per ad campaign.",
      "Plan for cash and receivables: receivables grow $10.4M while cash builds to $22.1M.",
    ],
    drive: "https://drive.google.com/drive/folders/1e3d9FRnhh1BZbcE5RxkMG8ZU7T-XXGvA?usp=drive_link",
    pdf: "/case-studies/99-agency-budgeting-model.pdf",
    keywords: ["Integrated budgeting model", "Master budget in Excel", "Driver-based budget", "Agency budget model", "Bottom-up and top-down revenue forecast", "FP&A budgeting case study", "Working capital budget", "Debt schedule", "Linked three-statement budget"],
  },
  {
    slug: "sales-performance-dashboard",
    category: "Data & Analytics",
    featured: true,
    context: "Tableau · 2014–2019 order data",
    title: "Sales & Performance Dashboard",
    problem: "Across 15,892 order lines, 793 customers and 49 states: where are sales earned, where is profit lost, and what should Q1 2020 look like?",
    method: "Star-schema data model, KPI calculations and two interactive Tableau dashboards with filters, a Top-N parameter and click-through actions, plus a backtested Holt-Winters forecast.",
    tools: ["Tableau", "Calculated Fields", "Parameters", "Data Modeling", "Holt-Winters"],
    takeaway: "Sales grew 11% a year, but profit depends more on discounting and mix than on volume. Fixing both is the clearest route to higher margin.",
    keyResult: "Discounts of 30%+ lost $204K — 41% of total profit",
    metrics: [
      { value: "$3.76M", label: "Sales, 2014–2019" },
      { value: "$492K", label: "Profit" },
      { value: "13.1%", label: "Profit ratio" },
      { value: "$142.1K", label: "Q1 2020 sales forecast" },
    ],
    steps: [
      "Combined two order tables (2014–17, 2018–19) and joined customer, product, location and shipping tables.",
      "Built KPI calculations: profit ratio, average order value and days to ship.",
      "Designed two interactive dashboards with filters, a Top-N parameter and click-through actions.",
      "Projected Q1 2020 sales with seasonal smoothing, backtested on 2018–19 actuals (12.5% average error).",
    ],
    findings: [
      "Annual profit more than doubled, from $49.5K (2014) to $113.5K (2019), lifting margin from 10.2% to 14.1%.",
      "Furniture is 32% of sales but earns a 2.3% margin; Technology earns 18.7%.",
      "The top 10 states generate 69% of sales, but five are loss-making: TX, PA, FL, IL and OH.",
      "Q1 2020 is expected at $124K–$160K, about +5.7% on Q1 2019.",
    ],
    recommendations: [
      "Cap discounts at 30% — lines discounted 30% or more lost $204K, 41% of total profit.",
      "Fix pricing in Tables (−8.5% margin) and in TX, PA, IL and OH.",
      "Prioritise high-margin growth: push Technology and Copiers (36.9% margin) over Furniture.",
    ],
    drive: "https://drive.google.com/drive/folders/1lCbwv4vSmPNwiVJV_x7gnTUjEemQEVP4?usp=drive_link",
    pdf: "/case-studies/sales-performance-dashboard.pdf",
    keywords: ["Tableau sales dashboard", "Sales and performance dashboard", "Tableau portfolio project", "KPI dashboard", "Profit and discount analysis", "Star schema data model", "Holt-Winters sales forecast", "Sales analytics case study"],
  },
  {
    slug: "business-performance-analysis",
    category: "Data & Analytics",
    context: "Actual vs budget · Jan–Jun 2026",
    title: "Business Performance Analysis & Forecasting",
    problem: "Monthly revenue grew from £60k to £87.5k — but was that growth delivering the profit management had budgeted?",
    method: "Margin, budget-variance and cost-ratio analysis on six months of actuals, a management dashboard with written findings, and a driver-based July–September forecast.",
    tools: ["Excel", "Variance Analysis", "Dashboards", "Driver-Based Forecast"],
    takeaway: "Revenue growth alone did not deliver the planned profit. Rising marketing cost, not gross margin, drove the gap.",
    keyResult: "Revenue +45.8%, yet operating profit £7k below budget",
    metrics: [
      { value: "+45.8%", label: "Revenue growth, Jan–Jun" },
      { value: "−£7.0k", label: "Operating profit vs budget" },
      { value: "2×", label: "Marketing spend (£8k → £16k)" },
      { value: "£306k", label: "Q3 revenue forecast" },
    ],
    steps: [
      "Analysed margins, budget variances and cost ratios from six months of actuals.",
      "Reported through a management dashboard with written findings and recommendations.",
      "Forecast July–September with a driver-based projection built on revenue growth and cost ratios.",
    ],
    findings: [
      "Revenue finished £8k below budget (£440k vs £448k); operating profit £29.0k vs £36.0k.",
      "Operating profit beat budget in February and March, then fell short every month from April.",
      "Gross margin held at 44–45%, while operating margin slipped from 6.7% to 5.0%.",
      "Q3 forecast: £20.5k operating profit (6.7% margin) — dependent on marketing falling from 18.3% to 15.3% of revenue.",
    ],
    recommendations: [
      "Test marketing returns — check whether the doubled spend is converting into revenue.",
      "Control operating costs — align payroll and other cost growth with revenue growth.",
      "Tighten budget monitoring — review variances monthly, starting with April to June.",
    ],
    drive: "https://drive.google.com/drive/folders/1OXDd2vOtz_3a3lgsIyzJ0PkfDDfNXtww?usp=drive_link",
    pdf: "/case-studies/business-performance-analysis.pdf",
    keywords: ["Budget vs actual analysis", "Variance analysis case study", "Business performance analysis", "Management dashboard in Excel", "Driver-based forecast", "Operating margin analysis", "Marketing cost analysis", "FP&A case study"],
  },
  {
    slug: "freshmart-cash-flow-analysis",
    category: "Accounting & Audit",
    context: "Bank statement analysis · FY2025",
    title: "Freshmart Supermarket — Cash Flow Analysis",
    problem: "From a full year of bank transactions: where did a supermarket's cash come from, where did it go, and what should it expect in Q1 2026?",
    method: "Reconciled the running balance on all 161 transactions, tagged 8 inflow and 14 outflow categories, and built a SUMIFS monthly analysis tied back to statement totals.",
    tools: ["Excel", "SUMIFS", "Reconciliation", "Cash Forecasting", "Data Quality"],
    takeaway: "Freshmart turned 61% of receipts into cash, but ₦66.0m sits above a sensible buffer and ₦3.0m of rent needs checking.",
    keyResult: "₦73.8m net inflow; ₦66.0m idle above a 3-month buffer",
    metrics: [
      { value: "₦121.7m", label: "Total receipts" },
      { value: "₦47.9m", label: "Total payments" },
      { value: "₦73.8m", label: "Net cash inflow" },
      { value: "19.5", label: "Months of cash cover" },
    ],
    steps: [
      "Reconciled: checked the running balance on every line, from opening to closing balance.",
      "Categorised each receipt and payment into 8 inflow and 14 outflow categories.",
      "Summarised a monthly analysis with SUMIFS formulas that tie back to statement totals.",
      "Projected an indicative Q1 2026 cash outlook from the same months of 2025.",
    ],
    findings: [
      "December and January brought 32% of receipts; March to November averaged ₦8.1m a month.",
      "Stock, payroll and rent made up 79.5% of payments.",
      "87% of receipts were counter cash deposits; card settlements were 13%.",
      "Q1 2026 closing balance is projected at ₦101.5m.",
    ],
    recommendations: [
      "Confirm the rent schedule — rent was paid 6 times at ₦1.5m against four quarters; check ₦3.0m against the lease.",
      "Put surplus cash to work — keep a 3-month buffer (₦12.0m) and move ₦66.0m into interest-bearing instruments.",
      "Clean up the categories — merge duplicates and report reserve transfers and capital spending apart from operating costs.",
    ],
    drive: "https://drive.google.com/drive/folders/1u9Cf6o6eGP8RIzjL4Fmltrvj5tdTcNt_?usp=drive_link",
    pdf: "/case-studies/freshmart-cash-flow-analysis.pdf",
    keywords: ["Cash flow analysis", "Bank statement analysis", "Bank reconciliation case study", "SUMIFS cash flow analysis", "Cash flow forecast", "Supermarket cash flow", "Surplus cash management", "Excel cash flow model"],
  },
];
