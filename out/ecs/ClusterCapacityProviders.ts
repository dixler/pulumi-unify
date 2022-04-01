
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCapacityProviderRequest,
    CreateClusterRequest,
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
    DescribeCapacityProvidersRequest,
    DescribeClustersRequest,
    DescribeContainerInstancesRequest,
    DescribeServicesRequest,
    DescribeTaskDefinitionRequest,
    DescribeTaskSetsRequest,
    DescribeTasksRequest,
    DiscoverPollEndpointRequest,
    ExecuteCommandRequest,
    ListAccountSettingsRequest,
    ListAttributesRequest,
    ListClustersRequest,
    ListContainerInstancesRequest,
    ListServicesRequest,
    ListTagsForResourceRequest,
    ListTaskDefinitionFamiliesRequest,
    ListTaskDefinitionsRequest,
    ListTasksRequest,
    PutAccountSettingRequest,
    PutAccountSettingDefaultRequest,
    PutAttributesRequest,
    PutClusterCapacityProvidersRequest,
    RegisterContainerInstanceRequest,
    RegisterTaskDefinitionRequest,
    RunTaskRequest,
    StartTaskRequest,
    StopTaskRequest,
    SubmitAttachmentStateChangesRequest,
    SubmitContainerStateChangeRequest,
    SubmitTaskStateChangeRequest,
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
    CreateClusterResponse,
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
    DescribeCapacityProvidersResponse,
    DescribeClustersResponse,
    DescribeContainerInstancesResponse,
    DescribeServicesResponse,
    DescribeTaskDefinitionResponse,
    DescribeTaskSetsResponse,
    DescribeTasksResponse,
    DiscoverPollEndpointResponse,
    ExecuteCommandResponse,
    ListAccountSettingsResponse,
    ListAttributesResponse,
    ListClustersResponse,
    ListContainerInstancesResponse,
    ListServicesResponse,
    ListTagsForResourceResponse,
    ListTaskDefinitionFamiliesResponse,
    ListTaskDefinitionsResponse,
    ListTasksResponse,
    PutAccountSettingResponse,
    PutAccountSettingDefaultResponse,
    PutAttributesResponse,
    PutClusterCapacityProvidersResponse,
    RegisterContainerInstanceResponse,
    RegisterTaskDefinitionResponse,
    RunTaskResponse,
    StartTaskResponse,
    StopTaskResponse,
    SubmitAttachmentStateChangesResponse,
    SubmitContainerStateChangeResponse,
    SubmitTaskStateChangeResponse,
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

