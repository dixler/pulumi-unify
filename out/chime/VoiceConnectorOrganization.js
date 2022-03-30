"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.chime.VoiceConnectorOrganization {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Chime();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/chime-2018-05-01.normal.json"), this.client);
    }
    invokeAssociatePhoneNumberWithUser(partialParams) {
        return this.client.associatePhoneNumberWithUser(this.ops["AssociatePhoneNumberWithUser"].apply(partialParams));
    }
    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams) {
        return this.client.associatePhoneNumbersWithVoiceConnector(this.ops["AssociatePhoneNumbersWithVoiceConnector"].apply(partialParams));
    }
    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams) {
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].apply(partialParams));
    }
    invokeAssociateSigninDelegateGroupsWithAccount(partialParams) {
        return this.client.associateSigninDelegateGroupsWithAccount(this.ops["AssociateSigninDelegateGroupsWithAccount"].apply(partialParams));
    }
    invokeBatchCreateAttendee(partialParams) {
        return this.client.batchCreateAttendee(this.ops["BatchCreateAttendee"].apply(partialParams));
    }
    invokeBatchCreateChannelMembership(partialParams) {
        return this.client.batchCreateChannelMembership(this.ops["BatchCreateChannelMembership"].apply(partialParams));
    }
    invokeBatchCreateRoomMembership(partialParams) {
        return this.client.batchCreateRoomMembership(this.ops["BatchCreateRoomMembership"].apply(partialParams));
    }
    invokeBatchDeletePhoneNumber(partialParams) {
        return this.client.batchDeletePhoneNumber(this.ops["BatchDeletePhoneNumber"].apply(partialParams));
    }
    invokeBatchSuspendUser(partialParams) {
        return this.client.batchSuspendUser(this.ops["BatchSuspendUser"].apply(partialParams));
    }
    invokeBatchUnsuspendUser(partialParams) {
        return this.client.batchUnsuspendUser(this.ops["BatchUnsuspendUser"].apply(partialParams));
    }
    invokeBatchUpdatePhoneNumber(partialParams) {
        return this.client.batchUpdatePhoneNumber(this.ops["BatchUpdatePhoneNumber"].apply(partialParams));
    }
    invokeBatchUpdateUser(partialParams) {
        return this.client.batchUpdateUser(this.ops["BatchUpdateUser"].apply(partialParams));
    }
    invokeCreateAccount(partialParams) {
        return this.client.createAccount(this.ops["CreateAccount"].apply(partialParams));
    }
    invokeCreateAppInstance(partialParams) {
        return this.client.createAppInstance(this.ops["CreateAppInstance"].apply(partialParams));
    }
    invokeCreateAppInstanceAdmin(partialParams) {
        return this.client.createAppInstanceAdmin(this.ops["CreateAppInstanceAdmin"].apply(partialParams));
    }
    invokeCreateAppInstanceUser(partialParams) {
        return this.client.createAppInstanceUser(this.ops["CreateAppInstanceUser"].apply(partialParams));
    }
    invokeCreateAttendee(partialParams) {
        return this.client.createAttendee(this.ops["CreateAttendee"].apply(partialParams));
    }
    invokeCreateBot(partialParams) {
        return this.client.createBot(this.ops["CreateBot"].apply(partialParams));
    }
    invokeCreateChannel(partialParams) {
        return this.client.createChannel(this.ops["CreateChannel"].apply(partialParams));
    }
    invokeCreateChannelBan(partialParams) {
        return this.client.createChannelBan(this.ops["CreateChannelBan"].apply(partialParams));
    }
    invokeCreateChannelMembership(partialParams) {
        return this.client.createChannelMembership(this.ops["CreateChannelMembership"].apply(partialParams));
    }
    invokeCreateChannelModerator(partialParams) {
        return this.client.createChannelModerator(this.ops["CreateChannelModerator"].apply(partialParams));
    }
    invokeCreateMediaCapturePipeline(partialParams) {
        return this.client.createMediaCapturePipeline(this.ops["CreateMediaCapturePipeline"].apply(partialParams));
    }
    invokeCreateMeeting(partialParams) {
        return this.client.createMeeting(this.ops["CreateMeeting"].apply(partialParams));
    }
    invokeCreateMeetingDialOut(partialParams) {
        return this.client.createMeetingDialOut(this.ops["CreateMeetingDialOut"].apply(partialParams));
    }
    invokeCreateMeetingWithAttendees(partialParams) {
        return this.client.createMeetingWithAttendees(this.ops["CreateMeetingWithAttendees"].apply(partialParams));
    }
    invokeCreatePhoneNumberOrder(partialParams) {
        return this.client.createPhoneNumberOrder(this.ops["CreatePhoneNumberOrder"].apply(partialParams));
    }
    invokeCreateProxySession(partialParams) {
        return this.client.createProxySession(this.ops["CreateProxySession"].apply(partialParams));
    }
    invokeCreateRoom(partialParams) {
        return this.client.createRoom(this.ops["CreateRoom"].apply(partialParams));
    }
    invokeCreateRoomMembership(partialParams) {
        return this.client.createRoomMembership(this.ops["CreateRoomMembership"].apply(partialParams));
    }
    invokeCreateSipMediaApplication(partialParams) {
        return this.client.createSipMediaApplication(this.ops["CreateSipMediaApplication"].apply(partialParams));
    }
    invokeCreateSipMediaApplicationCall(partialParams) {
        return this.client.createSipMediaApplicationCall(this.ops["CreateSipMediaApplicationCall"].apply(partialParams));
    }
    invokeCreateSipRule(partialParams) {
        return this.client.createSipRule(this.ops["CreateSipRule"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateVoiceConnector(partialParams) {
        return this.client.createVoiceConnector(this.ops["CreateVoiceConnector"].apply(partialParams));
    }
    invokeCreateVoiceConnectorGroup(partialParams) {
        return this.client.createVoiceConnectorGroup(this.ops["CreateVoiceConnectorGroup"].apply(partialParams));
    }
    invokeDeleteAccount(partialParams) {
        return this.client.deleteAccount(this.ops["DeleteAccount"].apply(partialParams));
    }
    invokeDeleteAppInstance(partialParams) {
        return this.client.deleteAppInstance(this.ops["DeleteAppInstance"].apply(partialParams));
    }
    invokeDeleteAppInstanceAdmin(partialParams) {
        return this.client.deleteAppInstanceAdmin(this.ops["DeleteAppInstanceAdmin"].apply(partialParams));
    }
    invokeDeleteAppInstanceStreamingConfigurations(partialParams) {
        return this.client.deleteAppInstanceStreamingConfigurations(this.ops["DeleteAppInstanceStreamingConfigurations"].apply(partialParams));
    }
    invokeDeleteAppInstanceUser(partialParams) {
        return this.client.deleteAppInstanceUser(this.ops["DeleteAppInstanceUser"].apply(partialParams));
    }
    invokeDeleteAttendee(partialParams) {
        return this.client.deleteAttendee(this.ops["DeleteAttendee"].apply(partialParams));
    }
    invokeDeleteChannel(partialParams) {
        return this.client.deleteChannel(this.ops["DeleteChannel"].apply(partialParams));
    }
    invokeDeleteChannelBan(partialParams) {
        return this.client.deleteChannelBan(this.ops["DeleteChannelBan"].apply(partialParams));
    }
    invokeDeleteChannelMembership(partialParams) {
        return this.client.deleteChannelMembership(this.ops["DeleteChannelMembership"].apply(partialParams));
    }
    invokeDeleteChannelMessage(partialParams) {
        return this.client.deleteChannelMessage(this.ops["DeleteChannelMessage"].apply(partialParams));
    }
    invokeDeleteChannelModerator(partialParams) {
        return this.client.deleteChannelModerator(this.ops["DeleteChannelModerator"].apply(partialParams));
    }
    invokeDeleteEventsConfiguration(partialParams) {
        return this.client.deleteEventsConfiguration(this.ops["DeleteEventsConfiguration"].apply(partialParams));
    }
    invokeDeleteMediaCapturePipeline(partialParams) {
        return this.client.deleteMediaCapturePipeline(this.ops["DeleteMediaCapturePipeline"].apply(partialParams));
    }
    invokeDeleteMeeting(partialParams) {
        return this.client.deleteMeeting(this.ops["DeleteMeeting"].apply(partialParams));
    }
    invokeDeletePhoneNumber(partialParams) {
        return this.client.deletePhoneNumber(this.ops["DeletePhoneNumber"].apply(partialParams));
    }
    invokeDeleteProxySession(partialParams) {
        return this.client.deleteProxySession(this.ops["DeleteProxySession"].apply(partialParams));
    }
    invokeDeleteRoom(partialParams) {
        return this.client.deleteRoom(this.ops["DeleteRoom"].apply(partialParams));
    }
    invokeDeleteRoomMembership(partialParams) {
        return this.client.deleteRoomMembership(this.ops["DeleteRoomMembership"].apply(partialParams));
    }
    invokeDeleteSipMediaApplication(partialParams) {
        return this.client.deleteSipMediaApplication(this.ops["DeleteSipMediaApplication"].apply(partialParams));
    }
    invokeDeleteSipRule(partialParams) {
        return this.client.deleteSipRule(this.ops["DeleteSipRule"].apply(partialParams));
    }
    invokeDeleteVoiceConnector(partialParams) {
        return this.client.deleteVoiceConnector(this.ops["DeleteVoiceConnector"].apply(partialParams));
    }
    invokeDeleteVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(this.ops["DeleteVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams));
    }
    invokeDeleteVoiceConnectorGroup(partialParams) {
        return this.client.deleteVoiceConnectorGroup(this.ops["DeleteVoiceConnectorGroup"].apply(partialParams));
    }
    invokeDeleteVoiceConnectorOrigination(partialParams) {
        return this.client.deleteVoiceConnectorOrigination(this.ops["DeleteVoiceConnectorOrigination"].apply(partialParams));
    }
    invokeDeleteVoiceConnectorProxy(partialParams) {
        return this.client.deleteVoiceConnectorProxy(this.ops["DeleteVoiceConnectorProxy"].apply(partialParams));
    }
    invokeDeleteVoiceConnectorStreamingConfiguration(partialParams) {
        return this.client.deleteVoiceConnectorStreamingConfiguration(this.ops["DeleteVoiceConnectorStreamingConfiguration"].apply(partialParams));
    }
    invokeDeleteVoiceConnectorTermination(partialParams) {
        return this.client.deleteVoiceConnectorTermination(this.ops["DeleteVoiceConnectorTermination"].apply(partialParams));
    }
    invokeDeleteVoiceConnectorTerminationCredentials(partialParams) {
        return this.client.deleteVoiceConnectorTerminationCredentials(this.ops["DeleteVoiceConnectorTerminationCredentials"].apply(partialParams));
    }
    invokeDescribeAppInstance(partialParams) {
        return this.client.describeAppInstance(this.ops["DescribeAppInstance"].apply(partialParams));
    }
    invokeDescribeAppInstanceAdmin(partialParams) {
        return this.client.describeAppInstanceAdmin(this.ops["DescribeAppInstanceAdmin"].apply(partialParams));
    }
    invokeDescribeAppInstanceUser(partialParams) {
        return this.client.describeAppInstanceUser(this.ops["DescribeAppInstanceUser"].apply(partialParams));
    }
    invokeDescribeChannel(partialParams) {
        return this.client.describeChannel(this.ops["DescribeChannel"].apply(partialParams));
    }
    invokeDescribeChannelBan(partialParams) {
        return this.client.describeChannelBan(this.ops["DescribeChannelBan"].apply(partialParams));
    }
    invokeDescribeChannelMembership(partialParams) {
        return this.client.describeChannelMembership(this.ops["DescribeChannelMembership"].apply(partialParams));
    }
    invokeDescribeChannelMembershipForAppInstanceUser(partialParams) {
        return this.client.describeChannelMembershipForAppInstanceUser(this.ops["DescribeChannelMembershipForAppInstanceUser"].apply(partialParams));
    }
    invokeDescribeChannelModeratedByAppInstanceUser(partialParams) {
        return this.client.describeChannelModeratedByAppInstanceUser(this.ops["DescribeChannelModeratedByAppInstanceUser"].apply(partialParams));
    }
    invokeDescribeChannelModerator(partialParams) {
        return this.client.describeChannelModerator(this.ops["DescribeChannelModerator"].apply(partialParams));
    }
    invokeDisassociatePhoneNumberFromUser(partialParams) {
        return this.client.disassociatePhoneNumberFromUser(this.ops["DisassociatePhoneNumberFromUser"].apply(partialParams));
    }
    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams) {
        return this.client.disassociatePhoneNumbersFromVoiceConnector(this.ops["DisassociatePhoneNumbersFromVoiceConnector"].apply(partialParams));
    }
    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams) {
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].apply(partialParams));
    }
    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams) {
        return this.client.disassociateSigninDelegateGroupsFromAccount(this.ops["DisassociateSigninDelegateGroupsFromAccount"].apply(partialParams));
    }
    invokeGetAccount(partialParams) {
        return this.client.getAccount(this.ops["GetAccount"].apply(partialParams));
    }
    invokeGetAccountSettings(partialParams) {
        return this.client.getAccountSettings(this.ops["GetAccountSettings"].apply(partialParams));
    }
    invokeGetAppInstanceRetentionSettings(partialParams) {
        return this.client.getAppInstanceRetentionSettings(this.ops["GetAppInstanceRetentionSettings"].apply(partialParams));
    }
    invokeGetAppInstanceStreamingConfigurations(partialParams) {
        return this.client.getAppInstanceStreamingConfigurations(this.ops["GetAppInstanceStreamingConfigurations"].apply(partialParams));
    }
    invokeGetAttendee(partialParams) {
        return this.client.getAttendee(this.ops["GetAttendee"].apply(partialParams));
    }
    invokeGetBot(partialParams) {
        return this.client.getBot(this.ops["GetBot"].apply(partialParams));
    }
    invokeGetChannelMessage(partialParams) {
        return this.client.getChannelMessage(this.ops["GetChannelMessage"].apply(partialParams));
    }
    invokeGetEventsConfiguration(partialParams) {
        return this.client.getEventsConfiguration(this.ops["GetEventsConfiguration"].apply(partialParams));
    }
    invokeGetMediaCapturePipeline(partialParams) {
        return this.client.getMediaCapturePipeline(this.ops["GetMediaCapturePipeline"].apply(partialParams));
    }
    invokeGetMeeting(partialParams) {
        return this.client.getMeeting(this.ops["GetMeeting"].apply(partialParams));
    }
    invokeGetPhoneNumber(partialParams) {
        return this.client.getPhoneNumber(this.ops["GetPhoneNumber"].apply(partialParams));
    }
    invokeGetPhoneNumberOrder(partialParams) {
        return this.client.getPhoneNumberOrder(this.ops["GetPhoneNumberOrder"].apply(partialParams));
    }
    invokeGetProxySession(partialParams) {
        return this.client.getProxySession(this.ops["GetProxySession"].apply(partialParams));
    }
    invokeGetRetentionSettings(partialParams) {
        return this.client.getRetentionSettings(this.ops["GetRetentionSettings"].apply(partialParams));
    }
    invokeGetRoom(partialParams) {
        return this.client.getRoom(this.ops["GetRoom"].apply(partialParams));
    }
    invokeGetSipMediaApplication(partialParams) {
        return this.client.getSipMediaApplication(this.ops["GetSipMediaApplication"].apply(partialParams));
    }
    invokeGetSipMediaApplicationLoggingConfiguration(partialParams) {
        return this.client.getSipMediaApplicationLoggingConfiguration(this.ops["GetSipMediaApplicationLoggingConfiguration"].apply(partialParams));
    }
    invokeGetSipRule(partialParams) {
        return this.client.getSipRule(this.ops["GetSipRule"].apply(partialParams));
    }
    invokeGetUser(partialParams) {
        return this.client.getUser(this.ops["GetUser"].apply(partialParams));
    }
    invokeGetUserSettings(partialParams) {
        return this.client.getUserSettings(this.ops["GetUserSettings"].apply(partialParams));
    }
    invokeGetVoiceConnector(partialParams) {
        return this.client.getVoiceConnector(this.ops["GetVoiceConnector"].apply(partialParams));
    }
    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorGroup(partialParams) {
        return this.client.getVoiceConnectorGroup(this.ops["GetVoiceConnectorGroup"].apply(partialParams));
    }
    invokeGetVoiceConnectorLoggingConfiguration(partialParams) {
        return this.client.getVoiceConnectorLoggingConfiguration(this.ops["GetVoiceConnectorLoggingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorOrigination(partialParams) {
        return this.client.getVoiceConnectorOrigination(this.ops["GetVoiceConnectorOrigination"].apply(partialParams));
    }
    invokeGetVoiceConnectorProxy(partialParams) {
        return this.client.getVoiceConnectorProxy(this.ops["GetVoiceConnectorProxy"].apply(partialParams));
    }
    invokeGetVoiceConnectorStreamingConfiguration(partialParams) {
        return this.client.getVoiceConnectorStreamingConfiguration(this.ops["GetVoiceConnectorStreamingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorTermination(partialParams) {
        return this.client.getVoiceConnectorTermination(this.ops["GetVoiceConnectorTermination"].apply(partialParams));
    }
    invokeGetVoiceConnectorTerminationHealth(partialParams) {
        return this.client.getVoiceConnectorTerminationHealth(this.ops["GetVoiceConnectorTerminationHealth"].apply(partialParams));
    }
    invokeInviteUsers(partialParams) {
        return this.client.inviteUsers(this.ops["InviteUsers"].apply(partialParams));
    }
    invokeListAppInstanceAdmins(partialParams) {
        return this.client.listAppInstanceAdmins(this.ops["ListAppInstanceAdmins"].apply(partialParams));
    }
    invokeListAppInstanceUsers(partialParams) {
        return this.client.listAppInstanceUsers(this.ops["ListAppInstanceUsers"].apply(partialParams));
    }
    invokeListAttendeeTags(partialParams) {
        return this.client.listAttendeeTags(this.ops["ListAttendeeTags"].apply(partialParams));
    }
    invokeListAttendees(partialParams) {
        return this.client.listAttendees(this.ops["ListAttendees"].apply(partialParams));
    }
    invokeListBots(partialParams) {
        return this.client.listBots(this.ops["ListBots"].apply(partialParams));
    }
    invokeListChannelBans(partialParams) {
        return this.client.listChannelBans(this.ops["ListChannelBans"].apply(partialParams));
    }
    invokeListChannelMemberships(partialParams) {
        return this.client.listChannelMemberships(this.ops["ListChannelMemberships"].apply(partialParams));
    }
    invokeListChannelMessages(partialParams) {
        return this.client.listChannelMessages(this.ops["ListChannelMessages"].apply(partialParams));
    }
    invokeListChannelModerators(partialParams) {
        return this.client.listChannelModerators(this.ops["ListChannelModerators"].apply(partialParams));
    }
    invokeListChannels(partialParams) {
        return this.client.listChannels(this.ops["ListChannels"].apply(partialParams));
    }
    invokeListMeetingTags(partialParams) {
        return this.client.listMeetingTags(this.ops["ListMeetingTags"].apply(partialParams));
    }
    invokeListProxySessions(partialParams) {
        return this.client.listProxySessions(this.ops["ListProxySessions"].apply(partialParams));
    }
    invokeListRoomMemberships(partialParams) {
        return this.client.listRoomMemberships(this.ops["ListRoomMemberships"].apply(partialParams));
    }
    invokeListRooms(partialParams) {
        return this.client.listRooms(this.ops["ListRooms"].apply(partialParams));
    }
    invokeListSupportedPhoneNumberCountries(partialParams) {
        return this.client.listSupportedPhoneNumberCountries(this.ops["ListSupportedPhoneNumberCountries"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeListVoiceConnectorTerminationCredentials(partialParams) {
        return this.client.listVoiceConnectorTerminationCredentials(this.ops["ListVoiceConnectorTerminationCredentials"].apply(partialParams));
    }
    invokeLogoutUser(partialParams) {
        return this.client.logoutUser(this.ops["LogoutUser"].apply(partialParams));
    }
    invokePutAppInstanceRetentionSettings(partialParams) {
        return this.client.putAppInstanceRetentionSettings(this.ops["PutAppInstanceRetentionSettings"].apply(partialParams));
    }
    invokePutAppInstanceStreamingConfigurations(partialParams) {
        return this.client.putAppInstanceStreamingConfigurations(this.ops["PutAppInstanceStreamingConfigurations"].apply(partialParams));
    }
    invokePutEventsConfiguration(partialParams) {
        return this.client.putEventsConfiguration(this.ops["PutEventsConfiguration"].apply(partialParams));
    }
    invokePutRetentionSettings(partialParams) {
        return this.client.putRetentionSettings(this.ops["PutRetentionSettings"].apply(partialParams));
    }
    invokePutSipMediaApplicationLoggingConfiguration(partialParams) {
        return this.client.putSipMediaApplicationLoggingConfiguration(this.ops["PutSipMediaApplicationLoggingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorLoggingConfiguration(partialParams) {
        return this.client.putVoiceConnectorLoggingConfiguration(this.ops["PutVoiceConnectorLoggingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorOrigination(partialParams) {
        return this.client.putVoiceConnectorOrigination(this.ops["PutVoiceConnectorOrigination"].apply(partialParams));
    }
    invokePutVoiceConnectorProxy(partialParams) {
        return this.client.putVoiceConnectorProxy(this.ops["PutVoiceConnectorProxy"].apply(partialParams));
    }
    invokePutVoiceConnectorStreamingConfiguration(partialParams) {
        return this.client.putVoiceConnectorStreamingConfiguration(this.ops["PutVoiceConnectorStreamingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorTermination(partialParams) {
        return this.client.putVoiceConnectorTermination(this.ops["PutVoiceConnectorTermination"].apply(partialParams));
    }
    invokePutVoiceConnectorTerminationCredentials(partialParams) {
        return this.client.putVoiceConnectorTerminationCredentials(this.ops["PutVoiceConnectorTerminationCredentials"].apply(partialParams));
    }
    invokeRedactChannelMessage(partialParams) {
        return this.client.redactChannelMessage(this.ops["RedactChannelMessage"].apply(partialParams));
    }
    invokeRedactConversationMessage(partialParams) {
        return this.client.redactConversationMessage(this.ops["RedactConversationMessage"].apply(partialParams));
    }
    invokeRedactRoomMessage(partialParams) {
        return this.client.redactRoomMessage(this.ops["RedactRoomMessage"].apply(partialParams));
    }
    invokeRegenerateSecurityToken(partialParams) {
        return this.client.regenerateSecurityToken(this.ops["RegenerateSecurityToken"].apply(partialParams));
    }
    invokeResetPersonalPIN(partialParams) {
        return this.client.resetPersonalPIN(this.ops["ResetPersonalPIN"].apply(partialParams));
    }
    invokeRestorePhoneNumber(partialParams) {
        return this.client.restorePhoneNumber(this.ops["RestorePhoneNumber"].apply(partialParams));
    }
    invokeSendChannelMessage(partialParams) {
        return this.client.sendChannelMessage(this.ops["SendChannelMessage"].apply(partialParams));
    }
    invokeStartMeetingTranscription(partialParams) {
        return this.client.startMeetingTranscription(this.ops["StartMeetingTranscription"].apply(partialParams));
    }
    invokeStopMeetingTranscription(partialParams) {
        return this.client.stopMeetingTranscription(this.ops["StopMeetingTranscription"].apply(partialParams));
    }
    invokeTagAttendee(partialParams) {
        return this.client.tagAttendee(this.ops["TagAttendee"].apply(partialParams));
    }
    invokeTagMeeting(partialParams) {
        return this.client.tagMeeting(this.ops["TagMeeting"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagAttendee(partialParams) {
        return this.client.untagAttendee(this.ops["UntagAttendee"].apply(partialParams));
    }
    invokeUntagMeeting(partialParams) {
        return this.client.untagMeeting(this.ops["UntagMeeting"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAccount(partialParams) {
        return this.client.updateAccount(this.ops["UpdateAccount"].apply(partialParams));
    }
    invokeUpdateAccountSettings(partialParams) {
        return this.client.updateAccountSettings(this.ops["UpdateAccountSettings"].apply(partialParams));
    }
    invokeUpdateAppInstance(partialParams) {
        return this.client.updateAppInstance(this.ops["UpdateAppInstance"].apply(partialParams));
    }
    invokeUpdateAppInstanceUser(partialParams) {
        return this.client.updateAppInstanceUser(this.ops["UpdateAppInstanceUser"].apply(partialParams));
    }
    invokeUpdateBot(partialParams) {
        return this.client.updateBot(this.ops["UpdateBot"].apply(partialParams));
    }
    invokeUpdateChannel(partialParams) {
        return this.client.updateChannel(this.ops["UpdateChannel"].apply(partialParams));
    }
    invokeUpdateChannelMessage(partialParams) {
        return this.client.updateChannelMessage(this.ops["UpdateChannelMessage"].apply(partialParams));
    }
    invokeUpdateChannelReadMarker(partialParams) {
        return this.client.updateChannelReadMarker(this.ops["UpdateChannelReadMarker"].apply(partialParams));
    }
    invokeUpdatePhoneNumber(partialParams) {
        return this.client.updatePhoneNumber(this.ops["UpdatePhoneNumber"].apply(partialParams));
    }
    invokeUpdatePhoneNumberSettings(partialParams) {
        return this.client.updatePhoneNumberSettings(this.ops["UpdatePhoneNumberSettings"].apply(partialParams));
    }
    invokeUpdateProxySession(partialParams) {
        return this.client.updateProxySession(this.ops["UpdateProxySession"].apply(partialParams));
    }
    invokeUpdateRoom(partialParams) {
        return this.client.updateRoom(this.ops["UpdateRoom"].apply(partialParams));
    }
    invokeUpdateRoomMembership(partialParams) {
        return this.client.updateRoomMembership(this.ops["UpdateRoomMembership"].apply(partialParams));
    }
    invokeUpdateSipMediaApplication(partialParams) {
        return this.client.updateSipMediaApplication(this.ops["UpdateSipMediaApplication"].apply(partialParams));
    }
    invokeUpdateSipMediaApplicationCall(partialParams) {
        return this.client.updateSipMediaApplicationCall(this.ops["UpdateSipMediaApplicationCall"].apply(partialParams));
    }
    invokeUpdateSipRule(partialParams) {
        return this.client.updateSipRule(this.ops["UpdateSipRule"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
    invokeUpdateUserSettings(partialParams) {
        return this.client.updateUserSettings(this.ops["UpdateUserSettings"].apply(partialParams));
    }
    invokeUpdateVoiceConnector(partialParams) {
        return this.client.updateVoiceConnector(this.ops["UpdateVoiceConnector"].apply(partialParams));
    }
    invokeUpdateVoiceConnectorGroup(partialParams) {
        return this.client.updateVoiceConnectorGroup(this.ops["UpdateVoiceConnectorGroup"].apply(partialParams));
    }
}
exports.default = default_1;
