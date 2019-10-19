# Serverless

## Why Serverless

    💰 Cost reduction
    👷‍♂️ #NoOps
    💻 Developers focus on delivering business value
    📈 More scalable
    🌳 Greener

## The Architecture

-   **Runtime**: Node (transpiled from TS via webpack)
-   **Provider**: AWS
-   **Compute Service**: Lambda
-   **Database**: DynamoDB
-   **Infrastructure as code**: Serverless

## Best Practices:

Unlike traditional web application frameworks, there is a lot of freedom with Serverless applications. It is also a fairly new technology, so best practices are emergent.

Current best practices:

-   Use dynamoDB for my database rather than traditional SQL.
-   No lambda calls another lambda function (slow and complex debugging)
-   The functions of my application do only one thing (fine granularity
-   Use as few libraries in your functions as possible to keep package small => faster deployment and cold starts.
-   One function per http route
-   Only code that is the specific business logic of the application, using services for all other functions (e.g. Cognito for Authentication).
-   _(In the future we will move to more event driven architectures making use of EventBridge, but we are not yet at that point of maturity with event driven architectures.)_

To Do:

[ ] Cognito
[x] DynamoDB
[ ] Example DynamoDB schema
[ ] Dynamo DB design doc
[ ] Testing of lambda function
[ ] Thundra Logging
[ ] (Admin solution - React Admin)
[ ] Forge CI
