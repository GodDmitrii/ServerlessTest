import AWS from 'aws-sdk';

const sqsClient = new AWS.SQS({
  region: "eu-central-1"
})

async function hello(event){
  console.log(sqsClient);
  console.log('-----------------');
  console.log(sqsClient.listQueues());
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
      },
    ),
  };
}
  export const handler = hello;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

