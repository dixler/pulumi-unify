
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/connect-2017-08-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.connect.BotAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.connect.BotAssociation>) {
        super(...args)
        this.client = new awssdk.Connect()
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

    invokeAssociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof AssociateApprovedOriginRequest]: (AssociateApprovedOriginRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateApprovedOrigin(
          this.ops["AssociateApprovedOrigin"].applicator.apply(partialParams)
        );
    }

    invokeAssociateBot(partialParams: ToOptional<{
      [K in keyof AssociateBotRequest]: (AssociateBotRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateBot(
          this.ops["AssociateBot"].applicator.apply(partialParams)
        );
    }

    invokeAssociateDefaultVocabulary(partialParams: ToOptional<{
      [K in keyof AssociateDefaultVocabularyRequest]: (AssociateDefaultVocabularyRequest)[K]
    }>): Request<AssociateDefaultVocabularyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDefaultVocabulary(
          this.ops["AssociateDefaultVocabulary"].applicator.apply(partialParams)
        );
    }

    invokeAssociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof AssociateInstanceStorageConfigRequest]: (AssociateInstanceStorageConfigRequest)[K]
    }>): Request<AssociateInstanceStorageConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateInstanceStorageConfig(
          this.ops["AssociateInstanceStorageConfig"].applicator.apply(partialParams)
        );
    }

    invokeAssociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof AssociateLambdaFunctionRequest]: (AssociateLambdaFunctionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateLambdaFunction(
          this.ops["AssociateLambdaFunction"].applicator.apply(partialParams)
        );
    }

    invokeAssociateLexBot(partialParams: ToOptional<{
      [K in keyof AssociateLexBotRequest]: (AssociateLexBotRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateLexBot(
          this.ops["AssociateLexBot"].applicator.apply(partialParams)
        );
    }

    invokeAssociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof AssociateQueueQuickConnectsRequest]: (AssociateQueueQuickConnectsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateQueueQuickConnects(
          this.ops["AssociateQueueQuickConnects"].applicator.apply(partialParams)
        );
    }

    invokeAssociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof AssociateRoutingProfileQueuesRequest]: (AssociateRoutingProfileQueuesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateRoutingProfileQueues(
          this.ops["AssociateRoutingProfileQueues"].applicator.apply(partialParams)
        );
    }

    invokeAssociateSecurityKey(partialParams: ToOptional<{
      [K in keyof AssociateSecurityKeyRequest]: (AssociateSecurityKeyRequest)[K]
    }>): Request<AssociateSecurityKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateSecurityKey(
          this.ops["AssociateSecurityKey"].applicator.apply(partialParams)
        );
    }

    invokeCreateAgentStatus(partialParams: ToOptional<{
      [K in keyof CreateAgentStatusRequest]: (CreateAgentStatusRequest)[K]
    }>): Request<CreateAgentStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAgentStatus(
          this.ops["CreateAgentStatus"].applicator.apply(partialParams)
        );
    }

    invokeCreateContactFlow(partialParams: ToOptional<{
      [K in keyof CreateContactFlowRequest]: (CreateContactFlowRequest)[K]
    }>): Request<CreateContactFlowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContactFlow(
          this.ops["CreateContactFlow"].applicator.apply(partialParams)
        );
    }

    invokeCreateContactFlowModule(partialParams: ToOptional<{
      [K in keyof CreateContactFlowModuleRequest]: (CreateContactFlowModuleRequest)[K]
    }>): Request<CreateContactFlowModuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContactFlowModule(
          this.ops["CreateContactFlowModule"].applicator.apply(partialParams)
        );
    }

    invokeCreateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof CreateHoursOfOperationRequest]: (CreateHoursOfOperationRequest)[K]
    }>): Request<CreateHoursOfOperationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHoursOfOperation(
          this.ops["CreateHoursOfOperation"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstance(partialParams: ToOptional<{
      [K in keyof CreateInstanceRequest]: (CreateInstanceRequest)[K]
    }>): Request<CreateInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstance(
          this.ops["CreateInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof CreateIntegrationAssociationRequest]: (CreateIntegrationAssociationRequest)[K]
    }>): Request<CreateIntegrationAssociationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIntegrationAssociation(
          this.ops["CreateIntegrationAssociation"].applicator.apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest]: (CreateQueueRequest)[K]
    }>): Request<CreateQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQueue(
          this.ops["CreateQueue"].applicator.apply(partialParams)
        );
    }

    invokeCreateQuickConnect(partialParams: ToOptional<{
      [K in keyof CreateQuickConnectRequest]: (CreateQuickConnectRequest)[K]
    }>): Request<CreateQuickConnectResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQuickConnect(
          this.ops["CreateQuickConnect"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoutingProfile(partialParams: ToOptional<{
      [K in keyof CreateRoutingProfileRequest]: (CreateRoutingProfileRequest)[K]
    }>): Request<CreateRoutingProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoutingProfile(
          this.ops["CreateRoutingProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest]: (CreateSecurityProfileRequest)[K]
    }>): Request<CreateSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityProfile(
          this.ops["CreateSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateUseCase(partialParams: ToOptional<{
      [K in keyof CreateUseCaseRequest]: (CreateUseCaseRequest)[K]
    }>): Request<CreateUseCaseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUseCase(
          this.ops["CreateUseCase"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof CreateUserHierarchyGroupRequest]: (CreateUserHierarchyGroupRequest)[K]
    }>): Request<CreateUserHierarchyGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserHierarchyGroup(
          this.ops["CreateUserHierarchyGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateVocabulary(partialParams: ToOptional<{
      [K in keyof CreateVocabularyRequest]: (CreateVocabularyRequest)[K]
    }>): Request<CreateVocabularyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVocabulary(
          this.ops["CreateVocabulary"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContactFlow(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowRequest]: (DeleteContactFlowRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContactFlow(
          this.ops["DeleteContactFlow"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContactFlowModule(partialParams: ToOptional<{
      [K in keyof DeleteContactFlowModuleRequest]: (DeleteContactFlowModuleRequest)[K]
    }>): Request<DeleteContactFlowModuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContactFlowModule(
          this.ops["DeleteContactFlowModule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DeleteHoursOfOperationRequest]: (DeleteHoursOfOperationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHoursOfOperation(
          this.ops["DeleteHoursOfOperation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest]: (DeleteInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstance(
          this.ops["DeleteInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIntegrationAssociation(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationAssociationRequest]: (DeleteIntegrationAssociationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegrationAssociation(
          this.ops["DeleteIntegrationAssociation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteQuickConnect(partialParams: ToOptional<{
      [K in keyof DeleteQuickConnectRequest]: (DeleteQuickConnectRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQuickConnect(
          this.ops["DeleteQuickConnect"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSecurityProfile(partialParams: ToOptional<{
      [K in keyof DeleteSecurityProfileRequest]: (DeleteSecurityProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSecurityProfile(
          this.ops["DeleteSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUseCase(partialParams: ToOptional<{
      [K in keyof DeleteUseCaseRequest]: (DeleteUseCaseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUseCase(
          this.ops["DeleteUseCase"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest]: (DeleteUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserHierarchyGroupRequest]: (DeleteUserHierarchyGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserHierarchyGroup(
          this.ops["DeleteUserHierarchyGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVocabulary(partialParams: ToOptional<{
      [K in keyof DeleteVocabularyRequest]: (DeleteVocabularyRequest)[K]
    }>): Request<DeleteVocabularyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVocabulary(
          this.ops["DeleteVocabulary"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAgentStatus(partialParams: ToOptional<{
      [K in keyof DescribeAgentStatusRequest]: (DescribeAgentStatusRequest)[K]
    }>): Request<DescribeAgentStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAgentStatus(
          this.ops["DescribeAgentStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeContact(partialParams: ToOptional<{
      [K in keyof DescribeContactRequest]: (DescribeContactRequest)[K]
    }>): Request<DescribeContactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContact(
          this.ops["DescribeContact"].applicator.apply(partialParams)
        );
    }

    invokeDescribeContactFlow(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowRequest]: (DescribeContactFlowRequest)[K]
    }>): Request<DescribeContactFlowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContactFlow(
          this.ops["DescribeContactFlow"].applicator.apply(partialParams)
        );
    }

    invokeDescribeContactFlowModule(partialParams: ToOptional<{
      [K in keyof DescribeContactFlowModuleRequest]: (DescribeContactFlowModuleRequest)[K]
    }>): Request<DescribeContactFlowModuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContactFlowModule(
          this.ops["DescribeContactFlowModule"].applicator.apply(partialParams)
        );
    }

    invokeDescribeHoursOfOperation(partialParams: ToOptional<{
      [K in keyof DescribeHoursOfOperationRequest]: (DescribeHoursOfOperationRequest)[K]
    }>): Request<DescribeHoursOfOperationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHoursOfOperation(
          this.ops["DescribeHoursOfOperation"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstance(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRequest]: (DescribeInstanceRequest)[K]
    }>): Request<DescribeInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstance(
          this.ops["DescribeInstance"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest)[K]
    }>): Request<DescribeInstanceAttributeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceAttribute(
          this.ops["DescribeInstanceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DescribeInstanceStorageConfigRequest]: (DescribeInstanceStorageConfigRequest)[K]
    }>): Request<DescribeInstanceStorageConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceStorageConfig(
          this.ops["DescribeInstanceStorageConfig"].applicator.apply(partialParams)
        );
    }

    invokeDescribeQueue(partialParams: ToOptional<{
      [K in keyof DescribeQueueRequest]: (DescribeQueueRequest)[K]
    }>): Request<DescribeQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeQueue(
          this.ops["DescribeQueue"].applicator.apply(partialParams)
        );
    }

    invokeDescribeQuickConnect(partialParams: ToOptional<{
      [K in keyof DescribeQuickConnectRequest]: (DescribeQuickConnectRequest)[K]
    }>): Request<DescribeQuickConnectResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeQuickConnect(
          this.ops["DescribeQuickConnect"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRoutingProfile(partialParams: ToOptional<{
      [K in keyof DescribeRoutingProfileRequest]: (DescribeRoutingProfileRequest)[K]
    }>): Request<DescribeRoutingProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRoutingProfile(
          this.ops["DescribeRoutingProfile"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest]: (DescribeSecurityProfileRequest)[K]
    }>): Request<DescribeSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecurityProfile(
          this.ops["DescribeSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest]: (DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyGroup(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyGroupRequest]: (DescribeUserHierarchyGroupRequest)[K]
    }>): Request<DescribeUserHierarchyGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUserHierarchyGroup(
          this.ops["DescribeUserHierarchyGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof DescribeUserHierarchyStructureRequest]: (DescribeUserHierarchyStructureRequest)[K]
    }>): Request<DescribeUserHierarchyStructureResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUserHierarchyStructure(
          this.ops["DescribeUserHierarchyStructure"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVocabulary(partialParams: ToOptional<{
      [K in keyof DescribeVocabularyRequest]: (DescribeVocabularyRequest)[K]
    }>): Request<DescribeVocabularyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVocabulary(
          this.ops["DescribeVocabulary"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateApprovedOrigin(partialParams: ToOptional<{
      [K in keyof DisassociateApprovedOriginRequest]: (DisassociateApprovedOriginRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateApprovedOrigin(
          this.ops["DisassociateApprovedOrigin"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateBot(partialParams: ToOptional<{
      [K in keyof DisassociateBotRequest]: (DisassociateBotRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateBot(
          this.ops["DisassociateBot"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceStorageConfigRequest]: (DisassociateInstanceStorageConfigRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateInstanceStorageConfig(
          this.ops["DisassociateInstanceStorageConfig"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateLambdaFunction(partialParams: ToOptional<{
      [K in keyof DisassociateLambdaFunctionRequest]: (DisassociateLambdaFunctionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateLambdaFunction(
          this.ops["DisassociateLambdaFunction"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateLexBot(partialParams: ToOptional<{
      [K in keyof DisassociateLexBotRequest]: (DisassociateLexBotRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateLexBot(
          this.ops["DisassociateLexBot"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof DisassociateQueueQuickConnectsRequest]: (DisassociateQueueQuickConnectsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateQueueQuickConnects(
          this.ops["DisassociateQueueQuickConnects"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof DisassociateRoutingProfileQueuesRequest]: (DisassociateRoutingProfileQueuesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateRoutingProfileQueues(
          this.ops["DisassociateRoutingProfileQueues"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateSecurityKey(partialParams: ToOptional<{
      [K in keyof DisassociateSecurityKeyRequest]: (DisassociateSecurityKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateSecurityKey(
          this.ops["DisassociateSecurityKey"].applicator.apply(partialParams)
        );
    }

    invokeGetContactAttributes(partialParams: ToOptional<{
      [K in keyof GetContactAttributesRequest]: (GetContactAttributesRequest)[K]
    }>): Request<GetContactAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContactAttributes(
          this.ops["GetContactAttributes"].applicator.apply(partialParams)
        );
    }

    invokeGetCurrentMetricData(partialParams: ToOptional<{
      [K in keyof GetCurrentMetricDataRequest]: (GetCurrentMetricDataRequest)[K]
    }>): Request<GetCurrentMetricDataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCurrentMetricData(
          this.ops["GetCurrentMetricData"].applicator.apply(partialParams)
        );
    }

    invokeGetFederationToken(partialParams: ToOptional<{
      [K in keyof GetFederationTokenRequest]: (GetFederationTokenRequest)[K]
    }>): Request<GetFederationTokenResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFederationToken(
          this.ops["GetFederationToken"].applicator.apply(partialParams)
        );
    }

    invokeGetMetricData(partialParams: ToOptional<{
      [K in keyof GetMetricDataRequest]: (GetMetricDataRequest)[K]
    }>): Request<GetMetricDataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMetricData(
          this.ops["GetMetricData"].applicator.apply(partialParams)
        );
    }

    invokeListAgentStatuses(partialParams: ToOptional<{
      [K in keyof Omit<ListAgentStatusRequest, "InstanceId">]: (Omit<ListAgentStatusRequest, "InstanceId">)[K]
    }>): Request<ListAgentStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAgentStatuses(
          this.ops["ListAgentStatuses"].applicator.apply(partialParams)
        );
    }

    invokeListApprovedOrigins(partialParams: ToOptional<{
      [K in keyof Omit<ListApprovedOriginsRequest, "InstanceId">]: (Omit<ListApprovedOriginsRequest, "InstanceId">)[K]
    }>): Request<ListApprovedOriginsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listApprovedOrigins(
          this.ops["ListApprovedOrigins"].applicator.apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof Omit<ListBotsRequest, "InstanceId">]: (Omit<ListBotsRequest, "InstanceId">)[K]
    }>): Request<ListBotsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBots(
          this.ops["ListBots"].applicator.apply(partialParams)
        );
    }

    invokeListContactFlowModules(partialParams: ToOptional<{
      [K in keyof Omit<ListContactFlowModulesRequest, "InstanceId">]: (Omit<ListContactFlowModulesRequest, "InstanceId">)[K]
    }>): Request<ListContactFlowModulesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listContactFlowModules(
          this.ops["ListContactFlowModules"].applicator.apply(partialParams)
        );
    }

    invokeListContactFlows(partialParams: ToOptional<{
      [K in keyof Omit<ListContactFlowsRequest, "InstanceId">]: (Omit<ListContactFlowsRequest, "InstanceId">)[K]
    }>): Request<ListContactFlowsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listContactFlows(
          this.ops["ListContactFlows"].applicator.apply(partialParams)
        );
    }

    invokeListContactReferences(partialParams: ToOptional<{
      [K in keyof Omit<ListContactReferencesRequest, "InstanceId">]: (Omit<ListContactReferencesRequest, "InstanceId">)[K]
    }>): Request<ListContactReferencesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listContactReferences(
          this.ops["ListContactReferences"].applicator.apply(partialParams)
        );
    }

    invokeListDefaultVocabularies(partialParams: ToOptional<{
      [K in keyof Omit<ListDefaultVocabulariesRequest, "InstanceId">]: (Omit<ListDefaultVocabulariesRequest, "InstanceId">)[K]
    }>): Request<ListDefaultVocabulariesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDefaultVocabularies(
          this.ops["ListDefaultVocabularies"].applicator.apply(partialParams)
        );
    }

    invokeListHoursOfOperations(partialParams: ToOptional<{
      [K in keyof Omit<ListHoursOfOperationsRequest, "InstanceId">]: (Omit<ListHoursOfOperationsRequest, "InstanceId">)[K]
    }>): Request<ListHoursOfOperationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listHoursOfOperations(
          this.ops["ListHoursOfOperations"].applicator.apply(partialParams)
        );
    }

    invokeListInstanceAttributes(partialParams: ToOptional<{
      [K in keyof Omit<ListInstanceAttributesRequest, "InstanceId">]: (Omit<ListInstanceAttributesRequest, "InstanceId">)[K]
    }>): Request<ListInstanceAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceAttributes(
          this.ops["ListInstanceAttributes"].applicator.apply(partialParams)
        );
    }

    invokeListInstanceStorageConfigs(partialParams: ToOptional<{
      [K in keyof Omit<ListInstanceStorageConfigsRequest, "InstanceId">]: (Omit<ListInstanceStorageConfigsRequest, "InstanceId">)[K]
    }>): Request<ListInstanceStorageConfigsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceStorageConfigs(
          this.ops["ListInstanceStorageConfigs"].applicator.apply(partialParams)
        );
    }

    invokeListIntegrationAssociations(partialParams: ToOptional<{
      [K in keyof Omit<ListIntegrationAssociationsRequest, "InstanceId">]: (Omit<ListIntegrationAssociationsRequest, "InstanceId">)[K]
    }>): Request<ListIntegrationAssociationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIntegrationAssociations(
          this.ops["ListIntegrationAssociations"].applicator.apply(partialParams)
        );
    }

    invokeListLambdaFunctions(partialParams: ToOptional<{
      [K in keyof Omit<ListLambdaFunctionsRequest, "InstanceId">]: (Omit<ListLambdaFunctionsRequest, "InstanceId">)[K]
    }>): Request<ListLambdaFunctionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLambdaFunctions(
          this.ops["ListLambdaFunctions"].applicator.apply(partialParams)
        );
    }

    invokeListLexBots(partialParams: ToOptional<{
      [K in keyof Omit<ListLexBotsRequest, "InstanceId">]: (Omit<ListLexBotsRequest, "InstanceId">)[K]
    }>): Request<ListLexBotsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLexBots(
          this.ops["ListLexBots"].applicator.apply(partialParams)
        );
    }

    invokeListPhoneNumbers(partialParams: ToOptional<{
      [K in keyof Omit<ListPhoneNumbersRequest, "InstanceId">]: (Omit<ListPhoneNumbersRequest, "InstanceId">)[K]
    }>): Request<ListPhoneNumbersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPhoneNumbers(
          this.ops["ListPhoneNumbers"].applicator.apply(partialParams)
        );
    }

    invokeListPrompts(partialParams: ToOptional<{
      [K in keyof Omit<ListPromptsRequest, "InstanceId">]: (Omit<ListPromptsRequest, "InstanceId">)[K]
    }>): Request<ListPromptsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrompts(
          this.ops["ListPrompts"].applicator.apply(partialParams)
        );
    }

    invokeListQueueQuickConnects(partialParams: ToOptional<{
      [K in keyof Omit<ListQueueQuickConnectsRequest, "InstanceId">]: (Omit<ListQueueQuickConnectsRequest, "InstanceId">)[K]
    }>): Request<ListQueueQuickConnectsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQueueQuickConnects(
          this.ops["ListQueueQuickConnects"].applicator.apply(partialParams)
        );
    }

    invokeListQueues(partialParams: ToOptional<{
      [K in keyof Omit<ListQueuesRequest, "InstanceId">]: (Omit<ListQueuesRequest, "InstanceId">)[K]
    }>): Request<ListQueuesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQueues(
          this.ops["ListQueues"].applicator.apply(partialParams)
        );
    }

    invokeListQuickConnects(partialParams: ToOptional<{
      [K in keyof Omit<ListQuickConnectsRequest, "InstanceId">]: (Omit<ListQuickConnectsRequest, "InstanceId">)[K]
    }>): Request<ListQuickConnectsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQuickConnects(
          this.ops["ListQuickConnects"].applicator.apply(partialParams)
        );
    }

    invokeListRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof Omit<ListRoutingProfileQueuesRequest, "InstanceId">]: (Omit<ListRoutingProfileQueuesRequest, "InstanceId">)[K]
    }>): Request<ListRoutingProfileQueuesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoutingProfileQueues(
          this.ops["ListRoutingProfileQueues"].applicator.apply(partialParams)
        );
    }

    invokeListRoutingProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListRoutingProfilesRequest, "InstanceId">]: (Omit<ListRoutingProfilesRequest, "InstanceId">)[K]
    }>): Request<ListRoutingProfilesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoutingProfiles(
          this.ops["ListRoutingProfiles"].applicator.apply(partialParams)
        );
    }

    invokeListSecurityKeys(partialParams: ToOptional<{
      [K in keyof Omit<ListSecurityKeysRequest, "InstanceId">]: (Omit<ListSecurityKeysRequest, "InstanceId">)[K]
    }>): Request<ListSecurityKeysResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityKeys(
          this.ops["ListSecurityKeys"].applicator.apply(partialParams)
        );
    }

    invokeListSecurityProfilePermissions(partialParams: ToOptional<{
      [K in keyof Omit<ListSecurityProfilePermissionsRequest, "InstanceId">]: (Omit<ListSecurityProfilePermissionsRequest, "InstanceId">)[K]
    }>): Request<ListSecurityProfilePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityProfilePermissions(
          this.ops["ListSecurityProfilePermissions"].applicator.apply(partialParams)
        );
    }

    invokeListSecurityProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListSecurityProfilesRequest, "InstanceId">]: (Omit<ListSecurityProfilesRequest, "InstanceId">)[K]
    }>): Request<ListSecurityProfilesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityProfiles(
          this.ops["ListSecurityProfiles"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListUseCases(partialParams: ToOptional<{
      [K in keyof Omit<ListUseCasesRequest, "InstanceId">]: (Omit<ListUseCasesRequest, "InstanceId">)[K]
    }>): Request<ListUseCasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUseCases(
          this.ops["ListUseCases"].applicator.apply(partialParams)
        );
    }

    invokeListUserHierarchyGroups(partialParams: ToOptional<{
      [K in keyof Omit<ListUserHierarchyGroupsRequest, "InstanceId">]: (Omit<ListUserHierarchyGroupsRequest, "InstanceId">)[K]
    }>): Request<ListUserHierarchyGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserHierarchyGroups(
          this.ops["ListUserHierarchyGroups"].applicator.apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof Omit<ListUsersRequest, "InstanceId">]: (Omit<ListUsersRequest, "InstanceId">)[K]
    }>): Request<ListUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].applicator.apply(partialParams)
        );
    }

    invokeResumeContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<ResumeContactRecordingRequest, "InstanceId">]: (Omit<ResumeContactRecordingRequest, "InstanceId">)[K]
    }>): Request<ResumeContactRecordingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeContactRecording(
          this.ops["ResumeContactRecording"].applicator.apply(partialParams)
        );
    }

    invokeSearchVocabularies(partialParams: ToOptional<{
      [K in keyof Omit<SearchVocabulariesRequest, "InstanceId">]: (Omit<SearchVocabulariesRequest, "InstanceId">)[K]
    }>): Request<SearchVocabulariesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchVocabularies(
          this.ops["SearchVocabularies"].applicator.apply(partialParams)
        );
    }

    invokeStartChatContact(partialParams: ToOptional<{
      [K in keyof Omit<StartChatContactRequest, "InstanceId">]: (Omit<StartChatContactRequest, "InstanceId">)[K]
    }>): Request<StartChatContactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startChatContact(
          this.ops["StartChatContact"].applicator.apply(partialParams)
        );
    }

    invokeStartContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<StartContactRecordingRequest, "InstanceId">]: (Omit<StartContactRecordingRequest, "InstanceId">)[K]
    }>): Request<StartContactRecordingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startContactRecording(
          this.ops["StartContactRecording"].applicator.apply(partialParams)
        );
    }

    invokeStartContactStreaming(partialParams: ToOptional<{
      [K in keyof Omit<StartContactStreamingRequest, "InstanceId">]: (Omit<StartContactStreamingRequest, "InstanceId">)[K]
    }>): Request<StartContactStreamingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startContactStreaming(
          this.ops["StartContactStreaming"].applicator.apply(partialParams)
        );
    }

    invokeStartOutboundVoiceContact(partialParams: ToOptional<{
      [K in keyof Omit<StartOutboundVoiceContactRequest, "InstanceId">]: (Omit<StartOutboundVoiceContactRequest, "InstanceId">)[K]
    }>): Request<StartOutboundVoiceContactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startOutboundVoiceContact(
          this.ops["StartOutboundVoiceContact"].applicator.apply(partialParams)
        );
    }

    invokeStartTaskContact(partialParams: ToOptional<{
      [K in keyof Omit<StartTaskContactRequest, "InstanceId">]: (Omit<StartTaskContactRequest, "InstanceId">)[K]
    }>): Request<StartTaskContactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startTaskContact(
          this.ops["StartTaskContact"].applicator.apply(partialParams)
        );
    }

    invokeStopContact(partialParams: ToOptional<{
      [K in keyof Omit<StopContactRequest, "InstanceId">]: (Omit<StopContactRequest, "InstanceId">)[K]
    }>): Request<StopContactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopContact(
          this.ops["StopContact"].applicator.apply(partialParams)
        );
    }

    invokeStopContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<StopContactRecordingRequest, "InstanceId">]: (Omit<StopContactRecordingRequest, "InstanceId">)[K]
    }>): Request<StopContactRecordingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopContactRecording(
          this.ops["StopContactRecording"].applicator.apply(partialParams)
        );
    }

    invokeStopContactStreaming(partialParams: ToOptional<{
      [K in keyof Omit<StopContactStreamingRequest, "InstanceId">]: (Omit<StopContactStreamingRequest, "InstanceId">)[K]
    }>): Request<StopContactStreamingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopContactStreaming(
          this.ops["StopContactStreaming"].applicator.apply(partialParams)
        );
    }

    invokeSuspendContactRecording(partialParams: ToOptional<{
      [K in keyof Omit<SuspendContactRecordingRequest, "InstanceId">]: (Omit<SuspendContactRecordingRequest, "InstanceId">)[K]
    }>): Request<SuspendContactRecordingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.suspendContactRecording(
          this.ops["SuspendContactRecording"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAgentStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAgentStatusRequest, "InstanceId">]: (Omit<UpdateAgentStatusRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAgentStatus(
          this.ops["UpdateAgentStatus"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContact(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactRequest, "InstanceId">]: (Omit<UpdateContactRequest, "InstanceId">)[K]
    }>): Request<UpdateContactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContact(
          this.ops["UpdateContact"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContactAttributes(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactAttributesRequest, "InstanceId">]: (Omit<UpdateContactAttributesRequest, "InstanceId">)[K]
    }>): Request<UpdateContactAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactAttributes(
          this.ops["UpdateContactAttributes"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContactFlowContent(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowContentRequest, "InstanceId">]: (Omit<UpdateContactFlowContentRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowContent(
          this.ops["UpdateContactFlowContent"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContactFlowMetadata(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowMetadataRequest, "InstanceId">]: (Omit<UpdateContactFlowMetadataRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowMetadata(
          this.ops["UpdateContactFlowMetadata"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleContent(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowModuleContentRequest, "InstanceId">]: (Omit<UpdateContactFlowModuleContentRequest, "InstanceId">)[K]
    }>): Request<UpdateContactFlowModuleContentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowModuleContent(
          this.ops["UpdateContactFlowModuleContent"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContactFlowModuleMetadata(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId">]: (Omit<UpdateContactFlowModuleMetadataRequest, "InstanceId">)[K]
    }>): Request<UpdateContactFlowModuleMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowModuleMetadata(
          this.ops["UpdateContactFlowModuleMetadata"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContactFlowName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactFlowNameRequest, "InstanceId">]: (Omit<UpdateContactFlowNameRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowName(
          this.ops["UpdateContactFlowName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContactSchedule(partialParams: ToOptional<{
      [K in keyof Omit<UpdateContactScheduleRequest, "InstanceId">]: (Omit<UpdateContactScheduleRequest, "InstanceId">)[K]
    }>): Request<UpdateContactScheduleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactSchedule(
          this.ops["UpdateContactSchedule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateHoursOfOperation(partialParams: ToOptional<{
      [K in keyof Omit<UpdateHoursOfOperationRequest, "InstanceId">]: (Omit<UpdateHoursOfOperationRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateHoursOfOperation(
          this.ops["UpdateHoursOfOperation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInstanceAttribute(partialParams: ToOptional<{
      [K in keyof Omit<UpdateInstanceAttributeRequest, "InstanceId">]: (Omit<UpdateInstanceAttributeRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstanceAttribute(
          this.ops["UpdateInstanceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInstanceStorageConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateInstanceStorageConfigRequest, "InstanceId">]: (Omit<UpdateInstanceStorageConfigRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstanceStorageConfig(
          this.ops["UpdateInstanceStorageConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQueueHoursOfOperation(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueHoursOfOperationRequest, "InstanceId">]: (Omit<UpdateQueueHoursOfOperationRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueHoursOfOperation(
          this.ops["UpdateQueueHoursOfOperation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQueueMaxContacts(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueMaxContactsRequest, "InstanceId">]: (Omit<UpdateQueueMaxContactsRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueMaxContacts(
          this.ops["UpdateQueueMaxContacts"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQueueName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueNameRequest, "InstanceId">]: (Omit<UpdateQueueNameRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueName(
          this.ops["UpdateQueueName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQueueOutboundCallerConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId">]: (Omit<UpdateQueueOutboundCallerConfigRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueOutboundCallerConfig(
          this.ops["UpdateQueueOutboundCallerConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQueueStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQueueStatusRequest, "InstanceId">]: (Omit<UpdateQueueStatusRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueStatus(
          this.ops["UpdateQueueStatus"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQuickConnectConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQuickConnectConfigRequest, "InstanceId">]: (Omit<UpdateQuickConnectConfigRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQuickConnectConfig(
          this.ops["UpdateQuickConnectConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQuickConnectName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateQuickConnectNameRequest, "InstanceId">]: (Omit<UpdateQuickConnectNameRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQuickConnectName(
          this.ops["UpdateQuickConnectName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileConcurrency(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId">]: (Omit<UpdateRoutingProfileConcurrencyRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileConcurrency(
          this.ops["UpdateRoutingProfileConcurrency"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileDefaultOutboundQueue(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId">]: (Omit<UpdateRoutingProfileDefaultOutboundQueueRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileDefaultOutboundQueue(
          this.ops["UpdateRoutingProfileDefaultOutboundQueue"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileNameRequest, "InstanceId">]: (Omit<UpdateRoutingProfileNameRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileName(
          this.ops["UpdateRoutingProfileName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoutingProfileQueues(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRoutingProfileQueuesRequest, "InstanceId">]: (Omit<UpdateRoutingProfileQueuesRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileQueues(
          this.ops["UpdateRoutingProfileQueues"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSecurityProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateSecurityProfileRequest, "InstanceId">]: (Omit<UpdateSecurityProfileRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSecurityProfile(
          this.ops["UpdateSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserHierarchy(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserHierarchyRequest, "InstanceId">]: (Omit<UpdateUserHierarchyRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserHierarchy(
          this.ops["UpdateUserHierarchy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyGroupName(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId">]: (Omit<UpdateUserHierarchyGroupNameRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserHierarchyGroupName(
          this.ops["UpdateUserHierarchyGroupName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserHierarchyStructure(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserHierarchyStructureRequest, "InstanceId">]: (Omit<UpdateUserHierarchyStructureRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserHierarchyStructure(
          this.ops["UpdateUserHierarchyStructure"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserIdentityInfo(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserIdentityInfoRequest, "InstanceId">]: (Omit<UpdateUserIdentityInfoRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserIdentityInfo(
          this.ops["UpdateUserIdentityInfo"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserPhoneConfig(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserPhoneConfigRequest, "InstanceId">]: (Omit<UpdateUserPhoneConfigRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserPhoneConfig(
          this.ops["UpdateUserPhoneConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserRoutingProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserRoutingProfileRequest, "InstanceId">]: (Omit<UpdateUserRoutingProfileRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserRoutingProfile(
          this.ops["UpdateUserRoutingProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserSecurityProfiles(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUserSecurityProfilesRequest, "InstanceId">]: (Omit<UpdateUserSecurityProfilesRequest, "InstanceId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserSecurityProfiles(
          this.ops["UpdateUserSecurityProfiles"].applicator.apply(partialParams)
        );
    }
}