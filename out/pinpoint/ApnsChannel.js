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
const schema = require("../apis/pinpoint-2016-12-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.pinpoint.ApnsChannel {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Pinpoint();
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
    invokeCreateApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(this.ops["CreateApp"].applicator.apply(partialParams));
    }
    invokeCreateCampaign(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCampaign(this.ops["CreateCampaign"].applicator.apply(partialParams));
    }
    invokeCreateEmailTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEmailTemplate(this.ops["CreateEmailTemplate"].applicator.apply(partialParams));
    }
    invokeCreateExportJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createExportJob(this.ops["CreateExportJob"].applicator.apply(partialParams));
    }
    invokeCreateImportJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImportJob(this.ops["CreateImportJob"].applicator.apply(partialParams));
    }
    invokeCreateInAppTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInAppTemplate(this.ops["CreateInAppTemplate"].applicator.apply(partialParams));
    }
    invokeCreateJourney(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJourney(this.ops["CreateJourney"].applicator.apply(partialParams));
    }
    invokeCreatePushTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPushTemplate(this.ops["CreatePushTemplate"].applicator.apply(partialParams));
    }
    invokeCreateRecommenderConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRecommenderConfiguration(this.ops["CreateRecommenderConfiguration"].applicator.apply(partialParams));
    }
    invokeCreateSegment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSegment(this.ops["CreateSegment"].applicator.apply(partialParams));
    }
    invokeCreateSmsTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSmsTemplate(this.ops["CreateSmsTemplate"].applicator.apply(partialParams));
    }
    invokeCreateVoiceTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceTemplate(this.ops["CreateVoiceTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteAdmChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAdmChannel(this.ops["DeleteAdmChannel"].applicator.apply(partialParams));
    }
    invokeDeleteApnsChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsChannel(this.ops["DeleteApnsChannel"].applicator.apply(partialParams));
    }
    invokeDeleteApnsSandboxChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsSandboxChannel(this.ops["DeleteApnsSandboxChannel"].applicator.apply(partialParams));
    }
    invokeDeleteApnsVoipChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsVoipChannel(this.ops["DeleteApnsVoipChannel"].applicator.apply(partialParams));
    }
    invokeDeleteApnsVoipSandboxChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsVoipSandboxChannel(this.ops["DeleteApnsVoipSandboxChannel"].applicator.apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(this.ops["DeleteApp"].applicator.apply(partialParams));
    }
    invokeDeleteBaiduChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBaiduChannel(this.ops["DeleteBaiduChannel"].applicator.apply(partialParams));
    }
    invokeDeleteCampaign(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCampaign(this.ops["DeleteCampaign"].applicator.apply(partialParams));
    }
    invokeDeleteEmailChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEmailChannel(this.ops["DeleteEmailChannel"].applicator.apply(partialParams));
    }
    invokeDeleteEmailTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEmailTemplate(this.ops["DeleteEmailTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].applicator.apply(partialParams));
    }
    invokeDeleteEventStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventStream(this.ops["DeleteEventStream"].applicator.apply(partialParams));
    }
    invokeDeleteGcmChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGcmChannel(this.ops["DeleteGcmChannel"].applicator.apply(partialParams));
    }
    invokeDeleteInAppTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInAppTemplate(this.ops["DeleteInAppTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteJourney(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJourney(this.ops["DeleteJourney"].applicator.apply(partialParams));
    }
    invokeDeletePushTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePushTemplate(this.ops["DeletePushTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteRecommenderConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRecommenderConfiguration(this.ops["DeleteRecommenderConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteSegment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSegment(this.ops["DeleteSegment"].applicator.apply(partialParams));
    }
    invokeDeleteSmsChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSmsChannel(this.ops["DeleteSmsChannel"].applicator.apply(partialParams));
    }
    invokeDeleteSmsTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSmsTemplate(this.ops["DeleteSmsTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteUserEndpoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserEndpoints(this.ops["DeleteUserEndpoints"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceChannel(this.ops["DeleteVoiceChannel"].applicator.apply(partialParams));
    }
    invokeDeleteVoiceTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceTemplate(this.ops["DeleteVoiceTemplate"].applicator.apply(partialParams));
    }
    invokeGetAdmChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAdmChannel(this.ops["GetAdmChannel"].applicator.apply(partialParams));
    }
    invokeGetApnsChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsChannel(this.ops["GetApnsChannel"].applicator.apply(partialParams));
    }
    invokeGetApnsSandboxChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsSandboxChannel(this.ops["GetApnsSandboxChannel"].applicator.apply(partialParams));
    }
    invokeGetApnsVoipChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsVoipChannel(this.ops["GetApnsVoipChannel"].applicator.apply(partialParams));
    }
    invokeGetApnsVoipSandboxChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsVoipSandboxChannel(this.ops["GetApnsVoipSandboxChannel"].applicator.apply(partialParams));
    }
    invokeGetApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApp(this.ops["GetApp"].applicator.apply(partialParams));
    }
    invokeGetApplicationDateRangeKpi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplicationDateRangeKpi(this.ops["GetApplicationDateRangeKpi"].applicator.apply(partialParams));
    }
    invokeGetApplicationSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplicationSettings(this.ops["GetApplicationSettings"].applicator.apply(partialParams));
    }
    invokeGetBaiduChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBaiduChannel(this.ops["GetBaiduChannel"].applicator.apply(partialParams));
    }
    invokeGetCampaign(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaign(this.ops["GetCampaign"].applicator.apply(partialParams));
    }
    invokeGetCampaignActivities(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignActivities(this.ops["GetCampaignActivities"].applicator.apply(partialParams));
    }
    invokeGetCampaignDateRangeKpi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignDateRangeKpi(this.ops["GetCampaignDateRangeKpi"].applicator.apply(partialParams));
    }
    invokeGetCampaignVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignVersion(this.ops["GetCampaignVersion"].applicator.apply(partialParams));
    }
    invokeGetCampaignVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignVersions(this.ops["GetCampaignVersions"].applicator.apply(partialParams));
    }
    invokeGetCampaigns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaigns(this.ops["GetCampaigns"].applicator.apply(partialParams));
    }
    invokeGetChannels(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChannels(this.ops["GetChannels"].applicator.apply(partialParams));
    }
    invokeGetEmailChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEmailChannel(this.ops["GetEmailChannel"].applicator.apply(partialParams));
    }
    invokeGetEmailTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEmailTemplate(this.ops["GetEmailTemplate"].applicator.apply(partialParams));
    }
    invokeGetEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEndpoint(this.ops["GetEndpoint"].applicator.apply(partialParams));
    }
    invokeGetEventStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventStream(this.ops["GetEventStream"].applicator.apply(partialParams));
    }
    invokeGetExportJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExportJob(this.ops["GetExportJob"].applicator.apply(partialParams));
    }
    invokeGetExportJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExportJobs(this.ops["GetExportJobs"].applicator.apply(partialParams));
    }
    invokeGetGcmChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGcmChannel(this.ops["GetGcmChannel"].applicator.apply(partialParams));
    }
    invokeGetImportJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImportJob(this.ops["GetImportJob"].applicator.apply(partialParams));
    }
    invokeGetImportJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImportJobs(this.ops["GetImportJobs"].applicator.apply(partialParams));
    }
    invokeGetInAppMessages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInAppMessages(this.ops["GetInAppMessages"].applicator.apply(partialParams));
    }
    invokeGetInAppTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInAppTemplate(this.ops["GetInAppTemplate"].applicator.apply(partialParams));
    }
    invokeGetJourney(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourney(this.ops["GetJourney"].applicator.apply(partialParams));
    }
    invokeGetJourneyDateRangeKpi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourneyDateRangeKpi(this.ops["GetJourneyDateRangeKpi"].applicator.apply(partialParams));
    }
    invokeGetJourneyExecutionActivityMetrics(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourneyExecutionActivityMetrics(this.ops["GetJourneyExecutionActivityMetrics"].applicator.apply(partialParams));
    }
    invokeGetJourneyExecutionMetrics(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourneyExecutionMetrics(this.ops["GetJourneyExecutionMetrics"].applicator.apply(partialParams));
    }
    invokeGetPushTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPushTemplate(this.ops["GetPushTemplate"].applicator.apply(partialParams));
    }
    invokeGetRecommenderConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRecommenderConfiguration(this.ops["GetRecommenderConfiguration"].applicator.apply(partialParams));
    }
    invokeGetSegment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegment(this.ops["GetSegment"].applicator.apply(partialParams));
    }
    invokeGetSegmentExportJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentExportJobs(this.ops["GetSegmentExportJobs"].applicator.apply(partialParams));
    }
    invokeGetSegmentImportJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentImportJobs(this.ops["GetSegmentImportJobs"].applicator.apply(partialParams));
    }
    invokeGetSegmentVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentVersion(this.ops["GetSegmentVersion"].applicator.apply(partialParams));
    }
    invokeGetSegmentVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentVersions(this.ops["GetSegmentVersions"].applicator.apply(partialParams));
    }
    invokeGetSegments(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegments(this.ops["GetSegments"].applicator.apply(partialParams));
    }
    invokeGetSmsChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSmsChannel(this.ops["GetSmsChannel"].applicator.apply(partialParams));
    }
    invokeGetSmsTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSmsTemplate(this.ops["GetSmsTemplate"].applicator.apply(partialParams));
    }
    invokeGetUserEndpoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserEndpoints(this.ops["GetUserEndpoints"].applicator.apply(partialParams));
    }
    invokeGetVoiceChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceChannel(this.ops["GetVoiceChannel"].applicator.apply(partialParams));
    }
    invokeGetVoiceTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceTemplate(this.ops["GetVoiceTemplate"].applicator.apply(partialParams));
    }
    invokeListJourneys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJourneys(this.ops["ListJourneys"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListTemplateVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplateVersions(this.ops["ListTemplateVersions"].applicator.apply(partialParams));
    }
    invokePhoneNumberValidate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.phoneNumberValidate(this.ops["PhoneNumberValidate"].applicator.apply(partialParams));
    }
    invokePutEventStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEventStream(this.ops["PutEventStream"].applicator.apply(partialParams));
    }
    invokePutEvents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEvents(this.ops["PutEvents"].applicator.apply(partialParams));
    }
    invokeRemoveAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeAttributes(this.ops["RemoveAttributes"].applicator.apply(partialParams));
    }
    invokeSendMessages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendMessages(this.ops["SendMessages"].applicator.apply(partialParams));
    }
    invokeSendOTPMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendOTPMessage(this.ops["SendOTPMessage"].applicator.apply(partialParams));
    }
    invokeSendUsersMessages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendUsersMessages(this.ops["SendUsersMessages"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateAdmChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAdmChannel(this.ops["UpdateAdmChannel"].applicator.apply(partialParams));
    }
    invokeUpdateApnsChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsChannel(this.ops["UpdateApnsChannel"].applicator.apply(partialParams));
    }
    invokeUpdateApnsSandboxChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsSandboxChannel(this.ops["UpdateApnsSandboxChannel"].applicator.apply(partialParams));
    }
    invokeUpdateApnsVoipChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsVoipChannel(this.ops["UpdateApnsVoipChannel"].applicator.apply(partialParams));
    }
    invokeUpdateApnsVoipSandboxChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsVoipSandboxChannel(this.ops["UpdateApnsVoipSandboxChannel"].applicator.apply(partialParams));
    }
    invokeUpdateApplicationSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplicationSettings(this.ops["UpdateApplicationSettings"].applicator.apply(partialParams));
    }
    invokeUpdateBaiduChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBaiduChannel(this.ops["UpdateBaiduChannel"].applicator.apply(partialParams));
    }
    invokeUpdateCampaign(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCampaign(this.ops["UpdateCampaign"].applicator.apply(partialParams));
    }
    invokeUpdateEmailChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEmailChannel(this.ops["UpdateEmailChannel"].applicator.apply(partialParams));
    }
    invokeUpdateEmailTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEmailTemplate(this.ops["UpdateEmailTemplate"].applicator.apply(partialParams));
    }
    invokeUpdateEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpoint(this.ops["UpdateEndpoint"].applicator.apply(partialParams));
    }
    invokeUpdateEndpointsBatch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpointsBatch(this.ops["UpdateEndpointsBatch"].applicator.apply(partialParams));
    }
    invokeUpdateGcmChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGcmChannel(this.ops["UpdateGcmChannel"].applicator.apply(partialParams));
    }
    invokeUpdateInAppTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInAppTemplate(this.ops["UpdateInAppTemplate"].applicator.apply(partialParams));
    }
    invokeUpdateJourney(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJourney(this.ops["UpdateJourney"].applicator.apply(partialParams));
    }
    invokeUpdateJourneyState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJourneyState(this.ops["UpdateJourneyState"].applicator.apply(partialParams));
    }
    invokeUpdatePushTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePushTemplate(this.ops["UpdatePushTemplate"].applicator.apply(partialParams));
    }
    invokeUpdateRecommenderConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRecommenderConfiguration(this.ops["UpdateRecommenderConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateSegment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSegment(this.ops["UpdateSegment"].applicator.apply(partialParams));
    }
    invokeUpdateSmsChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSmsChannel(this.ops["UpdateSmsChannel"].applicator.apply(partialParams));
    }
    invokeUpdateSmsTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSmsTemplate(this.ops["UpdateSmsTemplate"].applicator.apply(partialParams));
    }
    invokeUpdateTemplateActiveVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplateActiveVersion(this.ops["UpdateTemplateActiveVersion"].applicator.apply(partialParams));
    }
    invokeUpdateVoiceChannel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceChannel(this.ops["UpdateVoiceChannel"].applicator.apply(partialParams));
    }
    invokeUpdateVoiceTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceTemplate(this.ops["UpdateVoiceTemplate"].applicator.apply(partialParams));
    }
    invokeVerifyOTPMessage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.verifyOTPMessage(this.ops["VerifyOTPMessage"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
