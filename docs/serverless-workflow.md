# Serverless Workflow

## Introduction

With Serverless, a local backend is no more needed. Each developer could use
his personal stack on the cloud provider. It doesn't cost too much because each service
pricing are on demand and only one developer use his personal stack. 

It's allow you to:
- Develop in an iso production environment.
- Invoke a function locally while triggering the rest of the stack online.

It's possible because:
- The deployment process is quick.
- The deployment scripts can be easily changed to deploy an other stack.
- There are few costs because each service are on demand priced and only one developer use his personal stack.

The main downsides are:
- you need an internet connection to develop.
- deploying is slower than running code locally, which slows down the feedback loop.

If you can't or don't want to use online stacks to develop, there are ways to create local stacks: 
[Serverless-offline](https://github.com/dherault/serverless-offline) and/or [AWS localstack](https://github.com/localstack/localstack).
Be careful it's way more complicated to correctly set up a local stack
than using an online stack and quite far from being iso production.

:warning: if you're not using only on demand priced services, 
you will probably need to set up a local stack

## <span id=how-to-implement>How to implement?</span>


You need to be authenticated as a user with enough permissions to deploy your stack and invoke your lambdas.

The best practice is to have an IAM programmatic access only user with an attached policy for serverless required permissions.

- **Create an IAM user per developer**

    -   Go on the AWS IAM console or ask to an admin.
    -   Add new user (go to **IAM** > **Users** > **Add user**)
        -   Select programmatic access only
        -   Name it `{name}-{serverless}` (e.g. `ben-serverless`)
    -   Attach a policy matching [policy.json](./policy.json)
    -   Download the credential file provided and send it to the developer.

- **Create AWS profiles on your computer**
    -   First ensure you have the awscli library installed
    (`brew install awscli` or `sudo apt-get install awscli`)
    
    -  Then you can use `aws configure` to set up your default profile.
    
        You can set up multiple profile with 
        `aws configure --profile <PROFILE_NAME>` or adding it directly in `~/.aws/credentials`
        ```
        [<PROFILE_NAME>]
        aws_access_key_id = <YOUR_ACCESS_KEY>
        aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
        region = eu-west-2
        ```
- **Use your profiles**

    [Serverless framework](https://serverless.com/framework/docs/providers/aws/) is used this project.
    The `serverless` command is hidden behind the `yarn` scripts. 
    
    By default `serverless` use your `default` AWS profile. But there are two ways to override it:
    - use the `yarn` script with `--aws-profile <PROFILE_NAME>`
    
        Example
        ```
        yarn deploy:function hello --profile ben-serverless
        ```
    - Set up environment variable `AWS_PROFILE=<PROFILE_NAME>`
    
        You can add `export AWS_PROFILE=<PROFILE_NAME>` to your `.bashrc`, `.zshrc` or equivalent depending on your shell to add your profile during your project
   
- **Deploy and use your personal stack**
    - ***#TODO the developer should be able to put the name of his personal stack
         in an uncommitted file. And the deploy script should throw an error if the .env
         is not set to avoid the deployment of an unwanted stack.***
    
    To deploy and invoke your functions, use :
    -   Deploy: `yarn deploy`
    -   Deploy a single function: `yarn deploy:function <function_name>`
    -   Invoke Remote: `yarn invoke:funtion <function_name>`
    -   Invoke Local: `yarn invoke:local:funtion <function_name>`
    -   Display logs: `yarn logs:function <function_name>`
    -   Remove the stack: `yarn remove:stack`
    
**Further reading on credentials**
-   [Docs from `serverless`](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md)
  


