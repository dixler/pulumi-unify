
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ActivateTypeInput,
    BatchDescribeTypeConfigurationsInput,
    ContinueUpdateRollbackInput,
    CreateChangeSetInput,
    CreateStackInput,
    CreateStackInstancesInput,
    CreateStackSetInput,
    DeactivateTypeInput,
    DeleteChangeSetInput,
    DeleteStackInstancesInput,
    DeleteStackSetInput,
    DeregisterTypeInput,
    DescribeAccountLimitsInput,
    DescribeChangeSetInput,
    DescribeChangeSetHooksInput,
    DescribePublisherInput,
    DescribeStackDriftDetectionStatusInput,
    DescribeStackEventsInput,
    DescribeStackInstanceInput,
    DescribeStackResourceInput,
    DescribeStackResourceDriftsInput,
    DescribeStackResourcesInput,
    DescribeStackSetInput,
    DescribeStackSetOperationInput,
    DescribeStacksInput,
    DescribeTypeInput,
    DescribeTypeRegistrationInput,
    DetectStackDriftInput,
    DetectStackResourceDriftInput,
    DetectStackSetDriftInput,
    EstimateTemplateCostInput,
    ExecuteChangeSetInput,
    GetStackPolicyInput,
    GetTemplateInput,
    GetTemplateSummaryInput,
    ImportStacksToStackSetInput,
    ListChangeSetsInput,
    ListExportsInput,
    ListImportsInput,
    ListStackInstancesInput,
    ListStackResourcesInput,
    ListStackSetOperationResultsInput,
    ListStackSetOperationsInput,
    ListStackSetsInput,
    ListStacksInput,
    ListTypeRegistrationsInput,
    ListTypeVersionsInput,
    ListTypesInput,
    PublishTypeInput,
    RecordHandlerProgressInput,
    RegisterPublisherInput,
    RegisterTypeInput,
    RollbackStackInput,
    SetTypeConfigurationInput,
    SetTypeDefaultVersionInput,
    StopStackSetOperationInput,
    TestTypeInput,
    UpdateStackInput,
    UpdateStackInstancesInput,
    UpdateStackSetInput,
    UpdateTerminationProtectionInput,
    ValidateTemplateInput,
    ActivateTypeOutput,
    BatchDescribeTypeConfigurationsOutput,
    ContinueUpdateRollbackOutput,
    CreateChangeSetOutput,
    CreateStackOutput,
    CreateStackInstancesOutput,
    CreateStackSetOutput,
    DeactivateTypeOutput,
    DeleteChangeSetOutput,
    DeleteStackInstancesOutput,
    DeleteStackSetOutput,
    DeregisterTypeOutput,
    DescribeAccountLimitsOutput,
    DescribeChangeSetOutput,
    DescribeChangeSetHooksOutput,
    DescribePublisherOutput,
    DescribeStackDriftDetectionStatusOutput,
    DescribeStackEventsOutput,
    DescribeStackInstanceOutput,
    DescribeStackResourceOutput,
    DescribeStackResourceDriftsOutput,
    DescribeStackResourcesOutput,
    DescribeStackSetOutput,
    DescribeStackSetOperationOutput,
    DescribeStacksOutput,
    DescribeTypeOutput,
    DescribeTypeRegistrationOutput,
    DetectStackDriftOutput,
    DetectStackResourceDriftOutput,
    DetectStackSetDriftOutput,
    EstimateTemplateCostOutput,
    ExecuteChangeSetOutput,
    GetStackPolicyOutput,
    GetTemplateOutput,
    GetTemplateSummaryOutput,
    ImportStacksToStackSetOutput,
    ListChangeSetsOutput,
    ListExportsOutput,
    ListImportsOutput,
    ListStackInstancesOutput,
    ListStackResourcesOutput,
    ListStackSetOperationResultsOutput,
    ListStackSetOperationsOutput,
    ListStackSetsOutput,
    ListStacksOutput,
    ListTypeRegistrationsOutput,
    ListTypeVersionsOutput,
    ListTypesOutput,
    PublishTypeOutput,
    RecordHandlerProgressOutput,
    RegisterPublisherOutput,
    RegisterTypeOutput,
    RollbackStackOutput,
    SetTypeConfigurationOutput,
    SetTypeDefaultVersionOutput,
    StopStackSetOperationOutput,
    TestTypeOutput,
    UpdateStackOutput,
    UpdateStackInstancesOutput,
    UpdateStackSetOutput,
    UpdateTerminationProtectionOutput,
    ValidateTemplateOutput
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

    invokeActivateType(partialParams: ToOptional<{
      [K in keyof ActivateTypeInput]: (ActivateTypeInput)[K]
    }>): Request<ActivateTypeOutput, AWSError> {
        this.boot();
        return this.client.activateType(
          this.ops["ActivateType"].apply(partialParams)
        );
    }

    invokeBatchDescribeTypeConfigurations(partialParams: ToOptional<{
      [K in keyof BatchDescribeTypeConfigurationsInput]: (BatchDescribeTypeConfigurationsInput)[K]
    }>): Request<BatchDescribeTypeConfigurationsOutput, AWSError> {
        this.boot();
        return this.client.batchDescribeTypeConfigurations(
          this.ops["BatchDescribeTypeConfigurations"].apply(partialParams)
        );
    }

    invokeContinueUpdateRollback(partialParams: ToOptional<{
      [K in keyof ContinueUpdateRollbackInput]: (ContinueUpdateRollbackInput)[K]
    }>): Request<ContinueUpdateRollbackOutput, AWSError> {
        this.boot();
        return this.client.continueUpdateRollback(
          this.ops["ContinueUpdateRollback"].apply(partialParams)
        );
    }

    invokeCreateChangeSet(partialParams: ToOptional<{
      [K in keyof CreateChangeSetInput]: (CreateChangeSetInput)[K]
    }>): Request<CreateChangeSetOutput, AWSError> {
        this.boot();
        return this.client.createChangeSet(
          this.ops["CreateChangeSet"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackInput]: (CreateStackInput)[K]
    }>): Request<CreateStackOutput, AWSError> {
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].apply(partialParams)
        );
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

    invokeDeactivateType(partialParams: ToOptional<{
      [K in keyof DeactivateTypeInput]: (DeactivateTypeInput)[K]
    }>): Request<DeactivateTypeOutput, AWSError> {
        this.boot();
        return this.client.deactivateType(
          this.ops["DeactivateType"].apply(partialParams)
        );
    }

    invokeDeleteChangeSet(partialParams: ToOptional<{
      [K in keyof DeleteChangeSetInput]: (DeleteChangeSetInput)[K]
    }>): Request<DeleteChangeSetOutput, AWSError> {
        this.boot();
        return this.client.deleteChangeSet(
          this.ops["DeleteChangeSet"].apply(partialParams)
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

    invokeDeregisterType(partialParams: ToOptional<{
      [K in keyof DeregisterTypeInput]: (DeregisterTypeInput)[K]
    }>): Request<DeregisterTypeOutput, AWSError> {
        this.boot();
        return this.client.deregisterType(
          this.ops["DeregisterType"].apply(partialParams)
        );
    }

    invokeDescribeAccountLimits(partialParams: ToOptional<{
      [K in keyof DescribeAccountLimitsInput]: (DescribeAccountLimitsInput)[K]
    }>): Request<DescribeAccountLimitsOutput, AWSError> {
        this.boot();
        return this.client.describeAccountLimits(
          this.ops["DescribeAccountLimits"].apply(partialParams)
        );
    }

    invokeDescribeChangeSet(partialParams: ToOptional<{
      [K in keyof DescribeChangeSetInput]: (DescribeChangeSetInput)[K]
    }>): Request<DescribeChangeSetOutput, AWSError> {
        this.boot();
        return this.client.describeChangeSet(
          this.ops["DescribeChangeSet"].apply(partialParams)
        );
    }

    invokeDescribeChangeSetHooks(partialParams: ToOptional<{
      [K in keyof DescribeChangeSetHooksInput]: (DescribeChangeSetHooksInput)[K]
    }>): Request<DescribeChangeSetHooksOutput, AWSError> {
        this.boot();
        return this.client.describeChangeSetHooks(
          this.ops["DescribeChangeSetHooks"].apply(partialParams)
        );
    }

    invokeDescribePublisher(partialParams: ToOptional<{
      [K in keyof DescribePublisherInput]: (DescribePublisherInput)[K]
    }>): Request<DescribePublisherOutput, AWSError> {
        this.boot();
        return this.client.describePublisher(
          this.ops["DescribePublisher"].apply(partialParams)
        );
    }

    invokeDescribeStackDriftDetectionStatus(partialParams: ToOptional<{
      [K in keyof DescribeStackDriftDetectionStatusInput]: (DescribeStackDriftDetectionStatusInput)[K]
    }>): Request<DescribeStackDriftDetectionStatusOutput, AWSError> {
        this.boot();
        return this.client.describeStackDriftDetectionStatus(
          this.ops["DescribeStackDriftDetectionStatus"].apply(partialParams)
        );
    }

    invokeDescribeStackEvents(partialParams: ToOptional<{
      [K in keyof DescribeStackEventsInput]: (DescribeStackEventsInput)[K]
    }>): Request<DescribeStackEventsOutput, AWSError> {
        this.boot();
        return this.client.describeStackEvents(
          this.ops["DescribeStackEvents"].apply(partialParams)
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

    invokeDescribeStackResource(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceInput]: (DescribeStackResourceInput)[K]
    }>): Request<DescribeStackResourceOutput, AWSError> {
        this.boot();
        return this.client.describeStackResource(
          this.ops["DescribeStackResource"].apply(partialParams)
        );
    }

    invokeDescribeStackResourceDrifts(partialParams: ToOptional<{
      [K in keyof DescribeStackResourceDriftsInput]: (DescribeStackResourceDriftsInput)[K]
    }>): Request<DescribeStackResourceDriftsOutput, AWSError> {
        this.boot();
        return this.client.describeStackResourceDrifts(
          this.ops["DescribeStackResourceDrifts"].apply(partialParams)
        );
    }

    invokeDescribeStackResources(partialParams: ToOptional<{
      [K in keyof DescribeStackResourcesInput]: (DescribeStackResourcesInput)[K]
    }>): Request<DescribeStackResourcesOutput, AWSError> {
        this.boot();
        return this.client.describeStackResources(
          this.ops["DescribeStackResources"].apply(partialParams)
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

    invokeDescribeStacks(partialParams: ToOptional<{
      [K in keyof DescribeStacksInput]: (DescribeStacksInput)[K]
    }>): Request<DescribeStacksOutput, AWSError> {
        this.boot();
        return this.client.describeStacks(
          this.ops["DescribeStacks"].apply(partialParams)
        );
    }

    invokeDescribeType(partialParams: ToOptional<{
      [K in keyof DescribeTypeInput]: (DescribeTypeInput)[K]
    }>): Request<DescribeTypeOutput, AWSError> {
        this.boot();
        return this.client.describeType(
          this.ops["DescribeType"].apply(partialParams)
        );
    }

    invokeDescribeTypeRegistration(partialParams: ToOptional<{
      [K in keyof DescribeTypeRegistrationInput]: (DescribeTypeRegistrationInput)[K]
    }>): Request<DescribeTypeRegistrationOutput, AWSError> {
        this.boot();
        return this.client.describeTypeRegistration(
          this.ops["DescribeTypeRegistration"].apply(partialParams)
        );
    }

    invokeDetectStackDrift(partialParams: ToOptional<{
      [K in keyof DetectStackDriftInput]: (DetectStackDriftInput)[K]
    }>): Request<DetectStackDriftOutput, AWSError> {
        this.boot();
        return this.client.detectStackDrift(
          this.ops["DetectStackDrift"].apply(partialParams)
        );
    }

    invokeDetectStackResourceDrift(partialParams: ToOptional<{
      [K in keyof DetectStackResourceDriftInput]: (DetectStackResourceDriftInput)[K]
    }>): Request<DetectStackResourceDriftOutput, AWSError> {
        this.boot();
        return this.client.detectStackResourceDrift(
          this.ops["DetectStackResourceDrift"].apply(partialParams)
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

    invokeEstimateTemplateCost(partialParams: ToOptional<{
      [K in keyof EstimateTemplateCostInput]: (EstimateTemplateCostInput)[K]
    }>): Request<EstimateTemplateCostOutput, AWSError> {
        this.boot();
        return this.client.estimateTemplateCost(
          this.ops["EstimateTemplateCost"].apply(partialParams)
        );
    }

    invokeExecuteChangeSet(partialParams: ToOptional<{
      [K in keyof ExecuteChangeSetInput]: (ExecuteChangeSetInput)[K]
    }>): Request<ExecuteChangeSetOutput, AWSError> {
        this.boot();
        return this.client.executeChangeSet(
          this.ops["ExecuteChangeSet"].apply(partialParams)
        );
    }

    invokeGetStackPolicy(partialParams: ToOptional<{
      [K in keyof GetStackPolicyInput]: (GetStackPolicyInput)[K]
    }>): Request<GetStackPolicyOutput, AWSError> {
        this.boot();
        return this.client.getStackPolicy(
          this.ops["GetStackPolicy"].apply(partialParams)
        );
    }

    invokeGetTemplate(partialParams: ToOptional<{
      [K in keyof GetTemplateInput]: (GetTemplateInput)[K]
    }>): Request<GetTemplateOutput, AWSError> {
        this.boot();
        return this.client.getTemplate(
          this.ops["GetTemplate"].apply(partialParams)
        );
    }

    invokeGetTemplateSummary(partialParams: ToOptional<{
      [K in keyof GetTemplateSummaryInput]: (GetTemplateSummaryInput)[K]
    }>): Request<GetTemplateSummaryOutput, AWSError> {
        this.boot();
        return this.client.getTemplateSummary(
          this.ops["GetTemplateSummary"].apply(partialParams)
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

    invokeListChangeSets(partialParams: ToOptional<{
      [K in keyof ListChangeSetsInput]: (ListChangeSetsInput)[K]
    }>): Request<ListChangeSetsOutput, AWSError> {
        this.boot();
        return this.client.listChangeSets(
          this.ops["ListChangeSets"].apply(partialParams)
        );
    }

    invokeListExports(partialParams: ToOptional<{
      [K in keyof ListExportsInput]: (ListExportsInput)[K]
    }>): Request<ListExportsOutput, AWSError> {
        this.boot();
        return this.client.listExports(
          this.ops["ListExports"].apply(partialParams)
        );
    }

    invokeListImports(partialParams: ToOptional<{
      [K in keyof ListImportsInput]: (ListImportsInput)[K]
    }>): Request<ListImportsOutput, AWSError> {
        this.boot();
        return this.client.listImports(
          this.ops["ListImports"].apply(partialParams)
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

    invokeListStackResources(partialParams: ToOptional<{
      [K in keyof ListStackResourcesInput]: (ListStackResourcesInput)[K]
    }>): Request<ListStackResourcesOutput, AWSError> {
        this.boot();
        return this.client.listStackResources(
          this.ops["ListStackResources"].apply(partialParams)
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

    invokeListStackSets(partialParams: ToOptional<{
      [K in keyof ListStackSetsInput]: (ListStackSetsInput)[K]
    }>): Request<ListStackSetsOutput, AWSError> {
        this.boot();
        return this.client.listStackSets(
          this.ops["ListStackSets"].apply(partialParams)
        );
    }

    invokeListStacks(partialParams: ToOptional<{
      [K in keyof ListStacksInput]: (ListStacksInput)[K]
    }>): Request<ListStacksOutput, AWSError> {
        this.boot();
        return this.client.listStacks(
          this.ops["ListStacks"].apply(partialParams)
        );
    }

    invokeListTypeRegistrations(partialParams: ToOptional<{
      [K in keyof ListTypeRegistrationsInput]: (ListTypeRegistrationsInput)[K]
    }>): Request<ListTypeRegistrationsOutput, AWSError> {
        this.boot();
        return this.client.listTypeRegistrations(
          this.ops["ListTypeRegistrations"].apply(partialParams)
        );
    }

    invokeListTypeVersions(partialParams: ToOptional<{
      [K in keyof ListTypeVersionsInput]: (ListTypeVersionsInput)[K]
    }>): Request<ListTypeVersionsOutput, AWSError> {
        this.boot();
        return this.client.listTypeVersions(
          this.ops["ListTypeVersions"].apply(partialParams)
        );
    }

    invokeListTypes(partialParams: ToOptional<{
      [K in keyof ListTypesInput]: (ListTypesInput)[K]
    }>): Request<ListTypesOutput, AWSError> {
        this.boot();
        return this.client.listTypes(
          this.ops["ListTypes"].apply(partialParams)
        );
    }

    invokePublishType(partialParams: ToOptional<{
      [K in keyof PublishTypeInput]: (PublishTypeInput)[K]
    }>): Request<PublishTypeOutput, AWSError> {
        this.boot();
        return this.client.publishType(
          this.ops["PublishType"].apply(partialParams)
        );
    }

    invokeRecordHandlerProgress(partialParams: ToOptional<{
      [K in keyof RecordHandlerProgressInput]: (RecordHandlerProgressInput)[K]
    }>): Request<RecordHandlerProgressOutput, AWSError> {
        this.boot();
        return this.client.recordHandlerProgress(
          this.ops["RecordHandlerProgress"].apply(partialParams)
        );
    }

    invokeRegisterPublisher(partialParams: ToOptional<{
      [K in keyof RegisterPublisherInput]: (RegisterPublisherInput)[K]
    }>): Request<RegisterPublisherOutput, AWSError> {
        this.boot();
        return this.client.registerPublisher(
          this.ops["RegisterPublisher"].apply(partialParams)
        );
    }

    invokeRegisterType(partialParams: ToOptional<{
      [K in keyof RegisterTypeInput]: (RegisterTypeInput)[K]
    }>): Request<RegisterTypeOutput, AWSError> {
        this.boot();
        return this.client.registerType(
          this.ops["RegisterType"].apply(partialParams)
        );
    }

    invokeRollbackStack(partialParams: ToOptional<{
      [K in keyof RollbackStackInput]: (RollbackStackInput)[K]
    }>): Request<RollbackStackOutput, AWSError> {
        this.boot();
        return this.client.rollbackStack(
          this.ops["RollbackStack"].apply(partialParams)
        );
    }

    invokeSetTypeConfiguration(partialParams: ToOptional<{
      [K in keyof SetTypeConfigurationInput]: (SetTypeConfigurationInput)[K]
    }>): Request<SetTypeConfigurationOutput, AWSError> {
        this.boot();
        return this.client.setTypeConfiguration(
          this.ops["SetTypeConfiguration"].apply(partialParams)
        );
    }

    invokeSetTypeDefaultVersion(partialParams: ToOptional<{
      [K in keyof SetTypeDefaultVersionInput]: (SetTypeDefaultVersionInput)[K]
    }>): Request<SetTypeDefaultVersionOutput, AWSError> {
        this.boot();
        return this.client.setTypeDefaultVersion(
          this.ops["SetTypeDefaultVersion"].apply(partialParams)
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

    invokeTestType(partialParams: ToOptional<{
      [K in keyof TestTypeInput]: (TestTypeInput)[K]
    }>): Request<TestTypeOutput, AWSError> {
        this.boot();
        return this.client.testType(
          this.ops["TestType"].apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackInput]: (UpdateStackInput)[K]
    }>): Request<UpdateStackOutput, AWSError> {
        this.boot();
        return this.client.updateStack(
          this.ops["UpdateStack"].apply(partialParams)
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

    invokeUpdateTerminationProtection(partialParams: ToOptional<{
      [K in keyof UpdateTerminationProtectionInput]: (UpdateTerminationProtectionInput)[K]
    }>): Request<UpdateTerminationProtectionOutput, AWSError> {
        this.boot();
        return this.client.updateTerminationProtection(
          this.ops["UpdateTerminationProtection"].apply(partialParams)
        );
    }

    invokeValidateTemplate(partialParams: ToOptional<{
      [K in keyof ValidateTemplateInput]: (ValidateTemplateInput)[K]
    }>): Request<ValidateTemplateOutput, AWSError> {
        this.boot();
        return this.client.validateTemplate(
          this.ops["ValidateTemplate"].apply(partialParams)
        );
    }
}