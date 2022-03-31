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
        this.client = new awssdk.CloudSearch();
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
    invokeBuildSuggesters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.buildSuggesters(this.ops["BuildSuggesters"].applicator.apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomain(this.ops["CreateDomain"].applicator.apply(partialParams));
    }
    invokeDefineAnalysisScheme(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineAnalysisScheme(this.ops["DefineAnalysisScheme"].applicator.apply(partialParams));
    }
    invokeDefineExpression(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineExpression(this.ops["DefineExpression"].applicator.apply(partialParams));
    }
    invokeDefineIndexField(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineIndexField(this.ops["DefineIndexField"].applicator.apply(partialParams));
    }
    invokeDefineSuggester(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineSuggester(this.ops["DefineSuggester"].applicator.apply(partialParams));
    }
    invokeDeleteAnalysisScheme(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAnalysisScheme(this.ops["DeleteAnalysisScheme"].applicator.apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomain(this.ops["DeleteDomain"].applicator.apply(partialParams));
    }
    invokeDeleteExpression(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteExpression(this.ops["DeleteExpression"].applicator.apply(partialParams));
    }
    invokeDeleteIndexField(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIndexField(this.ops["DeleteIndexField"].applicator.apply(partialParams));
    }
    invokeDeleteSuggester(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSuggester(this.ops["DeleteSuggester"].applicator.apply(partialParams));
    }
    invokeDescribeAnalysisSchemes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAnalysisSchemes(this.ops["DescribeAnalysisSchemes"].applicator.apply(partialParams));
    }
    invokeDescribeAvailabilityOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAvailabilityOptions(this.ops["DescribeAvailabilityOptions"].applicator.apply(partialParams));
    }
    invokeDescribeDomainEndpointOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomainEndpointOptions(this.ops["DescribeDomainEndpointOptions"].applicator.apply(partialParams));
    }
    invokeDescribeExpressions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExpressions(this.ops["DescribeExpressions"].applicator.apply(partialParams));
    }
    invokeDescribeIndexFields(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIndexFields(this.ops["DescribeIndexFields"].applicator.apply(partialParams));
    }
    invokeDescribeScalingParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScalingParameters(this.ops["DescribeScalingParameters"].applicator.apply(partialParams));
    }
    invokeDescribeServiceAccessPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServiceAccessPolicies(this.ops["DescribeServiceAccessPolicies"].applicator.apply(partialParams));
    }
    invokeDescribeSuggesters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSuggesters(this.ops["DescribeSuggesters"].applicator.apply(partialParams));
    }
    invokeIndexDocuments(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.indexDocuments(this.ops["IndexDocuments"].applicator.apply(partialParams));
    }
    invokeUpdateAvailabilityOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAvailabilityOptions(this.ops["UpdateAvailabilityOptions"].applicator.apply(partialParams));
    }
    invokeUpdateDomainEndpointOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainEndpointOptions(this.ops["UpdateDomainEndpointOptions"].applicator.apply(partialParams));
    }
    invokeUpdateScalingParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateScalingParameters(this.ops["UpdateScalingParameters"].applicator.apply(partialParams));
    }
    invokeUpdateServiceAccessPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceAccessPolicies(this.ops["UpdateServiceAccessPolicies"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
