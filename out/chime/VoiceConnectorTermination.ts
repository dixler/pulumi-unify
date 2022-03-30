
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    DeleteAppInstanceRequest,
    DeleteAppInstanceAdminRequest,
    DeleteAppInstanceStreamingConfigurationsRequest,
    DeleteAppInstanceUserRequest,
    DeleteAttendeeRequest,
    DeleteChannelRequest,
    DeleteChannelBanRequest,
    DeleteChannelMembershipRequest,
    DeleteChannelMessageRequest,
    DeleteChannelModeratorRequest,
    DeleteEventsConfigurationRequest,
    DeleteMediaCapturePipelineRequest,
    DeleteMeetingRequest,
    DeletePhoneNumberRequest,
    DeleteProxySessionRequest,
    DeleteRoomRequest,
    DeleteRoomMembershipRequest,
    DeleteSipMediaApplicationRequest,
    DeleteSipRuleRequest,
    DeleteVoiceConnectorRequest,
    DeleteVoiceConnectorEmergencyCallingConfigurationRequest,
    DeleteVoiceConnectorGroupRequest,
    DeleteVoiceConnectorOriginationRequest,
    DeleteVoiceConnectorProxyRequest,
    DeleteVoiceConnectorStreamingConfigurationRequest,
    DeleteVoiceConnectorTerminationRequest,
    DeleteVoiceConnectorTerminationCredentialsRequest,
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
    ListAppInstanceAdminsRequest,
    ListAppInstanceUsersRequest,
    ListAttendeeTagsRequest,
    ListAttendeesRequest,
    ListBotsRequest,
    ListChannelBansRequest,
    ListChannelMembershipsRequest,
    ListChannelMessagesRequest,
    ListChannelModeratorsRequest,
    ListChannelsRequest,
    ListMeetingTagsRequest,
    ListProxySessionsRequest,
    ListRoomMembershipsRequest,
    ListRoomsRequest,
    ListSupportedPhoneNumberCountriesRequest,
    ListTagsForResourceRequest,
    ListUsersRequest,
    ListVoiceConnectorTerminationCredentialsRequest,
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
    PutVoiceConnectorTerminationCredentialsRequest,
    RedactChannelMessageRequest,
    RedactConversationMessageRequest,
    RedactRoomMessageRequest,
    RegenerateSecurityTokenRequest,
    ResetPersonalPINRequest,
    RestorePhoneNumberRequest,
    SendChannelMessageRequest,
    StartMeetingTranscriptionRequest,
    StopMeetingTranscriptionRequest,
    TagAttendeeRequest,
    TagMeetingRequest,
    TagResourceRequest,
    UntagAttendeeRequest,
    UntagMeetingRequest,
    UntagResourceRequest,
    UpdateAccountRequest,
    UpdateAccountSettingsRequest,
    UpdateAppInstanceRequest,
    UpdateAppInstanceUserRequest,
    UpdateBotRequest,
    UpdateChannelRequest,
    UpdateChannelMessageRequest,
    UpdateChannelReadMarkerRequest,
    UpdatePhoneNumberRequest,
    UpdatePhoneNumberSettingsRequest,
    UpdateProxySessionRequest,
    UpdateRoomRequest,
    UpdateRoomMembershipRequest,
    UpdateSipMediaApplicationRequest,
    UpdateSipMediaApplicationCallRequest,
    UpdateSipRuleRequest,
    UpdateUserRequest,
    UpdateUserSettingsRequest,
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
    ListAppInstanceAdminsResponse,
    ListAppInstanceUsersResponse,
    ListAttendeeTagsResponse,
    ListAttendeesResponse,
    ListBotsResponse,
    ListChannelBansResponse,
    ListChannelMembershipsResponse,
    ListChannelMessagesResponse,
    ListChannelModeratorsResponse,
    ListChannelsResponse,
    ListMeetingTagsResponse,
    ListProxySessionsResponse,
    ListRoomMembershipsResponse,
    ListRoomsResponse,
    ListSupportedPhoneNumberCountriesResponse,
    ListTagsForResourceResponse,
    ListUsersResponse,
    ListVoiceConnectorTerminationCredentialsResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.chime.VoiceConnectorTermination {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.chime.VoiceConnectorTermination>) {
        super(...args)
        this.client = new awssdk.Chime()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/chime-2018-05-01.normal.json"), this.client)
    }

    invokeAssociatePhoneNumberWithUser(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumberWithUserRequest & keyof AssociatePhoneNumberWithUserRequest]: (AssociatePhoneNumberWithUserRequest & AssociatePhoneNumberWithUserRequest)[K]
    }>): AssociatePhoneNumberWithUserResponse {
        return this.client.associatePhoneNumberWithUser(
            this.ops["AssociatePhoneNumberWithUser"].apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorRequest & keyof AssociatePhoneNumbersWithVoiceConnectorRequest]: (AssociatePhoneNumbersWithVoiceConnectorRequest & AssociatePhoneNumbersWithVoiceConnectorRequest)[K]
    }>): AssociatePhoneNumbersWithVoiceConnectorResponse {
        return this.client.associatePhoneNumbersWithVoiceConnector(
            this.ops["AssociatePhoneNumbersWithVoiceConnector"].apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorGroupRequest & keyof AssociatePhoneNumbersWithVoiceConnectorGroupRequest]: (AssociatePhoneNumbersWithVoiceConnectorGroupRequest & AssociatePhoneNumbersWithVoiceConnectorGroupRequest)[K]
    }>): AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(
            this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeAssociateSigninDelegateGroupsWithAccount(partialParams: ToOptional<{
      [K in keyof AssociateSigninDelegateGroupsWithAccountRequest & keyof AssociateSigninDelegateGroupsWithAccountRequest]: (AssociateSigninDelegateGroupsWithAccountRequest & AssociateSigninDelegateGroupsWithAccountRequest)[K]
    }>): AssociateSigninDelegateGroupsWithAccountResponse {
        return this.client.associateSigninDelegateGroupsWithAccount(
            this.ops["AssociateSigninDelegateGroupsWithAccount"].apply(partialParams)
        );
    }

    invokeBatchCreateAttendee(partialParams: ToOptional<{
      [K in keyof BatchCreateAttendeeRequest & keyof BatchCreateAttendeeRequest]: (BatchCreateAttendeeRequest & BatchCreateAttendeeRequest)[K]
    }>): BatchCreateAttendeeResponse {
        return this.client.batchCreateAttendee(
            this.ops["BatchCreateAttendee"].apply(partialParams)
        );
    }

    invokeBatchCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateChannelMembershipRequest & keyof BatchCreateChannelMembershipRequest]: (BatchCreateChannelMembershipRequest & BatchCreateChannelMembershipRequest)[K]
    }>): BatchCreateChannelMembershipResponse {
        return this.client.batchCreateChannelMembership(
            this.ops["BatchCreateChannelMembership"].apply(partialParams)
        );
    }

    invokeBatchCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateRoomMembershipRequest & keyof BatchCreateRoomMembershipRequest]: (BatchCreateRoomMembershipRequest & BatchCreateRoomMembershipRequest)[K]
    }>): BatchCreateRoomMembershipResponse {
        return this.client.batchCreateRoomMembership(
            this.ops["BatchCreateRoomMembership"].apply(partialParams)
        );
    }

    invokeBatchDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchDeletePhoneNumberRequest & keyof BatchDeletePhoneNumberRequest]: (BatchDeletePhoneNumberRequest & BatchDeletePhoneNumberRequest)[K]
    }>): BatchDeletePhoneNumberResponse {
        return this.client.batchDeletePhoneNumber(
            this.ops["BatchDeletePhoneNumber"].apply(partialParams)
        );
    }

    invokeBatchSuspendUser(partialParams: ToOptional<{
      [K in keyof BatchSuspendUserRequest & keyof BatchSuspendUserRequest]: (BatchSuspendUserRequest & BatchSuspendUserRequest)[K]
    }>): BatchSuspendUserResponse {
        return this.client.batchSuspendUser(
            this.ops["BatchSuspendUser"].apply(partialParams)
        );
    }

    invokeBatchUnsuspendUser(partialParams: ToOptional<{
      [K in keyof BatchUnsuspendUserRequest & keyof BatchUnsuspendUserRequest]: (BatchUnsuspendUserRequest & BatchUnsuspendUserRequest)[K]
    }>): BatchUnsuspendUserResponse {
        return this.client.batchUnsuspendUser(
            this.ops["BatchUnsuspendUser"].apply(partialParams)
        );
    }

    invokeBatchUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchUpdatePhoneNumberRequest & keyof BatchUpdatePhoneNumberRequest]: (BatchUpdatePhoneNumberRequest & BatchUpdatePhoneNumberRequest)[K]
    }>): BatchUpdatePhoneNumberResponse {
        return this.client.batchUpdatePhoneNumber(
            this.ops["BatchUpdatePhoneNumber"].apply(partialParams)
        );
    }

    invokeBatchUpdateUser(partialParams: ToOptional<{
      [K in keyof BatchUpdateUserRequest & keyof BatchUpdateUserRequest]: (BatchUpdateUserRequest & BatchUpdateUserRequest)[K]
    }>): BatchUpdateUserResponse {
        return this.client.batchUpdateUser(
            this.ops["BatchUpdateUser"].apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest & keyof CreateAccountRequest]: (CreateAccountRequest & CreateAccountRequest)[K]
    }>): CreateAccountResponse {
        return this.client.createAccount(
            this.ops["CreateAccount"].apply(partialParams)
        );
    }

    invokeCreateAppInstance(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceRequest & keyof CreateAppInstanceRequest]: (CreateAppInstanceRequest & CreateAppInstanceRequest)[K]
    }>): CreateAppInstanceResponse {
        return this.client.createAppInstance(
            this.ops["CreateAppInstance"].apply(partialParams)
        );
    }

    invokeCreateAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceAdminRequest & keyof CreateAppInstanceAdminRequest]: (CreateAppInstanceAdminRequest & CreateAppInstanceAdminRequest)[K]
    }>): CreateAppInstanceAdminResponse {
        return this.client.createAppInstanceAdmin(
            this.ops["CreateAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeCreateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceUserRequest & keyof CreateAppInstanceUserRequest]: (CreateAppInstanceUserRequest & CreateAppInstanceUserRequest)[K]
    }>): CreateAppInstanceUserResponse {
        return this.client.createAppInstanceUser(
            this.ops["CreateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeCreateAttendee(partialParams: ToOptional<{
      [K in keyof CreateAttendeeRequest & keyof CreateAttendeeRequest]: (CreateAttendeeRequest & CreateAttendeeRequest)[K]
    }>): CreateAttendeeResponse {
        return this.client.createAttendee(
            this.ops["CreateAttendee"].apply(partialParams)
        );
    }

    invokeCreateBot(partialParams: ToOptional<{
      [K in keyof CreateBotRequest & keyof CreateBotRequest]: (CreateBotRequest & CreateBotRequest)[K]
    }>): CreateBotResponse {
        return this.client.createBot(
            this.ops["CreateBot"].apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest & keyof CreateChannelRequest]: (CreateChannelRequest & CreateChannelRequest)[K]
    }>): CreateChannelResponse {
        return this.client.createChannel(
            this.ops["CreateChannel"].apply(partialParams)
        );
    }

    invokeCreateChannelBan(partialParams: ToOptional<{
      [K in keyof CreateChannelBanRequest & keyof CreateChannelBanRequest]: (CreateChannelBanRequest & CreateChannelBanRequest)[K]
    }>): CreateChannelBanResponse {
        return this.client.createChannelBan(
            this.ops["CreateChannelBan"].apply(partialParams)
        );
    }

    invokeCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof CreateChannelMembershipRequest & keyof CreateChannelMembershipRequest]: (CreateChannelMembershipRequest & CreateChannelMembershipRequest)[K]
    }>): CreateChannelMembershipResponse {
        return this.client.createChannelMembership(
            this.ops["CreateChannelMembership"].apply(partialParams)
        );
    }

    invokeCreateChannelModerator(partialParams: ToOptional<{
      [K in keyof CreateChannelModeratorRequest & keyof CreateChannelModeratorRequest]: (CreateChannelModeratorRequest & CreateChannelModeratorRequest)[K]
    }>): CreateChannelModeratorResponse {
        return this.client.createChannelModerator(
            this.ops["CreateChannelModerator"].apply(partialParams)
        );
    }

    invokeCreateMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof CreateMediaCapturePipelineRequest & keyof CreateMediaCapturePipelineRequest]: (CreateMediaCapturePipelineRequest & CreateMediaCapturePipelineRequest)[K]
    }>): CreateMediaCapturePipelineResponse {
        return this.client.createMediaCapturePipeline(
            this.ops["CreateMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeCreateMeeting(partialParams: ToOptional<{
      [K in keyof CreateMeetingRequest & keyof CreateMeetingRequest]: (CreateMeetingRequest & CreateMeetingRequest)[K]
    }>): CreateMeetingResponse {
        return this.client.createMeeting(
            this.ops["CreateMeeting"].apply(partialParams)
        );
    }

    invokeCreateMeetingDialOut(partialParams: ToOptional<{
      [K in keyof CreateMeetingDialOutRequest & keyof CreateMeetingDialOutRequest]: (CreateMeetingDialOutRequest & CreateMeetingDialOutRequest)[K]
    }>): CreateMeetingDialOutResponse {
        return this.client.createMeetingDialOut(
            this.ops["CreateMeetingDialOut"].apply(partialParams)
        );
    }

    invokeCreateMeetingWithAttendees(partialParams: ToOptional<{
      [K in keyof CreateMeetingWithAttendeesRequest & keyof CreateMeetingWithAttendeesRequest]: (CreateMeetingWithAttendeesRequest & CreateMeetingWithAttendeesRequest)[K]
    }>): CreateMeetingWithAttendeesResponse {
        return this.client.createMeetingWithAttendees(
            this.ops["CreateMeetingWithAttendees"].apply(partialParams)
        );
    }

    invokeCreatePhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof CreatePhoneNumberOrderRequest & keyof CreatePhoneNumberOrderRequest]: (CreatePhoneNumberOrderRequest & CreatePhoneNumberOrderRequest)[K]
    }>): CreatePhoneNumberOrderResponse {
        return this.client.createPhoneNumberOrder(
            this.ops["CreatePhoneNumberOrder"].apply(partialParams)
        );
    }

    invokeCreateProxySession(partialParams: ToOptional<{
      [K in keyof CreateProxySessionRequest & keyof CreateProxySessionRequest]: (CreateProxySessionRequest & CreateProxySessionRequest)[K]
    }>): CreateProxySessionResponse {
        return this.client.createProxySession(
            this.ops["CreateProxySession"].apply(partialParams)
        );
    }

    invokeCreateRoom(partialParams: ToOptional<{
      [K in keyof CreateRoomRequest & keyof CreateRoomRequest]: (CreateRoomRequest & CreateRoomRequest)[K]
    }>): CreateRoomResponse {
        return this.client.createRoom(
            this.ops["CreateRoom"].apply(partialParams)
        );
    }

    invokeCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof CreateRoomMembershipRequest & keyof CreateRoomMembershipRequest]: (CreateRoomMembershipRequest & CreateRoomMembershipRequest)[K]
    }>): CreateRoomMembershipResponse {
        return this.client.createRoomMembership(
            this.ops["CreateRoomMembership"].apply(partialParams)
        );
    }

    invokeCreateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationRequest & keyof CreateSipMediaApplicationRequest]: (CreateSipMediaApplicationRequest & CreateSipMediaApplicationRequest)[K]
    }>): CreateSipMediaApplicationResponse {
        return this.client.createSipMediaApplication(
            this.ops["CreateSipMediaApplication"].apply(partialParams)
        );
    }

    invokeCreateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationCallRequest & keyof CreateSipMediaApplicationCallRequest]: (CreateSipMediaApplicationCallRequest & CreateSipMediaApplicationCallRequest)[K]
    }>): CreateSipMediaApplicationCallResponse {
        return this.client.createSipMediaApplicationCall(
            this.ops["CreateSipMediaApplicationCall"].apply(partialParams)
        );
    }

    invokeCreateSipRule(partialParams: ToOptional<{
      [K in keyof CreateSipRuleRequest & keyof CreateSipRuleRequest]: (CreateSipRuleRequest & CreateSipRuleRequest)[K]
    }>): CreateSipRuleResponse {
        return this.client.createSipRule(
            this.ops["CreateSipRule"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnector(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorRequest & keyof CreateVoiceConnectorRequest]: (CreateVoiceConnectorRequest & CreateVoiceConnectorRequest)[K]
    }>): CreateVoiceConnectorResponse {
        return this.client.createVoiceConnector(
            this.ops["CreateVoiceConnector"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorGroupRequest & keyof CreateVoiceConnectorGroupRequest]: (CreateVoiceConnectorGroupRequest & CreateVoiceConnectorGroupRequest)[K]
    }>): CreateVoiceConnectorGroupResponse {
        return this.client.createVoiceConnectorGroup(
            this.ops["CreateVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDeleteAccount(partialParams: ToOptional<{
      [K in keyof DeleteAccountRequest & keyof DeleteAccountRequest]: (DeleteAccountRequest & DeleteAccountRequest)[K]
    }>): DeleteAccountResponse {
        return this.client.deleteAccount(
            this.ops["DeleteAccount"].apply(partialParams)
        );
    }

    invokeDeleteAppInstance(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceRequest & keyof DeleteAppInstanceRequest]: (DeleteAppInstanceRequest & DeleteAppInstanceRequest)[K]
    }>): void {
        return this.client.deleteAppInstance(
            this.ops["DeleteAppInstance"].apply(partialParams)
        );
    }

    invokeDeleteAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceAdminRequest & keyof DeleteAppInstanceAdminRequest]: (DeleteAppInstanceAdminRequest & DeleteAppInstanceAdminRequest)[K]
    }>): void {
        return this.client.deleteAppInstanceAdmin(
            this.ops["DeleteAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeDeleteAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceStreamingConfigurationsRequest & keyof DeleteAppInstanceStreamingConfigurationsRequest]: (DeleteAppInstanceStreamingConfigurationsRequest & DeleteAppInstanceStreamingConfigurationsRequest)[K]
    }>): void {
        return this.client.deleteAppInstanceStreamingConfigurations(
            this.ops["DeleteAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokeDeleteAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceUserRequest & keyof DeleteAppInstanceUserRequest]: (DeleteAppInstanceUserRequest & DeleteAppInstanceUserRequest)[K]
    }>): void {
        return this.client.deleteAppInstanceUser(
            this.ops["DeleteAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDeleteAttendee(partialParams: ToOptional<{
      [K in keyof DeleteAttendeeRequest & keyof DeleteAttendeeRequest]: (DeleteAttendeeRequest & DeleteAttendeeRequest)[K]
    }>): void {
        return this.client.deleteAttendee(
            this.ops["DeleteAttendee"].apply(partialParams)
        );
    }

    invokeDeleteChannel(partialParams: ToOptional<{
      [K in keyof DeleteChannelRequest & keyof DeleteChannelRequest]: (DeleteChannelRequest & DeleteChannelRequest)[K]
    }>): void {
        return this.client.deleteChannel(
            this.ops["DeleteChannel"].apply(partialParams)
        );
    }

    invokeDeleteChannelBan(partialParams: ToOptional<{
      [K in keyof DeleteChannelBanRequest & keyof DeleteChannelBanRequest]: (DeleteChannelBanRequest & DeleteChannelBanRequest)[K]
    }>): void {
        return this.client.deleteChannelBan(
            this.ops["DeleteChannelBan"].apply(partialParams)
        );
    }

    invokeDeleteChannelMembership(partialParams: ToOptional<{
      [K in keyof DeleteChannelMembershipRequest & keyof DeleteChannelMembershipRequest]: (DeleteChannelMembershipRequest & DeleteChannelMembershipRequest)[K]
    }>): void {
        return this.client.deleteChannelMembership(
            this.ops["DeleteChannelMembership"].apply(partialParams)
        );
    }

    invokeDeleteChannelMessage(partialParams: ToOptional<{
      [K in keyof DeleteChannelMessageRequest & keyof DeleteChannelMessageRequest]: (DeleteChannelMessageRequest & DeleteChannelMessageRequest)[K]
    }>): void {
        return this.client.deleteChannelMessage(
            this.ops["DeleteChannelMessage"].apply(partialParams)
        );
    }

    invokeDeleteChannelModerator(partialParams: ToOptional<{
      [K in keyof DeleteChannelModeratorRequest & keyof DeleteChannelModeratorRequest]: (DeleteChannelModeratorRequest & DeleteChannelModeratorRequest)[K]
    }>): void {
        return this.client.deleteChannelModerator(
            this.ops["DeleteChannelModerator"].apply(partialParams)
        );
    }

    invokeDeleteEventsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteEventsConfigurationRequest & keyof DeleteEventsConfigurationRequest]: (DeleteEventsConfigurationRequest & DeleteEventsConfigurationRequest)[K]
    }>): void {
        return this.client.deleteEventsConfiguration(
            this.ops["DeleteEventsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof DeleteMediaCapturePipelineRequest & keyof DeleteMediaCapturePipelineRequest]: (DeleteMediaCapturePipelineRequest & DeleteMediaCapturePipelineRequest)[K]
    }>): void {
        return this.client.deleteMediaCapturePipeline(
            this.ops["DeleteMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeDeleteMeeting(partialParams: ToOptional<{
      [K in keyof DeleteMeetingRequest & keyof DeleteMeetingRequest]: (DeleteMeetingRequest & DeleteMeetingRequest)[K]
    }>): void {
        return this.client.deleteMeeting(
            this.ops["DeleteMeeting"].apply(partialParams)
        );
    }

    invokeDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof DeletePhoneNumberRequest & keyof DeletePhoneNumberRequest]: (DeletePhoneNumberRequest & DeletePhoneNumberRequest)[K]
    }>): void {
        return this.client.deletePhoneNumber(
            this.ops["DeletePhoneNumber"].apply(partialParams)
        );
    }

    invokeDeleteProxySession(partialParams: ToOptional<{
      [K in keyof DeleteProxySessionRequest & keyof DeleteProxySessionRequest]: (DeleteProxySessionRequest & DeleteProxySessionRequest)[K]
    }>): void {
        return this.client.deleteProxySession(
            this.ops["DeleteProxySession"].apply(partialParams)
        );
    }

    invokeDeleteRoom(partialParams: ToOptional<{
      [K in keyof DeleteRoomRequest & keyof DeleteRoomRequest]: (DeleteRoomRequest & DeleteRoomRequest)[K]
    }>): void {
        return this.client.deleteRoom(
            this.ops["DeleteRoom"].apply(partialParams)
        );
    }

    invokeDeleteRoomMembership(partialParams: ToOptional<{
      [K in keyof DeleteRoomMembershipRequest & keyof DeleteRoomMembershipRequest]: (DeleteRoomMembershipRequest & DeleteRoomMembershipRequest)[K]
    }>): void {
        return this.client.deleteRoomMembership(
            this.ops["DeleteRoomMembership"].apply(partialParams)
        );
    }

    invokeDeleteSipMediaApplication(partialParams: ToOptional<{
      [K in keyof DeleteSipMediaApplicationRequest & keyof DeleteSipMediaApplicationRequest]: (DeleteSipMediaApplicationRequest & DeleteSipMediaApplicationRequest)[K]
    }>): void {
        return this.client.deleteSipMediaApplication(
            this.ops["DeleteSipMediaApplication"].apply(partialParams)
        );
    }

    invokeDeleteSipRule(partialParams: ToOptional<{
      [K in keyof DeleteSipRuleRequest & keyof DeleteSipRuleRequest]: (DeleteSipRuleRequest & DeleteSipRuleRequest)[K]
    }>): void {
        return this.client.deleteSipRule(
            this.ops["DeleteSipRule"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnector(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorRequest & keyof DeleteVoiceConnectorRequest]: (DeleteVoiceConnectorRequest & DeleteVoiceConnectorRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnector(
            this.ops["DeleteVoiceConnector"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorEmergencyCallingConfigurationRequest & keyof DeleteVoiceConnectorEmergencyCallingConfigurationRequest]: (DeleteVoiceConnectorEmergencyCallingConfigurationRequest & DeleteVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(
            this.ops["DeleteVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorGroupRequest & keyof DeleteVoiceConnectorGroupRequest]: (DeleteVoiceConnectorGroupRequest & DeleteVoiceConnectorGroupRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorGroup(
            this.ops["DeleteVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorOriginationRequest & keyof DeleteVoiceConnectorOriginationRequest]: (DeleteVoiceConnectorOriginationRequest & DeleteVoiceConnectorOriginationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorOrigination(
            this.ops["DeleteVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorProxyRequest & keyof DeleteVoiceConnectorProxyRequest]: (DeleteVoiceConnectorProxyRequest & DeleteVoiceConnectorProxyRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorProxy(
            this.ops["DeleteVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorStreamingConfigurationRequest & keyof DeleteVoiceConnectorStreamingConfigurationRequest]: (DeleteVoiceConnectorStreamingConfigurationRequest & DeleteVoiceConnectorStreamingConfigurationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorStreamingConfiguration(
            this.ops["DeleteVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationRequest & keyof DeleteVoiceConnectorTerminationRequest]: (DeleteVoiceConnectorTerminationRequest & DeleteVoiceConnectorTerminationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorTermination(
            this.ops["DeleteVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationCredentialsRequest & keyof DeleteVoiceConnectorTerminationCredentialsRequest]: (DeleteVoiceConnectorTerminationCredentialsRequest & DeleteVoiceConnectorTerminationCredentialsRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorTerminationCredentials(
            this.ops["DeleteVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokeDescribeAppInstance(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceRequest & keyof DescribeAppInstanceRequest]: (DescribeAppInstanceRequest & DescribeAppInstanceRequest)[K]
    }>): DescribeAppInstanceResponse {
        return this.client.describeAppInstance(
            this.ops["DescribeAppInstance"].apply(partialParams)
        );
    }

    invokeDescribeAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceAdminRequest & keyof DescribeAppInstanceAdminRequest]: (DescribeAppInstanceAdminRequest & DescribeAppInstanceAdminRequest)[K]
    }>): DescribeAppInstanceAdminResponse {
        return this.client.describeAppInstanceAdmin(
            this.ops["DescribeAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeDescribeAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceUserRequest & keyof DescribeAppInstanceUserRequest]: (DescribeAppInstanceUserRequest & DescribeAppInstanceUserRequest)[K]
    }>): DescribeAppInstanceUserResponse {
        return this.client.describeAppInstanceUser(
            this.ops["DescribeAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest & keyof DescribeChannelRequest]: (DescribeChannelRequest & DescribeChannelRequest)[K]
    }>): DescribeChannelResponse {
        return this.client.describeChannel(
            this.ops["DescribeChannel"].apply(partialParams)
        );
    }

    invokeDescribeChannelBan(partialParams: ToOptional<{
      [K in keyof DescribeChannelBanRequest & keyof DescribeChannelBanRequest]: (DescribeChannelBanRequest & DescribeChannelBanRequest)[K]
    }>): DescribeChannelBanResponse {
        return this.client.describeChannelBan(
            this.ops["DescribeChannelBan"].apply(partialParams)
        );
    }

    invokeDescribeChannelMembership(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipRequest & keyof DescribeChannelMembershipRequest]: (DescribeChannelMembershipRequest & DescribeChannelMembershipRequest)[K]
    }>): DescribeChannelMembershipResponse {
        return this.client.describeChannelMembership(
            this.ops["DescribeChannelMembership"].apply(partialParams)
        );
    }

    invokeDescribeChannelMembershipForAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipForAppInstanceUserRequest & keyof DescribeChannelMembershipForAppInstanceUserRequest]: (DescribeChannelMembershipForAppInstanceUserRequest & DescribeChannelMembershipForAppInstanceUserRequest)[K]
    }>): DescribeChannelMembershipForAppInstanceUserResponse {
        return this.client.describeChannelMembershipForAppInstanceUser(
            this.ops["DescribeChannelMembershipForAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannelModeratedByAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratedByAppInstanceUserRequest & keyof DescribeChannelModeratedByAppInstanceUserRequest]: (DescribeChannelModeratedByAppInstanceUserRequest & DescribeChannelModeratedByAppInstanceUserRequest)[K]
    }>): DescribeChannelModeratedByAppInstanceUserResponse {
        return this.client.describeChannelModeratedByAppInstanceUser(
            this.ops["DescribeChannelModeratedByAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannelModerator(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratorRequest & keyof DescribeChannelModeratorRequest]: (DescribeChannelModeratorRequest & DescribeChannelModeratorRequest)[K]
    }>): DescribeChannelModeratorResponse {
        return this.client.describeChannelModerator(
            this.ops["DescribeChannelModerator"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumberFromUser(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumberFromUserRequest & keyof DisassociatePhoneNumberFromUserRequest]: (DisassociatePhoneNumberFromUserRequest & DisassociatePhoneNumberFromUserRequest)[K]
    }>): DisassociatePhoneNumberFromUserResponse {
        return this.client.disassociatePhoneNumberFromUser(
            this.ops["DisassociatePhoneNumberFromUser"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorRequest & keyof DisassociatePhoneNumbersFromVoiceConnectorRequest]: (DisassociatePhoneNumbersFromVoiceConnectorRequest & DisassociatePhoneNumbersFromVoiceConnectorRequest)[K]
    }>): DisassociatePhoneNumbersFromVoiceConnectorResponse {
        return this.client.disassociatePhoneNumbersFromVoiceConnector(
            this.ops["DisassociatePhoneNumbersFromVoiceConnector"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest & keyof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest]: (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest & DisassociatePhoneNumbersFromVoiceConnectorGroupRequest)[K]
    }>): DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(
            this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams: ToOptional<{
      [K in keyof DisassociateSigninDelegateGroupsFromAccountRequest & keyof DisassociateSigninDelegateGroupsFromAccountRequest]: (DisassociateSigninDelegateGroupsFromAccountRequest & DisassociateSigninDelegateGroupsFromAccountRequest)[K]
    }>): DisassociateSigninDelegateGroupsFromAccountResponse {
        return this.client.disassociateSigninDelegateGroupsFromAccount(
            this.ops["DisassociateSigninDelegateGroupsFromAccount"].apply(partialParams)
        );
    }

    invokeGetAccount(partialParams: ToOptional<{
      [K in keyof GetAccountRequest & keyof GetAccountRequest]: (GetAccountRequest & GetAccountRequest)[K]
    }>): GetAccountResponse {
        return this.client.getAccount(
            this.ops["GetAccount"].apply(partialParams)
        );
    }

    invokeGetAccountSettings(partialParams: ToOptional<{
      [K in keyof GetAccountSettingsRequest & keyof GetAccountSettingsRequest]: (GetAccountSettingsRequest & GetAccountSettingsRequest)[K]
    }>): GetAccountSettingsResponse {
        return this.client.getAccountSettings(
            this.ops["GetAccountSettings"].apply(partialParams)
        );
    }

    invokeGetAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetAppInstanceRetentionSettingsRequest & keyof GetAppInstanceRetentionSettingsRequest]: (GetAppInstanceRetentionSettingsRequest & GetAppInstanceRetentionSettingsRequest)[K]
    }>): GetAppInstanceRetentionSettingsResponse {
        return this.client.getAppInstanceRetentionSettings(
            this.ops["GetAppInstanceRetentionSettings"].apply(partialParams)
        );
    }

    invokeGetAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof GetAppInstanceStreamingConfigurationsRequest & keyof GetAppInstanceStreamingConfigurationsRequest]: (GetAppInstanceStreamingConfigurationsRequest & GetAppInstanceStreamingConfigurationsRequest)[K]
    }>): GetAppInstanceStreamingConfigurationsResponse {
        return this.client.getAppInstanceStreamingConfigurations(
            this.ops["GetAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokeGetAttendee(partialParams: ToOptional<{
      [K in keyof GetAttendeeRequest & keyof GetAttendeeRequest]: (GetAttendeeRequest & GetAttendeeRequest)[K]
    }>): GetAttendeeResponse {
        return this.client.getAttendee(
            this.ops["GetAttendee"].apply(partialParams)
        );
    }

    invokeGetBot(partialParams: ToOptional<{
      [K in keyof GetBotRequest & keyof GetBotRequest]: (GetBotRequest & GetBotRequest)[K]
    }>): GetBotResponse {
        return this.client.getBot(
            this.ops["GetBot"].apply(partialParams)
        );
    }

    invokeGetChannelMessage(partialParams: ToOptional<{
      [K in keyof GetChannelMessageRequest & keyof GetChannelMessageRequest]: (GetChannelMessageRequest & GetChannelMessageRequest)[K]
    }>): GetChannelMessageResponse {
        return this.client.getChannelMessage(
            this.ops["GetChannelMessage"].apply(partialParams)
        );
    }

    invokeGetEventsConfiguration(partialParams: ToOptional<{
      [K in keyof GetEventsConfigurationRequest & keyof GetEventsConfigurationRequest]: (GetEventsConfigurationRequest & GetEventsConfigurationRequest)[K]
    }>): GetEventsConfigurationResponse {
        return this.client.getEventsConfiguration(
            this.ops["GetEventsConfiguration"].apply(partialParams)
        );
    }

    invokeGetMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof GetMediaCapturePipelineRequest & keyof GetMediaCapturePipelineRequest]: (GetMediaCapturePipelineRequest & GetMediaCapturePipelineRequest)[K]
    }>): GetMediaCapturePipelineResponse {
        return this.client.getMediaCapturePipeline(
            this.ops["GetMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeGetMeeting(partialParams: ToOptional<{
      [K in keyof GetMeetingRequest & keyof GetMeetingRequest]: (GetMeetingRequest & GetMeetingRequest)[K]
    }>): GetMeetingResponse {
        return this.client.getMeeting(
            this.ops["GetMeeting"].apply(partialParams)
        );
    }

    invokeGetPhoneNumber(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberRequest & keyof GetPhoneNumberRequest]: (GetPhoneNumberRequest & GetPhoneNumberRequest)[K]
    }>): GetPhoneNumberResponse {
        return this.client.getPhoneNumber(
            this.ops["GetPhoneNumber"].apply(partialParams)
        );
    }

    invokeGetPhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberOrderRequest & keyof GetPhoneNumberOrderRequest]: (GetPhoneNumberOrderRequest & GetPhoneNumberOrderRequest)[K]
    }>): GetPhoneNumberOrderResponse {
        return this.client.getPhoneNumberOrder(
            this.ops["GetPhoneNumberOrder"].apply(partialParams)
        );
    }

    invokeGetProxySession(partialParams: ToOptional<{
      [K in keyof GetProxySessionRequest & keyof GetProxySessionRequest]: (GetProxySessionRequest & GetProxySessionRequest)[K]
    }>): GetProxySessionResponse {
        return this.client.getProxySession(
            this.ops["GetProxySession"].apply(partialParams)
        );
    }

    invokeGetRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetRetentionSettingsRequest & keyof GetRetentionSettingsRequest]: (GetRetentionSettingsRequest & GetRetentionSettingsRequest)[K]
    }>): GetRetentionSettingsResponse {
        return this.client.getRetentionSettings(
            this.ops["GetRetentionSettings"].apply(partialParams)
        );
    }

    invokeGetRoom(partialParams: ToOptional<{
      [K in keyof GetRoomRequest & keyof GetRoomRequest]: (GetRoomRequest & GetRoomRequest)[K]
    }>): GetRoomResponse {
        return this.client.getRoom(
            this.ops["GetRoom"].apply(partialParams)
        );
    }

    invokeGetSipMediaApplication(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationRequest & keyof GetSipMediaApplicationRequest]: (GetSipMediaApplicationRequest & GetSipMediaApplicationRequest)[K]
    }>): GetSipMediaApplicationResponse {
        return this.client.getSipMediaApplication(
            this.ops["GetSipMediaApplication"].apply(partialParams)
        );
    }

    invokeGetSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationLoggingConfigurationRequest & keyof GetSipMediaApplicationLoggingConfigurationRequest]: (GetSipMediaApplicationLoggingConfigurationRequest & GetSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): GetSipMediaApplicationLoggingConfigurationResponse {
        return this.client.getSipMediaApplicationLoggingConfiguration(
            this.ops["GetSipMediaApplicationLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetSipRule(partialParams: ToOptional<{
      [K in keyof GetSipRuleRequest & keyof GetSipRuleRequest]: (GetSipRuleRequest & GetSipRuleRequest)[K]
    }>): GetSipRuleResponse {
        return this.client.getSipRule(
            this.ops["GetSipRule"].apply(partialParams)
        );
    }

    invokeGetUser(partialParams: ToOptional<{
      [K in keyof GetUserRequest & keyof GetUserRequest]: (GetUserRequest & GetUserRequest)[K]
    }>): GetUserResponse {
        return this.client.getUser(
            this.ops["GetUser"].apply(partialParams)
        );
    }

    invokeGetUserSettings(partialParams: ToOptional<{
      [K in keyof GetUserSettingsRequest & keyof GetUserSettingsRequest]: (GetUserSettingsRequest & GetUserSettingsRequest)[K]
    }>): GetUserSettingsResponse {
        return this.client.getUserSettings(
            this.ops["GetUserSettings"].apply(partialParams)
        );
    }

    invokeGetVoiceConnector(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorRequest & keyof GetVoiceConnectorRequest]: (GetVoiceConnectorRequest & GetVoiceConnectorRequest)[K]
    }>): GetVoiceConnectorResponse {
        return this.client.getVoiceConnector(
            this.ops["GetVoiceConnector"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorEmergencyCallingConfigurationRequest & keyof GetVoiceConnectorEmergencyCallingConfigurationRequest]: (GetVoiceConnectorEmergencyCallingConfigurationRequest & GetVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): GetVoiceConnectorEmergencyCallingConfigurationResponse {
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(
            this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorGroupRequest & keyof GetVoiceConnectorGroupRequest]: (GetVoiceConnectorGroupRequest & GetVoiceConnectorGroupRequest)[K]
    }>): GetVoiceConnectorGroupResponse {
        return this.client.getVoiceConnectorGroup(
            this.ops["GetVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorLoggingConfigurationRequest & keyof GetVoiceConnectorLoggingConfigurationRequest]: (GetVoiceConnectorLoggingConfigurationRequest & GetVoiceConnectorLoggingConfigurationRequest)[K]
    }>): GetVoiceConnectorLoggingConfigurationResponse {
        return this.client.getVoiceConnectorLoggingConfiguration(
            this.ops["GetVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorOriginationRequest & keyof GetVoiceConnectorOriginationRequest]: (GetVoiceConnectorOriginationRequest & GetVoiceConnectorOriginationRequest)[K]
    }>): GetVoiceConnectorOriginationResponse {
        return this.client.getVoiceConnectorOrigination(
            this.ops["GetVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorProxyRequest & keyof GetVoiceConnectorProxyRequest]: (GetVoiceConnectorProxyRequest & GetVoiceConnectorProxyRequest)[K]
    }>): GetVoiceConnectorProxyResponse {
        return this.client.getVoiceConnectorProxy(
            this.ops["GetVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorStreamingConfigurationRequest & keyof GetVoiceConnectorStreamingConfigurationRequest]: (GetVoiceConnectorStreamingConfigurationRequest & GetVoiceConnectorStreamingConfigurationRequest)[K]
    }>): GetVoiceConnectorStreamingConfigurationResponse {
        return this.client.getVoiceConnectorStreamingConfiguration(
            this.ops["GetVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationRequest & keyof GetVoiceConnectorTerminationRequest]: (GetVoiceConnectorTerminationRequest & GetVoiceConnectorTerminationRequest)[K]
    }>): GetVoiceConnectorTerminationResponse {
        return this.client.getVoiceConnectorTermination(
            this.ops["GetVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTerminationHealth(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationHealthRequest & keyof GetVoiceConnectorTerminationHealthRequest]: (GetVoiceConnectorTerminationHealthRequest & GetVoiceConnectorTerminationHealthRequest)[K]
    }>): GetVoiceConnectorTerminationHealthResponse {
        return this.client.getVoiceConnectorTerminationHealth(
            this.ops["GetVoiceConnectorTerminationHealth"].apply(partialParams)
        );
    }

    invokeInviteUsers(partialParams: ToOptional<{
      [K in keyof InviteUsersRequest & keyof InviteUsersRequest]: (InviteUsersRequest & InviteUsersRequest)[K]
    }>): InviteUsersResponse {
        return this.client.inviteUsers(
            this.ops["InviteUsers"].apply(partialParams)
        );
    }

    invokeListAppInstanceAdmins(partialParams: ToOptional<{
      [K in keyof ListAppInstanceAdminsRequest & keyof ListAppInstanceAdminsRequest]: (ListAppInstanceAdminsRequest & ListAppInstanceAdminsRequest)[K]
    }>): ListAppInstanceAdminsResponse {
        return this.client.listAppInstanceAdmins(
            this.ops["ListAppInstanceAdmins"].apply(partialParams)
        );
    }

    invokeListAppInstanceUsers(partialParams: ToOptional<{
      [K in keyof ListAppInstanceUsersRequest & keyof ListAppInstanceUsersRequest]: (ListAppInstanceUsersRequest & ListAppInstanceUsersRequest)[K]
    }>): ListAppInstanceUsersResponse {
        return this.client.listAppInstanceUsers(
            this.ops["ListAppInstanceUsers"].apply(partialParams)
        );
    }

    invokeListAttendeeTags(partialParams: ToOptional<{
      [K in keyof ListAttendeeTagsRequest & keyof ListAttendeeTagsRequest]: (ListAttendeeTagsRequest & ListAttendeeTagsRequest)[K]
    }>): ListAttendeeTagsResponse {
        return this.client.listAttendeeTags(
            this.ops["ListAttendeeTags"].apply(partialParams)
        );
    }

    invokeListAttendees(partialParams: ToOptional<{
      [K in keyof ListAttendeesRequest & keyof ListAttendeesRequest]: (ListAttendeesRequest & ListAttendeesRequest)[K]
    }>): ListAttendeesResponse {
        return this.client.listAttendees(
            this.ops["ListAttendees"].apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest & keyof ListBotsRequest]: (ListBotsRequest & ListBotsRequest)[K]
    }>): ListBotsResponse {
        return this.client.listBots(
            this.ops["ListBots"].apply(partialParams)
        );
    }

    invokeListChannelBans(partialParams: ToOptional<{
      [K in keyof ListChannelBansRequest & keyof ListChannelBansRequest]: (ListChannelBansRequest & ListChannelBansRequest)[K]
    }>): ListChannelBansResponse {
        return this.client.listChannelBans(
            this.ops["ListChannelBans"].apply(partialParams)
        );
    }

    invokeListChannelMemberships(partialParams: ToOptional<{
      [K in keyof ListChannelMembershipsRequest & keyof ListChannelMembershipsRequest]: (ListChannelMembershipsRequest & ListChannelMembershipsRequest)[K]
    }>): ListChannelMembershipsResponse {
        return this.client.listChannelMemberships(
            this.ops["ListChannelMemberships"].apply(partialParams)
        );
    }

    invokeListChannelMessages(partialParams: ToOptional<{
      [K in keyof ListChannelMessagesRequest & keyof ListChannelMessagesRequest]: (ListChannelMessagesRequest & ListChannelMessagesRequest)[K]
    }>): ListChannelMessagesResponse {
        return this.client.listChannelMessages(
            this.ops["ListChannelMessages"].apply(partialParams)
        );
    }

    invokeListChannelModerators(partialParams: ToOptional<{
      [K in keyof ListChannelModeratorsRequest & keyof ListChannelModeratorsRequest]: (ListChannelModeratorsRequest & ListChannelModeratorsRequest)[K]
    }>): ListChannelModeratorsResponse {
        return this.client.listChannelModerators(
            this.ops["ListChannelModerators"].apply(partialParams)
        );
    }

    invokeListChannels(partialParams: ToOptional<{
      [K in keyof ListChannelsRequest & keyof ListChannelsRequest]: (ListChannelsRequest & ListChannelsRequest)[K]
    }>): ListChannelsResponse {
        return this.client.listChannels(
            this.ops["ListChannels"].apply(partialParams)
        );
    }

    invokeListMeetingTags(partialParams: ToOptional<{
      [K in keyof ListMeetingTagsRequest & keyof ListMeetingTagsRequest]: (ListMeetingTagsRequest & ListMeetingTagsRequest)[K]
    }>): ListMeetingTagsResponse {
        return this.client.listMeetingTags(
            this.ops["ListMeetingTags"].apply(partialParams)
        );
    }

    invokeListProxySessions(partialParams: ToOptional<{
      [K in keyof ListProxySessionsRequest & keyof ListProxySessionsRequest]: (ListProxySessionsRequest & ListProxySessionsRequest)[K]
    }>): ListProxySessionsResponse {
        return this.client.listProxySessions(
            this.ops["ListProxySessions"].apply(partialParams)
        );
    }

    invokeListRoomMemberships(partialParams: ToOptional<{
      [K in keyof ListRoomMembershipsRequest & keyof ListRoomMembershipsRequest]: (ListRoomMembershipsRequest & ListRoomMembershipsRequest)[K]
    }>): ListRoomMembershipsResponse {
        return this.client.listRoomMemberships(
            this.ops["ListRoomMemberships"].apply(partialParams)
        );
    }

    invokeListRooms(partialParams: ToOptional<{
      [K in keyof ListRoomsRequest & keyof ListRoomsRequest]: (ListRoomsRequest & ListRoomsRequest)[K]
    }>): ListRoomsResponse {
        return this.client.listRooms(
            this.ops["ListRooms"].apply(partialParams)
        );
    }

    invokeListSupportedPhoneNumberCountries(partialParams: ToOptional<{
      [K in keyof ListSupportedPhoneNumberCountriesRequest & keyof ListSupportedPhoneNumberCountriesRequest]: (ListSupportedPhoneNumberCountriesRequest & ListSupportedPhoneNumberCountriesRequest)[K]
    }>): ListSupportedPhoneNumberCountriesResponse {
        return this.client.listSupportedPhoneNumberCountries(
            this.ops["ListSupportedPhoneNumberCountries"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & ListUsersRequest)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeListVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorTerminationCredentialsRequest & keyof ListVoiceConnectorTerminationCredentialsRequest]: (ListVoiceConnectorTerminationCredentialsRequest & ListVoiceConnectorTerminationCredentialsRequest)[K]
    }>): ListVoiceConnectorTerminationCredentialsResponse {
        return this.client.listVoiceConnectorTerminationCredentials(
            this.ops["ListVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokeLogoutUser(partialParams: ToOptional<{
      [K in keyof LogoutUserRequest & keyof LogoutUserRequest]: (LogoutUserRequest & LogoutUserRequest)[K]
    }>): LogoutUserResponse {
        return this.client.logoutUser(
            this.ops["LogoutUser"].apply(partialParams)
        );
    }

    invokePutAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutAppInstanceRetentionSettingsRequest & keyof PutAppInstanceRetentionSettingsRequest]: (PutAppInstanceRetentionSettingsRequest & PutAppInstanceRetentionSettingsRequest)[K]
    }>): PutAppInstanceRetentionSettingsResponse {
        return this.client.putAppInstanceRetentionSettings(
            this.ops["PutAppInstanceRetentionSettings"].apply(partialParams)
        );
    }

    invokePutAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof PutAppInstanceStreamingConfigurationsRequest & keyof PutAppInstanceStreamingConfigurationsRequest]: (PutAppInstanceStreamingConfigurationsRequest & PutAppInstanceStreamingConfigurationsRequest)[K]
    }>): PutAppInstanceStreamingConfigurationsResponse {
        return this.client.putAppInstanceStreamingConfigurations(
            this.ops["PutAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokePutEventsConfiguration(partialParams: ToOptional<{
      [K in keyof PutEventsConfigurationRequest & keyof PutEventsConfigurationRequest]: (PutEventsConfigurationRequest & PutEventsConfigurationRequest)[K]
    }>): PutEventsConfigurationResponse {
        return this.client.putEventsConfiguration(
            this.ops["PutEventsConfiguration"].apply(partialParams)
        );
    }

    invokePutRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutRetentionSettingsRequest & keyof PutRetentionSettingsRequest]: (PutRetentionSettingsRequest & PutRetentionSettingsRequest)[K]
    }>): PutRetentionSettingsResponse {
        return this.client.putRetentionSettings(
            this.ops["PutRetentionSettings"].apply(partialParams)
        );
    }

    invokePutSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutSipMediaApplicationLoggingConfigurationRequest & keyof PutSipMediaApplicationLoggingConfigurationRequest]: (PutSipMediaApplicationLoggingConfigurationRequest & PutSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): PutSipMediaApplicationLoggingConfigurationResponse {
        return this.client.putSipMediaApplicationLoggingConfiguration(
            this.ops["PutSipMediaApplicationLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorEmergencyCallingConfigurationRequest & keyof Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorEmergencyCallingConfigurationRequest & Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): PutVoiceConnectorEmergencyCallingConfigurationResponse {
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(
            this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorLoggingConfigurationRequest & keyof Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorLoggingConfigurationRequest & Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): PutVoiceConnectorLoggingConfigurationResponse {
        return this.client.putVoiceConnectorLoggingConfiguration(
            this.ops["PutVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorOriginationRequest & keyof Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">]: (PutVoiceConnectorOriginationRequest & Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">)[K]
    }>): PutVoiceConnectorOriginationResponse {
        return this.client.putVoiceConnectorOrigination(
            this.ops["PutVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorProxyRequest & keyof Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">]: (PutVoiceConnectorProxyRequest & Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">)[K]
    }>): PutVoiceConnectorProxyResponse {
        return this.client.putVoiceConnectorProxy(
            this.ops["PutVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorStreamingConfigurationRequest & keyof Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorStreamingConfigurationRequest & Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): PutVoiceConnectorStreamingConfigurationResponse {
        return this.client.putVoiceConnectorStreamingConfiguration(
            this.ops["PutVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationRequest & keyof Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">]: (PutVoiceConnectorTerminationRequest & Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">)[K]
    }>): PutVoiceConnectorTerminationResponse {
        return this.client.putVoiceConnectorTermination(
            this.ops["PutVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationCredentialsRequest & keyof Omit<PutVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">]: (PutVoiceConnectorTerminationCredentialsRequest & Omit<PutVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">)[K]
    }>): void {
        return this.client.putVoiceConnectorTerminationCredentials(
            this.ops["PutVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokeRedactChannelMessage(partialParams: ToOptional<{
      [K in keyof RedactChannelMessageRequest & keyof RedactChannelMessageRequest]: (RedactChannelMessageRequest & RedactChannelMessageRequest)[K]
    }>): RedactChannelMessageResponse {
        return this.client.redactChannelMessage(
            this.ops["RedactChannelMessage"].apply(partialParams)
        );
    }

    invokeRedactConversationMessage(partialParams: ToOptional<{
      [K in keyof RedactConversationMessageRequest & keyof RedactConversationMessageRequest]: (RedactConversationMessageRequest & RedactConversationMessageRequest)[K]
    }>): RedactConversationMessageResponse {
        return this.client.redactConversationMessage(
            this.ops["RedactConversationMessage"].apply(partialParams)
        );
    }

    invokeRedactRoomMessage(partialParams: ToOptional<{
      [K in keyof RedactRoomMessageRequest & keyof RedactRoomMessageRequest]: (RedactRoomMessageRequest & RedactRoomMessageRequest)[K]
    }>): RedactRoomMessageResponse {
        return this.client.redactRoomMessage(
            this.ops["RedactRoomMessage"].apply(partialParams)
        );
    }

    invokeRegenerateSecurityToken(partialParams: ToOptional<{
      [K in keyof RegenerateSecurityTokenRequest & keyof RegenerateSecurityTokenRequest]: (RegenerateSecurityTokenRequest & RegenerateSecurityTokenRequest)[K]
    }>): RegenerateSecurityTokenResponse {
        return this.client.regenerateSecurityToken(
            this.ops["RegenerateSecurityToken"].apply(partialParams)
        );
    }

    invokeResetPersonalPIN(partialParams: ToOptional<{
      [K in keyof ResetPersonalPINRequest & keyof ResetPersonalPINRequest]: (ResetPersonalPINRequest & ResetPersonalPINRequest)[K]
    }>): ResetPersonalPINResponse {
        return this.client.resetPersonalPIN(
            this.ops["ResetPersonalPIN"].apply(partialParams)
        );
    }

    invokeRestorePhoneNumber(partialParams: ToOptional<{
      [K in keyof RestorePhoneNumberRequest & keyof RestorePhoneNumberRequest]: (RestorePhoneNumberRequest & RestorePhoneNumberRequest)[K]
    }>): RestorePhoneNumberResponse {
        return this.client.restorePhoneNumber(
            this.ops["RestorePhoneNumber"].apply(partialParams)
        );
    }

    invokeSendChannelMessage(partialParams: ToOptional<{
      [K in keyof SendChannelMessageRequest & keyof SendChannelMessageRequest]: (SendChannelMessageRequest & SendChannelMessageRequest)[K]
    }>): SendChannelMessageResponse {
        return this.client.sendChannelMessage(
            this.ops["SendChannelMessage"].apply(partialParams)
        );
    }

    invokeStartMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StartMeetingTranscriptionRequest & keyof StartMeetingTranscriptionRequest]: (StartMeetingTranscriptionRequest & StartMeetingTranscriptionRequest)[K]
    }>): StartMeetingTranscriptionResponse {
        return this.client.startMeetingTranscription(
            this.ops["StartMeetingTranscription"].apply(partialParams)
        );
    }

    invokeStopMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StopMeetingTranscriptionRequest & keyof StopMeetingTranscriptionRequest]: (StopMeetingTranscriptionRequest & StopMeetingTranscriptionRequest)[K]
    }>): StopMeetingTranscriptionResponse {
        return this.client.stopMeetingTranscription(
            this.ops["StopMeetingTranscription"].apply(partialParams)
        );
    }

    invokeTagAttendee(partialParams: ToOptional<{
      [K in keyof TagAttendeeRequest & keyof TagAttendeeRequest]: (TagAttendeeRequest & TagAttendeeRequest)[K]
    }>): void {
        return this.client.tagAttendee(
            this.ops["TagAttendee"].apply(partialParams)
        );
    }

    invokeTagMeeting(partialParams: ToOptional<{
      [K in keyof TagMeetingRequest & keyof TagMeetingRequest]: (TagMeetingRequest & TagMeetingRequest)[K]
    }>): void {
        return this.client.tagMeeting(
            this.ops["TagMeeting"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagAttendee(partialParams: ToOptional<{
      [K in keyof UntagAttendeeRequest & keyof UntagAttendeeRequest]: (UntagAttendeeRequest & UntagAttendeeRequest)[K]
    }>): void {
        return this.client.untagAttendee(
            this.ops["UntagAttendee"].apply(partialParams)
        );
    }

    invokeUntagMeeting(partialParams: ToOptional<{
      [K in keyof UntagMeetingRequest & keyof UntagMeetingRequest]: (UntagMeetingRequest & UntagMeetingRequest)[K]
    }>): void {
        return this.client.untagMeeting(
            this.ops["UntagMeeting"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAccount(partialParams: ToOptional<{
      [K in keyof UpdateAccountRequest & keyof UpdateAccountRequest]: (UpdateAccountRequest & UpdateAccountRequest)[K]
    }>): UpdateAccountResponse {
        return this.client.updateAccount(
            this.ops["UpdateAccount"].apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest]: (UpdateAccountSettingsRequest & UpdateAccountSettingsRequest)[K]
    }>): UpdateAccountSettingsResponse {
        return this.client.updateAccountSettings(
            this.ops["UpdateAccountSettings"].apply(partialParams)
        );
    }

    invokeUpdateAppInstance(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceRequest & keyof UpdateAppInstanceRequest]: (UpdateAppInstanceRequest & UpdateAppInstanceRequest)[K]
    }>): UpdateAppInstanceResponse {
        return this.client.updateAppInstance(
            this.ops["UpdateAppInstance"].apply(partialParams)
        );
    }

    invokeUpdateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceUserRequest & keyof UpdateAppInstanceUserRequest]: (UpdateAppInstanceUserRequest & UpdateAppInstanceUserRequest)[K]
    }>): UpdateAppInstanceUserResponse {
        return this.client.updateAppInstanceUser(
            this.ops["UpdateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeUpdateBot(partialParams: ToOptional<{
      [K in keyof UpdateBotRequest & keyof UpdateBotRequest]: (UpdateBotRequest & UpdateBotRequest)[K]
    }>): UpdateBotResponse {
        return this.client.updateBot(
            this.ops["UpdateBot"].apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest & keyof UpdateChannelRequest]: (UpdateChannelRequest & UpdateChannelRequest)[K]
    }>): UpdateChannelResponse {
        return this.client.updateChannel(
            this.ops["UpdateChannel"].apply(partialParams)
        );
    }

    invokeUpdateChannelMessage(partialParams: ToOptional<{
      [K in keyof UpdateChannelMessageRequest & keyof UpdateChannelMessageRequest]: (UpdateChannelMessageRequest & UpdateChannelMessageRequest)[K]
    }>): UpdateChannelMessageResponse {
        return this.client.updateChannelMessage(
            this.ops["UpdateChannelMessage"].apply(partialParams)
        );
    }

    invokeUpdateChannelReadMarker(partialParams: ToOptional<{
      [K in keyof UpdateChannelReadMarkerRequest & keyof UpdateChannelReadMarkerRequest]: (UpdateChannelReadMarkerRequest & UpdateChannelReadMarkerRequest)[K]
    }>): UpdateChannelReadMarkerResponse {
        return this.client.updateChannelReadMarker(
            this.ops["UpdateChannelReadMarker"].apply(partialParams)
        );
    }

    invokeUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberRequest & keyof UpdatePhoneNumberRequest]: (UpdatePhoneNumberRequest & UpdatePhoneNumberRequest)[K]
    }>): UpdatePhoneNumberResponse {
        return this.client.updatePhoneNumber(
            this.ops["UpdatePhoneNumber"].apply(partialParams)
        );
    }

    invokeUpdatePhoneNumberSettings(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberSettingsRequest & keyof UpdatePhoneNumberSettingsRequest]: (UpdatePhoneNumberSettingsRequest & UpdatePhoneNumberSettingsRequest)[K]
    }>): void {
        return this.client.updatePhoneNumberSettings(
            this.ops["UpdatePhoneNumberSettings"].apply(partialParams)
        );
    }

    invokeUpdateProxySession(partialParams: ToOptional<{
      [K in keyof UpdateProxySessionRequest & keyof Omit<UpdateProxySessionRequest, "VoiceConnectorId">]: (UpdateProxySessionRequest & Omit<UpdateProxySessionRequest, "VoiceConnectorId">)[K]
    }>): UpdateProxySessionResponse {
        return this.client.updateProxySession(
            this.ops["UpdateProxySession"].apply(partialParams)
        );
    }

    invokeUpdateRoom(partialParams: ToOptional<{
      [K in keyof UpdateRoomRequest & keyof UpdateRoomRequest]: (UpdateRoomRequest & UpdateRoomRequest)[K]
    }>): UpdateRoomResponse {
        return this.client.updateRoom(
            this.ops["UpdateRoom"].apply(partialParams)
        );
    }

    invokeUpdateRoomMembership(partialParams: ToOptional<{
      [K in keyof UpdateRoomMembershipRequest & keyof UpdateRoomMembershipRequest]: (UpdateRoomMembershipRequest & UpdateRoomMembershipRequest)[K]
    }>): UpdateRoomMembershipResponse {
        return this.client.updateRoomMembership(
            this.ops["UpdateRoomMembership"].apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationRequest & keyof UpdateSipMediaApplicationRequest]: (UpdateSipMediaApplicationRequest & UpdateSipMediaApplicationRequest)[K]
    }>): UpdateSipMediaApplicationResponse {
        return this.client.updateSipMediaApplication(
            this.ops["UpdateSipMediaApplication"].apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationCallRequest & keyof UpdateSipMediaApplicationCallRequest]: (UpdateSipMediaApplicationCallRequest & UpdateSipMediaApplicationCallRequest)[K]
    }>): UpdateSipMediaApplicationCallResponse {
        return this.client.updateSipMediaApplicationCall(
            this.ops["UpdateSipMediaApplicationCall"].apply(partialParams)
        );
    }

    invokeUpdateSipRule(partialParams: ToOptional<{
      [K in keyof UpdateSipRuleRequest & keyof UpdateSipRuleRequest]: (UpdateSipRuleRequest & UpdateSipRuleRequest)[K]
    }>): UpdateSipRuleResponse {
        return this.client.updateSipRule(
            this.ops["UpdateSipRule"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest)[K]
    }>): UpdateUserResponse {
        return this.client.updateUser(
            this.ops["UpdateUser"].apply(partialParams)
        );
    }

    invokeUpdateUserSettings(partialParams: ToOptional<{
      [K in keyof UpdateUserSettingsRequest & keyof UpdateUserSettingsRequest]: (UpdateUserSettingsRequest & UpdateUserSettingsRequest)[K]
    }>): void {
        return this.client.updateUserSettings(
            this.ops["UpdateUserSettings"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnector(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorRequest & keyof Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">]: (UpdateVoiceConnectorRequest & Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">)[K]
    }>): UpdateVoiceConnectorResponse {
        return this.client.updateVoiceConnector(
            this.ops["UpdateVoiceConnector"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorGroupRequest & keyof UpdateVoiceConnectorGroupRequest]: (UpdateVoiceConnectorGroupRequest & UpdateVoiceConnectorGroupRequest)[K]
    }>): UpdateVoiceConnectorGroupResponse {
        return this.client.updateVoiceConnectorGroup(
            this.ops["UpdateVoiceConnectorGroup"].apply(partialParams)
        );
    }
}