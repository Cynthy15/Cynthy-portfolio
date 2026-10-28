# Project inventory

Reviewed 28 October 2026. Public source inspection confirms code contents, not runtime behavior, employment, sole authorship, or production readiness. Education, project participation, and personal background come from the supplied brief. Pin source links to reviewed commits. See source-review.json for the file inventory.

## Boards Café

- Purpose: A structured café operations API connecting menu categories, product variants, pricing, and sales orders.
- Type / status: Backend project / Source reviewed
- Technologies: Python, Django, Django REST Framework, PostgreSQL, OpenAPI
- Contribution: Backend development (provided in my project brief); individual module authorship is not established by source review.
- Implemented evidence: Category, product, and variant models with uniqueness constraints. Validation prevents negative effective variant prices and invalid product/variant combinations. Order serializers calculate line totals, subtotals, and fixed or percentage discounts using Decimal arithmetic. Order queries are scoped to their creator unless the requester is staff. Updates and deletion are limited to draft orders. Routes include /api/menu/categories/, /api/menu/products/, /api/menu/variants/, /api/v1/sales/orders/, and /api/v1/docs/.
- Outcome: The inspected source contains menu and sales models, validation, and API routes. Authentication test files exist, but were not executed during this portfolio review. Payment processing is outside the scope of this case study.
- Sources: [Menu data model](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/apps/menu/models.py); [Price validation](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/apps/menu/serializers.py); [Order calculations](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/apps/sales/serializers.py); [Order permissions & actions](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/apps/sales/views.py); [API documentation routes](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/urls.py); [Authentication test source](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/apps/users/tests/test_authentication.py)
- Missing: Module-level contribution and team ownership details. Passing test reports and production readiness evidence. Deployment health could not be confirmed during review.

## REACH

