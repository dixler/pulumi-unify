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
class default_1 extends aws.acm.Certificate {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ACM();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/acm-2015-12-08.normal.json"), this.client);
    }
    invokeAddTagsToCertificate(partialParams) {
        return this.client.addTagsToCertificate(this.ops["AddTagsToCertificate"].apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].apply(partialParams));
    }
    invokeDescribeCertificate(partialParams) {
        return this.client.describeCertificate(this.ops["DescribeCertificate"].apply(partialParams));
    }
    invokeExportCertificate(partialParams) {
        return this.client.exportCertificate(this.ops["ExportCertificate"].apply(partialParams));
    }
    invokeGetCertificate(partialParams) {
        return this.client.getCertificate(this.ops["GetCertificate"].apply(partialParams));
    }
    invokeImportCertificate(partialParams) {
        return this.client.importCertificate(this.ops["ImportCertificate"].apply(partialParams));
    }
    invokeListTagsForCertificate(partialParams) {
        return this.client.listTagsForCertificate(this.ops["ListTagsForCertificate"].apply(partialParams));
    }
    invokePutAccountConfiguration(partialParams) {
        return this.client.putAccountConfiguration(this.ops["PutAccountConfiguration"].apply(partialParams));
    }
    invokeRemoveTagsFromCertificate(partialParams) {
        return this.client.removeTagsFromCertificate(this.ops["RemoveTagsFromCertificate"].apply(partialParams));
    }
    invokeRenewCertificate(partialParams) {
        return this.client.renewCertificate(this.ops["RenewCertificate"].apply(partialParams));
    }
    invokeRequestCertificate(partialParams) {
        return this.client.requestCertificate(this.ops["RequestCertificate"].apply(partialParams));
    }
    invokeResendValidationEmail(partialParams) {
        return this.client.resendValidationEmail(this.ops["ResendValidationEmail"].apply(partialParams));
    }
    invokeUpdateCertificateOptions(partialParams) {
        return this.client.updateCertificateOptions(this.ops["UpdateCertificateOptions"].apply(partialParams));
    }
}
exports.default = default_1;
