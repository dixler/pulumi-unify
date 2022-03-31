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
class default_1 extends aws.chime.VoiceConnectorOrganization {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Chime();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAssociatePhoneNumberWithUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumberWithUser(this.ops["AssociatePhoneNumberWithUser"].applicator.apply(partialParams));
    }
    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnector(this.ops["AssociatePhoneNumbersWithVoiceConnector"].applicator.apply(partialParams));
    }
    invokeAssociatePhoneNumbersWithVoiceConnectorGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnectorGroup(this.ops["AssociatePhoneNumbersWithVoiceConnectorGroup"].applicator.apply(partialParams));
    }
    invokeAssociateSigninDelegateGroupsWithAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateSigninDelegateGroupsWithAccount(this.ops["AssociateSigninDelegateGroupsWithAccount"].applicator.apply(partialParams));
    }
    invokeBatchCreateAttendee(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateAttendee(this.ops["BatchCreateAttendee"].applicator.apply(partialParams));
    }
    invokeBatchCreateChannelMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateChannelMembership(this.ops["BatchCreateChannelMembership"].applicator.apply(partialParams));
    }
    invokeBatchCreateRoomMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreateRoomMembership(this.ops["BatchCreateRoomMembership"].applicator.apply(partialParams));
    }
    invokeBatchDeletePhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeletePhoneNumber(this.ops["BatchDeletePhoneNumber"].applicator.apply(partialParams));
    }
    invokeBatchSuspendUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchSuspendUser(this.ops["BatchSuspendUser"].applicator.apply(partialParams));
    }
    invokeBatchUnsuspendUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUnsuspendUser(this.ops["BatchUnsuspendUser"].applicator.apply(partialParams));
    }
    invokeBatchUpdatePhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdatePhoneNumber(this.ops["BatchUpdatePhoneNumber"].applicator.apply(partialParams));
    }
    invokeBatchUpdateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdateUser(this.ops["BatchUpdateUser"].applicator.apply(partialParams));
    }
    invokeCreateAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccount(this.ops["CreateAccount"].applicator.apply(partialParams));
    }
    invokeCreateAppInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstance(this.ops["CreateAppInstance"].applicator.apply(partialParams));
    }
    invokeCreateAppInstanceAdmin(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstanceAdmin(this.ops["CreateAppInstanceAdmin"].applicator.apply(partialParams));
    }
    invokeCreateAppInstanceUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppInstanceUser(this.ops["CreateAppInstanceUser"].applicator.apply(partialParams));
    }
    invokeCreateAttendee(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAttendee(this.ops["CreateAttendee"].applicator.apply(partialParams));
    }
    invokeCreateBot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBot(this.ops["CreateBot"].applicator.apply(partialParams));
    }
    invokeCreateChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannel(this.ops["CreateChannel"].applicator.apply(partialParams));
    }
    invokeCreateChannelBan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelBan(this.ops["CreateChannelBan"].applicator.apply(partialParams));
    }
    invokeCreateChannelMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelMembership(this.ops["CreateChannelMembership"].applicator.apply(partialParams));
    }
    invokeCreateChannelModerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannelModerator(this.ops["CreateChannelModerator"].applicator.apply(partialParams));
    }
    invokeCreateMediaCapturePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMediaCapturePipeline(this.ops["CreateMediaCapturePipeline"].applicator.apply(partialParams));
    }
    invokeCreateMeeting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeeting(this.ops["CreateMeeting"].applicator.apply(partialParams));
    }
    invokeCreateMeetingDialOut(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeetingDialOut(this.ops["CreateMeetingDialOut"].applicator.apply(partialParams));
    }
    invokeCreateMeetingWithAttendees(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMeetingWithAttendees(this.ops["CreateMeetingWithAttendees"].applicator.apply(partialParams));
    }
    invokeCreatePhoneNumberOrder(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPhoneNumberOrder(this.ops["CreatePhoneNumberOrder"].applicator.apply(partialParams));
    }
    invokeCreateProxySession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProxySession(this.ops["CreateProxySession"].applicator.apply(partialParams));
    }
    invokeCreateRoom(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoom(this.ops["CreateRoom"].applicator.apply(partialParams));
    }
    invokeCreateRoomMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoomMembership(this.ops["CreateRoomMembership"].applicator.apply(partialParams));
    }
    invokeCreateSipMediaApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipMediaApplication(this.ops["CreateSipMediaApplication"].applicator.apply(partialParams));
    }
    invokeCreateSipMediaApplicationCall(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipMediaApplicationCall(this.ops["CreateSipMediaApplicationCall"].applicator.apply(partialParams));
    }
    invokeCreateSipRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSipRule(this.ops["CreateSipRule"].applicator.apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].applicator.apply(partialParams));
    }
    invokeCreateVoiceConnector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceConnector(this.ops["CreateVoiceConnector"].applicator.apply(partialParams));
    }
    invokeCreateVoiceConnectorGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceConnectorGroup(this.ops["CreateVoiceConnectorGroup"].applicator.apply(partialParams));
    }
    invokeDeleteAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccount(this.ops["DeleteAccount"].applicator.apply(partialParams));
    }
    invokeDeleteAppInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstance(this.ops["DeleteAppInstance"].applicator.apply(partialParams));
    }
    invokeDeleteAppInstanceAdmin(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceAdmin(this.ops["DeleteAppInstanceAdmin"].applicator.apply(partialParams));
    }
    invokeDeleteAppInstanceStreamingConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceStreamingConfigurations(this.ops["DeleteAppInstanceStreamingConfigurations"].applicator.apply(partialParams));
    }
    invokeDeleteAppInstanceUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppInstanceUser(this.ops["DeleteAppInstanceUser"].applicator.apply(partialParams));
    }
    invokeDeleteAttendee(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAttendee(this.ops["DeleteAttendee"].applicator.apply(partialParams));
    }
    invokeDeleteChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannel(this.ops["DeleteChannel"].applicator.apply(partialParams));
    }
    invokeDeleteChannelBan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelBan(this.ops["DeleteChannelBan"].applicator.apply(partialParams));
    }
    invokeDeleteChannelMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelMembership(this.ops["DeleteChannelMembership"].applicator.apply(partialParams));
    }
    invokeDeleteChannelMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelMessage(this.ops["DeleteChannelMessage"].applicator.apply(partialParams));
    }
    invokeDeleteChannelModerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannelModerator(this.ops["DeleteChannelModerator"].applicator.apply(partialParams));
    }
    invokeDeleteEventsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventsConfiguration(this.ops["DeleteEventsConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteMediaCapturePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMediaCapturePipeline(this.ops["DeleteMediaCapturePipeline"].applicator.apply(partialParams));
    }
    invokeDeleteMeeting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMeeting(this.ops["DeleteMeeting"].applicator.apply(partialParams));
    }
    invokeDeletePhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePhoneNumber(this.ops["DeletePhoneNumber"].applicator.apply(partialParams));
    }
    invokeDeleteProxySession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProxySession(this.ops["DeleteProxySession"].applicator.apply(partialParams));
    }
    invokeDeleteRoom(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoom(this.ops["DeleteRoom"].applicator.apply(partialParams));
    }
    invokeDeleteRoomMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoomMembership(this.ops["DeleteRoomMembership"].applicator.apply(partialParams));
    }
    invokeDeleteSipMediaApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSipMediaApplication(this.ops["DeleteSipMediaApplication"].applicator.apply(partialParams));
    }
    invokeDeleteSipRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSipRule(this.ops["DeleteSipRule"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnector(this.ops["DeleteVoiceConnector"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(this.ops["DeleteVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnectorGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorGroup(this.ops["DeleteVoiceConnectorGroup"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnectorOrigination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorOrigination(this.ops["DeleteVoiceConnectorOrigination"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnectorProxy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorProxy(this.ops["DeleteVoiceConnectorProxy"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnectorStreamingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorStreamingConfiguration(this.ops["DeleteVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnectorTermination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorTermination(this.ops["DeleteVoiceConnectorTermination"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceConnectorTerminationCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceConnectorTerminationCredentials(this.ops["DeleteVoiceConnectorTerminationCredentials"].applicator.apply(partialParams));
    }
    invokeDescribeAppInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstance(this.ops["DescribeAppInstance"].applicator.apply(partialParams));
    }
    invokeDescribeAppInstanceAdmin(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstanceAdmin(this.ops["DescribeAppInstanceAdmin"].applicator.apply(partialParams));
    }
    invokeDescribeAppInstanceUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppInstanceUser(this.ops["DescribeAppInstanceUser"].applicator.apply(partialParams));
    }
    invokeDescribeChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannel(this.ops["DescribeChannel"].applicator.apply(partialParams));
    }
    invokeDescribeChannelBan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelBan(this.ops["DescribeChannelBan"].applicator.apply(partialParams));
    }
    invokeDescribeChannelMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelMembership(this.ops["DescribeChannelMembership"].applicator.apply(partialParams));
    }
    invokeDescribeChannelMembershipForAppInstanceUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelMembershipForAppInstanceUser(this.ops["DescribeChannelMembershipForAppInstanceUser"].applicator.apply(partialParams));
    }
    invokeDescribeChannelModeratedByAppInstanceUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelModeratedByAppInstanceUser(this.ops["DescribeChannelModeratedByAppInstanceUser"].applicator.apply(partialParams));
    }
    invokeDescribeChannelModerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannelModerator(this.ops["DescribeChannelModerator"].applicator.apply(partialParams));
    }
    invokeDisassociatePhoneNumberFromUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumberFromUser(this.ops["DisassociatePhoneNumberFromUser"].applicator.apply(partialParams));
    }
    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnector(this.ops["DisassociatePhoneNumbersFromVoiceConnector"].applicator.apply(partialParams));
    }
    invokeDisassociatePhoneNumbersFromVoiceConnectorGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(this.ops["DisassociatePhoneNumbersFromVoiceConnectorGroup"].applicator.apply(partialParams));
    }
    invokeDisassociateSigninDelegateGroupsFromAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateSigninDelegateGroupsFromAccount(this.ops["DisassociateSigninDelegateGroupsFromAccount"].applicator.apply(partialParams));
    }
    invokeGetAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccount(this.ops["GetAccount"].applicator.apply(partialParams));
    }
    invokeGetAccountSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccountSettings(this.ops["GetAccountSettings"].applicator.apply(partialParams));
    }
    invokeGetAppInstanceRetentionSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAppInstanceRetentionSettings(this.ops["GetAppInstanceRetentionSettings"].applicator.apply(partialParams));
    }
    invokeGetAppInstanceStreamingConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAppInstanceStreamingConfigurations(this.ops["GetAppInstanceStreamingConfigurations"].applicator.apply(partialParams));
    }
    invokeGetAttendee(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAttendee(this.ops["GetAttendee"].applicator.apply(partialParams));
    }
    invokeGetBot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBot(this.ops["GetBot"].applicator.apply(partialParams));
    }
    invokeGetChannelMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChannelMessage(this.ops["GetChannelMessage"].applicator.apply(partialParams));
    }
    invokeGetEventsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventsConfiguration(this.ops["GetEventsConfiguration"].applicator.apply(partialParams));
    }
    invokeGetMediaCapturePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMediaCapturePipeline(this.ops["GetMediaCapturePipeline"].applicator.apply(partialParams));
    }
    invokeGetMeeting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMeeting(this.ops["GetMeeting"].applicator.apply(partialParams));
    }
    invokeGetPhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPhoneNumber(this.ops["GetPhoneNumber"].applicator.apply(partialParams));
    }
    invokeGetPhoneNumberOrder(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPhoneNumberOrder(this.ops["GetPhoneNumberOrder"].applicator.apply(partialParams));
    }
    invokeGetProxySession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProxySession(this.ops["GetProxySession"].applicator.apply(partialParams));
    }
    invokeGetRetentionSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRetentionSettings(this.ops["GetRetentionSettings"].applicator.apply(partialParams));
    }
    invokeGetRoom(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRoom(this.ops["GetRoom"].applicator.apply(partialParams));
    }
    invokeGetSipMediaApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipMediaApplication(this.ops["GetSipMediaApplication"].applicator.apply(partialParams));
    }
    invokeGetSipMediaApplicationLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipMediaApplicationLoggingConfiguration(this.ops["GetSipMediaApplicationLoggingConfiguration"].applicator.apply(partialParams));
    }
    invokeGetSipRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSipRule(this.ops["GetSipRule"].applicator.apply(partialParams));
    }
    invokeGetUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUser(this.ops["GetUser"].applicator.apply(partialParams));
    }
    invokeGetUserSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserSettings(this.ops["GetUserSettings"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnector(this.ops["GetVoiceConnector"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorGroup(this.ops["GetVoiceConnectorGroup"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorLoggingConfiguration(this.ops["GetVoiceConnectorLoggingConfiguration"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorOrigination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorOrigination(this.ops["GetVoiceConnectorOrigination"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorProxy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorProxy(this.ops["GetVoiceConnectorProxy"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorStreamingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorStreamingConfiguration(this.ops["GetVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorTermination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorTermination(this.ops["GetVoiceConnectorTermination"].applicator.apply(partialParams));
    }
    invokeGetVoiceConnectorTerminationHealth(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceConnectorTerminationHealth(this.ops["GetVoiceConnectorTerminationHealth"].applicator.apply(partialParams));
    }
    invokeInviteUsers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteUsers(this.ops["InviteUsers"].applicator.apply(partialParams));
    }
    invokeListAppInstanceAdmins(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAppInstanceAdmins(this.ops["ListAppInstanceAdmins"].applicator.apply(partialParams));
    }
    invokeListAppInstanceUsers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAppInstanceUsers(this.ops["ListAppInstanceUsers"].applicator.apply(partialParams));
    }
    invokeListAttendeeTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttendeeTags(this.ops["ListAttendeeTags"].applicator.apply(partialParams));
    }
    invokeListAttendees(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttendees(this.ops["ListAttendees"].applicator.apply(partialParams));
    }
    invokeListBots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBots(this.ops["ListBots"].applicator.apply(partialParams));
    }
    invokeListChannelBans(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelBans(this.ops["ListChannelBans"].applicator.apply(partialParams));
    }
    invokeListChannelMemberships(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelMemberships(this.ops["ListChannelMemberships"].applicator.apply(partialParams));
    }
    invokeListChannelMessages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelMessages(this.ops["ListChannelMessages"].applicator.apply(partialParams));
    }
    invokeListChannelModerators(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannelModerators(this.ops["ListChannelModerators"].applicator.apply(partialParams));
    }
    invokeListChannels(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChannels(this.ops["ListChannels"].applicator.apply(partialParams));
    }
    invokeListMeetingTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMeetingTags(this.ops["ListMeetingTags"].applicator.apply(partialParams));
    }
    invokeListProxySessions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProxySessions(this.ops["ListProxySessions"].applicator.apply(partialParams));
    }
    invokeListRoomMemberships(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoomMemberships(this.ops["ListRoomMemberships"].applicator.apply(partialParams));
    }
    invokeListRooms(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRooms(this.ops["ListRooms"].applicator.apply(partialParams));
    }
    invokeListSupportedPhoneNumberCountries(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSupportedPhoneNumberCountries(this.ops["ListSupportedPhoneNumberCountries"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListUsers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].applicator.apply(partialParams));
    }
    invokeListVoiceConnectorTerminationCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVoiceConnectorTerminationCredentials(this.ops["ListVoiceConnectorTerminationCredentials"].applicator.apply(partialParams));
    }
    invokeLogoutUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.logoutUser(this.ops["LogoutUser"].applicator.apply(partialParams));
    }
    invokePutAppInstanceRetentionSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAppInstanceRetentionSettings(this.ops["PutAppInstanceRetentionSettings"].applicator.apply(partialParams));
    }
    invokePutAppInstanceStreamingConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAppInstanceStreamingConfigurations(this.ops["PutAppInstanceStreamingConfigurations"].applicator.apply(partialParams));
    }
    invokePutEventsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEventsConfiguration(this.ops["PutEventsConfiguration"].applicator.apply(partialParams));
    }
    invokePutRetentionSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRetentionSettings(this.ops["PutRetentionSettings"].applicator.apply(partialParams));
    }
    invokePutSipMediaApplicationLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSipMediaApplicationLoggingConfiguration(this.ops["PutSipMediaApplicationLoggingConfiguration"].applicator.apply(partialParams));
    }
    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].applicator.apply(partialParams));
    }
    invokePutVoiceConnectorLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorLoggingConfiguration(this.ops["PutVoiceConnectorLoggingConfiguration"].applicator.apply(partialParams));
    }
    invokePutVoiceConnectorOrigination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorOrigination(this.ops["PutVoiceConnectorOrigination"].applicator.apply(partialParams));
    }
    invokePutVoiceConnectorProxy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorProxy(this.ops["PutVoiceConnectorProxy"].applicator.apply(partialParams));
    }
    invokePutVoiceConnectorStreamingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorStreamingConfiguration(this.ops["PutVoiceConnectorStreamingConfiguration"].applicator.apply(partialParams));
    }
    invokePutVoiceConnectorTermination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorTermination(this.ops["PutVoiceConnectorTermination"].applicator.apply(partialParams));
    }
    invokePutVoiceConnectorTerminationCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVoiceConnectorTerminationCredentials(this.ops["PutVoiceConnectorTerminationCredentials"].applicator.apply(partialParams));
    }
    invokeRedactChannelMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactChannelMessage(this.ops["RedactChannelMessage"].applicator.apply(partialParams));
    }
    invokeRedactConversationMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactConversationMessage(this.ops["RedactConversationMessage"].applicator.apply(partialParams));
    }
    invokeRedactRoomMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.redactRoomMessage(this.ops["RedactRoomMessage"].applicator.apply(partialParams));
    }
    invokeRegenerateSecurityToken(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.regenerateSecurityToken(this.ops["RegenerateSecurityToken"].applicator.apply(partialParams));
    }
    invokeResetPersonalPIN(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetPersonalPIN(this.ops["ResetPersonalPIN"].applicator.apply(partialParams));
    }
    invokeRestorePhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restorePhoneNumber(this.ops["RestorePhoneNumber"].applicator.apply(partialParams));
    }
    invokeSendChannelMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendChannelMessage(this.ops["SendChannelMessage"].applicator.apply(partialParams));
    }
    invokeStartMeetingTranscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMeetingTranscription(this.ops["StartMeetingTranscription"].applicator.apply(partialParams));
    }
    invokeStopMeetingTranscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMeetingTranscription(this.ops["StopMeetingTranscription"].applicator.apply(partialParams));
    }
    invokeTagAttendee(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagAttendee(this.ops["TagAttendee"].applicator.apply(partialParams));
    }
    invokeTagMeeting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagMeeting(this.ops["TagMeeting"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagAttendee(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagAttendee(this.ops["UntagAttendee"].applicator.apply(partialParams));
    }
    invokeUntagMeeting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagMeeting(this.ops["UntagMeeting"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccount(this.ops["UpdateAccount"].applicator.apply(partialParams));
    }
    invokeUpdateAccountSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccountSettings(this.ops["UpdateAccountSettings"].applicator.apply(partialParams));
    }
    invokeUpdateAppInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppInstance(this.ops["UpdateAppInstance"].applicator.apply(partialParams));
    }
    invokeUpdateAppInstanceUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppInstanceUser(this.ops["UpdateAppInstanceUser"].applicator.apply(partialParams));
    }
    invokeUpdateBot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBot(this.ops["UpdateBot"].applicator.apply(partialParams));
    }
    invokeUpdateChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannel(this.ops["UpdateChannel"].applicator.apply(partialParams));
    }
    invokeUpdateChannelMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannelMessage(this.ops["UpdateChannelMessage"].applicator.apply(partialParams));
    }
    invokeUpdateChannelReadMarker(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannelReadMarker(this.ops["UpdateChannelReadMarker"].applicator.apply(partialParams));
    }
    invokeUpdatePhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePhoneNumber(this.ops["UpdatePhoneNumber"].applicator.apply(partialParams));
    }
    invokeUpdatePhoneNumberSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePhoneNumberSettings(this.ops["UpdatePhoneNumberSettings"].applicator.apply(partialParams));
    }
    invokeUpdateProxySession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProxySession(this.ops["UpdateProxySession"].applicator.apply(partialParams));
    }
    invokeUpdateRoom(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoom(this.ops["UpdateRoom"].applicator.apply(partialParams));
    }
    invokeUpdateRoomMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoomMembership(this.ops["UpdateRoomMembership"].applicator.apply(partialParams));
    }
    invokeUpdateSipMediaApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipMediaApplication(this.ops["UpdateSipMediaApplication"].applicator.apply(partialParams));
    }
    invokeUpdateSipMediaApplicationCall(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipMediaApplicationCall(this.ops["UpdateSipMediaApplicationCall"].applicator.apply(partialParams));
    }
    invokeUpdateSipRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSipRule(this.ops["UpdateSipRule"].applicator.apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(this.ops["UpdateUser"].applicator.apply(partialParams));
    }
    invokeUpdateUserSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserSettings(this.ops["UpdateUserSettings"].applicator.apply(partialParams));
    }
    invokeUpdateVoiceConnector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceConnector(this.ops["UpdateVoiceConnector"].applicator.apply(partialParams));
    }
    invokeUpdateVoiceConnectorGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceConnectorGroup(this.ops["UpdateVoiceConnectorGroup"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
