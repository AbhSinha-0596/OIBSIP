# Secure Auth — Full-Stack Authentication System 🔐

A secure, production-ready full-stack Authentication System featuring dynamic user state persistence and automated email verification workflows. Built using modern JavaScript, this application delivers a robust foundation for user registration, multi-step email validation, password recovery, and secure session management through custom-built REST APIs and specialized Express middleware.

---

## 🚀 Key Features

- **Dynamic User Greetings:** Displays the authenticated user's name immediately upon a successful login session.
- **OTP-Based Email Verification:** Secure registration flow that dispatches a One-Time Password (OTP) to verify the user's email address before granting full access.
- **OTP-Based Password Reset:** A seamless workflow enabling users to securely reset forgotten passwords via email token verification.
- **Secure Logout Mechanism:** Destroys client-side tokens/sessions and updates authentication states globally across the application.
- **Self-Made RESTful APIs:** Entirely custom-built backend endpoints handling user state, verification tokens, and registration payloads without external Auth providers.
- **Custom Security Middleware:** Protects private endpoints by intercepting requests, parsing headers, and validating tokens before granting access to server resources.
- **Axios-Driven Network Layer:** Seamless asynchronous HTTP requests from React utilizing optimized header configurations to talk securely with the backend.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (v18+)** — Component-driven architecture for a reactive user interface.
- **Axios** — Promise-based HTTP client managing API communication, request headers, and custom network configurations.
- **JavaScript (ES6+)** — Asynchronous state management and client logic.

### Backend & Database
- **Express.js & Node.js** — Fast, unopinionated backend framework utilized to map custom API routes and run execution middleware.
- **MongoDB & Mongoose** — NoSQL database for managing scalable user schemas, securely storing hashed credentials, and tracking volatile OTP states.

### Utilities & Security
- **Custom Express Middleware** — Homegrown authorization logic enforcing strict route-guarding policies.
- **Nodemailer** — Node.js module handles the configuration and execution of automated transactional emails (OTPs).
- **CORS Middleware** — Manages cross-origin access scopes securely between the decoupled client and server environments.

---

## 🏗️ Architecture & API Flow

The application isolates core authentication structures behind modular layers. Axios requests from the frontend pass through custom Express middlewares before reaching the database controllers.
```text
[ React UI ] ──( Axios Request )──> [ Custom Middleware ] ──> [ Self-Made API Controllers ] ──> [ MongoDB ]
```
<img width="1917" height="1008" alt="Screenshot 2026-07-08 171212" src="https://github.com/user-attachments/assets/f23a8328-f984-4730-818b-74bc6225f696" />

<img width="1919" height="1021" alt="Screenshot 2026-07-08 171251" src="https://github.com/user-attachments/assets/242d1ba5-5631-4c9b-bd78-29a4f02a745c" />

<img width="1919" height="1018" alt="Screenshot 2026-07-08 171314" src="https://github.com/user-attachments/assets/09212dff-5c7a-4e12-8514-2b9cba7b7cbd" />

<img width="1919" height="1021" alt="Screenshot 2026-07-08 171332" src="https://github.com/user-attachments/assets/f5c5558c-bfad-40ea-9ef2-7f203c328947" />

<img width="1919" height="1024" alt="Screenshot 2026-07-08 171401" src="https://github.com/user-attachments/assets/a581941f-aacd-4db1-963b-3c4937daf4fe" />

<img width="1919" height="1021" alt="Screenshot 2026-07-08 171444" src="https://github.com/user-attachments/assets/6f81efc8-a1dc-4f24-9620-0465978abe5d" />

<img width="1919" height="1024" alt="Screenshot 2026-07-08 171455" src="https://github.com/user-attachments/assets/4d21962e-238b-4371-8d25-e006ad71e7b5" />


<img width="1919" height="1018" alt="Screenshot 2026-07-08 171522" src="https://github.com/user-attachments/assets/ed27387d-7bfa-4725-b0ad-0ab56788edf2" />


<img width="1919" height="1020" alt="Screenshot 2026-07-08 171537" src="https://github.com/user-attachments/assets/ed0abcf8-03d7-4ac9-be14-7c2cb968e67d" />


---
