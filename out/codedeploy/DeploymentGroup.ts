
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AddTagsToOnPremisesInstancesInput,
    BatchGetApplicationRevisionsInput,
    BatchGetApplicationsInput,
    BatchGetDeploymentGroupsInput,
    BatchGetDeploymentInstancesInput,
    BatchGetDeploymentsInput,
    BatchGetOnPremisesInstancesInput,
    CreateApplicationInput,
    CreateDeploymentInput,
    CreateDeploymentConfigInput,
    CreateDeploymentGroupInput,
    DeleteApplicationInput,
    DeleteDeploymentConfigInput,
    DeleteDeploymentGroupInput,
    DeregisterOnPremisesInstanceInput,
    GetApplicationInput,
    GetApplicationRevisionInput,
    GetDeploymentInput,
    GetDeploymentConfigInput,
    GetDeploymentGroupInput,
    GetDeploymentInstanceInput,
    GetOnPremisesInstanceInput,
    ListApplicationRevisionsInput,
    ListDeploymentGroupsInput,
    ListDeploymentInstancesInput,
    ListTagsForResourceInput,
    RegisterApplicationRevisionInput,
    RegisterOnPremisesInstanceInput,
    RemoveTagsFromOnPremisesInstancesInput,
    StopDeploymentInput,
    TagResourceInput,
    UntagResourceInput,
    UpdateDeploymentGroupInput,
    BatchGetApplicationRevisionsOutput,
    BatchGetApplicationsOutput,
    BatchGetDeploymentGroupsOutput,
    BatchGetDeploymentInstancesOutput,
    BatchGetDeploymentsOutput,
    BatchGetOnPremisesInstancesOutput,
    CreateApplicationOutput,
    CreateDeploymentOutput,
    CreateDeploymentConfigOutput,
    CreateDeploymentGroupOutput,
    DeleteDeploymentGroupOutput,
    GetApplicationOutput,
    GetApplicationRevisionOutput,
    GetDeploymentOutput,
    GetDeploymentConfigOutput,
    GetDeploymentGroupOutput,
    GetDeploymentInstanceOutput,
    GetOnPremisesInstanceOutput,
    ListApplicationRevisionsOutput,
    ListDeploymentGroupsOutput,
    ListDeploymentInstancesOutput,
    ListTagsForResourceOutput,
    StopDeploymentOutput,
    TagResourceOutput,
    UntagResourceOutput,
    UpdateDeploymentGroupOutput
} from "aws-sdk/clients/codedeploy";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codedeploy.DeploymentGroup {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.codedeploy.DeploymentGroup>) {
        super(...args)
        this.client = new awssdk.CodeDeploy()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/codedeploy-2014-10-06.normal.json"), this.client)
    }

    invokeAddTagsToOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput]: (AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput)[K]
    }>): void {
        return this.client.addTagsToOnPremisesInstances(
            this.ops["AddTagsToOnPremisesInstances"].apply(partialParams)
        );
    }

    invokeBatchGetApplicationRevisions(partialParams: ToOptional<{
      [K in keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput]: (BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput)[K]
    }>): BatchGetApplicationRevisionsOutput {
        return this.client.batchGetApplicationRevisions(
            this.ops["BatchGetApplicationRevisions"].apply(partialParams)
        );
    }

    invokeBatchGetApplications(partialParams: ToOptional<{
      [K in keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput]: (BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput)[K]
    }>): BatchGetApplicationsOutput {
        return this.client.batchGetApplications(
            this.ops["BatchGetApplications"].apply(partialParams)
        );
    }

    invokeBatchGetDeploymentGroups(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput]: (BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput)[K]
    }>): BatchGetDeploymentGroupsOutput {
        return this.client.batchGetDeploymentGroups(
            this.ops["BatchGetDeploymentGroups"].apply(partialParams)
        );
    }

    invokeBatchGetDeploymentInstances(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput]: (BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput)[K]
    }>): BatchGetDeploymentInstancesOutput {
        return this.client.batchGetDeploymentInstances(
            this.ops["BatchGetDeploymentInstances"].apply(partialParams)
        );
    }

    invokeBatchGetDeployments(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput]: (BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput)[K]
    }>): BatchGetDeploymentsOutput {
        return this.client.batchGetDeployments(
            this.ops["BatchGetDeployments"].apply(partialParams)
        );
    }

    invokeBatchGetOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput]: (BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput)[K]
    }>): BatchGetOnPremisesInstancesOutput {
        return this.client.batchGetOnPremisesInstances(
            this.ops["BatchGetOnPremisesInstances"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput]: (CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput)[K]
    }>): CreateApplicationOutput {
        return this.client.createApplication(
            this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput]: (CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput)[K]
    }>): CreateDeploymentOutput {
        return this.client.createDeployment(
            this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDeploymentConfig(partialParams: ToOptional<{
      [K in keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput]: (CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput)[K]
    }>): CreateDeploymentConfigOutput {
        return this.client.createDeploymentConfig(
            this.ops["CreateDeploymentConfig"].apply(partialParams)
        );
    }

    invokeCreateDeploymentGroup(partialParams: ToOptional<{
      [K in keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput]: (CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput)[K]
    }>): CreateDeploymentGroupOutput {
        return this.client.createDeploymentGroup(
            this.ops["CreateDeploymentGroup"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput]: (DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput)[K]
    }>): void {
        return this.client.deleteApplication(
            this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteDeploymentConfig(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput]: (DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput)[K]
    }>): void {
        return this.client.deleteDeploymentConfig(
            this.ops["DeleteDeploymentConfig"].apply(partialParams)
        );
    }

    invokeDeleteDeploymentGroup(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput]: (DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput)[K]
    }>): DeleteDeploymentGroupOutput {
        return this.client.deleteDeploymentGroup(
            this.ops["DeleteDeploymentGroup"].apply(partialParams)
        );
    }

    invokeDeregisterOnPremisesInstance(partialParams: ToOptional<{
      [K in keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput]: (DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput)[K]
    }>): void {
        return this.client.deregisterOnPremisesInstance(
            this.ops["DeregisterOnPremisesInstance"].apply(partialParams)
        );
    }

    invokeGetApplication(partialParams: ToOptional<{
      [K in keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput]: (GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput)[K]
    }>): GetApplicationOutput {
        return this.client.getApplication(
            this.ops["GetApplication"].apply(partialParams)
        );
    }

    invokeGetApplicationRevision(partialParams: ToOptional<{
      [K in keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput]: (GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput)[K]
    }>): GetApplicationRevisionOutput {
        return this.client.getApplicationRevision(
            this.ops["GetApplicationRevision"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput]: (GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput)[K]
    }>): GetDeploymentOutput {
        return this.client.getDeployment(
            this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeploymentConfig(partialParams: ToOptional<{
      [K in keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput & keyof Omit<GetDeploymentConfigInput, "deploymentConfigName"> & keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput]: (GetDeploymentConfigInput & GetDeploymentConfigInput & GetDeploymentConfigInput & Omit<GetDeploymentConfigInput, "deploymentConfigName"> & GetDeploymentConfigInput & GetDeploymentConfigInput & GetDeploymentConfigInput)[K]
    }>): GetDeploymentConfigOutput {
        return this.client.getDeploymentConfig(
            this.ops["GetDeploymentConfig"].apply(partialParams)
        );
    }

    invokeGetDeploymentGroup(partialParams: ToOptional<{
      [K in keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof Omit<GetDeploymentGroupInput, "deploymentGroupName"> & keyof GetDeploymentGroupInput]: (GetDeploymentGroupInput & GetDeploymentGroupInput & GetDeploymentGroupInput & GetDeploymentGroupInput & GetDeploymentGroupInput & Omit<GetDeploymentGroupInput, "deploymentGroupName"> & GetDeploymentGroupInput)[K]
    }>): GetDeploymentGroupOutput {
        return this.client.getDeploymentGroup(
            this.ops["GetDeploymentGroup"].apply(partialParams)
        );
    }

    invokeGetDeploymentInstance(partialParams: ToOptional<{
      [K in keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput]: (GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput)[K]
    }>): GetDeploymentInstanceOutput {
        return this.client.getDeploymentInstance(
            this.ops["GetDeploymentInstance"].apply(partialParams)
        );
    }

    invokeGetOnPremisesInstance(partialParams: ToOptional<{
      [K in keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput]: (GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput)[K]
    }>): GetOnPremisesInstanceOutput {
        return this.client.getOnPremisesInstance(
            this.ops["GetOnPremisesInstance"].apply(partialParams)
        );
    }

    invokeListApplicationRevisions(partialParams: ToOptional<{
      [K in keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput]: (ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput)[K]
    }>): ListApplicationRevisionsOutput {
        return this.client.listApplicationRevisions(
            this.ops["ListApplicationRevisions"].apply(partialParams)
        );
    }

    invokeListDeploymentGroups(partialParams: ToOptional<{
      [K in keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput]: (ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput)[K]
    }>): ListDeploymentGroupsOutput {
        return this.client.listDeploymentGroups(
            this.ops["ListDeploymentGroups"].apply(partialParams)
        );
    }

    invokeListDeploymentInstances(partialParams: ToOptional<{
      [K in keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput]: (ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput)[K]
    }>): ListDeploymentInstancesOutput {
        return this.client.listDeploymentInstances(
            this.ops["ListDeploymentInstances"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof Omit<ListTagsForResourceInput, "ResourceArn"> & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & Omit<ListTagsForResourceInput, "ResourceArn"> & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRegisterApplicationRevision(partialParams: ToOptional<{
      [K in keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput]: (RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput)[K]
    }>): void {
        return this.client.registerApplicationRevision(
            this.ops["RegisterApplicationRevision"].apply(partialParams)
        );
    }

    invokeRegisterOnPremisesInstance(partialParams: ToOptional<{
      [K in keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput]: (RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput)[K]
    }>): void {
        return this.client.registerOnPremisesInstance(
            this.ops["RegisterOnPremisesInstance"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput]: (RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput)[K]
    }>): void {
        return this.client.removeTagsFromOnPremisesInstances(
            this.ops["RemoveTagsFromOnPremisesInstances"].apply(partialParams)
        );
    }

    invokeStopDeployment(partialParams: ToOptional<{
      [K in keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput]: (StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput)[K]
    }>): StopDeploymentOutput {
        return this.client.stopDeployment(
            this.ops["StopDeployment"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof Omit<TagResourceInput, "ResourceArn"> & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & Omit<TagResourceInput, "ResourceArn"> & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): TagResourceOutput {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof Omit<UntagResourceInput, "ResourceArn"> & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & Omit<UntagResourceInput, "ResourceArn"> & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): UntagResourceOutput {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDeploymentGroup(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof Omit<UpdateDeploymentGroupInput, "currentDeploymentGroupName"> & keyof UpdateDeploymentGroupInput]: (UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & Omit<UpdateDeploymentGroupInput, "currentDeploymentGroupName"> & UpdateDeploymentGroupInput)[K]
    }>): UpdateDeploymentGroupOutput {
        return this.client.updateDeploymentGroup(
            this.ops["UpdateDeploymentGroup"].apply(partialParams)
        );
    }
}