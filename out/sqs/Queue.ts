
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sqs.Queue {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.sqs.Queue>) {
        super(...args)
        this.client = new awssdk.SQS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/sqs-2012-11-05.normal.json"), this.client)
    }

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest]: (AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest)[K]
    }>): void {
        return this.client.addPermission(
            this.ops["AddPermission"].apply(partialParams)
        );
    }

    invokeChangeMessageVisibility(partialParams: ToOptional<{
      [K in keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest & keyof ChangeMessageVisibilityRequest]: (ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest & ChangeMessageVisibilityRequest)[K]
    }>): void {
        return this.client.changeMessageVisibility(
            this.ops["ChangeMessageVisibility"].apply(partialParams)
        );
    }

    invokeChangeMessageVisibilityBatch(partialParams: ToOptional<{
      [K in keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest & keyof ChangeMessageVisibilityBatchRequest]: (ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest & ChangeMessageVisibilityBatchRequest)[K]
    }>): ChangeMessageVisibilityBatchResult {
        return this.client.changeMessageVisibilityBatch(
            this.ops["ChangeMessageVisibilityBatch"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest]: (CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest)[K]
    }>): CreateQueueResult {
        return this.client.createQueue(
            this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeDeleteMessage(partialParams: ToOptional<{
      [K in keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest & keyof DeleteMessageRequest]: (DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest & DeleteMessageRequest)[K]
    }>): void {
        return this.client.deleteMessage(
            this.ops["DeleteMessage"].apply(partialParams)
        );
    }

    invokeDeleteMessageBatch(partialParams: ToOptional<{
      [K in keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest & keyof DeleteMessageBatchRequest]: (DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest & DeleteMessageBatchRequest)[K]
    }>): DeleteMessageBatchResult {
        return this.client.deleteMessageBatch(
            this.ops["DeleteMessageBatch"].apply(partialParams)
        );
    }

    invokeDeleteQueue(partialParams: ToOptional<{
      [K in keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest]: (DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest)[K]
    }>): void {
        return this.client.deleteQueue(
            this.ops["DeleteQueue"].apply(partialParams)
        );
    }

    invokeGetQueueAttributes(partialParams: ToOptional<{
      [K in keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest & keyof GetQueueAttributesRequest]: (GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest & GetQueueAttributesRequest)[K]
    }>): GetQueueAttributesResult {
        return this.client.getQueueAttributes(
            this.ops["GetQueueAttributes"].apply(partialParams)
        );
    }

    invokeGetQueueUrl(partialParams: ToOptional<{
      [K in keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest & keyof GetQueueUrlRequest]: (GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest & GetQueueUrlRequest)[K]
    }>): GetQueueUrlResult {
        return this.client.getQueueUrl(
            this.ops["GetQueueUrl"].apply(partialParams)
        );
    }

    invokeListDeadLetterSourceQueues(partialParams: ToOptional<{
      [K in keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest & keyof ListDeadLetterSourceQueuesRequest]: (ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest & ListDeadLetterSourceQueuesRequest)[K]
    }>): ListDeadLetterSourceQueuesResult {
        return this.client.listDeadLetterSourceQueues(
            this.ops["ListDeadLetterSourceQueues"].apply(partialParams)
        );
    }

    invokeListQueueTags(partialParams: ToOptional<{
      [K in keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest & keyof ListQueueTagsRequest]: (ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest & ListQueueTagsRequest)[K]
    }>): ListQueueTagsResult {
        return this.client.listQueueTags(
            this.ops["ListQueueTags"].apply(partialParams)
        );
    }

    invokePurgeQueue(partialParams: ToOptional<{
      [K in keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest & keyof PurgeQueueRequest]: (PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest & PurgeQueueRequest)[K]
    }>): void {
        return this.client.purgeQueue(
            this.ops["PurgeQueue"].apply(partialParams)
        );
    }

    invokeReceiveMessage(partialParams: ToOptional<{
      [K in keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest & keyof ReceiveMessageRequest]: (ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest & ReceiveMessageRequest)[K]
    }>): ReceiveMessageResult {
        return this.client.receiveMessage(
            this.ops["ReceiveMessage"].apply(partialParams)
        );
    }

    invokeRemovePermission(partialParams: ToOptional<{
      [K in keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest]: (RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest)[K]
    }>): void {
        return this.client.removePermission(
            this.ops["RemovePermission"].apply(partialParams)
        );
    }

    invokeSendMessage(partialParams: ToOptional<{
      [K in keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest & keyof SendMessageRequest]: (SendMessageRequest & SendMessageRequest & SendMessageRequest & SendMessageRequest & SendMessageRequest & SendMessageRequest & SendMessageRequest & SendMessageRequest & SendMessageRequest & SendMessageRequest)[K]
    }>): SendMessageResult {
        return this.client.sendMessage(
            this.ops["SendMessage"].apply(partialParams)
        );
    }

    invokeSendMessageBatch(partialParams: ToOptional<{
      [K in keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest & keyof SendMessageBatchRequest]: (SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest & SendMessageBatchRequest)[K]
    }>): SendMessageBatchResult {
        return this.client.sendMessageBatch(
            this.ops["SendMessageBatch"].apply(partialParams)
        );
    }

    invokeSetQueueAttributes(partialParams: ToOptional<{
      [K in keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest & keyof SetQueueAttributesRequest]: (SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest & SetQueueAttributesRequest)[K]
    }>): void {
        return this.client.setQueueAttributes(
            this.ops["SetQueueAttributes"].apply(partialParams)
        );
    }

    invokeTagQueue(partialParams: ToOptional<{
      [K in keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest & keyof TagQueueRequest]: (TagQueueRequest & TagQueueRequest & TagQueueRequest & TagQueueRequest & TagQueueRequest & TagQueueRequest & TagQueueRequest & TagQueueRequest & TagQueueRequest & TagQueueRequest)[K]
    }>): void {
        return this.client.tagQueue(
            this.ops["TagQueue"].apply(partialParams)
        );
    }

    invokeUntagQueue(partialParams: ToOptional<{
      [K in keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest & keyof UntagQueueRequest]: (UntagQueueRequest & UntagQueueRequest & UntagQueueRequest & UntagQueueRequest & UntagQueueRequest & UntagQueueRequest & UntagQueueRequest & UntagQueueRequest & UntagQueueRequest & UntagQueueRequest)[K]
    }>): void {
        return this.client.untagQueue(
            this.ops["UntagQueue"].apply(partialParams)
        );
    }
}