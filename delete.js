import { SQSClient, SendMessageCommand, ReceiveMessageCommand, DeleteMessageBatchCommand } from '@aws-sdk/client-sqs';

const sqsClient = new SQSClient({
  region: "eu-central-1"
});


async function deleteSqs(event){
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
  const command = new DeleteMessageBatchCommand({
    QueueUrl: "https://sqs.eu-central-1.amazonaws.com/489328671898/TestYML2",
    Entries: []
  });
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
  export const handler = deleteSqs;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

