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
const schema = require("../apis/appstream-2016-12-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.appstream.ImageBuilder {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AppStream();
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
    invokeCreateAppBlock(partialParams) {
        this.boot();
        return this.client.createAppBlock(this.ops["CreateAppBlock"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        this.boot();
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateEntitlement(partialParams) {
        this.boot();
        return this.client.createEntitlement(this.ops["CreateEntitlement"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeCreateImageBuilder(partialParams) {
        this.boot();
        return this.client.createImageBuilder(this.ops["CreateImageBuilder"].apply(partialParams));
    }
    invokeCreateImageBuilderStreamingURL(partialParams) {
        this.boot();
        return this.client.createImageBuilderStreamingURL(this.ops["CreateImageBuilderStreamingURL"].apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        this.boot();
        return this.client.createStack(this.ops["CreateStack"].apply(partialParams));
    }
    invokeDeleteAppBlock(partialParams) {
        this.boot();
        return this.client.deleteAppBlock(this.ops["DeleteAppBlock"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        this.boot();
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteEntitlement(partialParams) {
        this.boot();
        return this.client.deleteEntitlement(this.ops["DeleteEntitlement"].apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        this.boot();
        return this.client.deleteFleet(this.ops["DeleteFleet"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        this.boot();
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImageBuilder(partialParams) {
        this.boot();
        return this.client.deleteImageBuilder(this.ops["DeleteImageBuilder"].apply(partialParams));
    }
    invokeDeleteImagePermissions(partialParams) {
        this.boot();
        return this.client.deleteImagePermissions(this.ops["DeleteImagePermissions"].apply(partialParams));
    }
    invokeDeleteStack(partialParams) {
        this.boot();
        return this.client.deleteStack(this.ops["DeleteStack"].apply(partialParams));
    }
    invokeDescribeImagePermissions(partialParams) {
        this.boot();
        return this.client.describeImagePermissions(this.ops["DescribeImagePermissions"].apply(partialParams));
    }
    invokeStartFleet(partialParams) {
        this.boot();
        return this.client.startFleet(this.ops["StartFleet"].apply(partialParams));
    }
    invokeStartImageBuilder(partialParams) {
        this.boot();
        return this.client.startImageBuilder(this.ops["StartImageBuilder"].apply(partialParams));
    }
    invokeStopFleet(partialParams) {
        this.boot();
        return this.client.stopFleet(this.ops["StopFleet"].apply(partialParams));
    }
    invokeStopImageBuilder(partialParams) {
        this.boot();
        return this.client.stopImageBuilder(this.ops["StopImageBuilder"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        this.boot();
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateEntitlement(partialParams) {
        this.boot();
        return this.client.updateEntitlement(this.ops["UpdateEntitlement"].apply(partialParams));
    }
    invokeUpdateImagePermissions(partialParams) {
        this.boot();
        return this.client.updateImagePermissions(this.ops["UpdateImagePermissions"].apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        this.boot();
        return this.client.updateStack(this.ops["UpdateStack"].apply(partialParams));
    }
}
exports.default = default_1;
