
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateHumanTaskUiRequest,
    DeleteHumanTaskUiRequest,
    DescribeHumanTaskUiRequest,
    CreateHumanTaskUiResponse,
    DeleteHumanTaskUiResponse,
    DescribeHumanTaskUiResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.HumanTaskUI {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.HumanTaskUI>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeCreateHumanTaskUi(partialParams: ToOptional<{
      [K in keyof CreateHumanTaskUiRequest & keyof Omit<CreateHumanTaskUiRequest, "HumanTaskUiName">]: (CreateHumanTaskUiRequest)[K]
    }>): Request<CreateHumanTaskUiResponse, AWSError> {
        this.boot();
        return this.client.createHumanTaskUi(
          this.ops["CreateHumanTaskUi"].apply(partialParams)
        );
    }

    invokeDeleteHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DeleteHumanTaskUiRequest & keyof Omit<DeleteHumanTaskUiRequest, "HumanTaskUiName">]: (DeleteHumanTaskUiRequest)[K]
    }>): Request<DeleteHumanTaskUiResponse, AWSError> {
        this.boot();
        return this.client.deleteHumanTaskUi(
          this.ops["DeleteHumanTaskUi"].apply(partialParams)
        );
    }

    invokeDescribeHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DescribeHumanTaskUiRequest & keyof Omit<DescribeHumanTaskUiRequest, "HumanTaskUiName">]: (DescribeHumanTaskUiRequest)[K]
    }>): Request<DescribeHumanTaskUiResponse, AWSError> {
        this.boot();
        return this.client.describeHumanTaskUi(
          this.ops["DescribeHumanTaskUi"].apply(partialParams)
        );
    }
}