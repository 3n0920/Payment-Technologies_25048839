# Feature: Prepare payment details

## 1. User goal

Pet owners want to prepare payment details for a pet service before making payment. This allows them to check the service name and price before proceeding.

## 2. Scope

The feature will:
- Allow logged-in pet owners to prepare payment details.
- Check whether the selected service ID is valid.
- Display the service name and price.
- Show an error message if the service ID is invalid.

The feature will NOT:
- Process actual payments.
- Allow users to change the service price.
- Store payment transactions in the database.

## 3. Request

- HTTP Method: GET
- URL: `/payments/prepare/:serviceId`
- Input: Service ID through the URL parameter.
- Example: `/payments/prepare/1`

## 4. Service catalogue

The system will use a mock service catalogue containing service IDs, service names and prices.

| Service ID | Service Name | Price |
|---|---|---|
| 1 | To be confirmed | To be confirmed |
| 2 | To be confirmed | To be confirmed |
| 3 | To be confirmed | To be confirmed |

## 5. Successful response

- HTTP Status: 200 OK
- Content-Type: application/json
- JSON fields:
  - success: Boolean (true)
  - serviceId: Number
  - serviceName: String
  - price: Number

Example response:

{
  "success": true,
  "serviceId": 1,
  "serviceName": "To be confirmed",
  "price": 35
}

## 6. Unsuccessful response

If the requested service does not exist, the system will return:

- HTTP Status: 404 Not Found
- Content-Type: application/json
- success: Boolean (false)
- message: String explaining that the service was not found.

Example response:

{
  "success": false,
  "message": "Service not found"
}

## 7. Acceptance criteria

- AC1: The system allows a logged-in pet owner to prepare payment details.
- AC2: The system checks whether the requested service ID exists.
- AC3: If the service exists, the system returns the correct service ID, service name and price.
- AC4: If the service does not exist, the system returns a 404 error with an error message.
- AC5: The system gets the service price from the service catalogue and does not allow users to change it.

## 8. Open questions

- Should users be required to log in before preparing payment details?
- What are the final service names and prices in the service catalogue?
- Should the response include any additional payment information?
- Should the system support other payment methods in the future?


Read specs\prepare-payment.md and inspect this Express app.
Do not modify files yet.
Plan these changes using existing CommonJS patterns:
  Create data\mockServices.js
  Create controllers\paymentController.js
  Create routes\paymentRoutes.js
  Modify app.js to register the router
Explain responsibilities, imports/exports and verification steps.
No packages, database changes, EJS pages or service layer.
Flag unresolved questions. Wait for approval.
