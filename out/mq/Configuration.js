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
const schema = require("../apis/mq-2017-11-27.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.mq.Configuration {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.MQ();
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
    invokeCreateBroker(partialParams) {
        this.boot();
        return this.client.createBroker(this.ops["CreateBroker"].apply(partialParams));
    }
    invokeCreateConfiguration(partialParams) {
        this.boot();
        return this.client.createConfiguration(this.ops["CreateConfiguration"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeDeleteBroker(partialParams) {
        this.boot();
        return this.client.deleteBroker(this.ops["DeleteBroker"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDescribeBroker(partialParams) {
        this.boot();
        return this.client.describeBroker(this.ops["DescribeBroker"].apply(partialParams));
    }
    invokeDescribeBrokerEngineTypes(partialParams) {
        this.boot();
        return this.client.describeBrokerEngineTypes(this.ops["DescribeBrokerEngineTypes"].apply(partialParams));
    }
    invokeDescribeBrokerInstanceOptions(partialParams) {
        this.boot();
        return this.client.describeBrokerInstanceOptions(this.ops["DescribeBrokerInstanceOptions"].apply(partialParams));
    }
    invokeDescribeConfiguration(partialParams) {
        this.boot();
        return this.client.describeConfiguration(this.ops["DescribeConfiguration"].apply(partialParams));
    }
    invokeDescribeConfigurationRevision(partialParams) {
        this.boot();
        return this.client.describeConfigurationRevision(this.ops["DescribeConfigurationRevision"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        this.boot();
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeListBrokers(partialParams) {
        this.boot();
        return this.client.listBrokers(this.ops["ListBrokers"].apply(partialParams));
    }
    invokeListConfigurationRevisions(partialParams) {
        this.boot();
        return this.client.listConfigurationRevisions(this.ops["ListConfigurationRevisions"].apply(partialParams));
    }
    invokeListConfigurations(partialParams) {
        this.boot();
        return this.client.listConfigurations(this.ops["ListConfigurations"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeRebootBroker(partialParams) {
        this.boot();
        return this.client.rebootBroker(this.ops["RebootBroker"].apply(partialParams));
    }
    invokeUpdateBroker(partialParams) {
        this.boot();
        return this.client.updateBroker(this.ops["UpdateBroker"].apply(partialParams));
    }
    invokeUpdateConfiguration(partialParams) {
        this.boot();
        return this.client.updateConfiguration(this.ops["UpdateConfiguration"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        this.boot();
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
}
exports.default = default_1;
