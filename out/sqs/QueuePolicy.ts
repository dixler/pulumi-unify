
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddPermissionRequest,
    ChangeMessageVisibilityRequest,
    ChangeMessageVisibilityBatchRequest,
    CreateQueueRequest,
    DeleteMessageRequest,
    DeleteMessageBatchRequest,
    DeleteQueueRequest,
    GetQueueAttributesRequest,
    GetQueueUrlRequest,
    ListDeadLetterSourceQueuesRequest,
    ListQueueTagsRequest,
    PurgeQueueRequest,
    ReceiveMessageRequest,
    RemovePermissionRequest,
    SendMessageRequest,
    SendMessageBatchRequest,
    SetQueueAttributesRequest,
    TagQueueRequest,
    UntagQueueRequest,
    ChangeMessageVisibilityBatchResult,
    CreateQueueResult,
    DeleteMessageBatchResult,
    GetQueueAttributesResult,
    GetQueueUrlResult,
    ListDeadLetterSourceQueuesResult,
    ListQueueTagsResult,
    ReceiveMessageResult,
    SendMessageResult,
    SendMessageBatchResult
} from "aws-sdk/clients/sqs";
const schema = require("../apis/sqs-2012-11-05.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sqs.QueuePolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.sqs.QueuePolicy>) {
        super(...args)
        this.client = new awssdk.SQS()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof AddPermissionRequest & keyof AddPermissionRequest]: (AddPermissionRequest & AddPermissionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addPermission(
          this.ops["AddPermission"].applicator.apply(partialParams)
        );
    }

    invokeChangeMessageVisibility(partialParams: ToOptional<{
      [K in keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest]: (ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changeMessageVisibility(
          this.ops["ChangeMessageVisibility"].applicator.apply(partialParams)
        );
    }

    invokeChangeMessageVisibilityBatch(partialParams: ToOptional<{
      [K in keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest]: (ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest)[K]
    }>): Request<ChangeMessageVisibilityBatchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changeMessageVisibilityBatch(
          this.ops["ChangeMessageVisibilityBatch"].applicator.apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof CreateQueueRequest]: (CreateQueueRequest & CreateQueueRequest)[K]
    }>): Request<CreateQueueResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQueue(
          this.ops["CreateQueue"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMessage(partialParams: ToOptional<{
      [K in keyof DeleteMessageRequest & keyof DeleteMessageRequest]: (DeleteMessageRequest & DeleteMessageRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMessage(
          this.ops["DeleteMessage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMessageBatch(partialParams: ToOptional<{
      [K in keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest]: (DeleteMessageBatchRequest & DeleteMessageBatchRequest)[K]
    }>): Request<DeleteMessageBatchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMessageBatch(
          this.ops["DeleteMessageBatch"].applicator.apply(partialParams)
        );
    }

    invokeDeleteQueue(partialParams: ToOptional<{
      [K in keyof DeleteQueueRequest & keyof DeleteQueueRequest]: (DeleteQueueRequest & DeleteQueueRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQueue(
          this.ops["DeleteQueue"].applicator.apply(partialParams)
        );
    }

    invokeGetQueueAttributes(partialParams: ToOptional<{
      [K in keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest]: (GetQueueAttributesRequest & GetQueueAttributesRequest)[K]
    }>): Request<GetQueueAttributesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueueAttributes(
          this.ops["GetQueueAttributes"].applicator.apply(partialParams)
        );
    }

    invokeGetQueueUrl(partialParams: ToOptional<{
      [K in keyof GetQueueUrlRequest & keyof GetQueueUrlRequest]: (GetQueueUrlRequest & GetQueueUrlRequest)[K]
    }>): Request<GetQueueUrlResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueueUrl(
          this.ops["GetQueueUrl"].applicator.apply(partialParams)
        );
    }

    invokeListDeadLetterSourceQueues(partialParams: ToOptional<{
      [K in keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest]: (ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest)[K]
    }>): Request<ListDeadLetterSourceQueuesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDeadLetterSourceQueues(
          this.ops["ListDeadLetterSourceQueues"].applicator.apply(partialParams)
        );
    }

    invokeListQueueTags(partialParams: ToOptional<{
      [K in keyof ListQueueTagsRequest & keyof ListQueueTagsRequest]: (ListQueueTagsRequest & ListQueueTagsRequest)[K]
    }>): Request<ListQueueTagsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQueueTags(
          this.ops["ListQueueTags"].applicator.apply(partialParams)
        );
    }

    invokePurgeQueue(partialParams: ToOptional<{
      [K in keyof PurgeQueueRequest & keyof PurgeQueueRequest]: (PurgeQueueRequest & PurgeQueueRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purgeQueue(
          this.ops["PurgeQueue"].applicator.apply(partialParams)
        );
    }

    invokeReceiveMessage(partialParams: ToOptional<{
      [K in keyof ReceiveMessageRequest & keyof ReceiveMessageRequest]: (ReceiveMessageRequest & ReceiveMessageRequest)[K]
    }>): Request<ReceiveMessageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.receiveMessage(
          this.ops["ReceiveMessage"].applicator.apply(partialParams)
        );
    }

    invokeRemovePermission(partialParams: ToOptional<{
      [K in keyof RemovePermissionRequest & keyof RemovePermissionRequest]: (RemovePermissionRequest & RemovePermissionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removePermission(
          this.ops["RemovePermission"].applicator.apply(partialParams)
        );
    }

    invokeSendMessage(partialParams: ToOptional<{
      [K in keyof SendMessageRequest & keyof SendMessageRequest]: (SendMessageRequest & SendMessageRequest)[K]
    }>): Request<SendMessageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendMessage(
          this.ops["SendMessage"].applicator.apply(partialParams)
        );
    }

    invokeSendMessageBatch(partialParams: ToOptional<{
      [K in keyof SendMessageBatchRequest & keyof SendMessageBatchRequest]: (SendMessageBatchRequest & SendMessageBatchRequest)[K]
    }>): Request<SendMessageBatchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendMessageBatch(
          this.ops["SendMessageBatch"].applicator.apply(partialParams)
        );
    }

    invokeSetQueueAttributes(partialParams: ToOptional<{
      [K in keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest]: (SetQueueAttributesRequest & SetQueueAttributesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setQueueAttributes(
          this.ops["SetQueueAttributes"].applicator.apply(partialParams)
        );
    }

    invokeTagQueue(partialParams: ToOptional<{
      [K in keyof TagQueueRequest & keyof Omit<TagQueueRequest, "QueueUrl">]: (TagQueueRequest & Omit<TagQueueRequest, "QueueUrl">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagQueue(
          this.ops["TagQueue"].applicator.apply(partialParams)
        );
    }

    invokeUntagQueue(partialParams: ToOptional<{
      [K in keyof UntagQueueRequest & keyof Omit<UntagQueueRequest, "QueueUrl">]: (UntagQueueRequest & Omit<UntagQueueRequest, "QueueUrl">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagQueue(
          this.ops["UntagQueue"].applicator.apply(partialParams)
        );
    }
}