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
class default_1 extends aws.devicefarm.InstanceProfile {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DeviceFarm();
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
    invokeCreateDevicePool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDevicePool(this.ops["CreateDevicePool"].applicator.apply(partialParams));
    }
    invokeCreateInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceProfile(this.ops["CreateInstanceProfile"].applicator.apply(partialParams));
    }
    invokeCreateNetworkProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkProfile(this.ops["CreateNetworkProfile"].applicator.apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProject(this.ops["CreateProject"].applicator.apply(partialParams));
    }
    invokeCreateRemoteAccessSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRemoteAccessSession(this.ops["CreateRemoteAccessSession"].applicator.apply(partialParams));
    }
    invokeCreateTestGridProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTestGridProject(this.ops["CreateTestGridProject"].applicator.apply(partialParams));
    }
    invokeCreateTestGridUrl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTestGridUrl(this.ops["CreateTestGridUrl"].applicator.apply(partialParams));
    }
    invokeCreateUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUpload(this.ops["CreateUpload"].applicator.apply(partialParams));
    }
    invokeCreateVPCEConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVPCEConfiguration(this.ops["CreateVPCEConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteDevicePool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDevicePool(this.ops["DeleteDevicePool"].applicator.apply(partialParams));
    }
    invokeDeleteInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceProfile(this.ops["DeleteInstanceProfile"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkProfile(this.ops["DeleteNetworkProfile"].applicator.apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProject(this.ops["DeleteProject"].applicator.apply(partialParams));
    }
    invokeDeleteRemoteAccessSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRemoteAccessSession(this.ops["DeleteRemoteAccessSession"].applicator.apply(partialParams));
    }
    invokeDeleteRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRun(this.ops["DeleteRun"].applicator.apply(partialParams));
    }
    invokeDeleteTestGridProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTestGridProject(this.ops["DeleteTestGridProject"].applicator.apply(partialParams));
    }
    invokeDeleteUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUpload(this.ops["DeleteUpload"].applicator.apply(partialParams));
    }
    invokeDeleteVPCEConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVPCEConfiguration(this.ops["DeleteVPCEConfiguration"].applicator.apply(partialParams));
    }
    invokeGetDevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevice(this.ops["GetDevice"].applicator.apply(partialParams));
    }
    invokeGetDeviceInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeviceInstance(this.ops["GetDeviceInstance"].applicator.apply(partialParams));
    }
    invokeGetDevicePool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevicePool(this.ops["GetDevicePool"].applicator.apply(partialParams));
    }
    invokeGetDevicePoolCompatibility(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevicePoolCompatibility(this.ops["GetDevicePoolCompatibility"].applicator.apply(partialParams));
    }
    invokeGetInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceProfile(this.ops["GetInstanceProfile"].applicator.apply(partialParams));
    }
    invokeGetJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(this.ops["GetJob"].applicator.apply(partialParams));
    }
    invokeGetNetworkProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNetworkProfile(this.ops["GetNetworkProfile"].applicator.apply(partialParams));
    }
    invokeGetProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProject(this.ops["GetProject"].applicator.apply(partialParams));
    }
    invokeGetRemoteAccessSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRemoteAccessSession(this.ops["GetRemoteAccessSession"].applicator.apply(partialParams));
    }
    invokeGetRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRun(this.ops["GetRun"].applicator.apply(partialParams));
    }
    invokeGetSuite(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSuite(this.ops["GetSuite"].applicator.apply(partialParams));
    }
    invokeGetTest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTest(this.ops["GetTest"].applicator.apply(partialParams));
    }
    invokeGetTestGridProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTestGridProject(this.ops["GetTestGridProject"].applicator.apply(partialParams));
    }
    invokeGetUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUpload(this.ops["GetUpload"].applicator.apply(partialParams));
    }
    invokeGetVPCEConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVPCEConfiguration(this.ops["GetVPCEConfiguration"].applicator.apply(partialParams));
    }
    invokeInstallToRemoteAccessSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.installToRemoteAccessSession(this.ops["InstallToRemoteAccessSession"].applicator.apply(partialParams));
    }
    invokeListArtifacts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listArtifacts(this.ops["ListArtifacts"].applicator.apply(partialParams));
    }
    invokeListDevicePools(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDevicePools(this.ops["ListDevicePools"].applicator.apply(partialParams));
    }
    invokeListJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].applicator.apply(partialParams));
    }
    invokeListNetworkProfiles(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listNetworkProfiles(this.ops["ListNetworkProfiles"].applicator.apply(partialParams));
    }
    invokeListRemoteAccessSessions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRemoteAccessSessions(this.ops["ListRemoteAccessSessions"].applicator.apply(partialParams));
    }
    invokeListRuns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRuns(this.ops["ListRuns"].applicator.apply(partialParams));
    }
    invokeListSamples(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSamples(this.ops["ListSamples"].applicator.apply(partialParams));
    }
    invokeListSuites(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSuites(this.ops["ListSuites"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListTestGridSessionActions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTestGridSessionActions(this.ops["ListTestGridSessionActions"].applicator.apply(partialParams));
    }
    invokeListTestGridSessionArtifacts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTestGridSessionArtifacts(this.ops["ListTestGridSessionArtifacts"].applicator.apply(partialParams));
    }
    invokeListTestGridSessions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTestGridSessions(this.ops["ListTestGridSessions"].applicator.apply(partialParams));
    }
    invokeListTests(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTests(this.ops["ListTests"].applicator.apply(partialParams));
    }
    invokeListUniqueProblems(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUniqueProblems(this.ops["ListUniqueProblems"].applicator.apply(partialParams));
    }
    invokeListUploads(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUploads(this.ops["ListUploads"].applicator.apply(partialParams));
    }
    invokePurchaseOffering(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseOffering(this.ops["PurchaseOffering"].applicator.apply(partialParams));
    }
    invokeRenewOffering(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.renewOffering(this.ops["RenewOffering"].applicator.apply(partialParams));
    }
    invokeScheduleRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.scheduleRun(this.ops["ScheduleRun"].applicator.apply(partialParams));
    }
    invokeStopJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopJob(this.ops["StopJob"].applicator.apply(partialParams));
    }
    invokeStopRemoteAccessSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopRemoteAccessSession(this.ops["StopRemoteAccessSession"].applicator.apply(partialParams));
    }
    invokeStopRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopRun(this.ops["StopRun"].applicator.apply(partialParams));
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
    invokeUpdateDeviceInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeviceInstance(this.ops["UpdateDeviceInstance"].applicator.apply(partialParams));
    }
    invokeUpdateDevicePool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevicePool(this.ops["UpdateDevicePool"].applicator.apply(partialParams));
    }
    invokeUpdateInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstanceProfile(this.ops["UpdateInstanceProfile"].applicator.apply(partialParams));
    }
    invokeUpdateNetworkProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNetworkProfile(this.ops["UpdateNetworkProfile"].applicator.apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProject(this.ops["UpdateProject"].applicator.apply(partialParams));
    }
    invokeUpdateTestGridProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTestGridProject(this.ops["UpdateTestGridProject"].applicator.apply(partialParams));
    }
    invokeUpdateUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUpload(this.ops["UpdateUpload"].applicator.apply(partialParams));
    }
    invokeUpdateVPCEConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVPCEConfiguration(this.ops["UpdateVPCEConfiguration"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
