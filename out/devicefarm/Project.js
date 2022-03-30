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
class default_1 extends aws.devicefarm.Project {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DeviceFarm();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/devicefarm-2015-06-23.normal.json"), this.client);
    }
    invokeCreateDevicePool(partialParams) {
        return this.client.createDevicePool(this.ops["CreateDevicePool"].apply(partialParams));
    }
    invokeCreateInstanceProfile(partialParams) {
        return this.client.createInstanceProfile(this.ops["CreateInstanceProfile"].apply(partialParams));
    }
    invokeCreateNetworkProfile(partialParams) {
        return this.client.createNetworkProfile(this.ops["CreateNetworkProfile"].apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        return this.client.createProject(this.ops["CreateProject"].apply(partialParams));
    }
    invokeCreateRemoteAccessSession(partialParams) {
        return this.client.createRemoteAccessSession(this.ops["CreateRemoteAccessSession"].apply(partialParams));
    }
    invokeCreateTestGridProject(partialParams) {
        return this.client.createTestGridProject(this.ops["CreateTestGridProject"].apply(partialParams));
    }
    invokeCreateTestGridUrl(partialParams) {
        return this.client.createTestGridUrl(this.ops["CreateTestGridUrl"].apply(partialParams));
    }
    invokeCreateUpload(partialParams) {
        return this.client.createUpload(this.ops["CreateUpload"].apply(partialParams));
    }
    invokeCreateVPCEConfiguration(partialParams) {
        return this.client.createVPCEConfiguration(this.ops["CreateVPCEConfiguration"].apply(partialParams));
    }
    invokeDeleteDevicePool(partialParams) {
        return this.client.deleteDevicePool(this.ops["DeleteDevicePool"].apply(partialParams));
    }
    invokeDeleteInstanceProfile(partialParams) {
        return this.client.deleteInstanceProfile(this.ops["DeleteInstanceProfile"].apply(partialParams));
    }
    invokeDeleteNetworkProfile(partialParams) {
        return this.client.deleteNetworkProfile(this.ops["DeleteNetworkProfile"].apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        return this.client.deleteProject(this.ops["DeleteProject"].apply(partialParams));
    }
    invokeDeleteRemoteAccessSession(partialParams) {
        return this.client.deleteRemoteAccessSession(this.ops["DeleteRemoteAccessSession"].apply(partialParams));
    }
    invokeDeleteRun(partialParams) {
        return this.client.deleteRun(this.ops["DeleteRun"].apply(partialParams));
    }
    invokeDeleteTestGridProject(partialParams) {
        return this.client.deleteTestGridProject(this.ops["DeleteTestGridProject"].apply(partialParams));
    }
    invokeDeleteUpload(partialParams) {
        return this.client.deleteUpload(this.ops["DeleteUpload"].apply(partialParams));
    }
    invokeDeleteVPCEConfiguration(partialParams) {
        return this.client.deleteVPCEConfiguration(this.ops["DeleteVPCEConfiguration"].apply(partialParams));
    }
    invokeGetDevice(partialParams) {
        return this.client.getDevice(this.ops["GetDevice"].apply(partialParams));
    }
    invokeGetDeviceInstance(partialParams) {
        return this.client.getDeviceInstance(this.ops["GetDeviceInstance"].apply(partialParams));
    }
    invokeGetDevicePool(partialParams) {
        return this.client.getDevicePool(this.ops["GetDevicePool"].apply(partialParams));
    }
    invokeGetDevicePoolCompatibility(partialParams) {
        return this.client.getDevicePoolCompatibility(this.ops["GetDevicePoolCompatibility"].apply(partialParams));
    }
    invokeGetInstanceProfile(partialParams) {
        return this.client.getInstanceProfile(this.ops["GetInstanceProfile"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetNetworkProfile(partialParams) {
        return this.client.getNetworkProfile(this.ops["GetNetworkProfile"].apply(partialParams));
    }
    invokeGetProject(partialParams) {
        return this.client.getProject(this.ops["GetProject"].apply(partialParams));
    }
    invokeGetRemoteAccessSession(partialParams) {
        return this.client.getRemoteAccessSession(this.ops["GetRemoteAccessSession"].apply(partialParams));
    }
    invokeGetRun(partialParams) {
        return this.client.getRun(this.ops["GetRun"].apply(partialParams));
    }
    invokeGetSuite(partialParams) {
        return this.client.getSuite(this.ops["GetSuite"].apply(partialParams));
    }
    invokeGetTest(partialParams) {
        return this.client.getTest(this.ops["GetTest"].apply(partialParams));
    }
    invokeGetTestGridProject(partialParams) {
        return this.client.getTestGridProject(this.ops["GetTestGridProject"].apply(partialParams));
    }
    invokeGetUpload(partialParams) {
        return this.client.getUpload(this.ops["GetUpload"].apply(partialParams));
    }
    invokeGetVPCEConfiguration(partialParams) {
        return this.client.getVPCEConfiguration(this.ops["GetVPCEConfiguration"].apply(partialParams));
    }
    invokeInstallToRemoteAccessSession(partialParams) {
        return this.client.installToRemoteAccessSession(this.ops["InstallToRemoteAccessSession"].apply(partialParams));
    }
    invokeListArtifacts(partialParams) {
        return this.client.listArtifacts(this.ops["ListArtifacts"].apply(partialParams));
    }
    invokeListDevicePools(partialParams) {
        return this.client.listDevicePools(this.ops["ListDevicePools"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListNetworkProfiles(partialParams) {
        return this.client.listNetworkProfiles(this.ops["ListNetworkProfiles"].apply(partialParams));
    }
    invokeListRemoteAccessSessions(partialParams) {
        return this.client.listRemoteAccessSessions(this.ops["ListRemoteAccessSessions"].apply(partialParams));
    }
    invokeListRuns(partialParams) {
        return this.client.listRuns(this.ops["ListRuns"].apply(partialParams));
    }
    invokeListSamples(partialParams) {
        return this.client.listSamples(this.ops["ListSamples"].apply(partialParams));
    }
    invokeListSuites(partialParams) {
        return this.client.listSuites(this.ops["ListSuites"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTestGridSessionActions(partialParams) {
        return this.client.listTestGridSessionActions(this.ops["ListTestGridSessionActions"].apply(partialParams));
    }
    invokeListTestGridSessionArtifacts(partialParams) {
        return this.client.listTestGridSessionArtifacts(this.ops["ListTestGridSessionArtifacts"].apply(partialParams));
    }
    invokeListTestGridSessions(partialParams) {
        return this.client.listTestGridSessions(this.ops["ListTestGridSessions"].apply(partialParams));
    }
    invokeListTests(partialParams) {
        return this.client.listTests(this.ops["ListTests"].apply(partialParams));
    }
    invokeListUniqueProblems(partialParams) {
        return this.client.listUniqueProblems(this.ops["ListUniqueProblems"].apply(partialParams));
    }
    invokeListUploads(partialParams) {
        return this.client.listUploads(this.ops["ListUploads"].apply(partialParams));
    }
    invokePurchaseOffering(partialParams) {
        return this.client.purchaseOffering(this.ops["PurchaseOffering"].apply(partialParams));
    }
    invokeRenewOffering(partialParams) {
        return this.client.renewOffering(this.ops["RenewOffering"].apply(partialParams));
    }
    invokeScheduleRun(partialParams) {
        return this.client.scheduleRun(this.ops["ScheduleRun"].apply(partialParams));
    }
    invokeStopJob(partialParams) {
        return this.client.stopJob(this.ops["StopJob"].apply(partialParams));
    }
    invokeStopRemoteAccessSession(partialParams) {
        return this.client.stopRemoteAccessSession(this.ops["StopRemoteAccessSession"].apply(partialParams));
    }
    invokeStopRun(partialParams) {
        return this.client.stopRun(this.ops["StopRun"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDeviceInstance(partialParams) {
        return this.client.updateDeviceInstance(this.ops["UpdateDeviceInstance"].apply(partialParams));
    }
    invokeUpdateDevicePool(partialParams) {
        return this.client.updateDevicePool(this.ops["UpdateDevicePool"].apply(partialParams));
    }
    invokeUpdateInstanceProfile(partialParams) {
        return this.client.updateInstanceProfile(this.ops["UpdateInstanceProfile"].apply(partialParams));
    }
    invokeUpdateNetworkProfile(partialParams) {
        return this.client.updateNetworkProfile(this.ops["UpdateNetworkProfile"].apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        return this.client.updateProject(this.ops["UpdateProject"].apply(partialParams));
    }
    invokeUpdateTestGridProject(partialParams) {
        return this.client.updateTestGridProject(this.ops["UpdateTestGridProject"].apply(partialParams));
    }
    invokeUpdateUpload(partialParams) {
        return this.client.updateUpload(this.ops["UpdateUpload"].apply(partialParams));
    }
    invokeUpdateVPCEConfiguration(partialParams) {
        return this.client.updateVPCEConfiguration(this.ops["UpdateVPCEConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
