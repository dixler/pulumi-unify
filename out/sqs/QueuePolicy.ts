
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ChangeMessageVisibilityBatchRequest,
    CreateQueueRequest,
    DeleteMessageBatchRequest,
    GetQueueAttributesRequest,
    GetQueueUrlRequest,
    ListDeadLetterSourceQueuesRequest,
    ListQueueTagsRequest,
    ListQueuesRequest,
    ReceiveMessageRequest,
    SendMessageRequest,
    SendMessageBatchRequest,
    ChangeMessageVisibilityBatchResult,
    CreateQueueResult,
    DeleteMessageBatchResult,
    GetQueueAttributesResult,
    GetQueueUrlResult,
    ListDeadLetterSourceQueuesResult,
    ListQueueTagsResult,
    ListQueuesResult,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sqs.QueuePolicy>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SQS()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeChangeMessageVisibilityBatch(partialParams: ToOptional<{
      [K in keyof ChangeMessageVisibilityBatchRequest & keyof Omit<ChangeMessageVisibilityBatchRequest, "QueueUrl">]: (ChangeMessageVisibilityBatchRequest)[K]
    }>): Request<ChangeMessageVisibilityBatchResult, AWSError> {
        this.boot();
        return this.client.changeMessageVisibilityBatch(
          this.ops["ChangeMessageVisibilityBatch"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest]: (CreateQueueRequest)[K]
    }>): Request<CreateQueueResult, AWSError> {
        this.boot();
        return this.client.createQueue(
          this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeDeleteMessageBatch(partialParams: ToOptional<{
      [K in keyof DeleteMessageBatchRequest & keyof Omit<DeleteMessageBatchRequest, "QueueUrl">]: (DeleteMessageBatchRequest)[K]
    }>): Request<DeleteMessageBatchResult, AWSError> {
        this.boot();
        return this.client.deleteMessageBatch(
          this.ops["DeleteMessageBatch"].apply(partialParams)
        );
    }

    invokeGetQueueAttributes(partialParams: ToOptional<{
      [K in keyof GetQueueAttributesRequest & keyof Omit<GetQueueAttributesRequest, "QueueUrl">]: (GetQueueAttributesRequest)[K]
    }>): Request<GetQueueAttributesResult, AWSError> {
        this.boot();
        return this.client.getQueueAttributes(
          this.ops["GetQueueAttributes"].apply(partialParams)
        );
    }

    invokeGetQueueUrl(partialParams: ToOptional<{
      [K in keyof GetQueueUrlRequest]: (GetQueueUrlRequest)[K]
    }>): Request<GetQueueUrlResult, AWSError> {
        this.boot();
        return this.client.getQueueUrl(
          this.ops["GetQueueUrl"].apply(partialParams)
        );
    }

    invokeListDeadLetterSourceQueues(partialParams: ToOptional<{
      [K in keyof ListDeadLetterSourceQueuesRequest & keyof Omit<ListDeadLetterSourceQueuesRequest, "QueueUrl">]: (ListDeadLetterSourceQueuesRequest)[K]
    }>): Request<ListDeadLetterSourceQueuesResult, AWSError> {
        this.boot();
        return this.client.listDeadLetterSourceQueues(
          this.ops["ListDeadLetterSourceQueues"].apply(partialParams)
        );
    }

    invokeListQueueTags(partialParams: ToOptional<{
      [K in keyof ListQueueTagsRequest & keyof Omit<ListQueueTagsRequest, "QueueUrl">]: (ListQueueTagsRequest)[K]
    }>): Request<ListQueueTagsResult, AWSError> {
        this.boot();
        return this.client.listQueueTags(
          this.ops["ListQueueTags"].apply(partialParams)
        );
    }

    invokeListQueues(partialParams: ToOptional<{
      [K in keyof ListQueuesRequest]: (ListQueuesRequest)[K]
    }>): Request<ListQueuesResult, AWSError> {
        this.boot();
        return this.client.listQueues(
          this.ops["ListQueues"].apply(partialParams)
        );
    }

    invokeReceiveMessage(partialParams: ToOptional<{
      [K in keyof ReceiveMessageRequest & keyof Omit<ReceiveMessageRequest, "QueueUrl">]: (ReceiveMessageRequest)[K]
    }>): Request<ReceiveMessageResult, AWSError> {
        this.boot();
        return this.client.receiveMessage(
          this.ops["ReceiveMessage"].apply(partialParams)
        );
    }

    invokeSendMessage(partialParams: ToOptional<{
      [K in keyof SendMessageRequest & keyof Omit<SendMessageRequest, "QueueUrl">]: (SendMessageRequest)[K]
    }>): Request<SendMessageResult, AWSError> {
        this.boot();
        return this.client.sendMessage(
          this.ops["SendMessage"].apply(partialParams)
        );
    }

    invokeSendMessageBatch(partialParams: ToOptional<{
      [K in keyof SendMessageBatchRequest & keyof Omit<SendMessageBatchRequest, "QueueUrl">]: (SendMessageBatchRequest)[K]
    }>): Request<SendMessageBatchResult, AWSError> {
        this.boot();
        return this.client.sendMessageBatch(
          this.ops["SendMessageBatch"].apply(partialParams)
        );
    }
}