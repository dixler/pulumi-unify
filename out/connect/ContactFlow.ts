
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssociateApprovedOriginRequest,
    AssociateBotRequest,
    AssociateDefaultVocabularyRequest,
    AssociateInstanceStorageConfigRequest,
    AssociateLambdaFunctionRequest,
    AssociateLexBotRequest,
    AssociateQueueQuickConnectsRequest,
    AssociateRoutingProfileQueuesRequest,
    AssociateSecurityKeyRequest,
    CreateAgentStatusRequest,
    CreateContactFlowRequest,
    CreateContactFlowModuleRequest,
    CreateHoursOfOperationRequest,
    CreateInstanceRequest,
    CreateIntegrationAssociationRequest,
    CreateQueueRequest,
    CreateQuickConnectRequest,
    CreateRoutingProfileRequest,
    CreateSecurityProfileRequest,
    CreateUseCaseRequest,
    CreateUserRequest,
    CreateUserHierarchyGroupRequest,
    CreateVocabularyRequest,
    DeleteContactFlowRequest,
    DeleteContactFlowModuleRequest,
    DeleteHoursOfOperationRequest,
    DeleteInstanceRequest,
    DeleteIntegrationAssociationRequest,
    DeleteQuickConnectRequest,
    DeleteSecurityProfileRequest,
    DeleteUseCaseRequest,
    DeleteUserRequest,
    DeleteUserHierarchyGroupRequest,
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
    DisassociateApprovedOriginRequest,
    DisassociateBotRequest,
    DisassociateInstanceStorageConfigRequest,
    DisassociateLambdaFunctionRequest,
    DisassociateLexBotRequest,
    DisassociateQueueQuickConnectsRequest,
    DisassociateRoutingProfileQueuesRequest,
    DisassociateSecurityKeyRequest,
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
    ListTagsForResourceRequest,
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
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAgentStatusRequest,
    UpdateContactRequest,
    UpdateContactAttributesRequest,
    UpdateContactFlowContentRequest,
    UpdateContactFlowMetadataRequest,
    UpdateContactFlowModuleContentRequest,
    UpdateContactFlowModuleMetadataRequest,
    UpdateContactFlowNameRequest,
    UpdateContactScheduleRequest,
    UpdateHoursOfOperationRequest,
    UpdateInstanceAttributeRequest,
    UpdateInstanceStorageConfigRequest,
    UpdateQueueHoursOfOperationRequest,
    UpdateQueueMaxContactsRequest,
    UpdateQueueNameRequest,
    UpdateQueueOutboundCallerConfigRequest,
    UpdateQueueStatusRequest,
    UpdateQuickConnectConfigRequest,
    UpdateQuickConnectNameRequest,
    UpdateRoutingProfileConcurrencyRequest,
    UpdateRoutingProfileDefaultOutboundQueueRequest,
    UpdateRoutingProfileNameRequest,
    UpdateRoutingProfileQueuesRequest,
    UpdateSecurityProfileRequest,
    UpdateUserHierarchyRequest,
    UpdateUserHierarchyGroupNameRequest,
    UpdateUserHierarchyStructureRequest,
    UpdateUserIdentityInfoRequest,
    UpdateUserPhoneConfigRequest,
    UpdateUserRoutingProfileRequest,
    UpdateUserSecurityProfilesRequest,
    AssociateDefaultVocabularyResponse,
    AssociateInstanceStorageConfigResponse,
    AssociateSecurityKeyResponse,
    CreateAgentStatusResponse,
    CreateContactFlowResponse,
    CreateContactFlowModuleResponse,
    CreateHoursOfOperationResponse,
    CreateInstanceResponse,
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
    ListTagsForResourceResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.connect.ContactFlow {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.connect.ContactFlow>) {
        super(...args)
        this.client = new awssdk.Connect()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/connect-2017-08-08.normal.json"), this.client)
    }

    invokeAssociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest]: (AssociateApprovedOriginRequest & AssociateApprovedOriginRequest & AssociateApprovedOriginRequest & AssociateApprovedOriginRequest & AssociateApprovedOriginRequest & AssociateApprovedOriginRequest & AssociateApprovedOriginRequest & AssociateApprovedOriginRequest & AssociateApprovedOriginRequest)[K]
    }>): void {
        return this.client.associateApprovedOrigin(
            this.ops["AssociateApprovedOrigin"].apply(partialParams)
        );
    }

    invokeAssociateBot(partialParams: ToOptional<{
      [K in keyof AssociateBotRequest & keyof AssociateBotRequest & keyof AssociateBotRequest & keyof AssociateBotRequest & keyof AssociateBotRequest & keyof AssociateBotRequest & keyof AssociateBotRequest & keyof AssociateBotRequest & keyof AssociateBotRequest]: (AssociateBotRequest & AssociateBotRequest & AssociateBotRequest & AssociateBotRequest & AssociateBotRequest & AssociateBotRequest & AssociateBotRequest & AssociateBotRequest & AssociateBotRequest)[K]
    }>): void {
        return this.client.associateBot(
            this.ops["AssociateBot"].apply(partialParams)
        );
    }

    invokeAssociateDefaultVocabulary(partialParams: ToOptional<{
      [K in keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest]: (AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest)[K]
    }>): AssociateDefaultVocabularyResponse {
        return this.client.associateDefaultVocabulary(
            this.ops["AssociateDefaultVocabulary"].apply(partialParams)
        );
    }

    invokeAssociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest]: (AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest)[K]
    }>): AssociateInstanceStorageConfigResponse {
        return this.client.associateInstanceStorageConfig(
            this.ops["AssociateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeAssociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest]: (AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest)[K]
    }>): void {
        return this.client.associateLambdaFunction(
            this.ops["AssociateLambdaFunction"].apply(partialParams)
        );
    }

    invokeAssociateLexBot(partialParams: ToOptional<{
      [K in keyof AssociateLexBotRequest & keyof AssociateLexBotRequest & keyof AssociateLexBotRequest & keyof AssociateLexBotRequest & keyof AssociateLexBotRequest & keyof AssociateLexBotRequest & keyof AssociateLexBotRequest & keyof AssociateLexBotRequest & keyof AssociateLexBotRequest]: (AssociateLexBotRequest & AssociateLexBotRequest & AssociateLexBotRequest & AssociateLexBotRequest & AssociateLexBotRequest & AssociateLexBotRequest & AssociateLexBotRequest & AssociateLexBotRequest & AssociateLexBotRequest)[K]
    }>): void {
        return this.client.associateLexBot(
            this.ops["AssociateLexBot"].apply(partialParams)
        );
    }

    invokeAssociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest]: (AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest)[K]
    }>): void {
        return this.client.associateQueueQuickConnects(
            this.ops["AssociateQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeAssociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest]: (AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest)[K]
    }>): void {
        return this.client.associateRoutingProfileQueues(
            this.ops["AssociateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeAssociateSecurityKey(partialParams: ToOptional<{
      [K in keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest]: (AssociateSecurityKeyRequest & AssociateSecurityKeyRequest & AssociateSecurityKeyRequest & AssociateSecurityKeyRequest & AssociateSecurityKeyRequest & AssociateSecurityKeyRequest & AssociateSecurityKeyRequest & AssociateSecurityKeyRequest & AssociateSecurityKeyRequest)[K]
    }>): AssociateSecurityKeyResponse {
        return this.client.associateSecurityKey(
            this.ops["AssociateSecurityKey"].apply(partialParams)
        );
    }

    invokeCreateAgentStatus(partialParams: ToOptional<{
      [K in keyof CreateAgentStatusRequest & keyof CreateAgentStatusRequest & keyof CreateAgentStatusRequest & keyof CreateAgentStatusRequest & keyof CreateAgentStatusRequest & keyof CreateAgentStatusRequest & keyof CreateAgentStatusRequest & keyof Omit<CreateAgentStatusRequest, "Name"> & keyof CreateAgentStatusRequest]: (CreateAgentStatusRequest & CreateAgentStatusRequest & CreateAgentStatusRequest & CreateAgentStatusRequest & CreateAgentStatusRequest & CreateAgentStatusRequest & CreateAgentStatusRequest & Omit<CreateAgentStatusRequest, "Name"> & CreateAgentStatusRequest)[K]
    }>): CreateAgentStatusResponse {
        return this.client.createAgentStatus(
            this.ops["CreateAgentStatus"].apply(partialParams)
        );
    }

    invokeCreateContactFlow(partialParams: ToOptional<{
      [K in keyof CreateContactFlowRequest & keyof CreateContactFlowRequest & keyof Omit<CreateContactFlowRequest, "Content"> & keyof CreateContactFlowRequest & keyof CreateContactFlowRequest & keyof CreateContactFlowRequest & keyof CreateContactFlowRequest & keyof Omit<CreateContactFlowRequest, "Name"> & keyof Omit<CreateContactFlowRequest, "Type">]: (CreateContactFlowRequest & CreateContactFlowRequest & Omit<CreateContactFlowRequest, "Content"> & CreateContactFlowRequest & CreateContactFlowRequest & CreateContactFlowRequest & CreateContactFlowRequest & Omit<CreateContactFlowRequest, "Name"> & Omit<CreateContactFlowRequest, "Type">)[K]
    }>): CreateContactFlowResponse {
        return this.client.createContactFlow(
            this.ops["CreateContactFlow"].apply(partialParams)
        );
    }

    invokeCreateContactFlowModule(partialParams: ToOptional<{
      [K in keyof CreateContactFlowModuleRequest & keyof CreateContactFlowModuleRequest & keyof Omit<CreateContactFlowModuleRequest, "Content"> & keyof CreateContactFlowModuleRequest & keyof CreateContactFlowModuleRequest & keyof CreateContactFlowModuleRequest & keyof CreateContactFlowModuleRequest & keyof Omit<CreateContactFlowModuleRequest, "Name"> & keyof CreateContactFlowModuleRequest]: (CreateContactFlowModuleRequest & CreateContactFlowModuleRequest & Omit<CreateContactFlowModuleRequest, "Content"> & CreateContactFlowModuleRequest & CreateContactFlowModuleRequest & CreateContactFlowModuleRequest & CreateContactFlowModuleRequest & Omit<CreateContactFlowModuleRequest, "Name"> & CreateContactFlowModuleRequest)[K]
    }>): CreateContactFlowModuleResponse {
        return this.client.createContactFlowModule(
            this.ops["CreateContactFlowModule"].apply(partialParams)
        );
    }

    invokeCreateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof CreateHoursOfOperationRequest & keyof CreateHoursOfOperationRequest & keyof CreateHoursOfOperationRequest & keyof CreateHoursOfOperationRequest & keyof CreateHoursOfOperationRequest & keyof CreateHoursOfOperationRequest & keyof CreateHoursOfOperationRequest & keyof Omit<CreateHoursOfOperationRequest, "Name"> & keyof CreateHoursOfOperationRequest]: (CreateHoursOfOperationRequest & CreateHoursOfOperationRequest & CreateHoursOfOperationRequest & CreateHoursOfOperationRequest & CreateHoursOfOperationRequest & CreateHoursOfOperationRequest & CreateHoursOfOperationRequest & Omit<CreateHoursOfOperationRequest, "Name"> & CreateHoursOfOperationRequest)[K]
    }>): CreateHoursOfOperationResponse {
        return this.client.createHoursOfOperation(
            this.ops["CreateHoursOfOperation"].apply(partialParams)
        );
    }

    invokeCreateInstance(partialParams: ToOptional<{
      [K in keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest]: (CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest)[K]
    }>): CreateInstanceResponse {
        return this.client.createInstance(
            this.ops["CreateInstance"].apply(partialParams)
        );
    }

    invokeCreateIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof Omit<CreateIntegrationAssociationRequest, "IntegrationArn"> & keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest]: (Omit<CreateIntegrationAssociationRequest, "IntegrationArn"> & CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest)[K]
    }>): CreateIntegrationAssociationResponse {
        return this.client.createIntegrationAssociation(
            this.ops["CreateIntegrationAssociation"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof Omit<CreateQueueRequest, "Name"> & keyof CreateQueueRequest]: (CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & Omit<CreateQueueRequest, "Name"> & CreateQueueRequest)[K]
    }>): CreateQueueResponse {
        return this.client.createQueue(
            this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeCreateQuickConnect(partialParams: ToOptional<{
      [K in keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest]: (CreateQuickConnectRequest & CreateQuickConnectRequest & CreateQuickConnectRequest & CreateQuickConnectRequest & CreateQuickConnectRequest & CreateQuickConnectRequest & CreateQuickConnectRequest & CreateQuickConnectRequest & CreateQuickConnectRequest)[K]
    }>): CreateQuickConnectResponse {
        return this.client.createQuickConnect(
            this.ops["CreateQuickConnect"].apply(partialParams)
        );
    }

    invokeCreateRoutingProfile(partialParams: ToOptional<{
      [K in keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest]: (CreateRoutingProfileRequest & CreateRoutingProfileRequest & CreateRoutingProfileRequest & CreateRoutingProfileRequest & CreateRoutingProfileRequest & CreateRoutingProfileRequest & CreateRoutingProfileRequest & CreateRoutingProfileRequest & CreateRoutingProfileRequest)[K]
    }>): CreateRoutingProfileResponse {
        return this.client.createRoutingProfile(
            this.ops["CreateRoutingProfile"].apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest]: (CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest)[K]
    }>): CreateSecurityProfileResponse {
        return this.client.createSecurityProfile(
            this.ops["CreateSecurityProfile"].apply(partialParams)
        );
    }

    invokeCreateUseCase(partialParams: ToOptional<{
      [K in keyof CreateUseCaseRequest & keyof CreateUseCaseRequest & keyof CreateUseCaseRequest & keyof CreateUseCaseRequest & keyof CreateUseCaseRequest & keyof CreateUseCaseRequest & keyof CreateUseCaseRequest & keyof CreateUseCaseRequest & keyof CreateUseCaseRequest]: (CreateUseCaseRequest & CreateUseCaseRequest & CreateUseCaseRequest & CreateUseCaseRequest & CreateUseCaseRequest & CreateUseCaseRequest & CreateUseCaseRequest & CreateUseCaseRequest & CreateUseCaseRequest)[K]
    }>): CreateUseCaseResponse {
        return this.client.createUseCase(
            this.ops["CreateUseCase"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest]: (CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest)[K]
    }>): CreateUserHierarchyGroupResponse {
        return this.client.createUserHierarchyGroup(
            this.ops["CreateUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeCreateVocabulary(partialParams: ToOptional<{
      [K in keyof CreateVocabularyRequest & keyof CreateVocabularyRequest & keyof CreateVocabularyRequest & keyof CreateVocabularyRequest & keyof CreateVocabularyRequest & keyof CreateVocabularyRequest & keyof CreateVocabularyRequest & keyof CreateVocabularyRequest & keyof CreateVocabularyRequest]: (CreateVocabularyRequest & CreateVocabularyRequest & CreateVocabularyRequest & CreateVocabularyRequest & CreateVocabularyRequest & CreateVocabularyRequest & CreateVocabularyRequest & CreateVocabularyRequest & CreateVocabularyRequest)[K]
    }>): CreateVocabularyResponse {
        return this.client.createVocabulary(
            this.ops["CreateVocabulary"].apply(partialParams)
        );
    }

    invokeDeleteContactFlow(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowRequest & keyof Omit<DeleteContactFlowRequest, "ContactFlowId"> & keyof DeleteContactFlowRequest & keyof DeleteContactFlowRequest & keyof DeleteContactFlowRequest & keyof DeleteContactFlowRequest & keyof DeleteContactFlowRequest & keyof DeleteContactFlowRequest & keyof DeleteContactFlowRequest]: (DeleteContactFlowRequest & Omit<DeleteContactFlowRequest, "ContactFlowId"> & DeleteContactFlowRequest & DeleteContactFlowRequest & DeleteContactFlowRequest & DeleteContactFlowRequest & DeleteContactFlowRequest & DeleteContactFlowRequest & DeleteContactFlowRequest)[K]
    }>): void {
        return this.client.deleteContactFlow(
            this.ops["DeleteContactFlow"].apply(partialParams)
        );
    }

    invokeDeleteContactFlowModule(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest]: (DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest)[K]
    }>): DeleteContactFlowModuleResponse {
        return this.client.deleteContactFlowModule(
            this.ops["DeleteContactFlowModule"].apply(partialParams)
        );
    }

    invokeDeleteHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest]: (DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest)[K]
    }>): void {
        return this.client.deleteHoursOfOperation(
            this.ops["DeleteHoursOfOperation"].apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest]: (DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest)[K]
    }>): void {
        return this.client.deleteInstance(
            this.ops["DeleteInstance"].apply(partialParams)
        );
    }

    invokeDeleteIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest]: (DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest)[K]
    }>): void {
        return this.client.deleteIntegrationAssociation(
            this.ops["DeleteIntegrationAssociation"].apply(partialParams)
        );
    }

    invokeDeleteQuickConnect(partialParams: ToOptional<{
      [K in keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest]: (DeleteQuickConnectRequest & DeleteQuickConnectRequest & DeleteQuickConnectRequest & DeleteQuickConnectRequest & DeleteQuickConnectRequest & DeleteQuickConnectRequest & DeleteQuickConnectRequest & DeleteQuickConnectRequest & DeleteQuickConnectRequest)[K]
    }>): void {
        return this.client.deleteQuickConnect(
            this.ops["DeleteQuickConnect"].apply(partialParams)
        );
    }

    invokeDeleteSecurityProfile(partialParams: ToOptional<{
      [K in keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest]: (DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest)[K]
    }>): void {
        return this.client.deleteSecurityProfile(
            this.ops["DeleteSecurityProfile"].apply(partialParams)
        );
    }

    invokeDeleteUseCase(partialParams: ToOptional<{
      [K in keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest]: (DeleteUseCaseRequest & DeleteUseCaseRequest & DeleteUseCaseRequest & DeleteUseCaseRequest & DeleteUseCaseRequest & DeleteUseCaseRequest & DeleteUseCaseRequest & DeleteUseCaseRequest & DeleteUseCaseRequest)[K]
    }>): void {
        return this.client.deleteUseCase(
            this.ops["DeleteUseCase"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): void {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest]: (DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest)[K]
    }>): void {
        return this.client.deleteUserHierarchyGroup(
            this.ops["DeleteUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeDeleteVocabulary(partialParams: ToOptional<{
      [K in keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest]: (DeleteVocabularyRequest & DeleteVocabularyRequest & DeleteVocabularyRequest & DeleteVocabularyRequest & DeleteVocabularyRequest & DeleteVocabularyRequest & DeleteVocabularyRequest & DeleteVocabularyRequest & DeleteVocabularyRequest)[K]
    }>): DeleteVocabularyResponse {
        return this.client.deleteVocabulary(
            this.ops["DeleteVocabulary"].apply(partialParams)
        );
    }

    invokeDescribeAgentStatus(partialParams: ToOptional<{
      [K in keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest]: (DescribeAgentStatusRequest & DescribeAgentStatusRequest & DescribeAgentStatusRequest & DescribeAgentStatusRequest & DescribeAgentStatusRequest & DescribeAgentStatusRequest & DescribeAgentStatusRequest & DescribeAgentStatusRequest & DescribeAgentStatusRequest)[K]
    }>): DescribeAgentStatusResponse {
        return this.client.describeAgentStatus(
            this.ops["DescribeAgentStatus"].apply(partialParams)
        );
    }

    invokeDescribeContact(partialParams: ToOptional<{
      [K in keyof DescribeContactRequest & keyof DescribeContactRequest & keyof DescribeContactRequest & keyof DescribeContactRequest & keyof DescribeContactRequest & keyof DescribeContactRequest & keyof DescribeContactRequest & keyof DescribeContactRequest & keyof DescribeContactRequest]: (DescribeContactRequest & DescribeContactRequest & DescribeContactRequest & DescribeContactRequest & DescribeContactRequest & DescribeContactRequest & DescribeContactRequest & DescribeContactRequest & DescribeContactRequest)[K]
    }>): DescribeContactResponse {
        return this.client.describeContact(
            this.ops["DescribeContact"].apply(partialParams)
        );
    }

    invokeDescribeContactFlow(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowRequest & keyof Omit<DescribeContactFlowRequest, "ContactFlowId"> & keyof DescribeContactFlowRequest & keyof DescribeContactFlowRequest & keyof DescribeContactFlowRequest & keyof DescribeContactFlowRequest & keyof DescribeContactFlowRequest & keyof DescribeContactFlowRequest & keyof DescribeContactFlowRequest]: (DescribeContactFlowRequest & Omit<DescribeContactFlowRequest, "ContactFlowId"> & DescribeContactFlowRequest & DescribeContactFlowRequest & DescribeContactFlowRequest & DescribeContactFlowRequest & DescribeContactFlowRequest & DescribeContactFlowRequest & DescribeContactFlowRequest)[K]
    }>): DescribeContactFlowResponse {
        return this.client.describeContactFlow(
            this.ops["DescribeContactFlow"].apply(partialParams)
        );
    }

    invokeDescribeContactFlowModule(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest]: (DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest)[K]
    }>): DescribeContactFlowModuleResponse {
        return this.client.describeContactFlowModule(
            this.ops["DescribeContactFlowModule"].apply(partialParams)
        );
    }

    invokeDescribeHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest]: (DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest)[K]
    }>): DescribeHoursOfOperationResponse {
        return this.client.describeHoursOfOperation(
            this.ops["DescribeHoursOfOperation"].apply(partialParams)
        );
    }

    invokeDescribeInstance(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRequest & keyof DescribeInstanceRequest & keyof DescribeInstanceRequest & keyof DescribeInstanceRequest & keyof DescribeInstanceRequest & keyof DescribeInstanceRequest & keyof DescribeInstanceRequest & keyof DescribeInstanceRequest & keyof DescribeInstanceRequest]: (DescribeInstanceRequest & DescribeInstanceRequest & DescribeInstanceRequest & DescribeInstanceRequest & DescribeInstanceRequest & DescribeInstanceRequest & DescribeInstanceRequest & DescribeInstanceRequest & DescribeInstanceRequest)[K]
    }>): DescribeInstanceResponse {
        return this.client.describeInstance(
            this.ops["DescribeInstance"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest)[K]
    }>): DescribeInstanceAttributeResponse {
        return this.client.describeInstanceAttribute(
            this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest]: (DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest)[K]
    }>): DescribeInstanceStorageConfigResponse {
        return this.client.describeInstanceStorageConfig(
            this.ops["DescribeInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeDescribeQueue(partialParams: ToOptional<{
      [K in keyof DescribeQueueRequest & keyof DescribeQueueRequest & keyof DescribeQueueRequest & keyof DescribeQueueRequest & keyof DescribeQueueRequest & keyof DescribeQueueRequest & keyof DescribeQueueRequest & keyof DescribeQueueRequest & keyof DescribeQueueRequest]: (DescribeQueueRequest & DescribeQueueRequest & DescribeQueueRequest & DescribeQueueRequest & DescribeQueueRequest & DescribeQueueRequest & DescribeQueueRequest & DescribeQueueRequest & DescribeQueueRequest)[K]
    }>): DescribeQueueResponse {
        return this.client.describeQueue(
            this.ops["DescribeQueue"].apply(partialParams)
        );
    }

    invokeDescribeQuickConnect(partialParams: ToOptional<{
      [K in keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest]: (DescribeQuickConnectRequest & DescribeQuickConnectRequest & DescribeQuickConnectRequest & DescribeQuickConnectRequest & DescribeQuickConnectRequest & DescribeQuickConnectRequest & DescribeQuickConnectRequest & DescribeQuickConnectRequest & DescribeQuickConnectRequest)[K]
    }>): DescribeQuickConnectResponse {
        return this.client.describeQuickConnect(
            this.ops["DescribeQuickConnect"].apply(partialParams)
        );
    }

    invokeDescribeRoutingProfile(partialParams: ToOptional<{
      [K in keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest]: (DescribeRoutingProfileRequest & DescribeRoutingProfileRequest & DescribeRoutingProfileRequest & DescribeRoutingProfileRequest & DescribeRoutingProfileRequest & DescribeRoutingProfileRequest & DescribeRoutingProfileRequest & DescribeRoutingProfileRequest & DescribeRoutingProfileRequest)[K]
    }>): DescribeRoutingProfileResponse {
        return this.client.describeRoutingProfile(
            this.ops["DescribeRoutingProfile"].apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest]: (DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest)[K]
    }>): DescribeSecurityProfileResponse {
        return this.client.describeSecurityProfile(
            this.ops["DescribeSecurityProfile"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest)[K]
    }>): DescribeUserResponse {
        return this.client.describeUser(
            this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest]: (DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest)[K]
    }>): DescribeUserHierarchyGroupResponse {
        return this.client.describeUserHierarchyGroup(
            this.ops["DescribeUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest]: (DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest)[K]
    }>): DescribeUserHierarchyStructureResponse {
        return this.client.describeUserHierarchyStructure(
            this.ops["DescribeUserHierarchyStructure"].apply(partialParams)
        );
    }

    invokeDescribeVocabulary(partialParams: ToOptional<{
      [K in keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest]: (DescribeVocabularyRequest & DescribeVocabularyRequest & DescribeVocabularyRequest & DescribeVocabularyRequest & DescribeVocabularyRequest & DescribeVocabularyRequest & DescribeVocabularyRequest & DescribeVocabularyRequest & DescribeVocabularyRequest)[K]
    }>): DescribeVocabularyResponse {
        return this.client.describeVocabulary(
            this.ops["DescribeVocabulary"].apply(partialParams)
        );
    }

    invokeDisassociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest]: (DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest)[K]
    }>): void {
        return this.client.disassociateApprovedOrigin(
            this.ops["DisassociateApprovedOrigin"].apply(partialParams)
        );
    }

    invokeDisassociateBot(partialParams: ToOptional<{
      [K in keyof DisassociateBotRequest & keyof DisassociateBotRequest & keyof DisassociateBotRequest & keyof DisassociateBotRequest & keyof DisassociateBotRequest & keyof DisassociateBotRequest & keyof DisassociateBotRequest & keyof DisassociateBotRequest & keyof DisassociateBotRequest]: (DisassociateBotRequest & DisassociateBotRequest & DisassociateBotRequest & DisassociateBotRequest & DisassociateBotRequest & DisassociateBotRequest & DisassociateBotRequest & DisassociateBotRequest & DisassociateBotRequest)[K]
    }>): void {
        return this.client.disassociateBot(
            this.ops["DisassociateBot"].apply(partialParams)
        );
    }

    invokeDisassociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest]: (DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest)[K]
    }>): void {
        return this.client.disassociateInstanceStorageConfig(
            this.ops["DisassociateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeDisassociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest]: (DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest)[K]
    }>): void {
        return this.client.disassociateLambdaFunction(
            this.ops["DisassociateLambdaFunction"].apply(partialParams)
        );
    }

    invokeDisassociateLexBot(partialParams: ToOptional<{
      [K in keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest]: (DisassociateLexBotRequest & DisassociateLexBotRequest & DisassociateLexBotRequest & DisassociateLexBotRequest & DisassociateLexBotRequest & DisassociateLexBotRequest & DisassociateLexBotRequest & DisassociateLexBotRequest & DisassociateLexBotRequest)[K]
    }>): void {
        return this.client.disassociateLexBot(
            this.ops["DisassociateLexBot"].apply(partialParams)
        );
    }

    invokeDisassociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest]: (DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest)[K]
    }>): void {
        return this.client.disassociateQueueQuickConnects(
            this.ops["DisassociateQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeDisassociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest]: (DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest)[K]
    }>): void {
        return this.client.disassociateRoutingProfileQueues(
            this.ops["DisassociateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeDisassociateSecurityKey(partialParams: ToOptional<{
      [K in keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest]: (DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest)[K]
    }>): void {
        return this.client.disassociateSecurityKey(
            this.ops["DisassociateSecurityKey"].apply(partialParams)
        );
    }

    invokeGetContactAttributes(partialParams: ToOptional<{
      [K in keyof GetContactAttributesRequest & keyof GetContactAttributesRequest & keyof GetContactAttributesRequest & keyof GetContactAttributesRequest & keyof GetContactAttributesRequest & keyof GetContactAttributesRequest & keyof GetContactAttributesRequest & keyof GetContactAttributesRequest & keyof GetContactAttributesRequest]: (GetContactAttributesRequest & GetContactAttributesRequest & GetContactAttributesRequest & GetContactAttributesRequest & GetContactAttributesRequest & GetContactAttributesRequest & GetContactAttributesRequest & GetContactAttributesRequest & GetContactAttributesRequest)[K]
    }>): GetContactAttributesResponse {
        return this.client.getContactAttributes(
            this.ops["GetContactAttributes"].apply(partialParams)
        );
    }

    invokeGetCurrentMetricData(partialParams: ToOptional<{
      [K in keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest]: (GetCurrentMetricDataRequest & GetCurrentMetricDataRequest & GetCurrentMetricDataRequest & GetCurrentMetricDataRequest & GetCurrentMetricDataRequest & GetCurrentMetricDataRequest & GetCurrentMetricDataRequest & GetCurrentMetricDataRequest & GetCurrentMetricDataRequest)[K]
    }>): GetCurrentMetricDataResponse {
        return this.client.getCurrentMetricData(
            this.ops["GetCurrentMetricData"].apply(partialParams)
        );
    }

    invokeGetFederationToken(partialParams: ToOptional<{
      [K in keyof GetFederationTokenRequest & keyof GetFederationTokenRequest & keyof GetFederationTokenRequest & keyof GetFederationTokenRequest & keyof GetFederationTokenRequest & keyof GetFederationTokenRequest & keyof GetFederationTokenRequest & keyof GetFederationTokenRequest & keyof GetFederationTokenRequest]: (GetFederationTokenRequest & GetFederationTokenRequest & GetFederationTokenRequest & GetFederationTokenRequest & GetFederationTokenRequest & GetFederationTokenRequest & GetFederationTokenRequest & GetFederationTokenRequest & GetFederationTokenRequest)[K]
    }>): GetFederationTokenResponse {
        return this.client.getFederationToken(
            this.ops["GetFederationToken"].apply(partialParams)
        );
    }

    invokeGetMetricData(partialParams: ToOptional<{
      [K in keyof GetMetricDataRequest & keyof GetMetricDataRequest & keyof GetMetricDataRequest & keyof GetMetricDataRequest & keyof GetMetricDataRequest & keyof GetMetricDataRequest & keyof GetMetricDataRequest & keyof GetMetricDataRequest & keyof GetMetricDataRequest]: (GetMetricDataRequest & GetMetricDataRequest & GetMetricDataRequest & GetMetricDataRequest & GetMetricDataRequest & GetMetricDataRequest & GetMetricDataRequest & GetMetricDataRequest & GetMetricDataRequest)[K]
    }>): GetMetricDataResponse {
        return this.client.getMetricData(
            this.ops["GetMetricData"].apply(partialParams)
        );
    }

    invokeListAgentStatuses(partialParams: ToOptional<{
      [K in keyof ListAgentStatusRequest & keyof ListAgentStatusRequest & keyof ListAgentStatusRequest & keyof ListAgentStatusRequest & keyof ListAgentStatusRequest & keyof ListAgentStatusRequest & keyof Omit<ListAgentStatusRequest, "InstanceId"> & keyof ListAgentStatusRequest & keyof ListAgentStatusRequest]: (ListAgentStatusRequest & ListAgentStatusRequest & ListAgentStatusRequest & ListAgentStatusRequest & ListAgentStatusRequest & ListAgentStatusRequest & Omit<ListAgentStatusRequest, "InstanceId"> & ListAgentStatusRequest & ListAgentStatusRequest)[K]
    }>): ListAgentStatusResponse {
        return this.client.listAgentStatuses(
            this.ops["ListAgentStatuses"].apply(partialParams)
        );
    }

    invokeListApprovedOrigins(partialParams: ToOptional<{
      [K in keyof ListApprovedOriginsRequest & keyof ListApprovedOriginsRequest & keyof ListApprovedOriginsRequest & keyof ListApprovedOriginsRequest & keyof ListApprovedOriginsRequest & keyof ListApprovedOriginsRequest & keyof Omit<ListApprovedOriginsRequest, "InstanceId"> & keyof ListApprovedOriginsRequest & keyof ListApprovedOriginsRequest]: (ListApprovedOriginsRequest & ListApprovedOriginsRequest & ListApprovedOriginsRequest & ListApprovedOriginsRequest & ListApprovedOriginsRequest & ListApprovedOriginsRequest & Omit<ListApprovedOriginsRequest, "InstanceId"> & ListApprovedOriginsRequest & ListApprovedOriginsRequest)[K]
    }>): ListApprovedOriginsResponse {
        return this.client.listApprovedOrigins(
            this.ops["ListApprovedOrigins"].apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest & keyof ListBotsRequest & keyof ListBotsRequest & keyof ListBotsRequest & keyof ListBotsRequest & keyof ListBotsRequest & keyof Omit<ListBotsRequest, "InstanceId"> & keyof ListBotsRequest & keyof ListBotsRequest]: (ListBotsRequest & ListBotsRequest & ListBotsRequest & ListBotsRequest & ListBotsRequest & ListBotsRequest & Omit<ListBotsRequest, "InstanceId"> & ListBotsRequest & ListBotsRequest)[K]
    }>): ListBotsResponse {
        return this.client.listBots(
            this.ops["ListBots"].apply(partialParams)
        );
    }

    invokeListContactFlowModules(partialParams: ToOptional<{
      [K in keyof ListContactFlowModulesRequest & keyof ListContactFlowModulesRequest & keyof ListContactFlowModulesRequest & keyof ListContactFlowModulesRequest & keyof ListContactFlowModulesRequest & keyof ListContactFlowModulesRequest & keyof Omit<ListContactFlowModulesRequest, "InstanceId"> & keyof ListContactFlowModulesRequest & keyof ListContactFlowModulesRequest]: (ListContactFlowModulesRequest & ListContactFlowModulesRequest & ListContactFlowModulesRequest & ListContactFlowModulesRequest & ListContactFlowModulesRequest & ListContactFlowModulesRequest & Omit<ListContactFlowModulesRequest, "InstanceId"> & ListContactFlowModulesRequest & ListContactFlowModulesRequest)[K]
    }>): ListContactFlowModulesResponse {
        return this.client.listContactFlowModules(
            this.ops["ListContactFlowModules"].apply(partialParams)
        );
    }

    invokeListContactFlows(partialParams: ToOptional<{
      [K in keyof ListContactFlowsRequest & keyof ListContactFlowsRequest & keyof ListContactFlowsRequest & keyof ListContactFlowsRequest & keyof ListContactFlowsRequest & keyof ListContactFlowsRequest & keyof Omit<ListContactFlowsRequest, "InstanceId"> & keyof ListContactFlowsRequest & keyof ListContactFlowsRequest]: (ListContactFlowsRequest & ListContactFlowsRequest & ListContactFlowsRequest & ListContactFlowsRequest & ListContactFlowsRequest & ListContactFlowsRequest & Omit<ListContactFlowsRequest, "InstanceId"> & ListContactFlowsRequest & ListContactFlowsRequest)[K]
    }>): ListContactFlowsResponse {
        return this.client.listContactFlows(
            this.ops["ListContactFlows"].apply(partialParams)
        );
    }

    invokeListContactReferences(partialParams: ToOptional<{
      [K in keyof ListContactReferencesRequest & keyof ListContactReferencesRequest & keyof ListContactReferencesRequest & keyof ListContactReferencesRequest & keyof ListContactReferencesRequest & keyof ListContactReferencesRequest & keyof Omit<ListContactReferencesRequest, "InstanceId"> & keyof ListContactReferencesRequest & keyof ListContactReferencesRequest]: (ListContactReferencesRequest & ListContactReferencesRequest & ListContactReferencesRequest & ListContactReferencesRequest & ListContactReferencesRequest & ListContactReferencesRequest & Omit<ListContactReferencesRequest, "InstanceId"> & ListContactReferencesRequest & ListContactReferencesRequest)[K]
    }>): ListContactReferencesResponse {
        return this.client.listContactReferences(
            this.ops["ListContactReferences"].apply(partialParams)
        );
    }

    invokeListDefaultVocabularies(partialParams: ToOptional<{
      [K in keyof ListDefaultVocabulariesRequest & keyof ListDefaultVocabulariesRequest & keyof ListDefaultVocabulariesRequest & keyof ListDefaultVocabulariesRequest & keyof ListDefaultVocabulariesRequest & keyof ListDefaultVocabulariesRequest & keyof Omit<ListDefaultVocabulariesRequest, "InstanceId"> & keyof ListDefaultVocabulariesRequest & keyof ListDefaultVocabulariesRequest]: (ListDefaultVocabulariesRequest & ListDefaultVocabulariesRequest & ListDefaultVocabulariesRequest & ListDefaultVocabulariesRequest & ListDefaultVocabulariesRequest & ListDefaultVocabulariesRequest & Omit<ListDefaultVocabulariesRequest, "InstanceId"> & ListDefaultVocabulariesRequest & ListDefaultVocabulariesRequest)[K]
    }>): ListDefaultVocabulariesResponse {
        return this.client.listDefaultVocabularies(
            this.ops["ListDefaultVocabularies"].apply(partialParams)
        );
    }

    invokeListHoursOfOperations(partialParams: ToOptional<{
      [K in keyof ListHoursOfOperationsRequest & keyof ListHoursOfOperationsRequest & keyof ListHoursOfOperationsRequest & keyof ListHoursOfOperationsRequest & keyof ListHoursOfOperationsRequest & keyof ListHoursOfOperationsRequest & keyof Omit<ListHoursOfOperationsRequest, "InstanceId"> & keyof ListHoursOfOperationsRequest & keyof ListHoursOfOperationsRequest]: (ListHoursOfOperationsRequest & ListHoursOfOperationsRequest & ListHoursOfOperationsRequest & ListHoursOfOperationsRequest & ListHoursOfOperationsRequest & ListHoursOfOperationsRequest & Omit<ListHoursOfOperationsRequest, "InstanceId"> & ListHoursOfOperationsRequest & ListHoursOfOperationsRequest)[K]
    }>): ListHoursOfOperationsResponse {
        return this.client.listHoursOfOperations(
            this.ops["ListHoursOfOperations"].apply(partialParams)
        );
    }

    invokeListInstanceAttributes(partialParams: ToOptional<{
      [K in keyof ListInstanceAttributesRequest & keyof ListInstanceAttributesRequest & keyof ListInstanceAttributesRequest & keyof ListInstanceAttributesRequest & keyof ListInstanceAttributesRequest & keyof ListInstanceAttributesRequest & keyof Omit<ListInstanceAttributesRequest, "InstanceId"> & keyof ListInstanceAttributesRequest & keyof ListInstanceAttributesRequest]: (ListInstanceAttributesRequest & ListInstanceAttributesRequest & ListInstanceAttributesRequest & ListInstanceAttributesRequest & ListInstanceAttributesRequest & ListInstanceAttributesRequest & Omit<ListInstanceAttributesRequest, "InstanceId"> & ListInstanceAttributesRequest & ListInstanceAttributesRequest)[K]
    }>): ListInstanceAttributesResponse {
        return this.client.listInstanceAttributes(
            this.ops["ListInstanceAttributes"].apply(partialParams)
        );
    }

    invokeListInstanceStorageConfigs(partialParams: ToOptional<{
      [K in keyof ListInstanceStorageConfigsRequest & keyof ListInstanceStorageConfigsRequest & keyof ListInstanceStorageConfigsRequest & keyof ListInstanceStorageConfigsRequest & keyof ListInstanceStorageConfigsRequest & keyof ListInstanceStorageConfigsRequest & keyof Omit<ListInstanceStorageConfigsRequest, "InstanceId"> & keyof ListInstanceStorageConfigsRequest & keyof ListInstanceStorageConfigsRequest]: (ListInstanceStorageConfigsRequest & ListInstanceStorageConfigsRequest & ListInstanceStorageConfigsRequest & ListInstanceStorageConfigsRequest & ListInstanceStorageConfigsRequest & ListInstanceStorageConfigsRequest & Omit<ListInstanceStorageConfigsRequest, "InstanceId"> & ListInstanceStorageConfigsRequest & ListInstanceStorageConfigsRequest)[K]
    }>): ListInstanceStorageConfigsResponse {
        return this.client.listInstanceStorageConfigs(
            this.ops["ListInstanceStorageConfigs"].apply(partialParams)
        );
    }

    invokeListIntegrationAssociations(partialParams: ToOptional<{
      [K in keyof ListIntegrationAssociationsRequest & keyof ListIntegrationAssociationsRequest & keyof ListIntegrationAssociationsRequest & keyof ListIntegrationAssociationsRequest & keyof ListIntegrationAssociationsRequest & keyof ListIntegrationAssociationsRequest & keyof Omit<ListIntegrationAssociationsRequest, "InstanceId"> & keyof ListIntegrationAssociationsRequest & keyof ListIntegrationAssociationsRequest]: (ListIntegrationAssociationsRequest & ListIntegrationAssociationsRequest & ListIntegrationAssociationsRequest & ListIntegrationAssociationsRequest & ListIntegrationAssociationsRequest & ListIntegrationAssociationsRequest & Omit<ListIntegrationAssociationsRequest, "InstanceId"> & ListIntegrationAssociationsRequest & ListIntegrationAssociationsRequest)[K]
    }>): ListIntegrationAssociationsResponse {
        return this.client.listIntegrationAssociations(
            this.ops["ListIntegrationAssociations"].apply(partialParams)
        );
    }

    invokeListLambdaFunctions(partialParams: ToOptional<{
      [K in keyof ListLambdaFunctionsRequest & keyof ListLambdaFunctionsRequest & keyof ListLambdaFunctionsRequest & keyof ListLambdaFunctionsRequest & keyof ListLambdaFunctionsRequest & keyof ListLambdaFunctionsRequest & keyof Omit<ListLambdaFunctionsRequest, "InstanceId"> & keyof ListLambdaFunctionsRequest & keyof ListLambdaFunctionsRequest]: (ListLambdaFunctionsRequest & ListLambdaFunctionsRequest & ListLambdaFunctionsRequest & ListLambdaFunctionsRequest & ListLambdaFunctionsRequest & ListLambdaFunctionsRequest & Omit<ListLambdaFunctionsRequest, "InstanceId"> & ListLambdaFunctionsRequest & ListLambdaFunctionsRequest)[K]
    }>): ListLambdaFunctionsResponse {
        return this.client.listLambdaFunctions(
            this.ops["ListLambdaFunctions"].apply(partialParams)
        );
    }

    invokeListLexBots(partialParams: ToOptional<{
      [K in keyof ListLexBotsRequest & keyof ListLexBotsRequest & keyof ListLexBotsRequest & keyof ListLexBotsRequest & keyof ListLexBotsRequest & keyof ListLexBotsRequest & keyof Omit<ListLexBotsRequest, "InstanceId"> & keyof ListLexBotsRequest & keyof ListLexBotsRequest]: (ListLexBotsRequest & ListLexBotsRequest & ListLexBotsRequest & ListLexBotsRequest & ListLexBotsRequest & ListLexBotsRequest & Omit<ListLexBotsRequest, "InstanceId"> & ListLexBotsRequest & ListLexBotsRequest)[K]
    }>): ListLexBotsResponse {
        return this.client.listLexBots(
            this.ops["ListLexBots"].apply(partialParams)
        );
    }

    invokeListPhoneNumbers(partialParams: ToOptional<{
      [K in keyof ListPhoneNumbersRequest & keyof ListPhoneNumbersRequest & keyof ListPhoneNumbersRequest & keyof ListPhoneNumbersRequest & keyof ListPhoneNumbersRequest & keyof ListPhoneNumbersRequest & keyof Omit<ListPhoneNumbersRequest, "InstanceId"> & keyof ListPhoneNumbersRequest & keyof ListPhoneNumbersRequest]: (ListPhoneNumbersRequest & ListPhoneNumbersRequest & ListPhoneNumbersRequest & ListPhoneNumbersRequest & ListPhoneNumbersRequest & ListPhoneNumbersRequest & Omit<ListPhoneNumbersRequest, "InstanceId"> & ListPhoneNumbersRequest & ListPhoneNumbersRequest)[K]
    }>): ListPhoneNumbersResponse {
        return this.client.listPhoneNumbers(
            this.ops["ListPhoneNumbers"].apply(partialParams)
        );
    }

    invokeListPrompts(partialParams: ToOptional<{
      [K in keyof ListPromptsRequest & keyof ListPromptsRequest & keyof ListPromptsRequest & keyof ListPromptsRequest & keyof ListPromptsRequest & keyof ListPromptsRequest & keyof Omit<ListPromptsRequest, "InstanceId"> & keyof ListPromptsRequest & keyof ListPromptsRequest]: (ListPromptsRequest & ListPromptsRequest & ListPromptsRequest & ListPromptsRequest & ListPromptsRequest & ListPromptsRequest & Omit<ListPromptsRequest, "InstanceId"> & ListPromptsRequest & ListPromptsRequest)[K]
    }>): ListPromptsResponse {
        return this.client.listPrompts(
            this.ops["ListPrompts"].apply(partialParams)
        );
    }

    invokeListQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof ListQueueQuickConnectsRequest & keyof ListQueueQuickConnectsRequest & keyof ListQueueQuickConnectsRequest & keyof ListQueueQuickConnectsRequest & keyof ListQueueQuickConnectsRequest & keyof ListQueueQuickConnectsRequest & keyof Omit<ListQueueQuickConnectsRequest, "InstanceId"> & keyof ListQueueQuickConnectsRequest & keyof ListQueueQuickConnectsRequest]: (ListQueueQuickConnectsRequest & ListQueueQuickConnectsRequest & ListQueueQuickConnectsRequest & ListQueueQuickConnectsRequest & ListQueueQuickConnectsRequest & ListQueueQuickConnectsRequest & Omit<ListQueueQuickConnectsRequest, "InstanceId"> & ListQueueQuickConnectsRequest & ListQueueQuickConnectsRequest)[K]
    }>): ListQueueQuickConnectsResponse {
        return this.client.listQueueQuickConnects(
            this.ops["ListQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeListQueues(partialParams: ToOptional<{
      [K in keyof ListQueuesRequest & keyof ListQueuesRequest & keyof ListQueuesRequest & keyof ListQueuesRequest & keyof ListQueuesRequest & keyof ListQueuesRequest & keyof Omit<ListQueuesRequest, "InstanceId"> & keyof ListQueuesRequest & keyof ListQueuesRequest]: (ListQueuesRequest & ListQueuesRequest & ListQueuesRequest & ListQueuesRequest & ListQueuesRequest & ListQueuesRequest & Omit<ListQueuesRequest, "InstanceId"> & ListQueuesRequest & ListQueuesRequest)[K]
    }>): ListQueuesResponse {
        return this.client.listQueues(
            this.ops["ListQueues"].apply(partialParams)
        );
    }

    invokeListQuickConnects(partialParams: ToOptional<{
      [K in keyof ListQuickConnectsRequest & keyof ListQuickConnectsRequest & keyof ListQuickConnectsRequest & keyof ListQuickConnectsRequest & keyof ListQuickConnectsRequest & keyof ListQuickConnectsRequest & keyof Omit<ListQuickConnectsRequest, "InstanceId"> & keyof ListQuickConnectsRequest & keyof ListQuickConnectsRequest]: (ListQuickConnectsRequest & ListQuickConnectsRequest & ListQuickConnectsRequest & ListQuickConnectsRequest & ListQuickConnectsRequest & ListQuickConnectsRequest & Omit<ListQuickConnectsRequest, "InstanceId"> & ListQuickConnectsRequest & ListQuickConnectsRequest)[K]
    }>): ListQuickConnectsResponse {
        return this.client.listQuickConnects(
            this.ops["ListQuickConnects"].apply(partialParams)
        );
    }

    invokeListRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof ListRoutingProfileQueuesRequest & keyof ListRoutingProfileQueuesRequest & keyof ListRoutingProfileQueuesRequest & keyof ListRoutingProfileQueuesRequest & keyof ListRoutingProfileQueuesRequest & keyof ListRoutingProfileQueuesRequest & keyof Omit<ListRoutingProfileQueuesRequest, "InstanceId"> & keyof ListRoutingProfileQueuesRequest & keyof ListRoutingProfileQueuesRequest]: (ListRoutingProfileQueuesRequest & ListRoutingProfileQueuesRequest & ListRoutingProfileQueuesRequest & ListRoutingProfileQueuesRequest & ListRoutingProfileQueuesRequest & ListRoutingProfileQueuesRequest & Omit<ListRoutingProfileQueuesRequest, "InstanceId"> & ListRoutingProfileQueuesRequest & ListRoutingProfileQueuesRequest)[K]
    }>): ListRoutingProfileQueuesResponse {
        return this.client.listRoutingProfileQueues(
            this.ops["ListRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeListRoutingProfiles(partialParams: ToOptional<{
      [K in keyof ListRoutingProfilesRequest & keyof ListRoutingProfilesRequest & keyof ListRoutingProfilesRequest & keyof ListRoutingProfilesRequest & keyof ListRoutingProfilesRequest & keyof ListRoutingProfilesRequest & keyof Omit<ListRoutingProfilesRequest, "InstanceId"> & keyof ListRoutingProfilesRequest & keyof ListRoutingProfilesRequest]: (ListRoutingProfilesRequest & ListRoutingProfilesRequest & ListRoutingProfilesRequest & ListRoutingProfilesRequest & ListRoutingProfilesRequest & ListRoutingProfilesRequest & Omit<ListRoutingProfilesRequest, "InstanceId"> & ListRoutingProfilesRequest & ListRoutingProfilesRequest)[K]
    }>): ListRoutingProfilesResponse {
        return this.client.listRoutingProfiles(
            this.ops["ListRoutingProfiles"].apply(partialParams)
        );
    }

    invokeListSecurityKeys(partialParams: ToOptional<{
      [K in keyof ListSecurityKeysRequest & keyof ListSecurityKeysRequest & keyof ListSecurityKeysRequest & keyof ListSecurityKeysRequest & keyof ListSecurityKeysRequest & keyof ListSecurityKeysRequest & keyof Omit<ListSecurityKeysRequest, "InstanceId"> & keyof ListSecurityKeysRequest & keyof ListSecurityKeysRequest]: (ListSecurityKeysRequest & ListSecurityKeysRequest & ListSecurityKeysRequest & ListSecurityKeysRequest & ListSecurityKeysRequest & ListSecurityKeysRequest & Omit<ListSecurityKeysRequest, "InstanceId"> & ListSecurityKeysRequest & ListSecurityKeysRequest)[K]
    }>): ListSecurityKeysResponse {
        return this.client.listSecurityKeys(
            this.ops["ListSecurityKeys"].apply(partialParams)
        );
    }

    invokeListSecurityProfilePermissions(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilePermissionsRequest & keyof ListSecurityProfilePermissionsRequest & keyof ListSecurityProfilePermissionsRequest & keyof ListSecurityProfilePermissionsRequest & keyof ListSecurityProfilePermissionsRequest & keyof ListSecurityProfilePermissionsRequest & keyof Omit<ListSecurityProfilePermissionsRequest, "InstanceId"> & keyof ListSecurityProfilePermissionsRequest & keyof ListSecurityProfilePermissionsRequest]: (ListSecurityProfilePermissionsRequest & ListSecurityProfilePermissionsRequest & ListSecurityProfilePermissionsRequest & ListSecurityProfilePermissionsRequest & ListSecurityProfilePermissionsRequest & ListSecurityProfilePermissionsRequest & Omit<ListSecurityProfilePermissionsRequest, "InstanceId"> & ListSecurityProfilePermissionsRequest & ListSecurityProfilePermissionsRequest)[K]
    }>): ListSecurityProfilePermissionsResponse {
        return this.client.listSecurityProfilePermissions(
            this.ops["ListSecurityProfilePermissions"].apply(partialParams)
        );
    }

    invokeListSecurityProfiles(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilesRequest & keyof ListSecurityProfilesRequest & keyof ListSecurityProfilesRequest & keyof ListSecurityProfilesRequest & keyof ListSecurityProfilesRequest & keyof ListSecurityProfilesRequest & keyof Omit<ListSecurityProfilesRequest, "InstanceId"> & keyof ListSecurityProfilesRequest & keyof ListSecurityProfilesRequest]: (ListSecurityProfilesRequest & ListSecurityProfilesRequest & ListSecurityProfilesRequest & ListSecurityProfilesRequest & ListSecurityProfilesRequest & ListSecurityProfilesRequest & Omit<ListSecurityProfilesRequest, "InstanceId"> & ListSecurityProfilesRequest & ListSecurityProfilesRequest)[K]
    }>): ListSecurityProfilesResponse {
        return this.client.listSecurityProfiles(
            this.ops["ListSecurityProfiles"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "resourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "resourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListUseCases(partialParams: ToOptional<{
      [K in keyof ListUseCasesRequest & keyof ListUseCasesRequest & keyof ListUseCasesRequest & keyof ListUseCasesRequest & keyof ListUseCasesRequest & keyof ListUseCasesRequest & keyof Omit<ListUseCasesRequest, "InstanceId"> & keyof ListUseCasesRequest & keyof ListUseCasesRequest]: (ListUseCasesRequest & ListUseCasesRequest & ListUseCasesRequest & ListUseCasesRequest & ListUseCasesRequest & ListUseCasesRequest & Omit<ListUseCasesRequest, "InstanceId"> & ListUseCasesRequest & ListUseCasesRequest)[K]
    }>): ListUseCasesResponse {
        return this.client.listUseCases(
            this.ops["ListUseCases"].apply(partialParams)
        );
    }

    invokeListUserHierarchyGroups(partialParams: ToOptional<{
      [K in keyof ListUserHierarchyGroupsRequest & keyof ListUserHierarchyGroupsRequest & keyof ListUserHierarchyGroupsRequest & keyof ListUserHierarchyGroupsRequest & keyof ListUserHierarchyGroupsRequest & keyof ListUserHierarchyGroupsRequest & keyof Omit<ListUserHierarchyGroupsRequest, "InstanceId"> & keyof ListUserHierarchyGroupsRequest & keyof ListUserHierarchyGroupsRequest]: (ListUserHierarchyGroupsRequest & ListUserHierarchyGroupsRequest & ListUserHierarchyGroupsRequest & ListUserHierarchyGroupsRequest & ListUserHierarchyGroupsRequest & ListUserHierarchyGroupsRequest & Omit<ListUserHierarchyGroupsRequest, "InstanceId"> & ListUserHierarchyGroupsRequest & ListUserHierarchyGroupsRequest)[K]
    }>): ListUserHierarchyGroupsResponse {
        return this.client.listUserHierarchyGroups(
            this.ops["ListUserHierarchyGroups"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof Omit<ListUsersRequest, "InstanceId"> & keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & Omit<ListUsersRequest, "InstanceId"> & ListUsersRequest & ListUsersRequest)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeResumeContactRecording(partialParams: ToOptional<{
      [K in keyof ResumeContactRecordingRequest & keyof ResumeContactRecordingRequest & keyof ResumeContactRecordingRequest & keyof ResumeContactRecordingRequest & keyof ResumeContactRecordingRequest & keyof ResumeContactRecordingRequest & keyof Omit<ResumeContactRecordingRequest, "InstanceId"> & keyof ResumeContactRecordingRequest & keyof ResumeContactRecordingRequest]: (ResumeContactRecordingRequest & ResumeContactRecordingRequest & ResumeContactRecordingRequest & ResumeContactRecordingRequest & ResumeContactRecordingRequest & ResumeContactRecordingRequest & Omit<ResumeContactRecordingRequest, "InstanceId"> & ResumeContactRecordingRequest & ResumeContactRecordingRequest)[K]
    }>): ResumeContactRecordingResponse {
        return this.client.resumeContactRecording(
            this.ops["ResumeContactRecording"].apply(partialParams)
        );
    }

    invokeSearchVocabularies(partialParams: ToOptional<{
      [K in keyof SearchVocabulariesRequest & keyof SearchVocabulariesRequest & keyof SearchVocabulariesRequest & keyof SearchVocabulariesRequest & keyof SearchVocabulariesRequest & keyof SearchVocabulariesRequest & keyof Omit<SearchVocabulariesRequest, "InstanceId"> & keyof SearchVocabulariesRequest & keyof SearchVocabulariesRequest]: (SearchVocabulariesRequest & SearchVocabulariesRequest & SearchVocabulariesRequest & SearchVocabulariesRequest & SearchVocabulariesRequest & SearchVocabulariesRequest & Omit<SearchVocabulariesRequest, "InstanceId"> & SearchVocabulariesRequest & SearchVocabulariesRequest)[K]
    }>): SearchVocabulariesResponse {
        return this.client.searchVocabularies(
            this.ops["SearchVocabularies"].apply(partialParams)
        );
    }

    invokeStartChatContact(partialParams: ToOptional<{
      [K in keyof StartChatContactRequest & keyof Omit<StartChatContactRequest, "ContactFlowId"> & keyof StartChatContactRequest & keyof StartChatContactRequest & keyof StartChatContactRequest & keyof StartChatContactRequest & keyof Omit<StartChatContactRequest, "InstanceId"> & keyof StartChatContactRequest & keyof StartChatContactRequest]: (StartChatContactRequest & Omit<StartChatContactRequest, "ContactFlowId"> & StartChatContactRequest & StartChatContactRequest & StartChatContactRequest & StartChatContactRequest & Omit<StartChatContactRequest, "InstanceId"> & StartChatContactRequest & StartChatContactRequest)[K]
    }>): StartChatContactResponse {
        return this.client.startChatContact(
            this.ops["StartChatContact"].apply(partialParams)
        );
    }

    invokeStartContactRecording(partialParams: ToOptional<{
      [K in keyof StartContactRecordingRequest & keyof StartContactRecordingRequest & keyof StartContactRecordingRequest & keyof StartContactRecordingRequest & keyof StartContactRecordingRequest & keyof StartContactRecordingRequest & keyof Omit<StartContactRecordingRequest, "InstanceId"> & keyof StartContactRecordingRequest & keyof StartContactRecordingRequest]: (StartContactRecordingRequest & StartContactRecordingRequest & StartContactRecordingRequest & StartContactRecordingRequest & StartContactRecordingRequest & StartContactRecordingRequest & Omit<StartContactRecordingRequest, "InstanceId"> & StartContactRecordingRequest & StartContactRecordingRequest)[K]
    }>): StartContactRecordingResponse {
        return this.client.startContactRecording(
            this.ops["StartContactRecording"].apply(partialParams)
        );
    }

    invokeStartContactStreaming(partialParams: ToOptional<{
      [K in keyof StartContactStreamingRequest & keyof StartContactStreamingRequest & keyof StartContactStreamingRequest & keyof StartContactStreamingRequest & keyof StartContactStreamingRequest & keyof StartContactStreamingRequest & keyof Omit<StartContactStreamingRequest, "InstanceId"> & keyof StartContactStreamingRequest & keyof StartContactStreamingRequest]: (StartContactStreamingRequest & StartContactStreamingRequest & StartContactStreamingRequest & StartContactStreamingRequest & StartContactStreamingRequest & StartContactStreamingRequest & Omit<StartContactStreamingRequest, "InstanceId"> & StartContactStreamingRequest & StartContactStreamingRequest)[K]
    }>): StartContactStreamingResponse {
        return this.client.startContactStreaming(
            this.ops["StartContactStreaming"].apply(partialParams)
        );
    }

    invokeStartOutboundVoiceContact(partialParams: ToOptional<{
      [K in keyof StartOutboundVoiceContactRequest & keyof Omit<StartOutboundVoiceContactRequest, "ContactFlowId"> & keyof StartOutboundVoiceContactRequest & keyof StartOutboundVoiceContactRequest & keyof StartOutboundVoiceContactRequest & keyof StartOutboundVoiceContactRequest & keyof Omit<StartOutboundVoiceContactRequest, "InstanceId"> & keyof StartOutboundVoiceContactRequest & keyof StartOutboundVoiceContactRequest]: (StartOutboundVoiceContactRequest & Omit<StartOutboundVoiceContactRequest, "ContactFlowId"> & StartOutboundVoiceContactRequest & StartOutboundVoiceContactRequest & StartOutboundVoiceContactRequest & StartOutboundVoiceContactRequest & Omit<StartOutboundVoiceContactRequest, "InstanceId"> & StartOutboundVoiceContactRequest & StartOutboundVoiceContactRequest)[K]
    }>): StartOutboundVoiceContactResponse {
        return this.client.startOutboundVoiceContact(
            this.ops["StartOutboundVoiceContact"].apply(partialParams)
        );
    }

    invokeStartTaskContact(partialParams: ToOptional<{
      [K in keyof StartTaskContactRequest & keyof Omit<StartTaskContactRequest, "ContactFlowId"> & keyof StartTaskContactRequest & keyof StartTaskContactRequest & keyof StartTaskContactRequest & keyof StartTaskContactRequest & keyof Omit<StartTaskContactRequest, "InstanceId"> & keyof Omit<StartTaskContactRequest, "Name"> & keyof StartTaskContactRequest]: (StartTaskContactRequest & Omit<StartTaskContactRequest, "ContactFlowId"> & StartTaskContactRequest & StartTaskContactRequest & StartTaskContactRequest & StartTaskContactRequest & Omit<StartTaskContactRequest, "InstanceId"> & Omit<StartTaskContactRequest, "Name"> & StartTaskContactRequest)[K]
    }>): StartTaskContactResponse {
        return this.client.startTaskContact(
            this.ops["StartTaskContact"].apply(partialParams)
        );
    }

    invokeStopContact(partialParams: ToOptional<{
      [K in keyof StopContactRequest & keyof StopContactRequest & keyof StopContactRequest & keyof StopContactRequest & keyof StopContactRequest & keyof StopContactRequest & keyof Omit<StopContactRequest, "InstanceId"> & keyof StopContactRequest & keyof StopContactRequest]: (StopContactRequest & StopContactRequest & StopContactRequest & StopContactRequest & StopContactRequest & StopContactRequest & Omit<StopContactRequest, "InstanceId"> & StopContactRequest & StopContactRequest)[K]
    }>): StopContactResponse {
        return this.client.stopContact(
            this.ops["StopContact"].apply(partialParams)
        );
    }

    invokeStopContactRecording(partialParams: ToOptional<{
      [K in keyof StopContactRecordingRequest & keyof StopContactRecordingRequest & keyof StopContactRecordingRequest & keyof StopContactRecordingRequest & keyof StopContactRecordingRequest & keyof StopContactRecordingRequest & keyof Omit<StopContactRecordingRequest, "InstanceId"> & keyof StopContactRecordingRequest & keyof StopContactRecordingRequest]: (StopContactRecordingRequest & StopContactRecordingRequest & StopContactRecordingRequest & StopContactRecordingRequest & StopContactRecordingRequest & StopContactRecordingRequest & Omit<StopContactRecordingRequest, "InstanceId"> & StopContactRecordingRequest & StopContactRecordingRequest)[K]
    }>): StopContactRecordingResponse {
        return this.client.stopContactRecording(
            this.ops["StopContactRecording"].apply(partialParams)
        );
    }

    invokeStopContactStreaming(partialParams: ToOptional<{
      [K in keyof StopContactStreamingRequest & keyof StopContactStreamingRequest & keyof StopContactStreamingRequest & keyof StopContactStreamingRequest & keyof StopContactStreamingRequest & keyof StopContactStreamingRequest & keyof Omit<StopContactStreamingRequest, "InstanceId"> & keyof StopContactStreamingRequest & keyof StopContactStreamingRequest]: (StopContactStreamingRequest & StopContactStreamingRequest & StopContactStreamingRequest & StopContactStreamingRequest & StopContactStreamingRequest & StopContactStreamingRequest & Omit<StopContactStreamingRequest, "InstanceId"> & StopContactStreamingRequest & StopContactStreamingRequest)[K]
    }>): StopContactStreamingResponse {
        return this.client.stopContactStreaming(
            this.ops["StopContactStreaming"].apply(partialParams)
        );
    }

    invokeSuspendContactRecording(partialParams: ToOptional<{
      [K in keyof SuspendContactRecordingRequest & keyof SuspendContactRecordingRequest & keyof SuspendContactRecordingRequest & keyof SuspendContactRecordingRequest & keyof SuspendContactRecordingRequest & keyof SuspendContactRecordingRequest & keyof Omit<SuspendContactRecordingRequest, "InstanceId"> & keyof SuspendContactRecordingRequest & keyof SuspendContactRecordingRequest]: (SuspendContactRecordingRequest & SuspendContactRecordingRequest & SuspendContactRecordingRequest & SuspendContactRecordingRequest & SuspendContactRecordingRequest & SuspendContactRecordingRequest & Omit<SuspendContactRecordingRequest, "InstanceId"> & SuspendContactRecordingRequest & SuspendContactRecordingRequest)[K]
    }>): SuspendContactRecordingResponse {
        return this.client.suspendContactRecording(
            this.ops["SuspendContactRecording"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "resourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (Omit<TagResourceRequest, "resourceArn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "resourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "resourceArn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAgentStatus(partialParams: ToOptional<{
      [K in keyof UpdateAgentStatusRequest & keyof UpdateAgentStatusRequest & keyof UpdateAgentStatusRequest & keyof UpdateAgentStatusRequest & keyof UpdateAgentStatusRequest & keyof UpdateAgentStatusRequest & keyof Omit<UpdateAgentStatusRequest, "InstanceId"> & keyof UpdateAgentStatusRequest & keyof UpdateAgentStatusRequest]: (UpdateAgentStatusRequest & UpdateAgentStatusRequest & UpdateAgentStatusRequest & UpdateAgentStatusRequest & UpdateAgentStatusRequest & UpdateAgentStatusRequest & Omit<UpdateAgentStatusRequest, "InstanceId"> & UpdateAgentStatusRequest & UpdateAgentStatusRequest)[K]
    }>): void {
        return this.client.updateAgentStatus(
            this.ops["UpdateAgentStatus"].apply(partialParams)
        );
    }

    invokeUpdateContact(partialParams: ToOptional<{
      [K in keyof UpdateContactRequest & keyof UpdateContactRequest & keyof UpdateContactRequest & keyof UpdateContactRequest & keyof UpdateContactRequest & keyof UpdateContactRequest & keyof Omit<UpdateContactRequest, "InstanceId"> & keyof UpdateContactRequest & keyof UpdateContactRequest]: (UpdateContactRequest & UpdateContactRequest & UpdateContactRequest & UpdateContactRequest & UpdateContactRequest & UpdateContactRequest & Omit<UpdateContactRequest, "InstanceId"> & UpdateContactRequest & UpdateContactRequest)[K]
    }>): UpdateContactResponse {
        return this.client.updateContact(
            this.ops["UpdateContact"].apply(partialParams)
        );
    }

    invokeUpdateContactAttributes(partialParams: ToOptional<{
      [K in keyof UpdateContactAttributesRequest & keyof UpdateContactAttributesRequest & keyof UpdateContactAttributesRequest & keyof UpdateContactAttributesRequest & keyof UpdateContactAttributesRequest & keyof UpdateContactAttributesRequest & keyof Omit<UpdateContactAttributesRequest, "InstanceId"> & keyof UpdateContactAttributesRequest & keyof UpdateContactAttributesRequest]: (UpdateContactAttributesRequest & UpdateContactAttributesRequest & UpdateContactAttributesRequest & UpdateContactAttributesRequest & UpdateContactAttributesRequest & UpdateContactAttributesRequest & Omit<UpdateContactAttributesRequest, "InstanceId"> & UpdateContactAttributesRequest & UpdateContactAttributesRequest)[K]
    }>): UpdateContactAttributesResponse {
        return this.client.updateContactAttributes(
            this.ops["UpdateContactAttributes"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowContent(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowContentRequest & keyof Omit<UpdateContactFlowContentRequest, "ContactFlowId"> & keyof Omit<UpdateContactFlowContentRequest, "Content"> & keyof UpdateContactFlowContentRequest & keyof UpdateContactFlowContentRequest & keyof UpdateContactFlowContentRequest & keyof Omit<UpdateContactFlowContentRequest, "InstanceId"> & keyof UpdateContactFlowContentRequest & keyof UpdateContactFlowContentRequest]: (UpdateContactFlowContentRequest & Omit<UpdateContactFlowContentRequest, "ContactFlowId"> & Omit<UpdateContactFlowContentRequest, "Content"> & UpdateContactFlowContentRequest & UpdateContactFlowContentRequest & UpdateContactFlowContentRequest & Omit<UpdateContactFlowContentRequest, "InstanceId"> & UpdateContactFlowContentRequest & UpdateContactFlowContentRequest)[K]
    }>): void {
        return this.client.updateContactFlowContent(
            this.ops["UpdateContactFlowContent"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowMetadata(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowMetadataRequest & keyof Omit<UpdateContactFlowMetadataRequest, "ContactFlowId"> & keyof UpdateContactFlowMetadataRequest & keyof UpdateContactFlowMetadataRequest & keyof UpdateContactFlowMetadataRequest & keyof UpdateContactFlowMetadataRequest & keyof Omit<UpdateContactFlowMetadataRequest, "InstanceId"> & keyof UpdateContactFlowMetadataRequest & keyof UpdateContactFlowMetadataRequest]: (UpdateContactFlowMetadataRequest & Omit<UpdateContactFlowMetadataRequest, "ContactFlowId"> & UpdateContactFlowMetadataRequest & UpdateContactFlowMetadataRequest & UpdateContactFlowMetadataRequest & UpdateContactFlowMetadataRequest & Omit<UpdateContactFlowMetadataRequest, "InstanceId"> & UpdateContactFlowMetadataRequest & UpdateContactFlowMetadataRequest)[K]
    }>): void {
        return this.client.updateContactFlowMetadata(
            this.ops["UpdateContactFlowMetadata"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleContent(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowModuleContentRequest & keyof UpdateContactFlowModuleContentRequest & keyof Omit<UpdateContactFlowModuleContentRequest, "Content"> & keyof UpdateContactFlowModuleContentRequest & keyof UpdateContactFlowModuleContentRequest & keyof UpdateContactFlowModuleContentRequest & keyof Omit<UpdateContactFlowModuleContentRequest, "InstanceId"> & keyof UpdateContactFlowModuleContentRequest & keyof UpdateContactFlowModuleContentRequest]: (UpdateContactFlowModuleContentRequest & UpdateContactFlowModuleContentRequest & Omit<UpdateContactFlowModuleContentRequest, "Content"> & UpdateContactFlowModuleContentRequest & UpdateContactFlowModuleContentRequest & UpdateContactFlowModuleContentRequest & Omit<UpdateContactFlowModuleContentRequest, "InstanceId"> & UpdateContactFlowModuleContentRequest & UpdateContactFlowModuleContentRequest)[K]
    }>): UpdateContactFlowModuleContentResponse {
        return this.client.updateContactFlowModuleContent(
            this.ops["UpdateContactFlowModuleContent"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleMetadata(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowModuleMetadataRequest & keyof UpdateContactFlowModuleMetadataRequest & keyof UpdateContactFlowModuleMetadataRequest & keyof UpdateContactFlowModuleMetadataRequest & keyof UpdateContactFlowModuleMetadataRequest & keyof UpdateContactFlowModuleMetadataRequest & keyof Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId"> & keyof UpdateContactFlowModuleMetadataRequest & keyof UpdateContactFlowModuleMetadataRequest]: (UpdateContactFlowModuleMetadataRequest & UpdateContactFlowModuleMetadataRequest & UpdateContactFlowModuleMetadataRequest & UpdateContactFlowModuleMetadataRequest & UpdateContactFlowModuleMetadataRequest & UpdateContactFlowModuleMetadataRequest & Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId"> & UpdateContactFlowModuleMetadataRequest & UpdateContactFlowModuleMetadataRequest)[K]
    }>): UpdateContactFlowModuleMetadataResponse {
        return this.client.updateContactFlowModuleMetadata(
            this.ops["UpdateContactFlowModuleMetadata"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowName(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowNameRequest & keyof Omit<UpdateContactFlowNameRequest, "ContactFlowId"> & keyof UpdateContactFlowNameRequest & keyof UpdateContactFlowNameRequest & keyof UpdateContactFlowNameRequest & keyof UpdateContactFlowNameRequest & keyof Omit<UpdateContactFlowNameRequest, "InstanceId"> & keyof UpdateContactFlowNameRequest & keyof UpdateContactFlowNameRequest]: (UpdateContactFlowNameRequest & Omit<UpdateContactFlowNameRequest, "ContactFlowId"> & UpdateContactFlowNameRequest & UpdateContactFlowNameRequest & UpdateContactFlowNameRequest & UpdateContactFlowNameRequest & Omit<UpdateContactFlowNameRequest, "InstanceId"> & UpdateContactFlowNameRequest & UpdateContactFlowNameRequest)[K]
    }>): void {
        return this.client.updateContactFlowName(
            this.ops["UpdateContactFlowName"].apply(partialParams)
        );
    }

    invokeUpdateContactSchedule(partialParams: ToOptional<{
      [K in keyof UpdateContactScheduleRequest & keyof UpdateContactScheduleRequest & keyof UpdateContactScheduleRequest & keyof UpdateContactScheduleRequest & keyof UpdateContactScheduleRequest & keyof UpdateContactScheduleRequest & keyof Omit<UpdateContactScheduleRequest, "InstanceId"> & keyof UpdateContactScheduleRequest & keyof UpdateContactScheduleRequest]: (UpdateContactScheduleRequest & UpdateContactScheduleRequest & UpdateContactScheduleRequest & UpdateContactScheduleRequest & UpdateContactScheduleRequest & UpdateContactScheduleRequest & Omit<UpdateContactScheduleRequest, "InstanceId"> & UpdateContactScheduleRequest & UpdateContactScheduleRequest)[K]
    }>): UpdateContactScheduleResponse {
        return this.client.updateContactSchedule(
            this.ops["UpdateContactSchedule"].apply(partialParams)
        );
    }

    invokeUpdateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof UpdateHoursOfOperationRequest & keyof UpdateHoursOfOperationRequest & keyof UpdateHoursOfOperationRequest & keyof UpdateHoursOfOperationRequest & keyof UpdateHoursOfOperationRequest & keyof UpdateHoursOfOperationRequest & keyof Omit<UpdateHoursOfOperationRequest, "InstanceId"> & keyof UpdateHoursOfOperationRequest & keyof UpdateHoursOfOperationRequest]: (UpdateHoursOfOperationRequest & UpdateHoursOfOperationRequest & UpdateHoursOfOperationRequest & UpdateHoursOfOperationRequest & UpdateHoursOfOperationRequest & UpdateHoursOfOperationRequest & Omit<UpdateHoursOfOperationRequest, "InstanceId"> & UpdateHoursOfOperationRequest & UpdateHoursOfOperationRequest)[K]
    }>): void {
        return this.client.updateHoursOfOperation(
            this.ops["UpdateHoursOfOperation"].apply(partialParams)
        );
    }

    invokeUpdateInstanceAttribute(partialParams: ToOptional<{
      [K in keyof UpdateInstanceAttributeRequest & keyof UpdateInstanceAttributeRequest & keyof UpdateInstanceAttributeRequest & keyof UpdateInstanceAttributeRequest & keyof UpdateInstanceAttributeRequest & keyof UpdateInstanceAttributeRequest & keyof Omit<UpdateInstanceAttributeRequest, "InstanceId"> & keyof UpdateInstanceAttributeRequest & keyof UpdateInstanceAttributeRequest]: (UpdateInstanceAttributeRequest & UpdateInstanceAttributeRequest & UpdateInstanceAttributeRequest & UpdateInstanceAttributeRequest & UpdateInstanceAttributeRequest & UpdateInstanceAttributeRequest & Omit<UpdateInstanceAttributeRequest, "InstanceId"> & UpdateInstanceAttributeRequest & UpdateInstanceAttributeRequest)[K]
    }>): void {
        return this.client.updateInstanceAttribute(
            this.ops["UpdateInstanceAttribute"].apply(partialParams)
        );
    }

    invokeUpdateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof UpdateInstanceStorageConfigRequest & keyof UpdateInstanceStorageConfigRequest & keyof UpdateInstanceStorageConfigRequest & keyof UpdateInstanceStorageConfigRequest & keyof UpdateInstanceStorageConfigRequest & keyof UpdateInstanceStorageConfigRequest & keyof Omit<UpdateInstanceStorageConfigRequest, "InstanceId"> & keyof UpdateInstanceStorageConfigRequest & keyof UpdateInstanceStorageConfigRequest]: (UpdateInstanceStorageConfigRequest & UpdateInstanceStorageConfigRequest & UpdateInstanceStorageConfigRequest & UpdateInstanceStorageConfigRequest & UpdateInstanceStorageConfigRequest & UpdateInstanceStorageConfigRequest & Omit<UpdateInstanceStorageConfigRequest, "InstanceId"> & UpdateInstanceStorageConfigRequest & UpdateInstanceStorageConfigRequest)[K]
    }>): void {
        return this.client.updateInstanceStorageConfig(
            this.ops["UpdateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeUpdateQueueHoursOfOperation(partialParams: ToOptional<{
      [K in keyof UpdateQueueHoursOfOperationRequest & keyof UpdateQueueHoursOfOperationRequest & keyof UpdateQueueHoursOfOperationRequest & keyof UpdateQueueHoursOfOperationRequest & keyof UpdateQueueHoursOfOperationRequest & keyof UpdateQueueHoursOfOperationRequest & keyof Omit<UpdateQueueHoursOfOperationRequest, "InstanceId"> & keyof UpdateQueueHoursOfOperationRequest & keyof UpdateQueueHoursOfOperationRequest]: (UpdateQueueHoursOfOperationRequest & UpdateQueueHoursOfOperationRequest & UpdateQueueHoursOfOperationRequest & UpdateQueueHoursOfOperationRequest & UpdateQueueHoursOfOperationRequest & UpdateQueueHoursOfOperationRequest & Omit<UpdateQueueHoursOfOperationRequest, "InstanceId"> & UpdateQueueHoursOfOperationRequest & UpdateQueueHoursOfOperationRequest)[K]
    }>): void {
        return this.client.updateQueueHoursOfOperation(
            this.ops["UpdateQueueHoursOfOperation"].apply(partialParams)
        );
    }

    invokeUpdateQueueMaxContacts(partialParams: ToOptional<{
      [K in keyof UpdateQueueMaxContactsRequest & keyof UpdateQueueMaxContactsRequest & keyof UpdateQueueMaxContactsRequest & keyof UpdateQueueMaxContactsRequest & keyof UpdateQueueMaxContactsRequest & keyof UpdateQueueMaxContactsRequest & keyof Omit<UpdateQueueMaxContactsRequest, "InstanceId"> & keyof UpdateQueueMaxContactsRequest & keyof UpdateQueueMaxContactsRequest]: (UpdateQueueMaxContactsRequest & UpdateQueueMaxContactsRequest & UpdateQueueMaxContactsRequest & UpdateQueueMaxContactsRequest & UpdateQueueMaxContactsRequest & UpdateQueueMaxContactsRequest & Omit<UpdateQueueMaxContactsRequest, "InstanceId"> & UpdateQueueMaxContactsRequest & UpdateQueueMaxContactsRequest)[K]
    }>): void {
        return this.client.updateQueueMaxContacts(
            this.ops["UpdateQueueMaxContacts"].apply(partialParams)
        );
    }

    invokeUpdateQueueName(partialParams: ToOptional<{
      [K in keyof UpdateQueueNameRequest & keyof UpdateQueueNameRequest & keyof UpdateQueueNameRequest & keyof UpdateQueueNameRequest & keyof UpdateQueueNameRequest & keyof UpdateQueueNameRequest & keyof Omit<UpdateQueueNameRequest, "InstanceId"> & keyof UpdateQueueNameRequest & keyof UpdateQueueNameRequest]: (UpdateQueueNameRequest & UpdateQueueNameRequest & UpdateQueueNameRequest & UpdateQueueNameRequest & UpdateQueueNameRequest & UpdateQueueNameRequest & Omit<UpdateQueueNameRequest, "InstanceId"> & UpdateQueueNameRequest & UpdateQueueNameRequest)[K]
    }>): void {
        return this.client.updateQueueName(
            this.ops["UpdateQueueName"].apply(partialParams)
        );
    }

    invokeUpdateQueueOutboundCallerConfig(partialParams: ToOptional<{
      [K in keyof UpdateQueueOutboundCallerConfigRequest & keyof UpdateQueueOutboundCallerConfigRequest & keyof UpdateQueueOutboundCallerConfigRequest & keyof UpdateQueueOutboundCallerConfigRequest & keyof UpdateQueueOutboundCallerConfigRequest & keyof UpdateQueueOutboundCallerConfigRequest & keyof Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId"> & keyof UpdateQueueOutboundCallerConfigRequest & keyof UpdateQueueOutboundCallerConfigRequest]: (UpdateQueueOutboundCallerConfigRequest & UpdateQueueOutboundCallerConfigRequest & UpdateQueueOutboundCallerConfigRequest & UpdateQueueOutboundCallerConfigRequest & UpdateQueueOutboundCallerConfigRequest & UpdateQueueOutboundCallerConfigRequest & Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId"> & UpdateQueueOutboundCallerConfigRequest & UpdateQueueOutboundCallerConfigRequest)[K]
    }>): void {
        return this.client.updateQueueOutboundCallerConfig(
            this.ops["UpdateQueueOutboundCallerConfig"].apply(partialParams)
        );
    }

    invokeUpdateQueueStatus(partialParams: ToOptional<{
      [K in keyof UpdateQueueStatusRequest & keyof UpdateQueueStatusRequest & keyof UpdateQueueStatusRequest & keyof UpdateQueueStatusRequest & keyof UpdateQueueStatusRequest & keyof UpdateQueueStatusRequest & keyof Omit<UpdateQueueStatusRequest, "InstanceId"> & keyof UpdateQueueStatusRequest & keyof UpdateQueueStatusRequest]: (UpdateQueueStatusRequest & UpdateQueueStatusRequest & UpdateQueueStatusRequest & UpdateQueueStatusRequest & UpdateQueueStatusRequest & UpdateQueueStatusRequest & Omit<UpdateQueueStatusRequest, "InstanceId"> & UpdateQueueStatusRequest & UpdateQueueStatusRequest)[K]
    }>): void {
        return this.client.updateQueueStatus(
            this.ops["UpdateQueueStatus"].apply(partialParams)
        );
    }

    invokeUpdateQuickConnectConfig(partialParams: ToOptional<{
      [K in keyof UpdateQuickConnectConfigRequest & keyof UpdateQuickConnectConfigRequest & keyof UpdateQuickConnectConfigRequest & keyof UpdateQuickConnectConfigRequest & keyof UpdateQuickConnectConfigRequest & keyof UpdateQuickConnectConfigRequest & keyof Omit<UpdateQuickConnectConfigRequest, "InstanceId"> & keyof UpdateQuickConnectConfigRequest & keyof UpdateQuickConnectConfigRequest]: (UpdateQuickConnectConfigRequest & UpdateQuickConnectConfigRequest & UpdateQuickConnectConfigRequest & UpdateQuickConnectConfigRequest & UpdateQuickConnectConfigRequest & UpdateQuickConnectConfigRequest & Omit<UpdateQuickConnectConfigRequest, "InstanceId"> & UpdateQuickConnectConfigRequest & UpdateQuickConnectConfigRequest)[K]
    }>): void {
        return this.client.updateQuickConnectConfig(
            this.ops["UpdateQuickConnectConfig"].apply(partialParams)
        );
    }

    invokeUpdateQuickConnectName(partialParams: ToOptional<{
      [K in keyof UpdateQuickConnectNameRequest & keyof UpdateQuickConnectNameRequest & keyof UpdateQuickConnectNameRequest & keyof UpdateQuickConnectNameRequest & keyof UpdateQuickConnectNameRequest & keyof UpdateQuickConnectNameRequest & keyof Omit<UpdateQuickConnectNameRequest, "InstanceId"> & keyof UpdateQuickConnectNameRequest & keyof UpdateQuickConnectNameRequest]: (UpdateQuickConnectNameRequest & UpdateQuickConnectNameRequest & UpdateQuickConnectNameRequest & UpdateQuickConnectNameRequest & UpdateQuickConnectNameRequest & UpdateQuickConnectNameRequest & Omit<UpdateQuickConnectNameRequest, "InstanceId"> & UpdateQuickConnectNameRequest & UpdateQuickConnectNameRequest)[K]
    }>): void {
        return this.client.updateQuickConnectName(
            this.ops["UpdateQuickConnectName"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileConcurrency(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileConcurrencyRequest & keyof UpdateRoutingProfileConcurrencyRequest & keyof UpdateRoutingProfileConcurrencyRequest & keyof UpdateRoutingProfileConcurrencyRequest & keyof UpdateRoutingProfileConcurrencyRequest & keyof UpdateRoutingProfileConcurrencyRequest & keyof Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId"> & keyof UpdateRoutingProfileConcurrencyRequest & keyof UpdateRoutingProfileConcurrencyRequest]: (UpdateRoutingProfileConcurrencyRequest & UpdateRoutingProfileConcurrencyRequest & UpdateRoutingProfileConcurrencyRequest & UpdateRoutingProfileConcurrencyRequest & UpdateRoutingProfileConcurrencyRequest & UpdateRoutingProfileConcurrencyRequest & Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId"> & UpdateRoutingProfileConcurrencyRequest & UpdateRoutingProfileConcurrencyRequest)[K]
    }>): void {
        return this.client.updateRoutingProfileConcurrency(
            this.ops["UpdateRoutingProfileConcurrency"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileDefaultOutboundQueue(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId"> & keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof UpdateRoutingProfileDefaultOutboundQueueRequest]: (UpdateRoutingProfileDefaultOutboundQueueRequest & UpdateRoutingProfileDefaultOutboundQueueRequest & UpdateRoutingProfileDefaultOutboundQueueRequest & UpdateRoutingProfileDefaultOutboundQueueRequest & UpdateRoutingProfileDefaultOutboundQueueRequest & UpdateRoutingProfileDefaultOutboundQueueRequest & Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId"> & UpdateRoutingProfileDefaultOutboundQueueRequest & UpdateRoutingProfileDefaultOutboundQueueRequest)[K]
    }>): void {
        return this.client.updateRoutingProfileDefaultOutboundQueue(
            this.ops["UpdateRoutingProfileDefaultOutboundQueue"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileName(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileNameRequest & keyof UpdateRoutingProfileNameRequest & keyof UpdateRoutingProfileNameRequest & keyof UpdateRoutingProfileNameRequest & keyof UpdateRoutingProfileNameRequest & keyof UpdateRoutingProfileNameRequest & keyof Omit<UpdateRoutingProfileNameRequest, "InstanceId"> & keyof UpdateRoutingProfileNameRequest & keyof UpdateRoutingProfileNameRequest]: (UpdateRoutingProfileNameRequest & UpdateRoutingProfileNameRequest & UpdateRoutingProfileNameRequest & UpdateRoutingProfileNameRequest & UpdateRoutingProfileNameRequest & UpdateRoutingProfileNameRequest & Omit<UpdateRoutingProfileNameRequest, "InstanceId"> & UpdateRoutingProfileNameRequest & UpdateRoutingProfileNameRequest)[K]
    }>): void {
        return this.client.updateRoutingProfileName(
            this.ops["UpdateRoutingProfileName"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileQueuesRequest & keyof UpdateRoutingProfileQueuesRequest & keyof UpdateRoutingProfileQueuesRequest & keyof UpdateRoutingProfileQueuesRequest & keyof UpdateRoutingProfileQueuesRequest & keyof UpdateRoutingProfileQueuesRequest & keyof Omit<UpdateRoutingProfileQueuesRequest, "InstanceId"> & keyof UpdateRoutingProfileQueuesRequest & keyof UpdateRoutingProfileQueuesRequest]: (UpdateRoutingProfileQueuesRequest & UpdateRoutingProfileQueuesRequest & UpdateRoutingProfileQueuesRequest & UpdateRoutingProfileQueuesRequest & UpdateRoutingProfileQueuesRequest & UpdateRoutingProfileQueuesRequest & Omit<UpdateRoutingProfileQueuesRequest, "InstanceId"> & UpdateRoutingProfileQueuesRequest & UpdateRoutingProfileQueuesRequest)[K]
    }>): void {
        return this.client.updateRoutingProfileQueues(
            this.ops["UpdateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeUpdateSecurityProfile(partialParams: ToOptional<{
      [K in keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof Omit<UpdateSecurityProfileRequest, "InstanceId"> & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest]: (UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & Omit<UpdateSecurityProfileRequest, "InstanceId"> & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest)[K]
    }>): void {
        return this.client.updateSecurityProfile(
            this.ops["UpdateSecurityProfile"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchy(partialParams: ToOptional<{
      [K in keyof UpdateUserHierarchyRequest & keyof UpdateUserHierarchyRequest & keyof UpdateUserHierarchyRequest & keyof UpdateUserHierarchyRequest & keyof UpdateUserHierarchyRequest & keyof UpdateUserHierarchyRequest & keyof Omit<UpdateUserHierarchyRequest, "InstanceId"> & keyof UpdateUserHierarchyRequest & keyof UpdateUserHierarchyRequest]: (UpdateUserHierarchyRequest & UpdateUserHierarchyRequest & UpdateUserHierarchyRequest & UpdateUserHierarchyRequest & UpdateUserHierarchyRequest & UpdateUserHierarchyRequest & Omit<UpdateUserHierarchyRequest, "InstanceId"> & UpdateUserHierarchyRequest & UpdateUserHierarchyRequest)[K]
    }>): void {
        return this.client.updateUserHierarchy(
            this.ops["UpdateUserHierarchy"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyGroupName(partialParams: ToOptional<{
      [K in keyof UpdateUserHierarchyGroupNameRequest & keyof UpdateUserHierarchyGroupNameRequest & keyof UpdateUserHierarchyGroupNameRequest & keyof UpdateUserHierarchyGroupNameRequest & keyof UpdateUserHierarchyGroupNameRequest & keyof UpdateUserHierarchyGroupNameRequest & keyof Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId"> & keyof Omit<UpdateUserHierarchyGroupNameRequest, "Name"> & keyof UpdateUserHierarchyGroupNameRequest]: (UpdateUserHierarchyGroupNameRequest & UpdateUserHierarchyGroupNameRequest & UpdateUserHierarchyGroupNameRequest & UpdateUserHierarchyGroupNameRequest & UpdateUserHierarchyGroupNameRequest & UpdateUserHierarchyGroupNameRequest & Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId"> & Omit<UpdateUserHierarchyGroupNameRequest, "Name"> & UpdateUserHierarchyGroupNameRequest)[K]
    }>): void {
        return this.client.updateUserHierarchyGroupName(
            this.ops["UpdateUserHierarchyGroupName"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof UpdateUserHierarchyStructureRequest & keyof UpdateUserHierarchyStructureRequest & keyof UpdateUserHierarchyStructureRequest & keyof UpdateUserHierarchyStructureRequest & keyof UpdateUserHierarchyStructureRequest & keyof UpdateUserHierarchyStructureRequest & keyof Omit<UpdateUserHierarchyStructureRequest, "InstanceId"> & keyof UpdateUserHierarchyStructureRequest & keyof UpdateUserHierarchyStructureRequest]: (UpdateUserHierarchyStructureRequest & UpdateUserHierarchyStructureRequest & UpdateUserHierarchyStructureRequest & UpdateUserHierarchyStructureRequest & UpdateUserHierarchyStructureRequest & UpdateUserHierarchyStructureRequest & Omit<UpdateUserHierarchyStructureRequest, "InstanceId"> & UpdateUserHierarchyStructureRequest & UpdateUserHierarchyStructureRequest)[K]
    }>): void {
        return this.client.updateUserHierarchyStructure(
            this.ops["UpdateUserHierarchyStructure"].apply(partialParams)
        );
    }

    invokeUpdateUserIdentityInfo(partialParams: ToOptional<{
      [K in keyof UpdateUserIdentityInfoRequest & keyof UpdateUserIdentityInfoRequest & keyof UpdateUserIdentityInfoRequest & keyof UpdateUserIdentityInfoRequest & keyof UpdateUserIdentityInfoRequest & keyof UpdateUserIdentityInfoRequest & keyof Omit<UpdateUserIdentityInfoRequest, "InstanceId"> & keyof UpdateUserIdentityInfoRequest & keyof UpdateUserIdentityInfoRequest]: (UpdateUserIdentityInfoRequest & UpdateUserIdentityInfoRequest & UpdateUserIdentityInfoRequest & UpdateUserIdentityInfoRequest & UpdateUserIdentityInfoRequest & UpdateUserIdentityInfoRequest & Omit<UpdateUserIdentityInfoRequest, "InstanceId"> & UpdateUserIdentityInfoRequest & UpdateUserIdentityInfoRequest)[K]
    }>): void {
        return this.client.updateUserIdentityInfo(
            this.ops["UpdateUserIdentityInfo"].apply(partialParams)
        );
    }

    invokeUpdateUserPhoneConfig(partialParams: ToOptional<{
      [K in keyof UpdateUserPhoneConfigRequest & keyof UpdateUserPhoneConfigRequest & keyof UpdateUserPhoneConfigRequest & keyof UpdateUserPhoneConfigRequest & keyof UpdateUserPhoneConfigRequest & keyof UpdateUserPhoneConfigRequest & keyof Omit<UpdateUserPhoneConfigRequest, "InstanceId"> & keyof UpdateUserPhoneConfigRequest & keyof UpdateUserPhoneConfigRequest]: (UpdateUserPhoneConfigRequest & UpdateUserPhoneConfigRequest & UpdateUserPhoneConfigRequest & UpdateUserPhoneConfigRequest & UpdateUserPhoneConfigRequest & UpdateUserPhoneConfigRequest & Omit<UpdateUserPhoneConfigRequest, "InstanceId"> & UpdateUserPhoneConfigRequest & UpdateUserPhoneConfigRequest)[K]
    }>): void {
        return this.client.updateUserPhoneConfig(
            this.ops["UpdateUserPhoneConfig"].apply(partialParams)
        );
    }

    invokeUpdateUserRoutingProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserRoutingProfileRequest & keyof UpdateUserRoutingProfileRequest & keyof UpdateUserRoutingProfileRequest & keyof UpdateUserRoutingProfileRequest & keyof UpdateUserRoutingProfileRequest & keyof UpdateUserRoutingProfileRequest & keyof Omit<UpdateUserRoutingProfileRequest, "InstanceId"> & keyof UpdateUserRoutingProfileRequest & keyof UpdateUserRoutingProfileRequest]: (UpdateUserRoutingProfileRequest & UpdateUserRoutingProfileRequest & UpdateUserRoutingProfileRequest & UpdateUserRoutingProfileRequest & UpdateUserRoutingProfileRequest & UpdateUserRoutingProfileRequest & Omit<UpdateUserRoutingProfileRequest, "InstanceId"> & UpdateUserRoutingProfileRequest & UpdateUserRoutingProfileRequest)[K]
    }>): void {
        return this.client.updateUserRoutingProfile(
            this.ops["UpdateUserRoutingProfile"].apply(partialParams)
        );
    }

    invokeUpdateUserSecurityProfiles(partialParams: ToOptional<{
      [K in keyof UpdateUserSecurityProfilesRequest & keyof UpdateUserSecurityProfilesRequest & keyof UpdateUserSecurityProfilesRequest & keyof UpdateUserSecurityProfilesRequest & keyof UpdateUserSecurityProfilesRequest & keyof UpdateUserSecurityProfilesRequest & keyof Omit<UpdateUserSecurityProfilesRequest, "InstanceId"> & keyof UpdateUserSecurityProfilesRequest & keyof UpdateUserSecurityProfilesRequest]: (UpdateUserSecurityProfilesRequest & UpdateUserSecurityProfilesRequest & UpdateUserSecurityProfilesRequest & UpdateUserSecurityProfilesRequest & UpdateUserSecurityProfilesRequest & UpdateUserSecurityProfilesRequest & Omit<UpdateUserSecurityProfilesRequest, "InstanceId"> & UpdateUserSecurityProfilesRequest & UpdateUserSecurityProfilesRequest)[K]
    }>): void {
        return this.client.updateUserSecurityProfiles(
            this.ops["UpdateUserSecurityProfiles"].apply(partialParams)
        );
    }
}