
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCodeRepositoryInput,
    DescribeCodeRepositoryInput,
    UpdateCodeRepositoryInput,
    CreateCodeRepositoryOutput,
    DescribeCodeRepositoryOutput,
    UpdateCodeRepositoryOutput
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.CodeRepository {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.CodeRepository>) {
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

    invokeCreateCodeRepository(partialParams: ToOptional<{
      [K in keyof CreateCodeRepositoryInput & keyof Omit<CreateCodeRepositoryInput, "CodeRepositoryName">]: (CreateCodeRepositoryInput)[K]
    }>): Request<CreateCodeRepositoryOutput, AWSError> {
        this.boot();
        return this.client.createCodeRepository(
          this.ops["CreateCodeRepository"].apply(partialParams)
        );
    }

    invokeDescribeCodeRepository(partialParams: ToOptional<{
      [K in keyof DescribeCodeRepositoryInput & keyof Omit<DescribeCodeRepositoryInput, "CodeRepositoryName">]: (DescribeCodeRepositoryInput)[K]
    }>): Request<DescribeCodeRepositoryOutput, AWSError> {
        this.boot();
        return this.client.describeCodeRepository(
          this.ops["DescribeCodeRepository"].apply(partialParams)
        );
    }

    invokeUpdateCodeRepository(partialParams: ToOptional<{
      [K in keyof UpdateCodeRepositoryInput & keyof Omit<UpdateCodeRepositoryInput, "CodeRepositoryName">]: (UpdateCodeRepositoryInput)[K]
    }>): Request<UpdateCodeRepositoryOutput, AWSError> {
        this.boot();
        return this.client.updateCodeRepository(
          this.ops["UpdateCodeRepository"].apply(partialParams)
        );
    }
}