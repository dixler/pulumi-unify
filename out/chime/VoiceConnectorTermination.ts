
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

export default class extends aws.chime.VoiceConnectorTermination {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.chime.VoiceConnectorTermination>) {
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
      [K in keyof AssociatePhoneNumberWithUserRequest & keyof AssociatePhoneNumberWithUserRequest]: (AssociatePhoneNumberWithUserRequest & AssociatePhoneNumberWithUserRequest)[K]
    }>): Request<AssociatePhoneNumberWithUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumberWithUser(
          this.ops["AssociatePhoneNumberWithUser"].applicator.apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorRequest & keyof AssociatePhoneNumbersWithVoiceConnectorRequest]: (AssociatePhoneNumbersWithVoiceConnectorRequest & AssociatePhoneNumbersWithVoiceConnectorRequest)[K]
    }>): Request<AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnector(
          this.ops["AssociatePhoneNumbersWithVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorGroupRequest & keyof AssociatePhoneNumbersWithVoiceConnectorGroupRequest]: (AssociatePhoneNumbersWithVoiceConnectorGroupRequest & AssociatePhoneNumbersWithVoiceConnectorGroupRequest)[K]
    }>): Request<AssociatePhoneNumbersWithVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(
          this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeAssociateSigninDelegateGroupsWithAccount(partialParams: ToOptional<{
      [K in keyof AssociateSigninDelegateGroupsWithAccountRequest & keyof AssociateSigninDelegateGroupsWithAccountRequest]: (AssociateSigninDelegateGroupsWithAccountRequest & AssociateSigninDelegateGroupsWithAccountRequest)[K]
    }>): Request<AssociateSigninDelegateGroupsWithAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateSigninDelegateGroupsWithAccount(
          this.ops["AssociateSigninDelegateGroupsWithAccount"].applicator.apply(partialParams)
        );
    }

    invokeBatchCreateAttendee(partialParams: ToOptional<{
      [K in keyof BatchCreateAttendeeRequest & keyof BatchCreateAttendeeRequest]: (BatchCreateAttendeeRequest & BatchCreateAttendeeRequest)[K]
    }>): Request<BatchCreateAttendeeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateAttendee(
          this.ops["BatchCreateAttendee"].applicator.apply(partialParams)
        );
    }

    invokeBatchCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateChannelMembershipRequest & keyof BatchCreateChannelMembershipRequest]: (BatchCreateChannelMembershipRequest & BatchCreateChannelMembershipRequest)[K]
    }>): Request<BatchCreateChannelMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateChannelMembership(
          this.ops["BatchCreateChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeBatchCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof BatchCreateRoomMembershipRequest & keyof BatchCreateRoomMembershipRequest]: (BatchCreateRoomMembershipRequest & BatchCreateRoomMembershipRequest)[K]
    }>): Request<BatchCreateRoomMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateRoomMembership(
          this.ops["BatchCreateRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchDeletePhoneNumberRequest & keyof BatchDeletePhoneNumberRequest]: (BatchDeletePhoneNumberRequest & BatchDeletePhoneNumberRequest)[K]
    }>): Request<BatchDeletePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeletePhoneNumber(
          this.ops["BatchDeletePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeBatchSuspendUser(partialParams: ToOptional<{
      [K in keyof BatchSuspendUserRequest & keyof BatchSuspendUserRequest]: (BatchSuspendUserRequest & BatchSuspendUserRequest)[K]
    }>): Request<BatchSuspendUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchSuspendUser(
          this.ops["BatchSuspendUser"].applicator.apply(partialParams)
        );
    }

    invokeBatchUnsuspendUser(partialParams: ToOptional<{
      [K in keyof BatchUnsuspendUserRequest & keyof BatchUnsuspendUserRequest]: (BatchUnsuspendUserRequest & BatchUnsuspendUserRequest)[K]
    }>): Request<BatchUnsuspendUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUnsuspendUser(
          this.ops["BatchUnsuspendUser"].applicator.apply(partialParams)
        );
    }

    invokeBatchUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof BatchUpdatePhoneNumberRequest & keyof BatchUpdatePhoneNumberRequest]: (BatchUpdatePhoneNumberRequest & BatchUpdatePhoneNumberRequest)[K]
    }>): Request<BatchUpdatePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdatePhoneNumber(
          this.ops["BatchUpdatePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeBatchUpdateUser(partialParams: ToOptional<{
      [K in keyof BatchUpdateUserRequest & keyof BatchUpdateUserRequest]: (BatchUpdateUserRequest & BatchUpdateUserRequest)[K]
    }>): Request<BatchUpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdateUser(
          this.ops["BatchUpdateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest & keyof CreateAccountRequest]: (CreateAccountRequest & CreateAccountRequest)[K]
    }>): Request<CreateAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccount(
          this.ops["CreateAccount"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppInstance(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceRequest & keyof CreateAppInstanceRequest]: (CreateAppInstanceRequest & CreateAppInstanceRequest)[K]
    }>): Request<CreateAppInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstance(
          this.ops["CreateAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceAdminRequest & keyof CreateAppInstanceAdminRequest]: (CreateAppInstanceAdminRequest & CreateAppInstanceAdminRequest)[K]
    }>): Request<CreateAppInstanceAdminResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstanceAdmin(
          this.ops["CreateAppInstanceAdmin"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceUserRequest & keyof CreateAppInstanceUserRequest]: (CreateAppInstanceUserRequest & CreateAppInstanceUserRequest)[K]
    }>): Request<CreateAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstanceUser(
          this.ops["CreateAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateAttendee(partialParams: ToOptional<{
      [K in keyof CreateAttendeeRequest & keyof CreateAttendeeRequest]: (CreateAttendeeRequest & CreateAttendeeRequest)[K]
    }>): Request<CreateAttendeeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAttendee(
          this.ops["CreateAttendee"].applicator.apply(partialParams)
        );
    }

    invokeCreateBot(partialParams: ToOptional<{
      [K in keyof CreateBotRequest & keyof CreateBotRequest]: (CreateBotRequest & CreateBotRequest)[K]
    }>): Request<CreateBotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBot(
          this.ops["CreateBot"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest & keyof CreateChannelRequest]: (CreateChannelRequest & CreateChannelRequest)[K]
    }>): Request<CreateChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannel(
          this.ops["CreateChannel"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannelBan(partialParams: ToOptional<{
      [K in keyof CreateChannelBanRequest & keyof CreateChannelBanRequest]: (CreateChannelBanRequest & CreateChannelBanRequest)[K]
    }>): Request<CreateChannelBanResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelBan(
          this.ops["CreateChannelBan"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannelMembership(partialParams: ToOptional<{
      [K in keyof CreateChannelMembershipRequest & keyof CreateChannelMembershipRequest]: (CreateChannelMembershipRequest & CreateChannelMembershipRequest)[K]
    }>): Request<CreateChannelMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelMembership(
          this.ops["CreateChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannelModerator(partialParams: ToOptional<{
      [K in keyof CreateChannelModeratorRequest & keyof CreateChannelModeratorRequest]: (CreateChannelModeratorRequest & CreateChannelModeratorRequest)[K]
    }>): Request<CreateChannelModeratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelModerator(
          this.ops["CreateChannelModerator"].applicator.apply(partialParams)
        );
    }

    invokeCreateMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof CreateMediaCapturePipelineRequest & keyof CreateMediaCapturePipelineRequest]: (CreateMediaCapturePipelineRequest & CreateMediaCapturePipelineRequest)[K]
    }>): Request<CreateMediaCapturePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMediaCapturePipeline(
          this.ops["CreateMediaCapturePipeline"].applicator.apply(partialParams)
        );
    }

    invokeCreateMeeting(partialParams: ToOptional<{
      [K in keyof CreateMeetingRequest & keyof CreateMeetingRequest]: (CreateMeetingRequest & CreateMeetingRequest)[K]
    }>): Request<CreateMeetingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeeting(
          this.ops["CreateMeeting"].applicator.apply(partialParams)
        );
    }

    invokeCreateMeetingDialOut(partialParams: ToOptional<{
      [K in keyof CreateMeetingDialOutRequest & keyof CreateMeetingDialOutRequest]: (CreateMeetingDialOutRequest & CreateMeetingDialOutRequest)[K]
    }>): Request<CreateMeetingDialOutResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeetingDialOut(
          this.ops["CreateMeetingDialOut"].applicator.apply(partialParams)
        );
    }

    invokeCreateMeetingWithAttendees(partialParams: ToOptional<{
      [K in keyof CreateMeetingWithAttendeesRequest & keyof CreateMeetingWithAttendeesRequest]: (CreateMeetingWithAttendeesRequest & CreateMeetingWithAttendeesRequest)[K]
    }>): Request<CreateMeetingWithAttendeesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeetingWithAttendees(
          this.ops["CreateMeetingWithAttendees"].applicator.apply(partialParams)
        );
    }

    invokeCreatePhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof CreatePhoneNumberOrderRequest & keyof CreatePhoneNumberOrderRequest]: (CreatePhoneNumberOrderRequest & CreatePhoneNumberOrderRequest)[K]
    }>): Request<CreatePhoneNumberOrderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPhoneNumberOrder(
          this.ops["CreatePhoneNumberOrder"].applicator.apply(partialParams)
        );
    }

    invokeCreateProxySession(partialParams: ToOptional<{
      [K in keyof CreateProxySessionRequest & keyof CreateProxySessionRequest]: (CreateProxySessionRequest & CreateProxySessionRequest)[K]
    }>): Request<CreateProxySessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProxySession(
          this.ops["CreateProxySession"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoom(partialParams: ToOptional<{
      [K in keyof CreateRoomRequest & keyof CreateRoomRequest]: (CreateRoomRequest & CreateRoomRequest)[K]
    }>): Request<CreateRoomResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoom(
          this.ops["CreateRoom"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoomMembership(partialParams: ToOptional<{
      [K in keyof CreateRoomMembershipRequest & keyof CreateRoomMembershipRequest]: (CreateRoomMembershipRequest & CreateRoomMembershipRequest)[K]
    }>): Request<CreateRoomMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoomMembership(
          this.ops["CreateRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeCreateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationRequest & keyof CreateSipMediaApplicationRequest]: (CreateSipMediaApplicationRequest & CreateSipMediaApplicationRequest)[K]
    }>): Request<CreateSipMediaApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipMediaApplication(
          this.ops["CreateSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationCallRequest & keyof CreateSipMediaApplicationCallRequest]: (CreateSipMediaApplicationCallRequest & CreateSipMediaApplicationCallRequest)[K]
    }>): Request<CreateSipMediaApplicationCallResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipMediaApplicationCall(
          this.ops["CreateSipMediaApplicationCall"].applicator.apply(partialParams)
        );
    }

    invokeCreateSipRule(partialParams: ToOptional<{
      [K in keyof CreateSipRuleRequest & keyof CreateSipRuleRequest]: (CreateSipRuleRequest & CreateSipRuleRequest)[K]
    }>): Request<CreateSipRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipRule(
          this.ops["CreateSipRule"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateVoiceConnector(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorRequest & keyof CreateVoiceConnectorRequest]: (CreateVoiceConnectorRequest & CreateVoiceConnectorRequest)[K]
    }>): Request<CreateVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceConnector(
          this.ops["CreateVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeCreateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorGroupRequest & keyof CreateVoiceConnectorGroupRequest]: (CreateVoiceConnectorGroupRequest & CreateVoiceConnectorGroupRequest)[K]
    }>): Request<CreateVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceConnectorGroup(
          this.ops["CreateVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccount(partialParams: ToOptional<{
      [K in keyof DeleteAccountRequest & keyof DeleteAccountRequest]: (DeleteAccountRequest & DeleteAccountRequest)[K]
    }>): Request<DeleteAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccount(
          this.ops["DeleteAccount"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstance(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceRequest & keyof DeleteAppInstanceRequest]: (DeleteAppInstanceRequest & DeleteAppInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstance(
          this.ops["DeleteAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceAdminRequest & keyof DeleteAppInstanceAdminRequest]: (DeleteAppInstanceAdminRequest & DeleteAppInstanceAdminRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceAdmin(
          this.ops["DeleteAppInstanceAdmin"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceStreamingConfigurationsRequest & keyof DeleteAppInstanceStreamingConfigurationsRequest]: (DeleteAppInstanceStreamingConfigurationsRequest & DeleteAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceStreamingConfigurations(
          this.ops["DeleteAppInstanceStreamingConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DeleteAppInstanceUserRequest & keyof DeleteAppInstanceUserRequest]: (DeleteAppInstanceUserRequest & DeleteAppInstanceUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceUser(
          this.ops["DeleteAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAttendee(partialParams: ToOptional<{
      [K in keyof DeleteAttendeeRequest & keyof DeleteAttendeeRequest]: (DeleteAttendeeRequest & DeleteAttendeeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAttendee(
          this.ops["DeleteAttendee"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannel(partialParams: ToOptional<{
      [K in keyof DeleteChannelRequest & keyof DeleteChannelRequest]: (DeleteChannelRequest & DeleteChannelRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannel(
          this.ops["DeleteChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelBan(partialParams: ToOptional<{
      [K in keyof DeleteChannelBanRequest & keyof DeleteChannelBanRequest]: (DeleteChannelBanRequest & DeleteChannelBanRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelBan(
          this.ops["DeleteChannelBan"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelMembership(partialParams: ToOptional<{
      [K in keyof DeleteChannelMembershipRequest & keyof DeleteChannelMembershipRequest]: (DeleteChannelMembershipRequest & DeleteChannelMembershipRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelMembership(
          this.ops["DeleteChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelMessage(partialParams: ToOptional<{
      [K in keyof DeleteChannelMessageRequest & keyof DeleteChannelMessageRequest]: (DeleteChannelMessageRequest & DeleteChannelMessageRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelMessage(
          this.ops["DeleteChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannelModerator(partialParams: ToOptional<{
      [K in keyof DeleteChannelModeratorRequest & keyof DeleteChannelModeratorRequest]: (DeleteChannelModeratorRequest & DeleteChannelModeratorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelModerator(
          this.ops["DeleteChannelModerator"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteEventsConfigurationRequest & keyof DeleteEventsConfigurationRequest]: (DeleteEventsConfigurationRequest & DeleteEventsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventsConfiguration(
          this.ops["DeleteEventsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof DeleteMediaCapturePipelineRequest & keyof DeleteMediaCapturePipelineRequest]: (DeleteMediaCapturePipelineRequest & DeleteMediaCapturePipelineRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMediaCapturePipeline(
          this.ops["DeleteMediaCapturePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMeeting(partialParams: ToOptional<{
      [K in keyof DeleteMeetingRequest & keyof DeleteMeetingRequest]: (DeleteMeetingRequest & DeleteMeetingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMeeting(
          this.ops["DeleteMeeting"].applicator.apply(partialParams)
        );
    }

    invokeDeletePhoneNumber(partialParams: ToOptional<{
      [K in keyof DeletePhoneNumberRequest & keyof DeletePhoneNumberRequest]: (DeletePhoneNumberRequest & DeletePhoneNumberRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePhoneNumber(
          this.ops["DeletePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProxySession(partialParams: ToOptional<{
      [K in keyof DeleteProxySessionRequest & keyof DeleteProxySessionRequest]: (DeleteProxySessionRequest & DeleteProxySessionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProxySession(
          this.ops["DeleteProxySession"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoom(partialParams: ToOptional<{
      [K in keyof DeleteRoomRequest & keyof DeleteRoomRequest]: (DeleteRoomRequest & DeleteRoomRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoom(
          this.ops["DeleteRoom"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoomMembership(partialParams: ToOptional<{
      [K in keyof DeleteRoomMembershipRequest & keyof DeleteRoomMembershipRequest]: (DeleteRoomMembershipRequest & DeleteRoomMembershipRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoomMembership(
          this.ops["DeleteRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSipMediaApplication(partialParams: ToOptional<{
      [K in keyof DeleteSipMediaApplicationRequest & keyof DeleteSipMediaApplicationRequest]: (DeleteSipMediaApplicationRequest & DeleteSipMediaApplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSipMediaApplication(
          this.ops["DeleteSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSipRule(partialParams: ToOptional<{
      [K in keyof DeleteSipRuleRequest & keyof DeleteSipRuleRequest]: (DeleteSipRuleRequest & DeleteSipRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSipRule(
          this.ops["DeleteSipRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnector(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorRequest & keyof DeleteVoiceConnectorRequest]: (DeleteVoiceConnectorRequest & DeleteVoiceConnectorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnector(
          this.ops["DeleteVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorEmergencyCallingConfigurationRequest & keyof DeleteVoiceConnectorEmergencyCallingConfigurationRequest]: (DeleteVoiceConnectorEmergencyCallingConfigurationRequest & DeleteVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(
          this.ops["DeleteVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorGroupRequest & keyof DeleteVoiceConnectorGroupRequest]: (DeleteVoiceConnectorGroupRequest & DeleteVoiceConnectorGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorGroup(
          this.ops["DeleteVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorOriginationRequest & keyof DeleteVoiceConnectorOriginationRequest]: (DeleteVoiceConnectorOriginationRequest & DeleteVoiceConnectorOriginationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorOrigination(
          this.ops["DeleteVoiceConnectorOrigination"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorProxyRequest & keyof DeleteVoiceConnectorProxyRequest]: (DeleteVoiceConnectorProxyRequest & DeleteVoiceConnectorProxyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorProxy(
          this.ops["DeleteVoiceConnectorProxy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorStreamingConfigurationRequest & keyof DeleteVoiceConnectorStreamingConfigurationRequest]: (DeleteVoiceConnectorStreamingConfigurationRequest & DeleteVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorStreamingConfiguration(
          this.ops["DeleteVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationRequest & keyof DeleteVoiceConnectorTerminationRequest]: (DeleteVoiceConnectorTerminationRequest & DeleteVoiceConnectorTerminationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorTermination(
          this.ops["DeleteVoiceConnectorTermination"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof DeleteVoiceConnectorTerminationCredentialsRequest & keyof DeleteVoiceConnectorTerminationCredentialsRequest]: (DeleteVoiceConnectorTerminationCredentialsRequest & DeleteVoiceConnectorTerminationCredentialsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorTerminationCredentials(
          this.ops["DeleteVoiceConnectorTerminationCredentials"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAppInstance(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceRequest & keyof DescribeAppInstanceRequest]: (DescribeAppInstanceRequest & DescribeAppInstanceRequest)[K]
    }>): Request<DescribeAppInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstance(
          this.ops["DescribeAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAppInstanceAdmin(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceAdminRequest & keyof DescribeAppInstanceAdminRequest]: (DescribeAppInstanceAdminRequest & DescribeAppInstanceAdminRequest)[K]
    }>): Request<DescribeAppInstanceAdminResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstanceAdmin(
          this.ops["DescribeAppInstanceAdmin"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeAppInstanceUserRequest & keyof DescribeAppInstanceUserRequest]: (DescribeAppInstanceUserRequest & DescribeAppInstanceUserRequest)[K]
    }>): Request<DescribeAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstanceUser(
          this.ops["DescribeAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest & keyof DescribeChannelRequest]: (DescribeChannelRequest & DescribeChannelRequest)[K]
    }>): Request<DescribeChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannel(
          this.ops["DescribeChannel"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelBan(partialParams: ToOptional<{
      [K in keyof DescribeChannelBanRequest & keyof DescribeChannelBanRequest]: (DescribeChannelBanRequest & DescribeChannelBanRequest)[K]
    }>): Request<DescribeChannelBanResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelBan(
          this.ops["DescribeChannelBan"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelMembership(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipRequest & keyof DescribeChannelMembershipRequest]: (DescribeChannelMembershipRequest & DescribeChannelMembershipRequest)[K]
    }>): Request<DescribeChannelMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelMembership(
          this.ops["DescribeChannelMembership"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelMembershipForAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelMembershipForAppInstanceUserRequest & keyof DescribeChannelMembershipForAppInstanceUserRequest]: (DescribeChannelMembershipForAppInstanceUserRequest & DescribeChannelMembershipForAppInstanceUserRequest)[K]
    }>): Request<DescribeChannelMembershipForAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelMembershipForAppInstanceUser(
          this.ops["DescribeChannelMembershipForAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelModeratedByAppInstanceUser(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratedByAppInstanceUserRequest & keyof DescribeChannelModeratedByAppInstanceUserRequest]: (DescribeChannelModeratedByAppInstanceUserRequest & DescribeChannelModeratedByAppInstanceUserRequest)[K]
    }>): Request<DescribeChannelModeratedByAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelModeratedByAppInstanceUser(
          this.ops["DescribeChannelModeratedByAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannelModerator(partialParams: ToOptional<{
      [K in keyof DescribeChannelModeratorRequest & keyof DescribeChannelModeratorRequest]: (DescribeChannelModeratorRequest & DescribeChannelModeratorRequest)[K]
    }>): Request<DescribeChannelModeratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelModerator(
          this.ops["DescribeChannelModerator"].applicator.apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumberFromUser(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumberFromUserRequest & keyof DisassociatePhoneNumberFromUserRequest]: (DisassociatePhoneNumberFromUserRequest & DisassociatePhoneNumberFromUserRequest)[K]
    }>): Request<DisassociatePhoneNumberFromUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumberFromUser(
          this.ops["DisassociatePhoneNumberFromUser"].applicator.apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorRequest & keyof DisassociatePhoneNumbersFromVoiceConnectorRequest]: (DisassociatePhoneNumbersFromVoiceConnectorRequest & DisassociatePhoneNumbersFromVoiceConnectorRequest)[K]
    }>): Request<DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnector(
          this.ops["DisassociatePhoneNumbersFromVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest & keyof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest]: (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest & DisassociatePhoneNumbersFromVoiceConnectorGroupRequest)[K]
    }>): Request<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(
          this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams: ToOptional<{
      [K in keyof DisassociateSigninDelegateGroupsFromAccountRequest & keyof DisassociateSigninDelegateGroupsFromAccountRequest]: (DisassociateSigninDelegateGroupsFromAccountRequest & DisassociateSigninDelegateGroupsFromAccountRequest)[K]
    }>): Request<DisassociateSigninDelegateGroupsFromAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateSigninDelegateGroupsFromAccount(
          this.ops["DisassociateSigninDelegateGroupsFromAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetAccount(partialParams: ToOptional<{
      [K in keyof GetAccountRequest & keyof GetAccountRequest]: (GetAccountRequest & GetAccountRequest)[K]
    }>): Request<GetAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccount(
          this.ops["GetAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetAccountSettings(partialParams: ToOptional<{
      [K in keyof GetAccountSettingsRequest & keyof GetAccountSettingsRequest]: (GetAccountSettingsRequest & GetAccountSettingsRequest)[K]
    }>): Request<GetAccountSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccountSettings(
          this.ops["GetAccountSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetAppInstanceRetentionSettingsRequest & keyof GetAppInstanceRetentionSettingsRequest]: (GetAppInstanceRetentionSettingsRequest & GetAppInstanceRetentionSettingsRequest)[K]
    }>): Request<GetAppInstanceRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAppInstanceRetentionSettings(
          this.ops["GetAppInstanceRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof GetAppInstanceStreamingConfigurationsRequest & keyof GetAppInstanceStreamingConfigurationsRequest]: (GetAppInstanceStreamingConfigurationsRequest & GetAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<GetAppInstanceStreamingConfigurationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAppInstanceStreamingConfigurations(
          this.ops["GetAppInstanceStreamingConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeGetAttendee(partialParams: ToOptional<{
      [K in keyof GetAttendeeRequest & keyof GetAttendeeRequest]: (GetAttendeeRequest & GetAttendeeRequest)[K]
    }>): Request<GetAttendeeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAttendee(
          this.ops["GetAttendee"].applicator.apply(partialParams)
        );
    }

    invokeGetBot(partialParams: ToOptional<{
      [K in keyof GetBotRequest & keyof GetBotRequest]: (GetBotRequest & GetBotRequest)[K]
    }>): Request<GetBotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBot(
          this.ops["GetBot"].applicator.apply(partialParams)
        );
    }

    invokeGetChannelMessage(partialParams: ToOptional<{
      [K in keyof GetChannelMessageRequest & keyof GetChannelMessageRequest]: (GetChannelMessageRequest & GetChannelMessageRequest)[K]
    }>): Request<GetChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChannelMessage(
          this.ops["GetChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeGetEventsConfiguration(partialParams: ToOptional<{
      [K in keyof GetEventsConfigurationRequest & keyof GetEventsConfigurationRequest]: (GetEventsConfigurationRequest & GetEventsConfigurationRequest)[K]
    }>): Request<GetEventsConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventsConfiguration(
          this.ops["GetEventsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetMediaCapturePipeline(partialParams: ToOptional<{
      [K in keyof GetMediaCapturePipelineRequest & keyof GetMediaCapturePipelineRequest]: (GetMediaCapturePipelineRequest & GetMediaCapturePipelineRequest)[K]
    }>): Request<GetMediaCapturePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMediaCapturePipeline(
          this.ops["GetMediaCapturePipeline"].applicator.apply(partialParams)
        );
    }

    invokeGetMeeting(partialParams: ToOptional<{
      [K in keyof GetMeetingRequest & keyof GetMeetingRequest]: (GetMeetingRequest & GetMeetingRequest)[K]
    }>): Request<GetMeetingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMeeting(
          this.ops["GetMeeting"].applicator.apply(partialParams)
        );
    }

    invokeGetPhoneNumber(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberRequest & keyof GetPhoneNumberRequest]: (GetPhoneNumberRequest & GetPhoneNumberRequest)[K]
    }>): Request<GetPhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPhoneNumber(
          this.ops["GetPhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeGetPhoneNumberOrder(partialParams: ToOptional<{
      [K in keyof GetPhoneNumberOrderRequest & keyof GetPhoneNumberOrderRequest]: (GetPhoneNumberOrderRequest & GetPhoneNumberOrderRequest)[K]
    }>): Request<GetPhoneNumberOrderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPhoneNumberOrder(
          this.ops["GetPhoneNumberOrder"].applicator.apply(partialParams)
        );
    }

    invokeGetProxySession(partialParams: ToOptional<{
      [K in keyof GetProxySessionRequest & keyof GetProxySessionRequest]: (GetProxySessionRequest & GetProxySessionRequest)[K]
    }>): Request<GetProxySessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProxySession(
          this.ops["GetProxySession"].applicator.apply(partialParams)
        );
    }

    invokeGetRetentionSettings(partialParams: ToOptional<{
      [K in keyof GetRetentionSettingsRequest & keyof GetRetentionSettingsRequest]: (GetRetentionSettingsRequest & GetRetentionSettingsRequest)[K]
    }>): Request<GetRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRetentionSettings(
          this.ops["GetRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetRoom(partialParams: ToOptional<{
      [K in keyof GetRoomRequest & keyof GetRoomRequest]: (GetRoomRequest & GetRoomRequest)[K]
    }>): Request<GetRoomResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRoom(
          this.ops["GetRoom"].applicator.apply(partialParams)
        );
    }

    invokeGetSipMediaApplication(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationRequest & keyof GetSipMediaApplicationRequest]: (GetSipMediaApplicationRequest & GetSipMediaApplicationRequest)[K]
    }>): Request<GetSipMediaApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipMediaApplication(
          this.ops["GetSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeGetSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetSipMediaApplicationLoggingConfigurationRequest & keyof GetSipMediaApplicationLoggingConfigurationRequest]: (GetSipMediaApplicationLoggingConfigurationRequest & GetSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): Request<GetSipMediaApplicationLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipMediaApplicationLoggingConfiguration(
          this.ops["GetSipMediaApplicationLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetSipRule(partialParams: ToOptional<{
      [K in keyof GetSipRuleRequest & keyof GetSipRuleRequest]: (GetSipRuleRequest & GetSipRuleRequest)[K]
    }>): Request<GetSipRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipRule(
          this.ops["GetSipRule"].applicator.apply(partialParams)
        );
    }

    invokeGetUser(partialParams: ToOptional<{
      [K in keyof GetUserRequest & keyof GetUserRequest]: (GetUserRequest & GetUserRequest)[K]
    }>): Request<GetUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUser(
          this.ops["GetUser"].applicator.apply(partialParams)
        );
    }

    invokeGetUserSettings(partialParams: ToOptional<{
      [K in keyof GetUserSettingsRequest & keyof GetUserSettingsRequest]: (GetUserSettingsRequest & GetUserSettingsRequest)[K]
    }>): Request<GetUserSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserSettings(
          this.ops["GetUserSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnector(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorRequest & keyof GetVoiceConnectorRequest]: (GetVoiceConnectorRequest & GetVoiceConnectorRequest)[K]
    }>): Request<GetVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnector(
          this.ops["GetVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorEmergencyCallingConfigurationRequest & keyof GetVoiceConnectorEmergencyCallingConfigurationRequest]: (GetVoiceConnectorEmergencyCallingConfigurationRequest & GetVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(
          this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorGroupRequest & keyof GetVoiceConnectorGroupRequest]: (GetVoiceConnectorGroupRequest & GetVoiceConnectorGroupRequest)[K]
    }>): Request<GetVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorGroup(
          this.ops["GetVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorLoggingConfigurationRequest & keyof GetVoiceConnectorLoggingConfigurationRequest]: (GetVoiceConnectorLoggingConfigurationRequest & GetVoiceConnectorLoggingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorLoggingConfiguration(
          this.ops["GetVoiceConnectorLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorOriginationRequest & keyof GetVoiceConnectorOriginationRequest]: (GetVoiceConnectorOriginationRequest & GetVoiceConnectorOriginationRequest)[K]
    }>): Request<GetVoiceConnectorOriginationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorOrigination(
          this.ops["GetVoiceConnectorOrigination"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorProxyRequest & keyof GetVoiceConnectorProxyRequest]: (GetVoiceConnectorProxyRequest & GetVoiceConnectorProxyRequest)[K]
    }>): Request<GetVoiceConnectorProxyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorProxy(
          this.ops["GetVoiceConnectorProxy"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorStreamingConfigurationRequest & keyof GetVoiceConnectorStreamingConfigurationRequest]: (GetVoiceConnectorStreamingConfigurationRequest & GetVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorStreamingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorStreamingConfiguration(
          this.ops["GetVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationRequest & keyof GetVoiceConnectorTerminationRequest]: (GetVoiceConnectorTerminationRequest & GetVoiceConnectorTerminationRequest)[K]
    }>): Request<GetVoiceConnectorTerminationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorTermination(
          this.ops["GetVoiceConnectorTermination"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTerminationHealth(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationHealthRequest & keyof GetVoiceConnectorTerminationHealthRequest]: (GetVoiceConnectorTerminationHealthRequest & GetVoiceConnectorTerminationHealthRequest)[K]
    }>): Request<GetVoiceConnectorTerminationHealthResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorTerminationHealth(
          this.ops["GetVoiceConnectorTerminationHealth"].applicator.apply(partialParams)
        );
    }

    invokeInviteUsers(partialParams: ToOptional<{
      [K in keyof InviteUsersRequest & keyof InviteUsersRequest]: (InviteUsersRequest & InviteUsersRequest)[K]
    }>): Request<InviteUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteUsers(
          this.ops["InviteUsers"].applicator.apply(partialParams)
        );
    }

    invokeListAppInstanceAdmins(partialParams: ToOptional<{
      [K in keyof ListAppInstanceAdminsRequest & keyof ListAppInstanceAdminsRequest]: (ListAppInstanceAdminsRequest & ListAppInstanceAdminsRequest)[K]
    }>): Request<ListAppInstanceAdminsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAppInstanceAdmins(
          this.ops["ListAppInstanceAdmins"].applicator.apply(partialParams)
        );
    }

    invokeListAppInstanceUsers(partialParams: ToOptional<{
      [K in keyof ListAppInstanceUsersRequest & keyof ListAppInstanceUsersRequest]: (ListAppInstanceUsersRequest & ListAppInstanceUsersRequest)[K]
    }>): Request<ListAppInstanceUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAppInstanceUsers(
          this.ops["ListAppInstanceUsers"].applicator.apply(partialParams)
        );
    }

    invokeListAttendeeTags(partialParams: ToOptional<{
      [K in keyof ListAttendeeTagsRequest & keyof ListAttendeeTagsRequest]: (ListAttendeeTagsRequest & ListAttendeeTagsRequest)[K]
    }>): Request<ListAttendeeTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttendeeTags(
          this.ops["ListAttendeeTags"].applicator.apply(partialParams)
        );
    }

    invokeListAttendees(partialParams: ToOptional<{
      [K in keyof ListAttendeesRequest & keyof ListAttendeesRequest]: (ListAttendeesRequest & ListAttendeesRequest)[K]
    }>): Request<ListAttendeesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttendees(
          this.ops["ListAttendees"].applicator.apply(partialParams)
        );
    }

    invokeListBots(partialParams: ToOptional<{
      [K in keyof ListBotsRequest & keyof ListBotsRequest]: (ListBotsRequest & ListBotsRequest)[K]
    }>): Request<ListBotsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBots(
          this.ops["ListBots"].applicator.apply(partialParams)
        );
    }

    invokeListChannelBans(partialParams: ToOptional<{
      [K in keyof ListChannelBansRequest & keyof ListChannelBansRequest]: (ListChannelBansRequest & ListChannelBansRequest)[K]
    }>): Request<ListChannelBansResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelBans(
          this.ops["ListChannelBans"].applicator.apply(partialParams)
        );
    }

    invokeListChannelMemberships(partialParams: ToOptional<{
      [K in keyof ListChannelMembershipsRequest & keyof ListChannelMembershipsRequest]: (ListChannelMembershipsRequest & ListChannelMembershipsRequest)[K]
    }>): Request<ListChannelMembershipsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelMemberships(
          this.ops["ListChannelMemberships"].applicator.apply(partialParams)
        );
    }

    invokeListChannelMessages(partialParams: ToOptional<{
      [K in keyof ListChannelMessagesRequest & keyof ListChannelMessagesRequest]: (ListChannelMessagesRequest & ListChannelMessagesRequest)[K]
    }>): Request<ListChannelMessagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelMessages(
          this.ops["ListChannelMessages"].applicator.apply(partialParams)
        );
    }

    invokeListChannelModerators(partialParams: ToOptional<{
      [K in keyof ListChannelModeratorsRequest & keyof ListChannelModeratorsRequest]: (ListChannelModeratorsRequest & ListChannelModeratorsRequest)[K]
    }>): Request<ListChannelModeratorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelModerators(
          this.ops["ListChannelModerators"].applicator.apply(partialParams)
        );
    }

    invokeListChannels(partialParams: ToOptional<{
      [K in keyof ListChannelsRequest & keyof ListChannelsRequest]: (ListChannelsRequest & ListChannelsRequest)[K]
    }>): Request<ListChannelsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannels(
          this.ops["ListChannels"].applicator.apply(partialParams)
        );
    }

    invokeListMeetingTags(partialParams: ToOptional<{
      [K in keyof ListMeetingTagsRequest & keyof ListMeetingTagsRequest]: (ListMeetingTagsRequest & ListMeetingTagsRequest)[K]
    }>): Request<ListMeetingTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMeetingTags(
          this.ops["ListMeetingTags"].applicator.apply(partialParams)
        );
    }

    invokeListProxySessions(partialParams: ToOptional<{
      [K in keyof ListProxySessionsRequest & keyof ListProxySessionsRequest]: (ListProxySessionsRequest & ListProxySessionsRequest)[K]
    }>): Request<ListProxySessionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProxySessions(
          this.ops["ListProxySessions"].applicator.apply(partialParams)
        );
    }

    invokeListRoomMemberships(partialParams: ToOptional<{
      [K in keyof ListRoomMembershipsRequest & keyof ListRoomMembershipsRequest]: (ListRoomMembershipsRequest & ListRoomMembershipsRequest)[K]
    }>): Request<ListRoomMembershipsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoomMemberships(
          this.ops["ListRoomMemberships"].applicator.apply(partialParams)
        );
    }

    invokeListRooms(partialParams: ToOptional<{
      [K in keyof ListRoomsRequest & keyof ListRoomsRequest]: (ListRoomsRequest & ListRoomsRequest)[K]
    }>): Request<ListRoomsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRooms(
          this.ops["ListRooms"].applicator.apply(partialParams)
        );
    }

    invokeListSupportedPhoneNumberCountries(partialParams: ToOptional<{
      [K in keyof ListSupportedPhoneNumberCountriesRequest & keyof ListSupportedPhoneNumberCountriesRequest]: (ListSupportedPhoneNumberCountriesRequest & ListSupportedPhoneNumberCountriesRequest)[K]
    }>): Request<ListSupportedPhoneNumberCountriesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSupportedPhoneNumberCountries(
          this.ops["ListSupportedPhoneNumberCountries"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].applicator.apply(partialParams)
        );
    }

    invokeListVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorTerminationCredentialsRequest & keyof ListVoiceConnectorTerminationCredentialsRequest]: (ListVoiceConnectorTerminationCredentialsRequest & ListVoiceConnectorTerminationCredentialsRequest)[K]
    }>): Request<ListVoiceConnectorTerminationCredentialsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVoiceConnectorTerminationCredentials(
          this.ops["ListVoiceConnectorTerminationCredentials"].applicator.apply(partialParams)
        );
    }

    invokeLogoutUser(partialParams: ToOptional<{
      [K in keyof LogoutUserRequest & keyof LogoutUserRequest]: (LogoutUserRequest & LogoutUserRequest)[K]
    }>): Request<LogoutUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.logoutUser(
          this.ops["LogoutUser"].applicator.apply(partialParams)
        );
    }

    invokePutAppInstanceRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutAppInstanceRetentionSettingsRequest & keyof PutAppInstanceRetentionSettingsRequest]: (PutAppInstanceRetentionSettingsRequest & PutAppInstanceRetentionSettingsRequest)[K]
    }>): Request<PutAppInstanceRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAppInstanceRetentionSettings(
          this.ops["PutAppInstanceRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokePutAppInstanceStreamingConfigurations(partialParams: ToOptional<{
      [K in keyof PutAppInstanceStreamingConfigurationsRequest & keyof PutAppInstanceStreamingConfigurationsRequest]: (PutAppInstanceStreamingConfigurationsRequest & PutAppInstanceStreamingConfigurationsRequest)[K]
    }>): Request<PutAppInstanceStreamingConfigurationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAppInstanceStreamingConfigurations(
          this.ops["PutAppInstanceStreamingConfigurations"].applicator.apply(partialParams)
        );
    }

    invokePutEventsConfiguration(partialParams: ToOptional<{
      [K in keyof PutEventsConfigurationRequest & keyof PutEventsConfigurationRequest]: (PutEventsConfigurationRequest & PutEventsConfigurationRequest)[K]
    }>): Request<PutEventsConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEventsConfiguration(
          this.ops["PutEventsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutRetentionSettings(partialParams: ToOptional<{
      [K in keyof PutRetentionSettingsRequest & keyof PutRetentionSettingsRequest]: (PutRetentionSettingsRequest & PutRetentionSettingsRequest)[K]
    }>): Request<PutRetentionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRetentionSettings(
          this.ops["PutRetentionSettings"].applicator.apply(partialParams)
        );
    }

    invokePutSipMediaApplicationLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutSipMediaApplicationLoggingConfigurationRequest & keyof PutSipMediaApplicationLoggingConfigurationRequest]: (PutSipMediaApplicationLoggingConfigurationRequest & PutSipMediaApplicationLoggingConfigurationRequest)[K]
    }>): Request<PutSipMediaApplicationLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSipMediaApplicationLoggingConfiguration(
          this.ops["PutSipMediaApplicationLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorEmergencyCallingConfigurationRequest & keyof Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorEmergencyCallingConfigurationRequest & Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(
          this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorLoggingConfigurationRequest & keyof Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorLoggingConfigurationRequest & Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorLoggingConfiguration(
          this.ops["PutVoiceConnectorLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorOriginationRequest & keyof Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">]: (PutVoiceConnectorOriginationRequest & Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorOriginationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorOrigination(
          this.ops["PutVoiceConnectorOrigination"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorProxyRequest & keyof Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">]: (PutVoiceConnectorProxyRequest & Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorProxyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorProxy(
          this.ops["PutVoiceConnectorProxy"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorStreamingConfigurationRequest & keyof Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorStreamingConfigurationRequest & Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorStreamingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorStreamingConfiguration(
          this.ops["PutVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationRequest & keyof Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">]: (PutVoiceConnectorTerminationRequest & Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">)[K]
    }>): Request<PutVoiceConnectorTerminationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorTermination(
          this.ops["PutVoiceConnectorTermination"].applicator.apply(partialParams)
        );
    }

    invokePutVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationCredentialsRequest & keyof Omit<PutVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">]: (PutVoiceConnectorTerminationCredentialsRequest & Omit<PutVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorTerminationCredentials(
          this.ops["PutVoiceConnectorTerminationCredentials"].applicator.apply(partialParams)
        );
    }

    invokeRedactChannelMessage(partialParams: ToOptional<{
      [K in keyof RedactChannelMessageRequest & keyof RedactChannelMessageRequest]: (RedactChannelMessageRequest & RedactChannelMessageRequest)[K]
    }>): Request<RedactChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactChannelMessage(
          this.ops["RedactChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeRedactConversationMessage(partialParams: ToOptional<{
      [K in keyof RedactConversationMessageRequest & keyof RedactConversationMessageRequest]: (RedactConversationMessageRequest & RedactConversationMessageRequest)[K]
    }>): Request<RedactConversationMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactConversationMessage(
          this.ops["RedactConversationMessage"].applicator.apply(partialParams)
        );
    }

    invokeRedactRoomMessage(partialParams: ToOptional<{
      [K in keyof RedactRoomMessageRequest & keyof RedactRoomMessageRequest]: (RedactRoomMessageRequest & RedactRoomMessageRequest)[K]
    }>): Request<RedactRoomMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactRoomMessage(
          this.ops["RedactRoomMessage"].applicator.apply(partialParams)
        );
    }

    invokeRegenerateSecurityToken(partialParams: ToOptional<{
      [K in keyof RegenerateSecurityTokenRequest & keyof RegenerateSecurityTokenRequest]: (RegenerateSecurityTokenRequest & RegenerateSecurityTokenRequest)[K]
    }>): Request<RegenerateSecurityTokenResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.regenerateSecurityToken(
          this.ops["RegenerateSecurityToken"].applicator.apply(partialParams)
        );
    }

    invokeResetPersonalPIN(partialParams: ToOptional<{
      [K in keyof ResetPersonalPINRequest & keyof ResetPersonalPINRequest]: (ResetPersonalPINRequest & ResetPersonalPINRequest)[K]
    }>): Request<ResetPersonalPINResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetPersonalPIN(
          this.ops["ResetPersonalPIN"].applicator.apply(partialParams)
        );
    }

    invokeRestorePhoneNumber(partialParams: ToOptional<{
      [K in keyof RestorePhoneNumberRequest & keyof RestorePhoneNumberRequest]: (RestorePhoneNumberRequest & RestorePhoneNumberRequest)[K]
    }>): Request<RestorePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restorePhoneNumber(
          this.ops["RestorePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeSendChannelMessage(partialParams: ToOptional<{
      [K in keyof SendChannelMessageRequest & keyof SendChannelMessageRequest]: (SendChannelMessageRequest & SendChannelMessageRequest)[K]
    }>): Request<SendChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendChannelMessage(
          this.ops["SendChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeStartMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StartMeetingTranscriptionRequest & keyof StartMeetingTranscriptionRequest]: (StartMeetingTranscriptionRequest & StartMeetingTranscriptionRequest)[K]
    }>): Request<StartMeetingTranscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMeetingTranscription(
          this.ops["StartMeetingTranscription"].applicator.apply(partialParams)
        );
    }

    invokeStopMeetingTranscription(partialParams: ToOptional<{
      [K in keyof StopMeetingTranscriptionRequest & keyof StopMeetingTranscriptionRequest]: (StopMeetingTranscriptionRequest & StopMeetingTranscriptionRequest)[K]
    }>): Request<StopMeetingTranscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMeetingTranscription(
          this.ops["StopMeetingTranscription"].applicator.apply(partialParams)
        );
    }

    invokeTagAttendee(partialParams: ToOptional<{
      [K in keyof TagAttendeeRequest & keyof TagAttendeeRequest]: (TagAttendeeRequest & TagAttendeeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagAttendee(
          this.ops["TagAttendee"].applicator.apply(partialParams)
        );
    }

    invokeTagMeeting(partialParams: ToOptional<{
      [K in keyof TagMeetingRequest & keyof TagMeetingRequest]: (TagMeetingRequest & TagMeetingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagMeeting(
          this.ops["TagMeeting"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagAttendee(partialParams: ToOptional<{
      [K in keyof UntagAttendeeRequest & keyof UntagAttendeeRequest]: (UntagAttendeeRequest & UntagAttendeeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagAttendee(
          this.ops["UntagAttendee"].applicator.apply(partialParams)
        );
    }

    invokeUntagMeeting(partialParams: ToOptional<{
      [K in keyof UntagMeetingRequest & keyof UntagMeetingRequest]: (UntagMeetingRequest & UntagMeetingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagMeeting(
          this.ops["UntagMeeting"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccount(partialParams: ToOptional<{
      [K in keyof UpdateAccountRequest & keyof UpdateAccountRequest]: (UpdateAccountRequest & UpdateAccountRequest)[K]
    }>): Request<UpdateAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccount(
          this.ops["UpdateAccount"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest]: (UpdateAccountSettingsRequest & UpdateAccountSettingsRequest)[K]
    }>): Request<UpdateAccountSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccountSettings(
          this.ops["UpdateAccountSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAppInstance(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceRequest & keyof UpdateAppInstanceRequest]: (UpdateAppInstanceRequest & UpdateAppInstanceRequest)[K]
    }>): Request<UpdateAppInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppInstance(
          this.ops["UpdateAppInstance"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceUserRequest & keyof UpdateAppInstanceUserRequest]: (UpdateAppInstanceUserRequest & UpdateAppInstanceUserRequest)[K]
    }>): Request<UpdateAppInstanceUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppInstanceUser(
          this.ops["UpdateAppInstanceUser"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBot(partialParams: ToOptional<{
      [K in keyof UpdateBotRequest & keyof UpdateBotRequest]: (UpdateBotRequest & UpdateBotRequest)[K]
    }>): Request<UpdateBotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBot(
          this.ops["UpdateBot"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest & keyof UpdateChannelRequest]: (UpdateChannelRequest & UpdateChannelRequest)[K]
    }>): Request<UpdateChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannel(
          this.ops["UpdateChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChannelMessage(partialParams: ToOptional<{
      [K in keyof UpdateChannelMessageRequest & keyof UpdateChannelMessageRequest]: (UpdateChannelMessageRequest & UpdateChannelMessageRequest)[K]
    }>): Request<UpdateChannelMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannelMessage(
          this.ops["UpdateChannelMessage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChannelReadMarker(partialParams: ToOptional<{
      [K in keyof UpdateChannelReadMarkerRequest & keyof UpdateChannelReadMarkerRequest]: (UpdateChannelReadMarkerRequest & UpdateChannelReadMarkerRequest)[K]
    }>): Request<UpdateChannelReadMarkerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannelReadMarker(
          this.ops["UpdateChannelReadMarker"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePhoneNumber(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberRequest & keyof UpdatePhoneNumberRequest]: (UpdatePhoneNumberRequest & UpdatePhoneNumberRequest)[K]
    }>): Request<UpdatePhoneNumberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePhoneNumber(
          this.ops["UpdatePhoneNumber"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePhoneNumberSettings(partialParams: ToOptional<{
      [K in keyof UpdatePhoneNumberSettingsRequest & keyof UpdatePhoneNumberSettingsRequest]: (UpdatePhoneNumberSettingsRequest & UpdatePhoneNumberSettingsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePhoneNumberSettings(
          this.ops["UpdatePhoneNumberSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProxySession(partialParams: ToOptional<{
      [K in keyof UpdateProxySessionRequest & keyof Omit<UpdateProxySessionRequest, "VoiceConnectorId">]: (UpdateProxySessionRequest & Omit<UpdateProxySessionRequest, "VoiceConnectorId">)[K]
    }>): Request<UpdateProxySessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProxySession(
          this.ops["UpdateProxySession"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoom(partialParams: ToOptional<{
      [K in keyof UpdateRoomRequest & keyof UpdateRoomRequest]: (UpdateRoomRequest & UpdateRoomRequest)[K]
    }>): Request<UpdateRoomResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoom(
          this.ops["UpdateRoom"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoomMembership(partialParams: ToOptional<{
      [K in keyof UpdateRoomMembershipRequest & keyof UpdateRoomMembershipRequest]: (UpdateRoomMembershipRequest & UpdateRoomMembershipRequest)[K]
    }>): Request<UpdateRoomMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoomMembership(
          this.ops["UpdateRoomMembership"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationRequest & keyof UpdateSipMediaApplicationRequest]: (UpdateSipMediaApplicationRequest & UpdateSipMediaApplicationRequest)[K]
    }>): Request<UpdateSipMediaApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipMediaApplication(
          this.ops["UpdateSipMediaApplication"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSipMediaApplicationCall(partialParams: ToOptional<{
      [K in keyof UpdateSipMediaApplicationCallRequest & keyof UpdateSipMediaApplicationCallRequest]: (UpdateSipMediaApplicationCallRequest & UpdateSipMediaApplicationCallRequest)[K]
    }>): Request<UpdateSipMediaApplicationCallResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipMediaApplicationCall(
          this.ops["UpdateSipMediaApplicationCall"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSipRule(partialParams: ToOptional<{
      [K in keyof UpdateSipRuleRequest & keyof UpdateSipRuleRequest]: (UpdateSipRuleRequest & UpdateSipRuleRequest)[K]
    }>): Request<UpdateSipRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipRule(
          this.ops["UpdateSipRule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserSettings(partialParams: ToOptional<{
      [K in keyof UpdateUserSettingsRequest & keyof UpdateUserSettingsRequest]: (UpdateUserSettingsRequest & UpdateUserSettingsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserSettings(
          this.ops["UpdateUserSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVoiceConnector(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorRequest & keyof Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">]: (UpdateVoiceConnectorRequest & Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">)[K]
    }>): Request<UpdateVoiceConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceConnector(
          this.ops["UpdateVoiceConnector"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorGroupRequest & keyof UpdateVoiceConnectorGroupRequest]: (UpdateVoiceConnectorGroupRequest & UpdateVoiceConnectorGroupRequest)[K]
    }>): Request<UpdateVoiceConnectorGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceConnectorGroup(
          this.ops["UpdateVoiceConnectorGroup"].applicator.apply(partialParams)
        );
    }
}