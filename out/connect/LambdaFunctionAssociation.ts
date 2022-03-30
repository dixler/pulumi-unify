
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

export default class extends aws.connect.LambdaFunctionAssociation {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.connect.LambdaFunctionAssociation>) {
        super(...args)
        this.client = new awssdk.Connect()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/connect-2017-08-08.normal.json"), this.client)
    }

    invokeAssociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof AssociateApprovedOriginRequest & keyof AssociateApprovedOriginRequest]: (AssociateApprovedOriginRequest & AssociateApprovedOriginRequest)[K]
    }>): void {
        return this.client.associateApprovedOrigin(
            this.ops["AssociateApprovedOrigin"].apply(partialParams)
        );
    }

    invokeAssociateBot(partialParams: ToOptional<{
      [K in keyof AssociateBotRequest & keyof AssociateBotRequest]: (AssociateBotRequest & AssociateBotRequest)[K]
    }>): void {
        return this.client.associateBot(
            this.ops["AssociateBot"].apply(partialParams)
        );
    }

    invokeAssociateDefaultVocabulary(partialParams: ToOptional<{
      [K in keyof AssociateDefaultVocabularyRequest & keyof AssociateDefaultVocabularyRequest]: (AssociateDefaultVocabularyRequest & AssociateDefaultVocabularyRequest)[K]
    }>): AssociateDefaultVocabularyResponse {
        return this.client.associateDefaultVocabulary(
            this.ops["AssociateDefaultVocabulary"].apply(partialParams)
        );
    }

    invokeAssociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof AssociateInstanceStorageConfigRequest & keyof AssociateInstanceStorageConfigRequest]: (AssociateInstanceStorageConfigRequest & AssociateInstanceStorageConfigRequest)[K]
    }>): AssociateInstanceStorageConfigResponse {
        return this.client.associateInstanceStorageConfig(
            this.ops["AssociateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeAssociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof AssociateLambdaFunctionRequest & keyof AssociateLambdaFunctionRequest]: (AssociateLambdaFunctionRequest & AssociateLambdaFunctionRequest)[K]
    }>): void {
        return this.client.associateLambdaFunction(
            this.ops["AssociateLambdaFunction"].apply(partialParams)
        );
    }

    invokeAssociateLexBot(partialParams: ToOptional<{
      [K in keyof AssociateLexBotRequest & keyof AssociateLexBotRequest]: (AssociateLexBotRequest & AssociateLexBotRequest)[K]
    }>): void {
        return this.client.associateLexBot(
            this.ops["AssociateLexBot"].apply(partialParams)
        );
    }

    invokeAssociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof AssociateQueueQuickConnectsRequest & keyof AssociateQueueQuickConnectsRequest]: (AssociateQueueQuickConnectsRequest & AssociateQueueQuickConnectsRequest)[K]
    }>): void {
        return this.client.associateQueueQuickConnects(
            this.ops["AssociateQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeAssociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof AssociateRoutingProfileQueuesRequest & keyof AssociateRoutingProfileQueuesRequest]: (AssociateRoutingProfileQueuesRequest & AssociateRoutingProfileQueuesRequest)[K]
    }>): void {
        return this.client.associateRoutingProfileQueues(
            this.ops["AssociateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeAssociateSecurityKey(partialParams: ToOptional<{
      [K in keyof AssociateSecurityKeyRequest & keyof AssociateSecurityKeyRequest]: (AssociateSecurityKeyRequest & AssociateSecurityKeyRequest)[K]
    }>): AssociateSecurityKeyResponse {
        return this.client.associateSecurityKey(
            this.ops["AssociateSecurityKey"].apply(partialParams)
        );
    }

    invokeCreateAgentStatus(partialParams: ToOptional<{
      [K in keyof CreateAgentStatusRequest & keyof CreateAgentStatusRequest]: (CreateAgentStatusRequest & CreateAgentStatusRequest)[K]
    }>): CreateAgentStatusResponse {
        return this.client.createAgentStatus(
            this.ops["CreateAgentStatus"].apply(partialParams)
        );
    }

    invokeCreateContactFlow(partialParams: ToOptional<{
      [K in keyof CreateContactFlowRequest & keyof CreateContactFlowRequest]: (CreateContactFlowRequest & CreateContactFlowRequest)[K]
    }>): CreateContactFlowResponse {
        return this.client.createContactFlow(
            this.ops["CreateContactFlow"].apply(partialParams)
        );
    }

    invokeCreateContactFlowModule(partialParams: ToOptional<{
      [K in keyof CreateContactFlowModuleRequest & keyof CreateContactFlowModuleRequest]: (CreateContactFlowModuleRequest & CreateContactFlowModuleRequest)[K]
    }>): CreateContactFlowModuleResponse {
        return this.client.createContactFlowModule(
            this.ops["CreateContactFlowModule"].apply(partialParams)
        );
    }

    invokeCreateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof CreateHoursOfOperationRequest & keyof CreateHoursOfOperationRequest]: (CreateHoursOfOperationRequest & CreateHoursOfOperationRequest)[K]
    }>): CreateHoursOfOperationResponse {
        return this.client.createHoursOfOperation(
            this.ops["CreateHoursOfOperation"].apply(partialParams)
        );
    }

    invokeCreateInstance(partialParams: ToOptional<{
      [K in keyof CreateInstanceRequest & keyof CreateInstanceRequest]: (CreateInstanceRequest & CreateInstanceRequest)[K]
    }>): CreateInstanceResponse {
        return this.client.createInstance(
            this.ops["CreateInstance"].apply(partialParams)
        );
    }

    invokeCreateIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof CreateIntegrationAssociationRequest & keyof CreateIntegrationAssociationRequest]: (CreateIntegrationAssociationRequest & CreateIntegrationAssociationRequest)[K]
    }>): CreateIntegrationAssociationResponse {
        return this.client.createIntegrationAssociation(
            this.ops["CreateIntegrationAssociation"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof CreateQueueRequest]: (CreateQueueRequest & CreateQueueRequest)[K]
    }>): CreateQueueResponse {
        return this.client.createQueue(
            this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeCreateQuickConnect(partialParams: ToOptional<{
      [K in keyof CreateQuickConnectRequest & keyof CreateQuickConnectRequest]: (CreateQuickConnectRequest & CreateQuickConnectRequest)[K]
    }>): CreateQuickConnectResponse {
        return this.client.createQuickConnect(
            this.ops["CreateQuickConnect"].apply(partialParams)
        );
    }

    invokeCreateRoutingProfile(partialParams: ToOptional<{
      [K in keyof CreateRoutingProfileRequest & keyof CreateRoutingProfileRequest]: (CreateRoutingProfileRequest & CreateRoutingProfileRequest)[K]
    }>): CreateRoutingProfileResponse {
        return this.client.createRoutingProfile(
            this.ops["CreateRoutingProfile"].apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest]: (CreateSecurityProfileRequest & CreateSecurityProfileRequest)[K]
    }>): CreateSecurityProfileResponse {
        return this.client.createSecurityProfile(
            this.ops["CreateSecurityProfile"].apply(partialParams)
        );
    }

    invokeCreateUseCase(partialParams: ToOptional<{
      [K in keyof CreateUseCaseRequest & keyof CreateUseCaseRequest]: (CreateUseCaseRequest & CreateUseCaseRequest)[K]
    }>): CreateUseCaseResponse {
        return this.client.createUseCase(
            this.ops["CreateUseCase"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof CreateUserHierarchyGroupRequest & keyof CreateUserHierarchyGroupRequest]: (CreateUserHierarchyGroupRequest & CreateUserHierarchyGroupRequest)[K]
    }>): CreateUserHierarchyGroupResponse {
        return this.client.createUserHierarchyGroup(
            this.ops["CreateUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeCreateVocabulary(partialParams: ToOptional<{
      [K in keyof CreateVocabularyRequest & keyof CreateVocabularyRequest]: (CreateVocabularyRequest & CreateVocabularyRequest)[K]
    }>): CreateVocabularyResponse {
        return this.client.createVocabulary(
            this.ops["CreateVocabulary"].apply(partialParams)
        );
    }

    invokeDeleteContactFlow(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowRequest & keyof DeleteContactFlowRequest]: (DeleteContactFlowRequest & DeleteContactFlowRequest)[K]
    }>): void {
        return this.client.deleteContactFlow(
            this.ops["DeleteContactFlow"].apply(partialParams)
        );
    }

    invokeDeleteContactFlowModule(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowModuleRequest & keyof DeleteContactFlowModuleRequest]: (DeleteContactFlowModuleRequest & DeleteContactFlowModuleRequest)[K]
    }>): DeleteContactFlowModuleResponse {
        return this.client.deleteContactFlowModule(
            this.ops["DeleteContactFlowModule"].apply(partialParams)
        );
    }

    invokeDeleteHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DeleteHoursOfOperationRequest & keyof DeleteHoursOfOperationRequest]: (DeleteHoursOfOperationRequest & DeleteHoursOfOperationRequest)[K]
    }>): void {
        return this.client.deleteHoursOfOperation(
            this.ops["DeleteHoursOfOperation"].apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest & keyof DeleteInstanceRequest]: (DeleteInstanceRequest & DeleteInstanceRequest)[K]
    }>): void {
        return this.client.deleteInstance(
            this.ops["DeleteInstance"].apply(partialParams)
        );
    }

    invokeDeleteIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationAssociationRequest & keyof DeleteIntegrationAssociationRequest]: (DeleteIntegrationAssociationRequest & DeleteIntegrationAssociationRequest)[K]
    }>): void {
        return this.client.deleteIntegrationAssociation(
            this.ops["DeleteIntegrationAssociation"].apply(partialParams)
        );
    }

    invokeDeleteQuickConnect(partialParams: ToOptional<{
      [K in keyof DeleteQuickConnectRequest & keyof DeleteQuickConnectRequest]: (DeleteQuickConnectRequest & DeleteQuickConnectRequest)[K]
    }>): void {
        return this.client.deleteQuickConnect(
            this.ops["DeleteQuickConnect"].apply(partialParams)
        );
    }

    invokeDeleteSecurityProfile(partialParams: ToOptional<{
      [K in keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest]: (DeleteSecurityProfileRequest & DeleteSecurityProfileRequest)[K]
    }>): void {
        return this.client.deleteSecurityProfile(
            this.ops["DeleteSecurityProfile"].apply(partialParams)
        );
    }

    invokeDeleteUseCase(partialParams: ToOptional<{
      [K in keyof DeleteUseCaseRequest & keyof DeleteUseCaseRequest]: (DeleteUseCaseRequest & DeleteUseCaseRequest)[K]
    }>): void {
        return this.client.deleteUseCase(
            this.ops["DeleteUseCase"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest)[K]
    }>): void {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserHierarchyGroupRequest & keyof DeleteUserHierarchyGroupRequest]: (DeleteUserHierarchyGroupRequest & DeleteUserHierarchyGroupRequest)[K]
    }>): void {
        return this.client.deleteUserHierarchyGroup(
            this.ops["DeleteUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeDeleteVocabulary(partialParams: ToOptional<{
      [K in keyof DeleteVocabularyRequest & keyof DeleteVocabularyRequest]: (DeleteVocabularyRequest & DeleteVocabularyRequest)[K]
    }>): DeleteVocabularyResponse {
        return this.client.deleteVocabulary(
            this.ops["DeleteVocabulary"].apply(partialParams)
        );
    }

    invokeDescribeAgentStatus(partialParams: ToOptional<{
      [K in keyof DescribeAgentStatusRequest & keyof DescribeAgentStatusRequest]: (DescribeAgentStatusRequest & DescribeAgentStatusRequest)[K]
    }>): DescribeAgentStatusResponse {
        return this.client.describeAgentStatus(
            this.ops["DescribeAgentStatus"].apply(partialParams)
        );
    }

    invokeDescribeContact(partialParams: ToOptional<{
      [K in keyof DescribeContactRequest & keyof DescribeContactRequest]: (DescribeContactRequest & DescribeContactRequest)[K]
    }>): DescribeContactResponse {
        return this.client.describeContact(
            this.ops["DescribeContact"].apply(partialParams)
        );
    }

    invokeDescribeContactFlow(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowRequest & keyof DescribeContactFlowRequest]: (DescribeContactFlowRequest & DescribeContactFlowRequest)[K]
    }>): DescribeContactFlowResponse {
        return this.client.describeContactFlow(
            this.ops["DescribeContactFlow"].apply(partialParams)
        );
    }

    invokeDescribeContactFlowModule(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowModuleRequest & keyof DescribeContactFlowModuleRequest]: (DescribeContactFlowModuleRequest & DescribeContactFlowModuleRequest)[K]
    }>): DescribeContactFlowModuleResponse {
        return this.client.describeContactFlowModule(
            this.ops["DescribeContactFlowModule"].apply(partialParams)
        );
    }

    invokeDescribeHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DescribeHoursOfOperationRequest & keyof DescribeHoursOfOperationRequest]: (DescribeHoursOfOperationRequest & DescribeHoursOfOperationRequest)[K]
    }>): DescribeHoursOfOperationResponse {
        return this.client.describeHoursOfOperation(
            this.ops["DescribeHoursOfOperation"].apply(partialParams)
        );
    }

    invokeDescribeInstance(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRequest & keyof DescribeInstanceRequest]: (DescribeInstanceRequest & DescribeInstanceRequest)[K]
    }>): DescribeInstanceResponse {
        return this.client.describeInstance(
            this.ops["DescribeInstance"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest)[K]
    }>): DescribeInstanceAttributeResponse {
        return this.client.describeInstanceAttribute(
            this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DescribeInstanceStorageConfigRequest & keyof DescribeInstanceStorageConfigRequest]: (DescribeInstanceStorageConfigRequest & DescribeInstanceStorageConfigRequest)[K]
    }>): DescribeInstanceStorageConfigResponse {
        return this.client.describeInstanceStorageConfig(
            this.ops["DescribeInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeDescribeQueue(partialParams: ToOptional<{
      [K in keyof DescribeQueueRequest & keyof DescribeQueueRequest]: (DescribeQueueRequest & DescribeQueueRequest)[K]
    }>): DescribeQueueResponse {
        return this.client.describeQueue(
            this.ops["DescribeQueue"].apply(partialParams)
        );
    }

    invokeDescribeQuickConnect(partialParams: ToOptional<{
      [K in keyof DescribeQuickConnectRequest & keyof DescribeQuickConnectRequest]: (DescribeQuickConnectRequest & DescribeQuickConnectRequest)[K]
    }>): DescribeQuickConnectResponse {
        return this.client.describeQuickConnect(
            this.ops["DescribeQuickConnect"].apply(partialParams)
        );
    }

    invokeDescribeRoutingProfile(partialParams: ToOptional<{
      [K in keyof DescribeRoutingProfileRequest & keyof DescribeRoutingProfileRequest]: (DescribeRoutingProfileRequest & DescribeRoutingProfileRequest)[K]
    }>): DescribeRoutingProfileResponse {
        return this.client.describeRoutingProfile(
            this.ops["DescribeRoutingProfile"].apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest]: (DescribeSecurityProfileRequest & DescribeSecurityProfileRequest)[K]
    }>): DescribeSecurityProfileResponse {
        return this.client.describeSecurityProfile(
            this.ops["DescribeSecurityProfile"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & DescribeUserRequest)[K]
    }>): DescribeUserResponse {
        return this.client.describeUser(
            this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyGroupRequest & keyof DescribeUserHierarchyGroupRequest]: (DescribeUserHierarchyGroupRequest & DescribeUserHierarchyGroupRequest)[K]
    }>): DescribeUserHierarchyGroupResponse {
        return this.client.describeUserHierarchyGroup(
            this.ops["DescribeUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyStructureRequest & keyof DescribeUserHierarchyStructureRequest]: (DescribeUserHierarchyStructureRequest & DescribeUserHierarchyStructureRequest)[K]
    }>): DescribeUserHierarchyStructureResponse {
        return this.client.describeUserHierarchyStructure(
            this.ops["DescribeUserHierarchyStructure"].apply(partialParams)
        );
    }

    invokeDescribeVocabulary(partialParams: ToOptional<{
      [K in keyof DescribeVocabularyRequest & keyof DescribeVocabularyRequest]: (DescribeVocabularyRequest & DescribeVocabularyRequest)[K]
    }>): DescribeVocabularyResponse {
        return this.client.describeVocabulary(
            this.ops["DescribeVocabulary"].apply(partialParams)
        );
    }

    invokeDisassociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof DisassociateApprovedOriginRequest & keyof DisassociateApprovedOriginRequest]: (DisassociateApprovedOriginRequest & DisassociateApprovedOriginRequest)[K]
    }>): void {
        return this.client.disassociateApprovedOrigin(
            this.ops["DisassociateApprovedOrigin"].apply(partialParams)
        );
    }

    invokeDisassociateBot(partialParams: ToOptional<{
      [K in keyof DisassociateBotRequest & keyof DisassociateBotRequest]: (DisassociateBotRequest & DisassociateBotRequest)[K]
    }>): void {
        return this.client.disassociateBot(
            this.ops["DisassociateBot"].apply(partialParams)
        );
    }

    invokeDisassociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceStorageConfigRequest & keyof DisassociateInstanceStorageConfigRequest]: (DisassociateInstanceStorageConfigRequest & DisassociateInstanceStorageConfigRequest)[K]
    }>): void {
        return this.client.disassociateInstanceStorageConfig(
            this.ops["DisassociateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeDisassociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof DisassociateLambdaFunctionRequest & keyof DisassociateLambdaFunctionRequest]: (DisassociateLambdaFunctionRequest & DisassociateLambdaFunctionRequest)[K]
    }>): void {
        return this.client.disassociateLambdaFunction(
            this.ops["DisassociateLambdaFunction"].apply(partialParams)
        );
    }

    invokeDisassociateLexBot(partialParams: ToOptional<{
      [K in keyof DisassociateLexBotRequest & keyof DisassociateLexBotRequest]: (DisassociateLexBotRequest & DisassociateLexBotRequest)[K]
    }>): void {
        return this.client.disassociateLexBot(
            this.ops["DisassociateLexBot"].apply(partialParams)
        );
    }

    invokeDisassociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof DisassociateQueueQuickConnectsRequest & keyof DisassociateQueueQuickConnectsRequest]: (DisassociateQueueQuickConnectsRequest & DisassociateQueueQuickConnectsRequest)[K]
    }>): void {
        return this.client.disassociateQueueQuickConnects(
            this.ops["DisassociateQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeDisassociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof DisassociateRoutingProfileQueuesRequest & keyof DisassociateRoutingProfileQueuesRequest]: (DisassociateRoutingProfileQueuesRequest & DisassociateRoutingProfileQueuesRequest)[K]
    }>): void {
        return this.client.disassociateRoutingProfileQueues(
            this.ops["DisassociateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeDisassociateSecurityKey(partialParams: ToOptional<{
      [K in keyof DisassociateSecurityKeyRequest & keyof DisassociateSecurityKeyRequest]: (DisassociateSecurityKeyRequest & DisassociateSecurityKeyRequest)[K]
    }>): void {
        return this.client.disassociateSecurityKey(
            this.ops["DisassociateSecurityKey"].apply(partialParams)
        );
    }

    invokeGetContactAttributes(partialParams: ToOptional<{
      [K in keyof GetContactAttributesRequest & keyof GetContactAttributesRequest]: (GetContactAttributesRequest & GetContactAttributesRequest)[K]
    }>): GetContactAttributesResponse {
        return this.client.getContactAttributes(
            this.ops["GetContactAttributes"].apply(partialParams)
        );
    }

    invokeGetCurrentMetricData(partialParams: ToOptional<{
      [K in keyof GetCurrentMetricDataRequest & keyof GetCurrentMetricDataRequest]: (GetCurrentMetricDataRequest & GetCurrentMetricDataRequest)[K]
    }>): GetCurrentMetricDataResponse {
        return this.client.getCurrentMetricData(
            this.ops["GetCurrentMetricData"].apply(partialParams)
        );
    }

    invokeGetFederationToken(partialParams: ToOptional<{
      [K in keyof GetFederationTokenRequest & keyof GetFederationTokenRequest]: (GetFederationTokenRequest & GetFederationTokenRequest)[K]
    }>): GetFederationTokenResponse {
        return this.client.getFederationToken(
            this.ops["GetFederationToken"].apply(partialParams)
        );
    }

    invokeGetMetricData(partialParams: ToOptional<{
      [K in keyof GetMetricDataRequest & keyof GetMetricDataRequest]: (GetMetricDataRequest & GetMetricDataRequest)[K]
    }>): GetMetricDataResponse {
        return this.client.getMetricData(
            this.ops["GetMetricData"].apply(partialParams)
        );
    }

    invokeListAgentStatuses(partialParams: ToOptional<{
      [K in keyof ListAgentStatusRequest & keyof Omit<ListAgentStatusRequest, "InstanceId">]: (ListAgentStatusRequest & Omit<ListAgentStatusRequest, "InstanceId">)[K]
    }>): ListAgentStatusResponse {
        return this.client.listAgentStatuses(
            this.ops["ListAgentStatuses"].apply(partialParams)
        );
    }

    invokeListApprovedOrigins(partialParams: ToOptional<{
      [K in keyof ListApprovedOriginsRequest & keyof Omit<ListApprovedOriginsRequest, "InstanceId">]: (ListApprovedOriginsRequest & Omit<ListApprovedOriginsRequest, "InstanceId">)[K]
    }>): ListApprovedOriginsResponse {
        return this.client.listApprovedOrigins(
            this.ops["ListApprovedOrigins"].apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest & keyof Omit<ListBotsRequest, "InstanceId">]: (ListBotsRequest & Omit<ListBotsRequest, "InstanceId">)[K]
    }>): ListBotsResponse {
        return this.client.listBots(
            this.ops["ListBots"].apply(partialParams)
        );
    }

    invokeListContactFlowModules(partialParams: ToOptional<{
      [K in keyof ListContactFlowModulesRequest & keyof Omit<ListContactFlowModulesRequest, "InstanceId">]: (ListContactFlowModulesRequest & Omit<ListContactFlowModulesRequest, "InstanceId">)[K]
    }>): ListContactFlowModulesResponse {
        return this.client.listContactFlowModules(
            this.ops["ListContactFlowModules"].apply(partialParams)
        );
    }

    invokeListContactFlows(partialParams: ToOptional<{
      [K in keyof ListContactFlowsRequest & keyof Omit<ListContactFlowsRequest, "InstanceId">]: (ListContactFlowsRequest & Omit<ListContactFlowsRequest, "InstanceId">)[K]
    }>): ListContactFlowsResponse {
        return this.client.listContactFlows(
            this.ops["ListContactFlows"].apply(partialParams)
        );
    }

    invokeListContactReferences(partialParams: ToOptional<{
      [K in keyof ListContactReferencesRequest & keyof Omit<ListContactReferencesRequest, "InstanceId">]: (ListContactReferencesRequest & Omit<ListContactReferencesRequest, "InstanceId">)[K]
    }>): ListContactReferencesResponse {
        return this.client.listContactReferences(
            this.ops["ListContactReferences"].apply(partialParams)
        );
    }

    invokeListDefaultVocabularies(partialParams: ToOptional<{
      [K in keyof ListDefaultVocabulariesRequest & keyof Omit<ListDefaultVocabulariesRequest, "InstanceId">]: (ListDefaultVocabulariesRequest & Omit<ListDefaultVocabulariesRequest, "InstanceId">)[K]
    }>): ListDefaultVocabulariesResponse {
        return this.client.listDefaultVocabularies(
            this.ops["ListDefaultVocabularies"].apply(partialParams)
        );
    }

    invokeListHoursOfOperations(partialParams: ToOptional<{
      [K in keyof ListHoursOfOperationsRequest & keyof Omit<ListHoursOfOperationsRequest, "InstanceId">]: (ListHoursOfOperationsRequest & Omit<ListHoursOfOperationsRequest, "InstanceId">)[K]
    }>): ListHoursOfOperationsResponse {
        return this.client.listHoursOfOperations(
            this.ops["ListHoursOfOperations"].apply(partialParams)
        );
    }

    invokeListInstanceAttributes(partialParams: ToOptional<{
      [K in keyof ListInstanceAttributesRequest & keyof Omit<ListInstanceAttributesRequest, "InstanceId">]: (ListInstanceAttributesRequest & Omit<ListInstanceAttributesRequest, "InstanceId">)[K]
    }>): ListInstanceAttributesResponse {
        return this.client.listInstanceAttributes(
            this.ops["ListInstanceAttributes"].apply(partialParams)
        );
    }

    invokeListInstanceStorageConfigs(partialParams: ToOptional<{
      [K in keyof ListInstanceStorageConfigsRequest & keyof Omit<ListInstanceStorageConfigsRequest, "InstanceId">]: (ListInstanceStorageConfigsRequest & Omit<ListInstanceStorageConfigsRequest, "InstanceId">)[K]
    }>): ListInstanceStorageConfigsResponse {
        return this.client.listInstanceStorageConfigs(
            this.ops["ListInstanceStorageConfigs"].apply(partialParams)
        );
    }

    invokeListIntegrationAssociations(partialParams: ToOptional<{
      [K in keyof ListIntegrationAssociationsRequest & keyof Omit<ListIntegrationAssociationsRequest, "InstanceId">]: (ListIntegrationAssociationsRequest & Omit<ListIntegrationAssociationsRequest, "InstanceId">)[K]
    }>): ListIntegrationAssociationsResponse {
        return this.client.listIntegrationAssociations(
            this.ops["ListIntegrationAssociations"].apply(partialParams)
        );
    }

    invokeListLambdaFunctions(partialParams: ToOptional<{
      [K in keyof ListLambdaFunctionsRequest & keyof Omit<ListLambdaFunctionsRequest, "InstanceId">]: (ListLambdaFunctionsRequest & Omit<ListLambdaFunctionsRequest, "InstanceId">)[K]
    }>): ListLambdaFunctionsResponse {
        return this.client.listLambdaFunctions(
            this.ops["ListLambdaFunctions"].apply(partialParams)
        );
    }

    invokeListLexBots(partialParams: ToOptional<{
      [K in keyof ListLexBotsRequest & keyof Omit<ListLexBotsRequest, "InstanceId">]: (ListLexBotsRequest & Omit<ListLexBotsRequest, "InstanceId">)[K]
    }>): ListLexBotsResponse {
        return this.client.listLexBots(
            this.ops["ListLexBots"].apply(partialParams)
        );
    }

    invokeListPhoneNumbers(partialParams: ToOptional<{
      [K in keyof ListPhoneNumbersRequest & keyof Omit<ListPhoneNumbersRequest, "InstanceId">]: (ListPhoneNumbersRequest & Omit<ListPhoneNumbersRequest, "InstanceId">)[K]
    }>): ListPhoneNumbersResponse {
        return this.client.listPhoneNumbers(
            this.ops["ListPhoneNumbers"].apply(partialParams)
        );
    }

    invokeListPrompts(partialParams: ToOptional<{
      [K in keyof ListPromptsRequest & keyof Omit<ListPromptsRequest, "InstanceId">]: (ListPromptsRequest & Omit<ListPromptsRequest, "InstanceId">)[K]
    }>): ListPromptsResponse {
        return this.client.listPrompts(
            this.ops["ListPrompts"].apply(partialParams)
        );
    }

    invokeListQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof ListQueueQuickConnectsRequest & keyof Omit<ListQueueQuickConnectsRequest, "InstanceId">]: (ListQueueQuickConnectsRequest & Omit<ListQueueQuickConnectsRequest, "InstanceId">)[K]
    }>): ListQueueQuickConnectsResponse {
        return this.client.listQueueQuickConnects(
            this.ops["ListQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeListQueues(partialParams: ToOptional<{
      [K in keyof ListQueuesRequest & keyof Omit<ListQueuesRequest, "InstanceId">]: (ListQueuesRequest & Omit<ListQueuesRequest, "InstanceId">)[K]
    }>): ListQueuesResponse {
        return this.client.listQueues(
            this.ops["ListQueues"].apply(partialParams)
        );
    }

    invokeListQuickConnects(partialParams: ToOptional<{
      [K in keyof ListQuickConnectsRequest & keyof Omit<ListQuickConnectsRequest, "InstanceId">]: (ListQuickConnectsRequest & Omit<ListQuickConnectsRequest, "InstanceId">)[K]
    }>): ListQuickConnectsResponse {
        return this.client.listQuickConnects(
            this.ops["ListQuickConnects"].apply(partialParams)
        );
    }

    invokeListRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof ListRoutingProfileQueuesRequest & keyof Omit<ListRoutingProfileQueuesRequest, "InstanceId">]: (ListRoutingProfileQueuesRequest & Omit<ListRoutingProfileQueuesRequest, "InstanceId">)[K]
    }>): ListRoutingProfileQueuesResponse {
        return this.client.listRoutingProfileQueues(
            this.ops["ListRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeListRoutingProfiles(partialParams: ToOptional<{
      [K in keyof ListRoutingProfilesRequest & keyof Omit<ListRoutingProfilesRequest, "InstanceId">]: (ListRoutingProfilesRequest & Omit<ListRoutingProfilesRequest, "InstanceId">)[K]
    }>): ListRoutingProfilesResponse {
        return this.client.listRoutingProfiles(
            this.ops["ListRoutingProfiles"].apply(partialParams)
        );
    }

    invokeListSecurityKeys(partialParams: ToOptional<{
      [K in keyof ListSecurityKeysRequest & keyof Omit<ListSecurityKeysRequest, "InstanceId">]: (ListSecurityKeysRequest & Omit<ListSecurityKeysRequest, "InstanceId">)[K]
    }>): ListSecurityKeysResponse {
        return this.client.listSecurityKeys(
            this.ops["ListSecurityKeys"].apply(partialParams)
        );
    }

    invokeListSecurityProfilePermissions(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilePermissionsRequest & keyof Omit<ListSecurityProfilePermissionsRequest, "InstanceId">]: (ListSecurityProfilePermissionsRequest & Omit<ListSecurityProfilePermissionsRequest, "InstanceId">)[K]
    }>): ListSecurityProfilePermissionsResponse {
        return this.client.listSecurityProfilePermissions(
            this.ops["ListSecurityProfilePermissions"].apply(partialParams)
        );
    }

    invokeListSecurityProfiles(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilesRequest & keyof Omit<ListSecurityProfilesRequest, "InstanceId">]: (ListSecurityProfilesRequest & Omit<ListSecurityProfilesRequest, "InstanceId">)[K]
    }>): ListSecurityProfilesResponse {
        return this.client.listSecurityProfiles(
            this.ops["ListSecurityProfiles"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListUseCases(partialParams: ToOptional<{
      [K in keyof ListUseCasesRequest & keyof Omit<ListUseCasesRequest, "InstanceId">]: (ListUseCasesRequest & Omit<ListUseCasesRequest, "InstanceId">)[K]
    }>): ListUseCasesResponse {
        return this.client.listUseCases(
            this.ops["ListUseCases"].apply(partialParams)
        );
    }

    invokeListUserHierarchyGroups(partialParams: ToOptional<{
      [K in keyof ListUserHierarchyGroupsRequest & keyof Omit<ListUserHierarchyGroupsRequest, "InstanceId">]: (ListUserHierarchyGroupsRequest & Omit<ListUserHierarchyGroupsRequest, "InstanceId">)[K]
    }>): ListUserHierarchyGroupsResponse {
        return this.client.listUserHierarchyGroups(
            this.ops["ListUserHierarchyGroups"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof Omit<ListUsersRequest, "InstanceId">]: (ListUsersRequest & Omit<ListUsersRequest, "InstanceId">)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeResumeContactRecording(partialParams: ToOptional<{
      [K in keyof ResumeContactRecordingRequest & keyof Omit<ResumeContactRecordingRequest, "InstanceId">]: (ResumeContactRecordingRequest & Omit<ResumeContactRecordingRequest, "InstanceId">)[K]
    }>): ResumeContactRecordingResponse {
        return this.client.resumeContactRecording(
            this.ops["ResumeContactRecording"].apply(partialParams)
        );
    }

    invokeSearchVocabularies(partialParams: ToOptional<{
      [K in keyof SearchVocabulariesRequest & keyof Omit<SearchVocabulariesRequest, "InstanceId">]: (SearchVocabulariesRequest & Omit<SearchVocabulariesRequest, "InstanceId">)[K]
    }>): SearchVocabulariesResponse {
        return this.client.searchVocabularies(
            this.ops["SearchVocabularies"].apply(partialParams)
        );
    }

    invokeStartChatContact(partialParams: ToOptional<{
      [K in keyof StartChatContactRequest & keyof Omit<StartChatContactRequest, "InstanceId">]: (StartChatContactRequest & Omit<StartChatContactRequest, "InstanceId">)[K]
    }>): StartChatContactResponse {
        return this.client.startChatContact(
            this.ops["StartChatContact"].apply(partialParams)
        );
    }

    invokeStartContactRecording(partialParams: ToOptional<{
      [K in keyof StartContactRecordingRequest & keyof Omit<StartContactRecordingRequest, "InstanceId">]: (StartContactRecordingRequest & Omit<StartContactRecordingRequest, "InstanceId">)[K]
    }>): StartContactRecordingResponse {
        return this.client.startContactRecording(
            this.ops["StartContactRecording"].apply(partialParams)
        );
    }

    invokeStartContactStreaming(partialParams: ToOptional<{
      [K in keyof StartContactStreamingRequest & keyof Omit<StartContactStreamingRequest, "InstanceId">]: (StartContactStreamingRequest & Omit<StartContactStreamingRequest, "InstanceId">)[K]
    }>): StartContactStreamingResponse {
        return this.client.startContactStreaming(
            this.ops["StartContactStreaming"].apply(partialParams)
        );
    }

    invokeStartOutboundVoiceContact(partialParams: ToOptional<{
      [K in keyof StartOutboundVoiceContactRequest & keyof Omit<StartOutboundVoiceContactRequest, "InstanceId">]: (StartOutboundVoiceContactRequest & Omit<StartOutboundVoiceContactRequest, "InstanceId">)[K]
    }>): StartOutboundVoiceContactResponse {
        return this.client.startOutboundVoiceContact(
            this.ops["StartOutboundVoiceContact"].apply(partialParams)
        );
    }

    invokeStartTaskContact(partialParams: ToOptional<{
      [K in keyof StartTaskContactRequest & keyof Omit<StartTaskContactRequest, "InstanceId">]: (StartTaskContactRequest & Omit<StartTaskContactRequest, "InstanceId">)[K]
    }>): StartTaskContactResponse {
        return this.client.startTaskContact(
            this.ops["StartTaskContact"].apply(partialParams)
        );
    }

    invokeStopContact(partialParams: ToOptional<{
      [K in keyof StopContactRequest & keyof Omit<StopContactRequest, "InstanceId">]: (StopContactRequest & Omit<StopContactRequest, "InstanceId">)[K]
    }>): StopContactResponse {
        return this.client.stopContact(
            this.ops["StopContact"].apply(partialParams)
        );
    }

    invokeStopContactRecording(partialParams: ToOptional<{
      [K in keyof StopContactRecordingRequest & keyof Omit<StopContactRecordingRequest, "InstanceId">]: (StopContactRecordingRequest & Omit<StopContactRecordingRequest, "InstanceId">)[K]
    }>): StopContactRecordingResponse {
        return this.client.stopContactRecording(
            this.ops["StopContactRecording"].apply(partialParams)
        );
    }

    invokeStopContactStreaming(partialParams: ToOptional<{
      [K in keyof StopContactStreamingRequest & keyof Omit<StopContactStreamingRequest, "InstanceId">]: (StopContactStreamingRequest & Omit<StopContactStreamingRequest, "InstanceId">)[K]
    }>): StopContactStreamingResponse {
        return this.client.stopContactStreaming(
            this.ops["StopContactStreaming"].apply(partialParams)
        );
    }

    invokeSuspendContactRecording(partialParams: ToOptional<{
      [K in keyof SuspendContactRecordingRequest & keyof Omit<SuspendContactRecordingRequest, "InstanceId">]: (SuspendContactRecordingRequest & Omit<SuspendContactRecordingRequest, "InstanceId">)[K]
    }>): SuspendContactRecordingResponse {
        return this.client.suspendContactRecording(
            this.ops["SuspendContactRecording"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAgentStatus(partialParams: ToOptional<{
      [K in keyof UpdateAgentStatusRequest & keyof Omit<UpdateAgentStatusRequest, "InstanceId">]: (UpdateAgentStatusRequest & Omit<UpdateAgentStatusRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateAgentStatus(
            this.ops["UpdateAgentStatus"].apply(partialParams)
        );
    }

    invokeUpdateContact(partialParams: ToOptional<{
      [K in keyof UpdateContactRequest & keyof Omit<UpdateContactRequest, "InstanceId">]: (UpdateContactRequest & Omit<UpdateContactRequest, "InstanceId">)[K]
    }>): UpdateContactResponse {
        return this.client.updateContact(
            this.ops["UpdateContact"].apply(partialParams)
        );
    }

    invokeUpdateContactAttributes(partialParams: ToOptional<{
      [K in keyof UpdateContactAttributesRequest & keyof Omit<UpdateContactAttributesRequest, "InstanceId">]: (UpdateContactAttributesRequest & Omit<UpdateContactAttributesRequest, "InstanceId">)[K]
    }>): UpdateContactAttributesResponse {
        return this.client.updateContactAttributes(
            this.ops["UpdateContactAttributes"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowContent(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowContentRequest & keyof Omit<UpdateContactFlowContentRequest, "InstanceId">]: (UpdateContactFlowContentRequest & Omit<UpdateContactFlowContentRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateContactFlowContent(
            this.ops["UpdateContactFlowContent"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowMetadata(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowMetadataRequest & keyof Omit<UpdateContactFlowMetadataRequest, "InstanceId">]: (UpdateContactFlowMetadataRequest & Omit<UpdateContactFlowMetadataRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateContactFlowMetadata(
            this.ops["UpdateContactFlowMetadata"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleContent(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowModuleContentRequest & keyof Omit<UpdateContactFlowModuleContentRequest, "InstanceId">]: (UpdateContactFlowModuleContentRequest & Omit<UpdateContactFlowModuleContentRequest, "InstanceId">)[K]
    }>): UpdateContactFlowModuleContentResponse {
        return this.client.updateContactFlowModuleContent(
            this.ops["UpdateContactFlowModuleContent"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleMetadata(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowModuleMetadataRequest & keyof Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId">]: (UpdateContactFlowModuleMetadataRequest & Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId">)[K]
    }>): UpdateContactFlowModuleMetadataResponse {
        return this.client.updateContactFlowModuleMetadata(
            this.ops["UpdateContactFlowModuleMetadata"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowName(partialParams: ToOptional<{
      [K in keyof UpdateContactFlowNameRequest & keyof Omit<UpdateContactFlowNameRequest, "InstanceId">]: (UpdateContactFlowNameRequest & Omit<UpdateContactFlowNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateContactFlowName(
            this.ops["UpdateContactFlowName"].apply(partialParams)
        );
    }

    invokeUpdateContactSchedule(partialParams: ToOptional<{
      [K in keyof UpdateContactScheduleRequest & keyof Omit<UpdateContactScheduleRequest, "InstanceId">]: (UpdateContactScheduleRequest & Omit<UpdateContactScheduleRequest, "InstanceId">)[K]
    }>): UpdateContactScheduleResponse {
        return this.client.updateContactSchedule(
            this.ops["UpdateContactSchedule"].apply(partialParams)
        );
    }

    invokeUpdateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof UpdateHoursOfOperationRequest & keyof Omit<UpdateHoursOfOperationRequest, "InstanceId">]: (UpdateHoursOfOperationRequest & Omit<UpdateHoursOfOperationRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateHoursOfOperation(
            this.ops["UpdateHoursOfOperation"].apply(partialParams)
        );
    }

    invokeUpdateInstanceAttribute(partialParams: ToOptional<{
      [K in keyof UpdateInstanceAttributeRequest & keyof Omit<UpdateInstanceAttributeRequest, "InstanceId">]: (UpdateInstanceAttributeRequest & Omit<UpdateInstanceAttributeRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateInstanceAttribute(
            this.ops["UpdateInstanceAttribute"].apply(partialParams)
        );
    }

    invokeUpdateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof UpdateInstanceStorageConfigRequest & keyof Omit<UpdateInstanceStorageConfigRequest, "InstanceId">]: (UpdateInstanceStorageConfigRequest & Omit<UpdateInstanceStorageConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateInstanceStorageConfig(
            this.ops["UpdateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeUpdateQueueHoursOfOperation(partialParams: ToOptional<{
      [K in keyof UpdateQueueHoursOfOperationRequest & keyof Omit<UpdateQueueHoursOfOperationRequest, "InstanceId">]: (UpdateQueueHoursOfOperationRequest & Omit<UpdateQueueHoursOfOperationRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueHoursOfOperation(
            this.ops["UpdateQueueHoursOfOperation"].apply(partialParams)
        );
    }

    invokeUpdateQueueMaxContacts(partialParams: ToOptional<{
      [K in keyof UpdateQueueMaxContactsRequest & keyof Omit<UpdateQueueMaxContactsRequest, "InstanceId">]: (UpdateQueueMaxContactsRequest & Omit<UpdateQueueMaxContactsRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueMaxContacts(
            this.ops["UpdateQueueMaxContacts"].apply(partialParams)
        );
    }

    invokeUpdateQueueName(partialParams: ToOptional<{
      [K in keyof UpdateQueueNameRequest & keyof Omit<UpdateQueueNameRequest, "InstanceId">]: (UpdateQueueNameRequest & Omit<UpdateQueueNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueName(
            this.ops["UpdateQueueName"].apply(partialParams)
        );
    }

    invokeUpdateQueueOutboundCallerConfig(partialParams: ToOptional<{
      [K in keyof UpdateQueueOutboundCallerConfigRequest & keyof Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId">]: (UpdateQueueOutboundCallerConfigRequest & Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueOutboundCallerConfig(
            this.ops["UpdateQueueOutboundCallerConfig"].apply(partialParams)
        );
    }

    invokeUpdateQueueStatus(partialParams: ToOptional<{
      [K in keyof UpdateQueueStatusRequest & keyof Omit<UpdateQueueStatusRequest, "InstanceId">]: (UpdateQueueStatusRequest & Omit<UpdateQueueStatusRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueStatus(
            this.ops["UpdateQueueStatus"].apply(partialParams)
        );
    }

    invokeUpdateQuickConnectConfig(partialParams: ToOptional<{
      [K in keyof UpdateQuickConnectConfigRequest & keyof Omit<UpdateQuickConnectConfigRequest, "InstanceId">]: (UpdateQuickConnectConfigRequest & Omit<UpdateQuickConnectConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQuickConnectConfig(
            this.ops["UpdateQuickConnectConfig"].apply(partialParams)
        );
    }

    invokeUpdateQuickConnectName(partialParams: ToOptional<{
      [K in keyof UpdateQuickConnectNameRequest & keyof Omit<UpdateQuickConnectNameRequest, "InstanceId">]: (UpdateQuickConnectNameRequest & Omit<UpdateQuickConnectNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQuickConnectName(
            this.ops["UpdateQuickConnectName"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileConcurrency(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileConcurrencyRequest & keyof Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId">]: (UpdateRoutingProfileConcurrencyRequest & Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileConcurrency(
            this.ops["UpdateRoutingProfileConcurrency"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileDefaultOutboundQueue(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileDefaultOutboundQueueRequest & keyof Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId">]: (UpdateRoutingProfileDefaultOutboundQueueRequest & Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileDefaultOutboundQueue(
            this.ops["UpdateRoutingProfileDefaultOutboundQueue"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileName(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileNameRequest & keyof Omit<UpdateRoutingProfileNameRequest, "InstanceId">]: (UpdateRoutingProfileNameRequest & Omit<UpdateRoutingProfileNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileName(
            this.ops["UpdateRoutingProfileName"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof UpdateRoutingProfileQueuesRequest & keyof Omit<UpdateRoutingProfileQueuesRequest, "InstanceId">]: (UpdateRoutingProfileQueuesRequest & Omit<UpdateRoutingProfileQueuesRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileQueues(
            this.ops["UpdateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeUpdateSecurityProfile(partialParams: ToOptional<{
      [K in keyof UpdateSecurityProfileRequest & keyof Omit<UpdateSecurityProfileRequest, "InstanceId">]: (UpdateSecurityProfileRequest & Omit<UpdateSecurityProfileRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateSecurityProfile(
            this.ops["UpdateSecurityProfile"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchy(partialParams: ToOptional<{
      [K in keyof UpdateUserHierarchyRequest & keyof Omit<UpdateUserHierarchyRequest, "InstanceId">]: (UpdateUserHierarchyRequest & Omit<UpdateUserHierarchyRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserHierarchy(
            this.ops["UpdateUserHierarchy"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyGroupName(partialParams: ToOptional<{
      [K in keyof UpdateUserHierarchyGroupNameRequest & keyof Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId">]: (UpdateUserHierarchyGroupNameRequest & Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserHierarchyGroupName(
            this.ops["UpdateUserHierarchyGroupName"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof UpdateUserHierarchyStructureRequest & keyof Omit<UpdateUserHierarchyStructureRequest, "InstanceId">]: (UpdateUserHierarchyStructureRequest & Omit<UpdateUserHierarchyStructureRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserHierarchyStructure(
            this.ops["UpdateUserHierarchyStructure"].apply(partialParams)
        );
    }

    invokeUpdateUserIdentityInfo(partialParams: ToOptional<{
      [K in keyof UpdateUserIdentityInfoRequest & keyof Omit<UpdateUserIdentityInfoRequest, "InstanceId">]: (UpdateUserIdentityInfoRequest & Omit<UpdateUserIdentityInfoRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserIdentityInfo(
            this.ops["UpdateUserIdentityInfo"].apply(partialParams)
        );
    }

    invokeUpdateUserPhoneConfig(partialParams: ToOptional<{
      [K in keyof UpdateUserPhoneConfigRequest & keyof Omit<UpdateUserPhoneConfigRequest, "InstanceId">]: (UpdateUserPhoneConfigRequest & Omit<UpdateUserPhoneConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserPhoneConfig(
            this.ops["UpdateUserPhoneConfig"].apply(partialParams)
        );
    }

    invokeUpdateUserRoutingProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserRoutingProfileRequest & keyof Omit<UpdateUserRoutingProfileRequest, "InstanceId">]: (UpdateUserRoutingProfileRequest & Omit<UpdateUserRoutingProfileRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserRoutingProfile(
            this.ops["UpdateUserRoutingProfile"].apply(partialParams)
        );
    }

    invokeUpdateUserSecurityProfiles(partialParams: ToOptional<{
      [K in keyof UpdateUserSecurityProfilesRequest & keyof Omit<UpdateUserSecurityProfilesRequest, "InstanceId">]: (UpdateUserSecurityProfilesRequest & Omit<UpdateUserSecurityProfilesRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserSecurityProfiles(
            this.ops["UpdateUserSecurityProfiles"].apply(partialParams)
        );
    }
}