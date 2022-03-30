
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AddPermissionInput,
    CheckIfPhoneNumberIsOptedOutInput,
    ConfirmSubscriptionInput,
    CreatePlatformApplicationInput,
    CreatePlatformEndpointInput,
    CreateSMSSandboxPhoneNumberInput,
    CreateTopicInput,
    DeleteEndpointInput,
    DeletePlatformApplicationInput,
    DeleteSMSSandboxPhoneNumberInput,
    DeleteTopicInput,
    GetEndpointAttributesInput,
    GetPlatformApplicationAttributesInput,
    GetSubscriptionAttributesInput,
    GetTopicAttributesInput,
    ListEndpointsByPlatformApplicationInput,
    ListSubscriptionsByTopicInput,
    ListTagsForResourceRequest,
    OptInPhoneNumberInput,
    PublishInput,
    PublishBatchInput,
    RemovePermissionInput,
    SetEndpointAttributesInput,
    SetPlatformApplicationAttributesInput,
    SetSMSAttributesInput,
    SetSubscriptionAttributesInput,
    SetTopicAttributesInput,
    SubscribeInput,
    TagResourceRequest,
    UnsubscribeInput,
    UntagResourceRequest,
    VerifySMSSandboxPhoneNumberInput,
    CheckIfPhoneNumberIsOptedOutResponse,
    ConfirmSubscriptionResponse,
    CreatePlatformApplicationResponse,
    CreateEndpointResponse,
    CreateSMSSandboxPhoneNumberResult,
    CreateTopicResponse,
    DeleteSMSSandboxPhoneNumberResult,
    GetEndpointAttributesResponse,
    GetPlatformApplicationAttributesResponse,
    GetSubscriptionAttributesResponse,
    GetTopicAttributesResponse,
    ListEndpointsByPlatformApplicationResponse,
    ListSubscriptionsByTopicResponse,
    ListTagsForResourceResponse,
    OptInPhoneNumberResponse,
    PublishResponse,
    PublishBatchResponse,
    SetSMSAttributesResponse,
    SubscribeResponse,
    TagResourceResponse,
    UntagResourceResponse,
    VerifySMSSandboxPhoneNumberResult
} from "aws-sdk/clients/sns";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sns.TopicSubscription {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.sns.TopicSubscription>) {
        super(...args)
        this.client = new awssdk.SNS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/sns-2010-03-31.normal.json"), this.client)
    }

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput]: (AddPermissionInput & AddPermissionInput & AddPermissionInput & AddPermissionInput & AddPermissionInput & AddPermissionInput & AddPermissionInput & AddPermissionInput & AddPermissionInput)[K]
    }>): void {
        return this.client.addPermission(
            this.ops["AddPermission"].apply(partialParams)
        );
    }

    invokeCheckIfPhoneNumberIsOptedOut(partialParams: ToOptional<{
      [K in keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput]: (CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput)[K]
    }>): CheckIfPhoneNumberIsOptedOutResponse {
        return this.client.checkIfPhoneNumberIsOptedOut(
            this.ops["CheckIfPhoneNumberIsOptedOut"].apply(partialParams)
        );
    }

    invokeConfirmSubscription(partialParams: ToOptional<{
      [K in keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput]: (ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput)[K]
    }>): ConfirmSubscriptionResponse {
        return this.client.confirmSubscription(
            this.ops["ConfirmSubscription"].apply(partialParams)
        );
    }

    invokeCreatePlatformApplication(partialParams: ToOptional<{
      [K in keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput]: (CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput)[K]
    }>): CreatePlatformApplicationResponse {
        return this.client.createPlatformApplication(
            this.ops["CreatePlatformApplication"].apply(partialParams)
        );
    }

    invokeCreatePlatformEndpoint(partialParams: ToOptional<{
      [K in keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput]: (CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput)[K]
    }>): CreateEndpointResponse {
        return this.client.createPlatformEndpoint(
            this.ops["CreatePlatformEndpoint"].apply(partialParams)
        );
    }

    invokeCreateSMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput]: (CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput)[K]
    }>): CreateSMSSandboxPhoneNumberResult {
        return this.client.createSMSSandboxPhoneNumber(
            this.ops["CreateSMSSandboxPhoneNumber"].apply(partialParams)
        );
    }

    invokeCreateTopic(partialParams: ToOptional<{
      [K in keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput]: (CreateTopicInput & CreateTopicInput & CreateTopicInput & CreateTopicInput & CreateTopicInput & CreateTopicInput & CreateTopicInput & CreateTopicInput & CreateTopicInput)[K]
    }>): CreateTopicResponse {
        return this.client.createTopic(
            this.ops["CreateTopic"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput]: (DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput)[K]
    }>): void {
        return this.client.deleteEndpoint(
            this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }

    invokeDeletePlatformApplication(partialParams: ToOptional<{
      [K in keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput]: (DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput)[K]
    }>): void {
        return this.client.deletePlatformApplication(
            this.ops["DeletePlatformApplication"].apply(partialParams)
        );
    }

    invokeDeleteSMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput]: (DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput)[K]
    }>): DeleteSMSSandboxPhoneNumberResult {
        return this.client.deleteSMSSandboxPhoneNumber(
            this.ops["DeleteSMSSandboxPhoneNumber"].apply(partialParams)
        );
    }

    invokeDeleteTopic(partialParams: ToOptional<{
      [K in keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput]: (DeleteTopicInput & DeleteTopicInput & DeleteTopicInput & DeleteTopicInput & DeleteTopicInput & DeleteTopicInput & DeleteTopicInput & DeleteTopicInput & DeleteTopicInput)[K]
    }>): void {
        return this.client.deleteTopic(
            this.ops["DeleteTopic"].apply(partialParams)
        );
    }

    invokeGetEndpointAttributes(partialParams: ToOptional<{
      [K in keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput]: (GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput)[K]
    }>): GetEndpointAttributesResponse {
        return this.client.getEndpointAttributes(
            this.ops["GetEndpointAttributes"].apply(partialParams)
        );
    }

    invokeGetPlatformApplicationAttributes(partialParams: ToOptional<{
      [K in keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput]: (GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput)[K]
    }>): GetPlatformApplicationAttributesResponse {
        return this.client.getPlatformApplicationAttributes(
            this.ops["GetPlatformApplicationAttributes"].apply(partialParams)
        );
    }

    invokeGetSubscriptionAttributes(partialParams: ToOptional<{
      [K in keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput]: (GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput)[K]
    }>): GetSubscriptionAttributesResponse {
        return this.client.getSubscriptionAttributes(
            this.ops["GetSubscriptionAttributes"].apply(partialParams)
        );
    }

    invokeGetTopicAttributes(partialParams: ToOptional<{
      [K in keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput]: (GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput)[K]
    }>): GetTopicAttributesResponse {
        return this.client.getTopicAttributes(
            this.ops["GetTopicAttributes"].apply(partialParams)
        );
    }

    invokeListEndpointsByPlatformApplication(partialParams: ToOptional<{
      [K in keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput]: (ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput)[K]
    }>): ListEndpointsByPlatformApplicationResponse {
        return this.client.listEndpointsByPlatformApplication(
            this.ops["ListEndpointsByPlatformApplication"].apply(partialParams)
        );
    }

    invokeListSubscriptionsByTopic(partialParams: ToOptional<{
      [K in keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput]: (ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput)[K]
    }>): ListSubscriptionsByTopicResponse {
        return this.client.listSubscriptionsByTopic(
            this.ops["ListSubscriptionsByTopic"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeOptInPhoneNumber(partialParams: ToOptional<{
      [K in keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput]: (OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput)[K]
    }>): OptInPhoneNumberResponse {
        return this.client.optInPhoneNumber(
            this.ops["OptInPhoneNumber"].apply(partialParams)
        );
    }

    invokePublish(partialParams: ToOptional<{
      [K in keyof PublishInput & keyof PublishInput & keyof PublishInput & keyof PublishInput & keyof PublishInput & keyof PublishInput & keyof PublishInput & keyof PublishInput & keyof PublishInput]: (PublishInput & PublishInput & PublishInput & PublishInput & PublishInput & PublishInput & PublishInput & PublishInput & PublishInput)[K]
    }>): PublishResponse {
        return this.client.publish(
            this.ops["Publish"].apply(partialParams)
        );
    }

    invokePublishBatch(partialParams: ToOptional<{
      [K in keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput]: (PublishBatchInput & PublishBatchInput & PublishBatchInput & PublishBatchInput & PublishBatchInput & PublishBatchInput & PublishBatchInput & PublishBatchInput & PublishBatchInput)[K]
    }>): PublishBatchResponse {
        return this.client.publishBatch(
            this.ops["PublishBatch"].apply(partialParams)
        );
    }

    invokeRemovePermission(partialParams: ToOptional<{
      [K in keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput]: (RemovePermissionInput & RemovePermissionInput & RemovePermissionInput & RemovePermissionInput & RemovePermissionInput & RemovePermissionInput & RemovePermissionInput & RemovePermissionInput & RemovePermissionInput)[K]
    }>): void {
        return this.client.removePermission(
            this.ops["RemovePermission"].apply(partialParams)
        );
    }

    invokeSetEndpointAttributes(partialParams: ToOptional<{
      [K in keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput]: (SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput)[K]
    }>): void {
        return this.client.setEndpointAttributes(
            this.ops["SetEndpointAttributes"].apply(partialParams)
        );
    }

    invokeSetPlatformApplicationAttributes(partialParams: ToOptional<{
      [K in keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput]: (SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput)[K]
    }>): void {
        return this.client.setPlatformApplicationAttributes(
            this.ops["SetPlatformApplicationAttributes"].apply(partialParams)
        );
    }

    invokeSetSMSAttributes(partialParams: ToOptional<{
      [K in keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput]: (SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput)[K]
    }>): SetSMSAttributesResponse {
        return this.client.setSMSAttributes(
            this.ops["SetSMSAttributes"].apply(partialParams)
        );
    }

    invokeSetSubscriptionAttributes(partialParams: ToOptional<{
      [K in keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput]: (SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput)[K]
    }>): void {
        return this.client.setSubscriptionAttributes(
            this.ops["SetSubscriptionAttributes"].apply(partialParams)
        );
    }

    invokeSetTopicAttributes(partialParams: ToOptional<{
      [K in keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput]: (SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput)[K]
    }>): void {
        return this.client.setTopicAttributes(
            this.ops["SetTopicAttributes"].apply(partialParams)
        );
    }

    invokeSubscribe(partialParams: ToOptional<{
      [K in keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput]: (SubscribeInput & SubscribeInput & SubscribeInput & SubscribeInput & SubscribeInput & SubscribeInput & SubscribeInput & SubscribeInput & SubscribeInput)[K]
    }>): SubscribeResponse {
        return this.client.subscribe(
            this.ops["Subscribe"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUnsubscribe(partialParams: ToOptional<{
      [K in keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput]: (UnsubscribeInput & UnsubscribeInput & UnsubscribeInput & UnsubscribeInput & UnsubscribeInput & UnsubscribeInput & UnsubscribeInput & UnsubscribeInput & UnsubscribeInput)[K]
    }>): void {
        return this.client.unsubscribe(
            this.ops["Unsubscribe"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeVerifySMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput]: (VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput)[K]
    }>): VerifySMSSandboxPhoneNumberResult {
        return this.client.verifySMSSandboxPhoneNumber(
            this.ops["VerifySMSSandboxPhoneNumber"].apply(partialParams)
        );
    }
}