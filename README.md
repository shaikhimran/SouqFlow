# SouqFlow

Cloud Native Commerce & Fulfillment Platform
## Features

- Product Catalog
- Shopping Cart
- Order Management
- Shipping Tracking
- JWT Authentication
- Notification

## Technology Stack

- Angular
- .NET 10
- PostgreSQL
- Docker
- Azure


SouqFlow -Architecture Diagrams 

V1 (Modular Monolith)
┌──────────────┐
│   Customer   │
└──────┬───────┘
       │
       ▼

┌──────────────────────────────┐
│         Angular SPA          │
│                              │
│ Product Catalog              │
│ Cart                         │
│ Checkout                     │
│ Orders                       │
│ Shipment Tracking            │
└──────────────┬───────────────┘
               │ HTTPS
               ▼

┌──────────────────────────────┐
│ Azure API Management         │
│                              │
│ API Gateway                  │
│ Rate Limiting                │
│ Authentication               │
└──────────────┬───────────────┘
               │
               ▼

┌───────────────────────────────────────────┐
│             SouqFlow API                  │
│                 .NET 8                    │
│                                           │
│ ┌───────────────────────────────────────┐ │
│ │ Identity Module                       │ │
│ ├───────────────────────────────────────┤ │
│ │ Product Module                        │ │
│ ├───────────────────────────────────────┤ │
│ │ Cart Module                           │ │
│ ├───────────────────────────────────────┤ │
│ │ Order Module                          │ │
│ ├───────────────────────────────────────┤ │
│ │ Shipping Module                       │ │
│ └───────────────────────────────────────┘ │
└──────────────┬────────────────────────────┘
               │
               ▼

┌──────────────────────────────┐
│ Azure PostgreSQL             │
│ Flexible Server              │
│                              │
│ Schemas                      │
│ ├── identity                 │
│ ├── product                  │
│ ├── order                    │
│ └── shipping                 │
└──────────────────────────────┘


