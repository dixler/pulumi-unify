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
class default_1 extends aws.pinpoint.BaiduChannel {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Pinpoint();
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
    invokeCreateCampaign(partialParams) {
        this.boot();
        return this.client.createCampaign(this.ops["CreateCampaign"].apply(partialParams));
    }
    invokeCreateExportJob(partialParams) {
        this.boot();
        return this.client.createExportJob(this.ops["CreateExportJob"].apply(partialParams));
    }
    invokeCreateImportJob(partialParams) {
        this.boot();
        return this.client.createImportJob(this.ops["CreateImportJob"].apply(partialParams));
    }
    invokeCreateJourney(partialParams) {
        this.boot();
        return this.client.createJourney(this.ops["CreateJourney"].apply(partialParams));
    }
    invokeCreateSegment(partialParams) {
        this.boot();
        return this.client.createSegment(this.ops["CreateSegment"].apply(partialParams));
    }
    invokeDeleteAdmChannel(partialParams) {
        this.boot();
        return this.client.deleteAdmChannel(this.ops["DeleteAdmChannel"].apply(partialParams));
    }
    invokeDeleteApnsChannel(partialParams) {
        this.boot();
        return this.client.deleteApnsChannel(this.ops["DeleteApnsChannel"].apply(partialParams));
    }
    invokeDeleteApnsSandboxChannel(partialParams) {
        this.boot();
        return this.client.deleteApnsSandboxChannel(this.ops["DeleteApnsSandboxChannel"].apply(partialParams));
    }
    invokeDeleteApnsVoipChannel(partialParams) {
        this.boot();
        return this.client.deleteApnsVoipChannel(this.ops["DeleteApnsVoipChannel"].apply(partialParams));
    }
    invokeDeleteApnsVoipSandboxChannel(partialParams) {
        this.boot();
        return this.client.deleteApnsVoipSandboxChannel(this.ops["DeleteApnsVoipSandboxChannel"].apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        this.boot();
        return this.client.deleteApp(this.ops["DeleteApp"].apply(partialParams));
    }
    invokeDeleteBaiduChannel(partialParams) {
        this.boot();
        return this.client.deleteBaiduChannel(this.ops["DeleteBaiduChannel"].apply(partialParams));
    }
    invokeDeleteCampaign(partialParams) {
        this.boot();
        return this.client.deleteCampaign(this.ops["DeleteCampaign"].apply(partialParams));
    }
    invokeDeleteEmailChannel(partialParams) {
        this.boot();
        return this.client.deleteEmailChannel(this.ops["DeleteEmailChannel"].apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        this.boot();
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].apply(partialParams));
    }
    invokeDeleteEventStream(partialParams) {
        this.boot();
        return this.client.deleteEventStream(this.ops["DeleteEventStream"].apply(partialParams));
    }
    invokeDeleteGcmChannel(partialParams) {
        this.boot();
        return this.client.deleteGcmChannel(this.ops["DeleteGcmChannel"].apply(partialParams));
    }
    invokeDeleteJourney(partialParams) {
        this.boot();
        return this.client.deleteJourney(this.ops["DeleteJourney"].apply(partialParams));
    }
    invokeDeleteSegment(partialParams) {
        this.boot();
        return this.client.deleteSegment(this.ops["DeleteSegment"].apply(partialParams));
    }
    invokeDeleteSmsChannel(partialParams) {
        this.boot();
        return this.client.deleteSmsChannel(this.ops["DeleteSmsChannel"].apply(partialParams));
    }
    invokeDeleteUserEndpoints(partialParams) {
        this.boot();
        return this.client.deleteUserEndpoints(this.ops["DeleteUserEndpoints"].apply(partialParams));
    }
    invokeDeleteVoiceChannel(partialParams) {
        this.boot();
        return this.client.deleteVoiceChannel(this.ops["DeleteVoiceChannel"].apply(partialParams));
    }
    invokeGetAdmChannel(partialParams) {
        this.boot();
        return this.client.getAdmChannel(this.ops["GetAdmChannel"].apply(partialParams));
    }
    invokeGetApnsChannel(partialParams) {
        this.boot();
        return this.client.getApnsChannel(this.ops["GetApnsChannel"].apply(partialParams));
    }
    invokeGetApnsSandboxChannel(partialParams) {
        this.boot();
        return this.client.getApnsSandboxChannel(this.ops["GetApnsSandboxChannel"].apply(partialParams));
    }
    invokeGetApnsVoipChannel(partialParams) {
        this.boot();
        return this.client.getApnsVoipChannel(this.ops["GetApnsVoipChannel"].apply(partialParams));
    }
    invokeGetApnsVoipSandboxChannel(partialParams) {
        this.boot();
        return this.client.getApnsVoipSandboxChannel(this.ops["GetApnsVoipSandboxChannel"].apply(partialParams));
    }
    invokeGetApp(partialParams) {
        this.boot();
        return this.client.getApp(this.ops["GetApp"].apply(partialParams));
    }
    invokeGetApplicationDateRangeKpi(partialParams) {
        this.boot();
        return this.client.getApplicationDateRangeKpi(this.ops["GetApplicationDateRangeKpi"].apply(partialParams));
    }
    invokeGetApplicationSettings(partialParams) {
        this.boot();
        return this.client.getApplicationSettings(this.ops["GetApplicationSettings"].apply(partialParams));
    }
    invokeGetBaiduChannel(partialParams) {
        this.boot();
        return this.client.getBaiduChannel(this.ops["GetBaiduChannel"].apply(partialParams));
    }
    invokeGetCampaign(partialParams) {
        this.boot();
        return this.client.getCampaign(this.ops["GetCampaign"].apply(partialParams));
    }
    invokeGetCampaignActivities(partialParams) {
        this.boot();
        return this.client.getCampaignActivities(this.ops["GetCampaignActivities"].apply(partialParams));
    }
    invokeGetCampaignDateRangeKpi(partialParams) {
        this.boot();
        return this.client.getCampaignDateRangeKpi(this.ops["GetCampaignDateRangeKpi"].apply(partialParams));
    }
    invokeGetCampaignVersion(partialParams) {
        this.boot();
        return this.client.getCampaignVersion(this.ops["GetCampaignVersion"].apply(partialParams));
    }
    invokeGetCampaignVersions(partialParams) {
        this.boot();
        return this.client.getCampaignVersions(this.ops["GetCampaignVersions"].apply(partialParams));
    }
    invokeGetCampaigns(partialParams) {
        this.boot();
        return this.client.getCampaigns(this.ops["GetCampaigns"].apply(partialParams));
    }
    invokeGetChannels(partialParams) {
        this.boot();
        return this.client.getChannels(this.ops["GetChannels"].apply(partialParams));
    }
    invokeGetEmailChannel(partialParams) {
        this.boot();
        return this.client.getEmailChannel(this.ops["GetEmailChannel"].apply(partialParams));
    }
    invokeGetEndpoint(partialParams) {
        this.boot();
        return this.client.getEndpoint(this.ops["GetEndpoint"].apply(partialParams));
    }
    invokeGetEventStream(partialParams) {
        this.boot();
        return this.client.getEventStream(this.ops["GetEventStream"].apply(partialParams));
    }
    invokeGetExportJob(partialParams) {
        this.boot();
        return this.client.getExportJob(this.ops["GetExportJob"].apply(partialParams));
    }
    invokeGetExportJobs(partialParams) {
        this.boot();
        return this.client.getExportJobs(this.ops["GetExportJobs"].apply(partialParams));
    }
    invokeGetGcmChannel(partialParams) {
        this.boot();
        return this.client.getGcmChannel(this.ops["GetGcmChannel"].apply(partialParams));
    }
    invokeGetImportJob(partialParams) {
        this.boot();
        return this.client.getImportJob(this.ops["GetImportJob"].apply(partialParams));
    }
    invokeGetImportJobs(partialParams) {
        this.boot();
        return this.client.getImportJobs(this.ops["GetImportJobs"].apply(partialParams));
    }
    invokeGetInAppMessages(partialParams) {
        this.boot();
        return this.client.getInAppMessages(this.ops["GetInAppMessages"].apply(partialParams));
    }
    invokeGetJourney(partialParams) {
        this.boot();
        return this.client.getJourney(this.ops["GetJourney"].apply(partialParams));
    }
    invokeGetJourneyDateRangeKpi(partialParams) {
        this.boot();
        return this.client.getJourneyDateRangeKpi(this.ops["GetJourneyDateRangeKpi"].apply(partialParams));
    }
    invokeGetJourneyExecutionActivityMetrics(partialParams) {
        this.boot();
        return this.client.getJourneyExecutionActivityMetrics(this.ops["GetJourneyExecutionActivityMetrics"].apply(partialParams));
    }
    invokeGetJourneyExecutionMetrics(partialParams) {
        this.boot();
        return this.client.getJourneyExecutionMetrics(this.ops["GetJourneyExecutionMetrics"].apply(partialParams));
    }
    invokeGetSegment(partialParams) {
        this.boot();
        return this.client.getSegment(this.ops["GetSegment"].apply(partialParams));
    }
    invokeGetSegmentExportJobs(partialParams) {
        this.boot();
        return this.client.getSegmentExportJobs(this.ops["GetSegmentExportJobs"].apply(partialParams));
    }
    invokeGetSegmentImportJobs(partialParams) {
        this.boot();
        return this.client.getSegmentImportJobs(this.ops["GetSegmentImportJobs"].apply(partialParams));
    }
    invokeGetSegmentVersion(partialParams) {
        this.boot();
        return this.client.getSegmentVersion(this.ops["GetSegmentVersion"].apply(partialParams));
    }
    invokeGetSegmentVersions(partialParams) {
        this.boot();
        return this.client.getSegmentVersions(this.ops["GetSegmentVersions"].apply(partialParams));
    }
    invokeGetSegments(partialParams) {
        this.boot();
        return this.client.getSegments(this.ops["GetSegments"].apply(partialParams));
    }
    invokeGetSmsChannel(partialParams) {
        this.boot();
        return this.client.getSmsChannel(this.ops["GetSmsChannel"].apply(partialParams));
    }
    invokeGetUserEndpoints(partialParams) {
        this.boot();
        return this.client.getUserEndpoints(this.ops["GetUserEndpoints"].apply(partialParams));
    }
    invokeGetVoiceChannel(partialParams) {
        this.boot();
        return this.client.getVoiceChannel(this.ops["GetVoiceChannel"].apply(partialParams));
    }
    invokeListJourneys(partialParams) {
        this.boot();
        return this.client.listJourneys(this.ops["ListJourneys"].apply(partialParams));
    }
    invokePutEventStream(partialParams) {
        this.boot();
        return this.client.putEventStream(this.ops["PutEventStream"].apply(partialParams));
    }
    invokePutEvents(partialParams) {
        this.boot();
        return this.client.putEvents(this.ops["PutEvents"].apply(partialParams));
    }
    invokeRemoveAttributes(partialParams) {
        this.boot();
        return this.client.removeAttributes(this.ops["RemoveAttributes"].apply(partialParams));
    }
    invokeSendMessages(partialParams) {
        this.boot();
        return this.client.sendMessages(this.ops["SendMessages"].apply(partialParams));
    }
    invokeSendOTPMessage(partialParams) {
        this.boot();
        return this.client.sendOTPMessage(this.ops["SendOTPMessage"].apply(partialParams));
    }
    invokeSendUsersMessages(partialParams) {
        this.boot();
        return this.client.sendUsersMessages(this.ops["SendUsersMessages"].apply(partialParams));
    }
    invokeUpdateAdmChannel(partialParams) {
        this.boot();
        return this.client.updateAdmChannel(this.ops["UpdateAdmChannel"].apply(partialParams));
    }
    invokeUpdateApnsChannel(partialParams) {
        this.boot();
        return this.client.updateApnsChannel(this.ops["UpdateApnsChannel"].apply(partialParams));
    }
    invokeUpdateApnsSandboxChannel(partialParams) {
        this.boot();
        return this.client.updateApnsSandboxChannel(this.ops["UpdateApnsSandboxChannel"].apply(partialParams));
    }
    invokeUpdateApnsVoipChannel(partialParams) {
        this.boot();
        return this.client.updateApnsVoipChannel(this.ops["UpdateApnsVoipChannel"].apply(partialParams));
    }
    invokeUpdateApnsVoipSandboxChannel(partialParams) {
        this.boot();
        return this.client.updateApnsVoipSandboxChannel(this.ops["UpdateApnsVoipSandboxChannel"].apply(partialParams));
    }
    invokeUpdateApplicationSettings(partialParams) {
        this.boot();
        return this.client.updateApplicationSettings(this.ops["UpdateApplicationSettings"].apply(partialParams));
    }
    invokeUpdateBaiduChannel(partialParams) {
        this.boot();
        return this.client.updateBaiduChannel(this.ops["UpdateBaiduChannel"].apply(partialParams));
    }
    invokeUpdateCampaign(partialParams) {
        this.boot();
        return this.client.updateCampaign(this.ops["UpdateCampaign"].apply(partialParams));
    }
    invokeUpdateEmailChannel(partialParams) {
        this.boot();
        return this.client.updateEmailChannel(this.ops["UpdateEmailChannel"].apply(partialParams));
    }
    invokeUpdateEndpoint(partialParams) {
        this.boot();
        return this.client.updateEndpoint(this.ops["UpdateEndpoint"].apply(partialParams));
    }
    invokeUpdateEndpointsBatch(partialParams) {
        this.boot();
        return this.client.updateEndpointsBatch(this.ops["UpdateEndpointsBatch"].apply(partialParams));
    }
    invokeUpdateGcmChannel(partialParams) {
        this.boot();
        return this.client.updateGcmChannel(this.ops["UpdateGcmChannel"].apply(partialParams));
    }
    invokeUpdateJourney(partialParams) {
        this.boot();
        return this.client.updateJourney(this.ops["UpdateJourney"].apply(partialParams));
    }
    invokeUpdateJourneyState(partialParams) {
        this.boot();
        return this.client.updateJourneyState(this.ops["UpdateJourneyState"].apply(partialParams));
    }
    invokeUpdateSegment(partialParams) {
        this.boot();
        return this.client.updateSegment(this.ops["UpdateSegment"].apply(partialParams));
    }
    invokeUpdateSmsChannel(partialParams) {
        this.boot();
        return this.client.updateSmsChannel(this.ops["UpdateSmsChannel"].apply(partialParams));
    }
    invokeUpdateVoiceChannel(partialParams) {
        this.boot();
        return this.client.updateVoiceChannel(this.ops["UpdateVoiceChannel"].apply(partialParams));
    }
    invokeVerifyOTPMessage(partialParams) {
        this.boot();
        return this.client.verifyOTPMessage(this.ops["VerifyOTPMessage"].apply(partialParams));
    }
}
exports.default = default_1;
