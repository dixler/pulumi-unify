
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

export default class extends aws.chime.VoiceConnectorGroup {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.chime.VoiceConnectorGroup>) {
        super(...args)
        this.client = new awssdk.Chime()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/chime-2018-05-01.normal.json"), this.client)
    }

    invokeAssociatePhoneNumberWithUser(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumberWithUserRequest]: (AssociatePhoneNumberWithUserRequest)[K]
    }>): AssociatePhoneNumberWithUserResponse {
        return this.client.associatePhoneNumberWithUser(
            this.ops["AssociatePhoneNumberWithUser"].apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorRequest]: (AssociatePhoneNumbersWithVoiceConnectorRequest)[K]
    }>): AssociatePhoneNumbersWithVoiceConnectorResponse {
        return this.client.associatePhoneNumbersWithVoiceConnector(
            this.ops["AssociatePhoneNumbersWithVoiceConnector"].apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorGroupRequest]: (AssociatePhoneNumbersWithVoiceConnectorGroupRequest)[K]
    }>): AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(
            this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeAssociateSigninDelegateGroupsWithAccount(partialParams: ToOptional<{
      [K in keyof AssociateSigninDelegateGroupsWithAccountRequest]: (AssociateSigninDelegateGroupsWithAccountRequest)[K]
    }>): AssociateSigninDelegateGroupsWithAccountResponse {
        return this.client.associateSigninDelegateGroupsWithAccount(
            this.ops["AssociateSigninDelegateGroupsWithAccount"].apply(partialParams)
        );
    }

    invokeBatchCreateAttendee(partialParams: ToOptional<{
      [K in keyof BatchCreateAttendeeRequest]: (BatchCreateAttendeeRequest)[K]
    }>): BatchCreateAttendeeResponse {
        return this.client.batchCreateAttendee(
            this.ops["BatchCreateAttendee"].apply(partialParams)
        );
    }

    invokeBatchCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateChannelMembershipRequest]: (BatchCreateChannelMembershipRequest)[K]
    }>): BatchCreateChannelMembershipResponse {
        return this.client.batchCreateChannelMembership(
            this.ops["BatchCreateChannelMembership"].apply(partialParams)
        );
    }

    invokeBatchCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateRoomMembershipRequest]: (BatchCreateRoomMembershipRequest)[K]
    }>): BatchCreateRoomMembershipResponse {
        return this.client.batchCreateRoomMembership(
            this.ops["BatchCreateRoomMembership"].apply(partialParams)
        );
    }

    invokeBatchDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchDeletePhoneNumberRequest]: (BatchDeletePhoneNumberRequest)[K]
    }>): BatchDeletePhoneNumberResponse {
        return this.client.batchDeletePhoneNumber(
            this.ops["BatchDeletePhoneNumber"].apply(partialParams)
        );
    }

    invokeBatchSuspendUser(partialParams: ToOptional<{
      [K in keyof BatchSuspendUserRequest]: (BatchSuspendUserRequest)[K]
    }>): BatchSuspendUserResponse {
        return this.client.batchSuspendUser(
            this.ops["BatchSuspendUser"].apply(partialParams)
        );
    }

    invokeBatchUnsuspendUser(partialParams: ToOptional<{
      [K in keyof BatchUnsuspendUserRequest]: (BatchUnsuspendUserRequest)[K]
    }>): BatchUnsuspendUserResponse {
        return this.client.batchUnsuspendUser(
            this.ops["BatchUnsuspendUser"].apply(partialParams)
        );
    }

    invokeBatchUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchUpdatePhoneNumberRequest]: (BatchUpdatePhoneNumberRequest)[K]
    }>): BatchUpdatePhoneNumberResponse {
        return this.client.batchUpdatePhoneNumber(
            this.ops["BatchUpdatePhoneNumber"].apply(partialParams)
        );
    }

    invokeBatchUpdateUser(partialParams: ToOptional<{
      [K in keyof BatchUpdateUserRequest]: (BatchUpdateUserRequest)[K]
    }>): BatchUpdateUserResponse {
        return this.client.batchUpdateUser(
            this.ops["BatchUpdateUser"].apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof Omit<CreateAccountRequest, "Name">]: (Omit<CreateAccountRequest, "Name">)[K]
    }>): CreateAccountResponse {
        return this.client.createAccount(
            this.ops["CreateAccount"].apply(partialParams)
        );
    }

    invokeCreateAppInstance(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceRequest]: (CreateAppInstanceRequest)[K]
    }>): CreateAppInstanceResponse {
        return this.client.createAppInstance(
            this.ops["CreateAppInstance"].apply(partialParams)
        );
    }

    invokeCreateAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceAdminRequest]: (CreateAppInstanceAdminRequest)[K]
    }>): CreateAppInstanceAdminResponse {
        return this.client.createAppInstanceAdmin(
            this.ops["CreateAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeCreateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceUserRequest]: (CreateAppInstanceUserRequest)[K]
    }>): CreateAppInstanceUserResponse {
        return this.client.createAppInstanceUser(
            this.ops["CreateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeCreateAttendee(partialParams: ToOptional<{
      [K in keyof CreateAttendeeRequest]: (CreateAttendeeRequest)[K]
    }>): CreateAttendeeResponse {
        return this.client.createAttendee(
            this.ops["CreateAttendee"].apply(partialParams)
        );
    }

    invokeCreateBot(partialParams: ToOptional<{
      [K in keyof CreateBotRequest]: (CreateBotRequest)[K]
    }>): CreateBotResponse {
        return this.client.createBot(
            this.ops["CreateBot"].apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest]: (CreateChannelRequest)[K]
    }>): CreateChannelResponse {
        return this.client.createChannel(
            this.ops["CreateChannel"].apply(partialParams)
        );
    }

    invokeCreateChannelBan(partialParams: ToOptional<{
      [K in keyof CreateChannelBanRequest]: (CreateChannelBanRequest)[K]
    }>): CreateChannelBanResponse {
        return this.client.createChannelBan(
            this.ops["CreateChannelBan"].apply(partialParams)
        );
    }

    invokeCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof CreateChannelMembershipRequest]: (CreateChannelMembershipRequest)[K]
    }>): CreateChannelMembershipResponse {
        return this.client.createChannelMembership(
            this.ops["CreateChannelMembership"].apply(partialParams)
        );
    }

    invokeCreateChannelModerator(partialParams: ToOptional<{
      [K in keyof CreateChannelModeratorRequest]: (CreateChannelModeratorRequest)[K]
    }>): CreateChannelModeratorResponse {
        return this.client.createChannelModerator(
            this.ops["CreateChannelModerator"].apply(partialParams)
        );
    }

    invokeCreateMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof CreateMediaCapturePipelineRequest]: (CreateMediaCapturePipelineRequest)[K]
    }>): CreateMediaCapturePipelineResponse {
        return this.client.createMediaCapturePipeline(
            this.ops["CreateMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeCreateMeeting(partialParams: ToOptional<{
      [K in keyof CreateMeetingRequest]: (CreateMeetingRequest)[K]
    }>): CreateMeetingResponse {
        return this.client.createMeeting(
            this.ops["CreateMeeting"].apply(partialParams)
        );
    }

    invokeCreateMeetingDialOut(partialParams: ToOptional<{
      [K in keyof CreateMeetingDialOutRequest]: (CreateMeetingDialOutRequest)[K]
    }>): CreateMeetingDialOutResponse {
        return this.client.createMeetingDialOut(
            this.ops["CreateMeetingDialOut"].apply(partialParams)
        );
    }

    invokeCreateMeetingWithAttendees(partialParams: ToOptional<{
      [K in keyof CreateMeetingWithAttendeesRequest]: (CreateMeetingWithAttendeesRequest)[K]
    }>): CreateMeetingWithAttendeesResponse {
        return this.client.createMeetingWithAttendees(
            this.ops["CreateMeetingWithAttendees"].apply(partialParams)
        );
    }

    invokeCreatePhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof CreatePhoneNumberOrderRequest]: (CreatePhoneNumberOrderRequest)[K]
    }>): CreatePhoneNumberOrderResponse {
        return this.client.createPhoneNumberOrder(
            this.ops["CreatePhoneNumberOrder"].apply(partialParams)
        );
    }

    invokeCreateProxySession(partialParams: ToOptional<{
      [K in keyof CreateProxySessionRequest]: (CreateProxySessionRequest)[K]
    }>): CreateProxySessionResponse {
        return this.client.createProxySession(
            this.ops["CreateProxySession"].apply(partialParams)
        );
    }

    invokeCreateRoom(partialParams: ToOptional<{
      [K in keyof CreateRoomRequest]: (CreateRoomRequest)[K]
    }>): CreateRoomResponse {
        return this.client.createRoom(
            this.ops["CreateRoom"].apply(partialParams)
        );
    }

    invokeCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof CreateRoomMembershipRequest]: (CreateRoomMembershipRequest)[K]
    }>): CreateRoomMembershipResponse {
        return this.client.createRoomMembership(
            this.ops["CreateRoomMembership"].apply(partialParams)
        );
    }

    invokeCreateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationRequest]: (CreateSipMediaApplicationRequest)[K]
    }>): CreateSipMediaApplicationResponse {
        return this.client.createSipMediaApplication(
            this.ops["CreateSipMediaApplication"].apply(partialParams)
        );
    }

    invokeCreateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationCallRequest]: (CreateSipMediaApplicationCallRequest)[K]
    }>): CreateSipMediaApplicationCallResponse {
        return this.client.createSipMediaApplicationCall(
            this.ops["CreateSipMediaApplicationCall"].apply(partialParams)
        );
    }

    invokeCreateSipRule(partialParams: ToOptional<{
      [K in keyof CreateSipRuleRequest]: (CreateSipRuleRequest)[K]
    }>): CreateSipRuleResponse {
        return this.client.createSipRule(
            this.ops["CreateSipRule"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnector(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorRequest]: (CreateVoiceConnectorRequest)[K]
    }>): CreateVoiceConnectorResponse {
        return this.client.createVoiceConnector(
            this.ops["CreateVoiceConnector"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorGroupRequest]: (CreateVoiceConnectorGroupRequest)[K]
    }>): CreateVoiceConnectorGroupResponse {
        return this.client.createVoiceConnectorGroup(
            this.ops["CreateVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDeleteAccount(partialParams: ToOptional<{
      [K in keyof DeleteAccountRequest]: (DeleteAccountRequest)[K]
    }>): DeleteAccountResponse {
        return this.client.deleteAccount(
            this.ops["DeleteAccount"].apply(partialParams)
        );
    }

    invokeDeleteAppInstance(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceRequest]: (DeleteAppInstanceRequest)[K]
    }>): void {
        return this.client.deleteAppInstance(
            this.ops["DeleteAppInstance"].apply(partialParams)
        );
    }

    invokeDeleteAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceAdminRequest]: (DeleteAppInstanceAdminRequest)[K]
    }>): void {
        return this.client.deleteAppInstanceAdmin(
            this.ops["DeleteAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeDeleteAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceStreamingConfigurationsRequest]: (DeleteAppInstanceStreamingConfigurationsRequest)[K]
    }>): void {
        return this.client.deleteAppInstanceStreamingConfigurations(
            this.ops["DeleteAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokeDeleteAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceUserRequest]: (DeleteAppInstanceUserRequest)[K]
    }>): void {
        return this.client.deleteAppInstanceUser(
            this.ops["DeleteAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDeleteAttendee(partialParams: ToOptional<{
      [K in keyof DeleteAttendeeRequest]: (DeleteAttendeeRequest)[K]
    }>): void {
        return this.client.deleteAttendee(
            this.ops["DeleteAttendee"].apply(partialParams)
        );
    }

    invokeDeleteChannel(partialParams: ToOptional<{
      [K in keyof DeleteChannelRequest]: (DeleteChannelRequest)[K]
    }>): void {
        return this.client.deleteChannel(
            this.ops["DeleteChannel"].apply(partialParams)
        );
    }

    invokeDeleteChannelBan(partialParams: ToOptional<{
      [K in keyof DeleteChannelBanRequest]: (DeleteChannelBanRequest)[K]
    }>): void {
        return this.client.deleteChannelBan(
            this.ops["DeleteChannelBan"].apply(partialParams)
        );
    }

    invokeDeleteChannelMembership(partialParams: ToOptional<{
      [K in keyof DeleteChannelMembershipRequest]: (DeleteChannelMembershipRequest)[K]
    }>): void {
        return this.client.deleteChannelMembership(
            this.ops["DeleteChannelMembership"].apply(partialParams)
        );
    }

    invokeDeleteChannelMessage(partialParams: ToOptional<{
      [K in keyof DeleteChannelMessageRequest]: (DeleteChannelMessageRequest)[K]
    }>): void {
        return this.client.deleteChannelMessage(
            this.ops["DeleteChannelMessage"].apply(partialParams)
        );
    }

    invokeDeleteChannelModerator(partialParams: ToOptional<{
      [K in keyof DeleteChannelModeratorRequest]: (DeleteChannelModeratorRequest)[K]
    }>): void {
        return this.client.deleteChannelModerator(
            this.ops["DeleteChannelModerator"].apply(partialParams)
        );
    }

    invokeDeleteEventsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteEventsConfigurationRequest]: (DeleteEventsConfigurationRequest)[K]
    }>): void {
        return this.client.deleteEventsConfiguration(
            this.ops["DeleteEventsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof DeleteMediaCapturePipelineRequest]: (DeleteMediaCapturePipelineRequest)[K]
    }>): void {
        return this.client.deleteMediaCapturePipeline(
            this.ops["DeleteMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeDeleteMeeting(partialParams: ToOptional<{
      [K in keyof DeleteMeetingRequest]: (DeleteMeetingRequest)[K]
    }>): void {
        return this.client.deleteMeeting(
            this.ops["DeleteMeeting"].apply(partialParams)
        );
    }

    invokeDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof DeletePhoneNumberRequest]: (DeletePhoneNumberRequest)[K]
    }>): void {
        return this.client.deletePhoneNumber(
            this.ops["DeletePhoneNumber"].apply(partialParams)
        );
    }

    invokeDeleteProxySession(partialParams: ToOptional<{
      [K in keyof DeleteProxySessionRequest]: (DeleteProxySessionRequest)[K]
    }>): void {
        return this.client.deleteProxySession(
            this.ops["DeleteProxySession"].apply(partialParams)
        );
    }

    invokeDeleteRoom(partialParams: ToOptional<{
      [K in keyof DeleteRoomRequest]: (DeleteRoomRequest)[K]
    }>): void {
        return this.client.deleteRoom(
            this.ops["DeleteRoom"].apply(partialParams)
        );
    }

    invokeDeleteRoomMembership(partialParams: ToOptional<{
      [K in keyof DeleteRoomMembershipRequest]: (DeleteRoomMembershipRequest)[K]
    }>): void {
        return this.client.deleteRoomMembership(
            this.ops["DeleteRoomMembership"].apply(partialParams)
        );
    }

    invokeDeleteSipMediaApplication(partialParams: ToOptional<{
      [K in keyof DeleteSipMediaApplicationRequest]: (DeleteSipMediaApplicationRequest)[K]
    }>): void {
        return this.client.deleteSipMediaApplication(
            this.ops["DeleteSipMediaApplication"].apply(partialParams)
        );
    }

    invokeDeleteSipRule(partialParams: ToOptional<{
      [K in keyof DeleteSipRuleRequest]: (DeleteSipRuleRequest)[K]
    }>): void {
        return this.client.deleteSipRule(
            this.ops["DeleteSipRule"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnector(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorRequest]: (DeleteVoiceConnectorRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnector(
            this.ops["DeleteVoiceConnector"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorEmergencyCallingConfigurationRequest]: (DeleteVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(
            this.ops["DeleteVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorGroupRequest]: (DeleteVoiceConnectorGroupRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorGroup(
            this.ops["DeleteVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorOriginationRequest]: (DeleteVoiceConnectorOriginationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorOrigination(
            this.ops["DeleteVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorProxyRequest]: (DeleteVoiceConnectorProxyRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorProxy(
            this.ops["DeleteVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorStreamingConfigurationRequest]: (DeleteVoiceConnectorStreamingConfigurationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorStreamingConfiguration(
            this.ops["DeleteVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationRequest]: (DeleteVoiceConnectorTerminationRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorTermination(
            this.ops["DeleteVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationCredentialsRequest]: (DeleteVoiceConnectorTerminationCredentialsRequest)[K]
    }>): void {
        return this.client.deleteVoiceConnectorTerminationCredentials(
            this.ops["DeleteVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokeDescribeAppInstance(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceRequest]: (DescribeAppInstanceRequest)[K]
    }>): DescribeAppInstanceResponse {
        return this.client.describeAppInstance(
            this.ops["DescribeAppInstance"].apply(partialParams)
        );
    }

    invokeDescribeAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceAdminRequest]: (DescribeAppInstanceAdminRequest)[K]
    }>): DescribeAppInstanceAdminResponse {
        return this.client.describeAppInstanceAdmin(
            this.ops["DescribeAppInstanceAdmin"].apply(partialParams)
        );
    }

    invokeDescribeAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceUserRequest]: (DescribeAppInstanceUserRequest)[K]
    }>): DescribeAppInstanceUserResponse {
        return this.client.describeAppInstanceUser(
            this.ops["DescribeAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest]: (DescribeChannelRequest)[K]
    }>): DescribeChannelResponse {
        return this.client.describeChannel(
            this.ops["DescribeChannel"].apply(partialParams)
        );
    }

    invokeDescribeChannelBan(partialParams: ToOptional<{
      [K in keyof DescribeChannelBanRequest]: (DescribeChannelBanRequest)[K]
    }>): DescribeChannelBanResponse {
        return this.client.describeChannelBan(
            this.ops["DescribeChannelBan"].apply(partialParams)
        );
    }

    invokeDescribeChannelMembership(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipRequest]: (DescribeChannelMembershipRequest)[K]
    }>): DescribeChannelMembershipResponse {
        return this.client.describeChannelMembership(
            this.ops["DescribeChannelMembership"].apply(partialParams)
        );
    }

    invokeDescribeChannelMembershipForAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipForAppInstanceUserRequest]: (DescribeChannelMembershipForAppInstanceUserRequest)[K]
    }>): DescribeChannelMembershipForAppInstanceUserResponse {
        return this.client.describeChannelMembershipForAppInstanceUser(
            this.ops["DescribeChannelMembershipForAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannelModeratedByAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratedByAppInstanceUserRequest]: (DescribeChannelModeratedByAppInstanceUserRequest)[K]
    }>): DescribeChannelModeratedByAppInstanceUserResponse {
        return this.client.describeChannelModeratedByAppInstanceUser(
            this.ops["DescribeChannelModeratedByAppInstanceUser"].apply(partialParams)
        );
    }

    invokeDescribeChannelModerator(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratorRequest]: (DescribeChannelModeratorRequest)[K]
    }>): DescribeChannelModeratorResponse {
        return this.client.describeChannelModerator(
            this.ops["DescribeChannelModerator"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumberFromUser(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumberFromUserRequest]: (DisassociatePhoneNumberFromUserRequest)[K]
    }>): DisassociatePhoneNumberFromUserResponse {
        return this.client.disassociatePhoneNumberFromUser(
            this.ops["DisassociatePhoneNumberFromUser"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorRequest]: (DisassociatePhoneNumbersFromVoiceConnectorRequest)[K]
    }>): DisassociatePhoneNumbersFromVoiceConnectorResponse {
        return this.client.disassociatePhoneNumbersFromVoiceConnector(
            this.ops["DisassociatePhoneNumbersFromVoiceConnector"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest]: (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest)[K]
    }>): DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(
            this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams: ToOptional<{
      [K in keyof DisassociateSigninDelegateGroupsFromAccountRequest]: (DisassociateSigninDelegateGroupsFromAccountRequest)[K]
    }>): DisassociateSigninDelegateGroupsFromAccountResponse {
        return this.client.disassociateSigninDelegateGroupsFromAccount(
            this.ops["DisassociateSigninDelegateGroupsFromAccount"].apply(partialParams)
        );
    }

    invokeGetAccount(partialParams: ToOptional<{
      [K in keyof GetAccountRequest]: (GetAccountRequest)[K]
    }>): GetAccountResponse {
        return this.client.getAccount(
            this.ops["GetAccount"].apply(partialParams)
        );
    }

    invokeGetAccountSettings(partialParams: ToOptional<{
      [K in keyof GetAccountSettingsRequest]: (GetAccountSettingsRequest)[K]
    }>): GetAccountSettingsResponse {
        return this.client.getAccountSettings(
            this.ops["GetAccountSettings"].apply(partialParams)
        );
    }

    invokeGetAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetAppInstanceRetentionSettingsRequest]: (GetAppInstanceRetentionSettingsRequest)[K]
    }>): GetAppInstanceRetentionSettingsResponse {
        return this.client.getAppInstanceRetentionSettings(
            this.ops["GetAppInstanceRetentionSettings"].apply(partialParams)
        );
    }

    invokeGetAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof GetAppInstanceStreamingConfigurationsRequest]: (GetAppInstanceStreamingConfigurationsRequest)[K]
    }>): GetAppInstanceStreamingConfigurationsResponse {
        return this.client.getAppInstanceStreamingConfigurations(
            this.ops["GetAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokeGetAttendee(partialParams: ToOptional<{
      [K in keyof GetAttendeeRequest]: (GetAttendeeRequest)[K]
    }>): GetAttendeeResponse {
        return this.client.getAttendee(
            this.ops["GetAttendee"].apply(partialParams)
        );
    }

    invokeGetBot(partialParams: ToOptional<{
      [K in keyof GetBotRequest]: (GetBotRequest)[K]
    }>): GetBotResponse {
        return this.client.getBot(
            this.ops["GetBot"].apply(partialParams)
        );
    }

    invokeGetChannelMessage(partialParams: ToOptional<{
      [K in keyof GetChannelMessageRequest]: (GetChannelMessageRequest)[K]
    }>): GetChannelMessageResponse {
        return this.client.getChannelMessage(
            this.ops["GetChannelMessage"].apply(partialParams)
        );
    }

    invokeGetEventsConfiguration(partialParams: ToOptional<{
      [K in keyof GetEventsConfigurationRequest]: (GetEventsConfigurationRequest)[K]
    }>): GetEventsConfigurationResponse {
        return this.client.getEventsConfiguration(
            this.ops["GetEventsConfiguration"].apply(partialParams)
        );
    }

    invokeGetMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof GetMediaCapturePipelineRequest]: (GetMediaCapturePipelineRequest)[K]
    }>): GetMediaCapturePipelineResponse {
        return this.client.getMediaCapturePipeline(
            this.ops["GetMediaCapturePipeline"].apply(partialParams)
        );
    }

    invokeGetMeeting(partialParams: ToOptional<{
      [K in keyof GetMeetingRequest]: (GetMeetingRequest)[K]
    }>): GetMeetingResponse {
        return this.client.getMeeting(
            this.ops["GetMeeting"].apply(partialParams)
        );
    }

    invokeGetPhoneNumber(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberRequest]: (GetPhoneNumberRequest)[K]
    }>): GetPhoneNumberResponse {
        return this.client.getPhoneNumber(
            this.ops["GetPhoneNumber"].apply(partialParams)
        );
    }

    invokeGetPhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberOrderRequest]: (GetPhoneNumberOrderRequest)[K]
    }>): GetPhoneNumberOrderResponse {
        return this.client.getPhoneNumberOrder(
            this.ops["GetPhoneNumberOrder"].apply(partialParams)
        );
    }

    invokeGetProxySession(partialParams: ToOptional<{
      [K in keyof GetProxySessionRequest]: (GetProxySessionRequest)[K]
    }>): GetProxySessionResponse {
        return this.client.getProxySession(
            this.ops["GetProxySession"].apply(partialParams)
        );
    }

    invokeGetRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetRetentionSettingsRequest]: (GetRetentionSettingsRequest)[K]
    }>): GetRetentionSettingsResponse {
        return this.client.getRetentionSettings(
            this.ops["GetRetentionSettings"].apply(partialParams)
        );
    }

    invokeGetRoom(partialParams: ToOptional<{
      [K in keyof GetRoomRequest]: (GetRoomRequest)[K]
    }>): GetRoomResponse {
        return this.client.getRoom(
            this.ops["GetRoom"].apply(partialParams)
        );
    }

    invokeGetSipMediaApplication(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationRequest]: (GetSipMediaApplicationRequest)[K]
    }>): GetSipMediaApplicationResponse {
        return this.client.getSipMediaApplication(
            this.ops["GetSipMediaApplication"].apply(partialParams)
        );
    }

    invokeGetSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationLoggingConfigurationRequest]: (GetSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): GetSipMediaApplicationLoggingConfigurationResponse {
        return this.client.getSipMediaApplicationLoggingConfiguration(
            this.ops["GetSipMediaApplicationLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetSipRule(partialParams: ToOptional<{
      [K in keyof GetSipRuleRequest]: (GetSipRuleRequest)[K]
    }>): GetSipRuleResponse {
        return this.client.getSipRule(
            this.ops["GetSipRule"].apply(partialParams)
        );
    }

    invokeGetUser(partialParams: ToOptional<{
      [K in keyof GetUserRequest]: (GetUserRequest)[K]
    }>): GetUserResponse {
        return this.client.getUser(
            this.ops["GetUser"].apply(partialParams)
        );
    }

    invokeGetUserSettings(partialParams: ToOptional<{
      [K in keyof GetUserSettingsRequest]: (GetUserSettingsRequest)[K]
    }>): GetUserSettingsResponse {
        return this.client.getUserSettings(
            this.ops["GetUserSettings"].apply(partialParams)
        );
    }

    invokeGetVoiceConnector(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorRequest]: (GetVoiceConnectorRequest)[K]
    }>): GetVoiceConnectorResponse {
        return this.client.getVoiceConnector(
            this.ops["GetVoiceConnector"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorEmergencyCallingConfigurationRequest]: (GetVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): GetVoiceConnectorEmergencyCallingConfigurationResponse {
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(
            this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorGroupRequest]: (GetVoiceConnectorGroupRequest)[K]
    }>): GetVoiceConnectorGroupResponse {
        return this.client.getVoiceConnectorGroup(
            this.ops["GetVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorLoggingConfigurationRequest]: (GetVoiceConnectorLoggingConfigurationRequest)[K]
    }>): GetVoiceConnectorLoggingConfigurationResponse {
        return this.client.getVoiceConnectorLoggingConfiguration(
            this.ops["GetVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorOriginationRequest]: (GetVoiceConnectorOriginationRequest)[K]
    }>): GetVoiceConnectorOriginationResponse {
        return this.client.getVoiceConnectorOrigination(
            this.ops["GetVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorProxyRequest]: (GetVoiceConnectorProxyRequest)[K]
    }>): GetVoiceConnectorProxyResponse {
        return this.client.getVoiceConnectorProxy(
            this.ops["GetVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorStreamingConfigurationRequest]: (GetVoiceConnectorStreamingConfigurationRequest)[K]
    }>): GetVoiceConnectorStreamingConfigurationResponse {
        return this.client.getVoiceConnectorStreamingConfiguration(
            this.ops["GetVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationRequest]: (GetVoiceConnectorTerminationRequest)[K]
    }>): GetVoiceConnectorTerminationResponse {
        return this.client.getVoiceConnectorTermination(
            this.ops["GetVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTerminationHealth(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationHealthRequest]: (GetVoiceConnectorTerminationHealthRequest)[K]
    }>): GetVoiceConnectorTerminationHealthResponse {
        return this.client.getVoiceConnectorTerminationHealth(
            this.ops["GetVoiceConnectorTerminationHealth"].apply(partialParams)
        );
    }

    invokeInviteUsers(partialParams: ToOptional<{
      [K in keyof InviteUsersRequest]: (InviteUsersRequest)[K]
    }>): InviteUsersResponse {
        return this.client.inviteUsers(
            this.ops["InviteUsers"].apply(partialParams)
        );
    }

    invokeListAppInstanceAdmins(partialParams: ToOptional<{
      [K in keyof ListAppInstanceAdminsRequest]: (ListAppInstanceAdminsRequest)[K]
    }>): ListAppInstanceAdminsResponse {
        return this.client.listAppInstanceAdmins(
            this.ops["ListAppInstanceAdmins"].apply(partialParams)
        );
    }

    invokeListAppInstanceUsers(partialParams: ToOptional<{
      [K in keyof ListAppInstanceUsersRequest]: (ListAppInstanceUsersRequest)[K]
    }>): ListAppInstanceUsersResponse {
        return this.client.listAppInstanceUsers(
            this.ops["ListAppInstanceUsers"].apply(partialParams)
        );
    }

    invokeListAttendeeTags(partialParams: ToOptional<{
      [K in keyof ListAttendeeTagsRequest]: (ListAttendeeTagsRequest)[K]
    }>): ListAttendeeTagsResponse {
        return this.client.listAttendeeTags(
            this.ops["ListAttendeeTags"].apply(partialParams)
        );
    }

    invokeListAttendees(partialParams: ToOptional<{
      [K in keyof ListAttendeesRequest]: (ListAttendeesRequest)[K]
    }>): ListAttendeesResponse {
        return this.client.listAttendees(
            this.ops["ListAttendees"].apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest]: (ListBotsRequest)[K]
    }>): ListBotsResponse {
        return this.client.listBots(
            this.ops["ListBots"].apply(partialParams)
        );
    }

    invokeListChannelBans(partialParams: ToOptional<{
      [K in keyof ListChannelBansRequest]: (ListChannelBansRequest)[K]
    }>): ListChannelBansResponse {
        return this.client.listChannelBans(
            this.ops["ListChannelBans"].apply(partialParams)
        );
    }

    invokeListChannelMemberships(partialParams: ToOptional<{
      [K in keyof ListChannelMembershipsRequest]: (ListChannelMembershipsRequest)[K]
    }>): ListChannelMembershipsResponse {
        return this.client.listChannelMemberships(
            this.ops["ListChannelMemberships"].apply(partialParams)
        );
    }

    invokeListChannelMessages(partialParams: ToOptional<{
      [K in keyof ListChannelMessagesRequest]: (ListChannelMessagesRequest)[K]
    }>): ListChannelMessagesResponse {
        return this.client.listChannelMessages(
            this.ops["ListChannelMessages"].apply(partialParams)
        );
    }

    invokeListChannelModerators(partialParams: ToOptional<{
      [K in keyof ListChannelModeratorsRequest]: (ListChannelModeratorsRequest)[K]
    }>): ListChannelModeratorsResponse {
        return this.client.listChannelModerators(
            this.ops["ListChannelModerators"].apply(partialParams)
        );
    }

    invokeListChannels(partialParams: ToOptional<{
      [K in keyof ListChannelsRequest]: (ListChannelsRequest)[K]
    }>): ListChannelsResponse {
        return this.client.listChannels(
            this.ops["ListChannels"].apply(partialParams)
        );
    }

    invokeListMeetingTags(partialParams: ToOptional<{
      [K in keyof ListMeetingTagsRequest]: (ListMeetingTagsRequest)[K]
    }>): ListMeetingTagsResponse {
        return this.client.listMeetingTags(
            this.ops["ListMeetingTags"].apply(partialParams)
        );
    }

    invokeListProxySessions(partialParams: ToOptional<{
      [K in keyof ListProxySessionsRequest]: (ListProxySessionsRequest)[K]
    }>): ListProxySessionsResponse {
        return this.client.listProxySessions(
            this.ops["ListProxySessions"].apply(partialParams)
        );
    }

    invokeListRoomMemberships(partialParams: ToOptional<{
      [K in keyof ListRoomMembershipsRequest]: (ListRoomMembershipsRequest)[K]
    }>): ListRoomMembershipsResponse {
        return this.client.listRoomMemberships(
            this.ops["ListRoomMemberships"].apply(partialParams)
        );
    }

    invokeListRooms(partialParams: ToOptional<{
      [K in keyof ListRoomsRequest]: (ListRoomsRequest)[K]
    }>): ListRoomsResponse {
        return this.client.listRooms(
            this.ops["ListRooms"].apply(partialParams)
        );
    }

    invokeListSupportedPhoneNumberCountries(partialParams: ToOptional<{
      [K in keyof ListSupportedPhoneNumberCountriesRequest]: (ListSupportedPhoneNumberCountriesRequest)[K]
    }>): ListSupportedPhoneNumberCountriesResponse {
        return this.client.listSupportedPhoneNumberCountries(
            this.ops["ListSupportedPhoneNumberCountries"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest]: (ListUsersRequest)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeListVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorTerminationCredentialsRequest]: (ListVoiceConnectorTerminationCredentialsRequest)[K]
    }>): ListVoiceConnectorTerminationCredentialsResponse {
        return this.client.listVoiceConnectorTerminationCredentials(
            this.ops["ListVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokeLogoutUser(partialParams: ToOptional<{
      [K in keyof LogoutUserRequest]: (LogoutUserRequest)[K]
    }>): LogoutUserResponse {
        return this.client.logoutUser(
            this.ops["LogoutUser"].apply(partialParams)
        );
    }

    invokePutAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutAppInstanceRetentionSettingsRequest]: (PutAppInstanceRetentionSettingsRequest)[K]
    }>): PutAppInstanceRetentionSettingsResponse {
        return this.client.putAppInstanceRetentionSettings(
            this.ops["PutAppInstanceRetentionSettings"].apply(partialParams)
        );
    }

    invokePutAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof PutAppInstanceStreamingConfigurationsRequest]: (PutAppInstanceStreamingConfigurationsRequest)[K]
    }>): PutAppInstanceStreamingConfigurationsResponse {
        return this.client.putAppInstanceStreamingConfigurations(
            this.ops["PutAppInstanceStreamingConfigurations"].apply(partialParams)
        );
    }

    invokePutEventsConfiguration(partialParams: ToOptional<{
      [K in keyof PutEventsConfigurationRequest]: (PutEventsConfigurationRequest)[K]
    }>): PutEventsConfigurationResponse {
        return this.client.putEventsConfiguration(
            this.ops["PutEventsConfiguration"].apply(partialParams)
        );
    }

    invokePutRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutRetentionSettingsRequest]: (PutRetentionSettingsRequest)[K]
    }>): PutRetentionSettingsResponse {
        return this.client.putRetentionSettings(
            this.ops["PutRetentionSettings"].apply(partialParams)
        );
    }

    invokePutSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutSipMediaApplicationLoggingConfigurationRequest]: (PutSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): PutSipMediaApplicationLoggingConfigurationResponse {
        return this.client.putSipMediaApplicationLoggingConfiguration(
            this.ops["PutSipMediaApplicationLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorEmergencyCallingConfigurationRequest]: (PutVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): PutVoiceConnectorEmergencyCallingConfigurationResponse {
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(
            this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorLoggingConfigurationRequest]: (PutVoiceConnectorLoggingConfigurationRequest)[K]
    }>): PutVoiceConnectorLoggingConfigurationResponse {
        return this.client.putVoiceConnectorLoggingConfiguration(
            this.ops["PutVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorOriginationRequest]: (PutVoiceConnectorOriginationRequest)[K]
    }>): PutVoiceConnectorOriginationResponse {
        return this.client.putVoiceConnectorOrigination(
            this.ops["PutVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorProxyRequest]: (PutVoiceConnectorProxyRequest)[K]
    }>): PutVoiceConnectorProxyResponse {
        return this.client.putVoiceConnectorProxy(
            this.ops["PutVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorStreamingConfigurationRequest]: (PutVoiceConnectorStreamingConfigurationRequest)[K]
    }>): PutVoiceConnectorStreamingConfigurationResponse {
        return this.client.putVoiceConnectorStreamingConfiguration(
            this.ops["PutVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationRequest]: (PutVoiceConnectorTerminationRequest)[K]
    }>): PutVoiceConnectorTerminationResponse {
        return this.client.putVoiceConnectorTermination(
            this.ops["PutVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationCredentialsRequest]: (PutVoiceConnectorTerminationCredentialsRequest)[K]
    }>): void {
        return this.client.putVoiceConnectorTerminationCredentials(
            this.ops["PutVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokeRedactChannelMessage(partialParams: ToOptional<{
      [K in keyof RedactChannelMessageRequest]: (RedactChannelMessageRequest)[K]
    }>): RedactChannelMessageResponse {
        return this.client.redactChannelMessage(
            this.ops["RedactChannelMessage"].apply(partialParams)
        );
    }

    invokeRedactConversationMessage(partialParams: ToOptional<{
      [K in keyof RedactConversationMessageRequest]: (RedactConversationMessageRequest)[K]
    }>): RedactConversationMessageResponse {
        return this.client.redactConversationMessage(
            this.ops["RedactConversationMessage"].apply(partialParams)
        );
    }

    invokeRedactRoomMessage(partialParams: ToOptional<{
      [K in keyof RedactRoomMessageRequest]: (RedactRoomMessageRequest)[K]
    }>): RedactRoomMessageResponse {
        return this.client.redactRoomMessage(
            this.ops["RedactRoomMessage"].apply(partialParams)
        );
    }

    invokeRegenerateSecurityToken(partialParams: ToOptional<{
      [K in keyof RegenerateSecurityTokenRequest]: (RegenerateSecurityTokenRequest)[K]
    }>): RegenerateSecurityTokenResponse {
        return this.client.regenerateSecurityToken(
            this.ops["RegenerateSecurityToken"].apply(partialParams)
        );
    }

    invokeResetPersonalPIN(partialParams: ToOptional<{
      [K in keyof ResetPersonalPINRequest]: (ResetPersonalPINRequest)[K]
    }>): ResetPersonalPINResponse {
        return this.client.resetPersonalPIN(
            this.ops["ResetPersonalPIN"].apply(partialParams)
        );
    }

    invokeRestorePhoneNumber(partialParams: ToOptional<{
      [K in keyof RestorePhoneNumberRequest]: (RestorePhoneNumberRequest)[K]
    }>): RestorePhoneNumberResponse {
        return this.client.restorePhoneNumber(
            this.ops["RestorePhoneNumber"].apply(partialParams)
        );
    }

    invokeSendChannelMessage(partialParams: ToOptional<{
      [K in keyof SendChannelMessageRequest]: (SendChannelMessageRequest)[K]
    }>): SendChannelMessageResponse {
        return this.client.sendChannelMessage(
            this.ops["SendChannelMessage"].apply(partialParams)
        );
    }

    invokeStartMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StartMeetingTranscriptionRequest]: (StartMeetingTranscriptionRequest)[K]
    }>): StartMeetingTranscriptionResponse {
        return this.client.startMeetingTranscription(
            this.ops["StartMeetingTranscription"].apply(partialParams)
        );
    }

    invokeStopMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StopMeetingTranscriptionRequest]: (StopMeetingTranscriptionRequest)[K]
    }>): StopMeetingTranscriptionResponse {
        return this.client.stopMeetingTranscription(
            this.ops["StopMeetingTranscription"].apply(partialParams)
        );
    }

    invokeTagAttendee(partialParams: ToOptional<{
      [K in keyof TagAttendeeRequest]: (TagAttendeeRequest)[K]
    }>): void {
        return this.client.tagAttendee(
            this.ops["TagAttendee"].apply(partialParams)
        );
    }

    invokeTagMeeting(partialParams: ToOptional<{
      [K in keyof TagMeetingRequest]: (TagMeetingRequest)[K]
    }>): void {
        return this.client.tagMeeting(
            this.ops["TagMeeting"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagAttendee(partialParams: ToOptional<{
      [K in keyof UntagAttendeeRequest]: (UntagAttendeeRequest)[K]
    }>): void {
        return this.client.untagAttendee(
            this.ops["UntagAttendee"].apply(partialParams)
        );
    }

    invokeUntagMeeting(partialParams: ToOptional<{
      [K in keyof UntagMeetingRequest]: (UntagMeetingRequest)[K]
    }>): void {
        return this.client.untagMeeting(
            this.ops["UntagMeeting"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAccount(partialParams: ToOptional<{
      [K in keyof UpdateAccountRequest]: (UpdateAccountRequest)[K]
    }>): UpdateAccountResponse {
        return this.client.updateAccount(
            this.ops["UpdateAccount"].apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest]: (UpdateAccountSettingsRequest)[K]
    }>): UpdateAccountSettingsResponse {
        return this.client.updateAccountSettings(
            this.ops["UpdateAccountSettings"].apply(partialParams)
        );
    }

    invokeUpdateAppInstance(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAppInstanceRequest, "Name">]: (Omit<UpdateAppInstanceRequest, "Name">)[K]
    }>): UpdateAppInstanceResponse {
        return this.client.updateAppInstance(
            this.ops["UpdateAppInstance"].apply(partialParams)
        );
    }

    invokeUpdateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceUserRequest]: (UpdateAppInstanceUserRequest)[K]
    }>): UpdateAppInstanceUserResponse {
        return this.client.updateAppInstanceUser(
            this.ops["UpdateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeUpdateBot(partialParams: ToOptional<{
      [K in keyof UpdateBotRequest]: (UpdateBotRequest)[K]
    }>): UpdateBotResponse {
        return this.client.updateBot(
            this.ops["UpdateBot"].apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof Omit<UpdateChannelRequest, "Name">]: (Omit<UpdateChannelRequest, "Name">)[K]
    }>): UpdateChannelResponse {
        return this.client.updateChannel(
            this.ops["UpdateChannel"].apply(partialParams)
        );
    }

    invokeUpdateChannelMessage(partialParams: ToOptional<{
      [K in keyof UpdateChannelMessageRequest]: (UpdateChannelMessageRequest)[K]
    }>): UpdateChannelMessageResponse {
        return this.client.updateChannelMessage(
            this.ops["UpdateChannelMessage"].apply(partialParams)
        );
    }

    invokeUpdateChannelReadMarker(partialParams: ToOptional<{
      [K in keyof UpdateChannelReadMarkerRequest]: (UpdateChannelReadMarkerRequest)[K]
    }>): UpdateChannelReadMarkerResponse {
        return this.client.updateChannelReadMarker(
            this.ops["UpdateChannelReadMarker"].apply(partialParams)
        );
    }

    invokeUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberRequest]: (UpdatePhoneNumberRequest)[K]
    }>): UpdatePhoneNumberResponse {
        return this.client.updatePhoneNumber(
            this.ops["UpdatePhoneNumber"].apply(partialParams)
        );
    }

    invokeUpdatePhoneNumberSettings(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberSettingsRequest]: (UpdatePhoneNumberSettingsRequest)[K]
    }>): void {
        return this.client.updatePhoneNumberSettings(
            this.ops["UpdatePhoneNumberSettings"].apply(partialParams)
        );
    }

    invokeUpdateProxySession(partialParams: ToOptional<{
      [K in keyof UpdateProxySessionRequest]: (UpdateProxySessionRequest)[K]
    }>): UpdateProxySessionResponse {
        return this.client.updateProxySession(
            this.ops["UpdateProxySession"].apply(partialParams)
        );
    }

    invokeUpdateRoom(partialParams: ToOptional<{
      [K in keyof UpdateRoomRequest]: (UpdateRoomRequest)[K]
    }>): UpdateRoomResponse {
        return this.client.updateRoom(
            this.ops["UpdateRoom"].apply(partialParams)
        );
    }

    invokeUpdateRoomMembership(partialParams: ToOptional<{
      [K in keyof UpdateRoomMembershipRequest]: (UpdateRoomMembershipRequest)[K]
    }>): UpdateRoomMembershipResponse {
        return this.client.updateRoomMembership(
            this.ops["UpdateRoomMembership"].apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationRequest]: (UpdateSipMediaApplicationRequest)[K]
    }>): UpdateSipMediaApplicationResponse {
        return this.client.updateSipMediaApplication(
            this.ops["UpdateSipMediaApplication"].apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationCallRequest]: (UpdateSipMediaApplicationCallRequest)[K]
    }>): UpdateSipMediaApplicationCallResponse {
        return this.client.updateSipMediaApplicationCall(
            this.ops["UpdateSipMediaApplicationCall"].apply(partialParams)
        );
    }

    invokeUpdateSipRule(partialParams: ToOptional<{
      [K in keyof Omit<UpdateSipRuleRequest, "Name">]: (Omit<UpdateSipRuleRequest, "Name">)[K]
    }>): UpdateSipRuleResponse {
        return this.client.updateSipRule(
            this.ops["UpdateSipRule"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest]: (UpdateUserRequest)[K]
    }>): UpdateUserResponse {
        return this.client.updateUser(
            this.ops["UpdateUser"].apply(partialParams)
        );
    }

    invokeUpdateUserSettings(partialParams: ToOptional<{
      [K in keyof UpdateUserSettingsRequest]: (UpdateUserSettingsRequest)[K]
    }>): void {
        return this.client.updateUserSettings(
            this.ops["UpdateUserSettings"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnector(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorRequest]: (UpdateVoiceConnectorRequest)[K]
    }>): UpdateVoiceConnectorResponse {
        return this.client.updateVoiceConnector(
            this.ops["UpdateVoiceConnector"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorGroupRequest]: (UpdateVoiceConnectorGroupRequest)[K]
    }>): UpdateVoiceConnectorGroupResponse {
        return this.client.updateVoiceConnectorGroup(
            this.ops["UpdateVoiceConnectorGroup"].apply(partialParams)
        );
    }
}