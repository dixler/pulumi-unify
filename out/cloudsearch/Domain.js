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
class default_1 extends aws.cloudsearch.Domain {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudSearch();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/cloudsearch-2013-01-01.normal.json"), this.client);
    }
    invokeBuildSuggesters(partialParams) {
        return this.client.buildSuggesters(this.ops["BuildSuggesters"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeDefineAnalysisScheme(partialParams) {
        return this.client.defineAnalysisScheme(this.ops["DefineAnalysisScheme"].apply(partialParams));
    }
    invokeDefineExpression(partialParams) {
        return this.client.defineExpression(this.ops["DefineExpression"].apply(partialParams));
    }
    invokeDefineIndexField(partialParams) {
        return this.client.defineIndexField(this.ops["DefineIndexField"].apply(partialParams));
    }
    invokeDefineSuggester(partialParams) {
        return this.client.defineSuggester(this.ops["DefineSuggester"].apply(partialParams));
    }
    invokeDeleteAnalysisScheme(partialParams) {
        return this.client.deleteAnalysisScheme(this.ops["DeleteAnalysisScheme"].apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        return this.client.deleteDomain(this.ops["DeleteDomain"].apply(partialParams));
    }
    invokeDeleteExpression(partialParams) {
        return this.client.deleteExpression(this.ops["DeleteExpression"].apply(partialParams));
    }
    invokeDeleteIndexField(partialParams) {
        return this.client.deleteIndexField(this.ops["DeleteIndexField"].apply(partialParams));
    }
    invokeDeleteSuggester(partialParams) {
        return this.client.deleteSuggester(this.ops["DeleteSuggester"].apply(partialParams));
    }
    invokeDescribeAnalysisSchemes(partialParams) {
        return this.client.describeAnalysisSchemes(this.ops["DescribeAnalysisSchemes"].apply(partialParams));
    }
    invokeDescribeAvailabilityOptions(partialParams) {
        return this.client.describeAvailabilityOptions(this.ops["DescribeAvailabilityOptions"].apply(partialParams));
    }
    invokeDescribeDomainEndpointOptions(partialParams) {
        return this.client.describeDomainEndpointOptions(this.ops["DescribeDomainEndpointOptions"].apply(partialParams));
    }
    invokeDescribeExpressions(partialParams) {
        return this.client.describeExpressions(this.ops["DescribeExpressions"].apply(partialParams));
    }
    invokeDescribeIndexFields(partialParams) {
        return this.client.describeIndexFields(this.ops["DescribeIndexFields"].apply(partialParams));
    }
    invokeDescribeScalingParameters(partialParams) {
        return this.client.describeScalingParameters(this.ops["DescribeScalingParameters"].apply(partialParams));
    }
    invokeDescribeServiceAccessPolicies(partialParams) {
        return this.client.describeServiceAccessPolicies(this.ops["DescribeServiceAccessPolicies"].apply(partialParams));
    }
    invokeDescribeSuggesters(partialParams) {
        return this.client.describeSuggesters(this.ops["DescribeSuggesters"].apply(partialParams));
    }
    invokeIndexDocuments(partialParams) {
        return this.client.indexDocuments(this.ops["IndexDocuments"].apply(partialParams));
    }
    invokeUpdateAvailabilityOptions(partialParams) {
        return this.client.updateAvailabilityOptions(this.ops["UpdateAvailabilityOptions"].apply(partialParams));
    }
    invokeUpdateDomainEndpointOptions(partialParams) {
        return this.client.updateDomainEndpointOptions(this.ops["UpdateDomainEndpointOptions"].apply(partialParams));
    }
    invokeUpdateScalingParameters(partialParams) {
        return this.client.updateScalingParameters(this.ops["UpdateScalingParameters"].apply(partialParams));
    }
    invokeUpdateServiceAccessPolicies(partialParams) {
        return this.client.updateServiceAccessPolicies(this.ops["UpdateServiceAccessPolicies"].apply(partialParams));
    }
}
exports.default = default_1;
