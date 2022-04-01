
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CheckIfPhoneNumberIsOptedOutInput,
    ConfirmSubscriptionInput,
    CreatePlatformApplicationInput,
    CreatePlatformEndpointInput,
    CreateSMSSandboxPhoneNumberInput,
    CreateTopicInput,
    DeleteSMSSandboxPhoneNumberInput,
    GetEndpointAttributesInput,
    GetPlatformApplicationAttributesInput,
    GetSMSAttributesInput,
    GetSMSSandboxAccountStatusInput,
    GetSubscriptionAttributesInput,
    GetTopicAttributesInput,
    ListEndpointsByPlatformApplicationInput,
    ListOriginationNumbersRequest,
    ListPhoneNumbersOptedOutInput,
    ListPlatformApplicationsInput,
    ListSMSSandboxPhoneNumbersInput,
    ListSubscriptionsInput,
    ListSubscriptionsByTopicInput,
    ListTagsForResourceRequest,
    ListTopicsInput,
    OptInPhoneNumberInput,
    PublishInput,
    PublishBatchInput,
    SetSMSAttributesInput,
    SubscribeInput,
    TagResourceRequest,
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
    GetSMSAttributesResponse,
    GetSMSSandboxAccountStatusResult,
    GetSubscriptionAttributesResponse,
    GetTopicAttributesResponse,
    ListEndpointsByPlatformApplicationResponse,
    ListOriginationNumbersResult,
    ListPhoneNumbersOptedOutResponse,
    ListPlatformApplicationsResponse,
    ListSMSSandboxPhoneNumbersResult,
    ListSubscriptionsResponse,
    ListSubscriptionsByTopicResponse,
    ListTagsForResourceResponse,
    ListTopicsResponse,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sns.TopicPolicy>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SNS()
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

    invokeCheckIfPhoneNumberIsOptedOut(partialParams: ToOptional<{
      [K in keyof CheckIfPhoneNumberIsOptedOutInput]: (CheckIfPhoneNumberIsOptedOutInput)[K]
    }>): Request<CheckIfPhoneNumberIsOptedOutResponse, AWSError> {
        this.boot();
        return this.client.checkIfPhoneNumberIsOptedOut(
          this.ops["CheckIfPhoneNumberIsOptedOut"].apply(partialParams)
        );
    }

    invokeConfirmSubscription(partialParams: ToOptional<{
      [K in keyof ConfirmSubscriptionInput]: (ConfirmSubscriptionInput)[K]
    }>): Request<ConfirmSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.confirmSubscription(
          this.ops["ConfirmSubscription"].apply(partialParams)
        );
    }

    invokeCreatePlatformApplication(partialParams: ToOptional<{
      [K in keyof CreatePlatformApplicationInput]: (CreatePlatformApplicationInput)[K]
    }>): Request<CreatePlatformApplicationResponse, AWSError> {
        this.boot();
        return this.client.createPlatformApplication(
          this.ops["CreatePlatformApplication"].apply(partialParams)
        );
    }

    invokeCreatePlatformEndpoint(partialParams: ToOptional<{
      [K in keyof CreatePlatformEndpointInput]: (CreatePlatformEndpointInput)[K]
    }>): Request<CreateEndpointResponse, AWSError> {
        this.boot();
        return this.client.createPlatformEndpoint(
          this.ops["CreatePlatformEndpoint"].apply(partialParams)
        );
    }

    invokeCreateSMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof CreateSMSSandboxPhoneNumberInput]: (CreateSMSSandboxPhoneNumberInput)[K]
    }>): Request<CreateSMSSandboxPhoneNumberResult, AWSError> {
        this.boot();
        return this.client.createSMSSandboxPhoneNumber(
          this.ops["CreateSMSSandboxPhoneNumber"].apply(partialParams)
        );
    }

    invokeCreateTopic(partialParams: ToOptional<{
      [K in keyof CreateTopicInput]: (CreateTopicInput)[K]
    }>): Request<CreateTopicResponse, AWSError> {
        this.boot();
        return this.client.createTopic(
          this.ops["CreateTopic"].apply(partialParams)
        );
    }

    invokeDeleteSMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof DeleteSMSSandboxPhoneNumberInput]: (DeleteSMSSandboxPhoneNumberInput)[K]
    }>): Request<DeleteSMSSandboxPhoneNumberResult, AWSError> {
        this.boot();
        return this.client.deleteSMSSandboxPhoneNumber(
          this.ops["DeleteSMSSandboxPhoneNumber"].apply(partialParams)
        );
    }

    invokeGetEndpointAttributes(partialParams: ToOptional<{
      [K in keyof GetEndpointAttributesInput]: (GetEndpointAttributesInput)[K]
    }>): Request<GetEndpointAttributesResponse, AWSError> {
        this.boot();
        return this.client.getEndpointAttributes(
          this.ops["GetEndpointAttributes"].apply(partialParams)
        );
    }

    invokeGetPlatformApplicationAttributes(partialParams: ToOptional<{
      [K in keyof GetPlatformApplicationAttributesInput]: (GetPlatformApplicationAttributesInput)[K]
    }>): Request<GetPlatformApplicationAttributesResponse, AWSError> {
        this.boot();
        return this.client.getPlatformApplicationAttributes(
          this.ops["GetPlatformApplicationAttributes"].apply(partialParams)
        );
    }

    invokeGetSMSAttributes(partialParams: ToOptional<{
      [K in keyof GetSMSAttributesInput]: (GetSMSAttributesInput)[K]
    }>): Request<GetSMSAttributesResponse, AWSError> {
        this.boot();
        return this.client.getSMSAttributes(
          this.ops["GetSMSAttributes"].apply(partialParams)
        );
    }

    invokeGetSMSSandboxAccountStatus(partialParams: ToOptional<{
      [K in keyof GetSMSSandboxAccountStatusInput]: (GetSMSSandboxAccountStatusInput)[K]
    }>): Request<GetSMSSandboxAccountStatusResult, AWSError> {
        this.boot();
        return this.client.getSMSSandboxAccountStatus(
          this.ops["GetSMSSandboxAccountStatus"].apply(partialParams)
        );
    }

    invokeGetSubscriptionAttributes(partialParams: ToOptional<{
      [K in keyof GetSubscriptionAttributesInput]: (GetSubscriptionAttributesInput)[K]
    }>): Request<GetSubscriptionAttributesResponse, AWSError> {
        this.boot();
        return this.client.getSubscriptionAttributes(
          this.ops["GetSubscriptionAttributes"].apply(partialParams)
        );
    }

    invokeGetTopicAttributes(partialParams: ToOptional<{
      [K in keyof GetTopicAttributesInput]: (GetTopicAttributesInput)[K]
    }>): Request<GetTopicAttributesResponse, AWSError> {
        this.boot();
        return this.client.getTopicAttributes(
          this.ops["GetTopicAttributes"].apply(partialParams)
        );
    }

    invokeListEndpointsByPlatformApplication(partialParams: ToOptional<{
      [K in keyof ListEndpointsByPlatformApplicationInput]: (ListEndpointsByPlatformApplicationInput)[K]
    }>): Request<ListEndpointsByPlatformApplicationResponse, AWSError> {
        this.boot();
        return this.client.listEndpointsByPlatformApplication(
          this.ops["ListEndpointsByPlatformApplication"].apply(partialParams)
        );
    }

    invokeListOriginationNumbers(partialParams: ToOptional<{
      [K in keyof ListOriginationNumbersRequest]: (ListOriginationNumbersRequest)[K]
    }>): Request<ListOriginationNumbersResult, AWSError> {
        this.boot();
        return this.client.listOriginationNumbers(
          this.ops["ListOriginationNumbers"].apply(partialParams)
        );
    }

    invokeListPhoneNumbersOptedOut(partialParams: ToOptional<{
      [K in keyof ListPhoneNumbersOptedOutInput]: (ListPhoneNumbersOptedOutInput)[K]
    }>): Request<ListPhoneNumbersOptedOutResponse, AWSError> {
        this.boot();
        return this.client.listPhoneNumbersOptedOut(
          this.ops["ListPhoneNumbersOptedOut"].apply(partialParams)
        );
    }

    invokeListPlatformApplications(partialParams: ToOptional<{
      [K in keyof ListPlatformApplicationsInput]: (ListPlatformApplicationsInput)[K]
    }>): Request<ListPlatformApplicationsResponse, AWSError> {
        this.boot();
        return this.client.listPlatformApplications(
          this.ops["ListPlatformApplications"].apply(partialParams)
        );
    }

    invokeListSMSSandboxPhoneNumbers(partialParams: ToOptional<{
      [K in keyof ListSMSSandboxPhoneNumbersInput]: (ListSMSSandboxPhoneNumbersInput)[K]
    }>): Request<ListSMSSandboxPhoneNumbersResult, AWSError> {
        this.boot();
        return this.client.listSMSSandboxPhoneNumbers(
          this.ops["ListSMSSandboxPhoneNumbers"].apply(partialParams)
        );
    }

    invokeListSubscriptions(partialParams: ToOptional<{
      [K in keyof ListSubscriptionsInput]: (ListSubscriptionsInput)[K]
    }>): Request<ListSubscriptionsResponse, AWSError> {
        this.boot();
        return this.client.listSubscriptions(
          this.ops["ListSubscriptions"].apply(partialParams)
        );
    }

    invokeListSubscriptionsByTopic(partialParams: ToOptional<{
      [K in keyof ListSubscriptionsByTopicInput]: (ListSubscriptionsByTopicInput)[K]
    }>): Request<ListSubscriptionsByTopicResponse, AWSError> {
        this.boot();
        return this.client.listSubscriptionsByTopic(
          this.ops["ListSubscriptionsByTopic"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTopics(partialParams: ToOptional<{
      [K in keyof ListTopicsInput]: (ListTopicsInput)[K]
    }>): Request<ListTopicsResponse, AWSError> {
        this.boot();
        return this.client.listTopics(
          this.ops["ListTopics"].apply(partialParams)
        );
    }

    invokeOptInPhoneNumber(partialParams: ToOptional<{
      [K in keyof OptInPhoneNumberInput]: (OptInPhoneNumberInput)[K]
    }>): Request<OptInPhoneNumberResponse, AWSError> {
        this.boot();
        return this.client.optInPhoneNumber(
          this.ops["OptInPhoneNumber"].apply(partialParams)
        );
    }

    invokePublish(partialParams: ToOptional<{
      [K in keyof PublishInput]: (PublishInput)[K]
    }>): Request<PublishResponse, AWSError> {
        this.boot();
        return this.client.publish(
          this.ops["Publish"].apply(partialParams)
        );
    }

    invokePublishBatch(partialParams: ToOptional<{
      [K in keyof PublishBatchInput]: (PublishBatchInput)[K]
    }>): Request<PublishBatchResponse, AWSError> {
        this.boot();
        return this.client.publishBatch(
          this.ops["PublishBatch"].apply(partialParams)
        );
    }

    invokeSetSMSAttributes(partialParams: ToOptional<{
      [K in keyof SetSMSAttributesInput]: (SetSMSAttributesInput)[K]
    }>): Request<SetSMSAttributesResponse, AWSError> {
        this.boot();
        return this.client.setSMSAttributes(
          this.ops["SetSMSAttributes"].apply(partialParams)
        );
    }

    invokeSubscribe(partialParams: ToOptional<{
      [K in keyof SubscribeInput]: (SubscribeInput)[K]
    }>): Request<SubscribeResponse, AWSError> {
        this.boot();
        return this.client.subscribe(
          this.ops["Subscribe"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeVerifySMSSandboxPhoneNumber(partialParams: ToOptional<{
      [K in keyof VerifySMSSandboxPhoneNumberInput]: (VerifySMSSandboxPhoneNumberInput)[K]
    }>): Request<VerifySMSSandboxPhoneNumberResult, AWSError> {
        this.boot();
        return this.client.verifySMSSandboxPhoneNumber(
          this.ops["VerifySMSSandboxPhoneNumber"].apply(partialParams)
        );
    }
}