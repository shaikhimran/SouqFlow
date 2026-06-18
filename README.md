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

## SouqFlow V1 Architecture

```mermaid
flowchart TD

    Customer[Customer]

    Angular[Angular SPA<br/>Product Catalog<br/>Cart<br/>Checkout<br/>Orders<br/>Shipment Tracking]

    APIM[Azure API Management<br/>API Gateway<br/>Authentication<br/>Rate Limiting]

    API[SouqFlow API (.NET 8)<br/>Identity Module<br/>Product Module<br/>Cart Module<br/>Order Module<br/>Shipping Module]

    Postgres[(Azure PostgreSQL<br/>Flexible Server<br/>Schemas:<br/>identity<br/>product<br/>order<br/>shipping)]

    Cosmos[(Azure Cosmos DB<br/>Shipment Events<br/>User Activity<br/>Product Views)]

    Customer --> Angular
    Angular --> APIM
    APIM --> API
    API --> Postgres
    API --> Cosmos
```


