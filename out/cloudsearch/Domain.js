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
const schema = require("../apis/cloudsearch-2013-01-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.cloudsearch.Domain {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CloudSearch();
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
    invokeBuildSuggesters(partialParams) {
        this.boot();
        return this.client.buildSuggesters(this.ops["BuildSuggesters"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        this.boot();
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeDefineAnalysisScheme(partialParams) {
        this.boot();
        return this.client.defineAnalysisScheme(this.ops["DefineAnalysisScheme"].apply(partialParams));
    }
    invokeDefineExpression(partialParams) {
        this.boot();
        return this.client.defineExpression(this.ops["DefineExpression"].apply(partialParams));
    }
    invokeDefineIndexField(partialParams) {
        this.boot();
        return this.client.defineIndexField(this.ops["DefineIndexField"].apply(partialParams));
    }
    invokeDefineSuggester(partialParams) {
        this.boot();
        return this.client.defineSuggester(this.ops["DefineSuggester"].apply(partialParams));
    }
    invokeDeleteAnalysisScheme(partialParams) {
        this.boot();
        return this.client.deleteAnalysisScheme(this.ops["DeleteAnalysisScheme"].apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        this.boot();
        return this.client.deleteDomain(this.ops["DeleteDomain"].apply(partialParams));
    }
    invokeDeleteExpression(partialParams) {
        this.boot();
        return this.client.deleteExpression(this.ops["DeleteExpression"].apply(partialParams));
    }
    invokeDeleteIndexField(partialParams) {
        this.boot();
        return this.client.deleteIndexField(this.ops["DeleteIndexField"].apply(partialParams));
    }
    invokeDeleteSuggester(partialParams) {
        this.boot();
        return this.client.deleteSuggester(this.ops["DeleteSuggester"].apply(partialParams));
    }
    invokeDescribeAnalysisSchemes(partialParams) {
        this.boot();
        return this.client.describeAnalysisSchemes(this.ops["DescribeAnalysisSchemes"].apply(partialParams));
    }
    invokeDescribeAvailabilityOptions(partialParams) {
        this.boot();
        return this.client.describeAvailabilityOptions(this.ops["DescribeAvailabilityOptions"].apply(partialParams));
    }
    invokeDescribeDomainEndpointOptions(partialParams) {
        this.boot();
        return this.client.describeDomainEndpointOptions(this.ops["DescribeDomainEndpointOptions"].apply(partialParams));
    }
    invokeDescribeDomains(partialParams) {
        this.boot();
        return this.client.describeDomains(this.ops["DescribeDomains"].apply(partialParams));
    }
    invokeDescribeExpressions(partialParams) {
        this.boot();
        return this.client.describeExpressions(this.ops["DescribeExpressions"].apply(partialParams));
    }
    invokeDescribeIndexFields(partialParams) {
        this.boot();
        return this.client.describeIndexFields(this.ops["DescribeIndexFields"].apply(partialParams));
    }
    invokeDescribeScalingParameters(partialParams) {
        this.boot();
        return this.client.describeScalingParameters(this.ops["DescribeScalingParameters"].apply(partialParams));
    }
    invokeDescribeServiceAccessPolicies(partialParams) {
        this.boot();
        return this.client.describeServiceAccessPolicies(this.ops["DescribeServiceAccessPolicies"].apply(partialParams));
    }
    invokeDescribeSuggesters(partialParams) {
        this.boot();
        return this.client.describeSuggesters(this.ops["DescribeSuggesters"].apply(partialParams));
    }
    invokeIndexDocuments(partialParams) {
        this.boot();
        return this.client.indexDocuments(this.ops["IndexDocuments"].apply(partialParams));
    }
    invokeUpdateAvailabilityOptions(partialParams) {
        this.boot();
        return this.client.updateAvailabilityOptions(this.ops["UpdateAvailabilityOptions"].apply(partialParams));
    }
    invokeUpdateDomainEndpointOptions(partialParams) {
        this.boot();
        return this.client.updateDomainEndpointOptions(this.ops["UpdateDomainEndpointOptions"].apply(partialParams));
    }
    invokeUpdateScalingParameters(partialParams) {
        this.boot();
        return this.client.updateScalingParameters(this.ops["UpdateScalingParameters"].apply(partialParams));
    }
    invokeUpdateServiceAccessPolicies(partialParams) {
        this.boot();
        return this.client.updateServiceAccessPolicies(this.ops["UpdateServiceAccessPolicies"].apply(partialParams));
    }
}
exports.default = default_1;
