
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    BatchGetApplicationRevisionsInput,
    BatchGetApplicationsInput,
    BatchGetDeploymentGroupsInput,
    BatchGetDeploymentInstancesInput,
    BatchGetDeploymentTargetsInput,
    BatchGetDeploymentsInput,
    BatchGetOnPremisesInstancesInput,
    CreateApplicationInput,
    CreateDeploymentInput,
    CreateDeploymentConfigInput,
    CreateDeploymentGroupInput,
    DeleteDeploymentGroupInput,
    DeleteGitHubAccountTokenInput,
    DeleteResourcesByExternalIdInput,
    GetApplicationInput,
    GetApplicationRevisionInput,
    GetDeploymentInput,
    GetDeploymentConfigInput,
    GetDeploymentGroupInput,
    GetDeploymentInstanceInput,
    GetDeploymentTargetInput,
    GetOnPremisesInstanceInput,
    ListApplicationRevisionsInput,
    ListApplicationsInput,
    ListDeploymentConfigsInput,
    ListDeploymentGroupsInput,
    ListDeploymentInstancesInput,
    ListDeploymentTargetsInput,
    ListDeploymentsInput,
    ListGitHubAccountTokenNamesInput,
    ListOnPremisesInstancesInput,
    ListTagsForResourceInput,
    PutLifecycleEventHookExecutionStatusInput,
    StopDeploymentInput,
    TagResourceInput,
    UntagResourceInput,
    UpdateDeploymentGroupInput,
    BatchGetApplicationRevisionsOutput,
    BatchGetApplicationsOutput,
    BatchGetDeploymentGroupsOutput,
    BatchGetDeploymentInstancesOutput,
    BatchGetDeploymentTargetsOutput,
    BatchGetDeploymentsOutput,
    BatchGetOnPremisesInstancesOutput,
    CreateApplicationOutput,
    CreateDeploymentOutput,
    CreateDeploymentConfigOutput,
    CreateDeploymentGroupOutput,
    DeleteDeploymentGroupOutput,
    DeleteGitHubAccountTokenOutput,
    DeleteResourcesByExternalIdOutput,
    GetApplicationOutput,
    GetApplicationRevisionOutput,
    GetDeploymentOutput,
    GetDeploymentConfigOutput,
    GetDeploymentGroupOutput,
    GetDeploymentInstanceOutput,
    GetDeploymentTargetOutput,
    GetOnPremisesInstanceOutput,
    ListApplicationRevisionsOutput,
    ListApplicationsOutput,
    ListDeploymentConfigsOutput,
    ListDeploymentGroupsOutput,
    ListDeploymentInstancesOutput,
    ListDeploymentTargetsOutput,
    ListDeploymentsOutput,
    ListGitHubAccountTokenNamesOutput,
    ListOnPremisesInstancesOutput,
    ListTagsForResourceOutput,
    PutLifecycleEventHookExecutionStatusOutput,
    StopDeploymentOutput,
    TagResourceOutput,
    UntagResourceOutput,
    UpdateDeploymentGroupOutput
} from "aws-sdk/clients/codedeploy";
const schema = require("../apis/codedeploy-2014-10-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codedeploy.Application {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.codedeploy.Application>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CodeDeploy()
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

    invokeBatchGetApplicationRevisions(partialParams: ToOptional<{
      [K in keyof BatchGetApplicationRevisionsInput]: (BatchGetApplicationRevisionsInput)[K]
    }>): Request<BatchGetApplicationRevisionsOutput, AWSError> {
        this.boot();
        return this.client.batchGetApplicationRevisions(
          this.ops["BatchGetApplicationRevisions"].apply(partialParams)
        );
    }

    invokeBatchGetApplications(partialParams: ToOptional<{
      [K in keyof BatchGetApplicationsInput]: (BatchGetApplicationsInput)[K]
    }>): Request<BatchGetApplicationsOutput, AWSError> {
        this.boot();
        return this.client.batchGetApplications(
          this.ops["BatchGetApplications"].apply(partialParams)
        );
    }

    invokeBatchGetDeploymentGroups(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentGroupsInput]: (BatchGetDeploymentGroupsInput)[K]
    }>): Request<BatchGetDeploymentGroupsOutput, AWSError> {
        this.boot();
        return this.client.batchGetDeploymentGroups(
          this.ops["BatchGetDeploymentGroups"].apply(partialParams)
        );
    }

    invokeBatchGetDeploymentInstances(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentInstancesInput]: (BatchGetDeploymentInstancesInput)[K]
    }>): Request<BatchGetDeploymentInstancesOutput, AWSError> {
        this.boot();
        return this.client.batchGetDeploymentInstances(
          this.ops["BatchGetDeploymentInstances"].apply(partialParams)
        );
    }

    invokeBatchGetDeploymentTargets(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentTargetsInput]: (BatchGetDeploymentTargetsInput)[K]
    }>): Request<BatchGetDeploymentTargetsOutput, AWSError> {
        this.boot();
        return this.client.batchGetDeploymentTargets(
          this.ops["BatchGetDeploymentTargets"].apply(partialParams)
        );
    }

    invokeBatchGetDeployments(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentsInput]: (BatchGetDeploymentsInput)[K]
    }>): Request<BatchGetDeploymentsOutput, AWSError> {
        this.boot();
        return this.client.batchGetDeployments(
          this.ops["BatchGetDeployments"].apply(partialParams)
        );
    }

    invokeBatchGetOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof BatchGetOnPremisesInstancesInput]: (BatchGetOnPremisesInstancesInput)[K]
    }>): Request<BatchGetOnPremisesInstancesOutput, AWSError> {
        this.boot();
        return this.client.batchGetOnPremisesInstances(
          this.ops["BatchGetOnPremisesInstances"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationInput]: (CreateApplicationInput)[K]
    }>): Request<CreateApplicationOutput, AWSError> {
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentInput]: (CreateDeploymentInput)[K]
    }>): Request<CreateDeploymentOutput, AWSError> {
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDeploymentConfig(partialParams: ToOptional<{
      [K in keyof CreateDeploymentConfigInput]: (CreateDeploymentConfigInput)[K]
    }>): Request<CreateDeploymentConfigOutput, AWSError> {
        this.boot();
        return this.client.createDeploymentConfig(
          this.ops["CreateDeploymentConfig"].apply(partialParams)
        );
    }

    invokeCreateDeploymentGroup(partialParams: ToOptional<{
      [K in keyof CreateDeploymentGroupInput]: (CreateDeploymentGroupInput)[K]
    }>): Request<CreateDeploymentGroupOutput, AWSError> {
        this.boot();
        return this.client.createDeploymentGroup(
          this.ops["CreateDeploymentGroup"].apply(partialParams)
        );
    }

    invokeDeleteDeploymentGroup(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentGroupInput]: (DeleteDeploymentGroupInput)[K]
    }>): Request<DeleteDeploymentGroupOutput, AWSError> {
        this.boot();
        return this.client.deleteDeploymentGroup(
          this.ops["DeleteDeploymentGroup"].apply(partialParams)
        );
    }

    invokeDeleteGitHubAccountToken(partialParams: ToOptional<{
      [K in keyof DeleteGitHubAccountTokenInput]: (DeleteGitHubAccountTokenInput)[K]
    }>): Request<DeleteGitHubAccountTokenOutput, AWSError> {
        this.boot();
        return this.client.deleteGitHubAccountToken(
          this.ops["DeleteGitHubAccountToken"].apply(partialParams)
        );
    }

    invokeDeleteResourcesByExternalId(partialParams: ToOptional<{
      [K in keyof DeleteResourcesByExternalIdInput]: (DeleteResourcesByExternalIdInput)[K]
    }>): Request<DeleteResourcesByExternalIdOutput, AWSError> {
        this.boot();
        return this.client.deleteResourcesByExternalId(
          this.ops["DeleteResourcesByExternalId"].apply(partialParams)
        );
    }

    invokeGetApplication(partialParams: ToOptional<{
      [K in keyof GetApplicationInput]: (GetApplicationInput)[K]
    }>): Request<GetApplicationOutput, AWSError> {
        this.boot();
        return this.client.getApplication(
          this.ops["GetApplication"].apply(partialParams)
        );
    }

    invokeGetApplicationRevision(partialParams: ToOptional<{
      [K in keyof GetApplicationRevisionInput]: (GetApplicationRevisionInput)[K]
    }>): Request<GetApplicationRevisionOutput, AWSError> {
        this.boot();
        return this.client.getApplicationRevision(
          this.ops["GetApplicationRevision"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentInput]: (GetDeploymentInput)[K]
    }>): Request<GetDeploymentOutput, AWSError> {
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeploymentConfig(partialParams: ToOptional<{
      [K in keyof GetDeploymentConfigInput]: (GetDeploymentConfigInput)[K]
    }>): Request<GetDeploymentConfigOutput, AWSError> {
        this.boot();
        return this.client.getDeploymentConfig(
          this.ops["GetDeploymentConfig"].apply(partialParams)
        );
    }

    invokeGetDeploymentGroup(partialParams: ToOptional<{
      [K in keyof GetDeploymentGroupInput]: (GetDeploymentGroupInput)[K]
    }>): Request<GetDeploymentGroupOutput, AWSError> {
        this.boot();
        return this.client.getDeploymentGroup(
          this.ops["GetDeploymentGroup"].apply(partialParams)
        );
    }

    invokeGetDeploymentInstance(partialParams: ToOptional<{
      [K in keyof GetDeploymentInstanceInput]: (GetDeploymentInstanceInput)[K]
    }>): Request<GetDeploymentInstanceOutput, AWSError> {
        this.boot();
        return this.client.getDeploymentInstance(
          this.ops["GetDeploymentInstance"].apply(partialParams)
        );
    }

    invokeGetDeploymentTarget(partialParams: ToOptional<{
      [K in keyof GetDeploymentTargetInput]: (GetDeploymentTargetInput)[K]
    }>): Request<GetDeploymentTargetOutput, AWSError> {
        this.boot();
        return this.client.getDeploymentTarget(
          this.ops["GetDeploymentTarget"].apply(partialParams)
        );
    }

    invokeGetOnPremisesInstance(partialParams: ToOptional<{
      [K in keyof GetOnPremisesInstanceInput]: (GetOnPremisesInstanceInput)[K]
    }>): Request<GetOnPremisesInstanceOutput, AWSError> {
        this.boot();
        return this.client.getOnPremisesInstance(
          this.ops["GetOnPremisesInstance"].apply(partialParams)
        );
    }

    invokeListApplicationRevisions(partialParams: ToOptional<{
      [K in keyof ListApplicationRevisionsInput]: (ListApplicationRevisionsInput)[K]
    }>): Request<ListApplicationRevisionsOutput, AWSError> {
        this.boot();
        return this.client.listApplicationRevisions(
          this.ops["ListApplicationRevisions"].apply(partialParams)
        );
    }

    invokeListApplications(partialParams: ToOptional<{
      [K in keyof ListApplicationsInput]: (ListApplicationsInput)[K]
    }>): Request<ListApplicationsOutput, AWSError> {
        this.boot();
        return this.client.listApplications(
          this.ops["ListApplications"].apply(partialParams)
        );
    }

    invokeListDeploymentConfigs(partialParams: ToOptional<{
      [K in keyof ListDeploymentConfigsInput]: (ListDeploymentConfigsInput)[K]
    }>): Request<ListDeploymentConfigsOutput, AWSError> {
        this.boot();
        return this.client.listDeploymentConfigs(
          this.ops["ListDeploymentConfigs"].apply(partialParams)
        );
    }

    invokeListDeploymentGroups(partialParams: ToOptional<{
      [K in keyof ListDeploymentGroupsInput]: (ListDeploymentGroupsInput)[K]
    }>): Request<ListDeploymentGroupsOutput, AWSError> {
        this.boot();
        return this.client.listDeploymentGroups(
          this.ops["ListDeploymentGroups"].apply(partialParams)
        );
    }

    invokeListDeploymentInstances(partialParams: ToOptional<{
      [K in keyof ListDeploymentInstancesInput]: (ListDeploymentInstancesInput)[K]
    }>): Request<ListDeploymentInstancesOutput, AWSError> {
        this.boot();
        return this.client.listDeploymentInstances(
          this.ops["ListDeploymentInstances"].apply(partialParams)
        );
    }

    invokeListDeploymentTargets(partialParams: ToOptional<{
      [K in keyof ListDeploymentTargetsInput]: (ListDeploymentTargetsInput)[K]
    }>): Request<ListDeploymentTargetsOutput, AWSError> {
        this.boot();
        return this.client.listDeploymentTargets(
          this.ops["ListDeploymentTargets"].apply(partialParams)
        );
    }

    invokeListDeployments(partialParams: ToOptional<{
      [K in keyof ListDeploymentsInput]: (ListDeploymentsInput)[K]
    }>): Request<ListDeploymentsOutput, AWSError> {
        this.boot();
        return this.client.listDeployments(
          this.ops["ListDeployments"].apply(partialParams)
        );
    }

    invokeListGitHubAccountTokenNames(partialParams: ToOptional<{
      [K in keyof ListGitHubAccountTokenNamesInput]: (ListGitHubAccountTokenNamesInput)[K]
    }>): Request<ListGitHubAccountTokenNamesOutput, AWSError> {
        this.boot();
        return this.client.listGitHubAccountTokenNames(
          this.ops["ListGitHubAccountTokenNames"].apply(partialParams)
        );
    }

    invokeListOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof ListOnPremisesInstancesInput]: (ListOnPremisesInstancesInput)[K]
    }>): Request<ListOnPremisesInstancesOutput, AWSError> {
        this.boot();
        return this.client.listOnPremisesInstances(
          this.ops["ListOnPremisesInstances"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput]: (ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutLifecycleEventHookExecutionStatus(partialParams: ToOptional<{
      [K in keyof PutLifecycleEventHookExecutionStatusInput]: (PutLifecycleEventHookExecutionStatusInput)[K]
    }>): Request<PutLifecycleEventHookExecutionStatusOutput, AWSError> {
        this.boot();
        return this.client.putLifecycleEventHookExecutionStatus(
          this.ops["PutLifecycleEventHookExecutionStatus"].apply(partialParams)
        );
    }

    invokeStopDeployment(partialParams: ToOptional<{
      [K in keyof StopDeploymentInput]: (StopDeploymentInput)[K]
    }>): Request<StopDeploymentOutput, AWSError> {
        this.boot();
        return this.client.stopDeployment(
          this.ops["StopDeployment"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput]: (TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput]: (UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDeploymentGroup(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentGroupInput]: (UpdateDeploymentGroupInput)[K]
    }>): Request<UpdateDeploymentGroupOutput, AWSError> {
        this.boot();
        return this.client.updateDeploymentGroup(
          this.ops["UpdateDeploymentGroup"].apply(partialParams)
        );
    }
}