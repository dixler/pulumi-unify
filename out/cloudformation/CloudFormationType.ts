
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchDescribeTypeConfigurationsInput,
    CancelUpdateStackInput,
    ContinueUpdateRollbackInput,
    CreateChangeSetInput,
    CreateStackInput,
    CreateStackInstancesInput,
    CreateStackSetInput,
    DeleteChangeSetInput,
    DeleteStackInput,
    DeleteStackInstancesInput,
    DeleteStackSetInput,
    DescribeChangeSetInput,
    DescribeChangeSetHooksInput,
    DescribeStackDriftDetectionStatusInput,
    DescribeStackInstanceInput,
    DescribeStackResourceInput,
    DescribeStackResourceDriftsInput,
    DescribeStackSetInput,
    DescribeStackSetOperationInput,
    DescribeTypeRegistrationInput,
    DetectStackDriftInput,
    DetectStackResourceDriftInput,
    DetectStackSetDriftInput,
    ExecuteChangeSetInput,
    GetStackPolicyInput,
    ImportStacksToStackSetInput,
    ListChangeSetsInput,
    ListImportsInput,
    ListStackInstancesInput,
    ListStackResourcesInput,
    ListStackSetOperationResultsInput,
    ListStackSetOperationsInput,
    RecordHandlerProgressInput,
    RegisterTypeInput,
    RollbackStackInput,
    SetStackPolicyInput,
    SetTypeConfigurationInput,
    SignalResourceInput,
    StopStackSetOperationInput,
    UpdateStackInput,
    UpdateStackInstancesInput,
    UpdateStackSetInput,
    UpdateTerminationProtectionInput,
    BatchDescribeTypeConfigurationsOutput,
    ContinueUpdateRollbackOutput,
    CreateChangeSetOutput,
    CreateStackOutput,
    CreateStackInstancesOutput,
    CreateStackSetOutput,
    DeleteChangeSetOutput,
    DeleteStackInstancesOutput,
    DeleteStackSetOutput,
    DescribeChangeSetOutput,
    DescribeChangeSetHooksOutput,
    DescribeStackDriftDetectionStatusOutput,
    DescribeStackInstanceOutput,
    DescribeStackResourceOutput,
    DescribeStackResourceDriftsOutput,
    DescribeStackSetOutput,
    DescribeStackSetOperationOutput,
    DescribeTypeRegistrationOutput,
    DetectStackDriftOutput,
    DetectStackResourceDriftOutput,
    DetectStackSetDriftOutput,
    ExecuteChangeSetOutput,
    GetStackPolicyOutput,
    ImportStacksToStackSetOutput,
    ListChangeSetsOutput,
    ListImportsOutput,
    ListStackInstancesOutput,
    ListStackResourcesOutput,
    ListStackSetOperationResultsOutput,
    ListStackSetOperationsOutput,
    RecordHandlerProgressOutput,
    RegisterTypeOutput,
    RollbackStackOutput,
    SetTypeConfigurationOutput,
    StopStackSetOperationOutput,
    UpdateStackOutput,
    UpdateStackInstancesOutput,
    UpdateStackSetOutput,
    UpdateTerminationProtectionOutput
} from "aws-sdk/clients/cloudformation";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudformation.CloudFormationType {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloudformation.CloudFormationType>) {
        super(...args)
        this.client = new awssdk.CloudFormation()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloudformation-2010-05-15.normal.json"), this.client)
    }

    invokeBatchDescribeTypeConfigurations(partialParams: ToOptional<{
      [K in keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput]: (BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput)[K]
    }>): BatchDescribeTypeConfigurationsOutput {
        return this.client.batchDescribeTypeConfigurations(
            this.ops["BatchDescribeTypeConfigurations"].apply(partialParams)
        );
    }

    invokeCancelUpdateStack(partialParams: ToOptional<{
      [K in keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput]: (CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput)[K]
    }>): void {
        return this.client.cancelUpdateStack(
            this.ops["CancelUpdateStack"].apply(partialParams)
        );
    }

    invokeContinueUpdateRollback(partialParams: ToOptional<{
      [K in keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput]: (ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput)[K]
    }>): ContinueUpdateRollbackOutput {
        return this.client.continueUpdateRollback(
            this.ops["ContinueUpdateRollback"].apply(partialParams)
        );
    }

    invokeCreateChangeSet(partialParams: ToOptional<{
      [K in keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput]: (CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput)[K]
    }>): CreateChangeSetOutput {
        return this.client.createChangeSet(
            this.ops["CreateChangeSet"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput]: (CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput)[K]
    }>): CreateStackOutput {
        return this.client.createStack(
            this.ops["CreateStack"].apply(partialParams)
        );
    }

    invokeCreateStackInstances(partialParams: ToOptional<{
      [K in keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput]: (CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput)[K]
    }>): CreateStackInstancesOutput {
        return this.client.createStackInstances(
            this.ops["CreateStackInstances"].apply(partialParams)
        );
    }

    invokeCreateStackSet(partialParams: ToOptional<{
      [K in keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput]: (CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput)[K]
    }>): CreateStackSetOutput {
        return this.client.createStackSet(
            this.ops["CreateStackSet"].apply(partialParams)
        );
    }

    invokeDeleteChangeSet(partialParams: ToOptional<{
      [K in keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput]: (DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput)[K]
    }>): DeleteChangeSetOutput {
        return this.client.deleteChangeSet(
            this.ops["DeleteChangeSet"].apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput]: (DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput)[K]
    }>): void {
        return this.client.deleteStack(
            this.ops["DeleteStack"].apply(partialParams)
        );
    }

    invokeDeleteStackInstances(partialParams: ToOptional<{
      [K in keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput]: (DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput)[K]
    }>): DeleteStackInstancesOutput {
        return this.client.deleteStackInstances(
            this.ops["DeleteStackInstances"].apply(partialParams)
        );
    }

    invokeDeleteStackSet(partialParams: ToOptional<{
      [K in keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput]: (DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput)[K]
    }>): DeleteStackSetOutput {
        return this.client.deleteStackSet(
            this.ops["DeleteStackSet"].apply(partialParams)
        );
    }

    invokeDescribeChangeSet(partialParams: ToOptional<{
      [K in keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput]: (DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput)[K]
    }>): DescribeChangeSetOutput {
        return this.client.describeChangeSet(
            this.ops["DescribeChangeSet"].apply(partialParams)
        );
    }

    invokeDescribeChangeSetHooks(partialParams: ToOptional<{
      [K in keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput]: (DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput)[K]
    }>): DescribeChangeSetHooksOutput {
        return this.client.describeChangeSetHooks(
            this.ops["DescribeChangeSetHooks"].apply(partialParams)
        );
    }

    invokeDescribeStackDriftDetectionStatus(partialParams: ToOptional<{
      [K in keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput]: (DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput)[K]
    }>): DescribeStackDriftDetectionStatusOutput {
        return this.client.describeStackDriftDetectionStatus(
            this.ops["DescribeStackDriftDetectionStatus"].apply(partialParams)
        );
    }

    invokeDescribeStackInstance(partialParams: ToOptional<{
      [K in keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput]: (DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput)[K]
    }>): DescribeStackInstanceOutput {
        return this.client.describeStackInstance(
            this.ops["DescribeStackInstance"].apply(partialParams)
        );
    }

    invokeDescribeStackResource(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput]: (DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput)[K]
    }>): DescribeStackResourceOutput {
        return this.client.describeStackResource(
            this.ops["DescribeStackResource"].apply(partialParams)
        );
    }

    invokeDescribeStackResourceDrifts(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput]: (DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput)[K]
    }>): DescribeStackResourceDriftsOutput {
        return this.client.describeStackResourceDrifts(
            this.ops["DescribeStackResourceDrifts"].apply(partialParams)
        );
    }

    invokeDescribeStackSet(partialParams: ToOptional<{
      [K in keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput]: (DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput)[K]
    }>): DescribeStackSetOutput {
        return this.client.describeStackSet(
            this.ops["DescribeStackSet"].apply(partialParams)
        );
    }

    invokeDescribeStackSetOperation(partialParams: ToOptional<{
      [K in keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput]: (DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput)[K]
    }>): DescribeStackSetOperationOutput {
        return this.client.describeStackSetOperation(
            this.ops["DescribeStackSetOperation"].apply(partialParams)
        );
    }

    invokeDescribeTypeRegistration(partialParams: ToOptional<{
      [K in keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput]: (DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput)[K]
    }>): DescribeTypeRegistrationOutput {
        return this.client.describeTypeRegistration(
            this.ops["DescribeTypeRegistration"].apply(partialParams)
        );
    }

    invokeDetectStackDrift(partialParams: ToOptional<{
      [K in keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput]: (DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput)[K]
    }>): DetectStackDriftOutput {
        return this.client.detectStackDrift(
            this.ops["DetectStackDrift"].apply(partialParams)
        );
    }

    invokeDetectStackResourceDrift(partialParams: ToOptional<{
      [K in keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput]: (DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput)[K]
    }>): DetectStackResourceDriftOutput {
        return this.client.detectStackResourceDrift(
            this.ops["DetectStackResourceDrift"].apply(partialParams)
        );
    }

    invokeDetectStackSetDrift(partialParams: ToOptional<{
      [K in keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput]: (DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput)[K]
    }>): DetectStackSetDriftOutput {
        return this.client.detectStackSetDrift(
            this.ops["DetectStackSetDrift"].apply(partialParams)
        );
    }

    invokeExecuteChangeSet(partialParams: ToOptional<{
      [K in keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput]: (ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput)[K]
    }>): ExecuteChangeSetOutput {
        return this.client.executeChangeSet(
            this.ops["ExecuteChangeSet"].apply(partialParams)
        );
    }

    invokeGetStackPolicy(partialParams: ToOptional<{
      [K in keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput]: (GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput)[K]
    }>): GetStackPolicyOutput {
        return this.client.getStackPolicy(
            this.ops["GetStackPolicy"].apply(partialParams)
        );
    }

    invokeImportStacksToStackSet(partialParams: ToOptional<{
      [K in keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput]: (ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput)[K]
    }>): ImportStacksToStackSetOutput {
        return this.client.importStacksToStackSet(
            this.ops["ImportStacksToStackSet"].apply(partialParams)
        );
    }

    invokeListChangeSets(partialParams: ToOptional<{
      [K in keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput]: (ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput)[K]
    }>): ListChangeSetsOutput {
        return this.client.listChangeSets(
            this.ops["ListChangeSets"].apply(partialParams)
        );
    }

    invokeListImports(partialParams: ToOptional<{
      [K in keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput]: (ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput)[K]
    }>): ListImportsOutput {
        return this.client.listImports(
            this.ops["ListImports"].apply(partialParams)
        );
    }

    invokeListStackInstances(partialParams: ToOptional<{
      [K in keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput]: (ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput)[K]
    }>): ListStackInstancesOutput {
        return this.client.listStackInstances(
            this.ops["ListStackInstances"].apply(partialParams)
        );
    }

    invokeListStackResources(partialParams: ToOptional<{
      [K in keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput]: (ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput)[K]
    }>): ListStackResourcesOutput {
        return this.client.listStackResources(
            this.ops["ListStackResources"].apply(partialParams)
        );
    }

    invokeListStackSetOperationResults(partialParams: ToOptional<{
      [K in keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput]: (ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput)[K]
    }>): ListStackSetOperationResultsOutput {
        return this.client.listStackSetOperationResults(
            this.ops["ListStackSetOperationResults"].apply(partialParams)
        );
    }

    invokeListStackSetOperations(partialParams: ToOptional<{
      [K in keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput]: (ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput)[K]
    }>): ListStackSetOperationsOutput {
        return this.client.listStackSetOperations(
            this.ops["ListStackSetOperations"].apply(partialParams)
        );
    }

    invokeRecordHandlerProgress(partialParams: ToOptional<{
      [K in keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput]: (RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput)[K]
    }>): RecordHandlerProgressOutput {
        return this.client.recordHandlerProgress(
            this.ops["RecordHandlerProgress"].apply(partialParams)
        );
    }

    invokeRegisterType(partialParams: ToOptional<{
      [K in keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput]: (RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput)[K]
    }>): RegisterTypeOutput {
        return this.client.registerType(
            this.ops["RegisterType"].apply(partialParams)
        );
    }

    invokeRollbackStack(partialParams: ToOptional<{
      [K in keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput]: (RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput)[K]
    }>): RollbackStackOutput {
        return this.client.rollbackStack(
            this.ops["RollbackStack"].apply(partialParams)
        );
    }

    invokeSetStackPolicy(partialParams: ToOptional<{
      [K in keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput]: (SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput)[K]
    }>): void {
        return this.client.setStackPolicy(
            this.ops["SetStackPolicy"].apply(partialParams)
        );
    }

    invokeSetTypeConfiguration(partialParams: ToOptional<{
      [K in keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput]: (SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput)[K]
    }>): SetTypeConfigurationOutput {
        return this.client.setTypeConfiguration(
            this.ops["SetTypeConfiguration"].apply(partialParams)
        );
    }

    invokeSignalResource(partialParams: ToOptional<{
      [K in keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput]: (SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput)[K]
    }>): void {
        return this.client.signalResource(
            this.ops["SignalResource"].apply(partialParams)
        );
    }

    invokeStopStackSetOperation(partialParams: ToOptional<{
      [K in keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput]: (StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput)[K]
    }>): StopStackSetOperationOutput {
        return this.client.stopStackSetOperation(
            this.ops["StopStackSetOperation"].apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput]: (UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput)[K]
    }>): UpdateStackOutput {
        return this.client.updateStack(
            this.ops["UpdateStack"].apply(partialParams)
        );
    }

    invokeUpdateStackInstances(partialParams: ToOptional<{
      [K in keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput]: (UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput)[K]
    }>): UpdateStackInstancesOutput {
        return this.client.updateStackInstances(
            this.ops["UpdateStackInstances"].apply(partialParams)
        );
    }

    invokeUpdateStackSet(partialParams: ToOptional<{
      [K in keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput]: (UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput)[K]
    }>): UpdateStackSetOutput {
        return this.client.updateStackSet(
            this.ops["UpdateStackSet"].apply(partialParams)
        );
    }

    invokeUpdateTerminationProtection(partialParams: ToOptional<{
      [K in keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput]: (UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput)[K]
    }>): UpdateTerminationProtectionOutput {
        return this.client.updateTerminationProtection(
            this.ops["UpdateTerminationProtection"].apply(partialParams)
        );
    }
}