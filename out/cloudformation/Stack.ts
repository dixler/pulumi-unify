
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ContinueUpdateRollbackInput,
    CreateChangeSetInput,
    CreateStackInput,
    DescribeStackResourceInput,
    DescribeStackResourceDriftsInput,
    DetectStackDriftInput,
    DetectStackResourceDriftInput,
    GetStackPolicyInput,
    ListChangeSetsInput,
    ListStackResourcesInput,
    RollbackStackInput,
    UpdateStackInput,
    UpdateTerminationProtectionInput,
    ContinueUpdateRollbackOutput,
    CreateChangeSetOutput,
    CreateStackOutput,
    DescribeStackResourceOutput,
    DescribeStackResourceDriftsOutput,
    DetectStackDriftOutput,
    DetectStackResourceDriftOutput,
    GetStackPolicyOutput,
    ListChangeSetsOutput,
    ListStackResourcesOutput,
    RollbackStackOutput,
    UpdateStackOutput,
    UpdateTerminationProtectionOutput
} from "aws-sdk/clients/cloudformation";
const schema = require("../apis/cloudformation-2010-05-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudformation.Stack {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudformation.Stack>) {
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

    invokeContinueUpdateRollback(partialParams: ToOptional<{
      [K in keyof ContinueUpdateRollbackInput & keyof Omit<ContinueUpdateRollbackInput, "StackName">]: (ContinueUpdateRollbackInput)[K]
    }>): Request<ContinueUpdateRollbackOutput, AWSError> {
        this.boot();
        return this.client.continueUpdateRollback(
          this.ops["ContinueUpdateRollback"].apply(partialParams)
        );
    }

    invokeCreateChangeSet(partialParams: ToOptional<{
      [K in keyof CreateChangeSetInput & keyof Omit<CreateChangeSetInput, "StackName">]: (CreateChangeSetInput)[K]
    }>): Request<CreateChangeSetOutput, AWSError> {
        this.boot();
        return this.client.createChangeSet(
          this.ops["CreateChangeSet"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackInput & keyof Omit<CreateStackInput, "StackName">]: (CreateStackInput)[K]
    }>): Request<CreateStackOutput, AWSError> {
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].apply(partialParams)
        );
    }

    invokeDescribeStackResource(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceInput & keyof Omit<DescribeStackResourceInput, "StackName">]: (DescribeStackResourceInput)[K]
    }>): Request<DescribeStackResourceOutput, AWSError> {
        this.boot();
        return this.client.describeStackResource(
          this.ops["DescribeStackResource"].apply(partialParams)
        );
    }

    invokeDescribeStackResourceDrifts(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceDriftsInput & keyof Omit<DescribeStackResourceDriftsInput, "StackName">]: (DescribeStackResourceDriftsInput)[K]
    }>): Request<DescribeStackResourceDriftsOutput, AWSError> {
        this.boot();
        return this.client.describeStackResourceDrifts(
          this.ops["DescribeStackResourceDrifts"].apply(partialParams)
        );
    }

    invokeDetectStackDrift(partialParams: ToOptional<{
      [K in keyof DetectStackDriftInput & keyof Omit<DetectStackDriftInput, "StackName">]: (DetectStackDriftInput)[K]
    }>): Request<DetectStackDriftOutput, AWSError> {
        this.boot();
        return this.client.detectStackDrift(
          this.ops["DetectStackDrift"].apply(partialParams)
        );
    }

    invokeDetectStackResourceDrift(partialParams: ToOptional<{
      [K in keyof DetectStackResourceDriftInput & keyof Omit<DetectStackResourceDriftInput, "StackName">]: (DetectStackResourceDriftInput)[K]
    }>): Request<DetectStackResourceDriftOutput, AWSError> {
        this.boot();
        return this.client.detectStackResourceDrift(
          this.ops["DetectStackResourceDrift"].apply(partialParams)
        );
    }

    invokeGetStackPolicy(partialParams: ToOptional<{
      [K in keyof GetStackPolicyInput & keyof Omit<GetStackPolicyInput, "StackName">]: (GetStackPolicyInput)[K]
    }>): Request<GetStackPolicyOutput, AWSError> {
        this.boot();
        return this.client.getStackPolicy(
          this.ops["GetStackPolicy"].apply(partialParams)
        );
    }

    invokeListChangeSets(partialParams: ToOptional<{
      [K in keyof ListChangeSetsInput & keyof Omit<ListChangeSetsInput, "StackName">]: (ListChangeSetsInput)[K]
    }>): Request<ListChangeSetsOutput, AWSError> {
        this.boot();
        return this.client.listChangeSets(
          this.ops["ListChangeSets"].apply(partialParams)
        );
    }

    invokeListStackResources(partialParams: ToOptional<{
      [K in keyof ListStackResourcesInput & keyof Omit<ListStackResourcesInput, "StackName">]: (ListStackResourcesInput)[K]
    }>): Request<ListStackResourcesOutput, AWSError> {
        this.boot();
        return this.client.listStackResources(
          this.ops["ListStackResources"].apply(partialParams)
        );
    }

    invokeRollbackStack(partialParams: ToOptional<{
      [K in keyof RollbackStackInput & keyof Omit<RollbackStackInput, "StackName">]: (RollbackStackInput)[K]
    }>): Request<RollbackStackOutput, AWSError> {
        this.boot();
        return this.client.rollbackStack(
          this.ops["RollbackStack"].apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackInput & keyof Omit<UpdateStackInput, "StackName">]: (UpdateStackInput)[K]
    }>): Request<UpdateStackOutput, AWSError> {
        this.boot();
        return this.client.updateStack(
          this.ops["UpdateStack"].apply(partialParams)
        );
    }

    invokeUpdateTerminationProtection(partialParams: ToOptional<{
      [K in keyof UpdateTerminationProtectionInput & keyof Omit<UpdateTerminationProtectionInput, "StackName">]: (UpdateTerminationProtectionInput)[K]
    }>): Request<UpdateTerminationProtectionOutput, AWSError> {
        this.boot();
        return this.client.updateTerminationProtection(
          this.ops["UpdateTerminationProtection"].apply(partialParams)
        );
    }
}