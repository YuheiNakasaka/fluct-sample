# AWS Lambda + API Gateway + fluct sample

## Requirements

- AWS account
- IAM role(AWSLambdaBasicExecutionRole)
- node
- fluct

### Set up package.json

```
{
  "name": "lambda-apigateway-fluct-template",
  "private": true,
  "fluct": {
    "accountId": "my_account_id", // 0123456789
    "restapiId": null,
    "roleName": "my_iam_role_name", // lambda_basic_execution
  }
}
```

## Development flow

### 1. Start local server

```
$ fluct server
```

### 2. Write some code

### 3. Deploy

create .zip, upload lambda, invoke it with api gateway and generate endpoint url.

```
$ fluct deploy
```

## Sample actions

### sum

GET /sum gets the parameters of x and y and returns the result that summed up them.

```
$ curl https://example.execute-api.us-east-1.amazonaws.com/production/sum?x=10&y=3
{"x":"10","y":"3","z":13}
```