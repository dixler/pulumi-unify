
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

export default class extends aws.connect.BotAssociation {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.connect.BotAssociation>) {
        super(...args)
        this.client = new awssdk.Connect()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/connect-2017-08-08.normal.json"), this.client)
    }

    invokeAssociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof AssociateApprovedOriginRequest]: (AssociateApprovedOriginRequest)[K]
    }>): void {
        return this.client.associateApprovedOrigin(
            this.ops["AssociateApprovedOrigin"].apply(partialParams)
        );
    }

    invokeAssociateBot(partialParams: ToOptional<{
      [K in keyof AssociateBotRequest]: (AssociateBotRequest)[K]
    }>): void {
        return this.client.associateBot(
            this.ops["AssociateBot"].apply(partialParams)
        );
    }

    invokeAssociateDefaultVocabulary(partialParams: ToOptional<{
      [K in keyof AssociateDefaultVocabularyRequest]: (AssociateDefaultVocabularyRequest)[K]
    }>): AssociateDefaultVocabularyResponse {
        return this.client.associateDefaultVocabulary(
            this.ops["AssociateDefaultVocabulary"].apply(partialParams)
        );
    }

    invokeAssociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof AssociateInstanceStorageConfigRequest]: (AssociateInstanceStorageConfigRequest)[K]
    }>): AssociateInstanceStorageConfigResponse {
        return this.client.associateInstanceStorageConfig(
            this.ops["AssociateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeAssociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof AssociateLambdaFunctionRequest]: (AssociateLambdaFunctionRequest)[K]
    }>): void {
        return this.client.associateLambdaFunction(
            this.ops["AssociateLambdaFunction"].apply(partialParams)
        );
    }

    invokeAssociateLexBot(partialParams: ToOptional<{
      [K in keyof AssociateLexBotRequest]: (AssociateLexBotRequest)[K]
    }>): void {
        return this.client.associateLexBot(
            this.ops["AssociateLexBot"].apply(partialParams)
        );
    }

    invokeAssociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof AssociateQueueQuickConnectsRequest]: (AssociateQueueQuickConnectsRequest)[K]
    }>): void {
        return this.client.associateQueueQuickConnects(
            this.ops["AssociateQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeAssociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof AssociateRoutingProfileQueuesRequest]: (AssociateRoutingProfileQueuesRequest)[K]
    }>): void {
        return this.client.associateRoutingProfileQueues(
            this.ops["AssociateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeAssociateSecurityKey(partialParams: ToOptional<{
      [K in keyof AssociateSecurityKeyRequest]: (AssociateSecurityKeyRequest)[K]
    }>): AssociateSecurityKeyResponse {
        return this.client.associateSecurityKey(
            this.ops["AssociateSecurityKey"].apply(partialParams)
        );
    }

    invokeCreateAgentStatus(partialParams: ToOptional<{
      [K in keyof CreateAgentStatusRequest]: (CreateAgentStatusRequest)[K]
    }>): CreateAgentStatusResponse {
        return this.client.createAgentStatus(
            this.ops["CreateAgentStatus"].apply(partialParams)
        );
    }

    invokeCreateContactFlow(partialParams: ToOptional<{
      [K in keyof CreateContactFlowRequest]: (CreateContactFlowRequest)[K]
    }>): CreateContactFlowResponse {
        return this.client.createContactFlow(
            this.ops["CreateContactFlow"].apply(partialParams)
        );
    }

    invokeCreateContactFlowModule(partialParams: ToOptional<{
      [K in keyof CreateContactFlowModuleRequest]: (CreateContactFlowModuleRequest)[K]
    }>): CreateContactFlowModuleResponse {
        return this.client.createContactFlowModule(
            this.ops["CreateContactFlowModule"].apply(partialParams)
        );
    }

    invokeCreateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof CreateHoursOfOperationRequest]: (CreateHoursOfOperationRequest)[K]
    }>): CreateHoursOfOperationResponse {
        return this.client.createHoursOfOperation(
            this.ops["CreateHoursOfOperation"].apply(partialParams)
        );
    }

    invokeCreateInstance(partialParams: ToOptional<{
      [K in keyof CreateInstanceRequest]: (CreateInstanceRequest)[K]
    }>): CreateInstanceResponse {
        return this.client.createInstance(
            this.ops["CreateInstance"].apply(partialParams)
        );
    }

    invokeCreateIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof CreateIntegrationAssociationRequest]: (CreateIntegrationAssociationRequest)[K]
    }>): CreateIntegrationAssociationResponse {
        return this.client.createIntegrationAssociation(
            this.ops["CreateIntegrationAssociation"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest]: (CreateQueueRequest)[K]
    }>): CreateQueueResponse {
        return this.client.createQueue(
            this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeCreateQuickConnect(partialParams: ToOptional<{
      [K in keyof CreateQuickConnectRequest]: (CreateQuickConnectRequest)[K]
    }>): CreateQuickConnectResponse {
        return this.client.createQuickConnect(
            this.ops["CreateQuickConnect"].apply(partialParams)
        );
    }

    invokeCreateRoutingProfile(partialParams: ToOptional<{
      [K in keyof CreateRoutingProfileRequest]: (CreateRoutingProfileRequest)[K]
    }>): CreateRoutingProfileResponse {
        return this.client.createRoutingProfile(
            this.ops["CreateRoutingProfile"].apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest]: (CreateSecurityProfileRequest)[K]
    }>): CreateSecurityProfileResponse {
        return this.client.createSecurityProfile(
            this.ops["CreateSecurityProfile"].apply(partialParams)
        );
    }

    invokeCreateUseCase(partialParams: ToOptional<{
      [K in keyof CreateUseCaseRequest]: (CreateUseCaseRequest)[K]
    }>): CreateUseCaseResponse {
        return this.client.createUseCase(
            this.ops["CreateUseCase"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof CreateUserHierarchyGroupRequest]: (CreateUserHierarchyGroupRequest)[K]
    }>): CreateUserHierarchyGroupResponse {
        return this.client.createUserHierarchyGroup(
            this.ops["CreateUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeCreateVocabulary(partialParams: ToOptional<{
      [K in keyof CreateVocabularyRequest]: (CreateVocabularyRequest)[K]
    }>): CreateVocabularyResponse {
        return this.client.createVocabulary(
            this.ops["CreateVocabulary"].apply(partialParams)
        );
    }

    invokeDeleteContactFlow(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowRequest]: (DeleteContactFlowRequest)[K]
    }>): void {
        return this.client.deleteContactFlow(
            this.ops["DeleteContactFlow"].apply(partialParams)
        );
    }

    invokeDeleteContactFlowModule(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowModuleRequest]: (DeleteContactFlowModuleRequest)[K]
    }>): DeleteContactFlowModuleResponse {
        return this.client.deleteContactFlowModule(
            this.ops["DeleteContactFlowModule"].apply(partialParams)
        );
    }

    invokeDeleteHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DeleteHoursOfOperationRequest]: (DeleteHoursOfOperationRequest)[K]
    }>): void {
        return this.client.deleteHoursOfOperation(
            this.ops["DeleteHoursOfOperation"].apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest]: (DeleteInstanceRequest)[K]
    }>): void {
        return this.client.deleteInstance(
            this.ops["DeleteInstance"].apply(partialParams)
        );
    }

    invokeDeleteIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationAssociationRequest]: (DeleteIntegrationAssociationRequest)[K]
    }>): void {
        return this.client.deleteIntegrationAssociation(
            this.ops["DeleteIntegrationAssociation"].apply(partialParams)
        );
    }

    invokeDeleteQuickConnect(partialParams: ToOptional<{
      [K in keyof DeleteQuickConnectRequest]: (DeleteQuickConnectRequest)[K]
    }>): void {
        return this.client.deleteQuickConnect(
            this.ops["DeleteQuickConnect"].apply(partialParams)
        );
    }

    invokeDeleteSecurityProfile(partialParams: ToOptional<{
      [K in keyof DeleteSecurityProfileRequest]: (DeleteSecurityProfileRequest)[K]
    }>): void {
        return this.client.deleteSecurityProfile(
            this.ops["DeleteSecurityProfile"].apply(partialParams)
        );
    }

    invokeDeleteUseCase(partialParams: ToOptional<{
      [K in keyof DeleteUseCaseRequest]: (DeleteUseCaseRequest)[K]
    }>): void {
        return this.client.deleteUseCase(
            this.ops["DeleteUseCase"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest]: (DeleteUserRequest)[K]
    }>): void {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserHierarchyGroupRequest]: (DeleteUserHierarchyGroupRequest)[K]
    }>): void {
        return this.client.deleteUserHierarchyGroup(
            this.ops["DeleteUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeDeleteVocabulary(partialParams: ToOptional<{
      [K in keyof DeleteVocabularyRequest]: (DeleteVocabularyRequest)[K]
    }>): DeleteVocabularyResponse {
        return this.client.deleteVocabulary(
            this.ops["DeleteVocabulary"].apply(partialParams)
        );
    }

    invokeDescribeAgentStatus(partialParams: ToOptional<{
      [K in keyof DescribeAgentStatusRequest]: (DescribeAgentStatusRequest)[K]
    }>): DescribeAgentStatusResponse {
        return this.client.describeAgentStatus(
            this.ops["DescribeAgentStatus"].apply(partialParams)
        );
    }

    invokeDescribeContact(partialParams: ToOptional<{
      [K in keyof DescribeContactRequest]: (DescribeContactRequest)[K]
    }>): DescribeContactResponse {
        return this.client.describeContact(
            this.ops["DescribeContact"].apply(partialParams)
        );
    }

    invokeDescribeContactFlow(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowRequest]: (DescribeContactFlowRequest)[K]
    }>): DescribeContactFlowResponse {
        return this.client.describeContactFlow(
            this.ops["DescribeContactFlow"].apply(partialParams)
        );
    }

    invokeDescribeContactFlowModule(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowModuleRequest]: (DescribeContactFlowModuleRequest)[K]
    }>): DescribeContactFlowModuleResponse {
        return this.client.describeContactFlowModule(
            this.ops["DescribeContactFlowModule"].apply(partialParams)
        );
    }

    invokeDescribeHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DescribeHoursOfOperationRequest]: (DescribeHoursOfOperationRequest)[K]
    }>): DescribeHoursOfOperationResponse {
        return this.client.describeHoursOfOperation(
            this.ops["DescribeHoursOfOperation"].apply(partialParams)
        );
    }

    invokeDescribeInstance(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRequest]: (DescribeInstanceRequest)[K]
    }>): DescribeInstanceResponse {
        return this.client.describeInstance(
            this.ops["DescribeInstance"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest)[K]
    }>): DescribeInstanceAttributeResponse {
        return this.client.describeInstanceAttribute(
            this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DescribeInstanceStorageConfigRequest]: (DescribeInstanceStorageConfigRequest)[K]
    }>): DescribeInstanceStorageConfigResponse {
        return this.client.describeInstanceStorageConfig(
            this.ops["DescribeInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeDescribeQueue(partialParams: ToOptional<{
      [K in keyof DescribeQueueRequest]: (DescribeQueueRequest)[K]
    }>): DescribeQueueResponse {
        return this.client.describeQueue(
            this.ops["DescribeQueue"].apply(partialParams)
        );
    }

    invokeDescribeQuickConnect(partialParams: ToOptional<{
      [K in keyof DescribeQuickConnectRequest]: (DescribeQuickConnectRequest)[K]
    }>): DescribeQuickConnectResponse {
        return this.client.describeQuickConnect(
            this.ops["DescribeQuickConnect"].apply(partialParams)
        );
    }

    invokeDescribeRoutingProfile(partialParams: ToOptional<{
      [K in keyof DescribeRoutingProfileRequest]: (DescribeRoutingProfileRequest)[K]
    }>): DescribeRoutingProfileResponse {
        return this.client.describeRoutingProfile(
            this.ops["DescribeRoutingProfile"].apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest]: (DescribeSecurityProfileRequest)[K]
    }>): DescribeSecurityProfileResponse {
        return this.client.describeSecurityProfile(
            this.ops["DescribeSecurityProfile"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest]: (DescribeUserRequest)[K]
    }>): DescribeUserResponse {
        return this.client.describeUser(
            this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyGroupRequest]: (DescribeUserHierarchyGroupRequest)[K]
    }>): DescribeUserHierarchyGroupResponse {
        return this.client.describeUserHierarchyGroup(
            this.ops["DescribeUserHierarchyGroup"].apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyStructureRequest]: (DescribeUserHierarchyStructureRequest)[K]
    }>): DescribeUserHierarchyStructureResponse {
        return this.client.describeUserHierarchyStructure(
            this.ops["DescribeUserHierarchyStructure"].apply(partialParams)
        );
    }

    invokeDescribeVocabulary(partialParams: ToOptional<{
      [K in keyof DescribeVocabularyRequest]: (DescribeVocabularyRequest)[K]
    }>): DescribeVocabularyResponse {
        return this.client.describeVocabulary(
            this.ops["DescribeVocabulary"].apply(partialParams)
        );
    }

    invokeDisassociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof DisassociateApprovedOriginRequest]: (DisassociateApprovedOriginRequest)[K]
    }>): void {
        return this.client.disassociateApprovedOrigin(
            this.ops["DisassociateApprovedOrigin"].apply(partialParams)
        );
    }

    invokeDisassociateBot(partialParams: ToOptional<{
      [K in keyof DisassociateBotRequest]: (DisassociateBotRequest)[K]
    }>): void {
        return this.client.disassociateBot(
            this.ops["DisassociateBot"].apply(partialParams)
        );
    }

    invokeDisassociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceStorageConfigRequest]: (DisassociateInstanceStorageConfigRequest)[K]
    }>): void {
        return this.client.disassociateInstanceStorageConfig(
            this.ops["DisassociateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeDisassociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof DisassociateLambdaFunctionRequest]: (DisassociateLambdaFunctionRequest)[K]
    }>): void {
        return this.client.disassociateLambdaFunction(
            this.ops["DisassociateLambdaFunction"].apply(partialParams)
        );
    }

    invokeDisassociateLexBot(partialParams: ToOptional<{
      [K in keyof DisassociateLexBotRequest]: (DisassociateLexBotRequest)[K]
    }>): void {
        return this.client.disassociateLexBot(
            this.ops["DisassociateLexBot"].apply(partialParams)
        );
    }

    invokeDisassociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof DisassociateQueueQuickConnectsRequest]: (DisassociateQueueQuickConnectsRequest)[K]
    }>): void {
        return this.client.disassociateQueueQuickConnects(
            this.ops["DisassociateQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeDisassociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof DisassociateRoutingProfileQueuesRequest]: (DisassociateRoutingProfileQueuesRequest)[K]
    }>): void {
        return this.client.disassociateRoutingProfileQueues(
            this.ops["DisassociateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeDisassociateSecurityKey(partialParams: ToOptional<{
      [K in keyof DisassociateSecurityKeyRequest]: (DisassociateSecurityKeyRequest)[K]
    }>): void {
        return this.client.disassociateSecurityKey(
            this.ops["DisassociateSecurityKey"].apply(partialParams)
        );
    }

    invokeGetContactAttributes(partialParams: ToOptional<{
      [K in keyof GetContactAttributesRequest]: (GetContactAttributesRequest)[K]
    }>): GetContactAttributesResponse {
        return this.client.getContactAttributes(
            this.ops["GetContactAttributes"].apply(partialParams)
        );
    }

    invokeGetCurrentMetricData(partialParams: ToOptional<{
      [K in keyof GetCurrentMetricDataRequest]: (GetCurrentMetricDataRequest)[K]
    }>): GetCurrentMetricDataResponse {
        return this.client.getCurrentMetricData(
            this.ops["GetCurrentMetricData"].apply(partialParams)
        );
    }

    invokeGetFederationToken(partialParams: ToOptional<{
      [K in keyof GetFederationTokenRequest]: (GetFederationTokenRequest)[K]
    }>): GetFederationTokenResponse {
        return this.client.getFederationToken(
            this.ops["GetFederationToken"].apply(partialParams)
        );
    }

    invokeGetMetricData(partialParams: ToOptional<{
      [K in keyof GetMetricDataRequest]: (GetMetricDataRequest)[K]
    }>): GetMetricDataResponse {
        return this.client.getMetricData(
            this.ops["GetMetricData"].apply(partialParams)
        );
    }

    invokeListAgentStatuses(partialParams: ToOptional<{
      [K in keyof Omit<ListAgentStatusRequest, "InstanceId">]: (Omit<ListAgentStatusRequest, "InstanceId">)[K]
    }>): ListAgentStatusResponse {
        return this.client.listAgentStatuses(
            this.ops["ListAgentStatuses"].apply(partialParams)
        );
    }

    invokeListApprovedOrigins(partialParams: ToOptional<{
      [K in keyof Omit<ListApprovedOriginsRequest, "InstanceId">]: (Omit<ListApprovedOriginsRequest, "InstanceId">)[K]
    }>): ListApprovedOriginsResponse {
        return this.client.listApprovedOrigins(
            this.ops["ListApprovedOrigins"].apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof Omit<ListBotsRequest, "InstanceId">]: (Omit<ListBotsRequest, "InstanceId">)[K]
    }>): ListBotsResponse {
        return this.client.listBots(
            this.ops["ListBots"].apply(partialParams)
        );
    }

    invokeListContactFlowModules(partialParams: ToOptional<{
      [K in keyof Omit<ListContactFlowModulesRequest, "InstanceId">]: (Omit<ListContactFlowModulesRequest, "InstanceId">)[K]
    }>): ListContactFlowModulesResponse {
        return this.client.listContactFlowModules(
            this.ops["ListContactFlowModules"].apply(partialParams)
        );
    }

    invokeListContactFlows(partialParams: ToOptional<{
      [K in keyof Omit<ListContactFlowsRequest, "InstanceId">]: (Omit<ListContactFlowsRequest, "InstanceId">)[K]
    }>): ListContactFlowsResponse {
        return this.client.listContactFlows(
            this.ops["ListContactFlows"].apply(partialParams)
        );
    }

    invokeListContactReferences(partialParams: ToOptional<{
      [K in keyof Omit<ListContactReferencesRequest, "InstanceId">]: (Omit<ListContactReferencesRequest, "InstanceId">)[K]
    }>): ListContactReferencesResponse {
        return this.client.listContactReferences(
            this.ops["ListContactReferences"].apply(partialParams)
        );
    }

    invokeListDefaultVocabularies(partialParams: ToOptional<{
      [K in keyof Omit<ListDefaultVocabulariesRequest, "InstanceId">]: (Omit<ListDefaultVocabulariesRequest, "InstanceId">)[K]
    }>): ListDefaultVocabulariesResponse {
        return this.client.listDefaultVocabularies(
            this.ops["ListDefaultVocabularies"].apply(partialParams)
        );
    }

    invokeListHoursOfOperations(partialParams: ToOptional<{
      [K in keyof Omit<ListHoursOfOperationsRequest, "InstanceId">]: (Omit<ListHoursOfOperationsRequest, "InstanceId">)[K]
    }>): ListHoursOfOperationsResponse {
        return this.client.listHoursOfOperations(
            this.ops["ListHoursOfOperations"].apply(partialParams)
        );
    }

    invokeListInstanceAttributes(partialParams: ToOptional<{
      [K in keyof Omit<ListInstanceAttributesRequest, "InstanceId">]: (Omit<ListInstanceAttributesRequest, "InstanceId">)[K]
    }>): ListInstanceAttributesResponse {
        return this.client.listInstanceAttributes(
            this.ops["ListInstanceAttributes"].apply(partialParams)
        );
    }

    invokeListInstanceStorageConfigs(partialParams: ToOptional<{
      [K in keyof Omit<ListInstanceStorageConfigsRequest, "InstanceId">]: (Omit<ListInstanceStorageConfigsRequest, "InstanceId">)[K]
    }>): ListInstanceStorageConfigsResponse {
        return this.client.listInstanceStorageConfigs(
            this.ops["ListInstanceStorageConfigs"].apply(partialParams)
        );
    }

    invokeListIntegrationAssociations(partialParams: ToOptional<{
      [K in keyof Omit<ListIntegrationAssociationsRequest, "InstanceId">]: (Omit<ListIntegrationAssociationsRequest, "InstanceId">)[K]
    }>): ListIntegrationAssociationsResponse {
        return this.client.listIntegrationAssociations(
            this.ops["ListIntegrationAssociations"].apply(partialParams)
        );
    }

    invokeListLambdaFunctions(partialParams: ToOptional<{
      [K in keyof Omit<ListLambdaFunctionsRequest, "InstanceId">]: (Omit<ListLambdaFunctionsRequest, "InstanceId">)[K]
    }>): ListLambdaFunctionsResponse {
        return this.client.listLambdaFunctions(
            this.ops["ListLambdaFunctions"].apply(partialParams)
        );
    }

    invokeListLexBots(partialParams: ToOptional<{
      [K in keyof Omit<ListLexBotsRequest, "InstanceId">]: (Omit<ListLexBotsRequest, "InstanceId">)[K]
    }>): ListLexBotsResponse {
        return this.client.listLexBots(
            this.ops["ListLexBots"].apply(partialParams)
        );
    }

    invokeListPhoneNumbers(partialParams: ToOptional<{
      [K in keyof Omit<ListPhoneNumbersRequest, "InstanceId">]: (Omit<ListPhoneNumbersRequest, "InstanceId">)[K]
    }>): ListPhoneNumbersResponse {
        return this.client.listPhoneNumbers(
            this.ops["ListPhoneNumbers"].apply(partialParams)
        );
    }

    invokeListPrompts(partialParams: ToOptional<{
      [K in keyof Omit<ListPromptsRequest, "InstanceId">]: (Omit<ListPromptsRequest, "InstanceId">)[K]
    }>): ListPromptsResponse {
        return this.client.listPrompts(
            this.ops["ListPrompts"].apply(partialParams)
        );
    }

    invokeListQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof Omit<ListQueueQuickConnectsRequest, "InstanceId">]: (Omit<ListQueueQuickConnectsRequest, "InstanceId">)[K]
    }>): ListQueueQuickConnectsResponse {
        return this.client.listQueueQuickConnects(
            this.ops["ListQueueQuickConnects"].apply(partialParams)
        );
    }

    invokeListQueues(partialParams: ToOptional<{
      [K in keyof Omit<ListQueuesRequest, "InstanceId">]: (Omit<ListQueuesRequest, "InstanceId">)[K]
    }>): ListQueuesResponse {
        return this.client.listQueues(
            this.ops["ListQueues"].apply(partialParams)
        );
    }

    invokeListQuickConnects(partialParams: ToOptional<{
      [K in keyof Omit<ListQuickConnectsRequest, "InstanceId">]: (Omit<ListQuickConnectsRequest, "InstanceId">)[K]
    }>): ListQuickConnectsResponse {
        return this.client.listQuickConnects(
            this.ops["ListQuickConnects"].apply(partialParams)
        );
    }

    invokeListRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof Omit<ListRoutingProfileQueuesRequest, "InstanceId">]: (Omit<ListRoutingProfileQueuesRequest, "InstanceId">)[K]
    }>): ListRoutingProfileQueuesResponse {
        return this.client.listRoutingProfileQueues(
            this.ops["ListRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeListRoutingProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListRoutingProfilesRequest, "InstanceId">]: (Omit<ListRoutingProfilesRequest, "InstanceId">)[K]
    }>): ListRoutingProfilesResponse {
        return this.client.listRoutingProfiles(
            this.ops["ListRoutingProfiles"].apply(partialParams)
        );
    }

    invokeListSecurityKeys(partialParams: ToOptional<{
      [K in keyof Omit<ListSecurityKeysRequest, "InstanceId">]: (Omit<ListSecurityKeysRequest, "InstanceId">)[K]
    }>): ListSecurityKeysResponse {
        return this.client.listSecurityKeys(
            this.ops["ListSecurityKeys"].apply(partialParams)
        );
    }

    invokeListSecurityProfilePermissions(partialParams: ToOptional<{
      [K in keyof Omit<ListSecurityProfilePermissionsRequest, "InstanceId">]: (Omit<ListSecurityProfilePermissionsRequest, "InstanceId">)[K]
    }>): ListSecurityProfilePermissionsResponse {
        return this.client.listSecurityProfilePermissions(
            this.ops["ListSecurityProfilePermissions"].apply(partialParams)
        );
    }

    invokeListSecurityProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListSecurityProfilesRequest, "InstanceId">]: (Omit<ListSecurityProfilesRequest, "InstanceId">)[K]
    }>): ListSecurityProfilesResponse {
        return this.client.listSecurityProfiles(
            this.ops["ListSecurityProfiles"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListUseCases(partialParams: ToOptional<{
      [K in keyof Omit<ListUseCasesRequest, "InstanceId">]: (Omit<ListUseCasesRequest, "InstanceId">)[K]
    }>): ListUseCasesResponse {
        return this.client.listUseCases(
            this.ops["ListUseCases"].apply(partialParams)
        );
    }

    invokeListUserHierarchyGroups(partialParams: ToOptional<{
      [K in keyof Omit<ListUserHierarchyGroupsRequest, "InstanceId">]: (Omit<ListUserHierarchyGroupsRequest, "InstanceId">)[K]
    }>): ListUserHierarchyGroupsResponse {
        return this.client.listUserHierarchyGroups(
            this.ops["ListUserHierarchyGroups"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof Omit<ListUsersRequest, "InstanceId">]: (Omit<ListUsersRequest, "InstanceId">)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeResumeContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<ResumeContactRecordingRequest, "InstanceId">]: (Omit<ResumeContactRecordingRequest, "InstanceId">)[K]
    }>): ResumeContactRecordingResponse {
        return this.client.resumeContactRecording(
            this.ops["ResumeContactRecording"].apply(partialParams)
        );
    }

    invokeSearchVocabularies(partialParams: ToOptional<{
      [K in keyof Omit<SearchVocabulariesRequest, "InstanceId">]: (Omit<SearchVocabulariesRequest, "InstanceId">)[K]
    }>): SearchVocabulariesResponse {
        return this.client.searchVocabularies(
            this.ops["SearchVocabularies"].apply(partialParams)
        );
    }

    invokeStartChatContact(partialParams: ToOptional<{
      [K in keyof Omit<StartChatContactRequest, "InstanceId">]: (Omit<StartChatContactRequest, "InstanceId">)[K]
    }>): StartChatContactResponse {
        return this.client.startChatContact(
            this.ops["StartChatContact"].apply(partialParams)
        );
    }

    invokeStartContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<StartContactRecordingRequest, "InstanceId">]: (Omit<StartContactRecordingRequest, "InstanceId">)[K]
    }>): StartContactRecordingResponse {
        return this.client.startContactRecording(
            this.ops["StartContactRecording"].apply(partialParams)
        );
    }

    invokeStartContactStreaming(partialParams: ToOptional<{
      [K in keyof Omit<StartContactStreamingRequest, "InstanceId">]: (Omit<StartContactStreamingRequest, "InstanceId">)[K]
    }>): StartContactStreamingResponse {
        return this.client.startContactStreaming(
            this.ops["StartContactStreaming"].apply(partialParams)
        );
    }

    invokeStartOutboundVoiceContact(partialParams: ToOptional<{
      [K in keyof Omit<StartOutboundVoiceContactRequest, "InstanceId">]: (Omit<StartOutboundVoiceContactRequest, "InstanceId">)[K]
    }>): StartOutboundVoiceContactResponse {
        return this.client.startOutboundVoiceContact(
            this.ops["StartOutboundVoiceContact"].apply(partialParams)
        );
    }

    invokeStartTaskContact(partialParams: ToOptional<{
      [K in keyof Omit<StartTaskContactRequest, "InstanceId">]: (Omit<StartTaskContactRequest, "InstanceId">)[K]
    }>): StartTaskContactResponse {
        return this.client.startTaskContact(
            this.ops["StartTaskContact"].apply(partialParams)
        );
    }

    invokeStopContact(partialParams: ToOptional<{
      [K in keyof Omit<StopContactRequest, "InstanceId">]: (Omit<StopContactRequest, "InstanceId">)[K]
    }>): StopContactResponse {
        return this.client.stopContact(
            this.ops["StopContact"].apply(partialParams)
        );
    }

    invokeStopContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<StopContactRecordingRequest, "InstanceId">]: (Omit<StopContactRecordingRequest, "InstanceId">)[K]
    }>): StopContactRecordingResponse {
        return this.client.stopContactRecording(
            this.ops["StopContactRecording"].apply(partialParams)
        );
    }

    invokeStopContactStreaming(partialParams: ToOptional<{
      [K in keyof Omit<StopContactStreamingRequest, "InstanceId">]: (Omit<StopContactStreamingRequest, "InstanceId">)[K]
    }>): StopContactStreamingResponse {
        return this.client.stopContactStreaming(
            this.ops["StopContactStreaming"].apply(partialParams)
        );
    }

    invokeSuspendContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<SuspendContactRecordingRequest, "InstanceId">]: (Omit<SuspendContactRecordingRequest, "InstanceId">)[K]
    }>): SuspendContactRecordingResponse {
        return this.client.suspendContactRecording(
            this.ops["SuspendContactRecording"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAgentStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAgentStatusRequest, "InstanceId">]: (Omit<UpdateAgentStatusRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateAgentStatus(
            this.ops["UpdateAgentStatus"].apply(partialParams)
        );
    }

    invokeUpdateContact(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactRequest, "InstanceId">]: (Omit<UpdateContactRequest, "InstanceId">)[K]
    }>): UpdateContactResponse {
        return this.client.updateContact(
            this.ops["UpdateContact"].apply(partialParams)
        );
    }

    invokeUpdateContactAttributes(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactAttributesRequest, "InstanceId">]: (Omit<UpdateContactAttributesRequest, "InstanceId">)[K]
    }>): UpdateContactAttributesResponse {
        return this.client.updateContactAttributes(
            this.ops["UpdateContactAttributes"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowContent(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowContentRequest, "InstanceId">]: (Omit<UpdateContactFlowContentRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateContactFlowContent(
            this.ops["UpdateContactFlowContent"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowMetadata(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowMetadataRequest, "InstanceId">]: (Omit<UpdateContactFlowMetadataRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateContactFlowMetadata(
            this.ops["UpdateContactFlowMetadata"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleContent(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowModuleContentRequest, "InstanceId">]: (Omit<UpdateContactFlowModuleContentRequest, "InstanceId">)[K]
    }>): UpdateContactFlowModuleContentResponse {
        return this.client.updateContactFlowModuleContent(
            this.ops["UpdateContactFlowModuleContent"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleMetadata(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId">]: (Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId">)[K]
    }>): UpdateContactFlowModuleMetadataResponse {
        return this.client.updateContactFlowModuleMetadata(
            this.ops["UpdateContactFlowModuleMetadata"].apply(partialParams)
        );
    }

    invokeUpdateContactFlowName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowNameRequest, "InstanceId">]: (Omit<UpdateContactFlowNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateContactFlowName(
            this.ops["UpdateContactFlowName"].apply(partialParams)
        );
    }

    invokeUpdateContactSchedule(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactScheduleRequest, "InstanceId">]: (Omit<UpdateContactScheduleRequest, "InstanceId">)[K]
    }>): UpdateContactScheduleResponse {
        return this.client.updateContactSchedule(
            this.ops["UpdateContactSchedule"].apply(partialParams)
        );
    }

    invokeUpdateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof Omit<UpdateHoursOfOperationRequest, "InstanceId">]: (Omit<UpdateHoursOfOperationRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateHoursOfOperation(
            this.ops["UpdateHoursOfOperation"].apply(partialParams)
        );
    }

    invokeUpdateInstanceAttribute(partialParams: ToOptional<{
      [K in keyof Omit<UpdateInstanceAttributeRequest, "InstanceId">]: (Omit<UpdateInstanceAttributeRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateInstanceAttribute(
            this.ops["UpdateInstanceAttribute"].apply(partialParams)
        );
    }

    invokeUpdateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateInstanceStorageConfigRequest, "InstanceId">]: (Omit<UpdateInstanceStorageConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateInstanceStorageConfig(
            this.ops["UpdateInstanceStorageConfig"].apply(partialParams)
        );
    }

    invokeUpdateQueueHoursOfOperation(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueHoursOfOperationRequest, "InstanceId">]: (Omit<UpdateQueueHoursOfOperationRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueHoursOfOperation(
            this.ops["UpdateQueueHoursOfOperation"].apply(partialParams)
        );
    }

    invokeUpdateQueueMaxContacts(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueMaxContactsRequest, "InstanceId">]: (Omit<UpdateQueueMaxContactsRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueMaxContacts(
            this.ops["UpdateQueueMaxContacts"].apply(partialParams)
        );
    }

    invokeUpdateQueueName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueNameRequest, "InstanceId">]: (Omit<UpdateQueueNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueName(
            this.ops["UpdateQueueName"].apply(partialParams)
        );
    }

    invokeUpdateQueueOutboundCallerConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId">]: (Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueOutboundCallerConfig(
            this.ops["UpdateQueueOutboundCallerConfig"].apply(partialParams)
        );
    }

    invokeUpdateQueueStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueStatusRequest, "InstanceId">]: (Omit<UpdateQueueStatusRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQueueStatus(
            this.ops["UpdateQueueStatus"].apply(partialParams)
        );
    }

    invokeUpdateQuickConnectConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQuickConnectConfigRequest, "InstanceId">]: (Omit<UpdateQuickConnectConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQuickConnectConfig(
            this.ops["UpdateQuickConnectConfig"].apply(partialParams)
        );
    }

    invokeUpdateQuickConnectName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQuickConnectNameRequest, "InstanceId">]: (Omit<UpdateQuickConnectNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateQuickConnectName(
            this.ops["UpdateQuickConnectName"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileConcurrency(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId">]: (Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileConcurrency(
            this.ops["UpdateRoutingProfileConcurrency"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileDefaultOutboundQueue(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId">]: (Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileDefaultOutboundQueue(
            this.ops["UpdateRoutingProfileDefaultOutboundQueue"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileNameRequest, "InstanceId">]: (Omit<UpdateRoutingProfileNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileName(
            this.ops["UpdateRoutingProfileName"].apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileQueuesRequest, "InstanceId">]: (Omit<UpdateRoutingProfileQueuesRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateRoutingProfileQueues(
            this.ops["UpdateRoutingProfileQueues"].apply(partialParams)
        );
    }

    invokeUpdateSecurityProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateSecurityProfileRequest, "InstanceId">]: (Omit<UpdateSecurityProfileRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateSecurityProfile(
            this.ops["UpdateSecurityProfile"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchy(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserHierarchyRequest, "InstanceId">]: (Omit<UpdateUserHierarchyRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserHierarchy(
            this.ops["UpdateUserHierarchy"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyGroupName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId">]: (Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserHierarchyGroupName(
            this.ops["UpdateUserHierarchyGroupName"].apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserHierarchyStructureRequest, "InstanceId">]: (Omit<UpdateUserHierarchyStructureRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserHierarchyStructure(
            this.ops["UpdateUserHierarchyStructure"].apply(partialParams)
        );
    }

    invokeUpdateUserIdentityInfo(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserIdentityInfoRequest, "InstanceId">]: (Omit<UpdateUserIdentityInfoRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserIdentityInfo(
            this.ops["UpdateUserIdentityInfo"].apply(partialParams)
        );
    }

    invokeUpdateUserPhoneConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserPhoneConfigRequest, "InstanceId">]: (Omit<UpdateUserPhoneConfigRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserPhoneConfig(
            this.ops["UpdateUserPhoneConfig"].apply(partialParams)
        );
    }

    invokeUpdateUserRoutingProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserRoutingProfileRequest, "InstanceId">]: (Omit<UpdateUserRoutingProfileRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserRoutingProfile(
            this.ops["UpdateUserRoutingProfile"].apply(partialParams)
        );
    }

    invokeUpdateUserSecurityProfiles(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserSecurityProfilesRequest, "InstanceId">]: (Omit<UpdateUserSecurityProfilesRequest, "InstanceId">)[K]
    }>): void {
        return this.client.updateUserSecurityProfiles(
            this.ops["UpdateUserSecurityProfiles"].apply(partialParams)
        );
    }
}