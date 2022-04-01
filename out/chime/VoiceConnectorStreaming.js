"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/chime-2018-05-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.chime.VoiceConnectorStreaming {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Chime();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAssociatePhoneNumberWithUser(partialParams) {
        this.boot();
        return this.client.associatePhoneNumberWithUser(this.ops["AssociatePhoneNumberWithUser"].apply(partialParams));
    }
    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams) {
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnector(this.ops["AssociatePhoneNumbersWithVoiceConnector"].apply(partialParams));
    }
    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams) {
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].apply(partialParams));
    }
    invokeAssociateSigninDelegateGroupsWithAccount(partialParams) {
        this.boot();
        return this.client.associateSigninDelegateGroupsWithAccount(this.ops["AssociateSigninDelegateGroupsWithAccount"].apply(partialParams));
    }
    invokeBatchCreateAttendee(partialParams) {
        this.boot();
        return this.client.batchCreateAttendee(this.ops["BatchCreateAttendee"].apply(partialParams));
    }
    invokeBatchCreateChannelMembership(partialParams) {
        this.boot();
        return this.client.batchCreateChannelMembership(this.ops["BatchCreateChannelMembership"].apply(partialParams));
    }
    invokeBatchCreateRoomMembership(partialParams) {
        this.boot();
        return this.client.batchCreateRoomMembership(this.ops["BatchCreateRoomMembership"].apply(partialParams));
    }
    invokeBatchDeletePhoneNumber(partialParams) {
        this.boot();
        return this.client.batchDeletePhoneNumber(this.ops["BatchDeletePhoneNumber"].apply(partialParams));
    }
    invokeBatchSuspendUser(partialParams) {
        this.boot();
        return this.client.batchSuspendUser(this.ops["BatchSuspendUser"].apply(partialParams));
    }
    invokeBatchUnsuspendUser(partialParams) {
        this.boot();
        return this.client.batchUnsuspendUser(this.ops["BatchUnsuspendUser"].apply(partialParams));
    }
    invokeBatchUpdatePhoneNumber(partialParams) {
        this.boot();
        return this.client.batchUpdatePhoneNumber(this.ops["BatchUpdatePhoneNumber"].apply(partialParams));
    }
    invokeBatchUpdateUser(partialParams) {
        this.boot();
        return this.client.batchUpdateUser(this.ops["BatchUpdateUser"].apply(partialParams));
    }
    invokeCreateAccount(partialParams) {
        this.boot();
        return this.client.createAccount(this.ops["CreateAccount"].apply(partialParams));
    }
    invokeCreateAppInstance(partialParams) {
        this.boot();
        return this.client.createAppInstance(this.ops["CreateAppInstance"].apply(partialParams));
    }
    invokeCreateAppInstanceAdmin(partialParams) {
        this.boot();
        return this.client.createAppInstanceAdmin(this.ops["CreateAppInstanceAdmin"].apply(partialParams));
    }
    invokeCreateAppInstanceUser(partialParams) {
        this.boot();
        return this.client.createAppInstanceUser(this.ops["CreateAppInstanceUser"].apply(partialParams));
    }
    invokeCreateAttendee(partialParams) {
        this.boot();
        return this.client.createAttendee(this.ops["CreateAttendee"].apply(partialParams));
    }
    invokeCreateBot(partialParams) {
        this.boot();
        return this.client.createBot(this.ops["CreateBot"].apply(partialParams));
    }
    invokeCreateChannel(partialParams) {
        this.boot();
        return this.client.createChannel(this.ops["CreateChannel"].apply(partialParams));
    }
    invokeCreateChannelBan(partialParams) {
        this.boot();
        return this.client.createChannelBan(this.ops["CreateChannelBan"].apply(partialParams));
    }
    invokeCreateChannelMembership(partialParams) {
        this.boot();
        return this.client.createChannelMembership(this.ops["CreateChannelMembership"].apply(partialParams));
    }
    invokeCreateChannelModerator(partialParams) {
        this.boot();
        return this.client.createChannelModerator(this.ops["CreateChannelModerator"].apply(partialParams));
    }
    invokeCreateMediaCapturePipeline(partialParams) {
        this.boot();
        return this.client.createMediaCapturePipeline(this.ops["CreateMediaCapturePipeline"].apply(partialParams));
    }
    invokeCreateMeeting(partialParams) {
        this.boot();
        return this.client.createMeeting(this.ops["CreateMeeting"].apply(partialParams));
    }
    invokeCreateMeetingDialOut(partialParams) {
        this.boot();
        return this.client.createMeetingDialOut(this.ops["CreateMeetingDialOut"].apply(partialParams));
    }
    invokeCreateMeetingWithAttendees(partialParams) {
        this.boot();
        return this.client.createMeetingWithAttendees(this.ops["CreateMeetingWithAttendees"].apply(partialParams));
    }
    invokeCreatePhoneNumberOrder(partialParams) {
        this.boot();
        return this.client.createPhoneNumberOrder(this.ops["CreatePhoneNumberOrder"].apply(partialParams));
    }
    invokeCreateProxySession(partialParams) {
        this.boot();
        return this.client.createProxySession(this.ops["CreateProxySession"].apply(partialParams));
    }
    invokeCreateRoom(partialParams) {
        this.boot();
        return this.client.createRoom(this.ops["CreateRoom"].apply(partialParams));
    }
    invokeCreateRoomMembership(partialParams) {
        this.boot();
        return this.client.createRoomMembership(this.ops["CreateRoomMembership"].apply(partialParams));
    }
    invokeCreateSipMediaApplication(partialParams) {
        this.boot();
        return this.client.createSipMediaApplication(this.ops["CreateSipMediaApplication"].apply(partialParams));
    }
    invokeCreateSipMediaApplicationCall(partialParams) {
        this.boot();
        return this.client.createSipMediaApplicationCall(this.ops["CreateSipMediaApplicationCall"].apply(partialParams));
    }
    invokeCreateSipRule(partialParams) {
        this.boot();
        return this.client.createSipRule(this.ops["CreateSipRule"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateVoiceConnector(partialParams) {
        this.boot();
        return this.client.createVoiceConnector(this.ops["CreateVoiceConnector"].apply(partialParams));
    }
    invokeCreateVoiceConnectorGroup(partialParams) {
        this.boot();
        return this.client.createVoiceConnectorGroup(this.ops["CreateVoiceConnectorGroup"].apply(partialParams));
    }
    invokeDeleteAccount(partialParams) {
        this.boot();
        return this.client.deleteAccount(this.ops["DeleteAccount"].apply(partialParams));
    }
    invokeDescribeAppInstance(partialParams) {
        this.boot();
        return this.client.describeAppInstance(this.ops["DescribeAppInstance"].apply(partialParams));
    }
    invokeDescribeAppInstanceAdmin(partialParams) {
        this.boot();
        return this.client.describeAppInstanceAdmin(this.ops["DescribeAppInstanceAdmin"].apply(partialParams));
    }
    invokeDescribeAppInstanceUser(partialParams) {
        this.boot();
        return this.client.describeAppInstanceUser(this.ops["DescribeAppInstanceUser"].apply(partialParams));
    }
    invokeDescribeChannel(partialParams) {
        this.boot();
        return this.client.describeChannel(this.ops["DescribeChannel"].apply(partialParams));
    }
    invokeDescribeChannelBan(partialParams) {
        this.boot();
        return this.client.describeChannelBan(this.ops["DescribeChannelBan"].apply(partialParams));
    }
    invokeDescribeChannelMembership(partialParams) {
        this.boot();
        return this.client.describeChannelMembership(this.ops["DescribeChannelMembership"].apply(partialParams));
    }
    invokeDescribeChannelMembershipForAppInstanceUser(partialParams) {
        this.boot();
        return this.client.describeChannelMembershipForAppInstanceUser(this.ops["DescribeChannelMembershipForAppInstanceUser"].apply(partialParams));
    }
    invokeDescribeChannelModeratedByAppInstanceUser(partialParams) {
        this.boot();
        return this.client.describeChannelModeratedByAppInstanceUser(this.ops["DescribeChannelModeratedByAppInstanceUser"].apply(partialParams));
    }
    invokeDescribeChannelModerator(partialParams) {
        this.boot();
        return this.client.describeChannelModerator(this.ops["DescribeChannelModerator"].apply(partialParams));
    }
    invokeDisassociatePhoneNumberFromUser(partialParams) {
        this.boot();
        return this.client.disassociatePhoneNumberFromUser(this.ops["DisassociatePhoneNumberFromUser"].apply(partialParams));
    }
    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams) {
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnector(this.ops["DisassociatePhoneNumbersFromVoiceConnector"].apply(partialParams));
    }
    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams) {
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].apply(partialParams));
    }
    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams) {
        this.boot();
        return this.client.disassociateSigninDelegateGroupsFromAccount(this.ops["DisassociateSigninDelegateGroupsFromAccount"].apply(partialParams));
    }
    invokeGetAccount(partialParams) {
        this.boot();
        return this.client.getAccount(this.ops["GetAccount"].apply(partialParams));
    }
    invokeGetAccountSettings(partialParams) {
        this.boot();
        return this.client.getAccountSettings(this.ops["GetAccountSettings"].apply(partialParams));
    }
    invokeGetAppInstanceRetentionSettings(partialParams) {
        this.boot();
        return this.client.getAppInstanceRetentionSettings(this.ops["GetAppInstanceRetentionSettings"].apply(partialParams));
    }
    invokeGetAppInstanceStreamingConfigurations(partialParams) {
        this.boot();
        return this.client.getAppInstanceStreamingConfigurations(this.ops["GetAppInstanceStreamingConfigurations"].apply(partialParams));
    }
    invokeGetAttendee(partialParams) {
        this.boot();
        return this.client.getAttendee(this.ops["GetAttendee"].apply(partialParams));
    }
    invokeGetBot(partialParams) {
        this.boot();
        return this.client.getBot(this.ops["GetBot"].apply(partialParams));
    }
    invokeGetChannelMessage(partialParams) {
        this.boot();
        return this.client.getChannelMessage(this.ops["GetChannelMessage"].apply(partialParams));
    }
    invokeGetEventsConfiguration(partialParams) {
        this.boot();
        return this.client.getEventsConfiguration(this.ops["GetEventsConfiguration"].apply(partialParams));
    }
    invokeGetMediaCapturePipeline(partialParams) {
        this.boot();
        return this.client.getMediaCapturePipeline(this.ops["GetMediaCapturePipeline"].apply(partialParams));
    }
    invokeGetMeeting(partialParams) {
        this.boot();
        return this.client.getMeeting(this.ops["GetMeeting"].apply(partialParams));
    }
    invokeGetMessagingSessionEndpoint(partialParams) {
        this.boot();
        return this.client.getMessagingSessionEndpoint(this.ops["GetMessagingSessionEndpoint"].apply(partialParams));
    }
    invokeGetPhoneNumber(partialParams) {
        this.boot();
        return this.client.getPhoneNumber(this.ops["GetPhoneNumber"].apply(partialParams));
    }
    invokeGetPhoneNumberOrder(partialParams) {
        this.boot();
        return this.client.getPhoneNumberOrder(this.ops["GetPhoneNumberOrder"].apply(partialParams));
    }
    invokeGetProxySession(partialParams) {
        this.boot();
        return this.client.getProxySession(this.ops["GetProxySession"].apply(partialParams));
    }
    invokeGetRetentionSettings(partialParams) {
        this.boot();
        return this.client.getRetentionSettings(this.ops["GetRetentionSettings"].apply(partialParams));
    }
    invokeGetRoom(partialParams) {
        this.boot();
        return this.client.getRoom(this.ops["GetRoom"].apply(partialParams));
    }
    invokeGetSipMediaApplication(partialParams) {
        this.boot();
        return this.client.getSipMediaApplication(this.ops["GetSipMediaApplication"].apply(partialParams));
    }
    invokeGetSipMediaApplicationLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.getSipMediaApplicationLoggingConfiguration(this.ops["GetSipMediaApplicationLoggingConfiguration"].apply(partialParams));
    }
    invokeGetSipRule(partialParams) {
        this.boot();
        return this.client.getSipRule(this.ops["GetSipRule"].apply(partialParams));
    }
    invokeGetUser(partialParams) {
        this.boot();
        return this.client.getUser(this.ops["GetUser"].apply(partialParams));
    }
    invokeGetUserSettings(partialParams) {
        this.boot();
        return this.client.getUserSettings(this.ops["GetUserSettings"].apply(partialParams));
    }
    invokeGetVoiceConnector(partialParams) {
        this.boot();
        return this.client.getVoiceConnector(this.ops["GetVoiceConnector"].apply(partialParams));
    }
    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorGroup(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorGroup(this.ops["GetVoiceConnectorGroup"].apply(partialParams));
    }
    invokeGetVoiceConnectorLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorLoggingConfiguration(this.ops["GetVoiceConnectorLoggingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorOrigination(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorOrigination(this.ops["GetVoiceConnectorOrigination"].apply(partialParams));
    }
    invokeGetVoiceConnectorProxy(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorProxy(this.ops["GetVoiceConnectorProxy"].apply(partialParams));
    }
    invokeGetVoiceConnectorStreamingConfiguration(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorStreamingConfiguration(this.ops["GetVoiceConnectorStreamingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorTermination(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorTermination(this.ops["GetVoiceConnectorTermination"].apply(partialParams));
    }
    invokeGetVoiceConnectorTerminationHealth(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorTerminationHealth(this.ops["GetVoiceConnectorTerminationHealth"].apply(partialParams));
    }
    invokeInviteUsers(partialParams) {
        this.boot();
        return this.client.inviteUsers(this.ops["InviteUsers"].apply(partialParams));
    }
    invokeListAccounts(partialParams) {
        this.boot();
        return this.client.listAccounts(this.ops["ListAccounts"].apply(partialParams));
    }
    invokeListAppInstanceAdmins(partialParams) {
        this.boot();
        return this.client.listAppInstanceAdmins(this.ops["ListAppInstanceAdmins"].apply(partialParams));
    }
    invokeListAppInstanceUsers(partialParams) {
        this.boot();
        return this.client.listAppInstanceUsers(this.ops["ListAppInstanceUsers"].apply(partialParams));
    }
    invokeListAppInstances(partialParams) {
        this.boot();
        return this.client.listAppInstances(this.ops["ListAppInstances"].apply(partialParams));
    }
    invokeListAttendeeTags(partialParams) {
        this.boot();
        return this.client.listAttendeeTags(this.ops["ListAttendeeTags"].apply(partialParams));
    }
    invokeListAttendees(partialParams) {
        this.boot();
        return this.client.listAttendees(this.ops["ListAttendees"].apply(partialParams));
    }
    invokeListBots(partialParams) {
        this.boot();
        return this.client.listBots(this.ops["ListBots"].apply(partialParams));
    }
    invokeListChannelBans(partialParams) {
        this.boot();
        return this.client.listChannelBans(this.ops["ListChannelBans"].apply(partialParams));
    }
    invokeListChannelMemberships(partialParams) {
        this.boot();
        return this.client.listChannelMemberships(this.ops["ListChannelMemberships"].apply(partialParams));
    }
    invokeListChannelMembershipsForAppInstanceUser(partialParams) {
        this.boot();
        return this.client.listChannelMembershipsForAppInstanceUser(this.ops["ListChannelMembershipsForAppInstanceUser"].apply(partialParams));
    }
    invokeListChannelMessages(partialParams) {
        this.boot();
        return this.client.listChannelMessages(this.ops["ListChannelMessages"].apply(partialParams));
    }
    invokeListChannelModerators(partialParams) {
        this.boot();
        return this.client.listChannelModerators(this.ops["ListChannelModerators"].apply(partialParams));
    }
    invokeListChannels(partialParams) {
        this.boot();
        return this.client.listChannels(this.ops["ListChannels"].apply(partialParams));
    }
    invokeListChannelsModeratedByAppInstanceUser(partialParams) {
        this.boot();
        return this.client.listChannelsModeratedByAppInstanceUser(this.ops["ListChannelsModeratedByAppInstanceUser"].apply(partialParams));
    }
    invokeListMediaCapturePipelines(partialParams) {
        this.boot();
        return this.client.listMediaCapturePipelines(this.ops["ListMediaCapturePipelines"].apply(partialParams));
    }
    invokeListMeetingTags(partialParams) {
        this.boot();
        return this.client.listMeetingTags(this.ops["ListMeetingTags"].apply(partialParams));
    }
    invokeListMeetings(partialParams) {
        this.boot();
        return this.client.listMeetings(this.ops["ListMeetings"].apply(partialParams));
    }
    invokeListPhoneNumberOrders(partialParams) {
        this.boot();
        return this.client.listPhoneNumberOrders(this.ops["ListPhoneNumberOrders"].apply(partialParams));
    }
    invokeListPhoneNumbers(partialParams) {
        this.boot();
        return this.client.listPhoneNumbers(this.ops["ListPhoneNumbers"].apply(partialParams));
    }
    invokeListProxySessions(partialParams) {
        this.boot();
        return this.client.listProxySessions(this.ops["ListProxySessions"].apply(partialParams));
    }
    invokeListRoomMemberships(partialParams) {
        this.boot();
        return this.client.listRoomMemberships(this.ops["ListRoomMemberships"].apply(partialParams));
    }
    invokeListRooms(partialParams) {
        this.boot();
        return this.client.listRooms(this.ops["ListRooms"].apply(partialParams));
    }
    invokeListSipMediaApplications(partialParams) {
        this.boot();
        return this.client.listSipMediaApplications(this.ops["ListSipMediaApplications"].apply(partialParams));
    }
    invokeListSipRules(partialParams) {
        this.boot();
        return this.client.listSipRules(this.ops["ListSipRules"].apply(partialParams));
    }
    invokeListSupportedPhoneNumberCountries(partialParams) {
        this.boot();
        return this.client.listSupportedPhoneNumberCountries(this.ops["ListSupportedPhoneNumberCountries"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeListVoiceConnectorGroups(partialParams) {
        this.boot();
        return this.client.listVoiceConnectorGroups(this.ops["ListVoiceConnectorGroups"].apply(partialParams));
    }
    invokeListVoiceConnectorTerminationCredentials(partialParams) {
        this.boot();
        return this.client.listVoiceConnectorTerminationCredentials(this.ops["ListVoiceConnectorTerminationCredentials"].apply(partialParams));
    }
    invokeListVoiceConnectors(partialParams) {
        this.boot();
        return this.client.listVoiceConnectors(this.ops["ListVoiceConnectors"].apply(partialParams));
    }
    invokeLogoutUser(partialParams) {
        this.boot();
        return this.client.logoutUser(this.ops["LogoutUser"].apply(partialParams));
    }
    invokePutAppInstanceRetentionSettings(partialParams) {
        this.boot();
        return this.client.putAppInstanceRetentionSettings(this.ops["PutAppInstanceRetentionSettings"].apply(partialParams));
    }
    invokePutAppInstanceStreamingConfigurations(partialParams) {
        this.boot();
        return this.client.putAppInstanceStreamingConfigurations(this.ops["PutAppInstanceStreamingConfigurations"].apply(partialParams));
    }
    invokePutEventsConfiguration(partialParams) {
        this.boot();
        return this.client.putEventsConfiguration(this.ops["PutEventsConfiguration"].apply(partialParams));
    }
    invokePutRetentionSettings(partialParams) {
        this.boot();
        return this.client.putRetentionSettings(this.ops["PutRetentionSettings"].apply(partialParams));
    }
    invokePutSipMediaApplicationLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.putSipMediaApplicationLoggingConfiguration(this.ops["PutSipMediaApplicationLoggingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorLoggingConfiguration(this.ops["PutVoiceConnectorLoggingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorOrigination(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorOrigination(this.ops["PutVoiceConnectorOrigination"].apply(partialParams));
    }
    invokePutVoiceConnectorProxy(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorProxy(this.ops["PutVoiceConnectorProxy"].apply(partialParams));
    }
    invokePutVoiceConnectorStreamingConfiguration(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorStreamingConfiguration(this.ops["PutVoiceConnectorStreamingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorTermination(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorTermination(this.ops["PutVoiceConnectorTermination"].apply(partialParams));
    }
    invokeRedactChannelMessage(partialParams) {
        this.boot();
        return this.client.redactChannelMessage(this.ops["RedactChannelMessage"].apply(partialParams));
    }
    invokeRedactConversationMessage(partialParams) {
        this.boot();
        return this.client.redactConversationMessage(this.ops["RedactConversationMessage"].apply(partialParams));
    }
    invokeRedactRoomMessage(partialParams) {
        this.boot();
        return this.client.redactRoomMessage(this.ops["RedactRoomMessage"].apply(partialParams));
    }
    invokeRegenerateSecurityToken(partialParams) {
        this.boot();
        return this.client.regenerateSecurityToken(this.ops["RegenerateSecurityToken"].apply(partialParams));
    }
    invokeResetPersonalPIN(partialParams) {
        this.boot();
        return this.client.resetPersonalPIN(this.ops["ResetPersonalPIN"].apply(partialParams));
    }
    invokeRestorePhoneNumber(partialParams) {
        this.boot();
        return this.client.restorePhoneNumber(this.ops["RestorePhoneNumber"].apply(partialParams));
    }
    invokeSearchAvailablePhoneNumbers(partialParams) {
        this.boot();
        return this.client.searchAvailablePhoneNumbers(this.ops["SearchAvailablePhoneNumbers"].apply(partialParams));
    }
    invokeSendChannelMessage(partialParams) {
        this.boot();
        return this.client.sendChannelMessage(this.ops["SendChannelMessage"].apply(partialParams));
    }
    invokeStartMeetingTranscription(partialParams) {
        this.boot();
        return this.client.startMeetingTranscription(this.ops["StartMeetingTranscription"].apply(partialParams));
    }
    invokeStopMeetingTranscription(partialParams) {
        this.boot();
        return this.client.stopMeetingTranscription(this.ops["StopMeetingTranscription"].apply(partialParams));
    }
    invokeUpdateAccount(partialParams) {
        this.boot();
        return this.client.updateAccount(this.ops["UpdateAccount"].apply(partialParams));
    }
    invokeUpdateAccountSettings(partialParams) {
        this.boot();
        return this.client.updateAccountSettings(this.ops["UpdateAccountSettings"].apply(partialParams));
    }
    invokeUpdateAppInstance(partialParams) {
        this.boot();
        return this.client.updateAppInstance(this.ops["UpdateAppInstance"].apply(partialParams));
    }
    invokeUpdateAppInstanceUser(partialParams) {
        this.boot();
        return this.client.updateAppInstanceUser(this.ops["UpdateAppInstanceUser"].apply(partialParams));
    }
    invokeUpdateBot(partialParams) {
        this.boot();
        return this.client.updateBot(this.ops["UpdateBot"].apply(partialParams));
    }
    invokeUpdateChannel(partialParams) {
        this.boot();
        return this.client.updateChannel(this.ops["UpdateChannel"].apply(partialParams));
    }
    invokeUpdateChannelMessage(partialParams) {
        this.boot();
        return this.client.updateChannelMessage(this.ops["UpdateChannelMessage"].apply(partialParams));
    }
    invokeUpdateChannelReadMarker(partialParams) {
        this.boot();
        return this.client.updateChannelReadMarker(this.ops["UpdateChannelReadMarker"].apply(partialParams));
    }
    invokeUpdatePhoneNumber(partialParams) {
        this.boot();
        return this.client.updatePhoneNumber(this.ops["UpdatePhoneNumber"].apply(partialParams));
    }
    invokeUpdateProxySession(partialParams) {
        this.boot();
        return this.client.updateProxySession(this.ops["UpdateProxySession"].apply(partialParams));
    }
    invokeUpdateRoom(partialParams) {
        this.boot();
        return this.client.updateRoom(this.ops["UpdateRoom"].apply(partialParams));
    }
    invokeUpdateRoomMembership(partialParams) {
        this.boot();
        return this.client.updateRoomMembership(this.ops["UpdateRoomMembership"].apply(partialParams));
    }
    invokeUpdateSipMediaApplication(partialParams) {
        this.boot();
        return this.client.updateSipMediaApplication(this.ops["UpdateSipMediaApplication"].apply(partialParams));
    }
    invokeUpdateSipMediaApplicationCall(partialParams) {
        this.boot();
        return this.client.updateSipMediaApplicationCall(this.ops["UpdateSipMediaApplicationCall"].apply(partialParams));
    }
    invokeUpdateSipRule(partialParams) {
        this.boot();
        return this.client.updateSipRule(this.ops["UpdateSipRule"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        this.boot();
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
    invokeUpdateVoiceConnector(partialParams) {
        this.boot();
        return this.client.updateVoiceConnector(this.ops["UpdateVoiceConnector"].apply(partialParams));
    }
    invokeUpdateVoiceConnectorGroup(partialParams) {
        this.boot();
        return this.client.updateVoiceConnectorGroup(this.ops["UpdateVoiceConnectorGroup"].apply(partialParams));
    }
}
exports.default = default_1;
