
export type ProjectCardProps = {
    name: string;
    lang: string[];
    desc: string;
    id: string;
}

export type ProjectPageProps = {
    name: string;
    lang: string[];
    desc: string;
    data: string;
}



export const Project_List = [
    {
        id: "jsw-ohc-python",
        name: "JSW-OHC",
        lang: ["Python", "Streamlit"],
        desc: "The JSW-OHC Team Project is an initiative aimed at streamlining and optimizing the Occupational Health Center (OHC) management system for JSW (Jindal Steel Works). This project focuses on developing a digital solution to enhance medical record-keeping, employee health tracking, and operational efficiency within the OHC framework.",
        data: `

> This is a **private project** built for **JSW Occupational Health Center** 🚑.  

## 📌 Key Features  
### 🏥 **Dashboard Overview**  
- **📊 Health Analytics** – Displays footfalls, healthy/unhealthy entries, and appointments.  
- **📅 Date Range Filter** – Track health records between specific dates.  
- **📂 Categorization** – Employees marked as *Healthy* or *Unhealthy*.  

### 📖 **Ledger Management**  
- **📜 Medical Records** – Store, manage, and review past medical history.  
- **📑 Document Upload** – Allows medical reports to be stored securely.  

### 🎯 **Events & Camps**  
- **🏕️ Health Camps** – Organize medical check-ups and vaccination drives.  
- **🩺 Periodic Health Checks** – Monitor employee wellness regularly.  

### 🔍 **Advanced Search & Filtering**  
- **🔎 Search by Patient ID** – Quick lookup of employee health details.  
- **📌 Record Filters** – Categorized filtering for better data management.  

### 📅 **Appointment Scheduling**  
- **🗓️ Doctor & Nurse Appointments** – Easy appointment booking.  
- **🔔 Automated Notifications** – Alerts for upcoming medical check-ups.  

### 🚨 **Emergency & Mock Drills**  
- **🦺 Emergency Response** – Rapid logging of emergency health incidents.  
- **🎭 Mock Drill Records** – Track employee participation in drills.  

### 🛡️ **Security & Access Control**  
- **🔐 Role-Based Access** – Different views for **Doctors, Nurses, and HR Teams**.  
- **🛠️ Settings Management** – Configure system preferences and user permissions.  

### 🏢 **Visitor Management**  
- **📝 Visitor Logs** – Maintain records of external visitors for security.  

## ScreenShot

![img](/jsw-login.png)
![img](/jsw-dashboard.png)



        `
    },        
    {
        id: "webstrom-python",
        name:"WebStorm",
        lang:["Python"],
        desc: "WebStorm is a lightweight, flexible web framework built using Python. It serves as a customizable HTTP server with easy-to-use features for building web applications. With its streamlined design, WebStorm enables developers to quickly set up a web server and integrate dynamic content, making it an ideal solution for small to medium-sized projects. The framework is available on GitHub for open-source collaboration, and its modular structure allows developers to extend and enhance its functionalities",
        data: `
- 🌐 Easy-to-use HTTP server
- 📝 Dynamic content integration
- 🚀 Lightweight and flexible
- 🤝 Open-source collaboration
- 📦 Side Project 
        `
    },
    {
        id: "web-scraper-api",
        name:"Web Scrapper API",
        lang: ["Python", "fastapi"],
        desc:"This API takes a URL as input and returns the web page’s title, a clean summary, the full extracted text, and all image URLs. It fetches the page, parses the HTML, extracts readable content, and generates a concise summary—all in one simple POST request. Perfect for building content readers, research tools, or AI-powered summarizers",
        data:`

## 📖 Overview

The **Web Content Parser API** is a simple and powerful REST API designed to extract meaningful information from any public webpage. It processes a given URL and returns structured content including the **title**, **main article text**, a **brief summary**, and a list of all **image URLs** found on the page.

This API is ideal for developers and data analysts building tools that need to scrape and understand website content — such as news summarizers, SEO tools, or web content previewers.

---

## ✨ Key Features

* 🔗 **URL-Based Parsing**: Accepts any valid public URL.
* 📰 **Article Extraction**: Uses advanced parsing to extract clean, readable article content.
* 🧠 **Automatic Summary**: Generates a short summary (first two sentences) without external NLP libraries.
* 🖼️ **Image Scraper**: Collects all image sources from the page.
* 🏷️ **Title Detection**: Fetches the title of the page for easy reference.
* ⚡ **Fast and Lightweight**: Built using FastAPI with fast response times.

---

### 📌 API Endpoints

#### \`POST /parse-html\`

* **Description**: Takes a URL and returns parsed content.
* **Input**: JSON with a \`url\` key.
* **Output**:

  * \`title\`: Title of the page.
  * \`summary\`: First two sentences of the main content.
  * \`text\`: Full readable article text.
  * \`images\`: List of image URLs.
---

### 🛠️ Use Cases

* News article summarization tools
* Web content previews for blogging platforms
* SEO and content analysis tools
* Image scrapers or web archiving tools
* Academic research or data collection from websites

---

### 🌐 Deployment & Integration

This API is deployed on RapidAPI for easy access. You can integrate it into any frontend or backend application that needs to analyze or preview web content.
        `
    },
    {
        id: "geo-insight-api",
        name: "Geo Insight API",
        lang: ["Python", "fastapi"],
        desc: "Geo Insight API is a powerful tool for developers to access geographical data and insights. It provides endpoints for retrieving information about countries, cities, and regions, including population statistics, area sizes, and more. The API is designed to be fast, reliable, and easy to integrate into various applications.",
        data: `
        

**GeoInsight API** is a powerful IP geolocation and network intelligence service. Built using FastAPI and MaxMind's GeoLite2 database, it provides rich details about any public IPv4 or IPv6 address.

### ✨ Key Features:

* Get location data: **City, Region, Country, Continent**
* Network info: **ISP, ASN number**
* Precise geolocation: **Latitude, Longitude, Timezone**
* Smart detection: **VPN / Proxy / Hosting providers**
* Country Flag emoji 🇺🇸
* Graceful fallback when data is unavailable

---

## 🛣️ Endpoint: \`/ip-info\`

**Method:** \`POST\`
**Description:** Returns detailed geolocation and network information for a given IP address.

### 🔹 Request Body:

\`\`\`json
{
  "ip": "8.8.8.8"
}
\`\`\`

| Field | Type   | Required | Description          |
| ----- | ------ | -------- | -------------------- |
| ip    | string | ✅ Yes    | IPv4 or IPv6 address |

---

### 🔸 Response Fields:

* \`continent\`: Continent name
* \`country\`: Country name
* \`country_iso_code\`: ISO 3166-1 alpha-2 code
* \`flag\`: Country flag emoji
* \`is_in_european_union\`: Boolean flag
* \`region\`: State or province name
* \`region_iso_code\`: ISO code of the region
* \`city\`: City name
* \`postal_code\`: ZIP or postal code
* \`latitude\` / \`longitude\`: Coordinates
* \`time_zone\`: Local timezone
* \`accuracy_radius_km\`: Estimated accuracy radius
* \`asn\`: Autonomous System Number
* \`isp\`: ISP or Organization name
* \`vpn\`: Boolean flag for VPN/Proxy detection

If data is unavailable, \`"Unknown"\` or \`0\` is returned instead — making it easy to handle programmatically.

---

## 🧠 Use Cases:

* IP tracking and geolocation
* Fraud prevention and VPN detection
* Network analysis dashboards
* Location-based personalization
* Web analytics and user insights

---

## ⚡ Example:

**Input:**

\`\`\`json
{ "ip": "8.8.8.8" }
\`\`\`

**Output:**

\`\`\`json
{
  "country": "United States",
  "region": "California",
  "city": "Mountain View",
  "isp": "Google LLC",
  "latitude": 37.386,
  "longitude": -122.0838,
  "vpn": false,
  ...
}
\`\`\`

---

## 🚀 Start using GeoInsight API now – your intelligent IP toolkit awaits!
`
    },
    {
        id: "qr-pulse",
        name: "QR Pulse",
        lang: ["Python", "fastapi"],
        desc: "QR Pulse is a high-performance QR code generator and scanner API designed for developers who need fast, reliable, and flexible QR code solutions. With support for generating QR codes in PNG and Base64 formats, and powerful QR scanning from image URLs, base64 strings, or file uploads, QR Pulse is ideal for integrating into event ticketing systems, restaurant menus, digital business cards, payment platforms, and logistics tools. This lightweight REST API ensures seamless QR code creation and decoding in real time, making it perfect for websites, mobile apps, and automation workflows.",
        data: `

## Overview

QR Pulse is a fast and reliable API to **generate** and **scan** QR codes in multiple formats. Whether you're building a ticketing system, digital menu, or smart business tool — QR Pulse gives you seamless integration and developer-friendly control.

---

## Features

* ✅ Generate QR Codes in **PNG** or **Base64**
* ✅ Simple, stateless, lightning-fast
* ✅ Built for developers, startups, and automation

---

## Endpoints

### QR Code Generator

#### \`POST /generate/image\`

Returns PNG QR code from input text.

#### \`POST /generate/base64\`

Returns base64-encoded PNG QR code from input text.

---

### 🔹 Generate QR (Base64)

\`\`\`json
POST /generate/base64
Form:
{
  "data": "https://example.com"
}
\`\`\`

---

## Use Cases

* Event ticketing & check-ins
* Contactless restaurant menus
* Payment and business cards
* Logistics & inventory tracking
* Internal tools and automation
        `
    },
    {
        id: "secure-password-api",
        name: "Secure Password Generator API",
        lang: ["Python", "FastAPI"],
        desc: "Generate cryptographically secure passwords, API keys, and random tokens with full customization. Built for developers needing high-entropy values for login systems, authentication flows, or secure storage.",
        data: `
## 🔐 Overview

This API lets you generate **cryptographically secure random strings** ideal for passwords, tokens, and keys. Customize length, characters, and output formats.

---

## ✨ Features

* 🔒 Secure by default — uses Python's \`secrets\` module
* 🧩 Character selection — include/exclude symbols, digits, letters
* 🧪 Random tokens, passwords, or API keys
* 🎛️ Adjustable length and character pool
* ⚙️ Stateless and FastAPI-powered

---

## 🛠️ Use Cases

* Password generation for user onboarding
* API token issuance for apps
* Invite codes, license keys
* Secure OTP & session keys

---

## 🔗 Endpoint

**POST** \`/generate\`

Input:
\`\`\`json
{
"length": 16,
"include_uppercase": true,
"include_digits": true,
"include_symbols": false
}
\`\`\`

Output:
\`\`\`json
{
"password": "asD8keLqNMbPzvFy"
}
\`\`\`
        `
    },
    {
        id: "random-fake-data-api",
        name: "Random Fake Data Generator",
        lang: ["Python", "FastAPI"],
        desc: "Generate realistic fake data for testing and prototyping. Quickly produce emails, names, UUIDs, IPs, numbers, dates, and more — ideal for automation, dummy data, and mock APIs.",
        data: `
## Overview

This API helps developers **generate random fake data** for UI prototyping, backend seeding, and testing.

---

## ✨ Features

* 📧 Generate fake names, emails, IPs, UUIDs
* 🧪 Supports custom types like dates, booleans, hex, numbers
* 🔁 Generate bulk lists
* ⚡ High performance with FastAPI

---

## 🧰 Endpoints

**POST** \`/generate\`

Input:
\`\`\`json
{
"type": "email",
"count": 5
}
\`\`\`

Output:
\`\`\`json
["abc@mail.com", "user001@mail.net", ...]
\`\`\`

---

## Use Cases

* Backend testing
* Database mocking
* UI/UX demos
* Automation workflows
        `
    },
    {
        id: "universal-hash-api",
        name: "Universal Hash Generator API",
        lang: ["Python", "FastAPI"],
        desc: "A flexible API that generates cryptographic hash values from input text using multiple algorithms like MD5, SHA, BLAKE2, and SHAKE. Supports fixed and extendable output.",
        data: `
## 🔐 Overview

Generate secure hashes from text using a wide range of algorithms.

---

## ⚙️ Supported Algorithms

* MD5, SHA1, SHA256, SHA512
* SHA3 (224, 256, 384, 512)
* BLAKE2b, BLAKE2s
* SHAKE-128, SHAKE-256

---

## 🧪 Example

Input:
\`\`\`json
{
"text": "hello world",
"algorithm": "sha256"
}
\`\`\`

Output:
\`\`\`json
{
"hash": "a948904f2f0f479b8f8197694b30184b..."
}
\`\`\`

---

## Use Cases

* Password hashing
* File integrity checks
* Digital signatures
* Data comparison and validation
        `
    },
    {
        id: "password-strength-api",
        name: "Password Strength Checker API",
        lang: ["Python", "FastAPI"],
        desc: "Evaluate how secure a password is using real-time heuristics and optional breach checks. Provides instant feedback with recommendations to strengthen weak passwords.",
        data: `
## 🔍 Overview

This API evaluates the **strength and quality** of a password using character diversity and length heuristics.

---

## 🔐 Key Metrics

* Entropy score
* Common pattern checks
* Optional data breach warning
* Suggestions to improve

---

## 📥 Example

Input:
\`\`\`json
{ "password": "Shabari@123" }
\`\`\`

Output:
\`\`\`json
{
"score": 4,
"feedback": "Strong password",
"suggestions": []
}
\`\`\`

---

## 🧠 Use Cases

* Signup form validation
* Password manager tools
* Security checks in admin panels
        `

    }
]