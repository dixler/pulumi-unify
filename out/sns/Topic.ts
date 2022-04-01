
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ConfirmSubscriptionInput,
    CreatePlatformApplicationInput,
    CreateTopicInput,
    GetTopicAttributesInput,
    ListSubscriptionsByTopicInput,
    PublishBatchInput,
    SubscribeInput,
    ConfirmSubscriptionResponse,
    CreatePlatformApplicationResponse,
    CreateTopicResponse,
    GetTopicAttributesResponse,
    ListSubscriptionsByTopicResponse,
    PublishBatchResponse,
    SubscribeResponse
} from "aws-sdk/clients/sns";
const schema = require("../apis/sns-2010-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sns.Topic {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sns.Topic>) {
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

    invokeConfirmSubscription(partialParams: ToOptional<{
      [K in keyof ConfirmSubscriptionInput & keyof Omit<ConfirmSubscriptionInput, "TopicArn">]: (ConfirmSubscriptionInput)[K]
    }>): Request<ConfirmSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.confirmSubscription(
          this.ops["ConfirmSubscription"].apply(partialParams)
        );
    }

    invokeCreatePlatformApplication(partialParams: ToOptional<{
      [K in keyof CreatePlatformApplicationInput & keyof Omit<CreatePlatformApplicationInput, "Name">]: (CreatePlatformApplicationInput)[K]
    }>): Request<CreatePlatformApplicationResponse, AWSError> {
        this.boot();
        return this.client.createPlatformApplication(
          this.ops["CreatePlatformApplication"].apply(partialParams)
        );
    }

    invokeCreateTopic(partialParams: ToOptional<{
      [K in keyof CreateTopicInput & keyof Omit<CreateTopicInput, "Name">]: (CreateTopicInput)[K]
    }>): Request<CreateTopicResponse, AWSError> {
        this.boot();
        return this.client.createTopic(
          this.ops["CreateTopic"].apply(partialParams)
        );
    }

    invokeGetTopicAttributes(partialParams: ToOptional<{
      [K in keyof GetTopicAttributesInput & keyof Omit<GetTopicAttributesInput, "TopicArn">]: (GetTopicAttributesInput)[K]
    }>): Request<GetTopicAttributesResponse, AWSError> {
        this.boot();
        return this.client.getTopicAttributes(
          this.ops["GetTopicAttributes"].apply(partialParams)
        );
    }

    invokeListSubscriptionsByTopic(partialParams: ToOptional<{
      [K in keyof ListSubscriptionsByTopicInput & keyof Omit<ListSubscriptionsByTopicInput, "TopicArn">]: (ListSubscriptionsByTopicInput)[K]
    }>): Request<ListSubscriptionsByTopicResponse, AWSError> {
        this.boot();
        return this.client.listSubscriptionsByTopic(
          this.ops["ListSubscriptionsByTopic"].apply(partialParams)
        );
    }

    invokePublishBatch(partialParams: ToOptional<{
      [K in keyof PublishBatchInput & keyof Omit<PublishBatchInput, "TopicArn">]: (PublishBatchInput)[K]
    }>): Request<PublishBatchResponse, AWSError> {
        this.boot();
        return this.client.publishBatch(
          this.ops["PublishBatch"].apply(partialParams)
        );
    }

    invokeSubscribe(partialParams: ToOptional<{
      [K in keyof SubscribeInput & keyof Omit<SubscribeInput, "TopicArn">]: (SubscribeInput)[K]
    }>): Request<SubscribeResponse, AWSError> {
        this.boot();
        return this.client.subscribe(
          this.ops["Subscribe"].apply(partialParams)
        );
    }
}