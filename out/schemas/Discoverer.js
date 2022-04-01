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
const schema = require("../apis/schemas-2019-12-02.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.schemas.Discoverer {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Schemas();
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
    invokeCreateDiscoverer(partialParams) {
        this.boot();
        return this.client.createDiscoverer(this.ops["CreateDiscoverer"].apply(partialParams));
    }
    invokeCreateRegistry(partialParams) {
        this.boot();
        return this.client.createRegistry(this.ops["CreateRegistry"].apply(partialParams));
    }
    invokeCreateSchema(partialParams) {
        this.boot();
        return this.client.createSchema(this.ops["CreateSchema"].apply(partialParams));
    }
    invokeDescribeCodeBinding(partialParams) {
        this.boot();
        return this.client.describeCodeBinding(this.ops["DescribeCodeBinding"].apply(partialParams));
    }
    invokeDescribeDiscoverer(partialParams) {
        this.boot();
        return this.client.describeDiscoverer(this.ops["DescribeDiscoverer"].apply(partialParams));
    }
    invokeDescribeRegistry(partialParams) {
        this.boot();
        return this.client.describeRegistry(this.ops["DescribeRegistry"].apply(partialParams));
    }
    invokeDescribeSchema(partialParams) {
        this.boot();
        return this.client.describeSchema(this.ops["DescribeSchema"].apply(partialParams));
    }
    invokeExportSchema(partialParams) {
        this.boot();
        return this.client.exportSchema(this.ops["ExportSchema"].apply(partialParams));
    }
    invokeGetCodeBindingSource(partialParams) {
        this.boot();
        return this.client.getCodeBindingSource(this.ops["GetCodeBindingSource"].apply(partialParams));
    }
    invokeGetDiscoveredSchema(partialParams) {
        this.boot();
        return this.client.getDiscoveredSchema(this.ops["GetDiscoveredSchema"].apply(partialParams));
    }
    invokeGetResourcePolicy(partialParams) {
        this.boot();
        return this.client.getResourcePolicy(this.ops["GetResourcePolicy"].apply(partialParams));
    }
    invokeListDiscoverers(partialParams) {
        this.boot();
        return this.client.listDiscoverers(this.ops["ListDiscoverers"].apply(partialParams));
    }
    invokeListRegistries(partialParams) {
        this.boot();
        return this.client.listRegistries(this.ops["ListRegistries"].apply(partialParams));
    }
    invokeListSchemaVersions(partialParams) {
        this.boot();
        return this.client.listSchemaVersions(this.ops["ListSchemaVersions"].apply(partialParams));
    }
    invokeListSchemas(partialParams) {
        this.boot();
        return this.client.listSchemas(this.ops["ListSchemas"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutCodeBinding(partialParams) {
        this.boot();
        return this.client.putCodeBinding(this.ops["PutCodeBinding"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        this.boot();
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokeSearchSchemas(partialParams) {
        this.boot();
        return this.client.searchSchemas(this.ops["SearchSchemas"].apply(partialParams));
    }
    invokeStartDiscoverer(partialParams) {
        this.boot();
        return this.client.startDiscoverer(this.ops["StartDiscoverer"].apply(partialParams));
    }
    invokeStopDiscoverer(partialParams) {
        this.boot();
        return this.client.stopDiscoverer(this.ops["StopDiscoverer"].apply(partialParams));
    }
    invokeUpdateDiscoverer(partialParams) {
        this.boot();
        return this.client.updateDiscoverer(this.ops["UpdateDiscoverer"].apply(partialParams));
    }
    invokeUpdateRegistry(partialParams) {
        this.boot();
        return this.client.updateRegistry(this.ops["UpdateRegistry"].apply(partialParams));
    }
    invokeUpdateSchema(partialParams) {
        this.boot();
        return this.client.updateSchema(this.ops["UpdateSchema"].apply(partialParams));
    }
}
exports.default = default_1;
