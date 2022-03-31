
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    constructor(...args: ConstructorParameters<typeof aws.cloudformation.Stack>) {
        super(...args)
        this.client = new awssdk.CloudFormation()
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

    invokeBatchDescribeTypeConfigurations(partialParams: ToOptional<{
      [K in keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput & keyof BatchDescribeTypeConfigurationsInput]: (BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput & BatchDescribeTypeConfigurationsInput)[K]
    }>): Request<BatchDescribeTypeConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDescribeTypeConfigurations(
          this.ops["BatchDescribeTypeConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeCancelUpdateStack(partialParams: ToOptional<{
      [K in keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput & keyof CancelUpdateStackInput]: (CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput & CancelUpdateStackInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelUpdateStack(
          this.ops["CancelUpdateStack"].applicator.apply(partialParams)
        );
    }

    invokeContinueUpdateRollback(partialParams: ToOptional<{
      [K in keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput & keyof ContinueUpdateRollbackInput]: (ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput & ContinueUpdateRollbackInput)[K]
    }>): Request<ContinueUpdateRollbackOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.continueUpdateRollback(
          this.ops["ContinueUpdateRollback"].applicator.apply(partialParams)
        );
    }

    invokeCreateChangeSet(partialParams: ToOptional<{
      [K in keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput & keyof CreateChangeSetInput]: (CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput & CreateChangeSetInput)[K]
    }>): Request<CreateChangeSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChangeSet(
          this.ops["CreateChangeSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput & keyof CreateStackInput]: (CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput & CreateStackInput)[K]
    }>): Request<CreateStackOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].applicator.apply(partialParams)
        );
    }

    invokeCreateStackInstances(partialParams: ToOptional<{
      [K in keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput & keyof CreateStackInstancesInput]: (CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput & CreateStackInstancesInput)[K]
    }>): Request<CreateStackInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStackInstances(
          this.ops["CreateStackInstances"].applicator.apply(partialParams)
        );
    }

    invokeCreateStackSet(partialParams: ToOptional<{
      [K in keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput & keyof CreateStackSetInput]: (CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput & CreateStackSetInput)[K]
    }>): Request<CreateStackSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStackSet(
          this.ops["CreateStackSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChangeSet(partialParams: ToOptional<{
      [K in keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput & keyof DeleteChangeSetInput]: (DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput & DeleteChangeSetInput)[K]
    }>): Request<DeleteChangeSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChangeSet(
          this.ops["DeleteChangeSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput & keyof DeleteStackInput]: (DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput & DeleteStackInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStack(
          this.ops["DeleteStack"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStackInstances(partialParams: ToOptional<{
      [K in keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput & keyof DeleteStackInstancesInput]: (DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput & DeleteStackInstancesInput)[K]
    }>): Request<DeleteStackInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStackInstances(
          this.ops["DeleteStackInstances"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStackSet(partialParams: ToOptional<{
      [K in keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput & keyof DeleteStackSetInput]: (DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput & DeleteStackSetInput)[K]
    }>): Request<DeleteStackSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStackSet(
          this.ops["DeleteStackSet"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChangeSet(partialParams: ToOptional<{
      [K in keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput & keyof DescribeChangeSetInput]: (DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput & DescribeChangeSetInput)[K]
    }>): Request<DescribeChangeSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChangeSet(
          this.ops["DescribeChangeSet"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChangeSetHooks(partialParams: ToOptional<{
      [K in keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput & keyof DescribeChangeSetHooksInput]: (DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput & DescribeChangeSetHooksInput)[K]
    }>): Request<DescribeChangeSetHooksOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChangeSetHooks(
          this.ops["DescribeChangeSetHooks"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackDriftDetectionStatus(partialParams: ToOptional<{
      [K in keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput & keyof DescribeStackDriftDetectionStatusInput]: (DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput & DescribeStackDriftDetectionStatusInput)[K]
    }>): Request<DescribeStackDriftDetectionStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackDriftDetectionStatus(
          this.ops["DescribeStackDriftDetectionStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackInstance(partialParams: ToOptional<{
      [K in keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput & keyof DescribeStackInstanceInput]: (DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput & DescribeStackInstanceInput)[K]
    }>): Request<DescribeStackInstanceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackInstance(
          this.ops["DescribeStackInstance"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackResource(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput & keyof DescribeStackResourceInput]: (DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput & DescribeStackResourceInput)[K]
    }>): Request<DescribeStackResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackResource(
          this.ops["DescribeStackResource"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackResourceDrifts(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput & keyof DescribeStackResourceDriftsInput]: (DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput & DescribeStackResourceDriftsInput)[K]
    }>): Request<DescribeStackResourceDriftsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackResourceDrifts(
          this.ops["DescribeStackResourceDrifts"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackSet(partialParams: ToOptional<{
      [K in keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput & keyof DescribeStackSetInput]: (DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput & DescribeStackSetInput)[K]
    }>): Request<DescribeStackSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackSet(
          this.ops["DescribeStackSet"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackSetOperation(partialParams: ToOptional<{
      [K in keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput & keyof DescribeStackSetOperationInput]: (DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput & DescribeStackSetOperationInput)[K]
    }>): Request<DescribeStackSetOperationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackSetOperation(
          this.ops["DescribeStackSetOperation"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTypeRegistration(partialParams: ToOptional<{
      [K in keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput & keyof DescribeTypeRegistrationInput]: (DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput & DescribeTypeRegistrationInput)[K]
    }>): Request<DescribeTypeRegistrationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTypeRegistration(
          this.ops["DescribeTypeRegistration"].applicator.apply(partialParams)
        );
    }

    invokeDetectStackDrift(partialParams: ToOptional<{
      [K in keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput & keyof DetectStackDriftInput]: (DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput & DetectStackDriftInput)[K]
    }>): Request<DetectStackDriftOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detectStackDrift(
          this.ops["DetectStackDrift"].applicator.apply(partialParams)
        );
    }

    invokeDetectStackResourceDrift(partialParams: ToOptional<{
      [K in keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput & keyof DetectStackResourceDriftInput]: (DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput & DetectStackResourceDriftInput)[K]
    }>): Request<DetectStackResourceDriftOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detectStackResourceDrift(
          this.ops["DetectStackResourceDrift"].applicator.apply(partialParams)
        );
    }

    invokeDetectStackSetDrift(partialParams: ToOptional<{
      [K in keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput & keyof DetectStackSetDriftInput]: (DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput & DetectStackSetDriftInput)[K]
    }>): Request<DetectStackSetDriftOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detectStackSetDrift(
          this.ops["DetectStackSetDrift"].applicator.apply(partialParams)
        );
    }

    invokeExecuteChangeSet(partialParams: ToOptional<{
      [K in keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput & keyof ExecuteChangeSetInput]: (ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput & ExecuteChangeSetInput)[K]
    }>): Request<ExecuteChangeSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeChangeSet(
          this.ops["ExecuteChangeSet"].applicator.apply(partialParams)
        );
    }

    invokeGetStackPolicy(partialParams: ToOptional<{
      [K in keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput & keyof GetStackPolicyInput]: (GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput & GetStackPolicyInput)[K]
    }>): Request<GetStackPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStackPolicy(
          this.ops["GetStackPolicy"].applicator.apply(partialParams)
        );
    }

    invokeImportStacksToStackSet(partialParams: ToOptional<{
      [K in keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput & keyof ImportStacksToStackSetInput]: (ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput & ImportStacksToStackSetInput)[K]
    }>): Request<ImportStacksToStackSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importStacksToStackSet(
          this.ops["ImportStacksToStackSet"].applicator.apply(partialParams)
        );
    }

    invokeListChangeSets(partialParams: ToOptional<{
      [K in keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput & keyof ListChangeSetsInput]: (ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput & ListChangeSetsInput)[K]
    }>): Request<ListChangeSetsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChangeSets(
          this.ops["ListChangeSets"].applicator.apply(partialParams)
        );
    }

    invokeListImports(partialParams: ToOptional<{
      [K in keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput & keyof ListImportsInput]: (ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput & ListImportsInput)[K]
    }>): Request<ListImportsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImports(
          this.ops["ListImports"].applicator.apply(partialParams)
        );
    }

    invokeListStackInstances(partialParams: ToOptional<{
      [K in keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput & keyof ListStackInstancesInput]: (ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput & ListStackInstancesInput)[K]
    }>): Request<ListStackInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackInstances(
          this.ops["ListStackInstances"].applicator.apply(partialParams)
        );
    }

    invokeListStackResources(partialParams: ToOptional<{
      [K in keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput & keyof ListStackResourcesInput]: (ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput & ListStackResourcesInput)[K]
    }>): Request<ListStackResourcesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackResources(
          this.ops["ListStackResources"].applicator.apply(partialParams)
        );
    }

    invokeListStackSetOperationResults(partialParams: ToOptional<{
      [K in keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput & keyof ListStackSetOperationResultsInput]: (ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput & ListStackSetOperationResultsInput)[K]
    }>): Request<ListStackSetOperationResultsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackSetOperationResults(
          this.ops["ListStackSetOperationResults"].applicator.apply(partialParams)
        );
    }

    invokeListStackSetOperations(partialParams: ToOptional<{
      [K in keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput & keyof ListStackSetOperationsInput]: (ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput & ListStackSetOperationsInput)[K]
    }>): Request<ListStackSetOperationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackSetOperations(
          this.ops["ListStackSetOperations"].applicator.apply(partialParams)
        );
    }

    invokeRecordHandlerProgress(partialParams: ToOptional<{
      [K in keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput & keyof RecordHandlerProgressInput]: (RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput & RecordHandlerProgressInput)[K]
    }>): Request<RecordHandlerProgressOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.recordHandlerProgress(
          this.ops["RecordHandlerProgress"].applicator.apply(partialParams)
        );
    }

    invokeRegisterType(partialParams: ToOptional<{
      [K in keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput & keyof RegisterTypeInput]: (RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput & RegisterTypeInput)[K]
    }>): Request<RegisterTypeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerType(
          this.ops["RegisterType"].applicator.apply(partialParams)
        );
    }

    invokeRollbackStack(partialParams: ToOptional<{
      [K in keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput & keyof RollbackStackInput]: (RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput & RollbackStackInput)[K]
    }>): Request<RollbackStackOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rollbackStack(
          this.ops["RollbackStack"].applicator.apply(partialParams)
        );
    }

    invokeSetStackPolicy(partialParams: ToOptional<{
      [K in keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput & keyof SetStackPolicyInput]: (SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput & SetStackPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setStackPolicy(
          this.ops["SetStackPolicy"].applicator.apply(partialParams)
        );
    }

    invokeSetTypeConfiguration(partialParams: ToOptional<{
      [K in keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput & keyof SetTypeConfigurationInput]: (SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput & SetTypeConfigurationInput)[K]
    }>): Request<SetTypeConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTypeConfiguration(
          this.ops["SetTypeConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeSignalResource(partialParams: ToOptional<{
      [K in keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput & keyof SignalResourceInput]: (SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput & SignalResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.signalResource(
          this.ops["SignalResource"].applicator.apply(partialParams)
        );
    }

    invokeStopStackSetOperation(partialParams: ToOptional<{
      [K in keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput & keyof StopStackSetOperationInput]: (StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput & StopStackSetOperationInput)[K]
    }>): Request<StopStackSetOperationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopStackSetOperation(
          this.ops["StopStackSetOperation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput & keyof UpdateStackInput]: (UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput & UpdateStackInput)[K]
    }>): Request<UpdateStackOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStack(
          this.ops["UpdateStack"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStackInstances(partialParams: ToOptional<{
      [K in keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput & keyof UpdateStackInstancesInput]: (UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput & UpdateStackInstancesInput)[K]
    }>): Request<UpdateStackInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStackInstances(
          this.ops["UpdateStackInstances"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStackSet(partialParams: ToOptional<{
      [K in keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput & keyof UpdateStackSetInput]: (UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput & UpdateStackSetInput)[K]
    }>): Request<UpdateStackSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStackSet(
          this.ops["UpdateStackSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTerminationProtection(partialParams: ToOptional<{
      [K in keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput & keyof UpdateTerminationProtectionInput]: (UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput & UpdateTerminationProtectionInput)[K]
    }>): Request<UpdateTerminationProtectionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTerminationProtection(
          this.ops["UpdateTerminationProtection"].applicator.apply(partialParams)
        );
    }
}