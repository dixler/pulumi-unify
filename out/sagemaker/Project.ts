
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateProjectInput,
    DescribeProjectInput,
    UpdateProjectInput,
    CreateProjectOutput,
    DescribeProjectOutput,
    UpdateProjectOutput
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.Project {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.Project>) {
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

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectInput & keyof Omit<CreateProjectInput, "ProjectName">]: (CreateProjectInput)[K]
    }>): Request<CreateProjectOutput, AWSError> {
        this.boot();
        return this.client.createProject(
          this.ops["CreateProject"].apply(partialParams)
        );
    }

    invokeDescribeProject(partialParams: ToOptional<{
      [K in keyof DescribeProjectInput & keyof Omit<DescribeProjectInput, "ProjectName">]: (DescribeProjectInput)[K]
    }>): Request<DescribeProjectOutput, AWSError> {
        this.boot();
        return this.client.describeProject(
          this.ops["DescribeProject"].apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectInput & keyof Omit<UpdateProjectInput, "ProjectName">]: (UpdateProjectInput)[K]
    }>): Request<UpdateProjectOutput, AWSError> {
        this.boot();
        return this.client.updateProject(
          this.ops["UpdateProject"].apply(partialParams)
        );
    }
}