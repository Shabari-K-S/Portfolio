

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
        id: "0",
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
        id: "1",
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
]