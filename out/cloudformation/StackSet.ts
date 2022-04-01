
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateStackInstancesInput,
    CreateStackSetInput,
    DeleteStackInstancesInput,
    DeleteStackSetInput,
    DescribeStackInstanceInput,
    DescribeStackSetInput,
    DescribeStackSetOperationInput,
    DetectStackSetDriftInput,
    ImportStacksToStackSetInput,
    ListStackInstancesInput,
    ListStackSetOperationResultsInput,
    ListStackSetOperationsInput,
    StopStackSetOperationInput,
    UpdateStackInstancesInput,
    UpdateStackSetInput,
    CreateStackInstancesOutput,
    CreateStackSetOutput,
    DeleteStackInstancesOutput,
    DeleteStackSetOutput,
    DescribeStackInstanceOutput,
    DescribeStackSetOutput,
    DescribeStackSetOperationOutput,
    DetectStackSetDriftOutput,
    ImportStacksToStackSetOutput,
    ListStackInstancesOutput,
    ListStackSetOperationResultsOutput,
    ListStackSetOperationsOutput,
    StopStackSetOperationOutput,
    UpdateStackInstancesOutput,
    UpdateStackSetOutput
} from "aws-sdk/clients/cloudformation";
const schema = require("../apis/cloudformation-2010-05-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudformation.StackSet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudformation.StackSet>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudFormation()
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

    invokeCreateStackInstances(partialParams: ToOptional<{
      [K in keyof CreateStackInstancesInput & keyof Omit<CreateStackInstancesInput, "StackSetName">]: (CreateStackInstancesInput)[K]
    }>): Request<CreateStackInstancesOutput, AWSError> {
        this.boot();
        return this.client.createStackInstances(
          this.ops["CreateStackInstances"].apply(partialParams)
        );
    }

    invokeCreateStackSet(partialParams: ToOptional<{
      [K in keyof CreateStackSetInput & keyof Omit<CreateStackSetInput, "StackSetName">]: (CreateStackSetInput)[K]
    }>): Request<CreateStackSetOutput, AWSError> {
        this.boot();
        return this.client.createStackSet(
          this.ops["CreateStackSet"].apply(partialParams)
        );
    }

    invokeDeleteStackInstances(partialParams: ToOptional<{
      [K in keyof DeleteStackInstancesInput & keyof Omit<DeleteStackInstancesInput, "StackSetName">]: (DeleteStackInstancesInput)[K]
    }>): Request<DeleteStackInstancesOutput, AWSError> {
        this.boot();
        return this.client.deleteStackInstances(
          this.ops["DeleteStackInstances"].apply(partialParams)
        );
    }

    invokeDeleteStackSet(partialParams: ToOptional<{
      [K in keyof DeleteStackSetInput & keyof Omit<DeleteStackSetInput, "StackSetName">]: (DeleteStackSetInput)[K]
    }>): Request<DeleteStackSetOutput, AWSError> {
        this.boot();
        return this.client.deleteStackSet(
          this.ops["DeleteStackSet"].apply(partialParams)
        );
    }

    invokeDescribeStackInstance(partialParams: ToOptional<{
      [K in keyof DescribeStackInstanceInput & keyof Omit<DescribeStackInstanceInput, "StackSetName">]: (DescribeStackInstanceInput)[K]
    }>): Request<DescribeStackInstanceOutput, AWSError> {
        this.boot();
        return this.client.describeStackInstance(
          this.ops["DescribeStackInstance"].apply(partialParams)
        );
    }

    invokeDescribeStackSet(partialParams: ToOptional<{
      [K in keyof DescribeStackSetInput & keyof Omit<DescribeStackSetInput, "StackSetName">]: (DescribeStackSetInput)[K]
    }>): Request<DescribeStackSetOutput, AWSError> {
        this.boot();
        return this.client.describeStackSet(
          this.ops["DescribeStackSet"].apply(partialParams)
        );
    }

    invokeDescribeStackSetOperation(partialParams: ToOptional<{
      [K in keyof DescribeStackSetOperationInput & keyof Omit<DescribeStackSetOperationInput, "StackSetName">]: (DescribeStackSetOperationInput)[K]
    }>): Request<DescribeStackSetOperationOutput, AWSError> {
        this.boot();
        return this.client.describeStackSetOperation(
          this.ops["DescribeStackSetOperation"].apply(partialParams)
        );
    }

    invokeDetectStackSetDrift(partialParams: ToOptional<{
      [K in keyof DetectStackSetDriftInput & keyof Omit<DetectStackSetDriftInput, "StackSetName">]: (DetectStackSetDriftInput)[K]
    }>): Request<DetectStackSetDriftOutput, AWSError> {
        this.boot();
        return this.client.detectStackSetDrift(
          this.ops["DetectStackSetDrift"].apply(partialParams)
        );
    }

    invokeImportStacksToStackSet(partialParams: ToOptional<{
      [K in keyof ImportStacksToStackSetInput & keyof Omit<ImportStacksToStackSetInput, "StackSetName">]: (ImportStacksToStackSetInput)[K]
    }>): Request<ImportStacksToStackSetOutput, AWSError> {
        this.boot();
        return this.client.importStacksToStackSet(
          this.ops["ImportStacksToStackSet"].apply(partialParams)
        );
    }

    invokeListStackInstances(partialParams: ToOptional<{
      [K in keyof ListStackInstancesInput & keyof Omit<ListStackInstancesInput, "StackSetName">]: (ListStackInstancesInput)[K]
    }>): Request<ListStackInstancesOutput, AWSError> {
        this.boot();
        return this.client.listStackInstances(
          this.ops["ListStackInstances"].apply(partialParams)
        );
    }

    invokeListStackSetOperationResults(partialParams: ToOptional<{
      [K in keyof ListStackSetOperationResultsInput & keyof Omit<ListStackSetOperationResultsInput, "StackSetName">]: (ListStackSetOperationResultsInput)[K]
    }>): Request<ListStackSetOperationResultsOutput, AWSError> {
        this.boot();
        return this.client.listStackSetOperationResults(
          this.ops["ListStackSetOperationResults"].apply(partialParams)
        );
    }

    invokeListStackSetOperations(partialParams: ToOptional<{
      [K in keyof ListStackSetOperationsInput & keyof Omit<ListStackSetOperationsInput, "StackSetName">]: (ListStackSetOperationsInput)[K]
    }>): Request<ListStackSetOperationsOutput, AWSError> {
        this.boot();
        return this.client.listStackSetOperations(
          this.ops["ListStackSetOperations"].apply(partialParams)
        );
    }

    invokeStopStackSetOperation(partialParams: ToOptional<{
      [K in keyof StopStackSetOperationInput & keyof Omit<StopStackSetOperationInput, "StackSetName">]: (StopStackSetOperationInput)[K]
    }>): Request<StopStackSetOperationOutput, AWSError> {
        this.boot();
        return this.client.stopStackSetOperation(
          this.ops["StopStackSetOperation"].apply(partialParams)
        );
    }

    invokeUpdateStackInstances(partialParams: ToOptional<{
      [K in keyof UpdateStackInstancesInput & keyof Omit<UpdateStackInstancesInput, "StackSetName">]: (UpdateStackInstancesInput)[K]
    }>): Request<UpdateStackInstancesOutput, AWSError> {
        this.boot();
        return this.client.updateStackInstances(
          this.ops["UpdateStackInstances"].apply(partialParams)
        );
    }

    invokeUpdateStackSet(partialParams: ToOptional<{
      [K in keyof UpdateStackSetInput & keyof Omit<UpdateStackSetInput, "StackSetName">]: (UpdateStackSetInput)[K]
    }>): Request<UpdateStackSetOutput, AWSError> {
        this.boot();
        return this.client.updateStackSet(
          this.ops["UpdateStackSet"].apply(partialParams)
        );
    }
}