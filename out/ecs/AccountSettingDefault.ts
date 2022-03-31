
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCapacityProviderRequest,
    CreateServiceRequest,
    CreateTaskSetRequest,
    DeleteAccountSettingRequest,
    DeleteAttributesRequest,
    DeleteCapacityProviderRequest,
    DeleteClusterRequest,
    DeleteServiceRequest,
    DeleteTaskSetRequest,
    DeregisterContainerInstanceRequest,
    DeregisterTaskDefinitionRequest,
    DescribeContainerInstancesRequest,
    DescribeServicesRequest,
    DescribeTaskDefinitionRequest,
    DescribeTaskSetsRequest,
    DescribeTasksRequest,
    ExecuteCommandRequest,
    ListAttributesRequest,
    ListTagsForResourceRequest,
    PutAccountSettingRequest,
    PutAccountSettingDefaultRequest,
    PutAttributesRequest,
    PutClusterCapacityProvidersRequest,
    RegisterTaskDefinitionRequest,
    RunTaskRequest,
    StartTaskRequest,
    StopTaskRequest,
    SubmitAttachmentStateChangesRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateCapacityProviderRequest,
    UpdateClusterRequest,
    UpdateClusterSettingsRequest,
    UpdateContainerAgentRequest,
    UpdateContainerInstancesStateRequest,
    UpdateServiceRequest,
    UpdateServicePrimaryTaskSetRequest,
    UpdateTaskSetRequest,
    CreateCapacityProviderResponse,
    CreateServiceResponse,
    CreateTaskSetResponse,
    DeleteAccountSettingResponse,
    DeleteAttributesResponse,
    DeleteCapacityProviderResponse,
    DeleteClusterResponse,
    DeleteServiceResponse,
    DeleteTaskSetResponse,
    DeregisterContainerInstanceResponse,
    DeregisterTaskDefinitionResponse,
    DescribeContainerInstancesResponse,
    DescribeServicesResponse,
    DescribeTaskDefinitionResponse,
    DescribeTaskSetsResponse,
    DescribeTasksResponse,
    ExecuteCommandResponse,
    ListAttributesResponse,
    ListTagsForResourceResponse,
    PutAccountSettingResponse,
    PutAccountSettingDefaultResponse,
    PutAttributesResponse,
    PutClusterCapacityProvidersResponse,
    RegisterTaskDefinitionResponse,
    RunTaskResponse,
    StartTaskResponse,
    StopTaskResponse,
    SubmitAttachmentStateChangesResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateCapacityProviderResponse,
    UpdateClusterResponse,
    UpdateClusterSettingsResponse,
    UpdateContainerAgentResponse,
    UpdateContainerInstancesStateResponse,
    UpdateServiceResponse,
    UpdateServicePrimaryTaskSetResponse,
    UpdateTaskSetResponse
} from "aws-sdk/clients/ecs";
const schema = require("../apis/ecs-2014-11-13.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ecs.AccountSettingDefault {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.ecs.AccountSettingDefault>) {
        super(...args)
        this.client = new awssdk.ECS()
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

    invokeCreateCapacityProvider(partialParams: ToOptional<{
      [K in keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest]: (CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest)[K]
    }>): Request<CreateCapacityProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCapacityProvider(
          this.ops["CreateCapacityProvider"].applicator.apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest]: (CreateServiceRequest & CreateServiceRequest & CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].applicator.apply(partialParams)
        );
    }

    invokeCreateTaskSet(partialParams: ToOptional<{
      [K in keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest]: (CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest)[K]
    }>): Request<CreateTaskSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTaskSet(
          this.ops["CreateTaskSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccountSetting(partialParams: ToOptional<{
      [K in keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest]: (DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest)[K]
    }>): Request<DeleteAccountSettingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccountSetting(
          this.ops["DeleteAccountSetting"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAttributes(partialParams: ToOptional<{
      [K in keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest]: (DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest)[K]
    }>): Request<DeleteAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAttributes(
          this.ops["DeleteAttributes"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCapacityProvider(partialParams: ToOptional<{
      [K in keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest]: (DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest)[K]
    }>): Request<DeleteCapacityProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCapacityProvider(
          this.ops["DeleteCapacityProvider"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest]: (DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest)[K]
    }>): Request<DeleteServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteService(
          this.ops["DeleteService"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTaskSet(partialParams: ToOptional<{
      [K in keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest]: (DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest)[K]
    }>): Request<DeleteTaskSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTaskSet(
          this.ops["DeleteTaskSet"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterContainerInstance(partialParams: ToOptional<{
      [K in keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest]: (DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest)[K]
    }>): Request<DeregisterContainerInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterContainerInstance(
          this.ops["DeregisterContainerInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterTaskDefinition(partialParams: ToOptional<{
      [K in keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest]: (DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest)[K]
    }>): Request<DeregisterTaskDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterTaskDefinition(
          this.ops["DeregisterTaskDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeContainerInstances(partialParams: ToOptional<{
      [K in keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest]: (DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest)[K]
    }>): Request<DescribeContainerInstancesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContainerInstances(
          this.ops["DescribeContainerInstances"].applicator.apply(partialParams)
        );
    }

    invokeDescribeServices(partialParams: ToOptional<{
      [K in keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest]: (DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest)[K]
    }>): Request<DescribeServicesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServices(
          this.ops["DescribeServices"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTaskDefinition(partialParams: ToOptional<{
      [K in keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest]: (DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest)[K]
    }>): Request<DescribeTaskDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTaskDefinition(
          this.ops["DescribeTaskDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTaskSets(partialParams: ToOptional<{
      [K in keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest]: (DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest)[K]
    }>): Request<DescribeTaskSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTaskSets(
          this.ops["DescribeTaskSets"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTasks(partialParams: ToOptional<{
      [K in keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest]: (DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest)[K]
    }>): Request<DescribeTasksResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTasks(
          this.ops["DescribeTasks"].applicator.apply(partialParams)
        );
    }

    invokeExecuteCommand(partialParams: ToOptional<{
      [K in keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest]: (ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest)[K]
    }>): Request<ExecuteCommandResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeCommand(
          this.ops["ExecuteCommand"].applicator.apply(partialParams)
        );
    }

    invokeListAttributes(partialParams: ToOptional<{
      [K in keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest]: (ListAttributesRequest & ListAttributesRequest & ListAttributesRequest)[K]
    }>): Request<ListAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttributes(
          this.ops["ListAttributes"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutAccountSetting(partialParams: ToOptional<{
      [K in keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest]: (PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest)[K]
    }>): Request<PutAccountSettingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAccountSetting(
          this.ops["PutAccountSetting"].applicator.apply(partialParams)
        );
    }

    invokePutAccountSettingDefault(partialParams: ToOptional<{
      [K in keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest]: (PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest)[K]
    }>): Request<PutAccountSettingDefaultResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAccountSettingDefault(
          this.ops["PutAccountSettingDefault"].applicator.apply(partialParams)
        );
    }

    invokePutAttributes(partialParams: ToOptional<{
      [K in keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest]: (PutAttributesRequest & PutAttributesRequest & PutAttributesRequest)[K]
    }>): Request<PutAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAttributes(
          this.ops["PutAttributes"].applicator.apply(partialParams)
        );
    }

    invokePutClusterCapacityProviders(partialParams: ToOptional<{
      [K in keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest]: (PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest)[K]
    }>): Request<PutClusterCapacityProvidersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putClusterCapacityProviders(
          this.ops["PutClusterCapacityProviders"].applicator.apply(partialParams)
        );
    }

    invokeRegisterTaskDefinition(partialParams: ToOptional<{
      [K in keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest]: (RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest)[K]
    }>): Request<RegisterTaskDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerTaskDefinition(
          this.ops["RegisterTaskDefinition"].applicator.apply(partialParams)
        );
    }

    invokeRunTask(partialParams: ToOptional<{
      [K in keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest]: (RunTaskRequest & RunTaskRequest & RunTaskRequest)[K]
    }>): Request<RunTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.runTask(
          this.ops["RunTask"].applicator.apply(partialParams)
        );
    }

    invokeStartTask(partialParams: ToOptional<{
      [K in keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest]: (StartTaskRequest & StartTaskRequest & StartTaskRequest)[K]
    }>): Request<StartTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startTask(
          this.ops["StartTask"].applicator.apply(partialParams)
        );
    }

    invokeStopTask(partialParams: ToOptional<{
      [K in keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest]: (StopTaskRequest & StopTaskRequest & StopTaskRequest)[K]
    }>): Request<StopTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopTask(
          this.ops["StopTask"].applicator.apply(partialParams)
        );
    }

    invokeSubmitAttachmentStateChanges(partialParams: ToOptional<{
      [K in keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest]: (SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest)[K]
    }>): Request<SubmitAttachmentStateChangesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.submitAttachmentStateChanges(
          this.ops["SubmitAttachmentStateChanges"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCapacityProvider(partialParams: ToOptional<{
      [K in keyof Omit<UpdateCapacityProviderRequest, "name"> & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest]: (Omit<UpdateCapacityProviderRequest, "name"> & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest)[K]
    }>): Request<UpdateCapacityProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCapacityProvider(
          this.ops["UpdateCapacityProvider"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest]: (UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest)[K]
    }>): Request<UpdateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCluster(
          this.ops["UpdateCluster"].applicator.apply(partialParams)
        );
    }

    invokeUpdateClusterSettings(partialParams: ToOptional<{
      [K in keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest]: (UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest)[K]
    }>): Request<UpdateClusterSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateClusterSettings(
          this.ops["UpdateClusterSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContainerAgent(partialParams: ToOptional<{
      [K in keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest]: (UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest)[K]
    }>): Request<UpdateContainerAgentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContainerAgent(
          this.ops["UpdateContainerAgent"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContainerInstancesState(partialParams: ToOptional<{
      [K in keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest]: (UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest)[K]
    }>): Request<UpdateContainerInstancesStateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContainerInstancesState(
          this.ops["UpdateContainerInstancesState"].applicator.apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest]: (UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest)[K]
    }>): Request<UpdateServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateService(
          this.ops["UpdateService"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServicePrimaryTaskSet(partialParams: ToOptional<{
      [K in keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest]: (UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest)[K]
    }>): Request<UpdateServicePrimaryTaskSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServicePrimaryTaskSet(
          this.ops["UpdateServicePrimaryTaskSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTaskSet(partialParams: ToOptional<{
      [K in keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest]: (UpdateTaskSetRequest & UpdateTaskSetRequest & UpdateTaskSetRequest)[K]
    }>): Request<UpdateTaskSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTaskSet(
          this.ops["UpdateTaskSet"].applicator.apply(partialParams)
        );
    }
}