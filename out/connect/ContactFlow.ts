
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateDefaultVocabularyRequest,
    AssociateInstanceStorageConfigRequest,
    AssociateSecurityKeyRequest,
    CreateAgentStatusRequest,
    CreateContactFlowRequest,
    CreateContactFlowModuleRequest,
    CreateHoursOfOperationRequest,
    CreateIntegrationAssociationRequest,
    CreateQueueRequest,
    CreateQuickConnectRequest,
    CreateRoutingProfileRequest,
    CreateSecurityProfileRequest,
    CreateUseCaseRequest,
    CreateUserRequest,
    CreateUserHierarchyGroupRequest,
    CreateVocabularyRequest,
    DeleteContactFlowModuleRequest,
    DeleteVocabularyRequest,
    DescribeAgentStatusRequest,
    DescribeContactRequest,
    DescribeContactFlowRequest,
    DescribeContactFlowModuleRequest,
    DescribeHoursOfOperationRequest,
    DescribeInstanceRequest,
    DescribeInstanceAttributeRequest,
    DescribeInstanceStorageConfigRequest,
    DescribeQueueRequest,
    DescribeQuickConnectRequest,
    DescribeRoutingProfileRequest,
    DescribeSecurityProfileRequest,
    DescribeUserRequest,
    DescribeUserHierarchyGroupRequest,
    DescribeUserHierarchyStructureRequest,
    DescribeVocabularyRequest,
    GetContactAttributesRequest,
    GetCurrentMetricDataRequest,
    GetFederationTokenRequest,
    GetMetricDataRequest,
    ListAgentStatusRequest,
    ListApprovedOriginsRequest,
    ListBotsRequest,
    ListContactFlowModulesRequest,
    ListContactFlowsRequest,
    ListContactReferencesRequest,
    ListDefaultVocabulariesRequest,
    ListHoursOfOperationsRequest,
    ListInstanceAttributesRequest,
    ListInstanceStorageConfigsRequest,
    ListIntegrationAssociationsRequest,
    ListLambdaFunctionsRequest,
    ListLexBotsRequest,
    ListPhoneNumbersRequest,
    ListPromptsRequest,
    ListQueueQuickConnectsRequest,
    ListQueuesRequest,
    ListQuickConnectsRequest,
    ListRoutingProfileQueuesRequest,
    ListRoutingProfilesRequest,
    ListSecurityKeysRequest,
    ListSecurityProfilePermissionsRequest,
    ListSecurityProfilesRequest,
    ListUseCasesRequest,
    ListUserHierarchyGroupsRequest,
    ListUsersRequest,
    ResumeContactRecordingRequest,
    SearchVocabulariesRequest,
    StartChatContactRequest,
    StartContactRecordingRequest,
    StartContactStreamingRequest,
    StartOutboundVoiceContactRequest,
    StartTaskContactRequest,
    StopContactRequest,
    StopContactRecordingRequest,
    StopContactStreamingRequest,
    SuspendContactRecordingRequest,
    UpdateContactRequest,
    UpdateContactAttributesRequest,
    UpdateContactFlowModuleContentRequest,
    UpdateContactFlowModuleMetadataRequest,
    UpdateContactScheduleRequest,
    AssociateDefaultVocabularyResponse,
    AssociateInstanceStorageConfigResponse,
    AssociateSecurityKeyResponse,
    CreateAgentStatusResponse,
    CreateContactFlowResponse,
    CreateContactFlowModuleResponse,
    CreateHoursOfOperationResponse,
    CreateIntegrationAssociationResponse,
    CreateQueueResponse,
    CreateQuickConnectResponse,
    CreateRoutingProfileResponse,
    CreateSecurityProfileResponse,
    CreateUseCaseResponse,
    CreateUserResponse,
    CreateUserHierarchyGroupResponse,
    CreateVocabularyResponse,
    DeleteContactFlowModuleResponse,
    DeleteVocabularyResponse,
    DescribeAgentStatusResponse,
    DescribeContactResponse,
    DescribeContactFlowResponse,
    DescribeContactFlowModuleResponse,
    DescribeHoursOfOperationResponse,
    DescribeInstanceResponse,
    DescribeInstanceAttributeResponse,
    DescribeInstanceStorageConfigResponse,
    DescribeQueueResponse,
    DescribeQuickConnectResponse,
    DescribeRoutingProfileResponse,
    DescribeSecurityProfileResponse,
    DescribeUserResponse,
    DescribeUserHierarchyGroupResponse,
    DescribeUserHierarchyStructureResponse,
    DescribeVocabularyResponse,
    GetContactAttributesResponse,
    GetCurrentMetricDataResponse,
    GetFederationTokenResponse,
    GetMetricDataResponse,
    ListAgentStatusResponse,
    ListApprovedOriginsResponse,
    ListBotsResponse,
    ListContactFlowModulesResponse,
    ListContactFlowsResponse,
    ListContactReferencesResponse,
    ListDefaultVocabulariesResponse,
    ListHoursOfOperationsResponse,
    ListInstanceAttributesResponse,
    ListInstanceStorageConfigsResponse,
    ListIntegrationAssociationsResponse,
    ListLambdaFunctionsResponse,
    ListLexBotsResponse,
    ListPhoneNumbersResponse,
    ListPromptsResponse,
    ListQueueQuickConnectsResponse,
    ListQueuesResponse,
    ListQuickConnectsResponse,
    ListRoutingProfileQueuesResponse,
    ListRoutingProfilesResponse,
    ListSecurityKeysResponse,
    ListSecurityProfilePermissionsResponse,
    ListSecurityProfilesResponse,
    ListUseCasesResponse,
    ListUserHierarchyGroupsResponse,
    ListUsersResponse,
    ResumeContactRecordingResponse,
    SearchVocabulariesResponse,
    StartChatContactResponse,
    StartContactRecordingResponse,
    StartContactStreamingResponse,
    StartOutboundVoiceContactResponse,
    StartTaskContactResponse,
    StopContactResponse,
    StopContactRecordingResponse,
    StopContactStreamingResponse,
    SuspendContactRecordingResponse,
    UpdateContactResponse,
    UpdateContactAttributesResponse,
    UpdateContactFlowModuleContentResponse,
    UpdateContactFlowModuleMetadataResponse,
    UpdateContactScheduleResponse
} from "aws-sdk/clients/connect";
const schema = require("../apis/connect-2017-08-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.connect.ContactFlow {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.connect.ContactFlow>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Connect()
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

    invokeAssociateDefaultVocabulary(partialParams: ToOptional<{
      [K in keyof AssociateDefaultVocabularyRequest & keyof Omit<AssociateDefaultVocabularyRequest, "InstanceId">]: (AssociateDefaultVocabularyRequest)[K]
    }>): Request<AssociateDefaultVocabularyResponse, AWSError> {
        this.boot();
        return this.client.associateDefaultVocabulary(
          this.ops["AssociateDefaultVocabulary"].apply(partialParams)
        );
    }

    invokeAssociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof AssociateInstanceStorageConfigRequest & keyof Omit<AssociateInstanceStorageConfigRequest, "InstanceId">]: (AssociateInstanceStorageConfigRequest)[K]
    }>): Request<AssociateInstanceStorageConfigResponse, AWSError> {
        this.boot();
        return this.client.associateInstanceStorageConfig(
          this.ops["AssociateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeAssociateSecurityKey(partialParams: ToOptional<{
      [K in keyof AssociateSecurityKeyRequest & keyof Omit<AssociateSecurityKeyRequest, "InstanceId">]: (AssociateSecurityKeyRequest)[K]
    }>): Request<AssociateSecurityKeyResponse, AWSError> {
        this.boot();
        return this.client.associateSecurityKey(
          this.ops["AssociateSecurityKey"].apply(partialParams)
        );
    }

    invokeCreateAgentStatus(partialParams: ToOptional<{
      [K in keyof CreateAgentStatusRequest & keyof Omit<CreateAgentStatusRequest, "InstanceId" | "Name">]: (CreateAgentStatusRequest)[K]
    }>): Request<CreateAgentStatusResponse, AWSError> {
        this.boot();
        return this.client.createAgentStatus(
          this.ops["CreateAgentStatus"].apply(partialParams)
        );
    }

    invokeCreateContactFlow(partialParams: ToOptional<{
      [K in keyof CreateContactFlowRequest & keyof Omit<CreateContactFlowRequest, "InstanceId" | "Name" | "Type" | "Content">]: (CreateContactFlowRequest)[K]
    }>): Request<CreateContactFlowResponse, AWSError> {
        this.boot();
        return this.client.createContactFlow(
          this.ops["CreateContactFlow"].apply(partialParams)
        );
    }

    invokeCreateContactFlowModule(partialParams: ToOptional<{
      [K in keyof CreateContactFlowModuleRequest & keyof Omit<CreateContactFlowModuleRequest, "InstanceId" | "Name" | "Content">]: (CreateContactFlowModuleRequest)[K]
    }>): Request<CreateContactFlowModuleResponse, AWSError> {
        this.boot();
        return this.client.createContactFlowModule(
          this.ops["CreateContactFlowModule"].apply(partialParams)
        );
    }

    invokeCreateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof CreateHoursOfOperationRequest & keyof Omit<CreateHoursOfOperationRequest, "InstanceId" | "Name">]: (CreateHoursOfOperationRequest)[K]
    }>): Request<CreateHoursOfOperationResponse, AWSError> {
        this.boot();
        return this.client.createHoursOfOperation(
          this.ops["CreateHoursOfOperation"].apply(partialParams)
        );
    }

    invokeCreateIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof CreateIntegrationAssociationRequest & keyof Omit<CreateIntegrationAssociationRequest, "InstanceId">]: (CreateIntegrationAssociationRequest)[K]
    }>): Request<CreateIntegrationAssociationResponse, AWSError> {
        this.boot();
        return this.client.createIntegrationAssociation(
          this.ops["CreateIntegrationAssociation"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof Omit<CreateQueueRequest, "InstanceId" | "Name">]: (CreateQueueRequest)[K]
    }>): Request<CreateQueueResponse, AWSError> {
        this.boot();
        return this.client.createQueue(
          this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeCreateQuickConnect(partialParams: ToOptional<{
      [K in keyof CreateQuickConnectRequest & keyof Omit<CreateQuickConnectRequest, "InstanceId" | "Name">]: (CreateQuickConnectRequest)[K]
    }>): Request<CreateQuickConnectResponse, AWSError> {
        this.boot();
        return this.client.createQuickConnect(
          this.ops["CreateQuickConnect"].apply(partialParams)
        );
    }

    invokeCreateRoutingProfile(partialParams: ToOptional<{
      [K in keyof CreateRoutingProfileRequest & keyof Omit<CreateRoutingProfileRequest, "InstanceId" | "Name" | "Description">]: (CreateRoutingProfileRequest)[K]
    }>): Request<CreateRoutingProfileResponse, AWSError> {
        this.boot();
        return this.client.createRoutingProfile(
          this.ops["CreateRoutingProfile"].apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest & keyof Omit<CreateSecurityProfileRequest, "InstanceId">]: (CreateSecurityProfileRequest)[K]
    }>): Request<CreateSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.createSecurityProfile(
          this.ops["CreateSecurityProfile"].apply(partialParams)
        );
    }

    invokeCreateUseCase(partialParams: ToOptional<{
      [K in keyof CreateUseCaseRequest & keyof Omit<CreateUseCaseRequest, "InstanceId">]: (CreateUseCaseRequest)[K]
    }>): Request<CreateUseCaseResponse, AWSError> {
        this.boot();
        return this.client.createUseCase(
          this.ops["CreateUseCase"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof Omit<CreateUserRequest, "InstanceId">]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof CreateUserHierarchyGroupRequest & keyof Omit<CreateUserHierarchyGroupRequest, "Name" | "InstanceId">]: (CreateUserHierarchyGroupRequest)[K]
    }>): Request<CreateUserHierarchyGroupResponse, AWSError> {
        this.boot();
        return this.client.createUserHierarchyGroup(
          this.ops["CreateUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeCreateVocabulary(partialParams: ToOptional<{
      [K in keyof CreateVocabularyRequest & keyof Omit<CreateVocabularyRequest, "InstanceId" | "Content">]: (CreateVocabularyRequest)[K]
    }>): Request<CreateVocabularyResponse, AWSError> {
        this.boot();
        return this.client.createVocabulary(
          this.ops["CreateVocabulary"].apply(partialParams)
        );
    }

    invokeDeleteContactFlowModule(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowModuleRequest & keyof Omit<DeleteContactFlowModuleRequest, "InstanceId">]: (DeleteContactFlowModuleRequest)[K]
    }>): Request<DeleteContactFlowModuleResponse, AWSError> {
        this.boot();
        return this.client.deleteContactFlowModule(
          this.ops["DeleteContactFlowModule"].apply(partialParams)
        );
    }

    invokeDeleteVocabulary(partialParams: ToOptional<{
      [K in keyof DeleteVocabularyRequest & keyof Omit<DeleteVocabularyRequest, "InstanceId">]: (DeleteVocabularyRequest)[K]
    }>): Request<DeleteVocabularyResponse, AWSError> {
        this.boot();
        return this.client.deleteVocabulary(
          this.ops["DeleteVocabulary"].apply(partialParams)
        );
    }

    invokeDescribeAgentStatus(partialParams: ToOptional<{
      [K in keyof DescribeAgentStatusRequest & keyof Omit<DescribeAgentStatusRequest, "InstanceId">]: (DescribeAgentStatusRequest)[K]
    }>): Request<DescribeAgentStatusResponse, AWSError> {
        this.boot();
        return this.client.describeAgentStatus(
          this.ops["DescribeAgentStatus"].apply(partialParams)
        );
    }

    invokeDescribeContact(partialParams: ToOptional<{
      [K in keyof DescribeContactRequest & keyof Omit<DescribeContactRequest, "InstanceId">]: (DescribeContactRequest)[K]
    }>): Request<DescribeContactResponse, AWSError> {
        this.boot();
        return this.client.describeContact(
          this.ops["DescribeContact"].apply(partialParams)
        );
    }

    invokeDescribeContactFlow(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowRequest & keyof Omit<DescribeContactFlowRequest, "InstanceId" | "ContactFlowId">]: (DescribeContactFlowRequest)[K]
    }>): Request<DescribeContactFlowResponse, AWSError> {
        this.boot();
        return this.client.describeContactFlow(
          this.ops["DescribeContactFlow"].apply(partialParams)
        );
    }

    invokeDescribeContactFlowModule(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowModuleRequest & keyof Omit<DescribeContactFlowModuleRequest, "InstanceId">]: (DescribeContactFlowModuleRequest)[K]
    }>): Request<DescribeContactFlowModuleResponse, AWSError> {
        this.boot();
        return this.client.describeContactFlowModule(
          this.ops["DescribeContactFlowModule"].apply(partialParams)
        );
    }

    invokeDescribeHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DescribeHoursOfOperationRequest & keyof Omit<DescribeHoursOfOperationRequest, "InstanceId">]: (DescribeHoursOfOperationRequest)[K]
    }>): Request<DescribeHoursOfOperationResponse, AWSError> {
        this.boot();
        return this.client.describeHoursOfOperation(
          this.ops["DescribeHoursOfOperation"].apply(partialParams)
        );
    }

    invokeDescribeInstance(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRequest & keyof Omit<DescribeInstanceRequest, "InstanceId">]: (DescribeInstanceRequest)[K]
    }>): Request<DescribeInstanceResponse, AWSError> {
        this.boot();
        return this.client.describeInstance(
          this.ops["DescribeInstance"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest & keyof Omit<DescribeInstanceAttributeRequest, "InstanceId">]: (DescribeInstanceAttributeRequest)[K]
    }>): Request<DescribeInstanceAttributeResponse, AWSError> {
        this.boot();
        return this.client.describeInstanceAttribute(
          this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DescribeInstanceStorageConfigRequest & keyof Omit<DescribeInstanceStorageConfigRequest, "InstanceId">]: (DescribeInstanceStorageConfigRequest)[K]
    }>): Request<DescribeInstanceStorageConfigResponse, AWSError> {
        this.boot();
        return this.client.describeInstanceStorageConfig(
          this.ops["DescribeInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeDescribeQueue(partialParams: ToOptional<{
      [K in keyof DescribeQueueRequest & keyof Omit<DescribeQueueRequest, "InstanceId">]: (DescribeQueueRequest)[K]
    }>): Request<DescribeQueueResponse, AWSError> {
        this.boot();
        return this.client.describeQueue(
          this.ops["DescribeQueue"].apply(partialParams)
        );
    }

    invokeDescribeQuickConnect(partialParams: ToOptional<{
      [K in keyof DescribeQuickConnectRequest & keyof Omit<DescribeQuickConnectRequest, "InstanceId">]: (DescribeQuickConnectRequest)[K]
    }>): Request<DescribeQuickConnectResponse, AWSError> {
        this.boot();
        return this.client.describeQuickConnect(
          this.ops["DescribeQuickConnect"].apply(partialParams)
        );
    }

    invokeDescribeRoutingProfile(partialParams: ToOptional<{
      [K in keyof DescribeRoutingProfileRequest & keyof Omit<DescribeRoutingProfileRequest, "InstanceId">]: (DescribeRoutingProfileRequest)[K]
    }>): Request<DescribeRoutingProfileResponse, AWSError> {
        this.boot();
        return this.client.describeRoutingProfile(
          this.ops["DescribeRoutingProfile"].apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest & keyof Omit<DescribeSecurityProfileRequest, "InstanceId">]: (DescribeSecurityProfileRequest)[K]
    }>): Request<DescribeSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.describeSecurityProfile(
          this.ops["DescribeSecurityProfile"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof Omit<DescribeUserRequest, "InstanceId">]: (DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyGroupRequest & keyof Omit<DescribeUserHierarchyGroupRequest, "InstanceId">]: (DescribeUserHierarchyGroupRequest)[K]
    }>): Request<DescribeUserHierarchyGroupResponse, AWSError> {
        this.boot();
        return this.client.describeUserHierarchyGroup(
          this.ops["DescribeUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyStructureRequest & keyof Omit<DescribeUserHierarchyStructureRequest, "InstanceId">]: (DescribeUserHierarchyStructureRequest)[K]
    }>): Request<DescribeUserHierarchyStructureResponse, AWSError> {
        this.boot();
        return this.client.describeUserHierarchyStructure(
          this.ops["DescribeUserHierarchyStructure"].apply(partialParams)
        );
    }

    invokeDescribeVocabulary(partialParams: ToOptional<{
      [K in keyof DescribeVocabularyRequest & keyof Omit<DescribeVocabularyRequest, "InstanceId">]: (DescribeVocabularyRequest)[K]
    }>): Request<DescribeVocabularyResponse, AWSError> {
        this.boot();
        return this.client.describeVocabulary(
          this.ops["DescribeVocabulary"].apply(partialParams)
        );
    }

    invokeGetContactAttributes(partialParams: ToOptional<{
      [K in keyof GetContactAttributesRequest & keyof Omit<GetContactAttributesRequest, "InstanceId">]: (GetContactAttributesRequest)[K]
    }>): Request<GetContactAttributesResponse, AWSError> {
        this.boot();
        return this.client.getContactAttributes(
          this.ops["GetContactAttributes"].apply(partialParams)
        );
    }

    invokeGetCurrentMetricData(partialParams: ToOptional<{
      [K in keyof GetCurrentMetricDataRequest & keyof Omit<GetCurrentMetricDataRequest, "InstanceId">]: (GetCurrentMetricDataRequest)[K]
    }>): Request<GetCurrentMetricDataResponse, AWSError> {
        this.boot();
        return this.client.getCurrentMetricData(
          this.ops["GetCurrentMetricData"].apply(partialParams)
        );
    }

    invokeGetFederationToken(partialParams: ToOptional<{
      [K in keyof GetFederationTokenRequest & keyof Omit<GetFederationTokenRequest, "InstanceId">]: (GetFederationTokenRequest)[K]
    }>): Request<GetFederationTokenResponse, AWSError> {
        this.boot();
        return this.client.getFederationToken(
          this.ops["GetFederationToken"].apply(partialParams)
        );
    }

    invokeGetMetricData(partialParams: ToOptional<{
      [K in keyof GetMetricDataRequest & keyof Omit<GetMetricDataRequest, "InstanceId">]: (GetMetricDataRequest)[K]
    }>): Request<GetMetricDataResponse, AWSError> {
        this.boot();
        return this.client.getMetricData(
          this.ops["GetMetricData"].apply(partialParams)
        );
    }

    invokeListAgentStatuses(partialParams: ToOptional<{
      [K in keyof ListAgentStatusRequest & keyof Omit<ListAgentStatusRequest, "InstanceId">]: (ListAgentStatusRequest)[K]
    }>): Request<ListAgentStatusResponse, AWSError> {
        this.boot();
        return this.client.listAgentStatuses(
          this.ops["ListAgentStatuses"].apply(partialParams)
        );
    }

    invokeListApprovedOrigins(partialParams: ToOptional<{
      [K in keyof ListApprovedOriginsRequest & keyof Omit<ListApprovedOriginsRequest, "InstanceId">]: (ListApprovedOriginsRequest)[K]
    }>): Request<ListApprovedOriginsResponse, AWSError> {
        this.boot();
        return this.client.listApprovedOrigins(
          this.ops["ListApprovedOrigins"].apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest & keyof Omit<ListBotsRequest, "InstanceId">]: (ListBotsRequest)[K]
    }>): Request<ListBotsResponse, AWSError> {
        this.boot();
        return this.client.listBots(
          this.ops["ListBots"].apply(partialParams)
        );
    }

    invokeListContactFlowModules(partialParams: ToOptional<{
      [K in keyof ListContactFlowModulesRequest & keyof Omit<ListContactFlowModulesRequest, "InstanceId">]: (ListContactFlowModulesRequest)[K]
    }>): Request<ListContactFlowModulesResponse, AWSError> {
        this.boot();
        return this.client.listContactFlowModules(
          this.ops["ListContactFlowModules"].apply(partialParams)
        );
    }

    invokeListContactFlows(partialParams: ToOptional<{
      [K in keyof ListContactFlowsRequest & keyof Omit<ListContactFlowsRequest, "InstanceId">]: (ListContactFlowsRequest)[K]
    }>): Request<ListContactFlowsResponse, AWSError> {
        this.boot();
        return this.client.listContactFlows(
          this.ops["ListContactFlows"].apply(partialParams)
        );
    }

    invokeListContactReferences(partialParams: ToOptional<{
      [K in keyof ListContactReferencesRequest & keyof Omit<ListContactReferencesRequest, "InstanceId">]: (ListContactReferencesRequest)[K]
    }>): Request<ListContactReferencesResponse, AWSError> {
        this.boot();
        return this.client.listContactReferences(
          this.ops["ListContactReferences"].apply(partialParams)
        );
    }

    invokeListDefaultVocabularies(partialParams: ToOptional<{
      [K in keyof ListDefaultVocabulariesRequest & keyof Omit<ListDefaultVocabulariesRequest, "InstanceId">]: (ListDefaultVocabulariesRequest)[K]
    }>): Request<ListDefaultVocabulariesResponse, AWSError> {
        this.boot();
        return this.client.listDefaultVocabularies(
          this.ops["ListDefaultVocabularies"].apply(partialParams)
        );
    }

    invokeListHoursOfOperations(partialParams: ToOptional<{
      [K in keyof ListHoursOfOperationsRequest & keyof Omit<ListHoursOfOperationsRequest, "InstanceId">]: (ListHoursOfOperationsRequest)[K]
    }>): Request<ListHoursOfOperationsResponse, AWSError> {
        this.boot();
        return this.client.listHoursOfOperations(
          this.ops["ListHoursOfOperations"].apply(partialParams)
        );
    }

    invokeListInstanceAttributes(partialParams: ToOptional<{
      [K in keyof ListInstanceAttributesRequest & keyof Omit<ListInstanceAttributesRequest, "InstanceId">]: (ListInstanceAttributesRequest)[K]
    }>): Request<ListInstanceAttributesResponse, AWSError> {
        this.boot();
        return this.client.listInstanceAttributes(
          this.ops["ListInstanceAttributes"].apply(partialParams)
        );
    }

    invokeListInstanceStorageConfigs(partialParams: ToOptional<{
      [K in keyof ListInstanceStorageConfigsRequest & keyof Omit<ListInstanceStorageConfigsRequest, "InstanceId">]: (ListInstanceStorageConfigsRequest)[K]
    }>): Request<ListInstanceStorageConfigsResponse, AWSError> {
        this.boot();
        return this.client.listInstanceStorageConfigs(
          this.ops["ListInstanceStorageConfigs"].apply(partialParams)
        );
    }

    invokeListIntegrationAssociations(partialParams: ToOptional<{
      [K in keyof ListIntegrationAssociationsRequest & keyof Omit<ListIntegrationAssociationsRequest, "InstanceId">]: (ListIntegrationAssociationsRequest)[K]
    }>): Request<ListIntegrationAssociationsResponse, AWSError> {
        this.boot();
        return this.client.listIntegrationAssociations(
          this.ops["ListIntegrationAssociations"].apply(partialParams)
        );
    }

    invokeListLambdaFunctions(partialParams: ToOptional<{
      [K in keyof ListLambdaFunctionsRequest & keyof Omit<ListLambdaFunctionsRequest, "InstanceId">]: (ListLambdaFunctionsRequest)[K]
    }>): Request<ListLambdaFunctionsResponse, AWSError> {
        this.boot();
        return this.client.listLambdaFunctions(
          this.ops["ListLambdaFunctions"].apply(partialParams)
        );
    }

    invokeListLexBots(partialParams: ToOptional<{
      [K in keyof ListLexBotsRequest & keyof Omit<ListLexBotsRequest, "InstanceId">]: (ListLexBotsRequest)[K]
    }>): Request<ListLexBotsResponse, AWSError> {
        this.boot();
        return this.client.listLexBots(
          this.ops["ListLexBots"].apply(partialParams)
        );
    }

    invokeListPhoneNumbers(partialParams: ToOptional<{
      [K in keyof ListPhoneNumbersRequest & keyof Omit<ListPhoneNumbersRequest, "InstanceId">]: (ListPhoneNumbersRequest)[K]
    }>): Request<ListPhoneNumbersResponse, AWSError> {
        this.boot();
        return this.client.listPhoneNumbers(
          this.ops["ListPhoneNumbers"].apply(partialParams)
        );
    }

    invokeListPrompts(partialParams: ToOptional<{
      [K in keyof ListPromptsRequest & keyof Omit<ListPromptsRequest, "InstanceId">]: (ListPromptsRequest)[K]
    }>): Request<ListPromptsResponse, AWSError> {
        this.boot();
        return this.client.listPrompts(
          this.ops["ListPrompts"].apply(partialParams)
        );
    }

    invokeListQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof ListQueueQuickConnectsRequest & keyof Omit<ListQueueQuickConnectsRequest, "InstanceId">]: (ListQueueQuickConnectsRequest)[K]
    }>): Request<ListQueueQuickConnectsResponse, AWSError> {
        this.boot();
        return this.client.listQueueQuickConnects(
          this.ops["ListQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeListQueues(partialParams: ToOptional<{
      [K in keyof ListQueuesRequest & keyof Omit<ListQueuesRequest, "InstanceId">]: (ListQueuesRequest)[K]
    }>): Request<ListQueuesResponse, AWSError> {
        this.boot();
        return this.client.listQueues(
          this.ops["ListQueues"].apply(partialParams)
        );
    }

    invokeListQuickConnects(partialParams: ToOptional<{
      [K in keyof ListQuickConnectsRequest & keyof Omit<ListQuickConnectsRequest, "InstanceId">]: (ListQuickConnectsRequest)[K]
    }>): Request<ListQuickConnectsResponse, AWSError> {
        this.boot();
        return this.client.listQuickConnects(
          this.ops["ListQuickConnects"].apply(partialParams)
        );
    }

    invokeListRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof ListRoutingProfileQueuesRequest & keyof Omit<ListRoutingProfileQueuesRequest, "InstanceId">]: (ListRoutingProfileQueuesRequest)[K]
    }>): Request<ListRoutingProfileQueuesResponse, AWSError> {
        this.boot();
        return this.client.listRoutingProfileQueues(
          this.ops["ListRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeListRoutingProfiles(partialParams: ToOptional<{
      [K in keyof ListRoutingProfilesRequest & keyof Omit<ListRoutingProfilesRequest, "InstanceId">]: (ListRoutingProfilesRequest)[K]
    }>): Request<ListRoutingProfilesResponse, AWSError> {
        this.boot();
        return this.client.listRoutingProfiles(
          this.ops["ListRoutingProfiles"].apply(partialParams)
        );
    }

    invokeListSecurityKeys(partialParams: ToOptional<{
      [K in keyof ListSecurityKeysRequest & keyof Omit<ListSecurityKeysRequest, "InstanceId">]: (ListSecurityKeysRequest)[K]
    }>): Request<ListSecurityKeysResponse, AWSError> {
        this.boot();
        return this.client.listSecurityKeys(
          this.ops["ListSecurityKeys"].apply(partialParams)
        );
    }

    invokeListSecurityProfilePermissions(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilePermissionsRequest & keyof Omit<ListSecurityProfilePermissionsRequest, "InstanceId">]: (ListSecurityProfilePermissionsRequest)[K]
    }>): Request<ListSecurityProfilePermissionsResponse, AWSError> {
        this.boot();
        return this.client.listSecurityProfilePermissions(
          this.ops["ListSecurityProfilePermissions"].apply(partialParams)
        );
    }

    invokeListSecurityProfiles(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilesRequest & keyof Omit<ListSecurityProfilesRequest, "InstanceId">]: (ListSecurityProfilesRequest)[K]
    }>): Request<ListSecurityProfilesResponse, AWSError> {
        this.boot();
        return this.client.listSecurityProfiles(
          this.ops["ListSecurityProfiles"].apply(partialParams)
        );
    }

    invokeListUseCases(partialParams: ToOptional<{
      [K in keyof ListUseCasesRequest & keyof Omit<ListUseCasesRequest, "InstanceId">]: (ListUseCasesRequest)[K]
    }>): Request<ListUseCasesResponse, AWSError> {
        this.boot();
        return this.client.listUseCases(
          this.ops["ListUseCases"].apply(partialParams)
        );
    }

    invokeListUserHierarchyGroups(partialParams: ToOptional<{
      [K in keyof ListUserHierarchyGroupsRequest & keyof Omit<ListUserHierarchyGroupsRequest, "InstanceId">]: (ListUserHierarchyGroupsRequest)[K]
    }>): Request<ListUserHierarchyGroupsResponse, AWSError> {
        this.boot();
        return this.client.listUserHierarchyGroups(
          this.ops["ListUserHierarchyGroups"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof Omit<ListUsersRequest, "InstanceId">]: (ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeResumeContactRecording(partialParams: ToOptional<{
      [K in keyof ResumeContactRecordingRequest & keyof Omit<ResumeContactRecordingRequest, "InstanceId">]: (ResumeContactRecordingRequest)[K]
    }>): Request<ResumeContactRecordingResponse, AWSError> {
        this.boot();
        return this.client.resumeContactRecording(
          this.ops["ResumeContactRecording"].apply(partialParams)
        );
    }

    invokeSearchVocabularies(partialParams: ToOptional<{
      [K in keyof SearchVocabulariesRequest & keyof Omit<SearchVocabulariesRequest, "InstanceId">]: (SearchVocabulariesRequest)[K]
    }>): Request<SearchVocabulariesResponse, AWSError> {
        this.boot();
        return this.client.searchVocabularies(
          this.ops["SearchVocabularies"].apply(partialParams)
        );
    }

    invokeStartChatContact(partialParams: ToOptional<{
      [K in keyof StartChatContactRequest & keyof Omit<StartChatContactRequest, "InstanceId" | "ContactFlowId">]: (StartChatContactRequest)[K]
    }>): Request<StartChatContactResponse, AWSError> {
        this.boot();
        return this.client.startChatContact(
          this.ops["StartChatContact"].apply(partialParams)
        );
    }

    invokeStartContactRecording(partialParams: ToOptional<{
      [K in keyof StartContactRecordingRequest & keyof Omit<StartContactRecordingRequest, "InstanceId">]: (StartContactRecordingRequest)[K]
    }>): Request<StartContactRecordingResponse, AWSError> {
        this.boot();
        return this.client.startContactRecording(
          this.ops["StartContactRecording"].apply(partialParams)
        );
    }

    invokeStartContactStreaming(partialParams: ToOptional<{
      [K in keyof StartContactStreamingRequest & keyof Omit<StartContactStreamingRequest, "InstanceId">]: (StartContactStreamingRequest)[K]
    }>): Request<StartContactStreamingResponse, AWSError> {
        this.boot();
        return this.client.startContactStreaming(
          this.ops["StartContactStreaming"].apply(partialParams)
        );
    }

    invokeStartOutboundVoiceContact(partialParams: ToOptional<{
      [K in keyof StartOutboundVoiceContactRequest & keyof Omit<StartOutboundVoiceContactRequest, "ContactFlowId" | "InstanceId">]: (StartOutboundVoiceContactRequest)[K]
    }>): Request<StartOutboundVoiceContactResponse, AWSError> {
        this.boot();
        return this.client.startOutboundVoiceContact(
          this.ops["StartOutboundVoiceContact"].apply(partialParams)
        );
    }

    invokeStartTaskContact(partialParams: ToOptional<{
      [K in keyof StartTaskContactRequest & keyof Omit<StartTaskContactRequest, "InstanceId" | "ContactFlowId" | "Name">]: (StartTaskContactRequest)[K]
    }>): Request<StartTaskContactResponse, AWSError> {
        this.boot();
        return this.client.startTaskContact(
          this.ops["StartTaskContact"].apply(partialParams)
        );
    }

    invokeStopContact(partialParams: ToOptional<{
      [K in keyof StopContactRequest & keyof Omit<StopContactRequest, "InstanceId">]: (StopContactRequest)[K]
    }>): Request<StopContactResponse, AWSError> {
        this.boot();
        return this.client.stopContact(
          this.ops["StopContact"].apply(partialParams)
        );
    }

    invokeStopContactRecording(partialParams: ToOptional<{
      [K in keyof StopContactRecordingRequest & keyof Omit<StopContactRecordingRequest, "InstanceId">]: (StopContactRecordingRequest)[K]
    }>): Request<StopContactRecordingResponse, AWSError> {
        this.boot();
        return this.client.stopContactRecording(
          this.ops["StopContactRecording"].apply(partialParams)
        );
    }

    invokeStopContactStreaming(partialParams: ToOptional<{
      [K in keyof StopContactStreamingRequest & keyof Omit<StopContactStreamingRequest, "InstanceId">]: (StopContactStreamingRequest)[K]
    }>): Request<StopContactStreamingResponse, AWSError> {
        this.boot();
        return this.client.stopContactStreaming(
          this.ops["StopContactStreaming"].apply(partialParams)
        );
    }

    invokeSuspendContactRecording(partialParams: ToOptional<{
      [K in keyof SuspendContactRecordingRequest & keyof Omit<SuspendContactRecordingRequest, "InstanceId">]: (SuspendContactRecordingRequest)[K]
    }>): Request<SuspendContactRecordingResponse, AWSError> {
        this.boot();
        return this.client.suspendContactRecording(
          this.ops["SuspendContactRecording"].apply(partialParams)
        );
    }

    invokeUpdateContact(partialParams: ToOptional<{
      [K in keyof UpdateContactRequest & keyof Omit<UpdateContactRequest, "InstanceId">]: (UpdateContactRequest)[K]
    }>): Request<UpdateContactResponse, AWSError> {
        this.boot();
        return this.client.updateContact(
          this.ops["UpdateContact"].apply(partialParams)
        );
    }

    invokeUpdateContactAttributes(partialParams: ToOptional<{
      [K in keyof UpdateContactAttributesRequest & keyof Omit<UpdateContactAttributesRequest, "InstanceId">]: (UpdateContactAttributesRequest)[K]
    }>): Request<UpdateContactAttributesResponse, AWSError> {
        this.boot();
        return this.client.updateContactAttributes(
          this.ops["UpdateContactAttributes"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleContent(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowModuleContentRequest & keyof Omit<UpdateContactFlowModuleContentRequest, "InstanceId" | "Content">]: (UpdateContactFlowModuleContentRequest)[K]
    }>): Request<UpdateContactFlowModuleContentResponse, AWSError> {
        this.boot();
        return this.client.updateContactFlowModuleContent(
          this.ops["UpdateContactFlowModuleContent"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleMetadata(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowModuleMetadataRequest & keyof Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId">]: (UpdateContactFlowModuleMetadataRequest)[K]
    }>): Request<UpdateContactFlowModuleMetadataResponse, AWSError> {
        this.boot();
        return this.client.updateContactFlowModuleMetadata(
          this.ops["UpdateContactFlowModuleMetadata"].apply(partialParams)
        );
    }

    invokeUpdateContactSchedule(partialParams: ToOptional<{
      [K in keyof UpdateContactScheduleRequest & keyof Omit<UpdateContactScheduleRequest, "InstanceId">]: (UpdateContactScheduleRequest)[K]
    }>): Request<UpdateContactScheduleResponse, AWSError> {
        this.boot();
        return this.client.updateContactSchedule(
          this.ops["UpdateContactSchedule"].apply(partialParams)
        );
    }
}