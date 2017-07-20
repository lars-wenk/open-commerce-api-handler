
## OCAPI (Open Commerce  API)

Access to the Salesforce (Demandware) Open Commerce API using NodeJS. All the requests are promised based calles.

### Configuration

#### ClientID

Register a clientID using Account Manager
1. Adding a clientID for the OCAPI in your Account Manager
2. Add this clientID to /config/ocapi.json -> clientID
3. Encode (base64) the following String: BMUsername:BMPassword:ClientIDPassword and add this hash to /config/ocapi.json -> basicAuth

OCAPI uses the oAuth2 Authentification using grand types. For a Data-API Request we need a valid token at any time.
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

## Job Execution for execution a code replication

### Data Ressources
Adding a Data-Ressource in the Open Commerce API Settings like this:
```
{
  "resource_id":"/jobs/*/executions",
  "methods":["post"],
  "read_attributes":"(**)",
  "write_attributes":"(**)"
}
```
### Code Replication
1. Create a new Code Replication Process
2. Select the "Job Step" Activation and the Target (Development/Production)
3. Copy the generated unique process ID

### Job Schedule
1. Create a new Job Schedule
2. Switch to Tab "Step Configurator"
3. Add a workflow and select the "ExecutePreconfiguredCodeReplicationProcess"
4. Set a Workflow ID and paste the process ID
5. Paste the Workflow ID in the config/ocapi.json 



more instructions and invocations comming soon..
