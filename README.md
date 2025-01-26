#Project Name
Product Management System

#Description
This project is designed to provide a comprehensive product management solution. It allows vendors to manage products, inventory, and pricing, as well as receive and allocate orders based on price and stock availability. The system integrates with a client portal for order updates and status tracking. The application also supports user authentication and payment integration.

#Major Features
User Authentication: Separate authentication flows for employees and members.
Product and Image Management: Vendors can configure pricing, manage inventory, and upload product images.
Order Management: The system processes orders, updating vendors based on pricing and stock availability.
Payment Integration: Integration with PayFast for secure payments.
Responsive UI: The front-end features a responsive navigation bar built with Bootstrap and registration forms styled with Tailwind CSS.
Asynchronous Communication: Handles new order notifications and status updates via asynchronous communication with the client portal.
#Technologies Used
Angular (CLI version 17.3.11)
ASP.NET Core
Bootstrap (for responsive design)
Tailwind CSS (for styling)
PowerShell (for command-line tasks)
OAuth 2.0 / OpenID Connect (for user authentication)
C# (.NET Core) (backend)
Entity Framework (Code First) (for database modeling)
Public Cloud-based PaaS (for deployment)
Setup Instructions
Prerequisites
Node.js (latest LTS version recommended)
Angular CLI (version 17.3.11)
.NET Core SDK (minimum version 6.0)
Additional dependencies (if applicable, e.g., database software)

Steps
#Clone the repository:
git clone [repository_url]
#Navigate to the project directory:
cd [project_directory]
#Install dependencies:
npm install
#Run the Angular development server:
ng serve
#Start the backend server:
dotnet run
#Access the application at http://localhost:4200.

#Features
User authentication for both employees and members.
Product management including price and inventory configuration.
Integration with PayFast for payments.
Tailwind CSS styled registration forms.
A responsive navigation bar using Bootstrap.

#Directory Structure

├── src
│   ├── app
│   │   ├── components
│   │   ├── services
│   │   └── models
│   └── assets
│       └── images
├── backend
│   ├── Controllers
│   ├── Models
│   ├── Repositories
│   └── Services
Deployment
Build the Angular application:
ng build --prod

Publish the backend application:
dotnet publish -c Release

Deploy the dist folder (Angular) and the backend publish folder to your hosting provider.

Authors
Gillian Mamuremi (u16075332@tuks.co.za)



#Acknowledgments
Special thanks to Moyo 

#This system allows:

A vendor to login.
A vendor to configure prices and inventory per product.
The system to receive asynchronous events regarding orders.
The system to allocate orders to vendors based on price and inventory.
