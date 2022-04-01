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
const schema = require("../apis/transfer-2018-11-05.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.transfer.SshKey {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Transfer();
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
    invokeCreateAccess(partialParams) {
        this.boot();
        return this.client.createAccess(this.ops["CreateAccess"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeDescribeAccess(partialParams) {
        this.boot();
        return this.client.describeAccess(this.ops["DescribeAccess"].apply(partialParams));
    }
    invokeDescribeServer(partialParams) {
        this.boot();
        return this.client.describeServer(this.ops["DescribeServer"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        this.boot();
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeImportSshPublicKey(partialParams) {
        this.boot();
        return this.client.importSshPublicKey(this.ops["ImportSshPublicKey"].apply(partialParams));
    }
    invokeListAccesses(partialParams) {
        this.boot();
        return this.client.listAccesses(this.ops["ListAccesses"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeTestIdentityProvider(partialParams) {
        this.boot();
        return this.client.testIdentityProvider(this.ops["TestIdentityProvider"].apply(partialParams));
    }
    invokeUpdateAccess(partialParams) {
        this.boot();
        return this.client.updateAccess(this.ops["UpdateAccess"].apply(partialParams));
    }
    invokeUpdateServer(partialParams) {
        this.boot();
        return this.client.updateServer(this.ops["UpdateServer"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        this.boot();
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
}
exports.default = default_1;
