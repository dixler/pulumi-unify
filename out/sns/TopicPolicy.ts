
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/sns-2010-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sns.TopicPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.sns.TopicPolicy>) {
        super(...args)
        this.client = new awssdk.SNS()
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
      [K in keyof AddPermissionInput & keyof AddPermissionInput & keyof AddPermissionInput]: (AddPermissionInput & AddPermissionInput & AddPermissionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addPermission(
          this.ops["AddPermission"].applicator.apply(partialParams)
        );
    }

    invokeCheckIfPhoneNumberIsOptedOut(partialParams: ToOptional<{
      [K in keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput & keyof CheckIfPhoneNumberIsOptedOutInput]: (CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput & CheckIfPhoneNumberIsOptedOutInput)[K]
    }>): Request<CheckIfPhoneNumberIsOptedOutResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.checkIfPhoneNumberIsOptedOut(
          this.ops["CheckIfPhoneNumberIsOptedOut"].applicator.apply(partialParams)
        );
    }

    invokeConfirmSubscription(partialParams: ToOptional<{
      [K in keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput & keyof ConfirmSubscriptionInput]: (ConfirmSubscriptionInput & ConfirmSubscriptionInput & ConfirmSubscriptionInput)[K]
    }>): Request<ConfirmSubscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmSubscription(
          this.ops["ConfirmSubscription"].applicator.apply(partialParams)
        );
    }

    invokeCreatePlatformApplication(partialParams: ToOptional<{
      [K in keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput & keyof CreatePlatformApplicationInput]: (CreatePlatformApplicationInput & CreatePlatformApplicationInput & CreatePlatformApplicationInput)[K]
    }>): Request<CreatePlatformApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlatformApplication(
          this.ops["CreatePlatformApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreatePlatformEndpoint(partialParams: ToOptional<{
      [K in keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput & keyof CreatePlatformEndpointInput]: (CreatePlatformEndpointInput & CreatePlatformEndpointInput & CreatePlatformEndpointInput)[K]
    }>): Request<CreateEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlatformEndpoint(
          this.ops["CreatePlatformEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateSMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput & keyof CreateSMSSandboxPhoneNumberInput]: (CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput & CreateSMSSandboxPhoneNumberInput)[K]
    }>): Request<CreateSMSSandboxPhoneNumberResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSMSSandboxPhoneNumber(
          this.ops["CreateSMSSandboxPhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeCreateTopic(partialParams: ToOptional<{
      [K in keyof CreateTopicInput & keyof CreateTopicInput & keyof CreateTopicInput]: (CreateTopicInput & CreateTopicInput & CreateTopicInput)[K]
    }>): Request<CreateTopicResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTopic(
          this.ops["CreateTopic"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput]: (DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeletePlatformApplication(partialParams: ToOptional<{
      [K in keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput & keyof DeletePlatformApplicationInput]: (DeletePlatformApplicationInput & DeletePlatformApplicationInput & DeletePlatformApplicationInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePlatformApplication(
          this.ops["DeletePlatformApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput & keyof DeleteSMSSandboxPhoneNumberInput]: (DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput & DeleteSMSSandboxPhoneNumberInput)[K]
    }>): Request<DeleteSMSSandboxPhoneNumberResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSMSSandboxPhoneNumber(
          this.ops["DeleteSMSSandboxPhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTopic(partialParams: ToOptional<{
      [K in keyof DeleteTopicInput & keyof DeleteTopicInput & keyof DeleteTopicInput]: (DeleteTopicInput & DeleteTopicInput & DeleteTopicInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTopic(
          this.ops["DeleteTopic"].applicator.apply(partialParams)
        );
    }

    invokeGetEndpointAttributes(partialParams: ToOptional<{
      [K in keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput & keyof GetEndpointAttributesInput]: (GetEndpointAttributesInput & GetEndpointAttributesInput & GetEndpointAttributesInput)[K]
    }>): Request<GetEndpointAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEndpointAttributes(
          this.ops["GetEndpointAttributes"].applicator.apply(partialParams)
        );
    }

    invokeGetPlatformApplicationAttributes(partialParams: ToOptional<{
      [K in keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput & keyof GetPlatformApplicationAttributesInput]: (GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput & GetPlatformApplicationAttributesInput)[K]
    }>): Request<GetPlatformApplicationAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPlatformApplicationAttributes(
          this.ops["GetPlatformApplicationAttributes"].applicator.apply(partialParams)
        );
    }

    invokeGetSubscriptionAttributes(partialParams: ToOptional<{
      [K in keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput & keyof GetSubscriptionAttributesInput]: (GetSubscriptionAttributesInput & GetSubscriptionAttributesInput & GetSubscriptionAttributesInput)[K]
    }>): Request<GetSubscriptionAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSubscriptionAttributes(
          this.ops["GetSubscriptionAttributes"].applicator.apply(partialParams)
        );
    }

    invokeGetTopicAttributes(partialParams: ToOptional<{
      [K in keyof GetTopicAttributesInput & keyof GetTopicAttributesInput & keyof GetTopicAttributesInput]: (GetTopicAttributesInput & GetTopicAttributesInput & GetTopicAttributesInput)[K]
    }>): Request<GetTopicAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTopicAttributes(
          this.ops["GetTopicAttributes"].applicator.apply(partialParams)
        );
    }

    invokeListEndpointsByPlatformApplication(partialParams: ToOptional<{
      [K in keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput & keyof ListEndpointsByPlatformApplicationInput]: (ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput & ListEndpointsByPlatformApplicationInput)[K]
    }>): Request<ListEndpointsByPlatformApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEndpointsByPlatformApplication(
          this.ops["ListEndpointsByPlatformApplication"].applicator.apply(partialParams)
        );
    }

    invokeListSubscriptionsByTopic(partialParams: ToOptional<{
      [K in keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput & keyof ListSubscriptionsByTopicInput]: (ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput & ListSubscriptionsByTopicInput)[K]
    }>): Request<ListSubscriptionsByTopicResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSubscriptionsByTopic(
          this.ops["ListSubscriptionsByTopic"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeOptInPhoneNumber(partialParams: ToOptional<{
      [K in keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput & keyof OptInPhoneNumberInput]: (OptInPhoneNumberInput & OptInPhoneNumberInput & OptInPhoneNumberInput)[K]
    }>): Request<OptInPhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.optInPhoneNumber(
          this.ops["OptInPhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokePublish(partialParams: ToOptional<{
      [K in keyof PublishInput & keyof PublishInput & keyof PublishInput]: (PublishInput & PublishInput & PublishInput)[K]
    }>): Request<PublishResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publish(
          this.ops["Publish"].applicator.apply(partialParams)
        );
    }

    invokePublishBatch(partialParams: ToOptional<{
      [K in keyof PublishBatchInput & keyof PublishBatchInput & keyof PublishBatchInput]: (PublishBatchInput & PublishBatchInput & PublishBatchInput)[K]
    }>): Request<PublishBatchResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishBatch(
          this.ops["PublishBatch"].applicator.apply(partialParams)
        );
    }

    invokeRemovePermission(partialParams: ToOptional<{
      [K in keyof RemovePermissionInput & keyof RemovePermissionInput & keyof RemovePermissionInput]: (RemovePermissionInput & RemovePermissionInput & RemovePermissionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removePermission(
          this.ops["RemovePermission"].applicator.apply(partialParams)
        );
    }

    invokeSetEndpointAttributes(partialParams: ToOptional<{
      [K in keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput & keyof SetEndpointAttributesInput]: (SetEndpointAttributesInput & SetEndpointAttributesInput & SetEndpointAttributesInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setEndpointAttributes(
          this.ops["SetEndpointAttributes"].applicator.apply(partialParams)
        );
    }

    invokeSetPlatformApplicationAttributes(partialParams: ToOptional<{
      [K in keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput & keyof SetPlatformApplicationAttributesInput]: (SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput & SetPlatformApplicationAttributesInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setPlatformApplicationAttributes(
          this.ops["SetPlatformApplicationAttributes"].applicator.apply(partialParams)
        );
    }

    invokeSetSMSAttributes(partialParams: ToOptional<{
      [K in keyof SetSMSAttributesInput & keyof SetSMSAttributesInput & keyof SetSMSAttributesInput]: (SetSMSAttributesInput & SetSMSAttributesInput & SetSMSAttributesInput)[K]
    }>): Request<SetSMSAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSMSAttributes(
          this.ops["SetSMSAttributes"].applicator.apply(partialParams)
        );
    }

    invokeSetSubscriptionAttributes(partialParams: ToOptional<{
      [K in keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput & keyof SetSubscriptionAttributesInput]: (SetSubscriptionAttributesInput & SetSubscriptionAttributesInput & SetSubscriptionAttributesInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSubscriptionAttributes(
          this.ops["SetSubscriptionAttributes"].applicator.apply(partialParams)
        );
    }

    invokeSetTopicAttributes(partialParams: ToOptional<{
      [K in keyof SetTopicAttributesInput & keyof SetTopicAttributesInput & keyof SetTopicAttributesInput]: (SetTopicAttributesInput & SetTopicAttributesInput & SetTopicAttributesInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTopicAttributes(
          this.ops["SetTopicAttributes"].applicator.apply(partialParams)
        );
    }

    invokeSubscribe(partialParams: ToOptional<{
      [K in keyof SubscribeInput & keyof SubscribeInput & keyof SubscribeInput]: (SubscribeInput & SubscribeInput & SubscribeInput)[K]
    }>): Request<SubscribeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.subscribe(
          this.ops["Subscribe"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUnsubscribe(partialParams: ToOptional<{
      [K in keyof UnsubscribeInput & keyof UnsubscribeInput & keyof UnsubscribeInput]: (UnsubscribeInput & UnsubscribeInput & UnsubscribeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unsubscribe(
          this.ops["Unsubscribe"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeVerifySMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput & keyof VerifySMSSandboxPhoneNumberInput]: (VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput & VerifySMSSandboxPhoneNumberInput)[K]
    }>): Request<VerifySMSSandboxPhoneNumberResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.verifySMSSandboxPhoneNumber(
          this.ops["VerifySMSSandboxPhoneNumber"].applicator.apply(partialParams)
        );
    }
}