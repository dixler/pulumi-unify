
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
    constructor(...args: ConstructorParameters<typeof aws.chime.VoiceConnectorTerminationCredentials>) {
        super(...args)
        this.client = new awssdk.Chime()
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

    invokeAssociatePhoneNumberWithUser(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumberWithUserRequest]: (AssociatePhoneNumberWithUserRequest)[K]
    }>): Request<AssociatePhoneNumberWithUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumberWithUser(
          this.ops["AssociatePhoneNumberWithUser"].applicator.apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorRequest]: (AssociatePhoneNumbersWithVoiceConnectorRequest)[K]
    }>): Request<AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnector(
          this.ops["AssociatePhoneNumbersWithVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorGroupRequest]: (AssociatePhoneNumbersWithVoiceConnectorGroupRequest)[K]
    }>): Request<AssociatePhoneNumbersWithVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(
          this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeAssociateSigninDelegateGroupsWithAccount(partialParams: ToOptional<{
      [K in keyof AssociateSigninDelegateGroupsWithAccountRequest]: (AssociateSigninDelegateGroupsWithAccountRequest)[K]
    }>): Request<AssociateSigninDelegateGroupsWithAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateSigninDelegateGroupsWithAccount(
          this.ops["AssociateSigninDelegateGroupsWithAccount"].applicator.apply(partialParams)
        );
    }

    invokeBatchCreateAttendee(partialParams: ToOptional<{
      [K in keyof BatchCreateAttendeeRequest]: (BatchCreateAttendeeRequest)[K]
    }>): Request<BatchCreateAttendeeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateAttendee(
          this.ops["BatchCreateAttendee"].applicator.apply(partialParams)
        );
    }

    invokeBatchCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateChannelMembershipRequest]: (BatchCreateChannelMembershipRequest)[K]
    }>): Request<BatchCreateChannelMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateChannelMembership(
          this.ops["BatchCreateChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeBatchCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateRoomMembershipRequest]: (BatchCreateRoomMembershipRequest)[K]
    }>): Request<BatchCreateRoomMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateRoomMembership(
          this.ops["BatchCreateRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchDeletePhoneNumberRequest]: (BatchDeletePhoneNumberRequest)[K]
    }>): Request<BatchDeletePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeletePhoneNumber(
          this.ops["BatchDeletePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeBatchSuspendUser(partialParams: ToOptional<{
      [K in keyof BatchSuspendUserRequest]: (BatchSuspendUserRequest)[K]
    }>): Request<BatchSuspendUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchSuspendUser(
          this.ops["BatchSuspendUser"].applicator.apply(partialParams)
        );
    }

    invokeBatchUnsuspendUser(partialParams: ToOptional<{
      [K in keyof BatchUnsuspendUserRequest]: (BatchUnsuspendUserRequest)[K]
    }>): Request<BatchUnsuspendUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUnsuspendUser(
          this.ops["BatchUnsuspendUser"].applicator.apply(partialParams)
        );
    }

    invokeBatchUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchUpdatePhoneNumberRequest]: (BatchUpdatePhoneNumberRequest)[K]
    }>): Request<BatchUpdatePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdatePhoneNumber(
          this.ops["BatchUpdatePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeBatchUpdateUser(partialParams: ToOptional<{
      [K in keyof BatchUpdateUserRequest]: (BatchUpdateUserRequest)[K]
    }>): Request<BatchUpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdateUser(
          this.ops["BatchUpdateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest]: (CreateAccountRequest)[K]
    }>): Request<CreateAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccount(
          this.ops["CreateAccount"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppInstance(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceRequest]: (CreateAppInstanceRequest)[K]
    }>): Request<CreateAppInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstance(
          this.ops["CreateAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceAdminRequest]: (CreateAppInstanceAdminRequest)[K]
    }>): Request<CreateAppInstanceAdminResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstanceAdmin(
          this.ops["CreateAppInstanceAdmin"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceUserRequest]: (CreateAppInstanceUserRequest)[K]
    }>): Request<CreateAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstanceUser(
          this.ops["CreateAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateAttendee(partialParams: ToOptional<{
      [K in keyof CreateAttendeeRequest]: (CreateAttendeeRequest)[K]
    }>): Request<CreateAttendeeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAttendee(
          this.ops["CreateAttendee"].applicator.apply(partialParams)
        );
    }

    invokeCreateBot(partialParams: ToOptional<{
      [K in keyof CreateBotRequest]: (CreateBotRequest)[K]
    }>): Request<CreateBotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBot(
          this.ops["CreateBot"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest]: (CreateChannelRequest)[K]
    }>): Request<CreateChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannel(
          this.ops["CreateChannel"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannelBan(partialParams: ToOptional<{
      [K in keyof CreateChannelBanRequest]: (CreateChannelBanRequest)[K]
    }>): Request<CreateChannelBanResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelBan(
          this.ops["CreateChannelBan"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof CreateChannelMembershipRequest]: (CreateChannelMembershipRequest)[K]
    }>): Request<CreateChannelMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelMembership(
          this.ops["CreateChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannelModerator(partialParams: ToOptional<{
      [K in keyof CreateChannelModeratorRequest]: (CreateChannelModeratorRequest)[K]
    }>): Request<CreateChannelModeratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelModerator(
          this.ops["CreateChannelModerator"].applicator.apply(partialParams)
        );
    }

    invokeCreateMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof CreateMediaCapturePipelineRequest]: (CreateMediaCapturePipelineRequest)[K]
    }>): Request<CreateMediaCapturePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMediaCapturePipeline(
          this.ops["CreateMediaCapturePipeline"].applicator.apply(partialParams)
        );
    }

    invokeCreateMeeting(partialParams: ToOptional<{
      [K in keyof CreateMeetingRequest]: (CreateMeetingRequest)[K]
    }>): Request<CreateMeetingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeeting(
          this.ops["CreateMeeting"].applicator.apply(partialParams)
        );
    }

    invokeCreateMeetingDialOut(partialParams: ToOptional<{
      [K in keyof CreateMeetingDialOutRequest]: (CreateMeetingDialOutRequest)[K]
    }>): Request<CreateMeetingDialOutResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeetingDialOut(
          this.ops["CreateMeetingDialOut"].applicator.apply(partialParams)
        );
    }

    invokeCreateMeetingWithAttendees(partialParams: ToOptional<{
      [K in keyof CreateMeetingWithAttendeesRequest]: (CreateMeetingWithAttendeesRequest)[K]
    }>): Request<CreateMeetingWithAttendeesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeetingWithAttendees(
          this.ops["CreateMeetingWithAttendees"].applicator.apply(partialParams)
        );
    }

    invokeCreatePhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof CreatePhoneNumberOrderRequest]: (CreatePhoneNumberOrderRequest)[K]
    }>): Request<CreatePhoneNumberOrderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPhoneNumberOrder(
          this.ops["CreatePhoneNumberOrder"].applicator.apply(partialParams)
        );
    }

    invokeCreateProxySession(partialParams: ToOptional<{
      [K in keyof CreateProxySessionRequest]: (CreateProxySessionRequest)[K]
    }>): Request<CreateProxySessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProxySession(
          this.ops["CreateProxySession"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoom(partialParams: ToOptional<{
      [K in keyof CreateRoomRequest]: (CreateRoomRequest)[K]
    }>): Request<CreateRoomResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoom(
          this.ops["CreateRoom"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof CreateRoomMembershipRequest]: (CreateRoomMembershipRequest)[K]
    }>): Request<CreateRoomMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoomMembership(
          this.ops["CreateRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeCreateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationRequest]: (CreateSipMediaApplicationRequest)[K]
    }>): Request<CreateSipMediaApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipMediaApplication(
          this.ops["CreateSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationCallRequest]: (CreateSipMediaApplicationCallRequest)[K]
    }>): Request<CreateSipMediaApplicationCallResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipMediaApplicationCall(
          this.ops["CreateSipMediaApplicationCall"].applicator.apply(partialParams)
        );
    }

    invokeCreateSipRule(partialParams: ToOptional<{
      [K in keyof CreateSipRuleRequest]: (CreateSipRuleRequest)[K]
    }>): Request<CreateSipRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipRule(
          this.ops["CreateSipRule"].applicator.apply(partialParams)
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

    invokeCreateVoiceConnector(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorRequest]: (CreateVoiceConnectorRequest)[K]
    }>): Request<CreateVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceConnector(
          this.ops["CreateVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeCreateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorGroupRequest]: (CreateVoiceConnectorGroupRequest)[K]
    }>): Request<CreateVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceConnectorGroup(
          this.ops["CreateVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccount(partialParams: ToOptional<{
      [K in keyof DeleteAccountRequest]: (DeleteAccountRequest)[K]
    }>): Request<DeleteAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccount(
          this.ops["DeleteAccount"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstance(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceRequest]: (DeleteAppInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstance(
          this.ops["DeleteAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceAdminRequest]: (DeleteAppInstanceAdminRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceAdmin(
          this.ops["DeleteAppInstanceAdmin"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceStreamingConfigurationsRequest]: (DeleteAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceStreamingConfigurations(
          this.ops["DeleteAppInstanceStreamingConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceUserRequest]: (DeleteAppInstanceUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceUser(
          this.ops["DeleteAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAttendee(partialParams: ToOptional<{
      [K in keyof DeleteAttendeeRequest]: (DeleteAttendeeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAttendee(
          this.ops["DeleteAttendee"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannel(partialParams: ToOptional<{
      [K in keyof DeleteChannelRequest]: (DeleteChannelRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannel(
          this.ops["DeleteChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelBan(partialParams: ToOptional<{
      [K in keyof DeleteChannelBanRequest]: (DeleteChannelBanRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelBan(
          this.ops["DeleteChannelBan"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelMembership(partialParams: ToOptional<{
      [K in keyof DeleteChannelMembershipRequest]: (DeleteChannelMembershipRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelMembership(
          this.ops["DeleteChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelMessage(partialParams: ToOptional<{
      [K in keyof DeleteChannelMessageRequest]: (DeleteChannelMessageRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelMessage(
          this.ops["DeleteChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelModerator(partialParams: ToOptional<{
      [K in keyof DeleteChannelModeratorRequest]: (DeleteChannelModeratorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelModerator(
          this.ops["DeleteChannelModerator"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteEventsConfigurationRequest]: (DeleteEventsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventsConfiguration(
          this.ops["DeleteEventsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof DeleteMediaCapturePipelineRequest]: (DeleteMediaCapturePipelineRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMediaCapturePipeline(
          this.ops["DeleteMediaCapturePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMeeting(partialParams: ToOptional<{
      [K in keyof DeleteMeetingRequest]: (DeleteMeetingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMeeting(
          this.ops["DeleteMeeting"].applicator.apply(partialParams)
        );
    }

    invokeDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof DeletePhoneNumberRequest]: (DeletePhoneNumberRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePhoneNumber(
          this.ops["DeletePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProxySession(partialParams: ToOptional<{
      [K in keyof DeleteProxySessionRequest]: (DeleteProxySessionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProxySession(
          this.ops["DeleteProxySession"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoom(partialParams: ToOptional<{
      [K in keyof DeleteRoomRequest]: (DeleteRoomRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoom(
          this.ops["DeleteRoom"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoomMembership(partialParams: ToOptional<{
      [K in keyof DeleteRoomMembershipRequest]: (DeleteRoomMembershipRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoomMembership(
          this.ops["DeleteRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSipMediaApplication(partialParams: ToOptional<{
      [K in keyof DeleteSipMediaApplicationRequest]: (DeleteSipMediaApplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSipMediaApplication(
          this.ops["DeleteSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSipRule(partialParams: ToOptional<{
      [K in keyof DeleteSipRuleRequest]: (DeleteSipRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSipRule(
          this.ops["DeleteSipRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnector(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorRequest]: (DeleteVoiceConnectorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnector(
          this.ops["DeleteVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorEmergencyCallingConfigurationRequest]: (DeleteVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(
          this.ops["DeleteVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorGroupRequest]: (DeleteVoiceConnectorGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorGroup(
          this.ops["DeleteVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorOriginationRequest]: (DeleteVoiceConnectorOriginationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorOrigination(
          this.ops["DeleteVoiceConnectorOrigination"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorProxyRequest]: (DeleteVoiceConnectorProxyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorProxy(
          this.ops["DeleteVoiceConnectorProxy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorStreamingConfigurationRequest]: (DeleteVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorStreamingConfiguration(
          this.ops["DeleteVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationRequest]: (DeleteVoiceConnectorTerminationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorTermination(
          this.ops["DeleteVoiceConnectorTermination"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationCredentialsRequest]: (DeleteVoiceConnectorTerminationCredentialsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorTerminationCredentials(
          this.ops["DeleteVoiceConnectorTerminationCredentials"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAppInstance(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceRequest]: (DescribeAppInstanceRequest)[K]
    }>): Request<DescribeAppInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstance(
          this.ops["DescribeAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceAdminRequest]: (DescribeAppInstanceAdminRequest)[K]
    }>): Request<DescribeAppInstanceAdminResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstanceAdmin(
          this.ops["DescribeAppInstanceAdmin"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceUserRequest]: (DescribeAppInstanceUserRequest)[K]
    }>): Request<DescribeAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstanceUser(
          this.ops["DescribeAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest]: (DescribeChannelRequest)[K]
    }>): Request<DescribeChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannel(
          this.ops["DescribeChannel"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelBan(partialParams: ToOptional<{
      [K in keyof DescribeChannelBanRequest]: (DescribeChannelBanRequest)[K]
    }>): Request<DescribeChannelBanResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelBan(
          this.ops["DescribeChannelBan"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelMembership(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipRequest]: (DescribeChannelMembershipRequest)[K]
    }>): Request<DescribeChannelMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelMembership(
          this.ops["DescribeChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelMembershipForAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipForAppInstanceUserRequest]: (DescribeChannelMembershipForAppInstanceUserRequest)[K]
    }>): Request<DescribeChannelMembershipForAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelMembershipForAppInstanceUser(
          this.ops["DescribeChannelMembershipForAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelModeratedByAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratedByAppInstanceUserRequest]: (DescribeChannelModeratedByAppInstanceUserRequest)[K]
    }>): Request<DescribeChannelModeratedByAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelModeratedByAppInstanceUser(
          this.ops["DescribeChannelModeratedByAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelModerator(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratorRequest]: (DescribeChannelModeratorRequest)[K]
    }>): Request<DescribeChannelModeratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelModerator(
          this.ops["DescribeChannelModerator"].applicator.apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumberFromUser(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumberFromUserRequest]: (DisassociatePhoneNumberFromUserRequest)[K]
    }>): Request<DisassociatePhoneNumberFromUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumberFromUser(
          this.ops["DisassociatePhoneNumberFromUser"].applicator.apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorRequest]: (DisassociatePhoneNumbersFromVoiceConnectorRequest)[K]
    }>): Request<DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnector(
          this.ops["DisassociatePhoneNumbersFromVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest]: (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest)[K]
    }>): Request<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(
          this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams: ToOptional<{
      [K in keyof DisassociateSigninDelegateGroupsFromAccountRequest]: (DisassociateSigninDelegateGroupsFromAccountRequest)[K]
    }>): Request<DisassociateSigninDelegateGroupsFromAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateSigninDelegateGroupsFromAccount(
          this.ops["DisassociateSigninDelegateGroupsFromAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetAccount(partialParams: ToOptional<{
      [K in keyof GetAccountRequest]: (GetAccountRequest)[K]
    }>): Request<GetAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccount(
          this.ops["GetAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetAccountSettings(partialParams: ToOptional<{
      [K in keyof GetAccountSettingsRequest]: (GetAccountSettingsRequest)[K]
    }>): Request<GetAccountSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccountSettings(
          this.ops["GetAccountSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetAppInstanceRetentionSettingsRequest]: (GetAppInstanceRetentionSettingsRequest)[K]
    }>): Request<GetAppInstanceRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAppInstanceRetentionSettings(
          this.ops["GetAppInstanceRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof GetAppInstanceStreamingConfigurationsRequest]: (GetAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<GetAppInstanceStreamingConfigurationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAppInstanceStreamingConfigurations(
          this.ops["GetAppInstanceStreamingConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeGetAttendee(partialParams: ToOptional<{
      [K in keyof GetAttendeeRequest]: (GetAttendeeRequest)[K]
    }>): Request<GetAttendeeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAttendee(
          this.ops["GetAttendee"].applicator.apply(partialParams)
        );
    }

    invokeGetBot(partialParams: ToOptional<{
      [K in keyof GetBotRequest]: (GetBotRequest)[K]
    }>): Request<GetBotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBot(
          this.ops["GetBot"].applicator.apply(partialParams)
        );
    }

    invokeGetChannelMessage(partialParams: ToOptional<{
      [K in keyof GetChannelMessageRequest]: (GetChannelMessageRequest)[K]
    }>): Request<GetChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChannelMessage(
          this.ops["GetChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeGetEventsConfiguration(partialParams: ToOptional<{
      [K in keyof GetEventsConfigurationRequest]: (GetEventsConfigurationRequest)[K]
    }>): Request<GetEventsConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventsConfiguration(
          this.ops["GetEventsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof GetMediaCapturePipelineRequest]: (GetMediaCapturePipelineRequest)[K]
    }>): Request<GetMediaCapturePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMediaCapturePipeline(
          this.ops["GetMediaCapturePipeline"].applicator.apply(partialParams)
        );
    }

    invokeGetMeeting(partialParams: ToOptional<{
      [K in keyof GetMeetingRequest]: (GetMeetingRequest)[K]
    }>): Request<GetMeetingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMeeting(
          this.ops["GetMeeting"].applicator.apply(partialParams)
        );
    }

    invokeGetPhoneNumber(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberRequest]: (GetPhoneNumberRequest)[K]
    }>): Request<GetPhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPhoneNumber(
          this.ops["GetPhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeGetPhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberOrderRequest]: (GetPhoneNumberOrderRequest)[K]
    }>): Request<GetPhoneNumberOrderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPhoneNumberOrder(
          this.ops["GetPhoneNumberOrder"].applicator.apply(partialParams)
        );
    }

    invokeGetProxySession(partialParams: ToOptional<{
      [K in keyof GetProxySessionRequest]: (GetProxySessionRequest)[K]
    }>): Request<GetProxySessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProxySession(
          this.ops["GetProxySession"].applicator.apply(partialParams)
        );
    }

    invokeGetRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetRetentionSettingsRequest]: (GetRetentionSettingsRequest)[K]
    }>): Request<GetRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRetentionSettings(
          this.ops["GetRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetRoom(partialParams: ToOptional<{
      [K in keyof GetRoomRequest]: (GetRoomRequest)[K]
    }>): Request<GetRoomResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRoom(
          this.ops["GetRoom"].applicator.apply(partialParams)
        );
    }

    invokeGetSipMediaApplication(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationRequest]: (GetSipMediaApplicationRequest)[K]
    }>): Request<GetSipMediaApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipMediaApplication(
          this.ops["GetSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeGetSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationLoggingConfigurationRequest]: (GetSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): Request<GetSipMediaApplicationLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipMediaApplicationLoggingConfiguration(
          this.ops["GetSipMediaApplicationLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetSipRule(partialParams: ToOptional<{
      [K in keyof GetSipRuleRequest]: (GetSipRuleRequest)[K]
    }>): Request<GetSipRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipRule(
          this.ops["GetSipRule"].applicator.apply(partialParams)
        );
    }

    invokeGetUser(partialParams: ToOptional<{
      [K in keyof GetUserRequest]: (GetUserRequest)[K]
    }>): Request<GetUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUser(
          this.ops["GetUser"].applicator.apply(partialParams)
        );
    }

    invokeGetUserSettings(partialParams: ToOptional<{
      [K in keyof GetUserSettingsRequest]: (GetUserSettingsRequest)[K]
    }>): Request<GetUserSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserSettings(
          this.ops["GetUserSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnector(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorRequest]: (GetVoiceConnectorRequest)[K]
    }>): Request<GetVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnector(
          this.ops["GetVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorEmergencyCallingConfigurationRequest]: (GetVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(
          this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorGroupRequest]: (GetVoiceConnectorGroupRequest)[K]
    }>): Request<GetVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorGroup(
          this.ops["GetVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorLoggingConfigurationRequest]: (GetVoiceConnectorLoggingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorLoggingConfiguration(
          this.ops["GetVoiceConnectorLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorOriginationRequest]: (GetVoiceConnectorOriginationRequest)[K]
    }>): Request<GetVoiceConnectorOriginationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorOrigination(
          this.ops["GetVoiceConnectorOrigination"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorProxyRequest]: (GetVoiceConnectorProxyRequest)[K]
    }>): Request<GetVoiceConnectorProxyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorProxy(
          this.ops["GetVoiceConnectorProxy"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorStreamingConfigurationRequest]: (GetVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorStreamingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorStreamingConfiguration(
          this.ops["GetVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationRequest]: (GetVoiceConnectorTerminationRequest)[K]
    }>): Request<GetVoiceConnectorTerminationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorTermination(
          this.ops["GetVoiceConnectorTermination"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTerminationHealth(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationHealthRequest]: (GetVoiceConnectorTerminationHealthRequest)[K]
    }>): Request<GetVoiceConnectorTerminationHealthResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorTerminationHealth(
          this.ops["GetVoiceConnectorTerminationHealth"].applicator.apply(partialParams)
        );
    }

    invokeInviteUsers(partialParams: ToOptional<{
      [K in keyof InviteUsersRequest]: (InviteUsersRequest)[K]
    }>): Request<InviteUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteUsers(
          this.ops["InviteUsers"].applicator.apply(partialParams)
        );
    }

    invokeListAppInstanceAdmins(partialParams: ToOptional<{
      [K in keyof ListAppInstanceAdminsRequest]: (ListAppInstanceAdminsRequest)[K]
    }>): Request<ListAppInstanceAdminsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAppInstanceAdmins(
          this.ops["ListAppInstanceAdmins"].applicator.apply(partialParams)
        );
    }

    invokeListAppInstanceUsers(partialParams: ToOptional<{
      [K in keyof ListAppInstanceUsersRequest]: (ListAppInstanceUsersRequest)[K]
    }>): Request<ListAppInstanceUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAppInstanceUsers(
          this.ops["ListAppInstanceUsers"].applicator.apply(partialParams)
        );
    }

    invokeListAttendeeTags(partialParams: ToOptional<{
      [K in keyof ListAttendeeTagsRequest]: (ListAttendeeTagsRequest)[K]
    }>): Request<ListAttendeeTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttendeeTags(
          this.ops["ListAttendeeTags"].applicator.apply(partialParams)
        );
    }

    invokeListAttendees(partialParams: ToOptional<{
      [K in keyof ListAttendeesRequest]: (ListAttendeesRequest)[K]
    }>): Request<ListAttendeesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttendees(
          this.ops["ListAttendees"].applicator.apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest]: (ListBotsRequest)[K]
    }>): Request<ListBotsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBots(
          this.ops["ListBots"].applicator.apply(partialParams)
        );
    }

    invokeListChannelBans(partialParams: ToOptional<{
      [K in keyof ListChannelBansRequest]: (ListChannelBansRequest)[K]
    }>): Request<ListChannelBansResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelBans(
          this.ops["ListChannelBans"].applicator.apply(partialParams)
        );
    }

    invokeListChannelMemberships(partialParams: ToOptional<{
      [K in keyof ListChannelMembershipsRequest]: (ListChannelMembershipsRequest)[K]
    }>): Request<ListChannelMembershipsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelMemberships(
          this.ops["ListChannelMemberships"].applicator.apply(partialParams)
        );
    }

    invokeListChannelMessages(partialParams: ToOptional<{
      [K in keyof ListChannelMessagesRequest]: (ListChannelMessagesRequest)[K]
    }>): Request<ListChannelMessagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelMessages(
          this.ops["ListChannelMessages"].applicator.apply(partialParams)
        );
    }

    invokeListChannelModerators(partialParams: ToOptional<{
      [K in keyof ListChannelModeratorsRequest]: (ListChannelModeratorsRequest)[K]
    }>): Request<ListChannelModeratorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelModerators(
          this.ops["ListChannelModerators"].applicator.apply(partialParams)
        );
    }

    invokeListChannels(partialParams: ToOptional<{
      [K in keyof ListChannelsRequest]: (ListChannelsRequest)[K]
    }>): Request<ListChannelsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannels(
          this.ops["ListChannels"].applicator.apply(partialParams)
        );
    }

    invokeListMeetingTags(partialParams: ToOptional<{
      [K in keyof ListMeetingTagsRequest]: (ListMeetingTagsRequest)[K]
    }>): Request<ListMeetingTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMeetingTags(
          this.ops["ListMeetingTags"].applicator.apply(partialParams)
        );
    }

    invokeListProxySessions(partialParams: ToOptional<{
      [K in keyof ListProxySessionsRequest]: (ListProxySessionsRequest)[K]
    }>): Request<ListProxySessionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProxySessions(
          this.ops["ListProxySessions"].applicator.apply(partialParams)
        );
    }

    invokeListRoomMemberships(partialParams: ToOptional<{
      [K in keyof ListRoomMembershipsRequest]: (ListRoomMembershipsRequest)[K]
    }>): Request<ListRoomMembershipsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoomMemberships(
          this.ops["ListRoomMemberships"].applicator.apply(partialParams)
        );
    }

    invokeListRooms(partialParams: ToOptional<{
      [K in keyof ListRoomsRequest]: (ListRoomsRequest)[K]
    }>): Request<ListRoomsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRooms(
          this.ops["ListRooms"].applicator.apply(partialParams)
        );
    }

    invokeListSupportedPhoneNumberCountries(partialParams: ToOptional<{
      [K in keyof ListSupportedPhoneNumberCountriesRequest]: (ListSupportedPhoneNumberCountriesRequest)[K]
    }>): Request<ListSupportedPhoneNumberCountriesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSupportedPhoneNumberCountries(
          this.ops["ListSupportedPhoneNumberCountries"].applicator.apply(partialParams)
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

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest]: (ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].applicator.apply(partialParams)
        );
    }

    invokeListVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorTerminationCredentialsRequest]: (ListVoiceConnectorTerminationCredentialsRequest)[K]
    }>): Request<ListVoiceConnectorTerminationCredentialsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVoiceConnectorTerminationCredentials(
          this.ops["ListVoiceConnectorTerminationCredentials"].applicator.apply(partialParams)
        );
    }

    invokeLogoutUser(partialParams: ToOptional<{
      [K in keyof LogoutUserRequest]: (LogoutUserRequest)[K]
    }>): Request<LogoutUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.logoutUser(
          this.ops["LogoutUser"].applicator.apply(partialParams)
        );
    }

    invokePutAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutAppInstanceRetentionSettingsRequest]: (PutAppInstanceRetentionSettingsRequest)[K]
    }>): Request<PutAppInstanceRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAppInstanceRetentionSettings(
          this.ops["PutAppInstanceRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokePutAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof PutAppInstanceStreamingConfigurationsRequest]: (PutAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<PutAppInstanceStreamingConfigurationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAppInstanceStreamingConfigurations(
          this.ops["PutAppInstanceStreamingConfigurations"].applicator.apply(partialParams)
        );
    }

    invokePutEventsConfiguration(partialParams: ToOptional<{
      [K in keyof PutEventsConfigurationRequest]: (PutEventsConfigurationRequest)[K]
    }>): Request<PutEventsConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEventsConfiguration(
          this.ops["PutEventsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutRetentionSettingsRequest]: (PutRetentionSettingsRequest)[K]
    }>): Request<PutRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRetentionSettings(
          this.ops["PutRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokePutSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutSipMediaApplicationLoggingConfigurationRequest]: (PutSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): Request<PutSipMediaApplicationLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSipMediaApplicationLoggingConfiguration(
          this.ops["PutSipMediaApplicationLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">]: (Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(
          this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">]: (Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorLoggingConfiguration(
          this.ops["PutVoiceConnectorLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">]: (Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorOriginationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorOrigination(
          this.ops["PutVoiceConnectorOrigination"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">]: (Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorProxyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorProxy(
          this.ops["PutVoiceConnectorProxy"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">]: (Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorStreamingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorStreamingConfiguration(
          this.ops["PutVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">]: (Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorTerminationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorTermination(
          this.ops["PutVoiceConnectorTermination"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof Omit<PutVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">]: (Omit<PutVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorTerminationCredentials(
          this.ops["PutVoiceConnectorTerminationCredentials"].applicator.apply(partialParams)
        );
    }

    invokeRedactChannelMessage(partialParams: ToOptional<{
      [K in keyof RedactChannelMessageRequest]: (RedactChannelMessageRequest)[K]
    }>): Request<RedactChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactChannelMessage(
          this.ops["RedactChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeRedactConversationMessage(partialParams: ToOptional<{
      [K in keyof RedactConversationMessageRequest]: (RedactConversationMessageRequest)[K]
    }>): Request<RedactConversationMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactConversationMessage(
          this.ops["RedactConversationMessage"].applicator.apply(partialParams)
        );
    }

    invokeRedactRoomMessage(partialParams: ToOptional<{
      [K in keyof RedactRoomMessageRequest]: (RedactRoomMessageRequest)[K]
    }>): Request<RedactRoomMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactRoomMessage(
          this.ops["RedactRoomMessage"].applicator.apply(partialParams)
        );
    }

    invokeRegenerateSecurityToken(partialParams: ToOptional<{
      [K in keyof RegenerateSecurityTokenRequest]: (RegenerateSecurityTokenRequest)[K]
    }>): Request<RegenerateSecurityTokenResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.regenerateSecurityToken(
          this.ops["RegenerateSecurityToken"].applicator.apply(partialParams)
        );
    }

    invokeResetPersonalPIN(partialParams: ToOptional<{
      [K in keyof ResetPersonalPINRequest]: (ResetPersonalPINRequest)[K]
    }>): Request<ResetPersonalPINResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetPersonalPIN(
          this.ops["ResetPersonalPIN"].applicator.apply(partialParams)
        );
    }

    invokeRestorePhoneNumber(partialParams: ToOptional<{
      [K in keyof RestorePhoneNumberRequest]: (RestorePhoneNumberRequest)[K]
    }>): Request<RestorePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restorePhoneNumber(
          this.ops["RestorePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeSendChannelMessage(partialParams: ToOptional<{
      [K in keyof SendChannelMessageRequest]: (SendChannelMessageRequest)[K]
    }>): Request<SendChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendChannelMessage(
          this.ops["SendChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeStartMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StartMeetingTranscriptionRequest]: (StartMeetingTranscriptionRequest)[K]
    }>): Request<StartMeetingTranscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMeetingTranscription(
          this.ops["StartMeetingTranscription"].applicator.apply(partialParams)
        );
    }

    invokeStopMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StopMeetingTranscriptionRequest]: (StopMeetingTranscriptionRequest)[K]
    }>): Request<StopMeetingTranscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMeetingTranscription(
          this.ops["StopMeetingTranscription"].applicator.apply(partialParams)
        );
    }

    invokeTagAttendee(partialParams: ToOptional<{
      [K in keyof TagAttendeeRequest]: (TagAttendeeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagAttendee(
          this.ops["TagAttendee"].applicator.apply(partialParams)
        );
    }

    invokeTagMeeting(partialParams: ToOptional<{
      [K in keyof TagMeetingRequest]: (TagMeetingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagMeeting(
          this.ops["TagMeeting"].applicator.apply(partialParams)
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

    invokeUntagAttendee(partialParams: ToOptional<{
      [K in keyof UntagAttendeeRequest]: (UntagAttendeeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagAttendee(
          this.ops["UntagAttendee"].applicator.apply(partialParams)
        );
    }

    invokeUntagMeeting(partialParams: ToOptional<{
      [K in keyof UntagMeetingRequest]: (UntagMeetingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagMeeting(
          this.ops["UntagMeeting"].applicator.apply(partialParams)
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

    invokeUpdateAccount(partialParams: ToOptional<{
      [K in keyof UpdateAccountRequest]: (UpdateAccountRequest)[K]
    }>): Request<UpdateAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccount(
          this.ops["UpdateAccount"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest]: (UpdateAccountSettingsRequest)[K]
    }>): Request<UpdateAccountSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccountSettings(
          this.ops["UpdateAccountSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAppInstance(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceRequest]: (UpdateAppInstanceRequest)[K]
    }>): Request<UpdateAppInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppInstance(
          this.ops["UpdateAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceUserRequest]: (UpdateAppInstanceUserRequest)[K]
    }>): Request<UpdateAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppInstanceUser(
          this.ops["UpdateAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBot(partialParams: ToOptional<{
      [K in keyof UpdateBotRequest]: (UpdateBotRequest)[K]
    }>): Request<UpdateBotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBot(
          this.ops["UpdateBot"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest]: (UpdateChannelRequest)[K]
    }>): Request<UpdateChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannel(
          this.ops["UpdateChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChannelMessage(partialParams: ToOptional<{
      [K in keyof UpdateChannelMessageRequest]: (UpdateChannelMessageRequest)[K]
    }>): Request<UpdateChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannelMessage(
          this.ops["UpdateChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChannelReadMarker(partialParams: ToOptional<{
      [K in keyof UpdateChannelReadMarkerRequest]: (UpdateChannelReadMarkerRequest)[K]
    }>): Request<UpdateChannelReadMarkerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannelReadMarker(
          this.ops["UpdateChannelReadMarker"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberRequest]: (UpdatePhoneNumberRequest)[K]
    }>): Request<UpdatePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePhoneNumber(
          this.ops["UpdatePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePhoneNumberSettings(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberSettingsRequest]: (UpdatePhoneNumberSettingsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePhoneNumberSettings(
          this.ops["UpdatePhoneNumberSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProxySession(partialParams: ToOptional<{
      [K in keyof Omit<UpdateProxySessionRequest, "VoiceConnectorId">]: (Omit<UpdateProxySessionRequest, "VoiceConnectorId">)[K]
    }>): Request<UpdateProxySessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProxySession(
          this.ops["UpdateProxySession"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoom(partialParams: ToOptional<{
      [K in keyof UpdateRoomRequest]: (UpdateRoomRequest)[K]
    }>): Request<UpdateRoomResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoom(
          this.ops["UpdateRoom"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoomMembership(partialParams: ToOptional<{
      [K in keyof UpdateRoomMembershipRequest]: (UpdateRoomMembershipRequest)[K]
    }>): Request<UpdateRoomMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoomMembership(
          this.ops["UpdateRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationRequest]: (UpdateSipMediaApplicationRequest)[K]
    }>): Request<UpdateSipMediaApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipMediaApplication(
          this.ops["UpdateSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationCallRequest]: (UpdateSipMediaApplicationCallRequest)[K]
    }>): Request<UpdateSipMediaApplicationCallResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipMediaApplicationCall(
          this.ops["UpdateSipMediaApplicationCall"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSipRule(partialParams: ToOptional<{
      [K in keyof UpdateSipRuleRequest]: (UpdateSipRuleRequest)[K]
    }>): Request<UpdateSipRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipRule(
          this.ops["UpdateSipRule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest]: (UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserSettings(partialParams: ToOptional<{
      [K in keyof UpdateUserSettingsRequest]: (UpdateUserSettingsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserSettings(
          this.ops["UpdateUserSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVoiceConnector(partialParams: ToOptional<{
      [K in keyof Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">]: (Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">)[K]
    }>): Request<UpdateVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceConnector(
          this.ops["UpdateVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorGroupRequest]: (UpdateVoiceConnectorGroupRequest)[K]
    }>): Request<UpdateVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceConnectorGroup(
          this.ops["UpdateVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }
}