import { SQSClient, SendMessageCommand, SetQueueAttributesCommand,ReceiveMessageCommand,Message, DeleteMessageBatchCommand, DeleteMessageCommand, PurgeQueueCommand, ListQueuesCommand} from '@aws-sdk/client-sqs';

const sqsClient = new SQSClient({
  region: "eu-central-1"
});

async function deleteSqsFromDlq(event){
  console.log('===========!');
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

  const command = new ReceiveMessageCommand(
    {
      QueueUrl:'https://sqs.eu-central-1.amazonaws.com/489328671898/DLQYaml2',
    }
  );
  // const command1 = new AddPermissionCommand();
  // await sqsClient.send(command1);
  while(true){
    try{
      await sqsClient.send(command);
    }
    catch(e){
      break;
    }
    

  // co
  // const message = data['Messages'];
  // console.log(message);
  // message.map((el, i) => {
  //   console.log(i +" "+ el);
  // })
  // const receipt_handle = message['ReceiptHandle'];
  // console.log(receipt_handle);
  // const command2 = new DeleteMessageCommand({
  //   QueueUrl: 'https://sqs.eu-central-1.amazonaws.com/489328671898/DLQYaml2',
  //   ReceiptHandle: receipt_handle
  // })
  }
  console.log("========");
  // const deletedData = await sqsClient.send(command2);
  // console.log(deletedData);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'dadada',
        test:'wwwww'
      },
    ),
  };
}
  export const handler = deleteSqsFromDlq;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

