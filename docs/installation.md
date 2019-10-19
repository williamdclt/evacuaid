# Installation

In development:
- Read about the [serverless workflow](serverless_workflow.md) to understand why there is no local backend
- webpack-dev-server listens on the port 3000
  - it serves your frontend app's bundle.js
  - it manages hot reloading




## First Setup
Go through this once when you install the project, you shouldn't need to do that again.

- **Set up your backend dev environment**
    Follow [serverless workflow](serverless_workflow.md#how-to-implement) 
 
- **Deploy the backend to your personal stack on AWS**
    ```bash
    cd backend
    yarn install
    yarn deploy --aws-profile <PROFILE_NAME>
    ```
  
- **Copy your API url**
    
    At the end, the script output:
    ```
    endpoints:
        GET - https://xxxxxxxxxx.execute-api.eu-west-2.amazonaws.com/dev/hello
        [...]
    ```
    Copy `https://xxxxxxxxxx.execute-api.eu-west-2.amazonaws.com/dev`
    and paste it in `frontend/.env.development.local` that you copied
    from `frontend/.env.development`
    ```dotenv
    #frontend/.env.development.local
  
    REACT_APP_API_BASE_URL=https://xxxxxxxxxx.execute-api.eu-west-2.amazonaws.com/dev
    ```
- **Copy your Cognito Ids**
    
    Copy the following variables in `frontend/.env.development.local`
    
    - Get your User Pool Id
        ```bash
        AWS_DEFAULT_REGION=eu-west-2 aws cognito-idp list-user-pools --max-results 60
        ```
   
        In the list of user pools in your terminal, find your user pool id.
        
    - Get your App Client Id
        ```bash
        AWS_DEFAULT_REGION=eu-west-2 aws cognito-idp list-user-pool-clients --user-pool-id <YOUR_USER_POOL_ID>
        ```
    
        In the list of user pool clients in your terminal, find your user pool client id.
        
    - Get your Identity Pool Id
        ```bash
        AWS_DEFAULT_REGION=eu-west-2 aws cognito-identity list-identity-pools --max-results 60
        ```
    
        In the list of identity pools in your terminal, find your identity pool id.

- **Create your Cognito User**

    Register a user:
    ```bash
    aws cognito-idp sign-up --region eu-west-2 --client-id <YOUR_APP_CLIENT_ID> --username <YOUR_USERNAME> --password <YOUR_PASSWORD>
    ```
    
    Confirm the user registration:
    ```bash
    aws cognito-idp admin-confirm-sign-up --region eu-west-2 --user-pool-id <YOUR_USER_POOL_ID> --username <YOUR_USERNAME>
    ```

## Start the app

What you need to do to (re)start the project:

- start the frontend:
  ```bash
  cd frontend
  yarn install
  yarn start
  ```

  The project should now be running at [localhost:3000](http://localhost:3000).
- You can authenticate your-self with the credentials you provided to create your user.

