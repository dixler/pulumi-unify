
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ecs.TaskSet {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ecs.TaskSet>) {
        super(...args)
        this.client = new awssdk.ECS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ecs-2014-11-13.normal.json"), this.client)
    }

    invokeCreateCapacityProvider(partialParams: ToOptional<{
      [K in keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest & keyof CreateCapacityProviderRequest]: (CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest & CreateCapacityProviderRequest)[K]
    }>): CreateCapacityProviderResponse {
        return this.client.createCapacityProvider(
            this.ops["CreateCapacityProvider"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest]: (CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest)[K]
    }>): CreateServiceResponse {
        return this.client.createService(
            this.ops["CreateService"].apply(partialParams)
        );
    }

    invokeCreateTaskSet(partialParams: ToOptional<{
      [K in keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest & keyof CreateTaskSetRequest]: (CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest & CreateTaskSetRequest)[K]
    }>): CreateTaskSetResponse {
        return this.client.createTaskSet(
            this.ops["CreateTaskSet"].apply(partialParams)
        );
    }

    invokeDeleteAccountSetting(partialParams: ToOptional<{
      [K in keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest & keyof DeleteAccountSettingRequest]: (DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest & DeleteAccountSettingRequest)[K]
    }>): DeleteAccountSettingResponse {
        return this.client.deleteAccountSetting(
            this.ops["DeleteAccountSetting"].apply(partialParams)
        );
    }

    invokeDeleteAttributes(partialParams: ToOptional<{
      [K in keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest & keyof DeleteAttributesRequest]: (DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest & DeleteAttributesRequest)[K]
    }>): DeleteAttributesResponse {
        return this.client.deleteAttributes(
            this.ops["DeleteAttributes"].apply(partialParams)
        );
    }

    invokeDeleteCapacityProvider(partialParams: ToOptional<{
      [K in keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest & keyof DeleteCapacityProviderRequest]: (DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest & DeleteCapacityProviderRequest)[K]
    }>): DeleteCapacityProviderResponse {
        return this.client.deleteCapacityProvider(
            this.ops["DeleteCapacityProvider"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): DeleteClusterResponse {
        return this.client.deleteCluster(
            this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest]: (DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest)[K]
    }>): DeleteServiceResponse {
        return this.client.deleteService(
            this.ops["DeleteService"].apply(partialParams)
        );
    }

    invokeDeleteTaskSet(partialParams: ToOptional<{
      [K in keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest & keyof DeleteTaskSetRequest]: (DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest & DeleteTaskSetRequest)[K]
    }>): DeleteTaskSetResponse {
        return this.client.deleteTaskSet(
            this.ops["DeleteTaskSet"].apply(partialParams)
        );
    }

    invokeDeregisterContainerInstance(partialParams: ToOptional<{
      [K in keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest & keyof DeregisterContainerInstanceRequest]: (DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest & DeregisterContainerInstanceRequest)[K]
    }>): DeregisterContainerInstanceResponse {
        return this.client.deregisterContainerInstance(
            this.ops["DeregisterContainerInstance"].apply(partialParams)
        );
    }

    invokeDeregisterTaskDefinition(partialParams: ToOptional<{
      [K in keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest & keyof DeregisterTaskDefinitionRequest]: (DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest & DeregisterTaskDefinitionRequest)[K]
    }>): DeregisterTaskDefinitionResponse {
        return this.client.deregisterTaskDefinition(
            this.ops["DeregisterTaskDefinition"].apply(partialParams)
        );
    }

    invokeDescribeContainerInstances(partialParams: ToOptional<{
      [K in keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest & keyof DescribeContainerInstancesRequest]: (DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest & DescribeContainerInstancesRequest)[K]
    }>): DescribeContainerInstancesResponse {
        return this.client.describeContainerInstances(
            this.ops["DescribeContainerInstances"].apply(partialParams)
        );
    }

    invokeDescribeServices(partialParams: ToOptional<{
      [K in keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest & keyof DescribeServicesRequest]: (DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest & DescribeServicesRequest)[K]
    }>): DescribeServicesResponse {
        return this.client.describeServices(
            this.ops["DescribeServices"].apply(partialParams)
        );
    }

    invokeDescribeTaskDefinition(partialParams: ToOptional<{
      [K in keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest & keyof DescribeTaskDefinitionRequest]: (DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest & DescribeTaskDefinitionRequest)[K]
    }>): DescribeTaskDefinitionResponse {
        return this.client.describeTaskDefinition(
            this.ops["DescribeTaskDefinition"].apply(partialParams)
        );
    }

    invokeDescribeTaskSets(partialParams: ToOptional<{
      [K in keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest & keyof DescribeTaskSetsRequest]: (DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest & DescribeTaskSetsRequest)[K]
    }>): DescribeTaskSetsResponse {
        return this.client.describeTaskSets(
            this.ops["DescribeTaskSets"].apply(partialParams)
        );
    }

    invokeDescribeTasks(partialParams: ToOptional<{
      [K in keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest & keyof DescribeTasksRequest]: (DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest & DescribeTasksRequest)[K]
    }>): DescribeTasksResponse {
        return this.client.describeTasks(
            this.ops["DescribeTasks"].apply(partialParams)
        );
    }

    invokeExecuteCommand(partialParams: ToOptional<{
      [K in keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest & keyof ExecuteCommandRequest]: (ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest & ExecuteCommandRequest)[K]
    }>): ExecuteCommandResponse {
        return this.client.executeCommand(
            this.ops["ExecuteCommand"].apply(partialParams)
        );
    }

    invokeListAttributes(partialParams: ToOptional<{
      [K in keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest & keyof ListAttributesRequest]: (ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest & ListAttributesRequest)[K]
    }>): ListAttributesResponse {
        return this.client.listAttributes(
            this.ops["ListAttributes"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutAccountSetting(partialParams: ToOptional<{
      [K in keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest & keyof PutAccountSettingRequest]: (PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest & PutAccountSettingRequest)[K]
    }>): PutAccountSettingResponse {
        return this.client.putAccountSetting(
            this.ops["PutAccountSetting"].apply(partialParams)
        );
    }

    invokePutAccountSettingDefault(partialParams: ToOptional<{
      [K in keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest & keyof PutAccountSettingDefaultRequest]: (PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest & PutAccountSettingDefaultRequest)[K]
    }>): PutAccountSettingDefaultResponse {
        return this.client.putAccountSettingDefault(
            this.ops["PutAccountSettingDefault"].apply(partialParams)
        );
    }

    invokePutAttributes(partialParams: ToOptional<{
      [K in keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest & keyof PutAttributesRequest]: (PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest & PutAttributesRequest)[K]
    }>): PutAttributesResponse {
        return this.client.putAttributes(
            this.ops["PutAttributes"].apply(partialParams)
        );
    }

    invokePutClusterCapacityProviders(partialParams: ToOptional<{
      [K in keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest & keyof PutClusterCapacityProvidersRequest]: (PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest & PutClusterCapacityProvidersRequest)[K]
    }>): PutClusterCapacityProvidersResponse {
        return this.client.putClusterCapacityProviders(
            this.ops["PutClusterCapacityProviders"].apply(partialParams)
        );
    }

    invokeRegisterTaskDefinition(partialParams: ToOptional<{
      [K in keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest & keyof RegisterTaskDefinitionRequest]: (RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest & RegisterTaskDefinitionRequest)[K]
    }>): RegisterTaskDefinitionResponse {
        return this.client.registerTaskDefinition(
            this.ops["RegisterTaskDefinition"].apply(partialParams)
        );
    }

    invokeRunTask(partialParams: ToOptional<{
      [K in keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest & keyof RunTaskRequest]: (RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest & RunTaskRequest)[K]
    }>): RunTaskResponse {
        return this.client.runTask(
            this.ops["RunTask"].apply(partialParams)
        );
    }

    invokeStartTask(partialParams: ToOptional<{
      [K in keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest & keyof StartTaskRequest]: (StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest & StartTaskRequest)[K]
    }>): StartTaskResponse {
        return this.client.startTask(
            this.ops["StartTask"].apply(partialParams)
        );
    }

    invokeStopTask(partialParams: ToOptional<{
      [K in keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest & keyof StopTaskRequest]: (StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest & StopTaskRequest)[K]
    }>): StopTaskResponse {
        return this.client.stopTask(
            this.ops["StopTask"].apply(partialParams)
        );
    }

    invokeSubmitAttachmentStateChanges(partialParams: ToOptional<{
      [K in keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest & keyof SubmitAttachmentStateChangesRequest]: (SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest & SubmitAttachmentStateChangesRequest)[K]
    }>): SubmitAttachmentStateChangesResponse {
        return this.client.submitAttachmentStateChanges(
            this.ops["SubmitAttachmentStateChanges"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateCapacityProvider(partialParams: ToOptional<{
      [K in keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest & keyof UpdateCapacityProviderRequest]: (UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest & UpdateCapacityProviderRequest)[K]
    }>): UpdateCapacityProviderResponse {
        return this.client.updateCapacityProvider(
            this.ops["UpdateCapacityProvider"].apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest & keyof Omit<UpdateClusterRequest, "cluster"> & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest]: (UpdateClusterRequest & Omit<UpdateClusterRequest, "cluster"> & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest)[K]
    }>): UpdateClusterResponse {
        return this.client.updateCluster(
            this.ops["UpdateCluster"].apply(partialParams)
        );
    }

    invokeUpdateClusterSettings(partialParams: ToOptional<{
      [K in keyof UpdateClusterSettingsRequest & keyof Omit<UpdateClusterSettingsRequest, "cluster"> & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest & keyof UpdateClusterSettingsRequest]: (UpdateClusterSettingsRequest & Omit<UpdateClusterSettingsRequest, "cluster"> & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest & UpdateClusterSettingsRequest)[K]
    }>): UpdateClusterSettingsResponse {
        return this.client.updateClusterSettings(
            this.ops["UpdateClusterSettings"].apply(partialParams)
        );
    }

    invokeUpdateContainerAgent(partialParams: ToOptional<{
      [K in keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest & keyof UpdateContainerAgentRequest]: (UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest & UpdateContainerAgentRequest)[K]
    }>): UpdateContainerAgentResponse {
        return this.client.updateContainerAgent(
            this.ops["UpdateContainerAgent"].apply(partialParams)
        );
    }

    invokeUpdateContainerInstancesState(partialParams: ToOptional<{
      [K in keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof Omit<UpdateContainerInstancesStateRequest, "status"> & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest & keyof UpdateContainerInstancesStateRequest]: (UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & Omit<UpdateContainerInstancesStateRequest, "status"> & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest & UpdateContainerInstancesStateRequest)[K]
    }>): UpdateContainerInstancesStateResponse {
        return this.client.updateContainerInstancesState(
            this.ops["UpdateContainerInstancesState"].apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof Omit<UpdateServiceRequest, "service"> & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest]: (UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest & Omit<UpdateServiceRequest, "service"> & UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest)[K]
    }>): UpdateServiceResponse {
        return this.client.updateService(
            this.ops["UpdateService"].apply(partialParams)
        );
    }

    invokeUpdateServicePrimaryTaskSet(partialParams: ToOptional<{
      [K in keyof UpdateServicePrimaryTaskSetRequest & keyof Omit<UpdateServicePrimaryTaskSetRequest, "cluster"> & keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest & keyof Omit<UpdateServicePrimaryTaskSetRequest, "service"> & keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest & keyof UpdateServicePrimaryTaskSetRequest]: (UpdateServicePrimaryTaskSetRequest & Omit<UpdateServicePrimaryTaskSetRequest, "cluster"> & UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest & Omit<UpdateServicePrimaryTaskSetRequest, "service"> & UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest & UpdateServicePrimaryTaskSetRequest)[K]
    }>): UpdateServicePrimaryTaskSetResponse {
        return this.client.updateServicePrimaryTaskSet(
            this.ops["UpdateServicePrimaryTaskSet"].apply(partialParams)
        );
    }

    invokeUpdateTaskSet(partialParams: ToOptional<{
      [K in keyof UpdateTaskSetRequest & keyof Omit<UpdateTaskSetRequest, "cluster"> & keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest & keyof Omit<UpdateTaskSetRequest, "service"> & keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest & keyof UpdateTaskSetRequest]: (UpdateTaskSetRequest & Omit<UpdateTaskSetRequest, "cluster"> & UpdateTaskSetRequest & UpdateTaskSetRequest & UpdateTaskSetRequest & Omit<UpdateTaskSetRequest, "service"> & UpdateTaskSetRequest & UpdateTaskSetRequest & UpdateTaskSetRequest & UpdateTaskSetRequest & UpdateTaskSetRequest)[K]
    }>): UpdateTaskSetResponse {
        return this.client.updateTaskSet(
            this.ops["UpdateTaskSet"].apply(partialParams)
        );
    }
}