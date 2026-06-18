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

    Angular[Angular SPA]

    APIM[Azure API Management]

    subgraph SouqFlow["SouqFlow API (.NET 8)"]
        Identity[Identity Module]
        Product[Product Module]
        Cart[Cart Module]
        Order[Order Module]
        Shipping[Shipping Module]
    end

    Postgres[Azure PostgreSQL Flexible Server]

    Cosmos[Azure Cosmos DB]

    Customer --> Angular
    Angular --> APIM
    APIM --> Identity

    Identity --> Postgres
    Product --> Postgres
    Cart --> Postgres
    Order --> Postgres
    Shipping --> Postgres
```