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
const schema = require("../apis/devicefarm-2015-06-23.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.devicefarm.TestGridProject {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DeviceFarm();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeCreateDevicePool(partialParams) {
        this.boot();
        return this.client.createDevicePool(this.ops["CreateDevicePool"].apply(partialParams));
    }
    invokeCreateInstanceProfile(partialParams) {
        this.boot();
        return this.client.createInstanceProfile(this.ops["CreateInstanceProfile"].apply(partialParams));
    }
    invokeCreateNetworkProfile(partialParams) {
        this.boot();
        return this.client.createNetworkProfile(this.ops["CreateNetworkProfile"].apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        this.boot();
        return this.client.createProject(this.ops["CreateProject"].apply(partialParams));
    }
    invokeCreateRemoteAccessSession(partialParams) {
        this.boot();
        return this.client.createRemoteAccessSession(this.ops["CreateRemoteAccessSession"].apply(partialParams));
    }
    invokeCreateTestGridProject(partialParams) {
        this.boot();
        return this.client.createTestGridProject(this.ops["CreateTestGridProject"].apply(partialParams));
    }
    invokeCreateTestGridUrl(partialParams) {
        this.boot();
        return this.client.createTestGridUrl(this.ops["CreateTestGridUrl"].apply(partialParams));
    }
    invokeCreateUpload(partialParams) {
        this.boot();
        return this.client.createUpload(this.ops["CreateUpload"].apply(partialParams));
    }
    invokeCreateVPCEConfiguration(partialParams) {
        this.boot();
        return this.client.createVPCEConfiguration(this.ops["CreateVPCEConfiguration"].apply(partialParams));
    }
    invokeDeleteDevicePool(partialParams) {
        this.boot();
        return this.client.deleteDevicePool(this.ops["DeleteDevicePool"].apply(partialParams));
    }
    invokeDeleteInstanceProfile(partialParams) {
        this.boot();
        return this.client.deleteInstanceProfile(this.ops["DeleteInstanceProfile"].apply(partialParams));
    }
    invokeDeleteNetworkProfile(partialParams) {
        this.boot();
        return this.client.deleteNetworkProfile(this.ops["DeleteNetworkProfile"].apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        this.boot();
        return this.client.deleteProject(this.ops["DeleteProject"].apply(partialParams));
    }
    invokeDeleteRemoteAccessSession(partialParams) {
        this.boot();
        return this.client.deleteRemoteAccessSession(this.ops["DeleteRemoteAccessSession"].apply(partialParams));
    }
    invokeDeleteRun(partialParams) {
        this.boot();
        return this.client.deleteRun(this.ops["DeleteRun"].apply(partialParams));
    }
    invokeDeleteTestGridProject(partialParams) {
        this.boot();
        return this.client.deleteTestGridProject(this.ops["DeleteTestGridProject"].apply(partialParams));
    }
    invokeDeleteUpload(partialParams) {
        this.boot();
        return this.client.deleteUpload(this.ops["DeleteUpload"].apply(partialParams));
    }
    invokeDeleteVPCEConfiguration(partialParams) {
        this.boot();
        return this.client.deleteVPCEConfiguration(this.ops["DeleteVPCEConfiguration"].apply(partialParams));
    }
    invokeGetAccountSettings(partialParams) {
        this.boot();
        return this.client.getAccountSettings(this.ops["GetAccountSettings"].apply(partialParams));
    }
    invokeGetDevice(partialParams) {
        this.boot();
        return this.client.getDevice(this.ops["GetDevice"].apply(partialParams));
    }
    invokeGetDeviceInstance(partialParams) {
        this.boot();
        return this.client.getDeviceInstance(this.ops["GetDeviceInstance"].apply(partialParams));
    }
    invokeGetDevicePool(partialParams) {
        this.boot();
        return this.client.getDevicePool(this.ops["GetDevicePool"].apply(partialParams));
    }
    invokeGetDevicePoolCompatibility(partialParams) {
        this.boot();
        return this.client.getDevicePoolCompatibility(this.ops["GetDevicePoolCompatibility"].apply(partialParams));
    }
    invokeGetInstanceProfile(partialParams) {
        this.boot();
        return this.client.getInstanceProfile(this.ops["GetInstanceProfile"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        this.boot();
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetNetworkProfile(partialParams) {
        this.boot();
        return this.client.getNetworkProfile(this.ops["GetNetworkProfile"].apply(partialParams));
    }
    invokeGetOfferingStatus(partialParams) {
        this.boot();
        return this.client.getOfferingStatus(this.ops["GetOfferingStatus"].apply(partialParams));
    }
    invokeGetProject(partialParams) {
        this.boot();
        return this.client.getProject(this.ops["GetProject"].apply(partialParams));
    }
    invokeGetRemoteAccessSession(partialParams) {
        this.boot();
        return this.client.getRemoteAccessSession(this.ops["GetRemoteAccessSession"].apply(partialParams));
    }
    invokeGetRun(partialParams) {
        this.boot();
        return this.client.getRun(this.ops["GetRun"].apply(partialParams));
    }
    invokeGetSuite(partialParams) {
        this.boot();
        return this.client.getSuite(this.ops["GetSuite"].apply(partialParams));
    }
    invokeGetTest(partialParams) {
        this.boot();
        return this.client.getTest(this.ops["GetTest"].apply(partialParams));
    }
    invokeGetTestGridProject(partialParams) {
        this.boot();
        return this.client.getTestGridProject(this.ops["GetTestGridProject"].apply(partialParams));
    }
    invokeGetTestGridSession(partialParams) {
        this.boot();
        return this.client.getTestGridSession(this.ops["GetTestGridSession"].apply(partialParams));
    }
    invokeGetUpload(partialParams) {
        this.boot();
        return this.client.getUpload(this.ops["GetUpload"].apply(partialParams));
    }
    invokeGetVPCEConfiguration(partialParams) {
        this.boot();
        return this.client.getVPCEConfiguration(this.ops["GetVPCEConfiguration"].apply(partialParams));
    }
    invokeInstallToRemoteAccessSession(partialParams) {
        this.boot();
        return this.client.installToRemoteAccessSession(this.ops["InstallToRemoteAccessSession"].apply(partialParams));
    }
    invokeListArtifacts(partialParams) {
        this.boot();
        return this.client.listArtifacts(this.ops["ListArtifacts"].apply(partialParams));
    }
    invokeListDeviceInstances(partialParams) {
        this.boot();
        return this.client.listDeviceInstances(this.ops["ListDeviceInstances"].apply(partialParams));
    }
    invokeListDevicePools(partialParams) {
        this.boot();
        return this.client.listDevicePools(this.ops["ListDevicePools"].apply(partialParams));
    }
    invokeListDevices(partialParams) {
        this.boot();
        return this.client.listDevices(this.ops["ListDevices"].apply(partialParams));
    }
    invokeListInstanceProfiles(partialParams) {
        this.boot();
        return this.client.listInstanceProfiles(this.ops["ListInstanceProfiles"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListNetworkProfiles(partialParams) {
        this.boot();
        return this.client.listNetworkProfiles(this.ops["ListNetworkProfiles"].apply(partialParams));
    }
    invokeListOfferingPromotions(partialParams) {
        this.boot();
        return this.client.listOfferingPromotions(this.ops["ListOfferingPromotions"].apply(partialParams));
    }
    invokeListOfferingTransactions(partialParams) {
        this.boot();
        return this.client.listOfferingTransactions(this.ops["ListOfferingTransactions"].apply(partialParams));
    }
    invokeListOfferings(partialParams) {
        this.boot();
        return this.client.listOfferings(this.ops["ListOfferings"].apply(partialParams));
    }
    invokeListProjects(partialParams) {
        this.boot();
        return this.client.listProjects(this.ops["ListProjects"].apply(partialParams));
    }
    invokeListRemoteAccessSessions(partialParams) {
        this.boot();
        return this.client.listRemoteAccessSessions(this.ops["ListRemoteAccessSessions"].apply(partialParams));
    }
    invokeListRuns(partialParams) {
        this.boot();
        return this.client.listRuns(this.ops["ListRuns"].apply(partialParams));
    }
    invokeListSamples(partialParams) {
        this.boot();
        return this.client.listSamples(this.ops["ListSamples"].apply(partialParams));
    }
    invokeListSuites(partialParams) {
        this.boot();
        return this.client.listSuites(this.ops["ListSuites"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTestGridProjects(partialParams) {
        this.boot();
        return this.client.listTestGridProjects(this.ops["ListTestGridProjects"].apply(partialParams));
    }
    invokeListTestGridSessionActions(partialParams) {
        this.boot();
        return this.client.listTestGridSessionActions(this.ops["ListTestGridSessionActions"].apply(partialParams));
    }
    invokeListTestGridSessionArtifacts(partialParams) {
        this.boot();
        return this.client.listTestGridSessionArtifacts(this.ops["ListTestGridSessionArtifacts"].apply(partialParams));
    }
    invokeListTestGridSessions(partialParams) {
        this.boot();
        return this.client.listTestGridSessions(this.ops["ListTestGridSessions"].apply(partialParams));
    }
    invokeListTests(partialParams) {
        this.boot();
        return this.client.listTests(this.ops["ListTests"].apply(partialParams));
    }
    invokeListUniqueProblems(partialParams) {
        this.boot();
        return this.client.listUniqueProblems(this.ops["ListUniqueProblems"].apply(partialParams));
    }
    invokeListUploads(partialParams) {
        this.boot();
        return this.client.listUploads(this.ops["ListUploads"].apply(partialParams));
    }
    invokeListVPCEConfigurations(partialParams) {
        this.boot();
        return this.client.listVPCEConfigurations(this.ops["ListVPCEConfigurations"].apply(partialParams));
    }
    invokePurchaseOffering(partialParams) {
        this.boot();
        return this.client.purchaseOffering(this.ops["PurchaseOffering"].apply(partialParams));
    }
    invokeRenewOffering(partialParams) {
        this.boot();
        return this.client.renewOffering(this.ops["RenewOffering"].apply(partialParams));
    }
    invokeScheduleRun(partialParams) {
        this.boot();
        return this.client.scheduleRun(this.ops["ScheduleRun"].apply(partialParams));
    }
    invokeStopJob(partialParams) {
        this.boot();
        return this.client.stopJob(this.ops["StopJob"].apply(partialParams));
    }
    invokeStopRemoteAccessSession(partialParams) {
        this.boot();
        return this.client.stopRemoteAccessSession(this.ops["StopRemoteAccessSession"].apply(partialParams));
    }
    invokeStopRun(partialParams) {
        this.boot();
        return this.client.stopRun(this.ops["StopRun"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDeviceInstance(partialParams) {
        this.boot();
        return this.client.updateDeviceInstance(this.ops["UpdateDeviceInstance"].apply(partialParams));
    }
    invokeUpdateDevicePool(partialParams) {
        this.boot();
        return this.client.updateDevicePool(this.ops["UpdateDevicePool"].apply(partialParams));
    }
    invokeUpdateInstanceProfile(partialParams) {
        this.boot();
        return this.client.updateInstanceProfile(this.ops["UpdateInstanceProfile"].apply(partialParams));
    }
    invokeUpdateNetworkProfile(partialParams) {
        this.boot();
        return this.client.updateNetworkProfile(this.ops["UpdateNetworkProfile"].apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        this.boot();
        return this.client.updateProject(this.ops["UpdateProject"].apply(partialParams));
    }
    invokeUpdateTestGridProject(partialParams) {
        this.boot();
        return this.client.updateTestGridProject(this.ops["UpdateTestGridProject"].apply(partialParams));
    }
    invokeUpdateUpload(partialParams) {
        this.boot();
        return this.client.updateUpload(this.ops["UpdateUpload"].apply(partialParams));
    }
    invokeUpdateVPCEConfiguration(partialParams) {
        this.boot();
        return this.client.updateVPCEConfiguration(this.ops["UpdateVPCEConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
