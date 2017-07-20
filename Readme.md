
## OCAPI (Open Commerce  API)

Access to the Salesforce (Demandware) Open Commerce API using NodeJS. All the requests are promised based calles.

### Configuration

#### ClientID

Register a clientID using Account Manager
1. Adding a clientID for the OCAPI in your Account Manager
2. Add this clientID to /config/ocapi.json -> clientID
3. Encode (base64) the following String: BMUsername:BMPassword:ClientIDPassword and add this hash to /config/ocapi.json -> basicAuth

OCAPI uses the oAuth2 Authentification using grand types. For a Data-API Request we need at any time a valid token.
```
+---------+                                  +---------------+
|         |                                  |               |
|         |>--(A)- Client Authentication --->| Authorization |
| Client  |                                  |     Server    |
|         |<--(B)---- Access Token ---------<|               |
|         |                                  |               |
|         |>--(C)-- Data-API Request ------->|               |
+---------+                                  +---------------+
```

#### NodeJS
You must have nods.js (> Vers.8) and npm installed to run this app. After this, run the following command for installing packages:
```
npm install
```


more instructions and invocations comming soon..
