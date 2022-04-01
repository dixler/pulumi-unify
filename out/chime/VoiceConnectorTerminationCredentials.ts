
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociatePhoneNumberWithUserRequest,
    AssociatePhoneNumbersWithVoiceConnectorRequest,
    AssociatePhoneNumbersWithVoiceConnectorGroupRequest,
    AssociateSigninDelegateGroupsWithAccountRequest,
    BatchCreateAttendeeRequest,
    BatchCreateChannelMembershipRequest,
    BatchCreateRoomMembershipRequest,
    BatchDeletePhoneNumberRequest,
    BatchSuspendUserRequest,
    BatchUnsuspendUserRequest,
    BatchUpdatePhoneNumberRequest,
    BatchUpdateUserRequest,
    CreateAccountRequest,
    CreateAppInstanceRequest,
    CreateAppInstanceAdminRequest,
    CreateAppInstanceUserRequest,
    CreateAttendeeRequest,
    CreateBotRequest,
    CreateChannelRequest,
    CreateChannelBanRequest,
    CreateChannelMembershipRequest,
    CreateChannelModeratorRequest,
    CreateMediaCapturePipelineRequest,
    CreateMeetingRequest,
    CreateMeetingDialOutRequest,
    CreateMeetingWithAttendeesRequest,
    CreatePhoneNumberOrderRequest,
    CreateProxySessionRequest,
    CreateRoomRequest,
    CreateRoomMembershipRequest,
    CreateSipMediaApplicationRequest,
    CreateSipMediaApplicationCallRequest,
    CreateSipRuleRequest,
    CreateUserRequest,
    CreateVoiceConnectorRequest,
    CreateVoiceConnectorGroupRequest,
    DeleteAccountRequest,
    DescribeAppInstanceRequest,
    DescribeAppInstanceAdminRequest,
    DescribeAppInstanceUserRequest,
    DescribeChannelRequest,
    DescribeChannelBanRequest,
    DescribeChannelMembershipRequest,
    DescribeChannelMembershipForAppInstanceUserRequest,
    DescribeChannelModeratedByAppInstanceUserRequest,
    DescribeChannelModeratorRequest,
    DisassociatePhoneNumberFromUserRequest,
    DisassociatePhoneNumbersFromVoiceConnectorRequest,
    DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
    DisassociateSigninDelegateGroupsFromAccountRequest,
    GetAccountRequest,
    GetAccountSettingsRequest,
    GetAppInstanceRetentionSettingsRequest,
    GetAppInstanceStreamingConfigurationsRequest,
    GetAttendeeRequest,
    GetBotRequest,
    GetChannelMessageRequest,
    GetEventsConfigurationRequest,
    GetMediaCapturePipelineRequest,
    GetMeetingRequest,
    GetMessagingSessionEndpointRequest,
    GetPhoneNumberRequest,
    GetPhoneNumberOrderRequest,
    GetProxySessionRequest,
    GetRetentionSettingsRequest,
    GetRoomRequest,
    GetSipMediaApplicationRequest,
    GetSipMediaApplicationLoggingConfigurationRequest,
    GetSipRuleRequest,
    GetUserRequest,
    GetUserSettingsRequest,
    GetVoiceConnectorRequest,
    GetVoiceConnectorEmergencyCallingConfigurationRequest,
    GetVoiceConnectorGroupRequest,
    GetVoiceConnectorLoggingConfigurationRequest,
    GetVoiceConnectorOriginationRequest,
    GetVoiceConnectorProxyRequest,
    GetVoiceConnectorStreamingConfigurationRequest,
    GetVoiceConnectorTerminationRequest,
    GetVoiceConnectorTerminationHealthRequest,
    InviteUsersRequest,
    ListAccountsRequest,
    ListAppInstanceAdminsRequest,
    ListAppInstanceUsersRequest,
    ListAppInstancesRequest,
    ListAttendeeTagsRequest,
    ListAttendeesRequest,
    ListBotsRequest,
    ListChannelBansRequest,
    ListChannelMembershipsRequest,
    ListChannelMembershipsForAppInstanceUserRequest,
    ListChannelMessagesRequest,
    ListChannelModeratorsRequest,
    ListChannelsRequest,
    ListChannelsModeratedByAppInstanceUserRequest,
    ListMediaCapturePipelinesRequest,
    ListMeetingTagsRequest,
    ListMeetingsRequest,
    ListPhoneNumberOrdersRequest,
    ListPhoneNumbersRequest,
    ListProxySessionsRequest,
    ListRoomMembershipsRequest,
    ListRoomsRequest,
    ListSipMediaApplicationsRequest,
    ListSipRulesRequest,
    ListSupportedPhoneNumberCountriesRequest,
    ListTagsForResourceRequest,
    ListUsersRequest,
    ListVoiceConnectorGroupsRequest,
    ListVoiceConnectorTerminationCredentialsRequest,
    ListVoiceConnectorsRequest,
    LogoutUserRequest,
    PutAppInstanceRetentionSettingsRequest,
    PutAppInstanceStreamingConfigurationsRequest,
    PutEventsConfigurationRequest,
    PutRetentionSettingsRequest,
    PutSipMediaApplicationLoggingConfigurationRequest,
    PutVoiceConnectorEmergencyCallingConfigurationRequest,
    PutVoiceConnectorLoggingConfigurationRequest,
    PutVoiceConnectorOriginationRequest,
    PutVoiceConnectorProxyRequest,
    PutVoiceConnectorStreamingConfigurationRequest,
    PutVoiceConnectorTerminationRequest,
    RedactChannelMessageRequest,
    RedactConversationMessageRequest,
    RedactRoomMessageRequest,
    RegenerateSecurityTokenRequest,
    ResetPersonalPINRequest,
    RestorePhoneNumberRequest,
    SearchAvailablePhoneNumbersRequest,
    SendChannelMessageRequest,
    StartMeetingTranscriptionRequest,
    StopMeetingTranscriptionRequest,
    UpdateAccountRequest,
    UpdateAccountSettingsRequest,
    UpdateAppInstanceRequest,
    UpdateAppInstanceUserRequest,
    UpdateBotRequest,
    UpdateChannelRequest,
    UpdateChannelMessageRequest,
    UpdateChannelReadMarkerRequest,
    UpdatePhoneNumberRequest,
    UpdateProxySessionRequest,
    UpdateRoomRequest,
    UpdateRoomMembershipRequest,
    UpdateSipMediaApplicationRequest,
    UpdateSipMediaApplicationCallRequest,
    UpdateSipRuleRequest,
    UpdateUserRequest,
    UpdateVoiceConnectorRequest,
    UpdateVoiceConnectorGroupRequest,
    AssociatePhoneNumberWithUserResponse,
    AssociatePhoneNumbersWithVoiceConnectorResponse,
    AssociatePhoneNumbersWithVoiceConnectorGroupResponse,
    AssociateSigninDelegateGroupsWithAccountResponse,
    BatchCreateAttendeeResponse,
    BatchCreateChannelMembershipResponse,
    BatchCreateRoomMembershipResponse,
    BatchDeletePhoneNumberResponse,
    BatchSuspendUserResponse,
    BatchUnsuspendUserResponse,
    BatchUpdatePhoneNumberResponse,
    BatchUpdateUserResponse,
    CreateAccountResponse,
    CreateAppInstanceResponse,
    CreateAppInstanceAdminResponse,
    CreateAppInstanceUserResponse,
    CreateAttendeeResponse,
    CreateBotResponse,
    CreateChannelResponse,
    CreateChannelBanResponse,
    CreateChannelMembershipResponse,
    CreateChannelModeratorResponse,
    CreateMediaCapturePipelineResponse,
    CreateMeetingResponse,
    CreateMeetingDialOutResponse,
    CreateMeetingWithAttendeesResponse,
    CreatePhoneNumberOrderResponse,
    CreateProxySessionResponse,
    CreateRoomResponse,
    CreateRoomMembershipResponse,
    CreateSipMediaApplicationResponse,
    CreateSipMediaApplicationCallResponse,
    CreateSipRuleResponse,
    CreateUserResponse,
    CreateVoiceConnectorResponse,
    CreateVoiceConnectorGroupResponse,
    DeleteAccountResponse,
    DescribeAppInstanceResponse,
    DescribeAppInstanceAdminResponse,
    DescribeAppInstanceUserResponse,
    DescribeChannelResponse,
    DescribeChannelBanResponse,
    DescribeChannelMembershipResponse,
    DescribeChannelMembershipForAppInstanceUserResponse,
    DescribeChannelModeratedByAppInstanceUserResponse,
    DescribeChannelModeratorResponse,
    DisassociatePhoneNumberFromUserResponse,
    DisassociatePhoneNumbersFromVoiceConnectorResponse,
    DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
    DisassociateSigninDelegateGroupsFromAccountResponse,
    GetAccountResponse,
    GetAccountSettingsResponse,
    GetAppInstanceRetentionSettingsResponse,
    GetAppInstanceStreamingConfigurationsResponse,
    GetAttendeeResponse,
    GetBotResponse,
    GetChannelMessageResponse,
    GetEventsConfigurationResponse,
    GetMediaCapturePipelineResponse,
    GetMeetingResponse,
    GetMessagingSessionEndpointResponse,
    GetPhoneNumberResponse,
    GetPhoneNumberOrderResponse,
    GetProxySessionResponse,
    GetRetentionSettingsResponse,
    GetRoomResponse,
    GetSipMediaApplicationResponse,
    GetSipMediaApplicationLoggingConfigurationResponse,
    GetSipRuleResponse,
    GetUserResponse,
    GetUserSettingsResponse,
    GetVoiceConnectorResponse,
    GetVoiceConnectorEmergencyCallingConfigurationResponse,
    GetVoiceConnectorGroupResponse,
    GetVoiceConnectorLoggingConfigurationResponse,
    GetVoiceConnectorOriginationResponse,
    GetVoiceConnectorProxyResponse,
    GetVoiceConnectorStreamingConfigurationResponse,
    GetVoiceConnectorTerminationResponse,
    GetVoiceConnectorTerminationHealthResponse,
    InviteUsersResponse,
    ListAccountsResponse,
    ListAppInstanceAdminsResponse,
    ListAppInstanceUsersResponse,
    ListAppInstancesResponse,
    ListAttendeeTagsResponse,
    ListAttendeesResponse,
    ListBotsResponse,
    ListChannelBansResponse,
    ListChannelMembershipsResponse,
    ListChannelMembershipsForAppInstanceUserResponse,
    ListChannelMessagesResponse,
    ListChannelModeratorsResponse,
    ListChannelsResponse,
    ListChannelsModeratedByAppInstanceUserResponse,
    ListMediaCapturePipelinesResponse,
    ListMeetingTagsResponse,
    ListMeetingsResponse,
    ListPhoneNumberOrdersResponse,
    ListPhoneNumbersResponse,
    ListProxySessionsResponse,
    ListRoomMembershipsResponse,
    ListRoomsResponse,
    ListSipMediaApplicationsResponse,
    ListSipRulesResponse,
    ListSupportedPhoneNumberCountriesResponse,
    ListTagsForResourceResponse,
    ListUsersResponse,
    ListVoiceConnectorGroupsResponse,
    ListVoiceConnectorTerminationCredentialsResponse,
    ListVoiceConnectorsResponse,
    LogoutUserResponse,
    PutAppInstanceRetentionSettingsResponse,
    PutAppInstanceStreamingConfigurationsResponse,
    PutEventsConfigurationResponse,
    PutRetentionSettingsResponse,
    PutSipMediaApplicationLoggingConfigurationResponse,
    PutVoiceConnectorEmergencyCallingConfigurationResponse,
    PutVoiceConnectorLoggingConfigurationResponse,
    PutVoiceConnectorOriginationResponse,
    PutVoiceConnectorProxyResponse,
    PutVoiceConnectorStreamingConfigurationResponse,
    PutVoiceConnectorTerminationResponse,
    RedactChannelMessageResponse,
    RedactConversationMessageResponse,
    RedactRoomMessageResponse,
    RegenerateSecurityTokenResponse,
    ResetPersonalPINResponse,
    RestorePhoneNumberResponse,
    SearchAvailablePhoneNumbersResponse,
    SendChannelMessageResponse,
    StartMeetingTranscriptionResponse,
    StopMeetingTranscriptionResponse,
    UpdateAccountResponse,
    UpdateAccountSettingsResponse,
    UpdateAppInstanceResponse,
    UpdateAppInstanceUserResponse,
    UpdateBotResponse,
    UpdateChannelResponse,
    UpdateChannelMessageResponse,
    UpdateChannelReadMarkerResponse,
    UpdatePhoneNumberResponse,
    UpdateProxySessionResponse,
    UpdateRoomResponse,
    UpdateRoomMembershipResponse,
    UpdateSipMediaApplicationResponse,
    UpdateSipMediaApplicationCallResponse,
    UpdateSipRuleResponse,
    UpdateUserResponse,
    UpdateVoiceConnectorResponse,
    UpdateVoiceConnectorGroupResponse
} from "aws-sdk/clients/chime";
const schema = require("../apis/chime-2018-05-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.chime.VoiceConnectorTerminationCredentials {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.chime.VoiceConnectorTerminationCredentials>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Chime()
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

    invokeAssociatePhoneNumberWithUser(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumberWithUserRequest]: (AssociatePhoneNumberWithUserRequest)[K]
    }>): Request<AssociatePhoneNumberWithUserResponse, AWSError> {
        this.boot();
        return this.client.associatePhoneNumberWithUser(
          this.ops["AssociatePhoneNumberWithUser"].apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorRequest & keyof Omit<AssociatePhoneNumbersWithVoiceConnectorRequest, "VoiceConnectorId">]: (AssociatePhoneNumbersWithVoiceConnectorRequest)[K]
    }>): Request<AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnector(
          this.ops["AssociatePhoneNumbersWithVoiceConnector"].apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorGroupRequest]: (AssociatePhoneNumbersWithVoiceConnectorGroupRequest)[K]
    }>): Request<AssociatePhoneNumbersWithVoiceConnectorGroupResponse, AWSError> {
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(
          this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeAssociateSigninDelegateGroupsWithAccount(partialParams: ToOptional<{
      [K in keyof AssociateSigninDelegateGroupsWithAccountRequest]: (AssociateSigninDelegateGroupsWithAccountRequest)[K]
    }>): Request<AssociateSigninDelegateGroupsWithAccountResponse, AWSError> {
        this.boot();
        return this.client.associateSigninDelegateGroupsWithAccount(
          this.ops["AssociateSigninDelegateGroupsWithAccount"].apply(partialParams)
        );
    }

    invokeBatchCreateAttendee(partialParams: ToOptional<{
      [K in keyof BatchCreateAttendeeRequest]: (BatchCreateAttendeeRequest)[K]
    }>): Request<BatchCreateAttendeeResponse, AWSError> {
        this.boot();
        return this.client.batchCreateAttendee(
          this.ops["BatchCreateAttendee"].apply(partialParams)
        );
    }

    invokeBatchCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateChannelMembershipRequest]: (BatchCreateChannelMembershipRequest)[K]
    }>): Request<BatchCreateChannelMembershipResponse, AWSError> {
        this.boot();
        return this.client.batchCreateChannelMembership(
          this.ops["BatchCreateChannelMembership"].apply(partialParams)
        );
    }

    invokeBatchCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateRoomMembershipRequest]: (BatchCreateRoomMembershipRequest)[K]
    }>): Request<BatchCreateRoomMembershipResponse, AWSError> {
        this.boot();
        return this.client.batchCreateRoomMembership(
          this.ops["BatchCreateRoomMembership"].apply(partialParams)
        );
    }

    invokeBatchDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchDeletePhoneNumberRequest]: (BatchDeletePhoneNumberRequest)[K]
    }>): Request<BatchDeletePhoneNumberResponse, AWSError> {
        this.boot();
        return this.client.batchDeletePhoneNumber(
          this.ops["BatchDeletePhoneNumber"].apply(partialParams)
        );
    }

    invokeBatchSuspendUser(partialParams: ToOptional<{
      [K in keyof BatchSuspendUserRequest]: (BatchSuspendUserRequest)[K]
    }>): Request<BatchSuspendUserResponse, AWSError> {
        this.boot();
        return this.client.batchSuspendUser(
          this.ops["BatchSuspendUser"].apply(partialParams)
        );
    }

    invokeBatchUnsuspendUser(partialParams: ToOptional<{
      [K in keyof BatchUnsuspendUserRequest]: (BatchUnsuspendUserRequest)[K]
    }>): Request<BatchUnsuspendUserResponse, AWSError> {
        this.boot();
        return this.client.batchUnsuspendUser(
          this.ops["BatchUnsuspendUser"].apply(partialParams)
        );
    }

    invokeBatchUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchUpdatePhoneNumberRequest]: (BatchUpdatePhoneNumberRequest)[K]
    }>): Request<BatchUpdatePhoneNumberResponse, AWSError> {
        this.boot();
        return this.client.batchUpdatePhoneNumber(
          this.ops["BatchUpdatePhoneNumber"].apply(partialParams)
        );
    }

    invokeBatchUpdateUser(partialParams: ToOptional<{
      [K in keyof BatchUpdateUserRequest]: (BatchUpdateUserRequest)[K]
    }>): Request<BatchUpdateUserResponse, AWSError> {
        this.boot();
        return this.client.batchUpdateUser(
          this.ops["BatchUpdateUser"].apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest]: (CreateAccountRequest)[K]
    }>): Request<CreateAccountResponse, AWSError> {
        this.boot();
        return this.client.createAccount(
          this.ops["CreateAccount"].apply(partialParams)
        );
    }

    invokeCreateAppInstance(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceRequest]: (CreateAppInstanceRequest)[K]
    }>): Request<CreateAppInstanceResponse, AWSError> {
        this.boot();
        return this.client.createAppInstance(
          this.ops["CreateAppInstance"].apply(partialParams)
        );
    }

    invokeCreateAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceAdminRequest]: (CreateAppInstanceAdminRequest)[K]
    }>): Request<CreateAppInstanceAdminResponse, AWSError> {
        this.boot();
        return this.client.createAppInstanceAdmin(
          this.ops["CreateAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeCreateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceUserRequest]: (CreateAppInstanceUserRequest)[K]
    }>): Request<CreateAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.createAppInstanceUser(
          this.ops["CreateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeCreateAttendee(partialParams: ToOptional<{
      [K in keyof CreateAttendeeRequest]: (CreateAttendeeRequest)[K]
    }>): Request<CreateAttendeeResponse, AWSError> {
        this.boot();
        return this.client.createAttendee(
          this.ops["CreateAttendee"].apply(partialParams)
        );
    }

    invokeCreateBot(partialParams: ToOptional<{
      [K in keyof CreateBotRequest]: (CreateBotRequest)[K]
    }>): Request<CreateBotResponse, AWSError> {
        this.boot();
        return this.client.createBot(
          this.ops["CreateBot"].apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest]: (CreateChannelRequest)[K]
    }>): Request<CreateChannelResponse, AWSError> {
        this.boot();
        return this.client.createChannel(
          this.ops["CreateChannel"].apply(partialParams)
        );
    }

    invokeCreateChannelBan(partialParams: ToOptional<{
      [K in keyof CreateChannelBanRequest]: (CreateChannelBanRequest)[K]
    }>): Request<CreateChannelBanResponse, AWSError> {
        this.boot();
        return this.client.createChannelBan(
          this.ops["CreateChannelBan"].apply(partialParams)
        );
    }

    invokeCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof CreateChannelMembershipRequest]: (CreateChannelMembershipRequest)[K]
    }>): Request<CreateChannelMembershipResponse, AWSError> {
        this.boot();
        return this.client.createChannelMembership(
          this.ops["CreateChannelMembership"].apply(partialParams)
        );
    }

    invokeCreateChannelModerator(partialParams: ToOptional<{
      [K in keyof CreateChannelModeratorRequest]: (CreateChannelModeratorRequest)[K]
    }>): Request<CreateChannelModeratorResponse, AWSError> {
        this.boot();
        return this.client.createChannelModerator(
          this.ops["CreateChannelModerator"].apply(partialParams)
        );
    }

    invokeCreateMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof CreateMediaCapturePipelineRequest]: (CreateMediaCapturePipelineRequest)[K]
    }>): Request<CreateMediaCapturePipelineResponse, AWSError> {
        this.boot();
        return this.client.createMediaCapturePipeline(
          this.ops["CreateMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeCreateMeeting(partialParams: ToOptional<{
      [K in keyof CreateMeetingRequest]: (CreateMeetingRequest)[K]
    }>): Request<CreateMeetingResponse, AWSError> {
        this.boot();
        return this.client.createMeeting(
          this.ops["CreateMeeting"].apply(partialParams)
        );
    }

    invokeCreateMeetingDialOut(partialParams: ToOptional<{
      [K in keyof CreateMeetingDialOutRequest]: (CreateMeetingDialOutRequest)[K]
    }>): Request<CreateMeetingDialOutResponse, AWSError> {
        this.boot();
        return this.client.createMeetingDialOut(
          this.ops["CreateMeetingDialOut"].apply(partialParams)
        );
    }

    invokeCreateMeetingWithAttendees(partialParams: ToOptional<{
      [K in keyof CreateMeetingWithAttendeesRequest]: (CreateMeetingWithAttendeesRequest)[K]
    }>): Request<CreateMeetingWithAttendeesResponse, AWSError> {
        this.boot();
        return this.client.createMeetingWithAttendees(
          this.ops["CreateMeetingWithAttendees"].apply(partialParams)
        );
    }

    invokeCreatePhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof CreatePhoneNumberOrderRequest]: (CreatePhoneNumberOrderRequest)[K]
    }>): Request<CreatePhoneNumberOrderResponse, AWSError> {
        this.boot();
        return this.client.createPhoneNumberOrder(
          this.ops["CreatePhoneNumberOrder"].apply(partialParams)
        );
    }

    invokeCreateProxySession(partialParams: ToOptional<{
      [K in keyof CreateProxySessionRequest & keyof Omit<CreateProxySessionRequest, "VoiceConnectorId">]: (CreateProxySessionRequest)[K]
    }>): Request<CreateProxySessionResponse, AWSError> {
        this.boot();
        return this.client.createProxySession(
          this.ops["CreateProxySession"].apply(partialParams)
        );
    }

    invokeCreateRoom(partialParams: ToOptional<{
      [K in keyof CreateRoomRequest]: (CreateRoomRequest)[K]
    }>): Request<CreateRoomResponse, AWSError> {
        this.boot();
        return this.client.createRoom(
          this.ops["CreateRoom"].apply(partialParams)
        );
    }

    invokeCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof CreateRoomMembershipRequest]: (CreateRoomMembershipRequest)[K]
    }>): Request<CreateRoomMembershipResponse, AWSError> {
        this.boot();
        return this.client.createRoomMembership(
          this.ops["CreateRoomMembership"].apply(partialParams)
        );
    }

    invokeCreateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationRequest]: (CreateSipMediaApplicationRequest)[K]
    }>): Request<CreateSipMediaApplicationResponse, AWSError> {
        this.boot();
        return this.client.createSipMediaApplication(
          this.ops["CreateSipMediaApplication"].apply(partialParams)
        );
    }

    invokeCreateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationCallRequest]: (CreateSipMediaApplicationCallRequest)[K]
    }>): Request<CreateSipMediaApplicationCallResponse, AWSError> {
        this.boot();
        return this.client.createSipMediaApplicationCall(
          this.ops["CreateSipMediaApplicationCall"].apply(partialParams)
        );
    }

    invokeCreateSipRule(partialParams: ToOptional<{
      [K in keyof CreateSipRuleRequest]: (CreateSipRuleRequest)[K]
    }>): Request<CreateSipRuleResponse, AWSError> {
        this.boot();
        return this.client.createSipRule(
          this.ops["CreateSipRule"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnector(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorRequest]: (CreateVoiceConnectorRequest)[K]
    }>): Request<CreateVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.createVoiceConnector(
          this.ops["CreateVoiceConnector"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorGroupRequest]: (CreateVoiceConnectorGroupRequest)[K]
    }>): Request<CreateVoiceConnectorGroupResponse, AWSError> {
        this.boot();
        return this.client.createVoiceConnectorGroup(
          this.ops["CreateVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDeleteAccount(partialParams: ToOptional<{
      [K in keyof DeleteAccountRequest]: (DeleteAccountRequest)[K]
    }>): Request<DeleteAccountResponse, AWSError> {
        this.boot();
        return this.client.deleteAccount(
          this.ops["DeleteAccount"].apply(partialParams)
        );
    }

    invokeDescribeAppInstance(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceRequest]: (DescribeAppInstanceRequest)[K]
    }>): Request<DescribeAppInstanceResponse, AWSError> {
        this.boot();
        return this.client.describeAppInstance(
          this.ops["DescribeAppInstance"].apply(partialParams)
        );
    }

    invokeDescribeAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceAdminRequest]: (DescribeAppInstanceAdminRequest)[K]
    }>): Request<DescribeAppInstanceAdminResponse, AWSError> {
        this.boot();
        return this.client.describeAppInstanceAdmin(
          this.ops["DescribeAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeDescribeAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceUserRequest]: (DescribeAppInstanceUserRequest)[K]
    }>): Request<DescribeAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.describeAppInstanceUser(
          this.ops["DescribeAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest]: (DescribeChannelRequest)[K]
    }>): Request<DescribeChannelResponse, AWSError> {
        this.boot();
        return this.client.describeChannel(
          this.ops["DescribeChannel"].apply(partialParams)
        );
    }

    invokeDescribeChannelBan(partialParams: ToOptional<{
      [K in keyof DescribeChannelBanRequest]: (DescribeChannelBanRequest)[K]
    }>): Request<DescribeChannelBanResponse, AWSError> {
        this.boot();
        return this.client.describeChannelBan(
          this.ops["DescribeChannelBan"].apply(partialParams)
        );
    }

    invokeDescribeChannelMembership(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipRequest]: (DescribeChannelMembershipRequest)[K]
    }>): Request<DescribeChannelMembershipResponse, AWSError> {
        this.boot();
        return this.client.describeChannelMembership(
          this.ops["DescribeChannelMembership"].apply(partialParams)
        );
    }

    invokeDescribeChannelMembershipForAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipForAppInstanceUserRequest]: (DescribeChannelMembershipForAppInstanceUserRequest)[K]
    }>): Request<DescribeChannelMembershipForAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.describeChannelMembershipForAppInstanceUser(
          this.ops["DescribeChannelMembershipForAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannelModeratedByAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratedByAppInstanceUserRequest]: (DescribeChannelModeratedByAppInstanceUserRequest)[K]
    }>): Request<DescribeChannelModeratedByAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.describeChannelModeratedByAppInstanceUser(
          this.ops["DescribeChannelModeratedByAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannelModerator(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratorRequest]: (DescribeChannelModeratorRequest)[K]
    }>): Request<DescribeChannelModeratorResponse, AWSError> {
        this.boot();
        return this.client.describeChannelModerator(
          this.ops["DescribeChannelModerator"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumberFromUser(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumberFromUserRequest]: (DisassociatePhoneNumberFromUserRequest)[K]
    }>): Request<DisassociatePhoneNumberFromUserResponse, AWSError> {
        this.boot();
        return this.client.disassociatePhoneNumberFromUser(
          this.ops["DisassociatePhoneNumberFromUser"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorRequest & keyof Omit<DisassociatePhoneNumbersFromVoiceConnectorRequest, "VoiceConnectorId">]: (DisassociatePhoneNumbersFromVoiceConnectorRequest)[K]
    }>): Request<DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnector(
          this.ops["DisassociatePhoneNumbersFromVoiceConnector"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest]: (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest)[K]
    }>): Request<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, AWSError> {
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(
          this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams: ToOptional<{
      [K in keyof DisassociateSigninDelegateGroupsFromAccountRequest]: (DisassociateSigninDelegateGroupsFromAccountRequest)[K]
    }>): Request<DisassociateSigninDelegateGroupsFromAccountResponse, AWSError> {
        this.boot();
        return this.client.disassociateSigninDelegateGroupsFromAccount(
          this.ops["DisassociateSigninDelegateGroupsFromAccount"].apply(partialParams)
        );
    }

    invokeGetAccount(partialParams: ToOptional<{
      [K in keyof GetAccountRequest]: (GetAccountRequest)[K]
    }>): Request<GetAccountResponse, AWSError> {
        this.boot();
        return this.client.getAccount(
          this.ops["GetAccount"].apply(partialParams)
        );
    }

    invokeGetAccountSettings(partialParams: ToOptional<{
      [K in keyof GetAccountSettingsRequest]: (GetAccountSettingsRequest)[K]
    }>): Request<GetAccountSettingsResponse, AWSError> {
        this.boot();
        return this.client.getAccountSettings(
          this.ops["GetAccountSettings"].apply(partialParams)
        );
    }

    invokeGetAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetAppInstanceRetentionSettingsRequest]: (GetAppInstanceRetentionSettingsRequest)[K]
    }>): Request<GetAppInstanceRetentionSettingsResponse, AWSError> {
        this.boot();
        return this.client.getAppInstanceRetentionSettings(
          this.ops["GetAppInstanceRetentionSettings"].apply(partialParams)
        );
    }

    invokeGetAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof GetAppInstanceStreamingConfigurationsRequest]: (GetAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<GetAppInstanceStreamingConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.getAppInstanceStreamingConfigurations(
          this.ops["GetAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokeGetAttendee(partialParams: ToOptional<{
      [K in keyof GetAttendeeRequest]: (GetAttendeeRequest)[K]
    }>): Request<GetAttendeeResponse, AWSError> {
        this.boot();
        return this.client.getAttendee(
          this.ops["GetAttendee"].apply(partialParams)
        );
    }

    invokeGetBot(partialParams: ToOptional<{
      [K in keyof GetBotRequest]: (GetBotRequest)[K]
    }>): Request<GetBotResponse, AWSError> {
        this.boot();
        return this.client.getBot(
          this.ops["GetBot"].apply(partialParams)
        );
    }

    invokeGetChannelMessage(partialParams: ToOptional<{
      [K in keyof GetChannelMessageRequest]: (GetChannelMessageRequest)[K]
    }>): Request<GetChannelMessageResponse, AWSError> {
        this.boot();
        return this.client.getChannelMessage(
          this.ops["GetChannelMessage"].apply(partialParams)
        );
    }

    invokeGetEventsConfiguration(partialParams: ToOptional<{
      [K in keyof GetEventsConfigurationRequest]: (GetEventsConfigurationRequest)[K]
    }>): Request<GetEventsConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getEventsConfiguration(
          this.ops["GetEventsConfiguration"].apply(partialParams)
        );
    }

    invokeGetMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof GetMediaCapturePipelineRequest]: (GetMediaCapturePipelineRequest)[K]
    }>): Request<GetMediaCapturePipelineResponse, AWSError> {
        this.boot();
        return this.client.getMediaCapturePipeline(
          this.ops["GetMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeGetMeeting(partialParams: ToOptional<{
      [K in keyof GetMeetingRequest]: (GetMeetingRequest)[K]
    }>): Request<GetMeetingResponse, AWSError> {
        this.boot();
        return this.client.getMeeting(
          this.ops["GetMeeting"].apply(partialParams)
        );
    }

    invokeGetMessagingSessionEndpoint(partialParams: ToOptional<{
      [K in keyof GetMessagingSessionEndpointRequest]: (GetMessagingSessionEndpointRequest)[K]
    }>): Request<GetMessagingSessionEndpointResponse, AWSError> {
        this.boot();
        return this.client.getMessagingSessionEndpoint(
          this.ops["GetMessagingSessionEndpoint"].apply(partialParams)
        );
    }

    invokeGetPhoneNumber(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberRequest]: (GetPhoneNumberRequest)[K]
    }>): Request<GetPhoneNumberResponse, AWSError> {
        this.boot();
        return this.client.getPhoneNumber(
          this.ops["GetPhoneNumber"].apply(partialParams)
        );
    }

    invokeGetPhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberOrderRequest]: (GetPhoneNumberOrderRequest)[K]
    }>): Request<GetPhoneNumberOrderResponse, AWSError> {
        this.boot();
        return this.client.getPhoneNumberOrder(
          this.ops["GetPhoneNumberOrder"].apply(partialParams)
        );
    }

    invokeGetProxySession(partialParams: ToOptional<{
      [K in keyof GetProxySessionRequest & keyof Omit<GetProxySessionRequest, "VoiceConnectorId">]: (GetProxySessionRequest)[K]
    }>): Request<GetProxySessionResponse, AWSError> {
        this.boot();
        return this.client.getProxySession(
          this.ops["GetProxySession"].apply(partialParams)
        );
    }

    invokeGetRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetRetentionSettingsRequest]: (GetRetentionSettingsRequest)[K]
    }>): Request<GetRetentionSettingsResponse, AWSError> {
        this.boot();
        return this.client.getRetentionSettings(
          this.ops["GetRetentionSettings"].apply(partialParams)
        );
    }

    invokeGetRoom(partialParams: ToOptional<{
      [K in keyof GetRoomRequest]: (GetRoomRequest)[K]
    }>): Request<GetRoomResponse, AWSError> {
        this.boot();
        return this.client.getRoom(
          this.ops["GetRoom"].apply(partialParams)
        );
    }

    invokeGetSipMediaApplication(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationRequest]: (GetSipMediaApplicationRequest)[K]
    }>): Request<GetSipMediaApplicationResponse, AWSError> {
        this.boot();
        return this.client.getSipMediaApplication(
          this.ops["GetSipMediaApplication"].apply(partialParams)
        );
    }

    invokeGetSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationLoggingConfigurationRequest]: (GetSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): Request<GetSipMediaApplicationLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getSipMediaApplicationLoggingConfiguration(
          this.ops["GetSipMediaApplicationLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetSipRule(partialParams: ToOptional<{
      [K in keyof GetSipRuleRequest]: (GetSipRuleRequest)[K]
    }>): Request<GetSipRuleResponse, AWSError> {
        this.boot();
        return this.client.getSipRule(
          this.ops["GetSipRule"].apply(partialParams)
        );
    }

    invokeGetUser(partialParams: ToOptional<{
      [K in keyof GetUserRequest]: (GetUserRequest)[K]
    }>): Request<GetUserResponse, AWSError> {
        this.boot();
        return this.client.getUser(
          this.ops["GetUser"].apply(partialParams)
        );
    }

    invokeGetUserSettings(partialParams: ToOptional<{
      [K in keyof GetUserSettingsRequest]: (GetUserSettingsRequest)[K]
    }>): Request<GetUserSettingsResponse, AWSError> {
        this.boot();
        return this.client.getUserSettings(
          this.ops["GetUserSettings"].apply(partialParams)
        );
    }

    invokeGetVoiceConnector(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorRequest & keyof Omit<GetVoiceConnectorRequest, "VoiceConnectorId">]: (GetVoiceConnectorRequest)[K]
    }>): Request<GetVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnector(
          this.ops["GetVoiceConnector"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorEmergencyCallingConfigurationRequest & keyof Omit<GetVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">]: (GetVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(
          this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorGroupRequest]: (GetVoiceConnectorGroupRequest)[K]
    }>): Request<GetVoiceConnectorGroupResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorGroup(
          this.ops["GetVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorLoggingConfigurationRequest & keyof Omit<GetVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">]: (GetVoiceConnectorLoggingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorLoggingConfiguration(
          this.ops["GetVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorOriginationRequest & keyof Omit<GetVoiceConnectorOriginationRequest, "VoiceConnectorId">]: (GetVoiceConnectorOriginationRequest)[K]
    }>): Request<GetVoiceConnectorOriginationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorOrigination(
          this.ops["GetVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorProxyRequest & keyof Omit<GetVoiceConnectorProxyRequest, "VoiceConnectorId">]: (GetVoiceConnectorProxyRequest)[K]
    }>): Request<GetVoiceConnectorProxyResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorProxy(
          this.ops["GetVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorStreamingConfigurationRequest & keyof Omit<GetVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">]: (GetVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorStreamingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorStreamingConfiguration(
          this.ops["GetVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationRequest & keyof Omit<GetVoiceConnectorTerminationRequest, "VoiceConnectorId">]: (GetVoiceConnectorTerminationRequest)[K]
    }>): Request<GetVoiceConnectorTerminationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorTermination(
          this.ops["GetVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTerminationHealth(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationHealthRequest & keyof Omit<GetVoiceConnectorTerminationHealthRequest, "VoiceConnectorId">]: (GetVoiceConnectorTerminationHealthRequest)[K]
    }>): Request<GetVoiceConnectorTerminationHealthResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorTerminationHealth(
          this.ops["GetVoiceConnectorTerminationHealth"].apply(partialParams)
        );
    }

    invokeInviteUsers(partialParams: ToOptional<{
      [K in keyof InviteUsersRequest]: (InviteUsersRequest)[K]
    }>): Request<InviteUsersResponse, AWSError> {
        this.boot();
        return this.client.inviteUsers(
          this.ops["InviteUsers"].apply(partialParams)
        );
    }

    invokeListAccounts(partialParams: ToOptional<{
      [K in keyof ListAccountsRequest]: (ListAccountsRequest)[K]
    }>): Request<ListAccountsResponse, AWSError> {
        this.boot();
        return this.client.listAccounts(
          this.ops["ListAccounts"].apply(partialParams)
        );
    }

    invokeListAppInstanceAdmins(partialParams: ToOptional<{
      [K in keyof ListAppInstanceAdminsRequest]: (ListAppInstanceAdminsRequest)[K]
    }>): Request<ListAppInstanceAdminsResponse, AWSError> {
        this.boot();
        return this.client.listAppInstanceAdmins(
          this.ops["ListAppInstanceAdmins"].apply(partialParams)
        );
    }

    invokeListAppInstanceUsers(partialParams: ToOptional<{
      [K in keyof ListAppInstanceUsersRequest]: (ListAppInstanceUsersRequest)[K]
    }>): Request<ListAppInstanceUsersResponse, AWSError> {
        this.boot();
        return this.client.listAppInstanceUsers(
          this.ops["ListAppInstanceUsers"].apply(partialParams)
        );
    }

    invokeListAppInstances(partialParams: ToOptional<{
      [K in keyof ListAppInstancesRequest]: (ListAppInstancesRequest)[K]
    }>): Request<ListAppInstancesResponse, AWSError> {
        this.boot();
        return this.client.listAppInstances(
          this.ops["ListAppInstances"].apply(partialParams)
        );
    }

    invokeListAttendeeTags(partialParams: ToOptional<{
      [K in keyof ListAttendeeTagsRequest]: (ListAttendeeTagsRequest)[K]
    }>): Request<ListAttendeeTagsResponse, AWSError> {
        this.boot();
        return this.client.listAttendeeTags(
          this.ops["ListAttendeeTags"].apply(partialParams)
        );
    }

    invokeListAttendees(partialParams: ToOptional<{
      [K in keyof ListAttendeesRequest]: (ListAttendeesRequest)[K]
    }>): Request<ListAttendeesResponse, AWSError> {
        this.boot();
        return this.client.listAttendees(
          this.ops["ListAttendees"].apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest]: (ListBotsRequest)[K]
    }>): Request<ListBotsResponse, AWSError> {
        this.boot();
        return this.client.listBots(
          this.ops["ListBots"].apply(partialParams)
        );
    }

    invokeListChannelBans(partialParams: ToOptional<{
      [K in keyof ListChannelBansRequest]: (ListChannelBansRequest)[K]
    }>): Request<ListChannelBansResponse, AWSError> {
        this.boot();
        return this.client.listChannelBans(
          this.ops["ListChannelBans"].apply(partialParams)
        );
    }

    invokeListChannelMemberships(partialParams: ToOptional<{
      [K in keyof ListChannelMembershipsRequest]: (ListChannelMembershipsRequest)[K]
    }>): Request<ListChannelMembershipsResponse, AWSError> {
        this.boot();
        return this.client.listChannelMemberships(
          this.ops["ListChannelMemberships"].apply(partialParams)
        );
    }

    invokeListChannelMembershipsForAppInstanceUser(partialParams: ToOptional<{
      [K in keyof ListChannelMembershipsForAppInstanceUserRequest]: (ListChannelMembershipsForAppInstanceUserRequest)[K]
    }>): Request<ListChannelMembershipsForAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.listChannelMembershipsForAppInstanceUser(
          this.ops["ListChannelMembershipsForAppInstanceUser"].apply(partialParams)
        );
    }

    invokeListChannelMessages(partialParams: ToOptional<{
      [K in keyof ListChannelMessagesRequest]: (ListChannelMessagesRequest)[K]
    }>): Request<ListChannelMessagesResponse, AWSError> {
        this.boot();
        return this.client.listChannelMessages(
          this.ops["ListChannelMessages"].apply(partialParams)
        );
    }

    invokeListChannelModerators(partialParams: ToOptional<{
      [K in keyof ListChannelModeratorsRequest]: (ListChannelModeratorsRequest)[K]
    }>): Request<ListChannelModeratorsResponse, AWSError> {
        this.boot();
        return this.client.listChannelModerators(
          this.ops["ListChannelModerators"].apply(partialParams)
        );
    }

    invokeListChannels(partialParams: ToOptional<{
      [K in keyof ListChannelsRequest]: (ListChannelsRequest)[K]
    }>): Request<ListChannelsResponse, AWSError> {
        this.boot();
        return this.client.listChannels(
          this.ops["ListChannels"].apply(partialParams)
        );
    }

    invokeListChannelsModeratedByAppInstanceUser(partialParams: ToOptional<{
      [K in keyof ListChannelsModeratedByAppInstanceUserRequest]: (ListChannelsModeratedByAppInstanceUserRequest)[K]
    }>): Request<ListChannelsModeratedByAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.listChannelsModeratedByAppInstanceUser(
          this.ops["ListChannelsModeratedByAppInstanceUser"].apply(partialParams)
        );
    }

    invokeListMediaCapturePipelines(partialParams: ToOptional<{
      [K in keyof ListMediaCapturePipelinesRequest]: (ListMediaCapturePipelinesRequest)[K]
    }>): Request<ListMediaCapturePipelinesResponse, AWSError> {
        this.boot();
        return this.client.listMediaCapturePipelines(
          this.ops["ListMediaCapturePipelines"].apply(partialParams)
        );
    }

    invokeListMeetingTags(partialParams: ToOptional<{
      [K in keyof ListMeetingTagsRequest]: (ListMeetingTagsRequest)[K]
    }>): Request<ListMeetingTagsResponse, AWSError> {
        this.boot();
        return this.client.listMeetingTags(
          this.ops["ListMeetingTags"].apply(partialParams)
        );
    }

    invokeListMeetings(partialParams: ToOptional<{
      [K in keyof ListMeetingsRequest]: (ListMeetingsRequest)[K]
    }>): Request<ListMeetingsResponse, AWSError> {
        this.boot();
        return this.client.listMeetings(
          this.ops["ListMeetings"].apply(partialParams)
        );
    }

    invokeListPhoneNumberOrders(partialParams: ToOptional<{
      [K in keyof ListPhoneNumberOrdersRequest]: (ListPhoneNumberOrdersRequest)[K]
    }>): Request<ListPhoneNumberOrdersResponse, AWSError> {
        this.boot();
        return this.client.listPhoneNumberOrders(
          this.ops["ListPhoneNumberOrders"].apply(partialParams)
        );
    }

    invokeListPhoneNumbers(partialParams: ToOptional<{
      [K in keyof ListPhoneNumbersRequest]: (ListPhoneNumbersRequest)[K]
    }>): Request<ListPhoneNumbersResponse, AWSError> {
        this.boot();
        return this.client.listPhoneNumbers(
          this.ops["ListPhoneNumbers"].apply(partialParams)
        );
    }

    invokeListProxySessions(partialParams: ToOptional<{
      [K in keyof ListProxySessionsRequest & keyof Omit<ListProxySessionsRequest, "VoiceConnectorId">]: (ListProxySessionsRequest)[K]
    }>): Request<ListProxySessionsResponse, AWSError> {
        this.boot();
        return this.client.listProxySessions(
          this.ops["ListProxySessions"].apply(partialParams)
        );
    }

    invokeListRoomMemberships(partialParams: ToOptional<{
      [K in keyof ListRoomMembershipsRequest]: (ListRoomMembershipsRequest)[K]
    }>): Request<ListRoomMembershipsResponse, AWSError> {
        this.boot();
        return this.client.listRoomMemberships(
          this.ops["ListRoomMemberships"].apply(partialParams)
        );
    }

    invokeListRooms(partialParams: ToOptional<{
      [K in keyof ListRoomsRequest]: (ListRoomsRequest)[K]
    }>): Request<ListRoomsResponse, AWSError> {
        this.boot();
        return this.client.listRooms(
          this.ops["ListRooms"].apply(partialParams)
        );
    }

    invokeListSipMediaApplications(partialParams: ToOptional<{
      [K in keyof ListSipMediaApplicationsRequest]: (ListSipMediaApplicationsRequest)[K]
    }>): Request<ListSipMediaApplicationsResponse, AWSError> {
        this.boot();
        return this.client.listSipMediaApplications(
          this.ops["ListSipMediaApplications"].apply(partialParams)
        );
    }

    invokeListSipRules(partialParams: ToOptional<{
      [K in keyof ListSipRulesRequest]: (ListSipRulesRequest)[K]
    }>): Request<ListSipRulesResponse, AWSError> {
        this.boot();
        return this.client.listSipRules(
          this.ops["ListSipRules"].apply(partialParams)
        );
    }

    invokeListSupportedPhoneNumberCountries(partialParams: ToOptional<{
      [K in keyof ListSupportedPhoneNumberCountriesRequest]: (ListSupportedPhoneNumberCountriesRequest)[K]
    }>): Request<ListSupportedPhoneNumberCountriesResponse, AWSError> {
        this.boot();
        return this.client.listSupportedPhoneNumberCountries(
          this.ops["ListSupportedPhoneNumberCountries"].apply(partialParams)
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

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest]: (ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeListVoiceConnectorGroups(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorGroupsRequest]: (ListVoiceConnectorGroupsRequest)[K]
    }>): Request<ListVoiceConnectorGroupsResponse, AWSError> {
        this.boot();
        return this.client.listVoiceConnectorGroups(
          this.ops["ListVoiceConnectorGroups"].apply(partialParams)
        );
    }

    invokeListVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorTerminationCredentialsRequest & keyof Omit<ListVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">]: (ListVoiceConnectorTerminationCredentialsRequest)[K]
    }>): Request<ListVoiceConnectorTerminationCredentialsResponse, AWSError> {
        this.boot();
        return this.client.listVoiceConnectorTerminationCredentials(
          this.ops["ListVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokeListVoiceConnectors(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorsRequest]: (ListVoiceConnectorsRequest)[K]
    }>): Request<ListVoiceConnectorsResponse, AWSError> {
        this.boot();
        return this.client.listVoiceConnectors(
          this.ops["ListVoiceConnectors"].apply(partialParams)
        );
    }

    invokeLogoutUser(partialParams: ToOptional<{
      [K in keyof LogoutUserRequest]: (LogoutUserRequest)[K]
    }>): Request<LogoutUserResponse, AWSError> {
        this.boot();
        return this.client.logoutUser(
          this.ops["LogoutUser"].apply(partialParams)
        );
    }

    invokePutAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutAppInstanceRetentionSettingsRequest]: (PutAppInstanceRetentionSettingsRequest)[K]
    }>): Request<PutAppInstanceRetentionSettingsResponse, AWSError> {
        this.boot();
        return this.client.putAppInstanceRetentionSettings(
          this.ops["PutAppInstanceRetentionSettings"].apply(partialParams)
        );
    }

    invokePutAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof PutAppInstanceStreamingConfigurationsRequest]: (PutAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<PutAppInstanceStreamingConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.putAppInstanceStreamingConfigurations(
          this.ops["PutAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokePutEventsConfiguration(partialParams: ToOptional<{
      [K in keyof PutEventsConfigurationRequest]: (PutEventsConfigurationRequest)[K]
    }>): Request<PutEventsConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putEventsConfiguration(
          this.ops["PutEventsConfiguration"].apply(partialParams)
        );
    }

    invokePutRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutRetentionSettingsRequest]: (PutRetentionSettingsRequest)[K]
    }>): Request<PutRetentionSettingsResponse, AWSError> {
        this.boot();
        return this.client.putRetentionSettings(
          this.ops["PutRetentionSettings"].apply(partialParams)
        );
    }

    invokePutSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutSipMediaApplicationLoggingConfigurationRequest]: (PutSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): Request<PutSipMediaApplicationLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putSipMediaApplicationLoggingConfiguration(
          this.ops["PutSipMediaApplicationLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorEmergencyCallingConfigurationRequest & keyof Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(
          this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorLoggingConfigurationRequest & keyof Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorLoggingConfigurationRequest)[K]
    }>): Request<PutVoiceConnectorLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorLoggingConfiguration(
          this.ops["PutVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorOriginationRequest & keyof Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">]: (PutVoiceConnectorOriginationRequest)[K]
    }>): Request<PutVoiceConnectorOriginationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorOrigination(
          this.ops["PutVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorProxyRequest & keyof Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">]: (PutVoiceConnectorProxyRequest)[K]
    }>): Request<PutVoiceConnectorProxyResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorProxy(
          this.ops["PutVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorStreamingConfigurationRequest & keyof Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<PutVoiceConnectorStreamingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorStreamingConfiguration(
          this.ops["PutVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationRequest & keyof Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">]: (PutVoiceConnectorTerminationRequest)[K]
    }>): Request<PutVoiceConnectorTerminationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorTermination(
          this.ops["PutVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeRedactChannelMessage(partialParams: ToOptional<{
      [K in keyof RedactChannelMessageRequest]: (RedactChannelMessageRequest)[K]
    }>): Request<RedactChannelMessageResponse, AWSError> {
        this.boot();
        return this.client.redactChannelMessage(
          this.ops["RedactChannelMessage"].apply(partialParams)
        );
    }

    invokeRedactConversationMessage(partialParams: ToOptional<{
      [K in keyof RedactConversationMessageRequest]: (RedactConversationMessageRequest)[K]
    }>): Request<RedactConversationMessageResponse, AWSError> {
        this.boot();
        return this.client.redactConversationMessage(
          this.ops["RedactConversationMessage"].apply(partialParams)
        );
    }

    invokeRedactRoomMessage(partialParams: ToOptional<{
      [K in keyof RedactRoomMessageRequest]: (RedactRoomMessageRequest)[K]
    }>): Request<RedactRoomMessageResponse, AWSError> {
        this.boot();
        return this.client.redactRoomMessage(
          this.ops["RedactRoomMessage"].apply(partialParams)
        );
    }

    invokeRegenerateSecurityToken(partialParams: ToOptional<{
      [K in keyof RegenerateSecurityTokenRequest]: (RegenerateSecurityTokenRequest)[K]
    }>): Request<RegenerateSecurityTokenResponse, AWSError> {
        this.boot();
        return this.client.regenerateSecurityToken(
          this.ops["RegenerateSecurityToken"].apply(partialParams)
        );
    }

    invokeResetPersonalPIN(partialParams: ToOptional<{
      [K in keyof ResetPersonalPINRequest]: (ResetPersonalPINRequest)[K]
    }>): Request<ResetPersonalPINResponse, AWSError> {
        this.boot();
        return this.client.resetPersonalPIN(
          this.ops["ResetPersonalPIN"].apply(partialParams)
        );
    }

    invokeRestorePhoneNumber(partialParams: ToOptional<{
      [K in keyof RestorePhoneNumberRequest]: (RestorePhoneNumberRequest)[K]
    }>): Request<RestorePhoneNumberResponse, AWSError> {
        this.boot();
        return this.client.restorePhoneNumber(
          this.ops["RestorePhoneNumber"].apply(partialParams)
        );
    }

    invokeSearchAvailablePhoneNumbers(partialParams: ToOptional<{
      [K in keyof SearchAvailablePhoneNumbersRequest]: (SearchAvailablePhoneNumbersRequest)[K]
    }>): Request<SearchAvailablePhoneNumbersResponse, AWSError> {
        this.boot();
        return this.client.searchAvailablePhoneNumbers(
          this.ops["SearchAvailablePhoneNumbers"].apply(partialParams)
        );
    }

    invokeSendChannelMessage(partialParams: ToOptional<{
      [K in keyof SendChannelMessageRequest]: (SendChannelMessageRequest)[K]
    }>): Request<SendChannelMessageResponse, AWSError> {
        this.boot();
        return this.client.sendChannelMessage(
          this.ops["SendChannelMessage"].apply(partialParams)
        );
    }

    invokeStartMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StartMeetingTranscriptionRequest]: (StartMeetingTranscriptionRequest)[K]
    }>): Request<StartMeetingTranscriptionResponse, AWSError> {
        this.boot();
        return this.client.startMeetingTranscription(
          this.ops["StartMeetingTranscription"].apply(partialParams)
        );
    }

    invokeStopMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StopMeetingTranscriptionRequest]: (StopMeetingTranscriptionRequest)[K]
    }>): Request<StopMeetingTranscriptionResponse, AWSError> {
        this.boot();
        return this.client.stopMeetingTranscription(
          this.ops["StopMeetingTranscription"].apply(partialParams)
        );
    }

    invokeUpdateAccount(partialParams: ToOptional<{
      [K in keyof UpdateAccountRequest]: (UpdateAccountRequest)[K]
    }>): Request<UpdateAccountResponse, AWSError> {
        this.boot();
        return this.client.updateAccount(
          this.ops["UpdateAccount"].apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest]: (UpdateAccountSettingsRequest)[K]
    }>): Request<UpdateAccountSettingsResponse, AWSError> {
        this.boot();
        return this.client.updateAccountSettings(
          this.ops["UpdateAccountSettings"].apply(partialParams)
        );
    }

    invokeUpdateAppInstance(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceRequest]: (UpdateAppInstanceRequest)[K]
    }>): Request<UpdateAppInstanceResponse, AWSError> {
        this.boot();
        return this.client.updateAppInstance(
          this.ops["UpdateAppInstance"].apply(partialParams)
        );
    }

    invokeUpdateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceUserRequest]: (UpdateAppInstanceUserRequest)[K]
    }>): Request<UpdateAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.updateAppInstanceUser(
          this.ops["UpdateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeUpdateBot(partialParams: ToOptional<{
      [K in keyof UpdateBotRequest]: (UpdateBotRequest)[K]
    }>): Request<UpdateBotResponse, AWSError> {
        this.boot();
        return this.client.updateBot(
          this.ops["UpdateBot"].apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest]: (UpdateChannelRequest)[K]
    }>): Request<UpdateChannelResponse, AWSError> {
        this.boot();
        return this.client.updateChannel(
          this.ops["UpdateChannel"].apply(partialParams)
        );
    }

    invokeUpdateChannelMessage(partialParams: ToOptional<{
      [K in keyof UpdateChannelMessageRequest]: (UpdateChannelMessageRequest)[K]
    }>): Request<UpdateChannelMessageResponse, AWSError> {
        this.boot();
        return this.client.updateChannelMessage(
          this.ops["UpdateChannelMessage"].apply(partialParams)
        );
    }

    invokeUpdateChannelReadMarker(partialParams: ToOptional<{
      [K in keyof UpdateChannelReadMarkerRequest]: (UpdateChannelReadMarkerRequest)[K]
    }>): Request<UpdateChannelReadMarkerResponse, AWSError> {
        this.boot();
        return this.client.updateChannelReadMarker(
          this.ops["UpdateChannelReadMarker"].apply(partialParams)
        );
    }

    invokeUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberRequest]: (UpdatePhoneNumberRequest)[K]
    }>): Request<UpdatePhoneNumberResponse, AWSError> {
        this.boot();
        return this.client.updatePhoneNumber(
          this.ops["UpdatePhoneNumber"].apply(partialParams)
        );
    }

    invokeUpdateProxySession(partialParams: ToOptional<{
      [K in keyof UpdateProxySessionRequest & keyof Omit<UpdateProxySessionRequest, "VoiceConnectorId">]: (UpdateProxySessionRequest)[K]
    }>): Request<UpdateProxySessionResponse, AWSError> {
        this.boot();
        return this.client.updateProxySession(
          this.ops["UpdateProxySession"].apply(partialParams)
        );
    }

    invokeUpdateRoom(partialParams: ToOptional<{
      [K in keyof UpdateRoomRequest]: (UpdateRoomRequest)[K]
    }>): Request<UpdateRoomResponse, AWSError> {
        this.boot();
        return this.client.updateRoom(
          this.ops["UpdateRoom"].apply(partialParams)
        );
    }

    invokeUpdateRoomMembership(partialParams: ToOptional<{
      [K in keyof UpdateRoomMembershipRequest]: (UpdateRoomMembershipRequest)[K]
    }>): Request<UpdateRoomMembershipResponse, AWSError> {
        this.boot();
        return this.client.updateRoomMembership(
          this.ops["UpdateRoomMembership"].apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationRequest]: (UpdateSipMediaApplicationRequest)[K]
    }>): Request<UpdateSipMediaApplicationResponse, AWSError> {
        this.boot();
        return this.client.updateSipMediaApplication(
          this.ops["UpdateSipMediaApplication"].apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationCallRequest]: (UpdateSipMediaApplicationCallRequest)[K]
    }>): Request<UpdateSipMediaApplicationCallResponse, AWSError> {
        this.boot();
        return this.client.updateSipMediaApplicationCall(
          this.ops["UpdateSipMediaApplicationCall"].apply(partialParams)
        );
    }

    invokeUpdateSipRule(partialParams: ToOptional<{
      [K in keyof UpdateSipRuleRequest]: (UpdateSipRuleRequest)[K]
    }>): Request<UpdateSipRuleResponse, AWSError> {
        this.boot();
        return this.client.updateSipRule(
          this.ops["UpdateSipRule"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest]: (UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnector(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorRequest & keyof Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">]: (UpdateVoiceConnectorRequest)[K]
    }>): Request<UpdateVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.updateVoiceConnector(
          this.ops["UpdateVoiceConnector"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorGroupRequest]: (UpdateVoiceConnectorGroupRequest)[K]
    }>): Request<UpdateVoiceConnectorGroupResponse, AWSError> {
        this.boot();
        return this.client.updateVoiceConnectorGroup(
          this.ops["UpdateVoiceConnectorGroup"].apply(partialParams)
        );
    }
}