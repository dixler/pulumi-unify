
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/codedeploy-2014-10-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codedeploy.DeploymentGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.codedeploy.DeploymentGroup>) {
        super(...args)
        this.client = new awssdk.CodeDeploy()
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

    invokeAddTagsToOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput & keyof AddTagsToOnPremisesInstancesInput]: (AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput & AddTagsToOnPremisesInstancesInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToOnPremisesInstances(
          this.ops["AddTagsToOnPremisesInstances"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetApplicationRevisions(partialParams: ToOptional<{
      [K in keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput & keyof BatchGetApplicationRevisionsInput]: (BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput & BatchGetApplicationRevisionsInput)[K]
    }>): Request<BatchGetApplicationRevisionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetApplicationRevisions(
          this.ops["BatchGetApplicationRevisions"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetApplications(partialParams: ToOptional<{
      [K in keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput & keyof BatchGetApplicationsInput]: (BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput & BatchGetApplicationsInput)[K]
    }>): Request<BatchGetApplicationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetApplications(
          this.ops["BatchGetApplications"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetDeploymentGroups(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput & keyof BatchGetDeploymentGroupsInput]: (BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput & BatchGetDeploymentGroupsInput)[K]
    }>): Request<BatchGetDeploymentGroupsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDeploymentGroups(
          this.ops["BatchGetDeploymentGroups"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetDeploymentInstances(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput & keyof BatchGetDeploymentInstancesInput]: (BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput & BatchGetDeploymentInstancesInput)[K]
    }>): Request<BatchGetDeploymentInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDeploymentInstances(
          this.ops["BatchGetDeploymentInstances"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetDeployments(partialParams: ToOptional<{
      [K in keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput & keyof BatchGetDeploymentsInput]: (BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput & BatchGetDeploymentsInput)[K]
    }>): Request<BatchGetDeploymentsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDeployments(
          this.ops["BatchGetDeployments"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput & keyof BatchGetOnPremisesInstancesInput]: (BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput & BatchGetOnPremisesInstancesInput)[K]
    }>): Request<BatchGetOnPremisesInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetOnPremisesInstances(
          this.ops["BatchGetOnPremisesInstances"].applicator.apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput & keyof CreateApplicationInput]: (CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput & CreateApplicationInput)[K]
    }>): Request<CreateApplicationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput & keyof CreateDeploymentInput]: (CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput & CreateDeploymentInput)[K]
    }>): Request<CreateDeploymentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeploymentConfig(partialParams: ToOptional<{
      [K in keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput & keyof CreateDeploymentConfigInput]: (CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput & CreateDeploymentConfigInput)[K]
    }>): Request<CreateDeploymentConfigOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeploymentConfig(
          this.ops["CreateDeploymentConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeploymentGroup(partialParams: ToOptional<{
      [K in keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput & keyof CreateDeploymentGroupInput]: (CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput & CreateDeploymentGroupInput)[K]
    }>): Request<CreateDeploymentGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeploymentGroup(
          this.ops["CreateDeploymentGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput & keyof DeleteApplicationInput]: (DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput & DeleteApplicationInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDeploymentConfig(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput & keyof DeleteDeploymentConfigInput]: (DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput & DeleteDeploymentConfigInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeploymentConfig(
          this.ops["DeleteDeploymentConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDeploymentGroup(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput & keyof DeleteDeploymentGroupInput]: (DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput & DeleteDeploymentGroupInput)[K]
    }>): Request<DeleteDeploymentGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeploymentGroup(
          this.ops["DeleteDeploymentGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterOnPremisesInstance(partialParams: ToOptional<{
      [K in keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput & keyof DeregisterOnPremisesInstanceInput]: (DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput & DeregisterOnPremisesInstanceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterOnPremisesInstance(
          this.ops["DeregisterOnPremisesInstance"].applicator.apply(partialParams)
        );
    }

    invokeGetApplication(partialParams: ToOptional<{
      [K in keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput & keyof GetApplicationInput]: (GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput & GetApplicationInput)[K]
    }>): Request<GetApplicationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplication(
          this.ops["GetApplication"].applicator.apply(partialParams)
        );
    }

    invokeGetApplicationRevision(partialParams: ToOptional<{
      [K in keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput & keyof GetApplicationRevisionInput]: (GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput & GetApplicationRevisionInput)[K]
    }>): Request<GetApplicationRevisionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplicationRevision(
          this.ops["GetApplicationRevision"].applicator.apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput & keyof GetDeploymentInput]: (GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput & GetDeploymentInput)[K]
    }>): Request<GetDeploymentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].applicator.apply(partialParams)
        );
    }

    invokeGetDeploymentConfig(partialParams: ToOptional<{
      [K in keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput & keyof Omit<GetDeploymentConfigInput, "deploymentConfigName"> & keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput & keyof GetDeploymentConfigInput]: (GetDeploymentConfigInput & GetDeploymentConfigInput & GetDeploymentConfigInput & Omit<GetDeploymentConfigInput, "deploymentConfigName"> & GetDeploymentConfigInput & GetDeploymentConfigInput & GetDeploymentConfigInput)[K]
    }>): Request<GetDeploymentConfigOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeploymentConfig(
          this.ops["GetDeploymentConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetDeploymentGroup(partialParams: ToOptional<{
      [K in keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof GetDeploymentGroupInput & keyof Omit<GetDeploymentGroupInput, "deploymentGroupName"> & keyof GetDeploymentGroupInput]: (GetDeploymentGroupInput & GetDeploymentGroupInput & GetDeploymentGroupInput & GetDeploymentGroupInput & GetDeploymentGroupInput & Omit<GetDeploymentGroupInput, "deploymentGroupName"> & GetDeploymentGroupInput)[K]
    }>): Request<GetDeploymentGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeploymentGroup(
          this.ops["GetDeploymentGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetDeploymentInstance(partialParams: ToOptional<{
      [K in keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput & keyof GetDeploymentInstanceInput]: (GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput & GetDeploymentInstanceInput)[K]
    }>): Request<GetDeploymentInstanceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeploymentInstance(
          this.ops["GetDeploymentInstance"].applicator.apply(partialParams)
        );
    }

    invokeGetOnPremisesInstance(partialParams: ToOptional<{
      [K in keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput & keyof GetOnPremisesInstanceInput]: (GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput & GetOnPremisesInstanceInput)[K]
    }>): Request<GetOnPremisesInstanceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOnPremisesInstance(
          this.ops["GetOnPremisesInstance"].applicator.apply(partialParams)
        );
    }

    invokeListApplicationRevisions(partialParams: ToOptional<{
      [K in keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput & keyof ListApplicationRevisionsInput]: (ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput & ListApplicationRevisionsInput)[K]
    }>): Request<ListApplicationRevisionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listApplicationRevisions(
          this.ops["ListApplicationRevisions"].applicator.apply(partialParams)
        );
    }

    invokeListDeploymentGroups(partialParams: ToOptional<{
      [K in keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput & keyof ListDeploymentGroupsInput]: (ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput & ListDeploymentGroupsInput)[K]
    }>): Request<ListDeploymentGroupsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDeploymentGroups(
          this.ops["ListDeploymentGroups"].applicator.apply(partialParams)
        );
    }

    invokeListDeploymentInstances(partialParams: ToOptional<{
      [K in keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput & keyof ListDeploymentInstancesInput]: (ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput & ListDeploymentInstancesInput)[K]
    }>): Request<ListDeploymentInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDeploymentInstances(
          this.ops["ListDeploymentInstances"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof Omit<ListTagsForResourceInput, "ResourceArn"> & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & Omit<ListTagsForResourceInput, "ResourceArn"> & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeRegisterApplicationRevision(partialParams: ToOptional<{
      [K in keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput & keyof RegisterApplicationRevisionInput]: (RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput & RegisterApplicationRevisionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerApplicationRevision(
          this.ops["RegisterApplicationRevision"].applicator.apply(partialParams)
        );
    }

    invokeRegisterOnPremisesInstance(partialParams: ToOptional<{
      [K in keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput & keyof RegisterOnPremisesInstanceInput]: (RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput & RegisterOnPremisesInstanceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerOnPremisesInstance(
          this.ops["RegisterOnPremisesInstance"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromOnPremisesInstances(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput & keyof RemoveTagsFromOnPremisesInstancesInput]: (RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput & RemoveTagsFromOnPremisesInstancesInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromOnPremisesInstances(
          this.ops["RemoveTagsFromOnPremisesInstances"].applicator.apply(partialParams)
        );
    }

    invokeStopDeployment(partialParams: ToOptional<{
      [K in keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput & keyof StopDeploymentInput]: (StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput & StopDeploymentInput)[K]
    }>): Request<StopDeploymentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDeployment(
          this.ops["StopDeployment"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof Omit<TagResourceInput, "ResourceArn"> & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & Omit<TagResourceInput, "ResourceArn"> & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof Omit<UntagResourceInput, "ResourceArn"> & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & Omit<UntagResourceInput, "ResourceArn"> & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDeploymentGroup(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof UpdateDeploymentGroupInput & keyof Omit<UpdateDeploymentGroupInput, "currentDeploymentGroupName"> & keyof UpdateDeploymentGroupInput]: (UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & UpdateDeploymentGroupInput & Omit<UpdateDeploymentGroupInput, "currentDeploymentGroupName"> & UpdateDeploymentGroupInput)[K]
    }>): Request<UpdateDeploymentGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeploymentGroup(
          this.ops["UpdateDeploymentGroup"].applicator.apply(partialParams)
        );
    }
}