- Purpose: A lending prototype exploring how business information can support financing assessment for businesses with limited traditional collateral.
- Type / status: Product prototype / Prototype
- Technologies: Next.js, TypeScript, React, Tailwind CSS, Mock datasets
- Contribution: Project development and systems exploration, as described in my brief. Specific file ownership remains to be documented.
- Implemented evidence: Applicant application, eligibility, loan-purpose, identity, and tracking pages are present. A TypeScript function calculates illustrative eligibility, reasons, conditions, and repayment estimates from mock records. The inspected auth context uses a default demo profile; it does not establish production authentication.
- Outcome: Source confirms a frontend prototype and mock-data assessment logic. No live institutional connection or real financing outcome has been verified.
- Sources: [Eligibility implementation](https://github.com/Cynthy15/REACH/blob/aecec64797d40bd130f0a832431de62b359ee2dd/src/lib/loanEligibility.ts); [Demo auth context](https://github.com/Cynthy15/REACH/blob/aecec64797d40bd130f0a832431de62b359ee2dd/src/context/AuthContext.tsx); [Mock institutional data](https://github.com/Cynthy15/REACH/blob/aecec64797d40bd130f0a832431de62b359ee2dd/src/lib/mockData.ts)
- Missing: My exact module contributions. Backend integration evidence, deployment validation, and user-study results.

## MedDelivery

- Purpose: A medicine-delivery frontend with patient ordering, prescription upload, and interfaces for pharmacy operations.
- Type / status: Team frontend project / Source reviewed
- Technologies: Next.js, TypeScript, React, Tailwind CSS, REST APIs
- Contribution: Frontend development, as stated in my brief. Specific page ownership and team leadership need supporting contribution records.
- Implemented evidence: The inspected patient order page supports medicine items, prescription selection, delivery or pickup, saved locations, and insurance selection. Submission uploads a prescription when supplied, then calls createOrder; validation and error states are implemented in the frontend. Typed patient service functions cover orders, prescriptions, profiles, locations, and medicine requests. Pharmacy and administration routes are present in the source tree; they were not all audited or run.
- Outcome: Source confirms frontend ordering logic and API request functions. Successful backend fulfillment, delivery operations, and team-leadership claims are not independently verified.
- Sources: [Project dependencies](https://github.com/Cynthy15/MedDelivery/blob/4e98c86bed33718a34c76219b4236f587584a883/package.json); [Patient order implementation](https://github.com/Cynthy15/MedDelivery/blob/4e98c86bed33718a34c76219b4236f587584a883/src/app/(public)/(patient)/order/page.tsx); [Patient API service](https://github.com/Cynthy15/MedDelivery/blob/4e98c86bed33718a34c76219b4236f587584a883/src/services/patientApi.ts)
- Missing: Verified individual commit or PR attribution. Runtime and accessibility results for the original product. Leadership evidence and measured outcomes.

## Blood Supply Flow Monitoring

- Purpose: An academic system exploring blood-stock visibility, hospital requests, transfers, expiration, and coordination with the Rwanda Biomedical Centre.
- Type / status: Academic information system / Academic prototype
- Technologies: React, Vite, FastAPI, SQLAlchemy, Python
- Contribution: Information systems project work, as described in my brief. Detailed authorship and implementation responsibilities remain to be recorded.
- Implemented evidence: Backend source exposes blood-unit registration and listing, request creation and listing, and transfer creation routes. Inventory logic implements stock balance, expiry calculation, and simple forecasting helpers. Models capture blood type, quantity, dates, request urgency, and transfer participants.
- Outcome: Source confirms a prototype API and inventory model, not an operational hospital or RBC production deployment.
- Sources: [API handlers](https://github.com/Cynthy15/REAL-TIME-BLOOD-SUPPLY-FLOW-MONITORING-SYSTEM/blob/d7bb620975a2cc7a6f11609c47580f9034afbce2/backend/main.py); [Relational models](https://github.com/Cynthy15/REAL-TIME-BLOOD-SUPPLY-FLOW-MONITORING-SYSTEM/blob/d7bb620975a2cc7a6f11609c47580f9034afbce2/backend/models.py); [Stock balance & expiry](https://github.com/Cynthy15/REAL-TIME-BLOOD-SUPPLY-FLOW-MONITORING-SYSTEM/blob/d7bb620975a2cc7a6f11609c47580f9034afbce2/backend/inventory_model.py)
- Missing: Full workflow tests and stakeholder validation. Exact contribution scope, deployment evidence, and measured outcomes.

## OmniReach

- Purpose: A mobile application project exploring remote computer access, account management, device identification, and login verification.
- Type / status: Mobile application project / Details pending
- Technologies: Flutter, Dart, Android Studio, PostgreSQL · planned
- Contribution: Mobile application work described in my brief; the project repository and specific contributions have not yet been matched.
- Implemented evidence: No implementation confirmed; retain reported scope and plans.
- Outcome: Project retained from my brief. No completed remote-access functionality is claimed without source evidence.
- Sources: User brief; no matched public source.
- Missing: Repository, screenshots, implemented feature list, exact role, and current milestone.

## Rescue Pulse

- Purpose: An emergency-response concept combining mobile location, potential crash detection, and dispatch coordination for road accidents in Rwanda.
- Type / status: Innovation concept / Concept
- Technologies: GPS · proposed, Mobile technology · proposed, System design
- Contribution: Concept and systems exploration described in my brief; implementation and team responsibilities remain undocumented.
- Implemented evidence: No implementation confirmed; retain reported scope and plans.
- Outcome: A concept aligned with SDG 3: Good Health and Well-being. No response-time reduction or working crash-detection system is claimed.
- Sources: User brief; no matched public source.
- Missing: Repository or concept document, stakeholder validation, team role, and prototype evidence.

## Uwacu

- Purpose: A cultural education platform project focused on supporting cultural learning through a digital experience.
- Type / status: Frontend project / Details pending
- Technologies: Frontend stack · to confirm
- Contribution: Frontend contribution described in my brief. The public repository is empty, so page-level attribution cannot yet be checked.
- Implemented evidence: No implementation confirmed; retain reported scope and plans.
- Outcome: The public UWACU-FE repository was found but contains no source files at review time. No completed features or deployment are claimed.
- Sources: User brief; no matched public source.
- Missing: Non-empty source repository, technology details, screenshots, role evidence, and current status.

## Video Streaming Platform

- Purpose: A video-discovery frontend with routed video and channel pages, API-backed queries, embedded playback, and loading and error states.
- Type / status: Web application project / Source reviewed
- Technologies: React, Vite, React Router, TanStack Query, Axios
- Contribution: Development work in my public repository; precise individual responsibilities and collaboration history need documentation.
- Implemented evidence: Feed, search, channel, and video routes are wired in App.jsx. Video details display API metadata, statistics, description, and channel navigation. Related results wait until a video title is available. Loading and API-error states are present.
- Outcome: Source confirms the routing and playback interface. Hosting a video service or operating an independent streaming backend is not claimed.
- Sources: [Application routes](https://github.com/Cynthy15/VideoPlatform/blob/6c746b6fa491fc9e982c82749836a0083a0d3cb2/src/App.jsx); [Video & related queries](https://github.com/Cynthy15/VideoPlatform/blob/6c746b6fa491fc9e982c82749836a0083a0d3cb2/src/pages/VideoDetails.jsx); [Dependencies](https://github.com/Cynthy15/VideoPlatform/blob/6c746b6fa491fc9e982c82749836a0083a0d3cb2/package.json)
- Missing: Current deployment link, exact contribution scope, and runtime test results.

## Database Design Projects

- Purpose: A collection connecting café menu and sales models, blood-supply records, and database design documentation to practical system requirements.
- Type / status: Design collection / Source reviewed
- Technologies: Relational modeling, Django ORM, SQLAlchemy, ER diagrams, Constraints
- Contribution: Database and information systems work described in my brief, supported by models and design documents in my repositories. Individual design authorship remains to be recorded.
- Implemented evidence: Verified one-to-many relationships in café menu and order models. Unique product names per category and unique variant names per product. Nonnegative monetary constraints and positive order-item quantities. An ERD document covers proposed system entities and relationships.
- Outcome: Source-backed examples of relationships and constraints are available. Formal normalization analysis, SQL performance measurements, and a complete migration audit remain pending.
- Sources: [Menu relationships & constraints](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/apps/menu/models.py); [Order and line-item models](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/BoardsCafe/apps/sales/models.py); [Target ERD documentation](https://github.com/Cynthy15/BaordsCafe-Backend/blob/cf23cf3f953a82ecbaca447b6782103ca35dd8d9/docs/07-database/17-erd.md); [Blood-supply data models](https://github.com/Cynthy15/REAL-TIME-BLOOD-SUPPLY-FLOW-MONITORING-SYSTEM/blob/d7bb620975a2cc7a6f11609c47580f9034afbce2/backend/models.py)
- Missing: Normalization evidence, annotated SQL, complete coursework artifacts, and design ownership details.

## Expense Management System

- Purpose: An expense-management backend project covering user accounts, categories, expense records, and API architecture.
- Type / status: Backend learning project / Details pending
- Technologies: Django, Django REST Framework, SQLite, JWT · to verify
- Contribution: Django REST Framework project work described in my brief; matching source and exact contribution scope are pending.
- Implemented evidence: No implementation confirmed; retain reported scope and plans.
- Outcome: Included as a project from my brief; completion status and passing tests are not claimed.
- Sources: User brief; no matched public source.
- Missing: Repository, implementation evidence, exact role, test results, and deployment status.

## REACH Django Backend

- Purpose: A focused backend case study for REACH account management, email authentication, verification, and API security.
- Type / status: Backend case study · REACH / Details pending
- Technologies: Python, Django, Django REST Framework, JWT · to verify, OTP · to verify
- Contribution: Backend development described in my brief. The public REACH and Reach_Project repositories reviewed contain frontend code, so the Django source still needs to be matched.
- Implemented evidence: No implementation confirmed; retain reported scope and plans.
- Outcome: Retained as distinct engineering work from my brief; no authentication feature is marked complete without code evidence.
- Sources: User brief; no matched public source.
- Missing: Django repository, implemented-versus-planned feature list, individual contribution evidence, and test reports.

## SmartStay / StayNest

- Purpose: An accommodation browsing prototype with API normalization, cached listing queries, and fallback demonstration data.
- Type / status: Additional public project / Prototype
- Technologies: React, Vite, TanStack Query, Axios, Zustand
- Contribution: Public repository project. The README credits Cynthy; the exact implementation scope and collaboration history remain to be documented.
- Implemented evidence: Listing and detail query hooks define cache timing and filter-dependent query keys. The API service includes normalization and fallback mock listings. README describes locally persisted favorites and bookings and simulated authentication; these are not verified real reservations.
- Outcome: Source confirms listing query and service logic. Real accommodation reservations or secure production authentication are not claimed.
- Sources: [Listing query hooks](https://github.com/Cynthy15/SmartStay-Booking-Platform/blob/54ba41cff509b2aff360670bb904168fb7f22df4/src/hooks/useListings.js); [API normalization & fallback](https://github.com/Cynthy15/SmartStay-Booking-Platform/blob/54ba41cff509b2aff360670bb904168fb7f22df4/src/services/api.js); [Project documentation](https://github.com/Cynthy15/SmartStay-Booking-Platform/blob/54ba41cff509b2aff360670bb904168fb7f22df4/README.md)
- Missing: Detailed contribution history, runtime validation, and measured outcomes are still to be added.

## Book Explorer

- Purpose: A book-discovery interface with search, categories, loading states, and locally saved favorites.
- Type / status: Additional public project / Source reviewed
- Technologies: HTML, JavaScript, Tailwind CSS, Browser storage
- Contribution: The project README credits Cynthia. Specific code ownership and collaboration history are not independently established.
- Implemented evidence: Browse script handles search-button and Enter-key queries. Loading, no-results, and error messages are implemented. Favorite helpers add, remove, and check saved books by key.
- Outcome: Source confirms browsing logic and local favorites. The README provides a deployment link; its current availability has not been verified.
- Sources: [Browse and search](https://github.com/Cynthy15/Phase-One-Capstone-Project/blob/3731bec942aa463b372f56b4e21bb49220994c77/scripts/browse.js); [Favorite storage](https://github.com/Cynthy15/Phase-One-Capstone-Project/blob/3731bec942aa463b372f56b4e21bb49220994c77/scripts/fav.js); [Project README](https://github.com/Cynthy15/Phase-One-Capstone-Project/blob/3731bec942aa463b372f56b4e21bb49220994c77/README.md)
- Missing: Exact contribution record, current deployment validation, and user feedback.

## Discovery notes

The public UWACU-FE repository is empty. Searches of Cynthy15 repositories did not identify an expense-management, OmniReach, Rescue Pulse, or Django REACH backend repository. REACH and Reach_Project contain Next.js frontend code, not the reported Django backend. Public repositories with similar third-party names were not attributed to Cynthia. The medicine-delivery source named in the brief was inspected for dependencies; public-facing links and branding use Cynthia’s own repository. Other small exercises and unreviewed repositories were not promoted as substantial case studies.

No claims of employment, hackathon results, club positions, volunteering, or team leadership were added without supporting details. The supplied dates identify the degree as expected June 2027, the CMU-Africa Bridge Program as March 2026, and Solvit Africa Django training without an invented date or certificate.

