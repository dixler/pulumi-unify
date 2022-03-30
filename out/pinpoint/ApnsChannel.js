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
class default_1 extends aws.pinpoint.ApnsChannel {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Pinpoint();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/pinpoint-2016-12-01.normal.json"), this.client);
    }
    invokeCreateApp(partialParams) {
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreateCampaign(partialParams) {
        return this.client.createCampaign(this.ops["CreateCampaign"].apply(partialParams));
    }
    invokeCreateEmailTemplate(partialParams) {
        return this.client.createEmailTemplate(this.ops["CreateEmailTemplate"].apply(partialParams));
    }
    invokeCreateExportJob(partialParams) {
        return this.client.createExportJob(this.ops["CreateExportJob"].apply(partialParams));
    }
    invokeCreateImportJob(partialParams) {
        return this.client.createImportJob(this.ops["CreateImportJob"].apply(partialParams));
    }
    invokeCreateInAppTemplate(partialParams) {
        return this.client.createInAppTemplate(this.ops["CreateInAppTemplate"].apply(partialParams));
    }
    invokeCreateJourney(partialParams) {
        return this.client.createJourney(this.ops["CreateJourney"].apply(partialParams));
    }
    invokeCreatePushTemplate(partialParams) {
        return this.client.createPushTemplate(this.ops["CreatePushTemplate"].apply(partialParams));
    }
    invokeCreateRecommenderConfiguration(partialParams) {
        return this.client.createRecommenderConfiguration(this.ops["CreateRecommenderConfiguration"].apply(partialParams));
    }
    invokeCreateSegment(partialParams) {
        return this.client.createSegment(this.ops["CreateSegment"].apply(partialParams));
    }
    invokeCreateSmsTemplate(partialParams) {
        return this.client.createSmsTemplate(this.ops["CreateSmsTemplate"].apply(partialParams));
    }
    invokeCreateVoiceTemplate(partialParams) {
        return this.client.createVoiceTemplate(this.ops["CreateVoiceTemplate"].apply(partialParams));
    }
    invokeDeleteAdmChannel(partialParams) {
        return this.client.deleteAdmChannel(this.ops["DeleteAdmChannel"].apply(partialParams));
    }
    invokeDeleteApnsChannel(partialParams) {
        return this.client.deleteApnsChannel(this.ops["DeleteApnsChannel"].apply(partialParams));
    }
    invokeDeleteApnsSandboxChannel(partialParams) {
        return this.client.deleteApnsSandboxChannel(this.ops["DeleteApnsSandboxChannel"].apply(partialParams));
    }
    invokeDeleteApnsVoipChannel(partialParams) {
        return this.client.deleteApnsVoipChannel(this.ops["DeleteApnsVoipChannel"].apply(partialParams));
    }
    invokeDeleteApnsVoipSandboxChannel(partialParams) {
        return this.client.deleteApnsVoipSandboxChannel(this.ops["DeleteApnsVoipSandboxChannel"].apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        return this.client.deleteApp(this.ops["DeleteApp"].apply(partialParams));
    }
    invokeDeleteBaiduChannel(partialParams) {
        return this.client.deleteBaiduChannel(this.ops["DeleteBaiduChannel"].apply(partialParams));
    }
    invokeDeleteCampaign(partialParams) {
        return this.client.deleteCampaign(this.ops["DeleteCampaign"].apply(partialParams));
    }
    invokeDeleteEmailChannel(partialParams) {
        return this.client.deleteEmailChannel(this.ops["DeleteEmailChannel"].apply(partialParams));
    }
    invokeDeleteEmailTemplate(partialParams) {
        return this.client.deleteEmailTemplate(this.ops["DeleteEmailTemplate"].apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].apply(partialParams));
    }
    invokeDeleteEventStream(partialParams) {
        return this.client.deleteEventStream(this.ops["DeleteEventStream"].apply(partialParams));
    }
    invokeDeleteGcmChannel(partialParams) {
        return this.client.deleteGcmChannel(this.ops["DeleteGcmChannel"].apply(partialParams));
    }
    invokeDeleteInAppTemplate(partialParams) {
        return this.client.deleteInAppTemplate(this.ops["DeleteInAppTemplate"].apply(partialParams));
    }
    invokeDeleteJourney(partialParams) {
        return this.client.deleteJourney(this.ops["DeleteJourney"].apply(partialParams));
    }
    invokeDeletePushTemplate(partialParams) {
        return this.client.deletePushTemplate(this.ops["DeletePushTemplate"].apply(partialParams));
    }
    invokeDeleteRecommenderConfiguration(partialParams) {
        return this.client.deleteRecommenderConfiguration(this.ops["DeleteRecommenderConfiguration"].apply(partialParams));
    }
    invokeDeleteSegment(partialParams) {
        return this.client.deleteSegment(this.ops["DeleteSegment"].apply(partialParams));
    }
    invokeDeleteSmsChannel(partialParams) {
        return this.client.deleteSmsChannel(this.ops["DeleteSmsChannel"].apply(partialParams));
    }
    invokeDeleteSmsTemplate(partialParams) {
        return this.client.deleteSmsTemplate(this.ops["DeleteSmsTemplate"].apply(partialParams));
    }
    invokeDeleteUserEndpoints(partialParams) {
        return this.client.deleteUserEndpoints(this.ops["DeleteUserEndpoints"].apply(partialParams));
    }
    invokeDeleteVoiceChannel(partialParams) {
        return this.client.deleteVoiceChannel(this.ops["DeleteVoiceChannel"].apply(partialParams));
    }
    invokeDeleteVoiceTemplate(partialParams) {
        return this.client.deleteVoiceTemplate(this.ops["DeleteVoiceTemplate"].apply(partialParams));
    }
    invokeGetAdmChannel(partialParams) {
        return this.client.getAdmChannel(this.ops["GetAdmChannel"].apply(partialParams));
    }
    invokeGetApnsChannel(partialParams) {
        return this.client.getApnsChannel(this.ops["GetApnsChannel"].apply(partialParams));
    }
    invokeGetApnsSandboxChannel(partialParams) {
        return this.client.getApnsSandboxChannel(this.ops["GetApnsSandboxChannel"].apply(partialParams));
    }
    invokeGetApnsVoipChannel(partialParams) {
        return this.client.getApnsVoipChannel(this.ops["GetApnsVoipChannel"].apply(partialParams));
    }
    invokeGetApnsVoipSandboxChannel(partialParams) {
        return this.client.getApnsVoipSandboxChannel(this.ops["GetApnsVoipSandboxChannel"].apply(partialParams));
    }
    invokeGetApp(partialParams) {
        return this.client.getApp(this.ops["GetApp"].apply(partialParams));
    }
    invokeGetApplicationDateRangeKpi(partialParams) {
        return this.client.getApplicationDateRangeKpi(this.ops["GetApplicationDateRangeKpi"].apply(partialParams));
    }
    invokeGetApplicationSettings(partialParams) {
        return this.client.getApplicationSettings(this.ops["GetApplicationSettings"].apply(partialParams));
    }
    invokeGetBaiduChannel(partialParams) {
        return this.client.getBaiduChannel(this.ops["GetBaiduChannel"].apply(partialParams));
    }
    invokeGetCampaign(partialParams) {
        return this.client.getCampaign(this.ops["GetCampaign"].apply(partialParams));
    }
    invokeGetCampaignActivities(partialParams) {
        return this.client.getCampaignActivities(this.ops["GetCampaignActivities"].apply(partialParams));
    }
    invokeGetCampaignDateRangeKpi(partialParams) {
        return this.client.getCampaignDateRangeKpi(this.ops["GetCampaignDateRangeKpi"].apply(partialParams));
    }
    invokeGetCampaignVersion(partialParams) {
        return this.client.getCampaignVersion(this.ops["GetCampaignVersion"].apply(partialParams));
    }
    invokeGetCampaignVersions(partialParams) {
        return this.client.getCampaignVersions(this.ops["GetCampaignVersions"].apply(partialParams));
    }
    invokeGetCampaigns(partialParams) {
        return this.client.getCampaigns(this.ops["GetCampaigns"].apply(partialParams));
    }
    invokeGetChannels(partialParams) {
        return this.client.getChannels(this.ops["GetChannels"].apply(partialParams));
    }
    invokeGetEmailChannel(partialParams) {
        return this.client.getEmailChannel(this.ops["GetEmailChannel"].apply(partialParams));
    }
    invokeGetEmailTemplate(partialParams) {
        return this.client.getEmailTemplate(this.ops["GetEmailTemplate"].apply(partialParams));
    }
    invokeGetEndpoint(partialParams) {
        return this.client.getEndpoint(this.ops["GetEndpoint"].apply(partialParams));
    }
    invokeGetEventStream(partialParams) {
        return this.client.getEventStream(this.ops["GetEventStream"].apply(partialParams));
    }
    invokeGetExportJob(partialParams) {
        return this.client.getExportJob(this.ops["GetExportJob"].apply(partialParams));
    }
    invokeGetExportJobs(partialParams) {
        return this.client.getExportJobs(this.ops["GetExportJobs"].apply(partialParams));
    }
    invokeGetGcmChannel(partialParams) {
        return this.client.getGcmChannel(this.ops["GetGcmChannel"].apply(partialParams));
    }
    invokeGetImportJob(partialParams) {
        return this.client.getImportJob(this.ops["GetImportJob"].apply(partialParams));
    }
    invokeGetImportJobs(partialParams) {
        return this.client.getImportJobs(this.ops["GetImportJobs"].apply(partialParams));
    }
    invokeGetInAppMessages(partialParams) {
        return this.client.getInAppMessages(this.ops["GetInAppMessages"].apply(partialParams));
    }
    invokeGetInAppTemplate(partialParams) {
        return this.client.getInAppTemplate(this.ops["GetInAppTemplate"].apply(partialParams));
    }
    invokeGetJourney(partialParams) {
        return this.client.getJourney(this.ops["GetJourney"].apply(partialParams));
    }
    invokeGetJourneyDateRangeKpi(partialParams) {
        return this.client.getJourneyDateRangeKpi(this.ops["GetJourneyDateRangeKpi"].apply(partialParams));
    }
    invokeGetJourneyExecutionActivityMetrics(partialParams) {
        return this.client.getJourneyExecutionActivityMetrics(this.ops["GetJourneyExecutionActivityMetrics"].apply(partialParams));
    }
    invokeGetJourneyExecutionMetrics(partialParams) {
        return this.client.getJourneyExecutionMetrics(this.ops["GetJourneyExecutionMetrics"].apply(partialParams));
    }
    invokeGetPushTemplate(partialParams) {
        return this.client.getPushTemplate(this.ops["GetPushTemplate"].apply(partialParams));
    }
    invokeGetRecommenderConfiguration(partialParams) {
        return this.client.getRecommenderConfiguration(this.ops["GetRecommenderConfiguration"].apply(partialParams));
    }
    invokeGetSegment(partialParams) {
        return this.client.getSegment(this.ops["GetSegment"].apply(partialParams));
    }
    invokeGetSegmentExportJobs(partialParams) {
        return this.client.getSegmentExportJobs(this.ops["GetSegmentExportJobs"].apply(partialParams));
    }
    invokeGetSegmentImportJobs(partialParams) {
        return this.client.getSegmentImportJobs(this.ops["GetSegmentImportJobs"].apply(partialParams));
    }
    invokeGetSegmentVersion(partialParams) {
        return this.client.getSegmentVersion(this.ops["GetSegmentVersion"].apply(partialParams));
    }
    invokeGetSegmentVersions(partialParams) {
        return this.client.getSegmentVersions(this.ops["GetSegmentVersions"].apply(partialParams));
    }
    invokeGetSegments(partialParams) {
        return this.client.getSegments(this.ops["GetSegments"].apply(partialParams));
    }
    invokeGetSmsChannel(partialParams) {
        return this.client.getSmsChannel(this.ops["GetSmsChannel"].apply(partialParams));
    }
    invokeGetSmsTemplate(partialParams) {
        return this.client.getSmsTemplate(this.ops["GetSmsTemplate"].apply(partialParams));
    }
    invokeGetUserEndpoints(partialParams) {
        return this.client.getUserEndpoints(this.ops["GetUserEndpoints"].apply(partialParams));
    }
    invokeGetVoiceChannel(partialParams) {
        return this.client.getVoiceChannel(this.ops["GetVoiceChannel"].apply(partialParams));
    }
    invokeGetVoiceTemplate(partialParams) {
        return this.client.getVoiceTemplate(this.ops["GetVoiceTemplate"].apply(partialParams));
    }
    invokeListJourneys(partialParams) {
        return this.client.listJourneys(this.ops["ListJourneys"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTemplateVersions(partialParams) {
        return this.client.listTemplateVersions(this.ops["ListTemplateVersions"].apply(partialParams));
    }
    invokePhoneNumberValidate(partialParams) {
        return this.client.phoneNumberValidate(this.ops["PhoneNumberValidate"].apply(partialParams));
    }
    invokePutEventStream(partialParams) {
        return this.client.putEventStream(this.ops["PutEventStream"].apply(partialParams));
    }
    invokePutEvents(partialParams) {
        return this.client.putEvents(this.ops["PutEvents"].apply(partialParams));
    }
    invokeRemoveAttributes(partialParams) {
        return this.client.removeAttributes(this.ops["RemoveAttributes"].apply(partialParams));
    }
    invokeSendMessages(partialParams) {
        return this.client.sendMessages(this.ops["SendMessages"].apply(partialParams));
    }
    invokeSendOTPMessage(partialParams) {
        return this.client.sendOTPMessage(this.ops["SendOTPMessage"].apply(partialParams));
    }
    invokeSendUsersMessages(partialParams) {
        return this.client.sendUsersMessages(this.ops["SendUsersMessages"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAdmChannel(partialParams) {
        return this.client.updateAdmChannel(this.ops["UpdateAdmChannel"].apply(partialParams));
    }
    invokeUpdateApnsChannel(partialParams) {
        return this.client.updateApnsChannel(this.ops["UpdateApnsChannel"].apply(partialParams));
    }
    invokeUpdateApnsSandboxChannel(partialParams) {
        return this.client.updateApnsSandboxChannel(this.ops["UpdateApnsSandboxChannel"].apply(partialParams));
    }
    invokeUpdateApnsVoipChannel(partialParams) {
        return this.client.updateApnsVoipChannel(this.ops["UpdateApnsVoipChannel"].apply(partialParams));
    }
    invokeUpdateApnsVoipSandboxChannel(partialParams) {
        return this.client.updateApnsVoipSandboxChannel(this.ops["UpdateApnsVoipSandboxChannel"].apply(partialParams));
    }
    invokeUpdateApplicationSettings(partialParams) {
        return this.client.updateApplicationSettings(this.ops["UpdateApplicationSettings"].apply(partialParams));
    }
    invokeUpdateBaiduChannel(partialParams) {
        return this.client.updateBaiduChannel(this.ops["UpdateBaiduChannel"].apply(partialParams));
    }
    invokeUpdateCampaign(partialParams) {
        return this.client.updateCampaign(this.ops["UpdateCampaign"].apply(partialParams));
    }
    invokeUpdateEmailChannel(partialParams) {
        return this.client.updateEmailChannel(this.ops["UpdateEmailChannel"].apply(partialParams));
    }
    invokeUpdateEmailTemplate(partialParams) {
        return this.client.updateEmailTemplate(this.ops["UpdateEmailTemplate"].apply(partialParams));
    }
    invokeUpdateEndpoint(partialParams) {
        return this.client.updateEndpoint(this.ops["UpdateEndpoint"].apply(partialParams));
    }
    invokeUpdateEndpointsBatch(partialParams) {
        return this.client.updateEndpointsBatch(this.ops["UpdateEndpointsBatch"].apply(partialParams));
    }
    invokeUpdateGcmChannel(partialParams) {
        return this.client.updateGcmChannel(this.ops["UpdateGcmChannel"].apply(partialParams));
    }
    invokeUpdateInAppTemplate(partialParams) {
        return this.client.updateInAppTemplate(this.ops["UpdateInAppTemplate"].apply(partialParams));
    }
    invokeUpdateJourney(partialParams) {
        return this.client.updateJourney(this.ops["UpdateJourney"].apply(partialParams));
    }
    invokeUpdateJourneyState(partialParams) {
        return this.client.updateJourneyState(this.ops["UpdateJourneyState"].apply(partialParams));
    }
    invokeUpdatePushTemplate(partialParams) {
        return this.client.updatePushTemplate(this.ops["UpdatePushTemplate"].apply(partialParams));
    }
    invokeUpdateRecommenderConfiguration(partialParams) {
        return this.client.updateRecommenderConfiguration(this.ops["UpdateRecommenderConfiguration"].apply(partialParams));
    }
    invokeUpdateSegment(partialParams) {
        return this.client.updateSegment(this.ops["UpdateSegment"].apply(partialParams));
    }
    invokeUpdateSmsChannel(partialParams) {
        return this.client.updateSmsChannel(this.ops["UpdateSmsChannel"].apply(partialParams));
    }
    invokeUpdateSmsTemplate(partialParams) {
        return this.client.updateSmsTemplate(this.ops["UpdateSmsTemplate"].apply(partialParams));
    }
    invokeUpdateTemplateActiveVersion(partialParams) {
        return this.client.updateTemplateActiveVersion(this.ops["UpdateTemplateActiveVersion"].apply(partialParams));
    }
    invokeUpdateVoiceChannel(partialParams) {
        return this.client.updateVoiceChannel(this.ops["UpdateVoiceChannel"].apply(partialParams));
    }
    invokeUpdateVoiceTemplate(partialParams) {
        return this.client.updateVoiceTemplate(this.ops["UpdateVoiceTemplate"].apply(partialParams));
    }
    invokeVerifyOTPMessage(partialParams) {
        return this.client.verifyOTPMessage(this.ops["VerifyOTPMessage"].apply(partialParams));
    }
}
exports.default = default_1;
