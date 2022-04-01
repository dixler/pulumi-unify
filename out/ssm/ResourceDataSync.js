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
const schema = require("../apis/ssm-2014-11-06.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ssm.ResourceDataSync {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SSM();
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
    invokeCreateAssociation(partialParams) {
        this.boot();
        return this.client.createAssociation(this.ops["CreateAssociation"].apply(partialParams));
    }
    invokeCreateDocument(partialParams) {
        this.boot();
        return this.client.createDocument(this.ops["CreateDocument"].apply(partialParams));
    }
    invokeCreateMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.createMaintenanceWindow(this.ops["CreateMaintenanceWindow"].apply(partialParams));
    }
    invokeCreatePatchBaseline(partialParams) {
        this.boot();
        return this.client.createPatchBaseline(this.ops["CreatePatchBaseline"].apply(partialParams));
    }
    invokeDeleteDocument(partialParams) {
        this.boot();
        return this.client.deleteDocument(this.ops["DeleteDocument"].apply(partialParams));
    }
    invokeDeleteParameter(partialParams) {
        this.boot();
        return this.client.deleteParameter(this.ops["DeleteParameter"].apply(partialParams));
    }
    invokeDescribeDocument(partialParams) {
        this.boot();
        return this.client.describeDocument(this.ops["DescribeDocument"].apply(partialParams));
    }
    invokeDescribeDocumentPermission(partialParams) {
        this.boot();
        return this.client.describeDocumentPermission(this.ops["DescribeDocumentPermission"].apply(partialParams));
    }
    invokeGetDocument(partialParams) {
        this.boot();
        return this.client.getDocument(this.ops["GetDocument"].apply(partialParams));
    }
    invokeGetParameter(partialParams) {
        this.boot();
        return this.client.getParameter(this.ops["GetParameter"].apply(partialParams));
    }
    invokeGetParameterHistory(partialParams) {
        this.boot();
        return this.client.getParameterHistory(this.ops["GetParameterHistory"].apply(partialParams));
    }
    invokeLabelParameterVersion(partialParams) {
        this.boot();
        return this.client.labelParameterVersion(this.ops["LabelParameterVersion"].apply(partialParams));
    }
    invokeListDocumentMetadataHistory(partialParams) {
        this.boot();
        return this.client.listDocumentMetadataHistory(this.ops["ListDocumentMetadataHistory"].apply(partialParams));
    }
    invokeListDocumentVersions(partialParams) {
        this.boot();
        return this.client.listDocumentVersions(this.ops["ListDocumentVersions"].apply(partialParams));
    }
    invokeModifyDocumentPermission(partialParams) {
        this.boot();
        return this.client.modifyDocumentPermission(this.ops["ModifyDocumentPermission"].apply(partialParams));
    }
    invokePutParameter(partialParams) {
        this.boot();
        return this.client.putParameter(this.ops["PutParameter"].apply(partialParams));
    }
    invokeUnlabelParameterVersion(partialParams) {
        this.boot();
        return this.client.unlabelParameterVersion(this.ops["UnlabelParameterVersion"].apply(partialParams));
    }
    invokeUpdateAssociationStatus(partialParams) {
        this.boot();
        return this.client.updateAssociationStatus(this.ops["UpdateAssociationStatus"].apply(partialParams));
    }
    invokeUpdateDocument(partialParams) {
        this.boot();
        return this.client.updateDocument(this.ops["UpdateDocument"].apply(partialParams));
    }
    invokeUpdateDocumentDefaultVersion(partialParams) {
        this.boot();
        return this.client.updateDocumentDefaultVersion(this.ops["UpdateDocumentDefaultVersion"].apply(partialParams));
    }
    invokeUpdateDocumentMetadata(partialParams) {
        this.boot();
        return this.client.updateDocumentMetadata(this.ops["UpdateDocumentMetadata"].apply(partialParams));
    }
}
exports.default = default_1;