export default class extends aws.ecs.ClusterCapacityProviders {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ecs.ClusterCapacityProviders>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ECS()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeCreateCapacityProvider(partialParams: ToOptional<{
      [K in keyof CreateCapacityProviderRequest]: (CreateCapacityProviderRequest)[K]
    }>): Request<CreateCapacityProviderResponse, AWSError> {
        this.boot();
        return this.client.createCapacityProvider(
          this.ops["CreateCapacityProvider"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest]: (CreateClusterRequest)[K]
    }>): Request<CreateClusterResponse, AWSError> {
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest]: (CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].apply(partialParams)
        );
    }

    invokeCreateTaskSet(partialParams: ToOptional<{
      [K in keyof CreateTaskSetRequest]: (CreateTaskSetRequest)[K]
    }>): Request<CreateTaskSetResponse, AWSError> {
        this.boot();
        return this.client.createTaskSet(
          this.ops["CreateTaskSet"].apply(partialParams)
        );
    }

    invokeDeleteAccountSetting(partialParams: ToOptional<{
      [K in keyof DeleteAccountSettingRequest]: (DeleteAccountSettingRequest)[K]
    }>): Request<DeleteAccountSettingResponse, AWSError> {
        this.boot();
        return this.client.deleteAccountSetting(
          this.ops["DeleteAccountSetting"].apply(partialParams)
        );
    }

    invokeDeleteAttributes(partialParams: ToOptional<{
      [K in keyof DeleteAttributesRequest]: (DeleteAttributesRequest)[K]
    }>): Request<DeleteAttributesResponse, AWSError> {
        this.boot();
        return this.client.deleteAttributes(
          this.ops["DeleteAttributes"].apply(partialParams)
        );
    }

    invokeDeleteCapacityProvider(partialParams: ToOptional<{
      [K in keyof DeleteCapacityProviderRequest]: (DeleteCapacityProviderRequest)[K]
    }>): Request<DeleteCapacityProviderResponse, AWSError> {
        this.boot();
        return this.client.deleteCapacityProvider(
          this.ops["DeleteCapacityProvider"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest]: (DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest]: (DeleteServiceRequest)[K]
    }>): Request<DeleteServiceResponse, AWSError> {
        this.boot();
        return this.client.deleteService(
          this.ops["DeleteService"].apply(partialParams)
        );
    }

    invokeDeleteTaskSet(partialParams: ToOptional<{
      [K in keyof DeleteTaskSetRequest]: (DeleteTaskSetRequest)[K]
    }>): Request<DeleteTaskSetResponse, AWSError> {
        this.boot();
        return this.client.deleteTaskSet(
          this.ops["DeleteTaskSet"].apply(partialParams)
        );
    }

    invokeDeregisterContainerInstance(partialParams: ToOptional<{
      [K in keyof DeregisterContainerInstanceRequest]: (DeregisterContainerInstanceRequest)[K]
    }>): Request<DeregisterContainerInstanceResponse, AWSError> {
        this.boot();
        return this.client.deregisterContainerInstance(
          this.ops["DeregisterContainerInstance"].apply(partialParams)
        );
    }

    invokeDeregisterTaskDefinition(partialParams: ToOptional<{
      [K in keyof DeregisterTaskDefinitionRequest]: (DeregisterTaskDefinitionRequest)[K]
    }>): Request<DeregisterTaskDefinitionResponse, AWSError> {
        this.boot();
        return this.client.deregisterTaskDefinition(
          this.ops["DeregisterTaskDefinition"].apply(partialParams)
        );
    }

    invokeDescribeCapacityProviders(partialParams: ToOptional<{
      [K in keyof DescribeCapacityProvidersRequest]: (DescribeCapacityProvidersRequest)[K]
    }>): Request<DescribeCapacityProvidersResponse, AWSError> {
        this.boot();
        return this.client.describeCapacityProviders(
          this.ops["DescribeCapacityProviders"].apply(partialParams)
        );
    }

    invokeDescribeClusters(partialParams: ToOptional<{
      [K in keyof DescribeClustersRequest]: (DescribeClustersRequest)[K]
    }>): Request<DescribeClustersResponse, AWSError> {
        this.boot();
        return this.client.describeClusters(
          this.ops["DescribeClusters"].apply(partialParams)
        );
    }

    invokeDescribeContainerInstances(partialParams: ToOptional<{
      [K in keyof DescribeContainerInstancesRequest]: (DescribeContainerInstancesRequest)[K]
    }>): Request<DescribeContainerInstancesResponse, AWSError> {
        this.boot();
        return this.client.describeContainerInstances(
          this.ops["DescribeContainerInstances"].apply(partialParams)
        );
    }

    invokeDescribeServices(partialParams: ToOptional<{
      [K in keyof DescribeServicesRequest]: (DescribeServicesRequest)[K]
    }>): Request<DescribeServicesResponse, AWSError> {
        this.boot();
        return this.client.describeServices(
          this.ops["DescribeServices"].apply(partialParams)
        );
    }

    invokeDescribeTaskDefinition(partialParams: ToOptional<{
      [K in keyof DescribeTaskDefinitionRequest]: (DescribeTaskDefinitionRequest)[K]
    }>): Request<DescribeTaskDefinitionResponse, AWSError> {
        this.boot();
        return this.client.describeTaskDefinition(
          this.ops["DescribeTaskDefinition"].apply(partialParams)
        );
    }

    invokeDescribeTaskSets(partialParams: ToOptional<{
      [K in keyof DescribeTaskSetsRequest]: (DescribeTaskSetsRequest)[K]
    }>): Request<DescribeTaskSetsResponse, AWSError> {
        this.boot();
        return this.client.describeTaskSets(
          this.ops["DescribeTaskSets"].apply(partialParams)
        );
    }

    invokeDescribeTasks(partialParams: ToOptional<{
      [K in keyof DescribeTasksRequest]: (DescribeTasksRequest)[K]
    }>): Request<DescribeTasksResponse, AWSError> {
        this.boot();
        return this.client.describeTasks(
          this.ops["DescribeTasks"].apply(partialParams)
        );
    }

    invokeDiscoverPollEndpoint(partialParams: ToOptional<{
      [K in keyof DiscoverPollEndpointRequest]: (DiscoverPollEndpointRequest)[K]
    }>): Request<DiscoverPollEndpointResponse, AWSError> {
        this.boot();
        return this.client.discoverPollEndpoint(
          this.ops["DiscoverPollEndpoint"].apply(partialParams)
        );
    }

    invokeExecuteCommand(partialParams: ToOptional<{
      [K in keyof ExecuteCommandRequest]: (ExecuteCommandRequest)[K]
    }>): Request<ExecuteCommandResponse, AWSError> {
        this.boot();
        return this.client.executeCommand(
          this.ops["ExecuteCommand"].apply(partialParams)
        );
    }

    invokeListAccountSettings(partialParams: ToOptional<{
      [K in keyof ListAccountSettingsRequest]: (ListAccountSettingsRequest)[K]
    }>): Request<ListAccountSettingsResponse, AWSError> {
        this.boot();
        return this.client.listAccountSettings(
          this.ops["ListAccountSettings"].apply(partialParams)
        );
    }

    invokeListAttributes(partialParams: ToOptional<{
      [K in keyof ListAttributesRequest]: (ListAttributesRequest)[K]
    }>): Request<ListAttributesResponse, AWSError> {
        this.boot();
        return this.client.listAttributes(
          this.ops["ListAttributes"].apply(partialParams)
        );
    }

    invokeListClusters(partialParams: ToOptional<{
      [K in keyof ListClustersRequest]: (ListClustersRequest)[K]
    }>): Request<ListClustersResponse, AWSError> {
        this.boot();
        return this.client.listClusters(
          this.ops["ListClusters"].apply(partialParams)
        );
    }

    invokeListContainerInstances(partialParams: ToOptional<{
      [K in keyof ListContainerInstancesRequest]: (ListContainerInstancesRequest)[K]
    }>): Request<ListContainerInstancesResponse, AWSError> {
        this.boot();
        return this.client.listContainerInstances(
          this.ops["ListContainerInstances"].apply(partialParams)
        );
    }

    invokeListServices(partialParams: ToOptional<{
      [K in keyof ListServicesRequest]: (ListServicesRequest)[K]
    }>): Request<ListServicesResponse, AWSError> {
        this.boot();
        return this.client.listServices(
          this.ops["ListServices"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTaskDefinitionFamilies(partialParams: ToOptional<{
      [K in keyof ListTaskDefinitionFamiliesRequest]: (ListTaskDefinitionFamiliesRequest)[K]
    }>): Request<ListTaskDefinitionFamiliesResponse, AWSError> {
        this.boot();
        return this.client.listTaskDefinitionFamilies(
          this.ops["ListTaskDefinitionFamilies"].apply(partialParams)
        );
    }

    invokeListTaskDefinitions(partialParams: ToOptional<{
      [K in keyof ListTaskDefinitionsRequest]: (ListTaskDefinitionsRequest)[K]
    }>): Request<ListTaskDefinitionsResponse, AWSError> {
        this.boot();
        return this.client.listTaskDefinitions(
          this.ops["ListTaskDefinitions"].apply(partialParams)
        );
    }

    invokeListTasks(partialParams: ToOptional<{
      [K in keyof ListTasksRequest]: (ListTasksRequest)[K]
    }>): Request<ListTasksResponse, AWSError> {
        this.boot();
        return this.client.listTasks(
          this.ops["ListTasks"].apply(partialParams)
        );
    }

    invokePutAccountSetting(partialParams: ToOptional<{
      [K in keyof PutAccountSettingRequest]: (PutAccountSettingRequest)[K]
    }>): Request<PutAccountSettingResponse, AWSError> {
        this.boot();
        return this.client.putAccountSetting(
          this.ops["PutAccountSetting"].apply(partialParams)
        );
    }

    invokePutAccountSettingDefault(partialParams: ToOptional<{
      [K in keyof PutAccountSettingDefaultRequest]: (PutAccountSettingDefaultRequest)[K]
    }>): Request<PutAccountSettingDefaultResponse, AWSError> {
        this.boot();
        return this.client.putAccountSettingDefault(
          this.ops["PutAccountSettingDefault"].apply(partialParams)
        );
    }

    invokePutAttributes(partialParams: ToOptional<{
      [K in keyof PutAttributesRequest]: (PutAttributesRequest)[K]
    }>): Request<PutAttributesResponse, AWSError> {
        this.boot();
        return this.client.putAttributes(
          this.ops["PutAttributes"].apply(partialParams)
        );
    }

    invokePutClusterCapacityProviders(partialParams: ToOptional<{
      [K in keyof PutClusterCapacityProvidersRequest]: (PutClusterCapacityProvidersRequest)[K]
    }>): Request<PutClusterCapacityProvidersResponse, AWSError> {
        this.boot();
        return this.client.putClusterCapacityProviders(
          this.ops["PutClusterCapacityProviders"].apply(partialParams)
        );
    }

    invokeRegisterContainerInstance(partialParams: ToOptional<{
      [K in keyof RegisterContainerInstanceRequest]: (RegisterContainerInstanceRequest)[K]
    }>): Request<RegisterContainerInstanceResponse, AWSError> {
        this.boot();
        return this.client.registerContainerInstance(
          this.ops["RegisterContainerInstance"].apply(partialParams)
        );
    }

    invokeRegisterTaskDefinition(partialParams: ToOptional<{
      [K in keyof RegisterTaskDefinitionRequest]: (RegisterTaskDefinitionRequest)[K]
    }>): Request<RegisterTaskDefinitionResponse, AWSError> {
        this.boot();
        return this.client.registerTaskDefinition(
          this.ops["RegisterTaskDefinition"].apply(partialParams)
        );
    }

    invokeRunTask(partialParams: ToOptional<{
      [K in keyof RunTaskRequest]: (RunTaskRequest)[K]
    }>): Request<RunTaskResponse, AWSError> {
        this.boot();
        return this.client.runTask(
          this.ops["RunTask"].apply(partialParams)
        );
    }

    invokeStartTask(partialParams: ToOptional<{
      [K in keyof StartTaskRequest]: (StartTaskRequest)[K]
    }>): Request<StartTaskResponse, AWSError> {
        this.boot();
        return this.client.startTask(
          this.ops["StartTask"].apply(partialParams)
        );
    }

    invokeStopTask(partialParams: ToOptional<{
      [K in keyof StopTaskRequest]: (StopTaskRequest)[K]
    }>): Request<StopTaskResponse, AWSError> {
        this.boot();
        return this.client.stopTask(
          this.ops["StopTask"].apply(partialParams)
        );
    }

    invokeSubmitAttachmentStateChanges(partialParams: ToOptional<{
      [K in keyof SubmitAttachmentStateChangesRequest]: (SubmitAttachmentStateChangesRequest)[K]
    }>): Request<SubmitAttachmentStateChangesResponse, AWSError> {
        this.boot();
        return this.client.submitAttachmentStateChanges(
          this.ops["SubmitAttachmentStateChanges"].apply(partialParams)
        );
    }

    invokeSubmitContainerStateChange(partialParams: ToOptional<{
      [K in keyof SubmitContainerStateChangeRequest]: (SubmitContainerStateChangeRequest)[K]
    }>): Request<SubmitContainerStateChangeResponse, AWSError> {
        this.boot();
        return this.client.submitContainerStateChange(
          this.ops["SubmitContainerStateChange"].apply(partialParams)
        );
    }

    invokeSubmitTaskStateChange(partialParams: ToOptional<{
      [K in keyof SubmitTaskStateChangeRequest]: (SubmitTaskStateChangeRequest)[K]
    }>): Request<SubmitTaskStateChangeResponse, AWSError> {
        this.boot();
        return this.client.submitTaskStateChange(
          this.ops["SubmitTaskStateChange"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateCapacityProvider(partialParams: ToOptional<{
      [K in keyof UpdateCapacityProviderRequest]: (UpdateCapacityProviderRequest)[K]
    }>): Request<UpdateCapacityProviderResponse, AWSError> {
        this.boot();
        return this.client.updateCapacityProvider(
          this.ops["UpdateCapacityProvider"].apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest]: (UpdateClusterRequest)[K]
    }>): Request<UpdateClusterResponse, AWSError> {
        this.boot();
        return this.client.updateCluster(
          this.ops["UpdateCluster"].apply(partialParams)
        );
    }

    invokeUpdateClusterSettings(partialParams: ToOptional<{
      [K in keyof UpdateClusterSettingsRequest]: (UpdateClusterSettingsRequest)[K]
    }>): Request<UpdateClusterSettingsResponse, AWSError> {
        this.boot();
        return this.client.updateClusterSettings(
          this.ops["UpdateClusterSettings"].apply(partialParams)
        );
    }

    invokeUpdateContainerAgent(partialParams: ToOptional<{
      [K in keyof UpdateContainerAgentRequest]: (UpdateContainerAgentRequest)[K]
    }>): Request<UpdateContainerAgentResponse, AWSError> {
        this.boot();
        return this.client.updateContainerAgent(
          this.ops["UpdateContainerAgent"].apply(partialParams)
        );
    }

    invokeUpdateContainerInstancesState(partialParams: ToOptional<{
      [K in keyof UpdateContainerInstancesStateRequest]: (UpdateContainerInstancesStateRequest)[K]
    }>): Request<UpdateContainerInstancesStateResponse, AWSError> {
        this.boot();
        return this.client.updateContainerInstancesState(
          this.ops["UpdateContainerInstancesState"].apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest]: (UpdateServiceRequest)[K]
    }>): Request<UpdateServiceResponse, AWSError> {
        this.boot();
        return this.client.updateService(
          this.ops["UpdateService"].apply(partialParams)
        );
    }

    invokeUpdateServicePrimaryTaskSet(partialParams: ToOptional<{
      [K in keyof UpdateServicePrimaryTaskSetRequest]: (UpdateServicePrimaryTaskSetRequest)[K]
    }>): Request<UpdateServicePrimaryTaskSetResponse, AWSError> {
        this.boot();
        return this.client.updateServicePrimaryTaskSet(
          this.ops["UpdateServicePrimaryTaskSet"].apply(partialParams)
        );
    }

    invokeUpdateTaskSet(partialParams: ToOptional<{
      [K in keyof UpdateTaskSetRequest]: (UpdateTaskSetRequest)[K]
    }>): Request<UpdateTaskSetResponse, AWSError> {
        this.boot();
        return this.client.updateTaskSet(
          this.ops["UpdateTaskSet"].apply(partialParams)
        );
    }
}