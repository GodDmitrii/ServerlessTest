import AWS from 'aws-sdk';
// import { SQSClient, SendMessageCommand, ReceiveMessageCommand } from '@aws-sdk/client-sqs';
AWS.config.update({region: 'eu-central-1'});
// const sqsClient = new SQSClient({
//   region: "eu-central-1"
// })
const sqsClient = new AWS.SQS({apiVersion: '2012-11-05'});
async function hello(event){
  console.log('===========');

  const receiveParams = {
    "QueueUrl": "https://sqs.eu-central-1.amazonaws.com/489328671898/TestYML2",
   };
  const data = sqsClient.receiveMessage(receiveParams, function(er, data){
    if(er){
      console.log('3');
      console.log('error');
    }else{
      console.log('322');
      console.log(data);
    }
  }).promise();
  const data2 = await sqsClient.getQueueUrl({"QueueName": "TestYML2"},function(er, data){
    console.log('cccc');
  }).promise();
  console.log(await data2);
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
  // const command = new ReceiveMessageCommand({
  //   QueueUrl: "https://sqs.eu-central-1.amazonaws.com/489328671898/TestYML2"
  // });

  // const command1 = new AddPermissionCommand();
  // await sqsClient.send(command1);
  // const data = await sqsClient.send(command);
  // console.log(data);
  // console.log('---------');
  // console.log(message);
  console.log("========");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'r',
      },
    ),
  };
}
  export const handler = hello;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

