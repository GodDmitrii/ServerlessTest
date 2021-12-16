import AWS from 'aws-sdk';
import { SQSClient, CreateQueueCommand, AddPermissionCommand } from '@aws-sdk/client-sqs';

const sqsClient = new SQSClient({
  region: "eu-central-1"
})

async function hello(event){
  console.log('===========');
  // await sqsClient.listQueues({}, (err, data) =>{
  //   console.log('Hello');
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log(data);
  //   }
  // });
  // await sqsClient.createQueue({QueueName: 'SqsClient'}, function(err, data) {
  //   if (err) console.log(err, err.stack); // an error occurred
  //   else console.log(data);           // successful response
  // });
  const command = new CreateQueueCommand({QueueName: "SQSClient"});
  // const command1 = new AddPermissionCommand();
  // await sqsClient.send(command1);
  const data = await sqsClient.send(command);
  console.log(data);
  console.log("========");
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

