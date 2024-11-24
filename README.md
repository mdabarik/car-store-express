# Car Store Backend

This project is developed using TypeScript, Express, Mongoose.

## Features

1. Car Management: Create, Read, Update, and Delete (CRUD) operations for cars.

2. Order Management: Place car orders and getting total revenues.

3. Data Validation: Data is validated using Mongoose and Joi for data integrity.

4. Aggregation: Calculate total revenue from orders.

5. Error Handling: Standard error handling for validation failures, not-found resources (404), and more.

6. API Structure: Well-structured and documented API endpoints.

# Project Setup

## Initial requirements

**Nodejs & NPM:** Download, install & setup node and npm

**MongoDB:** Setup MongoDB locally and on cloud

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local instance or cloud-based)

## 1. initialize Project

```bash
npm init -y
```

## 2. install project dependencies

```bash
npm install typescript
npm install express
npm install ts-node-dev
npm install dotenv
npm install mongoose
npm install cors
npm install joi
```

## 3. configure environmental variables in (.env file)

```bash
MONGO_URI=your_mongodb_uri
PORT=3000
```

## 4. Running the Application

```bash
npm run dev
```

## 5. add scripts to the packages.json (npm run dev) & setup eslint, prettier for better development experience

```bash
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "lint": "npx eslint src --ignore-pattern '.js,.ts'",
    "lint:fix": "npx eslint src --fix",
    "format": "npx prettier --ignore-path .prettierignore --write \"**/*.{js,ts,json}\"",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

## folder structure:

car-store/
├── src/
│ ├── config/
│ │ └── db.ts
│ ├── modules/
│ │ ├── car/
│ │ │ ├── car.controller.ts
│ │ │ └── car.interface.ts
│ │ │ ├── car.model.ts
│ │ │ └── car.route.ts
| │ │ └── car.service.ts
│ │ │ ├── car.validation.ts
│ │ ├── order/
│ │ │ ├── order.controller.ts
│ │ │ └── order.interface.ts
│ │ │ ├── order.model.ts
│ │ │ └── order.route.ts
│ │ │ └── order.service.ts
│ │ │ └── order.validation.ts
│ └── app.ts
│ └── server.ts
├── .env
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
